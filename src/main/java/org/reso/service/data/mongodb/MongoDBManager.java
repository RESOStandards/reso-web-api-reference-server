package org.reso.service.data.mongodb;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MongoDBManager {
    private static final Logger LOG = LoggerFactory.getLogger(MongoDBManager.class);
    private static MongoClient mongoClient;
    private static MongoDatabase database;
    private static final String CONNECTION_STRING = System.getenv().getOrDefault("SPRING_DATA_MONGODB_URI",
            "mongodb://mongo-db:27017/reso");
    private static final String DATABASE_NAME = "reso";

    static {
        try {
            mongoClient = MongoClients.create(CONNECTION_STRING);
            database = mongoClient.getDatabase(DATABASE_NAME);
            LOG.info("MongoDB connection initialized successfully with URI: {}",
                    CONNECTION_STRING.replaceAll(":[^/]+@", ":****@"));
        } catch (Exception e) {
            LOG.error("Failed to initialize MongoDB connection: {}", e.getMessage());
            throw new RuntimeException("Failed to initialize MongoDB connection", e);
        }
    }

    public static MongoClient getClient() {
      if (mongoClient == null) {
          throw new RuntimeException("Mongo client not initialized");
      }
      return mongoClient;
  }

    public static MongoDatabase getDatabase() {
        if (database == null) {
            throw new RuntimeException("MongoDB database not initialized");
        }
        return database;
    }

    public static void close() {
        if (mongoClient != null) {
            try {
                mongoClient.close();
                LOG.info("MongoDB connection closed successfully");
            } catch (Exception e) {
                LOG.error("Error closing MongoDB connection: {}", e.getMessage());
            }
        }
    }
}