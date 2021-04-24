package org.reso.service.data;


import org.apache.olingo.commons.api.data.*;
import org.apache.olingo.commons.api.edm.EdmEntitySet;
import org.apache.olingo.commons.api.edm.EdmEntityType;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.EdmProperty;
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
import org.apache.olingo.server.api.uri.*;
import org.apache.olingo.server.api.uri.queryoption.*;
import org.apache.olingo.server.api.uri.queryoption.expression.Expression;
import org.apache.olingo.server.api.uri.queryoption.expression.Member;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.FilterExpressionVisitor;
import org.reso.service.data.meta.ResourceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class GenericEntityCollectionProcessor implements EntityCollectionProcessor
{
   private              OData                odata;
   private              ServiceMetadata      serviceMetadata;
   private              Connection           connect           = null;
   private              ResourceInfo         resourceInfo      = null;
   private static final Logger               LOG               = LoggerFactory.getLogger(GenericEntityCollectionProcessor.class);

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

      boolean isCount = false;
      CountOption countOption = uriInfo.getCountOption();
      if (countOption != null) {
         isCount = countOption.getValue();
         if (isCount){
            LOG.info("Count str:"+countOption.getText() );
         }
      }

      // 2nd: fetch the data from backend for this requested EntitySetName
      // it has to be delivered as EntitySet object
      EntityCollection entitySet = getData(edmEntitySet, uriInfo, isCount);

      // 3rd: create a serializer based on the requested format (json)
      try
      {
         uriInfo.asUriInfoAll().getFormatOption().getFormat();  // If Format is given, then we will use what it has.
      }
      catch (Exception e)
      {
         responseFormat = ContentType.JSON;  // If format is not set in the $format, then use JSON.
         // There is some magic that will select XML if you're viewing from a browser or something which I'm bypassing here.
         // If you want a different $format, explicitly state it.
      }

      ODataSerializer serializer = odata.createSerializer(responseFormat);

      // 4th: Now serialize the content: transform from the EntitySet object to InputStream
      EdmEntityType edmEntityType = edmEntitySet.getEntityType();
      ContextURL contextUrl = ContextURL.with().entitySet(edmEntitySet).build();

      final String id = request.getRawBaseUri() + "/" + edmEntitySet.getName();
      EntityCollectionSerializerOptions opts = null;
      if (isCount)  // If there's a $count=true in the query string, we need to have a different formatting options.
      {
         opts = EntityCollectionSerializerOptions.with()
                  .contextURL(contextUrl)
                  .id(id)
                  .count(countOption)
                  .build();
      }
      else
      {
         opts = EntityCollectionSerializerOptions.with().id(id).contextURL(contextUrl).build();
      }
      SerializerResult serializerResult = serializer.entityCollection(serviceMetadata, edmEntityType, entitySet, opts);
      InputStream serializedContent = serializerResult.getContent();

      // Finally: configure the response object: set the body, headers and status code
      response.setContent(serializedContent);
      response.setStatusCode(HttpStatusCode.OK.getStatusCode());
      response.setHeader(HttpHeader.CONTENT_TYPE, responseFormat.toContentTypeString());
   }

   protected EntityCollection getData(EdmEntitySet edmEntitySet, UriInfo uriInfo, boolean isCount) throws ODataApplicationException {
      ArrayList<FieldInfo> fields = this.resourceInfo.getFieldList();

      EntityCollection entCollection = new EntityCollection();

      List<Entity> productList = entCollection.getEntities();

      Map<String, String> properties = System.getenv();

      try {

         FilterOption filter = uriInfo.getFilterOption();
         String sqlCriteria = null;
         if (filter!=null)
         {
            sqlCriteria = filter.getExpression().accept(new FilterExpressionVisitor(this.resourceInfo));
         }

         // Statements allow to issue SQL queries to the database
         Statement statement = connect.createStatement();
         // Result set get the result of the SQL query
         String queryString = null;

         // Logic for $count
         if (isCount)
         {
            queryString = "select count(*) AS rowcount from " + this.resourceInfo.getTableName();
         }
         else
         {
            queryString = "select * from " + this.resourceInfo.getTableName();
         }
         if (null!=sqlCriteria && sqlCriteria.length()>0)
         {
            queryString = queryString + " WHERE " + sqlCriteria;
         }

         // Logic for $top
         TopOption topOption = uriInfo.getTopOption();
         if (topOption != null) {
            int topNumber = topOption.getValue();
            if (topNumber >= 0)
            {
               // Logic for $skip
               SkipOption skipOption = uriInfo.getSkipOption();
               if (skipOption != null)
               {
                  int skipNumber = skipOption.getValue();
                  if (skipNumber >= 0)
                  {
                     queryString = queryString + " LIMIT "+skipNumber+", "+topNumber;
                  }
                  else
                  {
                     throw new ODataApplicationException("Invalid value for $skip", HttpStatusCode.BAD_REQUEST.getStatusCode(), Locale.ROOT);
                  }
               }
               else
               {
                  queryString = queryString + " LIMIT " + topNumber;
               }
            }
            else
            {
               throw new ODataApplicationException("Invalid value for $top", HttpStatusCode.BAD_REQUEST.getStatusCode(), Locale.ROOT);
            }
         }

         OrderByOption orderByOption = uriInfo.getOrderByOption();
         if (orderByOption != null)
         {
            List<OrderByItem> orderItemList = orderByOption.getOrders();
            final OrderByItem orderByItem = orderItemList.get(0); // we support only one
            Expression expression = orderByItem.getExpression();
            if (expression instanceof Member)
            {
               UriInfoResource resourcePath = ((Member)expression).getResourcePath();
               UriResource uriResource = resourcePath.getUriResourceParts().get(0);
               if (uriResource instanceof UriResourcePrimitiveProperty)
               {
                  EdmProperty edmProperty = ((UriResourcePrimitiveProperty) uriResource).getProperty();
                  final String sortPropertyName = edmProperty.getName();
                  queryString = queryString + " ORDER BY "+sortPropertyName;
                  if(orderByItem.isDescending())
                  {
                     queryString = queryString + " DESC";
                  }
               }
            }
         }
         LOG.debug("SQL Query: "+queryString);
         ResultSet resultSet = statement.executeQuery(queryString);

         // special return logic for $count
         if (isCount && resultSet.next())
         {
            int size = resultSet.getInt("rowcount");
            LOG.debug("Size = "+size);
            entCollection.setCount(size);
            return entCollection;
         }

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
                  value = resultSet.getTimestamp(fieldName);
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
         return entCollection;
      }

      return entCollection;
   }

   private URI createId(String entitySetName, Object id) {
      try {
         return new URI(entitySetName + "('" + String.valueOf(id) + "')");
      } catch (URISyntaxException e) {
         throw new ODataRuntimeException("Unable to create id for entity: " + entitySetName, e);
      }
   }

}
