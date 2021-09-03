package org.reso.service.data.common;


import org.apache.olingo.commons.api.data.Entity;
import org.apache.olingo.commons.api.data.EntityCollection;
import org.apache.olingo.commons.api.data.Property;
import org.apache.olingo.commons.api.data.ValueType;
import org.apache.olingo.commons.api.edm.EdmEntityType;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.EdmProperty;
import org.apache.olingo.commons.api.ex.ODataRuntimeException;
import org.apache.olingo.commons.api.http.HttpStatusCode;
import org.apache.olingo.server.api.ODataApplicationException;
import org.apache.olingo.server.api.uri.UriInfoResource;
import org.apache.olingo.server.api.uri.UriResource;
import org.apache.olingo.server.api.uri.UriResourcePrimitiveProperty;
import org.apache.olingo.server.api.uri.queryoption.*;
import org.apache.olingo.server.api.uri.queryoption.expression.Expression;
import org.apache.olingo.server.api.uri.queryoption.expression.Member;
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

public class CommonDataProcessing
{
   private static final Logger LOG = LoggerFactory.getLogger(CommonDataProcessing.class);
   private static HashMap<String, List<FieldInfo>> resourceEnumFields = new HashMap<>();

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

      CommonDataProcessing.resourceEnumFields.put(resourceName, enumFields);

      return enumFields;
   }

   public static Object getFieldValueFromRow(FieldInfo field, ResultSet resultSet) throws SQLException
   {
      String fieldName = field.getFieldName();
      Object value = null;
      if (field.getType().equals(EdmPrimitiveTypeKind.String.getFullQualifiedName()))
      {
         value = resultSet.getString(fieldName);
      }
      else if (field.getType().equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName()))
      {
         value = resultSet.getTimestamp(fieldName);
      }
      else
      {
         LOG.info("Field Name: "+field.getFieldName()+" Field type: "+field.getType());
      }

      return value;
   }

   public static Entity getEntityFromRow(ResultSet resultSet, ResourceInfo resource, HashMap<String,Boolean> selectLookup) throws SQLException
   {
      String primaryFieldName = resource.getPrimaryKeyName();
      ArrayList<FieldInfo> fields = resource.getFieldList();
      String lookupKey = null;
      if (selectLookup!=null && selectLookup.get(primaryFieldName)!=null)
      {
         lookupKey = resultSet.getString(primaryFieldName);
      }
      Entity ent = new Entity();
      for (FieldInfo field : fields)
      {
         String fieldName = field.getODATAFieldName();
         Object value = null;
         if ( (selectLookup==null || selectLookup.containsKey(fieldName) ))
         {
            value = CommonDataProcessing.getFieldValueFromRow(field, resultSet);
            if (field instanceof EnumFieldInfo)
            {
               LOG.error("ENUMS currently only handles by values in lookup_value table.  One must Define if this uses a key a numeric value.");
            }
            else if (field.isCollection())
            {
               ent.addProperty(new Property(null, fieldName, ValueType.ENUM, value));
            }
            else
            {
               ent.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, value));
            }
         }
      }

      if (lookupKey!=null)
      {
         ent.setId(createId(resource.getResourcesName(), lookupKey));
      }

      return ent;
   }

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

   public static void getEntityValues(ResultSet resultSet,HashMap<String, Object> entity, List<FieldInfo> enumFields) throws SQLException
   {
      HashMap<String, EnumFieldInfo> enumFieldLookup = new HashMap<>();
      EnumFieldInfo field = null;

      String value = resultSet.getString("LookupKey");
      String fieldName = resultSet.getString("FieldName");

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
      if (field.isCollection())
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

   public static void setEntityEnums(HashMap<String, Object> enumValues, Entity entity, List<FieldInfo> enumFields) throws SQLException
   {
      HashMap<String,EnumFieldInfo> enumFieldLookup = new HashMap<>();

      for (FieldInfo field: enumFields)
      {
         EnumFieldInfo enumField = (EnumFieldInfo) field;
         String fieldName = enumField.getFieldName();
         long totalFlagValues = 3;

         if (field.isFlags())
         {
            try
            {
               Object flagValues = enumValues.get(fieldName);
               ArrayList<Object> flagsArray = (ArrayList<Object>) flagValues;
               for (Object flagObj : flagsArray)
               {
                  Long flagLong = (Long) flagObj;
                  totalFlagValues = totalFlagValues + flagLong;
               }
            }
            catch (Exception e)
            {
               LOG.error(e.getMessage());
            }
         }

         if (field.isCollection())
         {
            if (field.isFlags())
            {
               entity.addProperty(new Property(null, fieldName, ValueType.ENUM, totalFlagValues)); // @ToDo: This might not be compatible with anything...
            }
            else
            {
               entity.addProperty(new Property(null, fieldName, ValueType.COLLECTION_PRIMITIVE, enumValues.get(fieldName)));
            }
         }
         else
         {
            if (field.isFlags())
            {
               entity.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, totalFlagValues));
            }
            else
            {
               entity.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, enumValues.get(fieldName)));
            }
         }
      }
   }

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
   private static URI createId(String entitySetName, Object id) {
      try {
         return new URI(entitySetName + "('" + id + "')");
      } catch (URISyntaxException e) {
         throw new ODataRuntimeException("Unable to create id for entity: " + entitySetName, e);
      }
   }
}
