package org.reso.service.data.meta;

import org.apache.olingo.commons.api.data.Entity;
import org.apache.olingo.commons.api.data.Property;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.reso.service.data.common.CommonDataProcessing;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static org.reso.service.servlet.RESOservlet.resourceLookup;
import static org.reso.service.servlet.RESOservlet.getMongoClient;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import org.bson.Document;

public class EnumFieldInfo extends FieldInfo {
   private String lookupName;
   private final ArrayList<EnumValueInfo> values = new ArrayList<>();
   private final HashMap<String, Long> valueLookup = new HashMap<>();

   private static final Logger LOG = LoggerFactory.getLogger(EnumFieldInfo.class);
   private boolean isFlags = false;

   private static final String LOOKUP_COLUMN_NAME = "LookupValue";

   public EnumFieldInfo(String fieldName, FullQualifiedName type) {
      super(fieldName, type);
   }

   public void addValue(EnumValueInfo value) {
      values.add(value);
   }

   private void loadValues() {
      ResourceInfo resource = resourceLookup.get("Lookup");
      if (resource != null) {
         MongoClient mongoClient = getMongoClient();
         try {
            MongoCollection<Document> collection = mongoClient.getDatabase("reso")
                  .getCollection(resource.getTableName());
            MongoCursor<Document> cursor = collection.find(new Document("LookupName", lookupName)).iterator();

            while (cursor.hasNext()) {
               Document doc = cursor.next();
               String val = doc.getString("LookupValue");
               values.add(new EnumValueInfo(val));
            }
         } catch (Exception e) {
            LOG.error("Error in finding Lookup values for " + lookupName + ": " + e.getMessage());
         }
      }
   }

   public ArrayList<EnumValueInfo> getValues() {
      if (values.size() == 0) {
         EnumValueInfo sampleValue = new EnumValueInfo("Sample" + lookupName + "EnumValue");
         values.add(sampleValue);
      }

      return values;
   }

   public void setLookupName(String name) {
      lookupName = name;
   }

   public FullQualifiedName getType() {
      if (values.size() == 0) {
         getValues();
      }
      if (values.size() > 0) {
         return new FullQualifiedName("org.reso.metadata.enums." + lookupName);
      }

      return super.getType();
   }

   /**
    * Accessor for lookupName
    * 
    * @return
    */
   public String getLookupName() {
      return lookupName;
   }

   public void setFlags() {
      isFlags = true;
   }

   public boolean isFlags() {
      return isFlags;
   }

   public String getKeyByIndex(int index) {
      if (isFlags) {
         index = Long.numberOfTrailingZeros(index);
      }
      return values.get(index).getKey(lookupName);
   }

   public long[] expandFlags(long flags) {
      ArrayList<Long> indexes = new ArrayList<>();
      for (Map.Entry<String, Long> entry : valueLookup.entrySet()) {
         if ((flags & entry.getValue()) == entry.getValue()) {
            indexes.add((Long) entry.getValue());
         }
      }
      return indexes.stream().mapToLong(i -> i).toArray();
   }

   public Object getValueOf(String enumStringValue) {
      Object value = valueLookup.get(enumStringValue);
      if (value == null) {
         long bitValue = 1;
         for (int i = 0; i < values.size(); i++) {
            EnumValueInfo val = values.get(i);
            if (isFlags) {
              valueLookup.put(val.getValue(), bitValue);
              bitValue *= 2;
            } else {
              valueLookup.put(val.getValue(), (long) i);
            }
         }
         value = valueLookup.get(enumStringValue);
      }

      return value;
   }
}
