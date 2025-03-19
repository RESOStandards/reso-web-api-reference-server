package org.reso.service.data.common;


import org.apache.olingo.commons.api.data.*;
import org.apache.olingo.commons.api.edm.EdmEntityType;
import org.apache.olingo.commons.api.edm.EdmNavigationProperty;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.ex.ODataRuntimeException;
import org.apache.olingo.server.api.uri.UriResource;
import org.apache.olingo.server.api.uri.UriResourceNavigation;
import org.apache.olingo.server.api.uri.queryoption.*;
import org.reso.service.data.definition.LookupDefinition;
import org.reso.service.data.meta.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.*;

import static org.reso.service.servlet.RESOservlet.resourceLookup;

public class CommonDataProcessing {
    private static final Logger LOG = LoggerFactory.getLogger(CommonDataProcessing.class);
    private static HashMap<String, List<FieldInfo>> resourceEnumFields = new HashMap<>();


   /**
    * This function will return the Enum fields for a given resource.
    * It returns from the cache if found, otherwise it finds the Enum fields from the Field list and caches it for later use.
    * @param resource
    * @return List<FieldInfo> The Enum fields' FieldInfo values
    */
   public static List<FieldInfo> gatherEnumFields(ResourceInfo resource)
   {
      String resourceName = resource.getResourceName();
      List<FieldInfo> enumFields = CommonDataProcessing.resourceEnumFields.get(resourceName);

      if (enumFields!=null)
      {
         return enumFields;
      }

      enumFields = new ArrayList<>();

      ArrayList<FieldInfo> fieldList = resource.getFieldList();
      for (FieldInfo field: fieldList)
      {
         if (field instanceof EnumFieldInfo)
         {
            enumFields.add(field);
         }
      }

      // Put it in the cache
      CommonDataProcessing.resourceEnumFields.put(resourceName, enumFields);

      return enumFields;
   }


   /**
    * This will return the value for the field from the result set from the data source.
    * @param field The field metadata
    * @param resultSet The data source row
    * @return A Java Object representing the value.  It can be anything, but should be a simple representation for ease of manipulating.
    * @throws SQLException in case of SQL error from the data source
    */
   public static Object getFieldValueFromRow(FieldInfo field, ResultSet resultSet) throws SQLException
   {
      String fieldName = field.getFieldName();
      Object value = null;
      // In case of a String
      try{
         if (field.getType().equals(EdmPrimitiveTypeKind.String.getFullQualifiedName()))
         {
            value = resultSet.getString(fieldName);
            if(field.isCollection()){
                String str = ((String)value).replaceAll("\\[|\\]|\"", "");
                if(str.isEmpty())
                   value = new ArrayList<>();
                else {
                   String[] values = Arrays.stream(str.split(",")).map(String::trim).toArray(String[]::new);
                   value = Arrays.asList(values);
                }
            }
         }
         // In case of a DateTime entry
         else if (field.getType().equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName()))
         {
            value = resultSet.getTimestamp(fieldName);
         }
         // @TODO: More will have to be added here, ie: Integers, as data comes in, we can extend this easily here.
         else
         {
            LOG.info("Field Name: "+field.getFieldName()+" Field type: "+field.getType());
         }
      } catch (Exception e) {
         LOG.info("Field Name: "+field.getFieldName()+" not in schema.");
      }

      return value;
   }


   /**
    * Builds an Entity from the row from the Resource's data source
    * @param resultSet Data source row result
    * @param resource The resource we're making an Entity for
    * @param selectLookup An optional lookup of boolean flags that will only fill in the Entity values for entries with True lookup values
    * @return An Entity representing the data source row
    * @throws SQLException in case of SQL error from the data source
    */
   public static Entity getEntityFromRow(ResultSet resultSet, ResourceInfo resource, HashMap<String,Boolean> selectLookup) throws SQLException
   {
      String primaryFieldName = resource.getPrimaryKeyName();
      ArrayList<FieldInfo> fields = resource.getFieldList();

      // Lookup Key for the primary key
      String lookupKey = null;
      // We only need to set the entity ID later if we're providing selectLookup and the primary field name is being requested
      // @TODO: May need different logic here, ie: selectLookup==null || ...
      if (selectLookup!=null && selectLookup.get(primaryFieldName)!=null)
      {
         lookupKey = resultSet.getString(primaryFieldName);
      }

      // New entity to be populated
      Entity ent = new Entity();

      for (FieldInfo field : fields)
      {
         String fieldName = field.getODATAFieldName();
         Object value = null;
         if ( (selectLookup==null || selectLookup.containsKey(fieldName) ))
         {
            value = CommonDataProcessing.getFieldValueFromRow(field, resultSet);
            // We only load Enums from the lookup_value table.  @TODO: This may need revision to accommodate lookups on resource tables
            if (field instanceof EnumFieldInfo)
            {
               LOG.error("ENUMS currently only handles by values in lookup_value table.  One must Define if this uses a key a numeric value.");
            }
            // This is Enums that are bit masks, stored on the resource.
            else if (field.isCollection())
            {
               if(field.getType().equals(EdmPrimitiveTypeKind.String.getFullQualifiedName()))
               {
                  ent.addProperty(new Property(null, fieldName, ValueType.COLLECTION_PRIMITIVE, value));
               }
               else
               {
                  ent.addProperty(new Property(null, fieldName, ValueType.ENUM, value));
               }
            }
            // Simply put in primitive values as entity properties.
            else
            {
               ent.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, value));
            }
         }
      }

      // Set the entity ID if the lookupKey is provided in the select lookups
      if (lookupKey!=null)
      {
         ent.setId(createId(resource.getResourcesName(), lookupKey));
      }

      return ent;
   }


   /**
    * Returns a HashMap representation of a row from the data source, similar to the above function.
    *   Useful for building a simple Lookup cache, apart from Entities
    * @param resultSet Data source row result
    * @param resource The resource we're making an Entity for
    * @param selectLookup An optional lookup of boolean flags that will only fill in the Entity values for entries with True lookup values
    * @return A HashMap representing the data source row
    * @throws SQLException in case of SQL error from the data source
    */
   public static HashMap<String,Object> getObjectFromRow(ResultSet resultSet, ResourceInfo resource, HashMap<String,Boolean> selectLookup) throws SQLException
   {
      String primaryFieldName = resource.getPrimaryKeyName();
      ArrayList<FieldInfo> fields = resource.getFieldList();
      String lookupKey = null;
      if (selectLookup!=null && selectLookup.get(primaryFieldName)!=null)
      {
         lookupKey = resultSet.getString(primaryFieldName);
      }
      HashMap<String,Object> ent = new HashMap<>();
      for (FieldInfo field : fields)
      {
         String fieldName = field.getODATAFieldName();
         Object value = null;
         if (selectLookup==null || selectLookup.containsKey(fieldName) )
         {
            value = CommonDataProcessing.getFieldValueFromRow(field, resultSet);
            ent.put( fieldName, value);
         }
      }

      if (lookupKey!=null)
      {
         ent.put("ID", createId(resource.getResourcesName(), lookupKey));
      }

      return ent;
   }


   /**
    * For populating entity values Enums based on a potential non-sequential data source query results
    * @param resultSet Data source row result
    * @param entities A lookup of HashMap entities to be populated with Enum values
    * @param enumFields The Enum fields to populate for the resource
    * @throws SQLException in case of SQL error from the data source
    */
   public static void getEntityValues(ResultSet resultSet,HashMap<String, HashMap<String, Object>> entities, List<FieldInfo> enumFields) throws SQLException
   {
      HashMap<String, EnumFieldInfo> enumFieldLookup = new HashMap<>();
      EnumFieldInfo field = null;

      String value = resultSet.getString("LookupKey");
      String fieldName = resultSet.getString("FieldName");
      String resourceRecordKey = resultSet.getString("ResourceRecordKey");
      HashMap<String, Object> entity = entities.get(resourceRecordKey);
      if (entity==null)
      {
         entity = new HashMap<>();
         entities.put(resourceRecordKey, entity);
      }

      for (FieldInfo f : enumFields)
      {
         EnumFieldInfo enumField = (EnumFieldInfo) f;
         enumFieldLookup.put(enumField.getFieldName(), enumField);
         if (enumField.getFieldName().equals(fieldName))
         {
            field = enumField;
            break;
         }
      }

      HashMap<String, HashMap<String, Object>> lookupCache = LookupDefinition.getLookupCache();
      HashMap<String, Object> lookup = lookupCache.get(value);

      if (lookup==null)
      {
         return;
      }

      Object val = field.getValueOf(lookup.get("LegacyOdataValue").toString() );
      if (field.isCollection() || field.isFlags())
      {
         Object possibleList = entity.get(fieldName);
         ArrayList<Object> valList;
         if (possibleList==null)
         {
            valList = new ArrayList<>();
            valList.add(val);
            entity.put(fieldName, valList);
         }
         if (possibleList instanceof ArrayList)
         {
            valList = (ArrayList<Object>) possibleList;
            valList.add(val);
         }
      }
      else
      {
         entity.put(fieldName, val);
      }
   }


   /**
    * Translate the Enum values from a HashMap representation to an Entity representation
    * @param enumValues The HashMap representation of the Enum values from the data source
    * @param entity The Entity to populate with Enum values
    * @param enumFields The Enum fields on the Entity we want values for
    */
   public static void setEntityEnums(HashMap<String, Object> enumValues, Entity entity, List<FieldInfo> enumFields)
   {
      for (FieldInfo field: enumFields)
      {
         EnumFieldInfo enumField = (EnumFieldInfo) field;
         String fieldName = enumField.getFieldName();
         long totalFlagValues = 0;

         if (field.isFlags())
         {
            try
            {
               // Builds a bit flag representation of the multiple values.
               Object flagValues = enumValues.get(fieldName);
               ArrayList<Object> flagsArray = (ArrayList<Object>) flagValues;
               for (Object flagObj : flagsArray)
               {
                  Long flagLong = (Long) flagObj;
                  totalFlagValues = totalFlagValues + flagLong;
               }
            }
            catch (Exception e)  // In case of casting error.  "Should not happen"
            {
               LOG.error(e.getMessage());
            }
         }

         // There's many ways to represent Enums
         if (field.isCollection())
         {
            // As a Collection with bit flags
            if (field.isFlags())
            {
               entity.addProperty(new Property(null, fieldName, ValueType.ENUM, totalFlagValues)); // @ToDo: This might not be compatible with anything...
            }
            // A collection of Primitive types
            else
            {
               entity.addProperty(new Property(null, fieldName, ValueType.COLLECTION_PRIMITIVE, enumValues.get(fieldName)));
            }
         }
         else
         {
            // Single value, bit flag representation
            if (field.isFlags())
            {
               entity.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, totalFlagValues == 0 ? null: totalFlagValues));
            }
            // Single value Primitive
            else
            {
               entity.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, enumValues.get(fieldName)));
            }
         }
      }
   }


   /**
    * Translates an Entity to a HashMap representation
    * @param entity The Entity to turn into a HashMap
    * @return The HashMap representation of the Entity
    */
   public static HashMap<String,Object> translateEntityToMap(Entity entity)
   {
      HashMap<String,Object> result = new HashMap<>();

      List<Property> properties = entity.getProperties();
      
      for (Property property: properties)
      {
         String name = property.getName();
         Object value = property.getValue();
         result.put(name,value);
      }
      
      return result;
   }


   /**
    * Loads all Resource entries into a List of HashMap representations of the entries.  Useful for caching.
    * @param connect The data source connection
    * @param resource The Resource to load
    * @return A List of HashMap representations of the entries
    */
   public static ArrayList<HashMap<String,Object>> loadAllResource(Connection connect, ResourceInfo resource)
   {
      ArrayList<FieldInfo> fields = resource.getFieldList();

      ArrayList<HashMap<String,Object>> productList = new ArrayList<>();

      try {
         String primaryFieldName = resource.getPrimaryKeyName();

         String sqlCriteria = null;

         // Statements allow to issue SQL queries to the database
         Statement statement = connect.createStatement();
         // Result set get the result of the SQL query
         String queryString = null;

         queryString = "select * from " + resource.getTableName();

         LOG.info("SQL Query: "+queryString);
         ResultSet resultSet = statement.executeQuery(queryString);

         // add the lookups from the database.
         while (resultSet.next())
         {
            HashMap<String, Object> ent = CommonDataProcessing.getObjectFromRow(resultSet, resource, null);
            productList.add(ent);
         }

         statement.close();

      } catch (Exception e) {
         LOG.error("Server Error occurred in reading "+resource.getResourceName(), e);
         return productList;
      }

      return productList;
   }


    /**
     * Creates an unique URI identifier for the entity / id
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

    public static EntityCollection getExpandEntityCollection(Connection connect, EdmNavigationProperty edmNavigationProperty, Entity sourceEntity, ResourceInfo sourceResource, String sourceKey) throws SQLException {
        EntityCollection navigationTargetEntityCollection = new EntityCollection();
        EdmEntityType expandEdmEntityType = edmNavigationProperty.getType();
        Property expandResourceKey = sourceEntity.getProperty(edmNavigationProperty.getName() + "Key");
        boolean isCollection = edmNavigationProperty.isCollection();
        ResourceInfo expandResource = resourceLookup.get(expandEdmEntityType.getName());

        Statement expandStatement = connect.createStatement();
        String expandQueryString = "select * from " + expandResource.getTableName() + " where KEYNAME = 'KEYVALUE'";

        if (isCollection) {
            String keyName;
            switch (expandResource.getResourceName()) {
                case "Media":
                case "Queue":
                case "OtherPhone":
                case "SocialMedia":
                case "HistoryTransactional":
                    keyName = "ResourceName = '" + sourceResource.getResourceName() +"' AND ResourceRecordKey";
                    break;
                default:
                    keyName = sourceResource.getPrimaryKeyName();
            }
            expandQueryString = expandQueryString.replace("KEYNAME", keyName).replace("KEYVALUE", sourceKey);
        } else
            expandQueryString = expandQueryString.replace("KEYNAME", expandResource.getPrimaryKeyName()).replace("KEYVALUE", expandResourceKey.getValue().toString());
        ResultSet expandResultSet = expandStatement.executeQuery(expandQueryString);

        Entity expandEntity = null;
        while (expandResultSet.next()) {
            expandEntity = CommonDataProcessing.getEntityFromRow(expandResultSet, expandResource, null);
            navigationTargetEntityCollection.getEntities().add(expandEntity);
        }
        expandStatement.close();
        return navigationTargetEntityCollection;
    }
}
