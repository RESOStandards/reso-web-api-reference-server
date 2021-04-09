package org.reso.service.security;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Provider
{
   boolean verify(final HttpServletRequest req);

   void unauthorizedResponse(final HttpServletResponse resp);
}
