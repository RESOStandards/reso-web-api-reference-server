package org.reso.service.data.common;

import org.apache.olingo.commons.api.data.*;
import org.apache.olingo.commons.api.edm.EdmEntityType;
import org.apache.olingo.commons.api.edm.EdmNavigationProperty;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.apache.olingo.commons.api.ex.ODataRuntimeException;
import org.bson.Document;
import org.reso.service.data.definition.LookupDefinition;
import org.reso.service.data.meta.*;
import org.reso.service.data.mongodb.MongoDBManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.format.DateTimeParseException;
import java.util.*;

import static org.reso.service.servlet.RESOservlet.resourceLookup;

public class CommonDataProcessing {
   private static final Logger LOG = LoggerFactory.getLogger(CommonDataProcessing.class);
   private static HashMap<String, List<FieldInfo>> resourceEnumFields = new HashMap<>();

   /**
    * This function will return the Enum fields for a given resource.
    * It returns from the cache if found, otherwise it finds the Enum fields from
    * the Field list and caches it for later use.
    * 
    * @param resource
    * @return List<FieldInfo> The Enum fields' FieldInfo values
    */
   public static List<FieldInfo> gatherEnumFields(ResourceInfo resource) {
      String resourceName = resource.getResourceName();
      List<FieldInfo> enumFields = CommonDataProcessing.resourceEnumFields.get(resourceName);

      if (enumFields != null) {
         return enumFields;
      }

      enumFields = new ArrayList<>();

      ArrayList<FieldInfo> fieldList = resource.getFieldList();
      for (FieldInfo field : fieldList) {
         if (field instanceof EnumFieldInfo) {
            enumFields.add(field);
         }
      }

      // Put it in the cache
      CommonDataProcessing.resourceEnumFields.put(resourceName, enumFields);

      return enumFields;
   }

   /**
    * This will return the value for the field from the result set from the data
    * source.
    * 
    * @param field     The field metadata
    * @param resultSet The data source row
    * @return A Java Object representing the value. It can be anything, but should
    *         be a simple representation for ease of manipulating.
    * @throws SQLException in case of SQL error from the data source
    */
   public static Object getFieldValueFromRow(FieldInfo field, ResultSet resultSet) throws SQLException {
      String fieldName = field.getFieldName();
      Object value = null;
      try {
         FullQualifiedName fieldType = field.getType();
         if (field.getType().equals(EdmPrimitiveTypeKind.String.getFullQualifiedName())) {
            value = resultSet.getString(fieldName);
            if (field.isCollection()) {
               String str = ((String) value).replaceAll("\\[|\\]|\"", "");
               if (str.isEmpty())
                  value = new ArrayList<>();
               else {
                  String[] values = Arrays.stream(str.split(",")).map(String::trim).toArray(String[]::new);
                  value = Arrays.asList(values);
               }
            }
         } else if (fieldType.equals(EdmPrimitiveTypeKind.Boolean.getFullQualifiedName())) {
            value = resultSet.getBoolean(fieldName);
         } else if (fieldType.equals(EdmPrimitiveTypeKind.Decimal.getFullQualifiedName())) {
            value = resultSet.getBigDecimal(fieldName);
         } else if (fieldType.equals(EdmPrimitiveTypeKind.Double.getFullQualifiedName())) {
            value = resultSet.getDouble(fieldName);
         } else if (fieldType.equals(EdmPrimitiveTypeKind.Int32.getFullQualifiedName())) {
            value = resultSet.getInt(fieldName);
         } else if (fieldType.equals(EdmPrimitiveTypeKind.Int64.getFullQualifiedName())) {
            value = resultSet.getLong(fieldName);
         } else if (fieldType.equals(EdmPrimitiveTypeKind.Date.getFullQualifiedName())) {
            java.sql.Date sqlDate = resultSet.getDate(fieldName);
            if (sqlDate != null) {
               SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
               value = dateFormat.format(sqlDate);
            }
         } else if (fieldType.equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName())) {
            value = resultSet.getTimestamp(fieldName);
         } else {
            LOG.debug("Field Name: {} Field type: {}", field.getFieldName(), fieldType);
         }
      } catch (Exception e) {
         LOG.info("Field Name: {} not in schema or error processing: {}", field.getFieldName(), e.getMessage());
      }

      return value;
   }

   /**
    * Builds an Entity from the row from the Resource's data source
    * 
    * @param resultSet    Data source row result
    * @param resource     The resource we're making an Entity for
    * @param selectLookup An optional lookup of boolean flags that will only fill
    *                     in the Entity values for entries with True lookup values
    * @return An Entity representing the data source row
    * @throws SQLException in case of SQL error from the data source
    */
   public static Entity getEntityFromRow(ResultSet resultSet, ResourceInfo resource,
         HashMap<String, Boolean> selectLookup) throws SQLException {
      String primaryFieldName = resource.getPrimaryKeyName();
      ArrayList<FieldInfo> fields = resource.getFieldList();

      String lookupKey = null;
      if (selectLookup != null && selectLookup.get(primaryFieldName) != null) {
         lookupKey = resultSet.getString(primaryFieldName);
      }

      Entity ent = new Entity();

      for (FieldInfo field : fields) {
         String fieldName = field.getODATAFieldName();
         Object value = null;
         if ((selectLookup == null || selectLookup.containsKey(fieldName))) {
            value = CommonDataProcessing.getFieldValueFromRow(field, resultSet);
            if (field instanceof EnumFieldInfo) {
               LOG.error(
                     "ENUMS currently only handles by values in lookup_value table. One must Define if this uses a key a numeric value.");
            } else if (field.isCollection()) {
               if (field.getType().equals(EdmPrimitiveTypeKind.String.getFullQualifiedName())) {
                  ent.addProperty(new Property(null, fieldName, ValueType.COLLECTION_PRIMITIVE, value));
               } else {
                  ent.addProperty(new Property(null, fieldName, ValueType.ENUM, value));
               }
            } else {
               ent.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, value));
            }
         }
      }

      if (lookupKey != null) {
         ent.setId(createId(resource.getResourcesName(), lookupKey));
      }

      return ent;
   }

   /**
    * Returns a HashMap representation of a row from the data source, similar to
    * the above function.
    * Useful for building a simple Lookup cache, apart from Entities
    * 
    * @param resultSet    Data source row result
    * @param resource     The resource we're making an Entity for
    * @param selectLookup An optional lookup of boolean flags that will only fill
    *                     in the Entity values for entries with True lookup values
    * @return A HashMap representing the data source row
    * @throws SQLException in case of SQL error from the data source
    */
   public static HashMap<String, Object> getObjectFromRow(ResultSet resultSet, ResourceInfo resource,
         HashMap<String, Boolean> selectLookup) throws SQLException {
      String primaryFieldName = resource.getPrimaryKeyName();
      ArrayList<FieldInfo> fields = resource.getFieldList();
      String lookupKey = null;
      if (selectLookup != null && selectLookup.get(primaryFieldName) != null) {
         lookupKey = resultSet.getString(primaryFieldName);
      }
      HashMap<String, Object> ent = new HashMap<>();
      for (FieldInfo field : fields) {
         String fieldName = field.getODATAFieldName();
         Object value = null;
         if (selectLookup == null || selectLookup.containsKey(fieldName)) {
            value = CommonDataProcessing.getFieldValueFromRow(field, resultSet);
            ent.put(fieldName, value);
         }
      }

      if (lookupKey != null) {
         ent.put("ID", createId(resource.getResourcesName(), lookupKey));
      }

      return ent;
   }

   /**
    * For populating entity values Enums based on a potential non-sequential data
    * source query results
    * 
    * @param resultSet  Data source row result
    * @param entities   A lookup of HashMap entities to be populated with Enum
    *                   values
    * @param enumFields The Enum fields to populate for the resource
    * @throws SQLException in case of SQL error from the data source
    */
   public static void getEntityValues(ResultSet resultSet, HashMap<String, HashMap<String, Object>> entities,
         List<FieldInfo> enumFields) throws SQLException {
      String resourceRecordKey = resultSet.getString("ResourceRecordKey");
      String lookupValue = resultSet.getString("LookupValue");
      String fieldName = resultSet.getString("FieldName");

      HashMap<String, Object> enumValues = entities.get(resourceRecordKey);
      if (enumValues == null) {
         enumValues = new HashMap<>();
         entities.put(resourceRecordKey, enumValues);
      }

      @SuppressWarnings("unchecked")
      HashMap<String, HashMap<String, String>> lookupCache = LookupDefinition.getLookupCache();
      HashMap<String, String> lookup = lookupCache.get(lookupValue);

      if (lookup != null) {
         String legacyValue = lookup.get("LegacyODataValue");
         if (legacyValue != null) {
            enumValues.put(fieldName, legacyValue);
         }
      }
   }

   /**
    * Translate the Enum values from a HashMap representation to an Entity
    * representation
    * 
    * @param enumValues The HashMap representation of the Enum values from the data
    *                   source
    * @param entity     The Entity to populate with Enum values
    * @param enumFields The Enum fields on the Entity we want values for
    */
   public static void setEntityEnums(HashMap<String, Object> enumValues, Entity entity, List<FieldInfo> enumFields) {
      for (FieldInfo field : enumFields) {
         EnumFieldInfo enumField = (EnumFieldInfo) field;
         String fieldName = enumField.getFieldName();
         long totalFlagValues = 0;

         if (field.isFlags()) {
            try {
               // Builds a bit flag representation of the multiple values.
               Object flagValues = enumValues.get(fieldName);
               ArrayList<Object> flagsArray = (ArrayList<Object>) flagValues;
               for (Object flagObj : flagsArray) {
                  Long flagLong = (Long) flagObj;
                  totalFlagValues = totalFlagValues + flagLong;
               }
            } catch (Exception e) // In case of casting error. "Should not happen"
            {
               LOG.error(e.getMessage());
            }
         }

         // There's many ways to represent Enums
         if (field.isCollection()) {
            // As a Collection with bit flags
            if (field.isFlags()) {
               entity.addProperty(new Property(null, fieldName, ValueType.ENUM, totalFlagValues)); // @ToDo: This might
                                                                                                   // not be compatible
                                                                                                   // with anything...
            }
            // A collection of Primitive types
            else {
               entity.addProperty(
                     new Property(null, fieldName, ValueType.COLLECTION_PRIMITIVE, enumValues.get(fieldName)));
            }
         } else {
            // Single value, bit flag representation
            if (field.isFlags()) {
               entity.addProperty(
                     new Property(null, fieldName, ValueType.PRIMITIVE, totalFlagValues == 0 ? null : totalFlagValues));
            }
            // Single value Primitive
            else {
               entity.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, enumValues.get(fieldName)));
            }
         }
      }
   }

   /**
    * Translates an Entity to a HashMap representation
    * 
    * @param entity The Entity to turn into a HashMap
    * @return The HashMap representation of the Entity
    */
   public static HashMap<String, Object> translateEntityToMap(Entity entity) {
      HashMap<String, Object> result = new HashMap<>();

      List<Property> properties = entity.getProperties();

      for (Property property : properties) {
         String name = property.getName();
         Object value = property.getValue();
         result.put(name, value);
      }

      return result;
   }

   /**
    * Loads all Resource entries into a List of HashMap representations of the
    * entries. Useful for caching.
    * 
    * @param connect  The data source connection
    * @param resource The Resource to load
    * @return A List of HashMap representations of the entries
    */
   public static ArrayList<HashMap<String, Object>> loadAllResource(Connection connect, ResourceInfo resource) {
      ArrayList<HashMap<String, Object>> entityList = new ArrayList<>();

      try {
         Statement statement = connect.createStatement();
         String queryString = "select * from " + resource.getTableName();

         LOG.info("SQL Query: " + queryString);
         ResultSet resultSet = statement.executeQuery(queryString);

         while (resultSet.next()) {
            HashMap<String, Object> ent = CommonDataProcessing.getObjectFromRow(resultSet, resource, null);
            entityList.add(ent);
         }

         statement.close();

      } catch (Exception e) {
         LOG.error("Server Error occurred in reading " + resource.getResourceName(), e);
         return entityList;
      }

      return entityList;
   }

   /**
    * Creates an unique URI identifier for the entity / id
    * 
    * @param entitySetName Name of the Entity set
    * @param id            unique ID of the object
    * @return unique URI identifier for the entity / id
    */
   private static URI createId(String entitySetName, Object id) {
      try {
         return new URI(entitySetName + "('" + id + "')");
      } catch (URISyntaxException e) {
         throw new ODataRuntimeException("Unable to create id for entity: " + entitySetName, e);
      }
   }

   public static EntityCollection getExpandEntityCollection(Connection connect,
         EdmNavigationProperty edmNavigationProperty, Entity sourceEntity, ResourceInfo sourceResource,
         String sourceKey) throws SQLException {
      EntityCollection navigationTargetEntityCollection = new EntityCollection();
      EdmEntityType expandEdmEntityType = edmNavigationProperty.getType();
      Property expandResourceKey = sourceEntity.getProperty(edmNavigationProperty.getName() + "Key");
      boolean isCollection = edmNavigationProperty.isCollection();
      ResourceInfo expandResource = resourceLookup.get(expandEdmEntityType.getName());
      LOG.info("ResourceName: " + sourceResource.getResourceName());
      LOG.info("ResourceRecordKey: " + sourceKey);
      LOG.info("expandResource.getResourceName(): " + expandResource.getResourceName());
      if (isCollection) {
         switch (expandResource.getResourceName()) {
            case "Media":
            case "Queue":
            case "OtherPhone":
            case "SocialMedia":
            case "HistoryTransactional":
               // For these resources, we need to match both ResourceName and ResourceRecordKey
               Document query = new Document()
                     .append("ResourceName", sourceResource.getResourceName())
                     .append("ResourceRecordKey", sourceKey);

               LOG.info("=== Media Expansion Debug ===");
               LOG.info("MongoDB expand query for Media: {}", query.toJson());
               LOG.info("Source Resource Name: {}", sourceResource.getResourceName());
               LOG.info("Source Resource Key: {}", sourceKey);
               LOG.info("Collection to query: {}", expandResource.getTableName().toLowerCase());

               try {
                  // Use lowercase collection name for MongoDB
                  String collectionName = expandResource.getTableName().toLowerCase();
                  LOG.info("Using collection name: {}", collectionName);
                  MongoCollection<Document> collection = MongoDBManager.getDatabase()
                        .getCollection(collectionName);

                  LOG.info("Executing find operation on collection");
                  collection.find(query).forEach(doc -> {
                     try {
                        LOG.info("Found media document: {}", doc.toJson());
                        Entity expandEntity = CommonDataProcessing.getEntityFromDocument(doc, expandResource);
                        navigationTargetEntityCollection.getEntities().add(expandEntity);
                        LOG.info("Successfully added media document to response");
                     } catch (Exception e) {
                        LOG.error("Error processing media document: {}", e.getMessage(), e);
                     }
                  });

                  if (navigationTargetEntityCollection.getEntities().isEmpty()) {
                     LOG.info("No media documents found for query: {}", query.toJson());
                  } else {
                     LOG.info("Found {} media documents", navigationTargetEntityCollection.getEntities().size());
                  }
               } catch (Exception e) {
                  LOG.error("Error querying MongoDB for Media: {}", e.getMessage(), e);
               }
               break;

            default:
               // For other resources, use the standard primary key matching
               Document defaultQuery = new Document(sourceResource.getPrimaryKeyName(), sourceKey);
               try {
                  // Use lowercase collection name for MongoDB
                  String collectionName = expandResource.getTableName().toLowerCase();
                  MongoCollection<Document> collection = MongoDBManager.getDatabase()
                        .getCollection(collectionName);

                  collection.find(defaultQuery).forEach(doc -> {
                     try {
                        Entity expandEntity = CommonDataProcessing.getEntityFromDocument(doc, expandResource);
                        navigationTargetEntityCollection.getEntities().add(expandEntity);
                     } catch (Exception e) {
                        LOG.error("Error processing document: {}", e.getMessage());
                     }
                  });
               } catch (Exception e) {
                  LOG.error("Error querying MongoDB: {}", e.getMessage());
               }
         }
      } else {
         // For non-collection navigation properties
         Document query = new Document(expandResource.getPrimaryKeyName(), expandResourceKey.getValue().toString());
         try {
            // Use lowercase collection name for MongoDB
            String collectionName = expandResource.getTableName().toLowerCase();
            MongoCollection<Document> collection = MongoDBManager.getDatabase()
                  .getCollection(collectionName);

            collection.find(query).forEach(doc -> {
               try {
                  Entity expandEntity = CommonDataProcessing.getEntityFromDocument(doc, expandResource);
                  navigationTargetEntityCollection.getEntities().add(expandEntity);
               } catch (Exception e) {
                  LOG.error("Error processing document: {}", e.getMessage());
               }
            });
         } catch (Exception e) {
            LOG.error("Error querying MongoDB: {}", e.getMessage());
         }
      }

      return navigationTargetEntityCollection;
   }

   public static Entity getEntityFromDocument(Document doc, ResourceInfo resource) {
      Entity entity = new Entity();
      String primaryFieldName = resource.getPrimaryKeyName();
      String lookupKey = null;

      for (FieldInfo field : resource.getFieldList()) {
         String fieldName = field.getODATAFieldName();
         Object value = getFieldValueFromDocument(field, doc);

         if (primaryFieldName != null && primaryFieldName.equals(field.getFieldName())) {
            lookupKey = value != null ? value.toString() : null;
         }

         if (field.isCollection()) {
            entity.addProperty(new Property(null, fieldName, ValueType.COLLECTION_PRIMITIVE, value));
         } else if (field.getType().equals(EdmPrimitiveTypeKind.Date.getFullQualifiedName())) {
            // Special handling for Edm.Date type
            // Creating property for Edm.Date field
            if (value != null) {
               try {
                  // Ensure the value is in the correct format
                  SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                  dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
                  dateFormat.setLenient(false);

                  Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("UTC"));

                  if (value instanceof String) {
                     // Parsing string date for field
                     Date parsedDate = dateFormat.parse((String) value);
                     cal.setTime(parsedDate);
                  } else if (value instanceof Date) {
                     // Converting Date to Calendar for field
                     cal.setTime((Date) value);
                  } else {
                     // Unexpected value type for Edm.Date field
                     value.getClass().getName();
                     throw new ODataRuntimeException("Invalid value type for field " + fieldName);
                  }

                  // Normalize to midnight UTC
                  cal.set(Calendar.HOUR_OF_DAY, 0);
                  cal.set(Calendar.MINUTE, 0);
                  cal.set(Calendar.SECOND, 0);
                  cal.set(Calendar.MILLISECOND, 0);

                  // Create a java.sql.Date which is more appropriate for Edm.Date
                  java.sql.Date sqlDate = new java.sql.Date(cal.getTimeInMillis());
                  entity.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, sqlDate));
               } catch (Exception e) {
                  throw new ODataRuntimeException(
                        "Invalid date format for field " + fieldName + ". Expected format: yyyy-MM-dd");
               }
            } else {
               LOG.debug("Setting null date property for field: {}", fieldName);
               entity.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, null));
            }
         } else {
            entity.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, value));
         }
      }

      if (lookupKey != null) {
         entity.setId(createId(resource.getResourcesName(), lookupKey));
      }

      return entity;
   }

   private static Object getFieldValueFromDocument(FieldInfo field, Document doc) {
      String fieldName = field.getFieldName();
      Object value = doc.get(fieldName);

      if (value == null) {
         return null;
      }

      if (field instanceof EnumFieldInfo) {
         @SuppressWarnings("unchecked")
         HashMap<String, HashMap<String, String>> lookupCache = LookupDefinition.getLookupCache();
         HashMap<String, String> lookup = lookupCache.get(value);

         if (lookup == null) {
            return value;
         }

         return lookup.get("LegacyODataValue");
      }

      // Handle Edm.Date type fields
      if (field.getType().equals(EdmPrimitiveTypeKind.Date.getFullQualifiedName())) {

         if (value == null) {
            return null;
         }

         SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
         dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
         dateFormat.setLenient(false);

         try {
            String result;
            if (value instanceof Date) {
               // "Converting Date object to string for field
               // Convert to UTC midnight for consistent date handling
               Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
               cal.setTime((Date) value);
               cal.set(Calendar.HOUR_OF_DAY, 0);
               cal.set(Calendar.MINUTE, 0);
               cal.set(Calendar.SECOND, 0);
               cal.set(Calendar.MILLISECOND, 0);
               result = dateFormat.format(cal.getTime());
            } else if (value instanceof String) {
               // "Validating string date format for field
               // Parse to validate the format
               Date parsedDate = dateFormat.parse((String) value);
               // Format back to ensure consistent format
               result = dateFormat.format(parsedDate);
            } else {
               // LOG.error("Unexpected value type for Edm.Date field
               throw new ODataRuntimeException(
                     "Invalid value type for field " + fieldName + ". Expected Date or String in yyyy-MM-dd format");
            }
            // Successfully processed date field: {} with result
            return result;
         } catch (Exception e) {
            LOG.error("Error processing date field {}: {} - Error: {}", fieldName, value, e.getMessage());
            throw new ODataRuntimeException(
                  "Invalid date format for field " + fieldName + ". Expected format: yyyy-MM-dd");
         }
      }

      // Handle DateTimeOffset fields
      if (field.getType().equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName())) {
         if (value instanceof Date) {
            return value;
         } else if (value instanceof String) {
            try {
               return Date.from(Instant.parse((String) value));
            } catch (DateTimeParseException e) {
               LOG.error("Invalid datetime format for field {}: {}", fieldName, value);
               return null;
            }
         }
      }

      return value;
   }

   public static void getEntityValues(Document doc, HashMap<String, HashMap<String, Object>> entities,
         List<FieldInfo> enumFields) {
      String resourceRecordKey = doc.getString("ResourceRecordKey");
      String lookupValue = doc.getString("LookupValue");
      String fieldName = doc.getString("FieldName");

      HashMap<String, Object> enumValues = entities.get(resourceRecordKey);
      if (enumValues == null) {
         enumValues = new HashMap<>();
         entities.put(resourceRecordKey, enumValues);
      }

      @SuppressWarnings("unchecked")
      HashMap<String, HashMap<String, String>> lookupCache = LookupDefinition.getLookupCache();
      HashMap<String, String> lookup = lookupCache.get(lookupValue);

      if (lookup != null) {
         String legacyValue = lookup.get("LegacyODataValue");
         if (legacyValue != null) {
            enumValues.put(fieldName, legacyValue);
         }
      }
   }

}
