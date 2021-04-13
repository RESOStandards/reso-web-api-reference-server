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
import org.apache.olingo.server.api.processor.EntityCollectionProcessor;
import org.apache.olingo.server.api.serializer.EntityCollectionSerializerOptions;
import org.apache.olingo.server.api.serializer.ODataSerializer;
import org.apache.olingo.server.api.serializer.SerializerException;
import org.apache.olingo.server.api.serializer.SerializerResult;
import org.apache.olingo.server.api.uri.UriInfo;
import org.apache.olingo.server.api.uri.UriResource;
import org.apache.olingo.server.api.uri.UriResourceEntitySet;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;
import org.reso.service.edmprovider.RESOedmProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class GenericEntityCollectionProcessor implements EntityCollectionProcessor
{
   private              OData                odata;
   private              ServiceMetadata      serviceMetadata;
   private              Connection           connect           = null;
   private static final Logger               LOG               = LoggerFactory.getLogger(GenericEntityCollectionProcessor.class);
   private              ResourceInfo         resourceInfo      = null;

   public GenericEntityCollectionProcessor(Connection connection, ResourceInfo resourceInfo)
   {
      this.connect = connection;
      this.resourceInfo = resourceInfo;
   }


   /**
    * If you use this constructor, make sure to set your resourceInfo
    * @param connection
    */
   public GenericEntityCollectionProcessor(Connection connection)
   {
      this.connect = connection;
   }

   public void init(OData odata, ServiceMetadata serviceMetadata) {
      this.odata = odata;
      this.serviceMetadata = serviceMetadata;
   }


   /**
    * Set the attribute with the name that corresponds to this method name.
    *
    * @param resourceInfo The value to set the attribute to.
    */
   protected void setResourceInfo(ResourceInfo resourceInfo)
   {
      this.resourceInfo = resourceInfo;
   }


   public void readEntityCollection(ODataRequest request, ODataResponse response, UriInfo uriInfo, ContentType responseFormat)
            throws ODataApplicationException, SerializerException
   {

      // 1st we have retrieve the requested EntitySet from the uriInfo object (representation of the parsed service URI)
      List<UriResource> resourcePaths = uriInfo.getUriResourceParts();
      UriResourceEntitySet uriResourceEntitySet = (UriResourceEntitySet) resourcePaths.get(0); // in our example, the first segment is the EntitySet
      EdmEntitySet edmEntitySet = uriResourceEntitySet.getEntitySet();

      // 2nd: fetch the data from backend for this requested EntitySetName
      // it has to be delivered as EntitySet object
      EntityCollection entitySet = getData(edmEntitySet);

      // 3rd: create a serializer based on the requested format (json)
      ODataSerializer serializer = odata.createSerializer(responseFormat);

      // 4th: Now serialize the content: transform from the EntitySet object to InputStream
      EdmEntityType edmEntityType = edmEntitySet.getEntityType();
      ContextURL contextUrl = ContextURL.with().entitySet(edmEntitySet).build();

      final String id = request.getRawBaseUri() + "/" + edmEntitySet.getName();
      EntityCollectionSerializerOptions opts = EntityCollectionSerializerOptions.with().id(id).contextURL(contextUrl).build();
      SerializerResult serializerResult = serializer.entityCollection(serviceMetadata, edmEntityType, entitySet, opts);
      InputStream serializedContent = serializerResult.getContent();

      // Finally: configure the response object: set the body, headers and status code
      response.setContent(serializedContent);
      response.setStatusCode(HttpStatusCode.OK.getStatusCode());
      response.setHeader(HttpHeader.CONTENT_TYPE, responseFormat.toContentTypeString());
   }


   protected EntityCollection getData(EdmEntitySet edmEntitySet){
      ArrayList<FieldInfo> fields = this.resourceInfo.getFieldList();

      EntityCollection lookupsCollection = new EntityCollection();

      List<Entity> productList = lookupsCollection.getEntities();

      Map<String, String> properties = System.getenv();

      try {
         // Statements allow to issue SQL queries to the database
         Statement statement = connect.createStatement();
         // Result set get the result of the SQL query
         ResultSet resultSet = statement.executeQuery("select * from "+this.resourceInfo.getTableName());

         String primaryFieldName = fields.get(0).getFieldName();

         // add the lookups from the database.
         while (resultSet.next())
         {

            String lookupKey = resultSet.getString(primaryFieldName);
            Entity ent = new Entity();
            for (FieldInfo field : fields)
            {
               String fieldName = field.getFieldName();
               Object value = null;
               if (field.getType().equals(EdmPrimitiveTypeKind.String.getFullQualifiedName()))
               {
                  value = resultSet.getString(fieldName);
               }
               else if (field.getType().equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName()))
               {
                  value = resultSet.getDate(fieldName);
               }
               else
               {
                  LOG.info("Field Name: "+field.getFieldName()+" Field type: "+field.getType());
               }

               ent.addProperty(new Property(null, fieldName,ValueType.PRIMITIVE, value));
            }

            ent.setId(createId(this.resourceInfo.getResourcesName(), lookupKey));
            productList.add(ent);
         }

         statement.close();

      } catch (Exception e) {
            LOG.error("Server Error occurred in reading "+this.resourceInfo.getResourceName(), e);
         return lookupsCollection;
      }

      return lookupsCollection;
   }

   private URI createId(String entitySetName, Object id) {
      try {
         return new URI(entitySetName + "(" + String.valueOf(id) + ")");
      } catch (URISyntaxException e) {
         throw new ODataRuntimeException("Unable to create id for entity: " + entitySetName, e);
      }
   }

}
