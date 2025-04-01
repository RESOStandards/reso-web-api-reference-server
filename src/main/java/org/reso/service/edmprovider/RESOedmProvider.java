package org.reso.service.edmprovider;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.apache.olingo.commons.api.edm.provider.*;
import org.apache.olingo.commons.api.ex.ODataException;
import org.reso.service.data.meta.EnumFieldInfo;
import org.reso.service.data.meta.EnumValueInfo;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;


public class RESOedmProvider extends CsdlAbstractEdmProvider
{
   private final       ArrayList<ResourceInfo> resourceList = new ArrayList<ResourceInfo>();
   // Service Namespace
   public static final String                  NAMESPACE    = "org.reso.metadata";

   // EDM Container
   public static final String CONTAINER_NAME = "Container";
   public static final FullQualifiedName CONTAINER = new FullQualifiedName(NAMESPACE, CONTAINER_NAME);

   private static final String LOOKUP_TYPE = System.getenv().get("LOOKUP_TYPE");

   private static final Logger LOG = LoggerFactory.getLogger(RESOedmProvider.class);

   private static HashMap<String, ArrayList<FieldInfo>> navigationProperties = new HashMap<>();

   @Override
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

   @Override
   public CsdlComplexType getComplexType(FullQualifiedName complexTypeName) throws ODataException
   {
      for (ResourceInfo defn :resourceList)
      {
         if (complexTypeName.equals(defn.getFqn(NAMESPACE)))
         {
            return getComplexType(defn);
         }
      }
      return null;
   }

   public CsdlComplexType getComplexType(ResourceInfo defn)
   {
      try
      {
         ArrayList<FieldInfo> fields = defn.getFieldList();

         ArrayList<CsdlProperty> propertyList = new ArrayList<>();

         for (FieldInfo field : fields) if (field.isComplex())
         {
            String fieldName = field.getODATAFieldName();

            CsdlProperty property = new CsdlProperty().setName(fieldName).setType(field.getType()).setCollection(field.isCollection());
            Integer maxLength = field.getMaxLength();
            if (null!=maxLength)
            {
               property.setMaxLength(maxLength);
            }

            Integer precision = field.getPrecision();
            if (null!=precision)
            {
               property.setPrecision(precision);
            }

            Integer scale = field.getScale();
            if (null!=scale)
            {
               property.setScale(scale);
            }

            ArrayList<CsdlAnnotation> annotations = field.getAnnotations();
            if (annotations!=null)
            {
               property.setAnnotations(annotations);
            }

            propertyList.add(property);
         }

         CsdlComplexType complexType = new CsdlComplexType();
         complexType.setName(defn.getResourceName());
         complexType.setProperties(propertyList);

         return complexType;

      } catch (Exception e)
      {
         if (defn==null)
            LOG.error("Null Resource definition provided.", e);
         else
            LOG.error("Server Error occurred in reading "+defn.getResourceName(), e);
      }

      return null;
   }

   public CsdlEntityType getEntityType(ResourceInfo defn)
   {
      try
      {
         ArrayList<FieldInfo> fields = defn.getFieldList();
         String primaryFieldName = defn.getPrimaryKeyName();

         ArrayList<CsdlProperty> propertyList = new ArrayList<>();
         ArrayList<CsdlNavigationProperty> navPropList = new ArrayList<CsdlNavigationProperty>();

         // create CsdlPropertyRef for Key element
         CsdlPropertyRef propertyRef = new CsdlPropertyRef();
         propertyRef.setName(primaryFieldName);
         LOG.debug("Primary key is: "+primaryFieldName);

         for (FieldInfo field : fields) if (!field.isComplex())
         {
            if(field.isExpansion()){
               navigationProperties.putIfAbsent(defn.getResourceName(), new ArrayList<>());
               navigationProperties.get(defn.getResourceName()).add(field);
               CsdlNavigationProperty navProp = new CsdlNavigationProperty()
                       .setName(field.getFieldName())
                       .setType(field.getType().toString())
                       .setNullable(!field.isCollection())
                       .setCollection(field.isCollection());
//                       .setPartner(defn.getResourceName());
               navPropList.add(navProp);
               continue;
            }

            String fieldName = field.getODATAFieldName();

            CsdlProperty property = new CsdlProperty().setName(fieldName).setType(field.getType()).setCollection(field.isCollection());
            Integer maxLength = field.getMaxLength();
            if (null!=maxLength)
            {
               property.setMaxLength(maxLength);
            }

            Integer precision = field.getPrecision();
            if (null!=precision)
            {
               property.setPrecision(precision);
            }

            Integer scale = field.getScale();
            if (null!=scale)
            {
               property.setScale(scale);
            }

            ArrayList<CsdlAnnotation> annotations = field.getAnnotations();
            if (annotations!=null)
            {
               property.setAnnotations(annotations);
            }

            if (field.isCollection())
            {
               property.setCollection(true);
            }

            propertyList.add(property);
         }

         CsdlEntityType entityType = new CsdlEntityType();
         entityType.setName(defn.getResourceName());
         entityType.setProperties(propertyList);
         entityType.setKey(Collections.singletonList(propertyRef));

         if(navPropList.size() > 0){
            entityType.setNavigationProperties(navPropList);
         }

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
               ArrayList<FieldInfo> navigations = navigationProperties.get(defn.getResourceName());
               CsdlEntitySet entitySet = new CsdlEntitySet();
               entitySet.setName(defn.getResourcesName());
               entitySet.setType( defn.getFqn(NAMESPACE) );

               if (navigations != null) {
                  for (FieldInfo field : navigations) {
                     CsdlNavigationPropertyBinding navPropBinding = new CsdlNavigationPropertyBinding();
                     navPropBinding.setPath(field.getFieldName());
                     navPropBinding.setTarget(field.getType().getName());
                     entitySet.getNavigationPropertyBindings().add(navPropBinding);
                  }
               }

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
         ArrayList<FieldInfo> navigations = navigationProperties.get(defn.getResourceName());
         CsdlEntitySet entitySet = new CsdlEntitySet();
         entitySet.setName(defn.getResourcesName());
         entitySet.setType( defn.getFqn(NAMESPACE) );

         if (navigations != null) {
            for (FieldInfo field : navigations) {
               CsdlNavigationPropertyBinding navPropBinding = new CsdlNavigationPropertyBinding();
               navPropBinding.setPath(field.getFieldName());
               navPropBinding.setTarget(field.getType().getName());
               entitySet.getNavigationPropertyBindings().add(navPropBinding);
            }
         }

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

      CsdlSchema enumSchema = new CsdlSchema();
      enumSchema.setNamespace(NAMESPACE+".enums");

      // add EntityTypes
      List<CsdlEntityType> entityTypes = new ArrayList<>();
      List<CsdlComplexType> complexTypes = new ArrayList<>();


      HashMap<String, Boolean> enumList = new HashMap<>();

      for (ResourceInfo defn :resourceList)
      {
         ArrayList<FieldInfo> fields = defn.getFieldList();
         for (FieldInfo field : fields)
         {
            if (field instanceof EnumFieldInfo)
            {
               EnumFieldInfo enumField = (EnumFieldInfo) field;
               
               String enumName = enumField.getLookupName();

               if (!enumList.containsKey(enumName))
               {
                  enumList.put(enumName, true);
                  ArrayList<EnumValueInfo> values = enumField.getValues();

                  if (null!=values && values.size()>0)
                  {
                     CsdlEnumType type = new CsdlEnumType();
                     ArrayList<CsdlEnumMember> csdlMembers = new ArrayList<>();

                     int bitValue = 1;

                     for (EnumValueInfo value: values)
                     {
                        String valueString = value.getValue();
                        CsdlEnumMember member = new CsdlEnumMember().setName(valueString).setValue(""+enumField.getValueOf(valueString));
                        member.setAnnotations(value.getAnnotations());
                        csdlMembers.add(member);
                        bitValue = bitValue*2;
                     }

                     type.setMembers(csdlMembers);
                     type.setName(enumName);
                     type.setFlags(enumField.isFlags());
                     type.setUnderlyingType(EdmPrimitiveTypeKind.Int64.getFullQualifiedName());

                     enumSchema.getEnumTypes().add(type);
                  }
               }

            }
         }

         entityTypes.add(getEntityType(defn));
         complexTypes.add(getComplexType(defn));
      }

      schema.setEntityTypes(entityTypes);
      //schema.setComplexTypes(complexTypes);

      // add EntityContainer
      schema.setEntityContainer(getEntityContainer());

      // finally
      List<CsdlSchema> schemas = new ArrayList<>();
      schemas.add(schema);

      if(!LOOKUP_TYPE.equals("STRING")) schemas.add(enumSchema);

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
