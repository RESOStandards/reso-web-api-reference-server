package org.reso.service.servlet;


import org.apache.olingo.commons.api.edmx.EdmxReference;
import org.apache.olingo.server.api.OData;
import org.apache.olingo.server.api.ODataHttpHandler;
import org.apache.olingo.server.api.ServiceMetadata;
import org.reso.service.data.GenericEntityCollectionProcessor;
import org.reso.service.data.definition.LookupDefinition;
import org.reso.service.data.meta.ResourceInfo;
import org.reso.service.edmprovider.RESOedmProvider;
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
   private              Connection connect = null;


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
   }


   protected void service(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {
      try {
         // create odata handler and configure it with CsdlEdmProvider and Processor
         OData odata = OData.newInstance();
         RESOedmProvider edmProvider = new RESOedmProvider();

         ResourceInfo defn = new LookupDefinition();
         edmProvider.addDefinition(defn);

         ServiceMetadata edm = odata.createServiceMetadata(edmProvider, new ArrayList<EdmxReference>());
         ODataHttpHandler handler = odata.createHandler(edm);

         GenericEntityCollectionProcessor lookupEntityCollectionProcessor = new GenericEntityCollectionProcessor(this.connect, defn);

         handler.register(lookupEntityCollectionProcessor);

         // let the handler do the work
         handler.process(req, resp);

      } catch (RuntimeException e) {
         LOG.error("Server Error occurred in RESOservlet", e);
         throw new ServletException(e);
      }
   }
}