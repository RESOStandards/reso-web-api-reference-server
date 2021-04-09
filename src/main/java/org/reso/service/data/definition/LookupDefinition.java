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
      LookupDefinition.fieldList = list;
      FieldInfo fieldInfo = null;

      fieldInfo = new FieldInfo("LookupKey", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      fieldInfo.addAnnotation("Lookup Key Field", "RESO.OData.Metadata.StandardName");
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("LookupName", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add( fieldInfo);

      fieldInfo = new FieldInfo("LookupValue", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("StandardLookupValue", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("LegacyOdataValue", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("ModificationTimestamp", EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName());
      list.add(fieldInfo);

      return LookupDefinition.fieldList;
   }

}
