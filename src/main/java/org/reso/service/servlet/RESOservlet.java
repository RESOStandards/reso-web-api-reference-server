package org.reso.service.servlet;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.jdbc.MongoConnection;
import org.apache.olingo.commons.api.edmx.EdmxReference;
import org.apache.olingo.commons.api.http.HttpMethod;
import org.apache.olingo.server.api.*;
import org.reso.service.data.GenericEntityCollectionProcessor;
import org.reso.service.data.GenericEntityProcessor;
import org.reso.service.data.definition.LookupDefinition;
import org.reso.service.data.meta.builder.DefinitionBuilder;
import org.reso.service.data.definition.FieldDefinition;
import org.reso.service.data.meta.ResourceInfo;
import org.reso.service.edmprovider.RESOedmProvider;
import org.reso.service.security.Validator;
import org.reso.service.security.providers.BearerAuthProvider;
import org.reso.service.servlet.util.ClassLoader;
import org.reso.service.servlet.util.SimpleError;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.lang.reflect.Constructor;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;


public class RESOservlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger LOG = LoggerFactory.getLogger(RESOservlet.class);
    private static Connection connect = null;
    private static MongoClient mongoClient = null;
    private String dbType;
    private Validator validator = null;
    private OData odata = null;
    ODataHttpHandler handler = null;

    public static HashMap<String, ResourceInfo> resourceLookup = new HashMap<>();

    public static Connection getConnection() {
        return connect;
    }


    @Override
    public void init() throws ServletException {
        super.init();

        Map<String, String> env = System.getenv();
        for (String envName : env.keySet()) {
            LOG.debug(String.format("ENV VAR: %s=%s%n",
                    envName,
                    env.get(envName))
            );
        }

        this.validator = new Validator();
//      this.validator.addProvider(new BasicAuthProvider());  // We're using this for the token auth.  Only use here for easy browser testing.
        this.validator.addProvider(new BearerAuthProvider());

        String dbConnString = env.get("SQL_CONNECTION_STR");
        String dbDriverStr = env.get("SQL_DB_DRIVER");


        String definitionFile = env.get("CERT_REPORT_FILENAME");

        if (dbConnString != null) {
            String[] dbConnSplitStr = dbConnString.split(":");
            if (dbConnSplitStr.length > 1) {
                this.dbType = dbConnSplitStr[1].toLowerCase();  // should be of the form "jdbc","mysql","//192.168.1.71/reso_data_dictionary_1_7..."
                LOG.info("DB Type: " + this.dbType);
            } else LOG.info("DB String unknown form: " + dbConnString);
        }

        try {
            Class.forName(dbDriverStr).newInstance();
            LOG.debug("looking to connect to " + dbConnString);

            connect = DriverManager
                    .getConnection(dbConnString);

            LOG.info("Connected to the database!", connect);

        } catch (Exception e) {
            LOG.error("Server Error occurred in connecting to the database", e);
        }

        if (connect != null) {
            LOG.info("Connected to the database!");
        } else {
            LOG.error("Failed to make connection!");
        }

        // Set up ODATA
        this.odata = OData.newInstance();
        RESOedmProvider edmProvider = new RESOedmProvider();

        ArrayList<ResourceInfo> resources = new ArrayList<>();

        // We are going to use a custom field definition to query Fields
        FieldDefinition fieldDefinition = new FieldDefinition();
        resources.add(fieldDefinition);
        fieldDefinition.addResources(resources);
        resourceLookup.put(fieldDefinition.getResourceName(), fieldDefinition);


        // If there is a Certification metadata report file, import it for class definitions.

        if (definitionFile != null) {
            DefinitionBuilder definitionBuilder = new DefinitionBuilder(definitionFile);
            List<ResourceInfo> loadedResources = definitionBuilder.readResources();
            String syncConnStr = env.get("MONGO_SYNC_CONNECTION_STR");

            try {
                if (isMongo(connect)) {
                    mongoClient = MongoClients.create(syncConnStr);
                }
                for (ResourceInfo resource : loadedResources) {
                    // TODO: We manually define the "Field"/"Lookup" resources above, should we move that logic within the following
                    if(!(resource.getResourceName()).equals("Field") && !(resource.getResourceName()).equals("Lookup"))
                        try {
                            if(mongoClient != null)
                                resource.findMongoPrimaryKey(mongoClient);
                            else
                                resource.findPrimaryKey(connect);
                            resources.add(resource);
                            resourceLookup.put(resource.getResourceName(), resource);
                        } catch (SQLException e) {
                            LOG.error("Error with: " + resource.getResourceName() + " - " + e.getMessage());
                        }
                }
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }

        } else {
            // Get all classes with constructors with 0 parameters. This is deprecated as the Cert metadata report should work for more people.
            try {
                Class[] classList = ClassLoader.getClasses("org.reso.service.data.definition.custom");
                for (Class classProto : classList) {
                    Constructor ctor = null;
                    Constructor[] ctors = classProto.getDeclaredConstructors();
                    for (int i = 0; i < ctors.length; i++) {
                        ctor = ctors[i];
                        if (ctor.getGenericParameterTypes().length == 0)
                            break;
                    }
                    if (ctor != null) {
                        ctor.setAccessible(true);
                        ResourceInfo resource = (ResourceInfo) ctor.newInstance();

                        try {
                            resource.findPrimaryKey(connect);
                            resources.add(resource);
                            resourceLookup.put(resource.getResourceName(), resource);
                        } catch (Exception e) {
                            LOG.error("Error with: " + resource.getResourceName() + " - " + e.getMessage());
                        }
                    }
                }
            } catch (Exception e) {
                LOG.error(e.getMessage());
            }
        }


        LookupDefinition defn = new LookupDefinition();
        try {
            if(mongoClient != null)
                defn.findMongoPrimaryKey(mongoClient);
            else
                defn.findPrimaryKey(connect);
            resources.add(defn);
            resourceLookup.put(defn.getResourceName(), defn);
            LookupDefinition.loadCache(connect, defn);
        } catch (Exception e) {
            LOG.error(e.getMessage());
        }

        ServiceMetadata edm = odata.createServiceMetadata(edmProvider, new ArrayList<EdmxReference>());
        edm.getReferences();

        // create odata handler and configure it with CsdlEdmProvider and Processor
        this.handler = odata.createHandler(edm);

        GenericEntityCollectionProcessor entityCollectionProcessor = new GenericEntityCollectionProcessor(connect, dbType);
        GenericEntityProcessor entityProcessor = new GenericEntityProcessor(connect);

        this.handler.register(entityCollectionProcessor);
        this.handler.register(entityProcessor);

        for (ResourceInfo resource : resources) {
            LOG.info("Resource importing: " + resource.getResourceName());
            edmProvider.addDefinition(resource);

            entityCollectionProcessor.addResource(resource, resource.getResourceName());
            entityProcessor.addResource(resource, resource.getResourceName());
        }

        // We want to pre-load ALL the metadata.  The best way is to do a $metadata request.
        ODataRequest request = new ODataRequest();
        request.setRawODataPath("/$metadata");
        request.setMethod(HttpMethod.GET);
        request.setProtocol("HTTP/1.1");
        this.handler.process(request);
    }


    protected void service(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {

        // Due to order of operations, the unauthorized response won't be called unless the verification fails.
        if (!this.validator.verify(req) && this.validator.unauthorizedResponse(resp)) {
            SimpleError error = new SimpleError(SimpleError.AUTH_REQUIRED);
            ObjectMapper objectMapper = new ObjectMapper();

            PrintWriter out = resp.getWriter();
            out.println(objectMapper.writeValueAsString(error));
            out.flush();
            return;
        }

        try {
            this.handler.process(req, resp);

        } catch (RuntimeException e) {
            LOG.error("Server Error occurred in RESOservlet", e);
            throw new ServletException(e);
        }
    }

    public static boolean isMongo(Connection connect) throws SQLException {
        DatabaseMetaData metadata = connect.getMetaData();
        return metadata.getDatabaseProductName().toLowerCase().contains("mongodb");
    }
}