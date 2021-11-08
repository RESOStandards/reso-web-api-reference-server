package org.reso.service.data;


import org.apache.olingo.commons.api.data.*;
import org.apache.olingo.commons.api.edm.EdmEntitySet;
import org.apache.olingo.commons.api.edm.EdmEntityType;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.ex.ODataRuntimeException;
import org.apache.olingo.commons.api.format.ContentType;
import org.apache.olingo.commons.api.http.HttpHeader;
import org.apache.olingo.commons.api.http.HttpStatusCode;
import org.apache.olingo.server.api.*;
import org.apache.olingo.server.api.deserializer.DeserializerResult;
import org.apache.olingo.server.api.deserializer.ODataDeserializer;
import org.apache.olingo.server.api.processor.EntityProcessor;
import org.apache.olingo.server.api.serializer.EntitySerializerOptions;
import org.apache.olingo.server.api.serializer.ODataSerializer;
import org.apache.olingo.server.api.serializer.SerializerResult;
import org.apache.olingo.server.api.uri.UriInfo;
import org.apache.olingo.server.api.uri.UriParameter;
import org.apache.olingo.server.api.uri.UriResource;
import org.apache.olingo.server.api.uri.UriResourceEntitySet;
import org.reso.service.data.common.CommonDataProcessing;
import org.reso.service.data.meta.EnumFieldInfo;
import org.reso.service.data.meta.EnumValueInfo;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;
import org.reso.service.data.meta.builder.FieldObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.sql.*;
import java.util.*;

import static org.reso.service.servlet.RESOservlet.resourceLookup;

public class GenericEntityProcessor implements EntityProcessor
{
   private OData odata;
   private       ServiceMetadata serviceMetadata;
   private final Connection      connect;
   private HashMap<String, ResourceInfo> resourceList = null;

   private static final Logger LOG = LoggerFactory.getLogger(GenericEntityCollectionProcessor.class);


   public GenericEntityProcessor(Connection connect)
   {
      this.connect = connect;
      this.resourceList = new HashMap<>();
   }

   public void addResource(ResourceInfo resource, String name)
   {
      resourceList.put(name,resource);
   }


   @Override public void readEntity(ODataRequest request, ODataResponse response, UriInfo uriInfo, ContentType responseFormat)
            throws ODataApplicationException, ODataLibraryException
   {
      // 1. retrieve the Entity Type
      List<UriResource> resourcePaths = uriInfo.getUriResourceParts();
      // Note: only in our example we can assume that the first segment is the EntitySet
      UriResourceEntitySet uriResourceEntitySet = (UriResourceEntitySet) resourcePaths.get(0);
      EdmEntitySet edmEntitySet = uriResourceEntitySet.getEntitySet();

      ResourceInfo resource = this.resourceList.get(resourcePaths.get(0).toString());

      // 2. retrieve the data from backend
      List<UriParameter> keyPredicates = uriResourceEntitySet.getKeyPredicates();
      Entity entity;
      if (resource.useCustomDatasource() )
      {
         entity = resource.getData(edmEntitySet, keyPredicates);
      }
      else
      {
         entity = getData(edmEntitySet, keyPredicates, resource);
      }

      // 3. serialize
      EdmEntityType entityType = edmEntitySet.getEntityType();

      ContextURL contextUrl = ContextURL.with().entitySet(edmEntitySet).build();
      // expand and select currently not supported
      EntitySerializerOptions options = EntitySerializerOptions.with().contextURL(contextUrl).build();

      ODataSerializer serializer = odata.createSerializer(responseFormat);
      SerializerResult serializerResult = serializer.entity(serviceMetadata, entityType, entity, options);
      InputStream entityStream = serializerResult.getContent();

      //4. configure the response object
      response.setContent(entityStream);
      response.setStatusCode(HttpStatusCode.OK.getStatusCode());
      response.setHeader(HttpHeader.CONTENT_TYPE, responseFormat.toContentTypeString());
   }


   /**
    * Reads data from a resource and returns it as a HashMap
    * @param keyPredicates
    * @param resource
    * @return
    */
   private HashMap<String,Object> getDataToHash(List<UriParameter> keyPredicates, ResourceInfo resource)
   {
      return CommonDataProcessing.translateEntityToMap(this.getData(null, keyPredicates, resource));
   }

   protected Entity getData(EdmEntitySet edmEntitySet, List<UriParameter> keyPredicates, ResourceInfo resource) {
      ArrayList<FieldInfo> fields = resource.getFieldList();

      Entity product = null;

      List<FieldInfo> enumFields = CommonDataProcessing.gatherEnumFields(resource);

      try {

         String sqlCriteria = null;

         // Statements allow to issue SQL queries to the database
         Statement statement = connect.createStatement();
         // Result set get the result of the SQL query
         String queryString = null;

         if (null!=keyPredicates)
         {
            for (final UriParameter key : keyPredicates)
            {
               // key
               String keyName = key.getName(); // .toLowerCase();
               String keyValue = key.getText();
               if (sqlCriteria==null)
               {
                  sqlCriteria = keyName + " = " + keyValue;
               }
               else
               {
                  sqlCriteria = sqlCriteria + " and " + keyName + " = " + keyValue;
               }
            }
         }

         queryString = "select * from " + resource.getTableName();

         if (null!=sqlCriteria && sqlCriteria.length()>0)
         {
            queryString = queryString + " WHERE " + sqlCriteria;
         }

         LOG.info("SQL Query: "+queryString);
         ResultSet resultSet = statement.executeQuery(queryString);

         String primaryFieldName = resource.getPrimaryKeyName();
         ArrayList<String> resourceRecordKeys = new ArrayList<>();

         // add the lookups from the database.
         while (resultSet.next())
         {
            Entity ent = CommonDataProcessing.getEntityFromRow(resultSet,resource,null);
            resourceRecordKeys.add( ent.getProperty(primaryFieldName).getValue().toString() );

            product = ent;
         }

         if (product!=null && resourceRecordKeys.size()>0 && enumFields.size()>0)
         {
            queryString = "select * from lookup_value";
            queryString = queryString + " WHERE ResourceRecordKey in (\"" + String.join("','", resourceRecordKeys ) + "\")";

            LOG.info("SQL Query: "+queryString);
            resultSet = statement.executeQuery(queryString);

            // add the lookups from the database.
            HashMap<String, HashMap<String, Object>> entities = new HashMap<>();
            HashMap<String, Object> enumValues = new HashMap<>();
            entities.put(resourceRecordKeys.get(0), enumValues);

            while (resultSet.next())
            {
               CommonDataProcessing.getEntityValues(resultSet, entities, enumFields);
            }
            CommonDataProcessing.setEntityEnums(enumValues,product,enumFields);

         }
         statement.close();

      } catch (Exception e) {
         LOG.error("Server Error occurred in reading "+resource.getResourceName(), e);
         return product;
      }

      return product;
   }

   private URI createId(String entitySetName, Object id) {
      try {
         return new URI(entitySetName + "('" + id + "')");
      } catch (URISyntaxException e) {
         throw new ODataRuntimeException("Unable to create id for entity: " + entitySetName, e);
      }
   }

   @Override public void createEntity(ODataRequest request, ODataResponse response, UriInfo uriInfo, ContentType requestFormat, ContentType responseFormat)
            throws ODataApplicationException, ODataLibraryException
   {
      // 1. retrieve the Entity Type
      List<UriResource> resourcePaths = uriInfo.getUriResourceParts();
      // Note: only in our example we can assume that the first segment is the EntitySet
      UriResourceEntitySet uriResourceEntitySet = (UriResourceEntitySet) resourcePaths.get(0);
      EdmEntitySet edmEntitySet = uriResourceEntitySet.getEntitySet();

      ResourceInfo resource = this.resourceList.get(resourcePaths.get(0).toString());
      EdmEntityType edmEntityType = edmEntitySet.getEntityType();

      // 2. create the data in backend
      // 2.1. retrieve the payload from the POST request for the entity to create and deserialize it
      InputStream requestInputStream = request.getBody();
      ODataDeserializer deserializer = this.odata.createDeserializer(requestFormat);
      DeserializerResult result = deserializer.entity(requestInputStream, edmEntityType);
      Entity requestEntity = result.getEntity();
      // 2.2 do the creation in backend, which returns the newly created entity
      HashMap<String, Object> mappedObj = CommonDataProcessing.translateEntityToMap(requestEntity);

      List<FieldInfo> enumFields = CommonDataProcessing.gatherEnumFields(resource);
      HashMap<String, Object>  enumValues = new HashMap<>();
      for (FieldInfo field: enumFields)
      {
         // We remove all entities that are collections to save to the lookup_value table separately. @TODO: save these values
         if (field.isCollection())
         {
            String fieldName = field.getFieldName();
            Object value = mappedObj.remove(fieldName);
            enumValues.put(fieldName, value);
         }
      }

      saveData(resource, mappedObj);
      saveEnumData(resource, enumValues);

      // 3. serialize the response (we have to return the created entity)
      ContextURL contextUrl = ContextURL.with().entitySet(edmEntitySet).build();
      // expand and select currently not supported
      EntitySerializerOptions options = EntitySerializerOptions.with().contextURL(contextUrl).build();

      ODataSerializer serializer = this.odata.createSerializer(responseFormat);
      SerializerResult serializedResponse = serializer.entity(serviceMetadata, edmEntityType, requestEntity, options);
      //SerializerResult serializedResponse = serializer.entity(serviceMetadata, edmEntityType, createdEntity, options);

      //4. configure the response object
      response.setContent(serializedResponse.getContent());
      response.setStatusCode(HttpStatusCode.CREATED.getStatusCode());
      response.setHeader(HttpHeader.CONTENT_TYPE, responseFormat.toContentTypeString());
   }


   private void saveData(ResourceInfo resource, HashMap<String, Object> mappedObj)
   {
      String queryString = "insert into " + resource.getTableName();
      try
      {
         Statement statement = connect.createStatement();
         ArrayList<String> columnNames = new ArrayList<>();
         ArrayList<String> columnValues = new ArrayList<>();

         ArrayList<FieldInfo> fieldList = resource.getFieldList();
         HashMap<String, FieldInfo> fieldLookup = new HashMap<>();

         for (FieldInfo field: fieldList)
         {
            fieldLookup.put(field.getFieldName(),field);
         }

         for (Map.Entry<String,Object> entrySet: mappedObj.entrySet())
         {
            String key = entrySet.getKey();
            Object value = entrySet.getValue();
            columnNames.add(key);

            FieldInfo field = fieldLookup.get(key);

            if (value==null)
            {
               columnValues.add("NULL");
            }
            else if (field.getType().equals(EdmPrimitiveTypeKind.String.getFullQualifiedName()))
            {
               columnValues.add('"'+value.toString()+'"');
            }
            else if (field.getType().equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName()))
            {
               columnValues.add('"'+value.toString()+'"');
            }
            else
            {
               columnValues.add(value.toString());
            }

         }

         queryString = queryString+" ("+String.join(",",columnNames)+") values ("+String.join(",",columnValues)+")";

         //boolean success = statement.execute(queryString);
      }
      catch (SQLException e)
      {
         LOG.error(e.getMessage());
      }
      // Result set get the result of the SQL query
   }

   private void saveEnumData(ResourceInfo resource, HashMap<String, Object> enumValues)
   {
      for (String key: enumValues.keySet() )
      {
         Object value = enumValues.get(key);
         saveEnumData(resource, key, value);
      }
   }


   /**
    * Save the Enum values for the enumObject for the resource.
    * lookup_value table:
    * +--------------------------+------------+------+-----+---------------------+-------------------------------+
    * | Field                    | Type       | Null | Key | Default             | Extra                         |
    * +--------------------------+------------+------+-----+---------------------+-------------------------------+
    * | LookupValueKey           | text       | YES  |     | NULL                |                               |
    * | LookupValueKeyNumeric    | bigint(20) | YES  |     | NULL                |                               |
    * | ResourceName             | text       | YES  |     | NULL                |                               |
    * | ResourceRecordKey        | text       | YES  |     | NULL                |                               |
    * | ResourceRecordKeyNumeric | bigint(20) | YES  |     | NULL                |                               |
    * | LookupKey                | text       | YES  |     | NULL                |                               |
    * | modificationTimestamp    | timestamp  | NO   |     | current_timestamp() | on update current_timestamp() |
    * | FieldName                | text       | NO   |     | NULL                |                               |
    * +--------------------------+------------+------+-----+---------------------+-------------------------------+
    * @param resource
    * @param values
    */
   private void saveEnumData(ResourceInfo resource, String lookupEnumField, Object values)
   {
      String queryString = "insert into lookup_value";

      /**
       String value = resultSet.getString("LookupKey");
       String fieldName = resultSet.getString("FieldName");
       String resourceRecordKey = resultSet.getString("ResourceRecordKey");
       */

      try
      {
         Statement statement = connect.createStatement();
         List<String> columnNames = Arrays.asList("FieldName","LookupKey");

         ArrayList valueArray;

         if (values instanceof ArrayList)
         {
            valueArray = (ArrayList) values;
         }
         else
         {
            ArrayList temp = new ArrayList();
            temp.add(values);
            valueArray = temp;
         }

         for (Object value : valueArray)
         {
            ArrayList<String> columnValues = new ArrayList(Arrays.asList(lookupEnumField,value.toString()));
         }

      }
      catch (SQLException e)
      {
         LOG.error(e.getMessage());
      }

   }


   @Override public void updateEntity(ODataRequest request, ODataResponse response, UriInfo uriInfo, ContentType requestFormat, ContentType responseFormat)
            throws ODataApplicationException, ODataLibraryException
   {

   }


   @Override public void deleteEntity(ODataRequest request, ODataResponse response, UriInfo uriInfo) throws ODataApplicationException, ODataLibraryException
   {

   }


   @Override public void init(OData odata, ServiceMetadata serviceMetadata)
   {
      this.odata = odata;
      this.serviceMetadata = serviceMetadata;
   }
}
