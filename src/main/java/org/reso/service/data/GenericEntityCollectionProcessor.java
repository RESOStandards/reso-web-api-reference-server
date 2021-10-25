package org.reso.service.data;


import org.apache.olingo.commons.api.data.*;
import org.apache.olingo.commons.api.edm.EdmEntitySet;
import org.apache.olingo.commons.api.edm.EdmEntityType;
import org.apache.olingo.commons.api.edm.EdmProperty;
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
import org.reso.service.data.common.CommonDataProcessing;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.MySQLFilterExpressionVisitor;
import org.reso.service.data.meta.PostgreSQLFilterExpressionVisitor;
import org.reso.service.data.meta.ResourceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.sql.*;
import java.util.*;

public class GenericEntityCollectionProcessor implements EntityCollectionProcessor
{
   private              OData                odata;
   private              ServiceMetadata      serviceMetadata;
   private       Connection connect           = null;
   private final String     dbType;
   HashMap<String, ResourceInfo> resourceList = null;
   private static final Logger               LOG               = LoggerFactory.getLogger(GenericEntityCollectionProcessor.class);

   /**
    * If you use this constructor, make sure to set your resourceInfo
    * @param connection
    */
   public GenericEntityCollectionProcessor(Connection connection, String dbType)
   {
      this.resourceList = new HashMap<>();
      this.connect = connection;
      this.dbType = dbType;
   }

   public void init(OData odata, ServiceMetadata serviceMetadata) {
      this.odata = odata;
      this.serviceMetadata = serviceMetadata;
   }

   public void addResource(ResourceInfo resource, String name)
   {
      resourceList.put(name,resource);
   }

   public void readEntityCollection(ODataRequest request, ODataResponse response, UriInfo uriInfo, ContentType responseFormat)
            throws ODataApplicationException, SerializerException
   {

      // 1st we have retrieve the requested EntitySet from the uriInfo object (representation of the parsed service URI)
      List<UriResource> resourcePaths = uriInfo.getUriResourceParts();
      UriResourceEntitySet uriResourceEntitySet = (UriResourceEntitySet) resourcePaths.get(0); // in our example, the first segment is the EntitySet
      EdmEntitySet edmEntitySet = uriResourceEntitySet.getEntitySet();


      String resourceName = uriResourceEntitySet.toString();

      ResourceInfo resource = this.resourceList.get(resourceName);

      boolean isCount = false;
      CountOption countOption = uriInfo.getCountOption();
      if (countOption != null) {
         isCount = countOption.getValue();
         if (isCount){
            LOG.debug("Count str:"+countOption.getText() );
         }
      }

      // 2nd: fetch the data from backend for this requested EntitySetName
      // it has to be delivered as EntitySet object
      EntityCollection entitySet;

      if (resource.useCustomDatasource() )
      {
         entitySet = resource.getData(edmEntitySet, uriInfo, isCount);
      }
      else
      {
         entitySet = getData(edmEntitySet, uriInfo, isCount, resource);
      }

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
         SelectOption selectOption = uriInfo.getSelectOption();
         if (selectOption!=null)
         {
            opts = EntityCollectionSerializerOptions.with()
                     .contextURL(contextUrl)
                     .select(selectOption)
                     .id(id)
                     .build();
         }
         else
         {
            opts = EntityCollectionSerializerOptions.with().id(id).contextURL(contextUrl).build();
         }
      }
      SerializerResult serializerResult = serializer.entityCollection(serviceMetadata, edmEntityType, entitySet, opts);
      InputStream serializedContent = serializerResult.getContent();

      // Finally: configure the response object: set the body, headers and status code
      response.setContent(serializedContent);
      response.setStatusCode(HttpStatusCode.OK.getStatusCode());
      response.setHeader(HttpHeader.CONTENT_TYPE, responseFormat.toContentTypeString());
   }

   protected EntityCollection getData(EdmEntitySet edmEntitySet, UriInfo uriInfo, boolean isCount, ResourceInfo resource) throws ODataApplicationException {
      ArrayList<FieldInfo> fields = resource.getFieldList();

      EntityCollection entCollection = new EntityCollection();

      List<Entity> productList = entCollection.getEntities();

      Map<String, String> properties = System.getenv();

      try {
         String primaryFieldName = resource.getPrimaryKeyName();

         FilterOption filter = uriInfo.getFilterOption();
         String sqlCriteria = null;
         if (filter!=null)
         {
            if (this.dbType.equals("mysql"))
            {
               sqlCriteria = filter.getExpression().accept(new MySQLFilterExpressionVisitor(resource));
            }
            else if (this.dbType.equals("postgres"))
            {
               sqlCriteria = filter.getExpression().accept(new PostgreSQLFilterExpressionVisitor(resource));
            }
         }
         HashMap<String,Boolean> selectLookup = null;

         // Statements allow to issue SQL queries to the database
         Statement statement = connect.createStatement();
         // Result set get the result of the SQL query
         String queryString = null;

         // Logic for $count
         if (isCount)
         {
            queryString = "select count(*) AS rowcount from " + resource.getTableName();
         }
         else
         {
            SelectOption selectOption = uriInfo.getSelectOption();
            if (selectOption!=null)
            {
               selectLookup = new HashMap<>();
               selectLookup.put(primaryFieldName,true);

               for (SelectItem sel:selectOption.getSelectItems())
               {
                  String val = sel.getResourcePath().getUriResourceParts().get(0).toString();
                  selectLookup.put(val,true);
               }
               EdmEntityType edmEntityType = edmEntitySet.getEntityType();
               String selectList = odata.createUriHelper().buildContextURLSelectList(edmEntityType,
                                                                                     null, selectOption);

               LOG.debug("Select list:"+selectList);
               queryString = "select "+selectList+" from " + resource.getTableName();
            }
            else
            {
               queryString = "select * from " + resource.getTableName();
            }
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
                  final String sortPropertyName = edmProperty.getName(); // .toLowerCase();
                  queryString = queryString + " ORDER BY "+sortPropertyName;
                  if(orderByItem.isDescending())
                  {
                     queryString = queryString + " DESC";
                  }
               }
            }
         }
         LOG.info("SQL Query: "+queryString);
         ResultSet resultSet = statement.executeQuery(queryString);

         // special return logic for $count
         if (isCount && resultSet.next())
         {
            int size = resultSet.getInt("rowcount");
            LOG.debug("Size = "+size);
            entCollection.setCount(size);
            return entCollection;
         }
         ArrayList<String> resourceRecordKeys = new ArrayList<>();

         // add the lookups from the database.
         while (resultSet.next())
         {
            Entity ent = CommonDataProcessing.getEntityFromRow(resultSet,resource,selectLookup);
            resourceRecordKeys.add( ent.getProperty(primaryFieldName).getValue().toString() );
            productList.add(ent);
         }
         List<FieldInfo> enumFields = CommonDataProcessing.gatherEnumFields(resource);

         if (productList.size()>0 && resourceRecordKeys.size()>0 && enumFields.size()>0)
         {
            queryString = "select * from lookup_value";
            queryString = queryString + " WHERE ResourceRecordKey in (\"" + String.join("','", resourceRecordKeys ) + "\")";

            LOG.info("SQL Query: "+queryString);
            resultSet = statement.executeQuery(queryString);

            // add the lookups from the database.
            HashMap<String, HashMap<String, Object>> entities = new HashMap<>();
            while (resultSet.next())
            {
               CommonDataProcessing.getEntityValues(resultSet, entities, enumFields);
            }
            for (Entity product :productList)
            {
               String key = product.getProperty(primaryFieldName).getValue().toString();
               HashMap<String, Object> enumValues = entities.get(key);
               CommonDataProcessing.setEntityEnums(enumValues,product,enumFields);
            }
         }

         statement.close();

      } catch (Exception e) {
            LOG.error("Server Error occurred in reading "+resource.getResourceName(), e);
         return entCollection;
      }

      return entCollection;
   }

}
