package org.reso.service.data;

import org.apache.olingo.commons.api.data.*;
import org.apache.olingo.commons.api.edm.EdmEntitySet;
import org.apache.olingo.commons.api.edm.EdmEntityType;
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
import org.reso.service.edmprovider.LookupEdmProvider;
import org.reso.service.servlet.RESOservlet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;
import java.util.Map;

public class LookupEntityCollectionProcessor implements EntityCollectionProcessor
{
   private OData           odata;
   private ServiceMetadata serviceMetadata;
   private Connection connect = null;
   private Statement statement = null;
   private PreparedStatement preparedStatement = null;
   private              ResultSet resultSet = null;
   private static final Logger    LOG       = LoggerFactory.getLogger(LookupEntityCollectionProcessor.class);

   public void init(OData odata, ServiceMetadata serviceMetadata) {
      this.odata = odata;
      this.serviceMetadata = serviceMetadata;
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

   private EntityCollection getData(EdmEntitySet edmEntitySet){

      EntityCollection lookupsCollection = new EntityCollection();
      // check for which EdmEntitySet the data is requested
      if(LookupEdmProvider.ES_LOOKUPS_NAME.equals(edmEntitySet.getName())) {
         List<Entity> productList = lookupsCollection.getEntities();

         Map<String, String> properties = System.getenv();

         try {

            String mysqlHost = properties.get("SQL_HOST");
            String mysqlUser = properties.get("SQL_USER");
            String mysqlPwd = properties.get("SQL_PASSWORD");

            LOG.info("looking to connect to jdbc:mysql://"+mysqlHost+"/reso_data_dictionary_1_7");
            connect = DriverManager
                     .getConnection("jdbc:mysql://"+mysqlHost+"/reso_data_dictionary_1_7?"
                                    + "user="+mysqlUser+"&password="+mysqlPwd);

            // Statements allow to issue SQL queries to the database
            statement = connect.createStatement();
            // Result set get the result of the SQL query
            resultSet = statement.executeQuery("select * from lookup");

            // add the lookups from the database.
            while (resultSet.next())
            {
               String lookupKey = resultSet.getString("LookupKey");
               Entity ent = new Entity()
                        .addProperty(new Property(null, "LookupKey", ValueType.PRIMITIVE, lookupKey))
                        .addProperty(new Property(null, "LookupName", ValueType.PRIMITIVE, resultSet.getString("LookupName")))
                        .addProperty(new Property(null, "LookupValue", ValueType.PRIMITIVE,resultSet.getString("LookupValue")))
                        .addProperty(new Property(null, "StandardLookupValue", ValueType.PRIMITIVE,resultSet.getString("StandardLookupValue")))
                        .addProperty(new Property(null, "LegacyOdataValue", ValueType.PRIMITIVE,resultSet.getString("LegacyOdataValue")))
                        .addProperty(new Property(null, "ModificationTimestamp", ValueType.PRIMITIVE,resultSet.getDate("ModificationTimestamp")));

               ent.setId(createId("Lookups", lookupKey));
               productList.add(ent);
            }

            statement.close();

         } catch (Exception e) {
            LOG.error("Server Error occurred in reading Lookups", e);
            return lookupsCollection;
         } finally {
            try
            {
               connect.close();
            } catch (Exception e) {
               LOG.error("Server Error closing connection", e);
            }
            return lookupsCollection;
         }
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
