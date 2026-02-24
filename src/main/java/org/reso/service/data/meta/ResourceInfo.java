package org.reso.service.data.meta;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.BsonDocument;
import org.bson.Document;
import org.bson.conversions.Bson;
import com.mongodb.client.MongoIterable;
import com.mongodb.client.model.Sorts;
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
import org.reso.service.data.mongodb.MongoDBManager;
import org.reso.service.servlet.RESOservlet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class ResourceInfo {
    protected String tableName;
    protected String resourceName;
    protected String resourcesName;
    protected FullQualifiedName fqn;
    protected String primaryKeyName;

    protected static final Logger LOG = LoggerFactory.getLogger(ResourceInfo.class);
    private static MongoClient mongoClient = null;
    private static String syncConnStr = System.getenv().getOrDefault("MONGO_SYNC_CONNECTION_STR", "");
    private static final String DB_TYPE = System.getenv().getOrDefault("DB_TYPE", "mongodb").toLowerCase();
    private static final String MYSQL_URL = System.getenv().getOrDefault("JDBC_URL", "jdbc:mysql://mysql-db:3306/reso");
    private static final String MYSQL_USER = System.getenv().getOrDefault("DB_USERNAME", "root");
    private static final String MYSQL_PASSWORD = System.getenv().getOrDefault("DB_PASSWORD", "root");

    /**
     * Accessors
     */

    public String getTableName() {
        return tableName;
    }

    public String getResourcesName() {
        return resourcesName;
    }

    public String getResourceName() {
        return resourceName;
    }

    public String getPrimaryKeyName() {
        return primaryKeyName;
    }

    public ArrayList<FieldInfo> getFieldList() {
        return null;
    }

    public Boolean useCustomDatasource() {
        return false;
    }

    public FullQualifiedName getFqn(String namespace) {
        if (this.fqn == null)
            this.fqn = new FullQualifiedName(namespace, getResourceName());

        return this.fqn;
    }

    private static synchronized MongoClient getMongoClient() {
        if (mongoClient == null) {
            try {
              mongoClient = MongoDBManager.getClient();

                // Test the connection
                mongoClient.getDatabase("admin").runCommand(new Document("ping", 1));
                LOG.info("Successfully connected to MongoDB");
            } catch (Exception e) {
                LOG.error("Failed to connect to MongoDB: " + e.getMessage(), e);
                if (mongoClient != null) {
                    try {
                        mongoClient.close();
                    } catch (Exception ce) {
                        LOG.error("Error closing MongoDB client", ce);
                    }
                    mongoClient = null;
                }
            }
        }
        return mongoClient;
    }

    private static Connection getMySQLConnection() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(MYSQL_URL, MYSQL_USER, MYSQL_PASSWORD);
            LOG.info("Successfully connected to MySQL");
            return conn;
        } catch (Exception e) {
            LOG.error("Failed to connect to MySQL: " + e.getMessage(), e);
            return null;
        }
    }

    public void findPrimaryKey(Connection connect) throws SQLException {
        if (connect == null) {
            connect = getMySQLConnection();
            if (connect == null) {
                LOG.error("Could not establish MySQL connection");
                return;
            }
        }

        String primaryKey = null;
        try {
            DatabaseMetaData metadata = connect.getMetaData();
            ResultSet pkColumns = metadata.getPrimaryKeys(null, null, getTableName());

            while (pkColumns.next()) {
                Integer pkPosition = pkColumns.getInt("KEY_SEQ");
                String pkColumnName = pkColumns.getString("COLUMN_NAME");
                LOG.debug("" + pkColumnName + " is the " + pkPosition + ". column of the primary key of the table "
                        + tableName);
                primaryKey = pkColumnName;
            }

            if (primaryKey != null) {
                String[] splitKey = primaryKey.split("Numeric");
                if (splitKey.length >= 1)
                    primaryKey = splitKey[0];

                ArrayList<FieldInfo> fields = this.getFieldList();
                for (FieldInfo field : fields) {
                    String fieldName = field.getFieldName();
                    if (primaryKey.equals(fieldName))
                        primaryKey = field.getODATAFieldName();
                }
            } else {
                LOG.warn("No primary key found for table: " + tableName);
                primaryKey = "id"; // Default primary key name
            }
        } catch (SQLException e) {
            LOG.error("Error finding primary key: " + e.getMessage(), e);
            primaryKey = "id"; // Default to id in case of error
        } finally {
            if (connect != null) {
                try {
                    connect.close();
                } catch (SQLException e) {
                    LOG.error("Error closing MySQL connection", e);
                }
            }
        }

        this.primaryKeyName = primaryKey;
    }

    public void findMongoPrimaryKey(MongoClient mongoClient) {
        String primaryKey = null;

        try {
            MongoDatabase database = mongoClient.getDatabase("reso");
            MongoCollection<Document> collection = database.getCollection(tableName);
            ArrayList<Document> indexDocs = collection.listIndexes().into(new ArrayList<Document>());

            for (Document indexDoc : indexDocs) {
                LOG.info("Index Document: " + indexDoc.toJson());
                Boolean isUnique = indexDoc.getBoolean("unique", false);
                Document keyDoc = (Document) indexDoc.get("key");

                if (keyDoc != null && isUnique) {
                    for (String indexedField : keyDoc.keySet()) {
                        primaryKey = indexedField;
                        LOG.info("Unique Index Found: Field = " + primaryKey);
                        break;
                    }
                }

                if (primaryKey != null) {
                    break;
                }
            }

            if (primaryKey == null) {
                LOG.warn("No unique index found for collection: " + tableName);
                // Default to _id if no other unique index is found
                primaryKey = "_id";
            }
        } catch (Exception e) {
            LOG.error("Error finding MongoDB primary key: " + e.getMessage(), e);
            primaryKey = "_id"; // Default to _id in case of error
        }

        this.primaryKeyName = primaryKey;
    }

    public Entity getData(EdmEntitySet edmEntitySet, List<UriParameter> keyPredicates) {
        return null;
    }

    public EntityCollection getData(EdmEntitySet edmEntitySet, UriInfo uriInfo, boolean isCount)
            throws ODataApplicationException {
        return null;
    }

    public EntityCollection executeMongoQuery(int skip, int limit) {
        return executeMongoQuery(null, skip, limit);
    }

    public EntityCollection executeMongoQuery(Bson filter) {
        return executeMongoQuery(filter, 0, 999);
    }

    public EntityCollection executeMongoQuery(Bson filter, int skip, int limit) {
        EntityCollection entCollection = new EntityCollection();
        List<Entity> entityList = entCollection.getEntities();

        Bson sort = Sorts.ascending("_id");
        MongoClient mongoClient = getMongoClient();

        if (mongoClient == null) {
            LOG.error("MongoDB client is not initialized");
            return entCollection;
        }

        try {
            MongoDatabase mongoDatabase = mongoClient.getDatabase("reso");
            MongoCollection<Document> collection = mongoDatabase.getCollection(this.getTableName());
            FindIterable<Document> results;

            if (filter != null) {
                results = collection.find(filter).sort(sort).skip(skip).limit(limit);
            } else {
                results = collection.find().sort(sort).skip(skip).limit(limit);
            }

            for (Document doc : results) {
                Entity ent = CommonDataProcessing.getEntityFromDocument(doc, this);
                entityList.add(ent);
            }
        } catch (Exception e) {
            LOG.error("Error executing MongoDB query", e);
        }

        return entCollection;
    }

    public EntityCollection executeMongoQuery(Bson filter, int skip, int limit, Bson sort) {
        EntityCollection entityCollection = new EntityCollection();
        List<Entity> entities = entityCollection.getEntities();

        MongoClient mongoClient = getMongoClient();
        MongoDatabase mongoDatabase = mongoClient.getDatabase("reso");
        MongoCollection<Document> collection = mongoDatabase.getCollection(this.tableName);
        FindIterable<Document> iterable = (filter == null) ? collection.find() : collection.find(filter);

        if (sort != null) {
            iterable = iterable.sort(sort);
        }

        iterable = iterable.skip(skip).limit(limit);

        for (Document doc : iterable) {
            entities.add(CommonDataProcessing.getEntityFromDocument(doc, this));
        }

        return entityCollection;
    }

    public int executeMongoCount(Bson filter) {
        MongoClient mongoClient = getMongoClient();
        MongoDatabase mongoDatabase = mongoClient.getDatabase("reso");
        MongoCollection<Document> collection = mongoDatabase.getCollection(this.tableName);

        try {
            long count = (filter == null) ? collection.countDocuments() : collection.countDocuments(filter);
            LOG.info("Count result for collection {}: {}", this.tableName, count);
            return (int) count;
        } catch (Exception e) {
            LOG.error("Error counting documents in collection {}", this.tableName, e);
            return 0;
        }
    }

}
