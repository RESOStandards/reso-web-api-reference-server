package org.reso.service.data.definition;


import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.provider.CsdlProperty;
import org.reso.service.data.meta.EnumFieldInfo;
import org.reso.service.data.meta.EnumValueInfo;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;

import static org.reso.service.data.common.CommonDataProcessing.loadAllResource;

public class LookupDefinition extends ResourceInfo
{
   private static ArrayList<FieldInfo> fieldList = null;
   private static HashMap<String, HashMap<String,Object>> lookupCache = new HashMap<>();
   private static HashMap<String, HashMap<String,String>> reverseLookupCache = new HashMap<>();
   private static final String METADATA_DISPLAYNAME = "RESO.OData.Metadata.DisplayName";
   private static final String LOOKUP = "lookup";
   private static final String LOOKUP_KEY = "LookupKey";
   private static final String LOOKUP_NAME = "LookupName";
   private static final String LOOKUP_VALUE = "LookupValue";
   private static final String STANDARD_LOOKUP_VALUE = "StandardLookupValue";    
   private static final String LEGACY_ODATA_VALUE = "LegacyOdataValue";
   private static final String MODIFICATION_TIMESTAMP = "ModificationTimestamp";

   public LookupDefinition()
   {
      this.tableName = LOOKUP;
      this.resourcesName = LOOKUP;
      this.resourceName = LOOKUP;
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

      fieldInfo = new FieldInfo(LOOKUP_KEY, EdmPrimitiveTypeKind.String.getFullQualifiedName());
      fieldInfo.addAnnotation("Lookup Key Field", METADATA_DISPLAYNAME);
      list.add(fieldInfo);

      fieldInfo = new FieldInfo(LOOKUP_NAME, EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add( fieldInfo);

      fieldInfo = new FieldInfo(LOOKUP_VALUE, EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add(fieldInfo);

      fieldInfo = new FieldInfo(STANDARD_LOOKUP_VALUE, EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add(fieldInfo);

      fieldInfo = new FieldInfo(LEGACY_ODATA_VALUE, EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add(fieldInfo);

      fieldInfo = new FieldInfo(MODIFICATION_TIMESTAMP, EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName());
      list.add(fieldInfo);

      return LookupDefinition.fieldList;
   }

   public static void loadCache(Connection connect, LookupDefinition resource)
   {
      ArrayList<HashMap<String, Object>> lookups = loadAllResource(connect, resource);
      String pKey = resource.getPrimaryKeyName();
      for (HashMap<String, Object> lookup: lookups)
      {
         HashMap<String,String> reverseKey = reverseLookupCache.get(lookup.get(LOOKUP_NAME).toString());
         if(reverseKey==null)
         {
            reverseKey =new HashMap<>();
                    reverseLookupCache.put(lookup.get(LOOKUP_NAME).toString(),reverseKey);
         }
         reverseKey.put(lookup.get(LEGACY_ODATA_VALUE).toString(),lookup.get(LOOKUP_KEY).toString());
         lookupCache.put(lookup.get(pKey).toString(),lookup);
      }
   }

   public static HashMap<String, HashMap<String,Object>> getLookupCache()
   {
      return LookupDefinition.lookupCache;
   }

    public static HashMap<String, HashMap<String,String>> getReverseLookupCache()
    {
        return LookupDefinition.reverseLookupCache;
    }
}
