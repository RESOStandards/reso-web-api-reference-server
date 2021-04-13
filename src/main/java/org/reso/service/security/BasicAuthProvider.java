package org.reso.service.security;


import org.reso.service.servlet.RESOservlet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Base64;
import java.util.Enumeration;

public class BasicAuthProvider implements Provider
{
   public static final String AUTH_STR = "Authorization";
   public static final String BASIC_STR = "Basic";
   public static final String AUTH_SPACE = " ";
   public static final String AUTH_SEP = ":";

   public static final String AUTH_USER = "reso";
   public static final String AUTH_PASSWORD = "reso-test-password";

   private static final Logger LOG = LoggerFactory.getLogger(BasicAuthProvider.class);

   /**
    * A simple BASIC Auth with static username and password.  Purely for testing purposes.
    * @param req The HTTP Request object from the servlet.
    * @return true if authorized, false otherwise.
    */
   @Override public boolean verify(HttpServletRequest req)
   {
      Enumeration<String> headers = req.getHeaders(BasicAuthProvider.AUTH_STR);

      while (headers.hasMoreElements())
      {
         String authResp = headers.nextElement();

         if (authResp!=null && authResp.length()>0)
         {
            String[] parts = authResp.split(BasicAuthProvider.AUTH_SPACE);
            if (parts[0].equals(BasicAuthProvider.BASIC_STR) && parts.length==2)
            {
               String base64decoded = new String(Base64.getDecoder().decode(parts[1]));

               parts = base64decoded.split(BasicAuthProvider.AUTH_SEP);
               if (parts.length==2)
               {
                  String username = parts[0];
                  String password = parts[1];

                  if (username.equals(AUTH_USER) && password.equals(AUTH_PASSWORD))
                  {
                     return true;
                  }
               }
            }
         }
      }

      return false;
   }


   @Override public void unauthorizedResponse(HttpServletResponse resp)
   {
      resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
      resp.setHeader("WWW-Authenticate",BasicAuthProvider.BASIC_STR);
   }
}
