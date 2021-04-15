package org.reso.service.servlet.util;


public class SimpleError
{
   String error;
   static public String AUTH_REQUIRED = "auth_required";
   static public String INVALID_REQUEST = "invalid_request";


   public SimpleError(String error)
   {
      this.error = error;
   }


   public String getError()
   {
      return error;
   }
}
