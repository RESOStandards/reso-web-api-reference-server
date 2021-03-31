package org.reso.service.servlet;


import org.apache.olingo.commons.api.edmx.EdmxReference;
import org.apache.olingo.server.api.OData;
import org.apache.olingo.server.api.ODataHttpHandler;
import org.apache.olingo.server.api.ServiceMetadata;
import org.reso.service.data.LookupEntityCollectionProcessor;
import org.reso.service.edmprovider.LookupEdmProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.*;

public class RESOservlet extends HttpServlet
{
   private static final long   serialVersionUID = 1L;
   private static final Logger LOG              = LoggerFactory.getLogger(RESOservlet.class);

   protected void service(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {
      try {
         // create odata handler and configure it with CsdlEdmProvider and Processor
         OData odata = OData.newInstance();
         ServiceMetadata edm = odata.createServiceMetadata(new LookupEdmProvider(), new ArrayList<EdmxReference>());
         ODataHttpHandler handler = odata.createHandler(edm);
         handler.register(new LookupEntityCollectionProcessor());

         // let the handler do the work
         handler.process(req, resp);

      } catch (RuntimeException e) {
         LOG.error("Server Error occurred in ExampleServlet", e);
         throw new ServletException(e);
      }
   }
}