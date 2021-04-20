package org.reso.service.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import org.reso.service.security.providers.BearerAuthProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.http.*;

import org.reso.service.servlet.util.Token;
import org.reso.service.servlet.util.SimpleError;


public class TokenServlet extends HttpServlet
{
   public static final String ID_HEADER = "client_id";
   public static final String SECRET_HEADER = "client_secret";

   public static final String AUTH_CLIENT_ID = "reso";
   public static final String AUTH_CLIENT_SECRET = "secret";


   private static final Logger     LOG     = LoggerFactory.getLogger(HttpServlet.class);

   private String getHeader(final HttpServletRequest req, String header)
   {
      Enumeration<String> headers = req.getHeaders(header);

      while (headers.hasMoreElements())
      {
         return headers.nextElement();
      }

      return null;
   }

   private String getField(final HttpServletRequest req, String name)
   {
      String param = req.getParameter(name);
      if (param==null)
      {
         return getHeader(req,name);
      }

      return param;
   }

   protected void service(final HttpServletRequest req, final HttpServletResponse response) throws ServletException, IOException {

      String client_id = getField(req, TokenServlet.ID_HEADER);
      String client_secret = getField(req, TokenServlet.SECRET_HEADER);

      String jsonString = null;

      PrintWriter out = response.getWriter();
      response.setContentType("application/json");
      response.setCharacterEncoding("UTF-8");

      ObjectMapper objectMapper = new ObjectMapper();

      if (client_id!=null && client_secret!=null && client_id.equals(TokenServlet.AUTH_CLIENT_ID)  && client_secret.equals(TokenServlet.AUTH_CLIENT_SECRET))
      {
         Token token = new Token(BearerAuthProvider.AUTH_BEARER_TOKEN,"bearer","create");

         jsonString = objectMapper.writeValueAsString(token);
      }
      else
      {
         response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

         SimpleError error = new SimpleError(SimpleError.INVALID_REQUEST);

         jsonString = objectMapper.writeValueAsString(error);
      }

      out.print(jsonString);
      out.flush();
   }

}
