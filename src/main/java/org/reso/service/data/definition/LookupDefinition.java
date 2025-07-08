package org.reso.service.data.definition;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.bson.Document;
import org.reso.service.data.meta.EnumFieldInfo;
import org.reso.service.data.meta.EnumValueInfo;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.GenericResourceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;

import static org.reso.service.data.common.CommonDataProcessing.loadAllResource;

public class LookupDefinition extends GenericResourceInfo {
   private static final Logger LOG = LoggerFactory.getLogger(LookupDefinition.class);
   private static volatile ArrayList<FieldInfo> fieldList = null;
   private static final Object fieldListLock = new Object();
   private static HashMap<String, HashMap<String, String>> lookupCache = new HashMap<>();
   private static HashMap<String, HashMap<String, String>> reverseLookupCache = new HashMap<>();
   private static final String METADATA_DISPLAYNAME = "RESO.OData.Metadata.DisplayName";
   private static final String LOOKUP = "lookup";
   private static final String LOOKUP_KEY = "LookupKey";
   private static final String LOOKUP_NAME = "LookupName";
   private static final String LOOKUP_VALUE = "LookupValue";
   private static final String STANDARD_LOOKUP_VALUE = "StandardLookupValue";    
   private static final String LEGACY_ODATA_VALUE = "LegacyODataValue";
   private static final String MODIFICATION_TIMESTAMP = "ModificationTimestamp";

   public LookupDefinition() {
      super(LOOKUP, LOOKUP);
      // Ensure fieldList is initialized through the getStaticFieldList method
      getStaticFieldList();
   }

   @Override
   public void findMongoPrimaryKey(MongoClient mongoClient) {
      this.primaryKeyName = LOOKUP_KEY;
   }

   public ArrayList<FieldInfo> getFieldList() {
      return getStaticFieldList();
   }

   public static ArrayList<FieldInfo> getStaticFieldList() {
      if (fieldList == null) {
         synchronized (fieldListLock) {
            if (fieldList == null) {
               ArrayList<FieldInfo> list = new ArrayList<>();
               
               FieldInfo fieldInfo = new FieldInfo(LOOKUP_KEY, EdmPrimitiveTypeKind.String.getFullQualifiedName());
               fieldInfo.addAnnotation("Lookup Key Field", METADATA_DISPLAYNAME);
               list.add(fieldInfo);

               fieldInfo = new FieldInfo(LOOKUP_NAME, EdmPrimitiveTypeKind.String.getFullQualifiedName());
               list.add(fieldInfo);

               fieldInfo = new FieldInfo(LOOKUP_VALUE, EdmPrimitiveTypeKind.String.getFullQualifiedName());
               list.add(fieldInfo);

               fieldInfo = new FieldInfo(STANDARD_LOOKUP_VALUE, EdmPrimitiveTypeKind.String.getFullQualifiedName());
               list.add(fieldInfo);

               fieldInfo = new FieldInfo(LEGACY_ODATA_VALUE, EdmPrimitiveTypeKind.String.getFullQualifiedName());
               list.add(fieldInfo);

               fieldInfo = new FieldInfo(MODIFICATION_TIMESTAMP, EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName());
               list.add(fieldInfo);

               fieldList = list;
            }
         }
      }
      return fieldList;
   }

   public static void loadCache(MongoClient mongoClient, LookupDefinition defn) {
      try {
         MongoCollection<Document> collection = mongoClient.getDatabase("reso").getCollection(defn.getTableName());
         MongoCursor<Document> cursor = collection.find().iterator();

         while (cursor.hasNext()) {
            Document doc = cursor.next();
            String lookupName = doc.getString(LOOKUP_NAME);
            String lookupValue = doc.getString(LOOKUP_VALUE);
            String lookupKey = doc.getString(LOOKUP_KEY);

            lookupCache.putIfAbsent(lookupName, new HashMap<>());
            lookupCache.get(lookupName).put(lookupKey, lookupValue);

            reverseLookupCache.putIfAbsent(lookupName, new HashMap<>());
            reverseLookupCache.get(lookupName).put(lookupValue, lookupKey);
         }
      } catch (Exception e) {
         LOG.error("Error loading lookup cache from MongoDB", e);
      }
   }

   public static HashMap<String, HashMap<String, String>> getLookupCache() {
      return LookupDefinition.lookupCache;
   }

   public static HashMap<String, HashMap<String, String>> getReverseLookupCache() {
      return LookupDefinition.reverseLookupCache;
   }
}
