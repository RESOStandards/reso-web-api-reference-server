package org.reso.service.servlet;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.olingo.commons.api.edmx.EdmxReference;
import org.apache.olingo.server.api.OData;
import org.apache.olingo.server.api.ODataHttpHandler;
import org.apache.olingo.server.api.ServiceMetadata;
import org.reso.service.data.GenericEntityCollectionProcessor;
import org.reso.service.data.GenericEntityProcessor;
import org.reso.service.data.definition.LookupDefinition;
import org.reso.service.data.meta.ResourceInfo;
import org.reso.service.edmprovider.RESOedmProvider;
import org.reso.service.security.providers.BasicAuthProvider;
import org.reso.service.security.Validator;
import org.reso.service.security.providers.BearerAuthProvider;
import org.reso.service.servlet.util.ClassLoader;
import org.reso.service.servlet.util.SimpleError;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.lang.reflect.Constructor;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.*;


public class RESOservlet extends HttpServlet
{
   private static final long   serialVersionUID = 1L;
   private static final Logger     LOG     = LoggerFactory.getLogger(RESOservlet.class);
   private static Connection connect = null;
   private String dbType;
   private Validator  validator = null;
   private OData odata = null;
   ODataHttpHandler handler = null;

   public static HashMap<String,ResourceInfo> resourceLookup = new HashMap<>();

   public static Connection getConnection()
   {
      return connect;
   }


   @Override public void init() throws ServletException
   {
      super.init();

      Map<String, String> env = System.getenv();
      for (String envName : env.keySet()) {
         LOG.debug( String.format("ENV VAR: %s=%s%n",
                           envName,
                           env.get(envName))
         );
      }

      this.validator = new Validator();
//      this.validator.addProvider(new BasicAuthProvider());  // We're using this for the token auth.  Only use here for easy browser testing.
      this.validator.addProvider(new BearerAuthProvider());

      String dbHost = env.get("SQL_HOST");
      String dbUser = env.get("SQL_USER");
      String dbPwd = env.get("SQL_PASSWORD");
      String dbConnString = env.get("SQL_CONNECTION_STR");
      String dbDriverStr = env.get("SQL_DB_DRIVER");

      if (dbConnString!=null)
      {
         String[] dbConnSplitStr = dbConnString.split(":");
         if (dbConnSplitStr.length>1)
         {
            this.dbType = dbConnSplitStr[1].toLowerCase();  // should be of the form "jdbc","mysql","//192.168.1.71/reso_data_dictionary_1_7..."
            LOG.info("DB Type: "+this.dbType);
         }
         else LOG.info("DB String unknown form: "+dbConnString);
      }
      LOG.info("DB String empty");

      try {
         Class.forName(dbDriverStr).newInstance();
         LOG.debug("looking to connect to " + dbConnString);

         if (this.dbType.equals("mysql"))
         {

            connect = DriverManager
                     .getConnection(dbConnString);
         }
         else if (this.dbType.equals("postgresql"))
         {
            connect = DriverManager
                     .getConnection(dbConnString,dbUser,dbPwd);
         }


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

      // Get all classes with constructors with 0 parameters.  LookupDefinition should not work.
      try
      {
         Class[] classList = ClassLoader.getClasses("org.reso.service.data.definition");
         for (Class classProto: classList)
         {
            Constructor ctor = null;
            Constructor[] ctors = classProto.getDeclaredConstructors();
            for (int i = 0; i < ctors.length; i++) {
               ctor = ctors[i];
               if (ctor.getGenericParameterTypes().length == 0)
                  break;
            }
            if (ctor!=null)
            {
               ctor.setAccessible(true);
               ResourceInfo resource = (ResourceInfo)ctor.newInstance();
               resources.add(resource);
               resourceLookup.put(resource.getResourceName(), resource);

               resource.findPrimaryKey(this.connect);
            }
         }
      }
      catch (Exception e)
      {
         LOG.error(e.getMessage());
      }

//      ResourceInfo defn = new LookupDefinition();

      ServiceMetadata edm = odata.createServiceMetadata(edmProvider, new ArrayList<EdmxReference>());

      // create odata handler and configure it with CsdlEdmProvider and Processor
      this.handler = odata.createHandler(edm);

      GenericEntityCollectionProcessor entityCollectionProcessor = new GenericEntityCollectionProcessor(this.connect, dbType);
      GenericEntityProcessor entityProcessor = new GenericEntityProcessor(this.connect);

      this.handler.register(entityCollectionProcessor);
      this.handler.register(entityProcessor);

      for (ResourceInfo resource: resources)
      {
         LOG.info( "Resource importing: " + resource.getResourceName() );
         edmProvider.addDefinition(resource);

         entityCollectionProcessor.addResource(resource, resource.getResourceName() );
         entityProcessor.addResource(resource, resource.getResourceName() );
      }

   }


   protected void service(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {

      // Due to order of operations, the unauthorized response won't be called unless the verification fails.
      if (!this.validator.verify(req) && this.validator.unauthorizedResponse(resp))
      {
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