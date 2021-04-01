package org.reso.service.edmprovider;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.apache.olingo.commons.api.edm.provider.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


public class LookupEdmProvider extends CsdlAbstractEdmProvider
{
   // Service Namespace
   public static final String NAMESPACE = "RESO.OData.Metadata";

   // EDM Container
   public static final String CONTAINER_NAME = "Container";
   public static final FullQualifiedName CONTAINER = new FullQualifiedName(NAMESPACE, CONTAINER_NAME);

   // Entity Types Names
   public static final String ET_LOOKUP_NAME = "Lookup";
   public static final FullQualifiedName ET_LOOKUP_FQN = new FullQualifiedName(NAMESPACE, ET_LOOKUP_NAME);

   // Entity Set Names
   public static final String ES_LOOKUPS_NAME = "Lookups";

   public CsdlEntityType getEntityType(FullQualifiedName entityTypeName) {

      // this method is called for one of the EntityTypes that are configured in the Schema
      if(entityTypeName.equals(ET_LOOKUP_FQN)){

         //create EntityType properties
         CsdlProperty key = new CsdlProperty().setName("LookupKey").setType(EdmPrimitiveTypeKind.String.getFullQualifiedName());
         CsdlProperty name = new CsdlProperty().setName("LookupName").setType(EdmPrimitiveTypeKind.String.getFullQualifiedName());
         CsdlProperty  value = new CsdlProperty().setName("LookupValue").setType(EdmPrimitiveTypeKind.String.getFullQualifiedName());

         CsdlProperty  stdvalue = new CsdlProperty().setName("StandardLookupValue").setType(EdmPrimitiveTypeKind.String.getFullQualifiedName());
         CsdlProperty  legacy = new CsdlProperty().setName("LegacyODataValue").setType(EdmPrimitiveTypeKind.String.getFullQualifiedName());
         CsdlProperty  timestamp = new CsdlProperty().setName("ModificationTimestamp").setType(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName());

         // create CsdlPropertyRef for Key element
         CsdlPropertyRef propertyRef = new CsdlPropertyRef();
         propertyRef.setName("LookupKey");

         // configure EntityType
         CsdlEntityType entityType = new CsdlEntityType();
         entityType.setName(ET_LOOKUP_NAME);
         entityType.setProperties(Arrays.asList(key, name , value, stdvalue, legacy, timestamp));
         entityType.setKey(Collections.singletonList(propertyRef));

         return entityType;
      }

      return null;
   }

   public CsdlEntitySet getEntitySet(FullQualifiedName entityContainer, String entitySetName) {

      if(entityContainer.equals(CONTAINER)){
         if(entitySetName.equals(ES_LOOKUPS_NAME)){
            CsdlEntitySet entitySet = new CsdlEntitySet();
            entitySet.setName(ES_LOOKUPS_NAME);
            entitySet.setType(ET_LOOKUP_FQN);

            return entitySet;
         }
      }

      return null;
   }

   public CsdlEntityContainer getEntityContainer() {

      // create EntitySets
      List<CsdlEntitySet> entitySets = new ArrayList<CsdlEntitySet>();
      entitySets.add(getEntitySet(CONTAINER, ES_LOOKUPS_NAME));

      // create EntityContainer
      CsdlEntityContainer entityContainer = new CsdlEntityContainer();
      entityContainer.setName(CONTAINER_NAME);
      entityContainer.setEntitySets(entitySets);

      return entityContainer;
   }

   public List<CsdlSchema> getSchemas() {

      // create Schema
      CsdlSchema schema = new CsdlSchema();
      schema.setNamespace(NAMESPACE);

      // add EntityTypes
      List<CsdlEntityType> entityTypes = new ArrayList<CsdlEntityType>();
      entityTypes.add(getEntityType(ET_LOOKUP_FQN));
      schema.setEntityTypes(entityTypes);

      // add EntityContainer
      schema.setEntityContainer(getEntityContainer());

      // finally
      List<CsdlSchema> schemas = new ArrayList<CsdlSchema>();
      schemas.add(schema);

      CsdlEnumType type = new CsdlEnumType();
      type.setMembers(new ArrayList<CsdlEnumMember>());
      type.setName("EnumTest");
      type.setUnderlyingType(EdmPrimitiveTypeKind.Int64.getFullQualifiedName());

      schema.getEnumTypes().add(type);

      return schemas;
   }

   public CsdlEntityContainerInfo getEntityContainerInfo(FullQualifiedName entityContainerName) {

      // This method is invoked when displaying the Service Document at e.g. http://localhost:8080/DemoService/DemoService.svc
      if (entityContainerName == null || entityContainerName.equals(CONTAINER)) {
         CsdlEntityContainerInfo entityContainerInfo = new CsdlEntityContainerInfo();
         entityContainerInfo.setContainerName(CONTAINER);
         return entityContainerInfo;
      }

      return null;
   }
}
