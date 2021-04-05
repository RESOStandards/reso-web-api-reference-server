package org.reso.service.data.definition;


import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.reso.service.data.LookupEntityCollectionProcessor;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;

import java.util.ArrayList;

public class LookupDefinition extends ResourceInfo
{
   private static ArrayList<FieldInfo> fieldList = null;

   public LookupDefinition()
   {
      this.tableName = "lookup";
      this.resourcesName = "Lookups";
      this.resourceName = "Lookup";
   }

   public ArrayList<FieldInfo> getFieldList()
   {
      return LookupDefinition.getStaticFieldList();
   }

   public static ArrayList<FieldInfo> getStaticFieldList()
   {
      if (null!= LookupDefinition.fieldList)
      {
         return LookupDefinition.fieldList;
      }

      ArrayList<FieldInfo> list = new ArrayList<FieldInfo>();
      list.add(new FieldInfo("LookupKey", EdmPrimitiveTypeKind.String.getFullQualifiedName()));
      list.add(new FieldInfo("LookupName", EdmPrimitiveTypeKind.String.getFullQualifiedName()));
      list.add(new FieldInfo("LookupValue", EdmPrimitiveTypeKind.String.getFullQualifiedName()));
      list.add(new FieldInfo("StandardLookupValue", EdmPrimitiveTypeKind.String.getFullQualifiedName()));
      list.add(new FieldInfo("LegacyOdataValue", EdmPrimitiveTypeKind.String.getFullQualifiedName()));
      list.add(new FieldInfo("ModificationTimestamp", EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName()));

      LookupDefinition.fieldList = list;

      return LookupDefinition.fieldList;
   }

}
