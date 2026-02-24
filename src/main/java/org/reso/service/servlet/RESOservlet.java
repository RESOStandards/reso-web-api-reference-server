package org.reso.service.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
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
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;

public class RESOservlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger LOG = LoggerFactory.getLogger(RESOservlet.class);
    private static MongoClient mongoClient = null;
    private Validator validator = null;
    private OData odata = null;
    ODataHttpHandler handler = null;

    public static HashMap<String, ResourceInfo> resourceLookup = new HashMap<>();

    public static MongoClient getMongoClient() {
        return mongoClient;
    }

    @Override
    public void init() throws ServletException {
        super.init();

        Map<String, String> env = System.getenv();
        for (String envName : env.keySet()) {
            LOG.debug(String.format("ENV VAR: %s=%s%n",
                    envName,
                    env.get(envName)));
        }

        this.validator = new Validator();
        this.validator.addProvider(new BearerAuthProvider());

        String mongoConnStr = env.getOrDefault("SPRING_DATA_MONGODB_URI", "mongodb://mongo-db:27017/reso");
        LOG.info("Connecting to MongoDB with URI: {}", mongoConnStr.replaceAll(":[^/]+@", ":****@"));

        try {
            // Initialize MongoDB client
            mongoClient = MongoClients.create(mongoConnStr);
            LOG.info("Connected to MongoDB!");
        } catch (Exception e) {
            LOG.error("Server Error occurred in connecting to MongoDB", e);
            throw new ServletException("Failed to connect to MongoDB", e);
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

        // If there is a Certification metadata report file, import it for class
        // definitions.
        String definitionFile = env.get("CERT_REPORT_FILENAME");
        if (definitionFile != null) {
            DefinitionBuilder definitionBuilder = new DefinitionBuilder(definitionFile);
            List<ResourceInfo> loadedResources = definitionBuilder.readResources();

            for (ResourceInfo resource : loadedResources) {
                if (!(resource.getResourceName()).equals("Field") && !(resource.getResourceName()).equals("Lookup")) {
                    try {
                        resource.findMongoPrimaryKey(mongoClient);
                        resources.add(resource);
                        resourceLookup.put(resource.getResourceName(), resource);
                    } catch (Exception e) {
                        LOG.error("Error with: " + resource.getResourceName() + " - " + e.getMessage());
                    }
                }
            }
        } else {
            // Get all classes with constructors with 0 parameters
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
                            resource.findMongoPrimaryKey(mongoClient);
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
            defn.findMongoPrimaryKey(mongoClient);
            resources.add(defn);
            resourceLookup.put(defn.getResourceName(), defn);
            LookupDefinition.loadCache(mongoClient, defn);
        } catch (Exception e) {
            LOG.error(e.getMessage());
        }

        ServiceMetadata edm = odata.createServiceMetadata(edmProvider, new ArrayList<EdmxReference>());
        edm.getReferences();

        // create odata handler and configure it with CsdlEdmProvider and Processor
        this.handler = odata.createHandler(edm);

        GenericEntityCollectionProcessor entityCollectionProcessor = new GenericEntityCollectionProcessor(mongoClient);
        GenericEntityProcessor entityProcessor = new GenericEntityProcessor(mongoClient);

        this.handler.register(entityCollectionProcessor);
        this.handler.register(entityProcessor);

        for (ResourceInfo resource : resources) {
            LOG.info("Resource importing: " + resource.getResourceName());
            edmProvider.addDefinition(resource);

            entityCollectionProcessor.addResource(resource, resource.getResourceName());
            entityProcessor.addResource(resource, resource.getResourceName());
        }

        // We want to pre-load ALL the metadata. The best way is to do a $metadata
        // request.
        ODataRequest request = new ODataRequest();
        request.setRawODataPath("/$metadata");
        request.setMethod(HttpMethod.GET);
        request.setProtocol("HTTP/1.1");
        this.handler.process(request);
    }

    protected void service(final HttpServletRequest req, final HttpServletResponse resp)
            throws ServletException, IOException {
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
}