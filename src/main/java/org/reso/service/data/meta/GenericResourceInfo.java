package org.reso.service.data.meta;


import java.util.ArrayList;

public class GenericResourceInfo extends ResourceInfo
{
   ArrayList<FieldInfo> fieldList = new ArrayList<>();

   public GenericResourceInfo(String resourceName, String tableName)
   {
      this.resourceName = resourceName;
      this.resourcesName = resourceName;
      this.tableName = tableName;
   }

   // Accessor
   public ArrayList<FieldInfo> getFieldList()
   {
      return fieldList;
   }

}
