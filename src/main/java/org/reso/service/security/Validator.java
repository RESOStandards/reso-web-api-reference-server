package org.reso.service.security;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class Validator
{
   ArrayList<Provider> providers = new ArrayList<>();

   public Validator()
   {
   }

   public void addProvider(Provider provider)
   {
      providers.add(provider);
   }

   public boolean verify(HttpServletRequest req)
   {
      for (Provider provider: this.providers)
      {
         if (provider.verify(req))
         {
            return true;
         }
      }
      return false;
   }

   public boolean unauthorizedResponse(HttpServletResponse resp)
   {
      if (providers.size()>0)
      {
         providers.get(0).unauthorizedResponse(resp);
         return true;
      }

      return false;
   }
}
