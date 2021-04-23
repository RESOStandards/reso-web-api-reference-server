package org.reso.service.servlet;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.olingo.commons.api.edmx.EdmxReference;
import org.apache.olingo.server.api.OData;
import org.apache.olingo.server.api.ODataHttpHandler;
import org.apache.olingo.server.api.ServiceMetadata;
import org.reso.service.data.GenericEntityCollectionProcessor;
import org.reso.service.data.definition.LookupDefinition;
import org.reso.service.data.meta.ResourceInfo;
import org.reso.service.edmprovider.RESOedmProvider;
import org.reso.service.security.providers.BasicAuthProvider;
import org.reso.service.security.Validator;
import org.reso.service.security.providers.BearerAuthProvider;
import org.reso.service.servlet.util.SimpleError;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.ArrayList;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.*;


public class RESOservlet extends HttpServlet
{
   private static final long   serialVersionUID = 1L;
   private static final Logger     LOG     = LoggerFactory.getLogger(RESOservlet.class);
   private Connection connect = null;
   private Validator  validator = null;
   private OData odata = null;
   ODataHttpHandler handler = null;


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

      String mysqlHost = env.get("SQL_HOST");
      String mysqlUser = env.get("SQL_USER");
      String mysqlPwd = env.get("SQL_PASSWORD");

      try {
         Class.forName("com.mysql.cj.jdbc.Driver").newInstance();

         LOG.info("looking to connect to jdbc:mysql://"+mysqlHost+"/reso_data_dictionary_1_7");

         connect = DriverManager
                  .getConnection("jdbc:mysql://"+mysqlHost+"/reso_data_dictionary_1_7?autoReconnect=true&maxReconnects=4&"
                                 + "user="+mysqlUser+"&password="+mysqlPwd);


      } catch (Exception e) {
         LOG.error("Server Error occurred in connecting to the database", e);
      }

      // Set up ODATA
      this.odata = OData.newInstance();
      RESOedmProvider edmProvider = new RESOedmProvider();

      ResourceInfo defn = new LookupDefinition();
      edmProvider.addDefinition(defn);

      ServiceMetadata edm = odata.createServiceMetadata(edmProvider, new ArrayList<EdmxReference>());

      // create odata handler and configure it with CsdlEdmProvider and Processor
      this.handler = odata.createHandler(edm);

      GenericEntityCollectionProcessor lookupEntityCollectionProcessor = new GenericEntityCollectionProcessor(this.connect, defn);

      this.handler.register(lookupEntityCollectionProcessor);

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