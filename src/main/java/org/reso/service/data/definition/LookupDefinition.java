package org.reso.service.data.definition;


import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.provider.CsdlProperty;
import org.reso.service.data.meta.EnumFieldInfo;
import org.reso.service.data.meta.EnumValueInfo;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;

import java.util.ArrayList;

public class LookupDefinition extends ResourceInfo
{
   private static ArrayList<FieldInfo> fieldList = null;

   public LookupDefinition()
   {
      this.tableName = "lookup";
      this.resourcesName = "Lookup";
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
      fieldInfo.addAnnotation("Lookup Key Field", "RESO.OData.Metadata.DisplayName");
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

      //// Enum Test code
      EnumFieldInfo enumFieldInfo = new EnumFieldInfo("EnumTest", EdmPrimitiveTypeKind.Int64.getFullQualifiedName());

      /**
      enumFieldInfo.setLookupName("EnumTest");
      //enumFieldInfo.setCollection();
      enumFieldInfo.setFlags();
      EnumValueInfo enumValue = new EnumValueInfo("Awnings");
      enumFieldInfo.addValue(enumValue);
      enumValue = new EnumValueInfo("Boatslip");
      enumFieldInfo.addValue(enumValue);
      list.add(enumFieldInfo);

      // END Test code
      /**/


      return LookupDefinition.fieldList;
   }

}
