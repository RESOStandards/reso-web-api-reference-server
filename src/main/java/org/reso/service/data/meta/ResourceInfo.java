package org.reso.service.data.meta;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.jdbc.MongoConnection;
import com.mongodb.jdbc.MongoDatabaseMetaData;
import com.mongodb.jdbc.MongoResultSet;
import org.bson.Document;
import com.mongodb.client.MongoIterable;

import org.apache.olingo.commons.api.data.Entity;
import org.apache.olingo.commons.api.data.EntityCollection;
import org.apache.olingo.commons.api.data.Property;
import org.apache.olingo.commons.api.data.ValueType;
import org.apache.olingo.commons.api.edm.EdmEntitySet;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.apache.olingo.server.api.ODataApplicationException;
import org.apache.olingo.server.api.uri.UriInfo;
import org.apache.olingo.server.api.uri.UriParameter;
import org.reso.service.data.common.CommonDataProcessing;
import org.reso.service.servlet.RESOservlet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ResourceInfo
{
   protected String tableName;
   protected String resourceName;
   protected String resourcesName;
   protected FullQualifiedName fqn;
   protected String primaryKeyName;

   protected static final Logger LOG = LoggerFactory.getLogger(ResourceInfo.class);

   /**
    * Accessors
    */

   public String getTableName()
   {
      return tableName;
   }

   public String getResourcesName()
   {
      return resourcesName;
   }

   public String getResourceName()
   {
      return resourceName;
   }

   public String getPrimaryKeyName()
   {
      return primaryKeyName;
   }

   public ArrayList<FieldInfo> getFieldList()
   {
      return null;
   }

   public Boolean useCustomDatasource() { return false; }

   public FullQualifiedName getFqn(String namespace)
   {
      if (this.fqn==null)
         this.fqn = new FullQualifiedName(namespace, getResourceName());

      return this.fqn;
   }

   public void findPrimaryKey(Connection connect) throws SQLException
   {
      String primaryKey = null;
      DatabaseMetaData metadata = connect.getMetaData();

      // Check if this is MongoDB
      if (metadata.getDatabaseProductName().toLowerCase().contains("mongodb")) {
         MongoConnection mongoConnect = (MongoConnection) connect;
         primaryKey = findMongoPrimaryKey(mongoConnect);
      } else {

         ResultSet pkColumns = metadata.getPrimaryKeys(null, null, getTableName());

         while (pkColumns.next()) {
            String pkColumnName = pkColumns.getString("COLUMN_NAME");
            Integer pkPosition = pkColumns.getInt("KEY_SEQ");
            LOG.debug("" + pkColumnName + " is the " + pkPosition + ". column of the primary key of the table " + tableName);
            primaryKey = pkColumnName; //.toLowerCase();  // lowercase only needed for PostgreSQL
         }


         String[] splitKey = primaryKey.split("Numeric");
         if (splitKey.length >= 1)
            primaryKey = splitKey[0];

         ArrayList<FieldInfo> fields = this.getFieldList();
         for (FieldInfo field : fields) {
            String fieldName = field.getFieldName();
            if (primaryKey.equals(fieldName))
               primaryKey = field.getODATAFieldName();
         }

      }
      this.primaryKeyName = primaryKey;

   }

   private String findMongoPrimaryKey(MongoConnection connect) {
      String primaryKey = null;

      try {
         // Get metadata from the connection
         MongoDatabaseMetaData metadata = (MongoDatabaseMetaData) connect.getMetaData();

         // Fetch indexes using getIndexInfo; assumes the database (catalog) is specified
         MongoResultSet indexes = (MongoResultSet) metadata.getIndexInfo("reso", null, getTableName(), true, false);

         while (indexes.next()) {
            // Retrieve whether the index is unique
            boolean isUnique = !indexes.getBoolean("NON_UNIQUE");

            // Retrieve the name of the indexed column
            String indexedColumn = indexes.getString("COLUMN_NAME");

            // Log and store the first unique index
            if (isUnique && indexedColumn != null) {
               primaryKey = indexedColumn;
               LOG.info("MongoDB Unique Index Found: Column: " + primaryKey);
               break; // Exit loop after finding the first unique index
            }
         }

         if (primaryKey == null) {
            LOG.warn("No unique index found for collection: " + getTableName());
         }

      } catch (SQLException e) {
         LOG.error("Error fetching MongoDB primary key from JDBC metadata: " + e.getMessage(), e);
      }

      return primaryKey;
   }


   public Entity getData(EdmEntitySet edmEntitySet, List<UriParameter> keyPredicates)
   {
      return null;
   }

   public EntityCollection getData(EdmEntitySet edmEntitySet, UriInfo uriInfo, boolean isCount) throws ODataApplicationException
   {
      return null;
   }
}
