package org.reso.service.servlet.util;


public class SimpleError
{
   private String error;

   // Constants for standard errors.
   static public String AUTH_REQUIRED = "auth_required";
   static public String INVALID_REQUEST = "invalid_request";


   public SimpleError(String error)
   {
      this.error = error;
   }

   // Accessor, used by ObjectMapper to serialize the error.
   public String getError()
   {
      return error;
   }
}
