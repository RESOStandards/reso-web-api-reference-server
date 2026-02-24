package org.reso.service.data.helper;

import org.apache.olingo.commons.api.Constants;
import org.apache.olingo.commons.api.data.*;
import org.apache.olingo.server.api.uri.*;
import org.apache.olingo.server.api.uri.queryoption.*;
import org.bson.Document;
import org.reso.service.data.common.CommonDataProcessing;
import org.reso.service.data.meta.ResourceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoClient;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.TimeUnit;
import static org.reso.service.servlet.RESOservlet.resourceLookup;

public class ExpandUtils {
   private MongoClient mongoClient;
   private static final Logger LOG = LoggerFactory.getLogger(ExpandUtils.class);
   private static final Map<String, NavigationConfig> NAVIGATION_CONFIGS = new HashMap<>();

   public ExpandUtils(MongoClient mongoClient) {
      this.mongoClient = mongoClient;
   }

   private enum ResourceType {
      PROPERTY("Property"),
      MEMBER("Member"),
      OFFICE("Office"),
      CONTACTS("Contacts"),
      TEAMS("Teams"),
      SHOWING("Showing"),
      CONTACT_LISTING_NOTES("ContactListingNotes"),
      CONTACT_LISTINGS("ContactListings"),
      HISTORY_TRANSACTIONAL("HistoryTransactional"),
      INTERNET_TRACKING("InternetTracking"),
      OPEN_HOUSE("OpenHouse"),
      OUID("OUID"),
      PROPERTY_GREEN_VERIFICATION("PropertyGreenVerification"),
      PROPERTY_POWER_PRODUCTION("PropertyPowerProduction"),
      PROPERTY_ROOMS("PropertyRooms"),
      PROPERTYUNITTYPES("PropertyUnitTypes"),
      PROSPECTING("Prospecting"),
      QUEUE("Queue"),
      RULES("Rules"),
      SAVED_SEARCH("SavedSearch"),
      TEAMM_EMBERS("TeamMembers");

      private final String value;

      ResourceType(String value) {
         this.value = value;
      }

      public String getValue() {
         return value;
      }

      public static ResourceType fromValue(String value) {
         return Arrays.stream(values())
               .filter(rt -> rt.value.equalsIgnoreCase(value))
               .findFirst()
               .orElse(null);
      }

   }

   private enum CollectionType {
      MEMBER("member", "Member"),
      OFFICE("office", "Office"),
      MEDIA("media", "Media"),
      SOCIAL_MEDIA("socialmedia", "SocialMedia"),
      HISTORY_TRANSACTIONAL("historytransactional", "HistoryTransactional"),
      GREEN_VERIFICATION("propertygreenverification", "GreenBuildingVerification"),
      ROOMS("propertyrooms", "Rooms"),
      UNIT_TYPES("propertyunittypes", "UnitTypes"),
      POWER_PRODUCTION("propertypowerproduction", "PowerProduction"),
      OPEN_HOUSE("openhouse", "OpenHouse"),
      TEAMS("teams", "Teams"),
      OUID("ouid", "OUID"),
      PROPERTY("property", "Property"),
      OTHER_PHONE("other_phone", "OtherPhone"),
      CONTACTS("contacts", "Contacts"),
      CONTACT_LISTING_NOTES("contactlistingnotes", "ContactListingNotes");

      private final String collectionName;
      private final String resourceName;

      CollectionType(String collectionName, String resourceName) {
         this.collectionName = collectionName;
         this.resourceName = resourceName;
      }

      public String getCollectionName() {
         return collectionName;
      }

      public String getResourceName() {
         return resourceName;
      }

      public static CollectionType fromValue(String value) {
         return Arrays.stream(values())
               .filter(ct -> ct.resourceName.equalsIgnoreCase(value) || ct.collectionName.equalsIgnoreCase(value))
               .findFirst()
               .orElse(null);
      }
   }

   private static class NavigationBuilder {
      private final ResourceType sourceResource;
      private final String navProperty;
      private final CollectionType targetCollection;
      private String sourceKey;
      private String targetKey;
      private boolean isCollection;
      private long modificationTimestamp;

      private NavigationBuilder(ResourceType sourceResource, String navProperty, CollectionType targetCollection) {
         this.sourceResource = sourceResource;
         this.navProperty = navProperty;
         this.targetCollection = targetCollection;
         this.modificationTimestamp = System.currentTimeMillis();
      }

      public static NavigationBuilder from(ResourceType sourceResource, String navProperty,
            CollectionType targetCollection) {
         return new NavigationBuilder(sourceResource, navProperty, targetCollection);
      }

      public NavigationBuilder withKeys(String sourceKey, String targetKey) {
         this.sourceKey = sourceKey;
         this.targetKey = targetKey;
         return this;
      }

      public NavigationBuilder asCollection(boolean isCollection) {
         this.isCollection = isCollection;
         return this;
      }

      public NavigationBuilder withTimestamp(long timestamp) {
         this.modificationTimestamp = timestamp;
         return this;
      }

      public void add() {
         addNavConfig(
               sourceResource.getValue(),
               navProperty,
               targetCollection.getCollectionName(),
               sourceKey,
               targetKey,
               isCollection,
               modificationTimestamp);
      }

   }

   private static class ResourceMapping {
      private static final Map<String, String> COLLECTION_TO_RESOURCE = new HashMap<>();

      static {
         for (CollectionType type : CollectionType.values()) {
            COLLECTION_TO_RESOURCE.put(type.getCollectionName(), type.getResourceName());
         }
      }

      static String getResourceName(String collection, String navPropertyName) {
         return COLLECTION_TO_RESOURCE.getOrDefault(collection, navPropertyName);
      }
   }

   static {
      initializeNavigations();
   }

   private static void initializeNavigations() {
      InputStream navigationConfigStream = ExpandUtils.class.getClassLoader()
            .getResourceAsStream("ExpandNavigationConfig.json");
      if (navigationConfigStream == null) {
         LOG.error("Config file not found.");
         return;
      }

      try (InputStreamReader reader = new InputStreamReader(navigationConfigStream, StandardCharsets.UTF_8)) {
         JsonObject root = JsonParser.parseReader(reader).getAsJsonObject();

         for (Map.Entry<String, JsonElement> entry : root.entrySet()) {
            String keyName = entry.getKey();

            ResourceType sourceResource = ResourceType.fromValue(keyName);
            if (sourceResource == null) {
               LOG.debug("Skipping unknown resource type: " + keyName);
               continue;
            }

            JsonArray navArray = entry.getValue().getAsJsonArray();
            for (JsonElement navElement : navArray) {
               processNavigationObject(sourceResource, navElement.getAsJsonObject());
            }
         }
      } catch (Exception e) {
         e.printStackTrace();
      }
   }

   private static void processNavigationObject(ResourceType sourceResource, JsonObject navObj) {
      String navProperty = navObj.get("navProperty").getAsString();
      CollectionType targetCollection = CollectionType.fromValue(getNullableString(navObj, "targetCollection"));
      String sourceKey = getNullableString(navObj, "sourceKey");
      String targetKey = getNullableString(navObj, "targetKey");
      boolean isCollection = navObj.get("isCollection").getAsBoolean();

      NavigationBuilder.from(sourceResource, navProperty, targetCollection)
            .withKeys(sourceKey, targetKey)
            .asCollection(isCollection)
            .add();
   }

   private static String getNullableString(JsonObject object, String key) {
      JsonElement element = object.get(key);
      return (element == null || element.isJsonNull()) ? null : element.getAsString();
   }

   private static void addNavConfig(String sourceResource, String navProperty, String targetCollection,
         String sourceKey, String targetKey, boolean isCollection) {
      addNavConfig(sourceResource, navProperty, targetCollection, sourceKey, targetKey, isCollection,
            System.currentTimeMillis());
   }

   private static void addNavConfig(String sourceResource, String navProperty, String targetCollection,
         String sourceKey, String targetKey, boolean isCollection, long modificationTimestamp) {
      NAVIGATION_CONFIGS.put(sourceResource + "." + navProperty,
            new NavigationConfig(targetCollection, sourceKey, targetKey, isCollection, modificationTimestamp));
   }

   private static class NavigationConfig {
      final String targetCollection;
      final String sourceKey;
      final String targetKey;
      final boolean isCollection;
      final long modificationTimestamp;

      NavigationConfig(String targetCollection, String sourceKey, String targetKey, boolean isCollection) {
         this.targetCollection = targetCollection;
         this.sourceKey = sourceKey;
         this.targetKey = targetKey;
         this.isCollection = isCollection;
         this.modificationTimestamp = System.currentTimeMillis();
      }

      NavigationConfig(String targetCollection, String sourceKey, String targetKey, boolean isCollection,
            long modificationTimestamp) {
         this.targetCollection = targetCollection;
         this.sourceKey = sourceKey;
         this.targetKey = targetKey;
         this.isCollection = isCollection;
         this.modificationTimestamp = modificationTimestamp;
      }

      /**
       * Get the age of this configuration in milliseconds
       * 
       * @return Age in milliseconds
       */
      public long getAgeInMillis() {
         return System.currentTimeMillis() - modificationTimestamp;
      }

      /**
       * Check if this configuration is stale (older than the specified threshold)
       * 
       * @param thresholdMillis Age threshold in milliseconds
       * @return true if the configuration is stale
       */
      public boolean isStale(long thresholdMillis) {
         return getAgeInMillis() > thresholdMillis;
      }

      /**
       * Get the last modification time as a formatted date string
       * 
       * @return Formatted date string
       */
      public String getFormattedModificationTime() {
         return new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS").format(
               new java.util.Date(modificationTimestamp));
      }
   }

   public void handleMongoExpand(EntityCollection sourceCollection, ResourceInfo sourceResource,
         ExpandOption expandOption) {

      if (mongoClient == null) {
         LOG.error("MongoDB client is not initialized");
         return;
      }

      try {
         MongoDatabase database = mongoClient.getDatabase("reso");

         for (Entity sourceEntity : sourceCollection.getEntities()) {
            for (ExpandItem expandItem : expandOption.getExpandItems()) {
               handleExpandItem(database, sourceEntity, sourceResource, expandItem);
            }
         }
      } catch (Exception e) {
         LOG.error("Error in handleMongoExpand: {}", e.getMessage(), e);
      }
   }

   private void handleExpandItem(MongoDatabase database, Entity sourceEntity, ResourceInfo sourceResource,
         ExpandItem expandItem) {
      UriResource expandPath = expandItem.getResourcePath().getUriResourceParts().get(0);
      if (!(expandPath instanceof UriResourceNavigation)) {
         return;
      }

      UriResourceNavigation expandNavigation = (UriResourceNavigation) expandPath;
      String navPropertyName = expandNavigation.getProperty().getName();
      String configKey = sourceResource.getResourceName() + "." + navPropertyName;

      NavigationConfig config = NAVIGATION_CONFIGS.get(configKey);
      if (config == null) {
         LOG.warn("Unsupported navigation property: {}", navPropertyName);
         return;
      }

      // Log the age of the configuration
      LOG.debug("Navigation config '{}' age: {} ms, last modified: {}",
            configKey,
            config.getAgeInMillis(),
            config.getFormattedModificationTime());

      // Example of checking if a configuration is stale (older than 24 hours)
      if (config.isStale(24 * 60 * 60 * 1000)) {
         LOG.warn("Navigation config '{}' is stale (older than 24 hours)", configKey);
      }

      Document query = buildNavigationQuery(sourceEntity, sourceResource, config);
      if (query.isEmpty()) {
         LOG.warn("No key found for navigation property: {}", navPropertyName);
         return;
      }

      EntityCollection expandEntities = executeNavigationQuery(database, config, query, navPropertyName);
      addNavigationLink(sourceEntity, navPropertyName, expandEntities, config.isCollection);
   }

   private Document buildNavigationQuery(Entity sourceEntity, ResourceInfo sourceResource, NavigationConfig config) {
      Document query = new Document();

      if (config.sourceKey.contains(",")) {
         handleCompositeKey(query, sourceEntity, sourceResource);
      } else {
         handleSingleKey(query, sourceEntity, config);
      }

      return query;
   }

   private void handleCompositeKey(Document query, Entity sourceEntity, ResourceInfo sourceResource) {
      Property keyProp = sourceEntity.getProperty(sourceResource.getPrimaryKeyName());
      if (keyProp != null && keyProp.getValue() != null) {
         query.append("ResourceRecordKey", keyProp.getValue().toString());
         query.append("ResourceName", sourceResource.getResourceName());
      }
   }

   private void handleSingleKey(Document query, Entity sourceEntity, NavigationConfig config) {
      Property sourceProp = sourceEntity.getProperty(config.sourceKey);
      if (sourceProp != null && sourceProp.getValue() != null) {
         String keyValue = sourceProp.getValue().toString();
         if (config.targetKey != null) {
            query.append(config.targetKey, keyValue);
         } else {
            query.append(config.sourceKey, keyValue);
         }
      }
   }

   private EntityCollection executeNavigationQuery(MongoDatabase database, NavigationConfig config,
         Document query, String navPropertyName) {
      LOG.info("Querying {} with filter: {} (last modified: {})",
            config.targetCollection,
            query.toJson(),
            new java.util.Date(config.modificationTimestamp));
      MongoCollection<Document> collection = database.getCollection(config.targetCollection);
      EntityCollection expandEntities = new EntityCollection();

      try (MongoCursor<Document> cursor = collection.find(query).maxTime(5000, TimeUnit.MILLISECONDS).iterator()) {
         while (cursor.hasNext()) {
            Document doc = cursor.next();
            LOG.info("Found {} document: {}", navPropertyName, doc.toJson());

            String resourceName = ResourceMapping.getResourceName(config.targetCollection, navPropertyName);
            ResourceInfo expandResource = resourceLookup.get(resourceName);

            if (expandResource == null) {
               LOG.error("Resource not found for expansion: {} (looking up as {})", navPropertyName, resourceName);
               continue;
            }

            Entity expandEntity = CommonDataProcessing.getEntityFromDocument(doc, expandResource);
            expandEntities.getEntities().add(expandEntity);
         }
      }

      return expandEntities;
   }

   private void addNavigationLink(Entity sourceEntity, String navPropertyName,
         EntityCollection expandEntities, boolean isCollection) {
      Link link = new Link();
      link.setTitle(navPropertyName);
      link.setType(Constants.ENTITY_NAVIGATION_LINK_TYPE);

      if (!expandEntities.getEntities().isEmpty()) {
         if (isCollection) {
            link.setInlineEntitySet(expandEntities);
            LOG.info("Added {} {} items to entity", expandEntities.getEntities().size(), navPropertyName);
         } else {
            link.setInlineEntity(expandEntities.getEntities().get(0));
            LOG.info("Added {} entity", navPropertyName);
         }
      } else {
         LOG.warn("No {} entities found", navPropertyName);
      }

      sourceEntity.getNavigationLinks().add(link);
   }

   // Add a new helper method to log all navigation configurations
   public void logNavigationConfigurations() {
      LOG.info("Listing all navigation configurations:");
      for (Map.Entry<String, NavigationConfig> entry : NAVIGATION_CONFIGS.entrySet()) {
         NavigationConfig config = entry.getValue();
         LOG.info("Configuration: {} -> {}, Last Modified: {}",
               entry.getKey(),
               config.targetCollection,
               new java.util.Date(config.modificationTimestamp));
      }
   }

}
