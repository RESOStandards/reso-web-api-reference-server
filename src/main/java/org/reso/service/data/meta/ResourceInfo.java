package org.reso.service.data.meta;


import org.apache.olingo.commons.api.edm.FullQualifiedName;

import java.util.ArrayList;

public class ResourceInfo
{
   protected String tableName;
   protected String resourceName;
   protected String resourcesName;
   protected FullQualifiedName fqn;

   /**
    * Accessors
    */

   public String getTableName()
   {
      return tableName;
   }

   public String getResourcesName()
   {
      return resourcesName;
   }

   public String getResourceName()
   {
      return resourceName;
   }

   public ArrayList<FieldInfo> getFieldList()
   {
      return null;
   }

   public FullQualifiedName getFqn(String namespace)
   {
      if (this.fqn==null)
         this.fqn = new FullQualifiedName(namespace, getResourceName());

      return this.fqn;
   }

}
