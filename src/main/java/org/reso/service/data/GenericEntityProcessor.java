package org.reso.service.data;


import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.jdbc.MongoConnection;
import org.apache.olingo.commons.api.data.*;
import org.apache.olingo.commons.api.edm.EdmEntitySet;
import org.apache.olingo.commons.api.edm.EdmEntityType;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
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
import org.bson.Document;
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
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
        HashMap<String, Object> enumValues = new HashMap<>();
        for (FieldInfo field : enumFields) {
            EnumFieldInfo enumField = (EnumFieldInfo) field;
            // We remove all entities that are collections to save to the lookup_value table separately. @TODO: save these values
            String fieldName = field.getFieldName();
            Object value = mappedObj.remove(fieldName);
            if (field.isCollection() && !((List) value).isEmpty())
                enumValues.put(fieldName, Arrays.asList(((List<Long>) value).stream().map(x -> enumField.getKeyByIndex((int)(long)x)).toArray()));
            else if (field.isFlags()){
                enumValues.put(fieldName,Arrays.asList(Arrays.stream(enumField.expandFlags((int)(long)(Long) value)).mapToObj(x -> enumField.getKeyByIndex((int)x)).toArray()));
            }
            else if (!field.isCollection() && value != null)
                enumValues.put(fieldName, enumField.getKeyByIndex((int)(long)(Long)value));
        }
        if (connect instanceof com.mongodb.jdbc.MongoConnection) {
            saveDataMongo(resource, mappedObj);
        } else {
            saveData(resource, mappedObj);
        }
        saveEnumData(resource, enumValues, (String) mappedObj.get(resource.getPrimaryKeyName()));

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

         boolean success = statement.execute(queryString);
      }
      catch (SQLException e)
      {
         LOG.error(e.getMessage());
      }
      // Result set get the result of the SQL query
   }

    private void saveDataMongo(ResourceInfo resource, HashMap<String, Object> mappedObj) {
        Map<String, String> env = System.getenv();
        String syncConnStr = env.get("MONGO_SYNC_CONNECTION_STR");

        try (MongoClient mongoClient = MongoClients.create(syncConnStr)) {
            MongoDatabase database = mongoClient.getDatabase("reso");
            MongoCollection<Document> collection = database.getCollection(resource.getTableName());

            Document document = new Document();

            ArrayList<FieldInfo> fieldList = resource.getFieldList();
            HashMap<String, FieldInfo> fieldLookup = new HashMap<>();

            for (FieldInfo field : fieldList) {
                fieldLookup.put(field.getFieldName(), field);
            }

            for (Map.Entry<String, Object> entry : mappedObj.entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();

                FieldInfo field = fieldLookup.get(key);
                FullQualifiedName fieldType = field.getType();
                if (value != null) {
                    if (fieldType.equals(EdmPrimitiveTypeKind.String.getFullQualifiedName())) {
                        document.append(key, value.toString());
                    } else if (fieldType.equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName())) {
                        // Assuming the date is in ISO format or needs to be converted to a Date object
                        try {
                            document.append(key, new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").parse(value.toString()));
                        } catch (ParseException e) {
                            LOG.error("Date parsing error", e);
                        }
                    } else {
                        document.append(key, value);
                    }
                } else {
                    document.append(key, null);
                }
            }
            collection.insertOne(document);
        }
    }

    private void saveEnumData(ResourceInfo resource, HashMap<String, Object> enumValues, String resourceRecordKey) {
        for (String key : enumValues.keySet()) {
            Object value = enumValues.get(key);
            if (connect instanceof com.mongodb.jdbc.MongoConnection)
                saveEnumDataMongo(resource, key, value, resourceRecordKey);
            else
                saveEnumData(resource, key, value, resourceRecordKey);
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
    * @param resourceRecordKey
    */
    private void saveEnumData(ResourceInfo resource, String lookupEnumField, Object values, String resourceRecordKey) {
       String queryString = "INSERT INTO lookup_value (FieldName, LookupKey, ResourceName, ResourceRecordKey) VALUES (?, ?, ?, ?)";

       try {
           connect.setAutoCommit(false);  // Use transaction control
           PreparedStatement statement = connect.prepareStatement(queryString);

           List<Object> valueList = new ArrayList<>();

           if (values instanceof List) {
               valueList.addAll((List) values);
           } else {
               valueList.add(values);
           }

           for (Object value : valueList) {
               statement.setString(1, lookupEnumField);
               statement.setString(2, value.toString());
               statement.setString(3, resource.getResourcesName());
               statement.setString(4, resourceRecordKey);

               statement.addBatch();  // Add this prepared statement to the batch
           }

           statement.executeBatch();  // Execute all the batched statements
           connect.commit();  // Commit transaction
           statement.close(); // Close the statement after commit
       } catch (SQLException e) {
           LOG.error("Error inserting data into SQL database", e);
           try {
               if (connect != null) connect.rollback();  // Roll back transaction in case of error
           } catch (SQLException ex) {
               LOG.error("Error during transaction rollback", ex);
           }
       }
   }

   private void saveEnumDataMongo(ResourceInfo resource, String lookupEnumField, Object values, String resourceRecordKey) {
        Map<String, String> env = System.getenv();
        String syncConnStr = env.get("MONGO_SYNC_CONNECTION_STR");

        try (MongoClient mongoClient = MongoClients.create(syncConnStr)) {
            MongoDatabase database = mongoClient.getDatabase("reso"); // Specify your database name
            MongoCollection<Document> collection = database.getCollection("lookup_value"); // Adjust the collection name as needed

            List<Object> valueList = new ArrayList<>();
            if (values instanceof List) {
                valueList.addAll((List) values);
            } else {
                valueList.add(values);
            }

            List<Document> documents = new ArrayList<>();
            for (Object value : valueList) {
                Document doc = new Document()
                        .append("FieldName", lookupEnumField)
                        .append("ResourceName", resource.getResourcesName())
                        .append("ResourceRecordKey", resourceRecordKey)
                        .append("LookupKey", value.toString());
                documents.add(doc);
            }

            try {
                if (!documents.isEmpty()) {
                    collection.insertMany(documents);
                }
            } catch (Exception e) {
                LOG.error("Error inserting documents into MongoDB", e);
            }
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
