package org.reso.service.edmprovider;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.apache.olingo.commons.api.edm.provider.*;
import org.apache.olingo.commons.api.ex.ODataException;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class RESOedmProvider extends CsdlAbstractEdmProvider
{
   private ArrayList<ResourceInfo> resourceList = new ArrayList<ResourceInfo>();
   // Service Namespace
   public static final String NAMESPACE = "RESO.OData.Metadata";

   // EDM Container
   public static final String CONTAINER_NAME = "Container";
   public static final FullQualifiedName CONTAINER = new FullQualifiedName(NAMESPACE, CONTAINER_NAME);

   private static final Logger LOG = LoggerFactory.getLogger(RESOedmProvider.class);

   public CsdlEntityType getEntityType(FullQualifiedName entityTypeName)
   {
      for (ResourceInfo defn :resourceList)
      {
         if (entityTypeName.equals(defn.getFqn(NAMESPACE)))
         {
            return getEntityType(defn);
         }
      }
      return null;
   }

   public CsdlEntityType getEntityType(ResourceInfo defn)
   {
      try
      {
         ArrayList<FieldInfo> fields = defn.getFieldList();
         String primaryFieldName = fields.get(0).getFieldName();

         ArrayList<CsdlProperty> propertyList = new ArrayList<>();

         // create CsdlPropertyRef for Key element
         CsdlPropertyRef propertyRef = new CsdlPropertyRef();
         propertyRef.setName(primaryFieldName);

         for (FieldInfo field : fields)
         {
            String fieldName = field.getFieldName();

            CsdlProperty property = new CsdlProperty().setName(fieldName).setType(field.getType());
            Integer maxLength = field.getMaxLength();
            if (null!=maxLength)
            {
               property.setMaxLength(maxLength);
            }

            ArrayList<CsdlAnnotation> annotations = field.getAnnotations();
            if (annotations!=null)
            {
               property.setAnnotations(annotations);
            }

            propertyList.add(property);
         }

         CsdlEntityType entityType = new CsdlEntityType();
         entityType.setName(defn.getResourceName());
         entityType.setProperties(propertyList);
         entityType.setKey(Collections.singletonList(propertyRef));

         return entityType;

      } catch (Exception e)
      {
         if (defn==null)
            LOG.error("Null Resource definition provided.", e);
         else
            LOG.error("Server Error occurred in reading "+defn.getResourceName(), e);
      }

      return null;
   }

   public CsdlEntitySet getEntitySet(FullQualifiedName entityContainer, String entitySetName)
   {
      if(entityContainer.equals(CONTAINER))
      {
         for (ResourceInfo defn :resourceList)
         {
            if (entitySetName.equals(defn.getResourcesName()))
            {
               CsdlEntitySet entitySet = new CsdlEntitySet();
               entitySet.setName(defn.getResourcesName());
               entitySet.setType( defn.getFqn(NAMESPACE) );

               return entitySet;
            }
         }
      }

      LOG.info("Could not find: ",entitySetName);

      return null;
   }

   public CsdlEntitySet getEntitySet(FullQualifiedName entityContainer, ResourceInfo defn) {

      if(entityContainer.equals(CONTAINER))
      {
         CsdlEntitySet entitySet = new CsdlEntitySet();
         entitySet.setName(defn.getResourcesName());
         entitySet.setType( defn.getFqn(NAMESPACE) );

         return entitySet;
      }

      return null;
   }

   public CsdlEntityContainer getEntityContainer() {

      // create EntitySets
      List<CsdlEntitySet> entitySets = new ArrayList<CsdlEntitySet>();

      for (ResourceInfo defn :resourceList)
      {
         entitySets.add(getEntitySet(CONTAINER, defn ));
      }

      // create EntityContainer
      CsdlEntityContainer entityContainer = new CsdlEntityContainer();
      entityContainer.setName(CONTAINER_NAME);
      entityContainer.setEntitySets(entitySets);

      return entityContainer;
   }

   public void addDefinition(ResourceInfo defn)
   {
      resourceList.add(defn);
   }

   public CsdlTerm getTerm(final FullQualifiedName termName)
   {
      return new CsdlTerm().setName(termName.getName());
   }

   public List<CsdlSchema> getSchemas() {

      // create Schema
      CsdlSchema schema = new CsdlSchema();
      schema.setNamespace(NAMESPACE);

      // add EntityTypes
      List<CsdlEntityType> entityTypes = new ArrayList<CsdlEntityType>();

      for (ResourceInfo defn :resourceList)
      {
         entityTypes.add(getEntityType(defn));
      }

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
