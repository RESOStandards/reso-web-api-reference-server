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
import org.bson.Document;
import org.bson.conversions.Bson;
import org.reso.service.data.common.CommonDataProcessing;
import org.reso.service.data.helper.ExpandUtils;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.MongoDBFilterExpressionVisitor;
import org.reso.service.data.meta.ResourceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoClient;

import java.io.InputStream;
import java.net.URI;
import java.sql.*;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class GenericEntityCollectionProcessor implements EntityCollectionProcessor {
  // Inner class to hold both EntityCollection and total count
   static class DataResult {
      private final EntityCollection entityCollection;
      private final int totalCount;
      
      public DataResult(EntityCollection entityCollection, int totalCount) {
         this.entityCollection = entityCollection;
         this.totalCount = totalCount;
      }
      
      public EntityCollection getEntityCollection() {
         return entityCollection;
      }
      
      public int getTotalCount() {
         return totalCount;
      }
   }

   private OData odata;
   private ServiceMetadata serviceMetadata;
   private final MongoClient mongoClient;
   private Connection connect;
   private String dbType;
   private ExpandUtils expandUtils;
   HashMap<String, ResourceInfo> resourceList = null;
   private static final Logger LOG = LoggerFactory.getLogger(GenericEntityCollectionProcessor.class);
   private static final int PAGE_SIZE = 10;

   public GenericEntityCollectionProcessor(MongoClient mongoClient) {
      this.mongoClient = mongoClient;
      this.dbType = System.getenv().getOrDefault("DB_TYPE", "mongodb").toLowerCase();
      try {
         if (!"mongodb".equals(this.dbType)) {
            String jdbcUrl = System.getenv().getOrDefault("JDBC_URL", "");
            String username = System.getenv().getOrDefault("DB_USERNAME", "");
            String password = System.getenv().getOrDefault("DB_PASSWORD", "");
            this.connect = DriverManager.getConnection(jdbcUrl, username, password);
         }
      } catch (SQLException e) {
         LOG.error("Failed to establish database connection", e);
      }
      this.expandUtils = new ExpandUtils(mongoClient);
      this.resourceList = new HashMap<>();
   }

   @Override
   public void init(OData odata, ServiceMetadata serviceMetadata) {
      this.odata = odata;
      this.serviceMetadata = serviceMetadata;
      // Log all navigation configurations at startup
      expandUtils.logNavigationConfigurations();
   }

   public void addResource(ResourceInfo resource, String name) {
      resourceList.put(name, resource);
   }

   public void readEntityCollection(ODataRequest request, ODataResponse response, UriInfo uriInfo,
         ContentType responseFormat)
         throws ODataApplicationException, SerializerException {

      // 1st we have retrieve the requested EntitySet from the uriInfo object
      // (representation of the parsed service URI)
      List<UriResource> resourcePaths = uriInfo.getUriResourceParts();
      UriResourceEntitySet uriResourceEntitySet = (UriResourceEntitySet) resourcePaths.get(0); // in our example, the
                                                                                               // first segment is the
                                                                                               // EntitySet
      EdmEntitySet edmEntitySet = uriResourceEntitySet.getEntitySet();

      String resourceName = uriResourceEntitySet.toString();

      ResourceInfo resource = this.resourceList.get(resourceName);

      boolean isCount = false;
      CountOption countOption = uriInfo.getCountOption();
      if (countOption != null) {
         isCount = countOption.getValue();
         if (isCount) {
            LOG.debug("Count str:" + countOption.getText());
         }
      }

      // 2nd: fetch the data from backend for this requested EntitySetName
      // it has to be delivered as EntitySet object
      EntityCollection entitySet;
      int totalCount = 0; // Always get total count for pagination logic

      if (resource.useCustomDatasource()) {
         entitySet = resource.getData(edmEntitySet, uriInfo, isCount);
      } else {
         DataResult dataResult = getData(edmEntitySet, uriInfo, isCount, resource);
         entitySet = dataResult.getEntityCollection();
         totalCount = dataResult.getTotalCount();
      }

      TopOption topOption = uriInfo.getTopOption();
      SkipOption skipOption = uriInfo.getSkipOption();
      int topNumber = topOption == null ? PAGE_SIZE : topOption.getValue();
      int skipNumber = skipOption == null ? 0 : skipOption.getValue();

      // 3rd: create a serializer based on the requested format (json)
      try {
        // Only add next link if there are more records to fetch
         if (!resource.useCustomDatasource() && (skipNumber + topNumber) < totalCount) {
            entitySet.setNext(new URI(modifyUrl(request.getRawRequestUri(), topNumber, skipNumber + topNumber)));
         }
         uriInfo.asUriInfoAll().getFormatOption().getFormat(); // If Format is given, then we will use what it has.
      } catch (Exception e) {
         responseFormat = ContentType.JSON; // If format is not set in the $format, then use JSON.
         // There is some magic that will select XML if you're viewing from a browser or
         // something which I'm bypassing here.
         // If you want a different $format, explicitly state it.
      }

      ODataSerializer serializer = odata.createSerializer(responseFormat);

      // 4th: Now serialize the content: transform from the EntitySet object to
      // InputStream
      EdmEntityType edmEntityType = edmEntitySet.getEntityType();
      SelectOption selectOption = uriInfo.getSelectOption();
      ExpandOption expandOption = uriInfo.getExpandOption();
      String selectList = odata.createUriHelper().buildContextURLSelectList(edmEntityType,
            expandOption, selectOption);
      ContextURL contextUrl = ContextURL.with().entitySet(edmEntitySet).selectList(selectList).build();

      final String id = request.getRawBaseUri() + "/" + edmEntitySet.getName();
      EntityCollectionSerializerOptions opts = null;
      if (isCount) // If there's a $count=true in the query string, we need to have a different
                   // formatting options.
      {
         opts = EntityCollectionSerializerOptions.with()
               .contextURL(contextUrl)
               .id(id)
               .count(countOption)
               .select(selectOption).expand(expandOption)
               .build();
      } else {
         if (selectOption != null) {
            opts = EntityCollectionSerializerOptions.with()
                  .contextURL(contextUrl)
                  .select(selectOption).expand(expandOption)
                  .id(id)
                  .build();
         } else {
            opts = EntityCollectionSerializerOptions.with().id(id).contextURL(contextUrl).expand(expandOption).build();
         }
      }
      SerializerResult serializerResult = serializer.entityCollection(serviceMetadata, edmEntityType, entitySet, opts);
      InputStream serializedContent = serializerResult.getContent();

      // Finally: configure the response object: set the body, headers and status code
      response.setContent(serializedContent);
      response.setStatusCode(HttpStatusCode.OK.getStatusCode());
      response.setHeader(HttpHeader.CONTENT_TYPE, responseFormat.toContentTypeString());
   }

   protected DataResult getData(EdmEntitySet edmEntitySet, UriInfo uriInfo, boolean isCount,
         ResourceInfo resource) throws ODataApplicationException {
      String dbType = getDatabaseType();
      if ("mongodb".equals(dbType)) {
         return getDataFromMongo(edmEntitySet, uriInfo, isCount, resource);
      } else {
         return getDataFromSQL(edmEntitySet, uriInfo, isCount, resource);
      }
   }

   protected DataResult getDataFromMongo(EdmEntitySet edmEntitySet, UriInfo uriInfo, boolean isCount,
         ResourceInfo resource) throws ODataApplicationException {
      EntityCollection dataCollection = new EntityCollection();
      int totalCount = 0;

      try {
         // Log MongoDB client state
         LOG.info("MongoDB client status - isNull: {}", mongoClient == null);

         // Initialize with empty filter
         Document filter = new Document();

         FilterOption filterOption = uriInfo.getFilterOption();
         if (filterOption != null) {
            String filterExpr = filterOption.getExpression()
                  .accept(new MongoDBFilterExpressionVisitor(resource));
            filter = Document.parse(filterExpr);
            LOG.info("Applied filter expression: {}", filterExpr);
         }

         TopOption topOption = uriInfo.getTopOption();
         SkipOption skipOption = uriInfo.getSkipOption();
         int topNumber = topOption == null ? PAGE_SIZE : topOption.getValue();
         int skipNumber = skipOption == null ? 0 : skipOption.getValue();

         LOG.info("Pagination - top: {}, skip: {}", topNumber, skipNumber);

          // Always get total count for pagination logic
         totalCount = resource.executeMongoCount(filter);
         LOG.info("Total count: {}", totalCount);

         // Only set count in response if requested
         if (isCount) {
             dataCollection.setCount(totalCount);
             LOG.info("Count query result: {}", totalCount);
         } else {
            // Get the base data collection
            MongoDatabase database = mongoClient.getDatabase("reso");
            String collectionName = resource.getTableName().toLowerCase();
            LOG.info("Attempting to access collection: {}", collectionName);

            // List all collections in the database
            LOG.info("Available collections in database:");
            database.listCollectionNames().into(new ArrayList<>()).forEach(name -> LOG.info("- Collection: {}", name));

            MongoCollection<Document> collection = database.getCollection(collectionName);
            LOG.info("Collection stats: count={}", collection.countDocuments());

            LOG.info("Executing MongoDB query on collection: {} with filter: {}",
                  collection.getNamespace(),
                  filter.toJson());

            FindIterable<Document> findIterable = collection.find(filter)
                  .skip(skipNumber)
                  .limit(topNumber)
                  .maxTime(5000, TimeUnit.MILLISECONDS);

            // Execute query and build collection
            try (MongoCursor<Document> cursor = findIterable.iterator()) {
               int documentCount = 0;
               while (cursor.hasNext()) {
                  Document doc = cursor.next();
                  documentCount++;
                  LOG.info("Found document {}: {}", documentCount, doc.toJson());
                  Entity entity = CommonDataProcessing.getEntityFromDocument(doc, resource);
                  dataCollection.getEntities().add(entity);
               }
               LOG.info("Total documents processed: {}", documentCount);
            }

            LOG.info("Retrieved {} documents from MongoDB", dataCollection.getEntities().size());
         }

        // Get the base data collection
        MongoDatabase database = mongoClient.getDatabase("reso");
        String collectionName = resource.getTableName().toLowerCase();
        LOG.info("Attempting to access collection: {}", collectionName);

        // List all collections in the database
        LOG.info("Available collections in database:");
        database.listCollectionNames().into(new ArrayList<>()).forEach(name -> LOG.info("- Collection: {}", name));

        MongoCollection<Document> collection = database.getCollection(collectionName);
        LOG.info("Collection stats: count={}", collection.countDocuments());

        LOG.info("Executing MongoDB query on collection: {} with filter: {}",
              collection.getNamespace(),
              filter.toJson());

        FindIterable<Document> findIterable = collection.find(filter)
              .skip(skipNumber)
              .limit(topNumber)
              .maxTime(5000, TimeUnit.MILLISECONDS);

        // Execute query and build collection
        try (MongoCursor<Document> cursor = findIterable.iterator()) {
           int documentCount = 0;
           while (cursor.hasNext()) {
              Document doc = cursor.next();
              documentCount++;
              LOG.info("Found document {}: {}", documentCount, doc.toJson());
              Entity entity = CommonDataProcessing.getEntityFromDocument(doc, resource);
              dataCollection.getEntities().add(entity);
           }
           LOG.info("Total documents processed: {}", documentCount);
        }

        LOG.info("Retrieved {} documents from MongoDB", dataCollection.getEntities().size());

         // Handle $expand if present
         ExpandOption expandOption = uriInfo.getExpandOption();
         if (expandOption != null && !dataCollection.getEntities().isEmpty()) {
            expandUtils.handleMongoExpand(dataCollection, resource, expandOption);
         }
      } catch (Exception e) {
         LOG.error("Error executing MongoDB query: {}", e.getMessage(), e);
         LOG.error("Stack trace:", e);
         throw new ODataApplicationException("Error executing MongoDB query: " + e.getMessage(),
               HttpStatusCode.INTERNAL_SERVER_ERROR.getStatusCode(), Locale.ENGLISH);
      }

      return new DataResult(dataCollection, totalCount);
   }

protected DataResult getDataFromSQL(EdmEntitySet edmEntitySet, UriInfo uriInfo, boolean isCount,
         ResourceInfo resource) throws ODataApplicationException {
      ArrayList<FieldInfo> fields = resource.getFieldList();
      EntityCollection entCollection = new EntityCollection();
      List<Entity> entityList = entCollection.getEntities();
      Bson mongoCriteria = null;
      int totalCount = 0;
      
      try {
         String primaryFieldName = resource.getPrimaryKeyName();
         FilterOption filter = uriInfo.getFilterOption();
         String sqlCriteria = null;

         if (filter != null) {
            if (this.mongoClient == null) {
               throw new ODataApplicationException("MongoDB client not initialized",
                     HttpStatusCode.INTERNAL_SERVER_ERROR.getStatusCode(), Locale.ENGLISH);
            }
            sqlCriteria = filter.getExpression().accept(new MongoDBFilterExpressionVisitor(resource));
         }

         HashMap<String, Boolean> selectLookup = null;
         Statement statement = connect.createStatement();
         String queryString = null;
         LOG.info("Detected Database Type: " + getDatabaseType());

         // Always get total count first
         String countQuery = "SELECT count(*) AS rowcount FROM " + resource.getTableName();
         if (sqlCriteria != null && !sqlCriteria.isEmpty()) {
            countQuery += " WHERE " + sqlCriteria;
         }
         
         ResultSet countResult = statement.executeQuery(countQuery);
         if (countResult.next()) {
            totalCount = countResult.getInt("rowcount");
         }
         countResult.close();
         LOG.info("Total count: {}", totalCount);

         // Set count in response if requested
         if (isCount) {
            entCollection.setCount(totalCount);
         }

         // Now get the actual data
         queryString = "SELECT * FROM " + resource.getTableName();

         // SelectOption selectOption = uriInfo.getSelectOption();

         if (sqlCriteria != null && !sqlCriteria.isEmpty()) {
            queryString += " WHERE " + sqlCriteria;
         }

         LOG.info("Executing query in SQL...");

         // Pagination logic: Ensure LIMIT is only added when it's > 0
         TopOption topOption = uriInfo.getTopOption();
         int topNumber = (topOption == null) ? PAGE_SIZE : topOption.getValue();
         SkipOption skipOption = uriInfo.getSkipOption();
         int skipNumber = (skipOption != null) ? skipOption.getValue() : 0;

         LOG.debug("dbType: " + this.dbType);
         LOG.debug("Top: " + topNumber + ", Skip: " + skipNumber);

         OrderByOption orderByOption = uriInfo.getOrderByOption();
         if (orderByOption != null && orderByOption.getOrders() != null && !orderByOption.getOrders().isEmpty()) {
            List<OrderByItem> orderItemList = orderByOption.getOrders();
            final OrderByItem orderByItem = orderItemList.get(0);
            Expression expression = orderByItem.getExpression();
            if (expression instanceof Member) {
               UriInfoResource resourcePath = ((Member) expression).getResourcePath();
               UriResource uriResource = resourcePath.getUriResourceParts().get(0);
               if (uriResource instanceof UriResourcePrimitiveProperty) {
                  EdmProperty edmProperty = ((UriResourcePrimitiveProperty) uriResource).getProperty();
                  final String sortPropertyName = edmProperty.getName();
                  queryString += " ORDER BY " + sortPropertyName;
                  if (orderByItem.isDescending()) {
                     queryString += " DESC";
                  }
               }
            }
         }

         LOG.info("SQL Query after workaround: " + queryString);
         if (topNumber > 0) {
            if (this.dbType.equals("mysql")) {
               queryString += " LIMIT " + topNumber + ", " + skipNumber;
            } else if (this.dbType.equals("postgres")) {
               queryString += " LIMIT " + topNumber + " OFFSET " + skipNumber;
            } else {
               // Default case
               if (topNumber > 0) {
                  queryString += " LIMIT " + topNumber + " OFFSET " + skipNumber;
               }
            }
         } else {
            LOG.warn("Skipping LIMIT because topNumber is 0");
         }

         LOG.info("Final SQL Query before execution: " + queryString);
         ResultSet resultSet = statement.executeQuery(queryString);

         while (resultSet.next()) {
            Entity ent = CommonDataProcessing.getEntityFromRow(resultSet, resource, selectLookup);
            entityList.add(ent);
         }
         statement.close();
      } catch (Exception e) {
         LOG.error("Server Error occurred in reading " + resource.getResourceName(), e);
         return new DataResult(entCollection, totalCount);
      }

      return new DataResult(entCollection, totalCount);
   }

   private static String modifyUrl(String url, Integer topValue, Integer skipValue) {
      url = modifyParameter(url, "\\$top=\\d+", "\\$top", topValue);
      url = modifyParameter(url, "\\$skip=\\d+", "\\$skip", skipValue);
      return url;
   }

   // Helper method to replace or append a parameter
   private static String modifyParameter(String url, String pattern, String paramName, Integer value) {
      Pattern p = Pattern.compile(pattern);
      Matcher m = p.matcher(url);

      if (value != null) {
         String replacement = paramName + "=" + value;
         // Check if the parameter already exists
         if (m.find()) {
            // Replace existing parameter
            url = m.replaceFirst(replacement);
            LOG.info("1: Url Replacement: " + url);
         } else {
            // Append parameter, handling both cases: with and without existing query
            url += (url.contains("?") ? "&" : "?") + replacement.replace("\\", "");
            LOG.info("2: Url Replacement: " + url);
         }
      }

      return url;
   }

   private String getDatabaseType() {
      if (this.dbType != null) {
         return this.dbType;
      }
      try {
         if (this.connect != null) {
            String dbProductName = this.connect.getMetaData().getDatabaseProductName().toLowerCase();
            if (dbProductName.contains("mysql")) {
               return "mysql";
            } else if (dbProductName.contains("postgres")) {
               return "postgres";
            }
         }
         return "mongodb";
      } catch (SQLException e) {
         LOG.error("Error getting database type", e);
         return "mongodb";
      }
   }

}
