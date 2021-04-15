package org.reso.service.security.providers;


import org.reso.service.security.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;

public class BearerAuthProvider implements Provider
{
   public static final String AUTH_STR = "Authorization";
   public static final String BEARER_STR = "Bearer";
   public static final String AUTH_SPACE = " ";

   public static final String AUTH_BEARER_TOKEN = "reso-test-token";

   private static final Logger LOG = LoggerFactory.getLogger(BearerAuthProvider.class);

   /**
    * A simple BASIC Auth with static username and password.  Purely for testing purposes.
    * @param req The HTTP Request object from the servlet.
    * @return true if authorized, false otherwise.
    */
   @Override public boolean verify(HttpServletRequest req)
   {
      Enumeration<String> headers = req.getHeaders(BearerAuthProvider.AUTH_STR);

      while (headers.hasMoreElements())
      {
         String authResp = headers.nextElement();

         if (authResp!=null && authResp.length()>0)
         {
            String[] parts = authResp.split(BearerAuthProvider.AUTH_SPACE);
            if (parts[0].equals(BearerAuthProvider.BEARER_STR) && parts.length==2)
            {
               String token = parts[1];

               if (token.equals(BearerAuthProvider.AUTH_BEARER_TOKEN))
               {
                  return true;
               }
            }
         }
      }

      return false;
   }


   @Override public void unauthorizedResponse(HttpServletResponse resp)
   {
      resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
      resp.setHeader("WWW-Authenticate",BearerAuthProvider.BEARER_STR);
   }
}

