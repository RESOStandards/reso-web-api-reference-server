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

import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

public class LookupEntityCollectionProcessor implements EntityCollectionProcessor
{
   private OData           odata;
   private ServiceMetadata serviceMetadata;

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

         // add some sample product entities
         final Entity e1 = new Entity()
                  .addProperty(new Property(null, "LookupKey", ValueType.PRIMITIVE, "ABC123"))
                  .addProperty(new Property(null, "LookupName", ValueType.PRIMITIVE, "CountyOrParish"))
                  .addProperty(new Property(null, "LookupValue", ValueType.PRIMITIVE,
                                            "Los Angeles County"));
         e1.setId(createId("Lookups", 1));
         productList.add(e1);

         final Entity e2 = new Entity()
                  .addProperty(new Property(null, "LookupKey", ValueType.PRIMITIVE, "BCD124"))
                  .addProperty(new Property(null, "LookupName", ValueType.PRIMITIVE, "CountyOrParish"))
                  .addProperty(new Property(null, "LookupValue", ValueType.PRIMITIVE,
                                            "Ventura County"));
         e2.setId(createId("Lookups", 1));
         productList.add(e2);

         final Entity e3 = new Entity()
                  .addProperty(new Property(null, "LookupKey", ValueType.PRIMITIVE, "CDE125"))
                  .addProperty(new Property(null, "LookupName", ValueType.PRIMITIVE, "CountyOrParish"))
                  .addProperty(new Property(null, "LookupValue", ValueType.PRIMITIVE,
                                            "Contra Costa County"));
         e3.setId(createId("Lookups", 1));
         productList.add(e3);
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
