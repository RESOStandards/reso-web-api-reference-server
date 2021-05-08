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
import org.apache.olingo.server.api.processor.EntityProcessor;
import org.apache.olingo.server.api.serializer.EntityCollectionSerializerOptions;
import org.apache.olingo.server.api.serializer.EntitySerializerOptions;
import org.apache.olingo.server.api.serializer.ODataSerializer;
import org.apache.olingo.server.api.serializer.SerializerResult;
import org.apache.olingo.server.api.uri.UriInfo;
import org.apache.olingo.server.api.uri.UriParameter;
import org.apache.olingo.server.api.uri.UriResource;
import org.apache.olingo.server.api.uri.UriResourceEntitySet;
import org.apache.olingo.server.api.uri.queryoption.FilterOption;
import org.apache.olingo.server.api.uri.queryoption.SkipOption;
import org.apache.olingo.server.api.uri.queryoption.TopOption;
import org.reso.service.data.common.CommonDataProcessing;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.FilterExpressionVisitor;
import org.reso.service.data.meta.ResourceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;

public class GenericEntityProcessor implements EntityProcessor
{
   private OData odata;
   private ServiceMetadata serviceMetadata;
   private Connection connect;
   HashMap<String, ResourceInfo> resourceList = null;
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
      Entity entity = getData(edmEntitySet, keyPredicates, resource);

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

   protected Entity getData(EdmEntitySet edmEntitySet, List<UriParameter> keyPredicates, ResourceInfo resource) throws ODataApplicationException {
      ArrayList<FieldInfo> fields = resource.getFieldList();

      Entity product = null;

      Map<String, String> properties = System.getenv();

      try {

         String sqlCriteria = null;

         // Statements allow to issue SQL queries to the database
         Statement statement = connect.createStatement();
         // Result set get the result of the SQL query
         String queryString = null;

         for (final UriParameter key : keyPredicates)
         {
            // key
            String keyName = key.getName();
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

         queryString = "select * from " + resource.getTableName();

         if (null!=sqlCriteria && sqlCriteria.length()>0)
         {
            queryString = queryString + " WHERE " + sqlCriteria;
         }

         LOG.debug("SQL Query: "+queryString);
         ResultSet resultSet = statement.executeQuery(queryString);

         String primaryFieldName = resource.getPrimaryKeyName();

         // add the lookups from the database.
         while (resultSet.next())
         {
            Entity ent = CommonDataProcessing.getEntityFromRow(resultSet,resource,null);

            product = ent;
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
         return new URI(entitySetName + "('" + String.valueOf(id) + "')");
      } catch (URISyntaxException e) {
         throw new ODataRuntimeException("Unable to create id for entity: " + entitySetName, e);
      }
   }

   @Override public void createEntity(ODataRequest request, ODataResponse response, UriInfo uriInfo, ContentType requestFormat, ContentType responseFormat)
            throws ODataApplicationException, ODataLibraryException
   {

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
