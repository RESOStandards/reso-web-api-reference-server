package org.reso.service.data.definition;

import org.apache.olingo.commons.api.data.Entity;
import org.apache.olingo.commons.api.data.EntityCollection;
import org.apache.olingo.commons.api.data.Property;
import org.apache.olingo.commons.api.data.ValueType;
import org.apache.olingo.commons.api.edm.EdmEntitySet;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.server.api.ODataApplicationException;
import org.apache.olingo.server.api.uri.UriInfo;
import org.apache.olingo.server.api.uri.UriParameter;
import org.apache.olingo.server.api.uri.queryoption.FilterOption;
import org.apache.olingo.server.api.uri.queryoption.expression.ExpressionVisitException;
import org.reso.service.data.common.CommonDataProcessing;
import org.reso.service.data.meta.BreakdownOfFilterExpressionVisitor;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;

import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.*;

public class FieldDefinition extends ResourceInfo
{
   private static final String STANDARD_NAME = "RESO.OData.Metadata.StandardName";

   private static ArrayList<FieldInfo> fieldList = null;
   private ArrayList<ResourceInfo> resources;

   public FieldDefinition()
   {
      this.tableName = "field";  // Never used
      this.resourcesName = "Field";
      this.resourceName = "Field";
      this.primaryKeyName = "FieldKey";
   }

   public ArrayList<FieldInfo> getFieldList()
   {
      return FieldDefinition.getStaticFieldList();
   }

   public static ArrayList<FieldInfo> getStaticFieldList()
   {
      if (null!= FieldDefinition.fieldList)
      {
         return FieldDefinition.fieldList;
      }

      ArrayList<FieldInfo> list = new ArrayList<>();
      FieldDefinition.fieldList = list;
      FieldInfo fieldInfo = null;

      fieldInfo = new FieldInfo("FieldKey", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      fieldInfo.addAnnotation("Field Key Field", "RESO.OData.Metadata.DisplayName");
      fieldInfo.addAnnotation("The key used to uniquely identify the Field.", "Core.Description");
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("ResourceName", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      fieldInfo.addAnnotation("The name of the resource the field belongs to. This will be a RESO Standard Name, when applicable, but may also be a local resource name.", "Core.Description");
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("FieldName", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      fieldInfo.addAnnotation("The name of the field as expressed in the payload. For OData APIs, this field MUST meet certain naming requirements and should be consistent with what's advertised in the OData XML metadata (to be verified in certification). ", "Core.Description");
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("DisplayName", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      fieldInfo.addAnnotation("The display name for the field. SHOULD be provided in all cases where the use of display names is needed, even if the display name is the same as the underlying field name. The DisplayName MAY be a RESO Standard Display Name or a local one. ", "Core.Description");
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("ModificationTimestamp", EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName());
      fieldInfo.addAnnotation("The timestamp when the field metadata item was last modified. This is used to help rebuild caches when metadata items change so consumers don't have to re-pull and reprocess the entire set of metadata when only a small number of changes have been made.", "Core.Description");
      list.add(fieldInfo);

      return FieldDefinition.fieldList;
   }

   public Boolean useCustomDatasource() { return true; }

   public Entity getData(EdmEntitySet edmEntitySet, List<UriParameter> keyPredicates)
   {
      return null;
   }

   public EntityCollection getData(EdmEntitySet edmEntitySet, UriInfo uriInfo, boolean isCount) throws ODataApplicationException {
      EntityCollection entityCollection = new EntityCollection();
      List<Entity> productList = entityCollection.getEntities();

      FilterOption filter = uriInfo.getFilterOption();
      BreakdownOfFilterExpressionVisitor customExpression = new BreakdownOfFilterExpressionVisitor(this);

      Map<String, FilterCondition> filterCriteria = new HashMap<>();
      if (filter != null) {
         try {
            filter.getExpression().accept(customExpression);
            filterCriteria = customExpression.getRepresentations();
         } catch (ExpressionVisitException e) {
            LOG.error("Server Error occurred in reading " + this.getResourceName(), e);
            return entityCollection;
         }
      }

      for (ResourceInfo resource : resources) {
         String resourceName = resource.getResourcesName();
         ArrayList<FieldInfo> fieldList = resource.getFieldList();

         for (FieldInfo field : fieldList) {
            HashMap<String, Object> entityValues = new HashMap<>();
            entityValues.put("FieldKey", resourceName.toLowerCase() + "_" + field.getFieldName().toLowerCase());
            entityValues.put("FieldName", field.getFieldName());
            entityValues.put("ResourceName", resourceName);
            entityValues.put("DisplayName", field.getFieldName());
            entityValues.put("ModificationTimestamp", generateRandomTimestamp());

            boolean match = true;

            for (Map.Entry<String, FilterCondition> entry : filterCriteria.entrySet()) {
               FilterCondition condition = entry.getValue();
               String operator = condition.getOperator();

               String filterKey = entry.getKey();
               // Remove surrounding quotes
               String filterValue = condition.getValue().replaceAll("^[\"']|[\"']$", "");
               if (entityValues.containsKey(filterKey)) {
                  String entityValue = entityValues.get(filterKey).toString();
                  if ("=".equals(operator)) {
                     if (!matches(entityValue, filterValue, operator)) {
                        match = false;
                        break;
                     }
                  } else if ("<".equals(operator)) {
                     if (!matches(entityValue, filterValue, operator)) {
                        match = false;
                        break;
                     }
                  } else if (">".equals(operator)) {
                     if (!matches(entityValue, filterValue, operator)) {
                        match = false;
                        break;
                     }
                  }
               } else {
                  match = false;
                  break;
               }
            }

            if (match) {
               Entity entity = new Entity();
               entity.addProperty(new Property(null, "FieldKey", ValueType.PRIMITIVE, entityValues.get("FieldKey")));
               entity.addProperty(new Property(null, "FieldName", ValueType.PRIMITIVE, entityValues.get("FieldName")));
               entity.addProperty(new Property(null, "ResourceName", ValueType.PRIMITIVE, entityValues.get("ResourceName")));
               entity.addProperty(new Property(null, "DisplayName", ValueType.PRIMITIVE, entityValues.get("DisplayName")));
               entity.addProperty(new Property(null, "ModificationTimestamp", ValueType.PRIMITIVE, entityValues.get("ModificationTimestamp")));

               productList.add(entity);
            }
         }
      }

      return entityCollection;
   }

   public void addResources(ArrayList<ResourceInfo> resources)
   {
      this.resources = resources;
   }

   /**
    * Generates a random timestamp within the last 10 days.
    */
   private Date generateRandomTimestamp() {
      long now = System.currentTimeMillis();
      long tenDaysAgo = now - (10L * 24 * 60 * 60 * 1000); // 10 days
      long randomTimestamp = tenDaysAgo + (long) (Math.random() * (now - tenDaysAgo));
      return new Date(randomTimestamp);
   }

   /*
   * Helper for the filtering logic
   * */
   private boolean matches(Object entityValue, String filterValue, String operator) {
      if (entityValue == null || filterValue == null) {
         return false;
      }

      Object typedFilterValue = convertToType(entityValue.getClass(), filterValue);

      if (typedFilterValue == null) {
         return false;
      }

      switch (operator) {
         case "=":
            return entityValue.equals(typedFilterValue);
         case "<":
            return compare(entityValue, typedFilterValue) < 0;
         case ">":
            return compare(entityValue, typedFilterValue) > 0;
         default:
            throw new IllegalArgumentException("Unsupported operator: " + operator);
      }
   }

   /*
   * Convert filter values from string to necessary type
   * */
   private Object convertToType(Class<?> type, String value) {
      try {
         if (type == String.class) {
            return value;
         } else if (type == Integer.class || type == int.class) {
            return Integer.parseInt(value);
         } else if (type == Long.class || type == long.class) {
            return Long.parseLong(value);
         } else if (type == Double.class || type == double.class) {
            return Double.parseDouble(value);
         } else if (type == Boolean.class || type == boolean.class) {
            return Boolean.parseBoolean(value);
         } else if (type == Date.class) {
            return new SimpleDateFormat("yyyy-MM-dd").parse(value);
         } else if (type == Timestamp.class) {
            return Timestamp.valueOf(value);
         }
      } catch (Exception e) {
         System.err.println("Failed to convert value: " + value + " to type: " + type.getName());
      }
      return null;
   }

   /*
   * Comparator for filtering logic
   * */
   @SuppressWarnings("unchecked")
   private int compare(Object entityValue, Object filterValue) {
      if (entityValue instanceof Comparable && filterValue instanceof Comparable) {
         return ((Comparable<Object>) entityValue).compareTo(filterValue);
      }
      throw new IllegalArgumentException("Values are not comparable: " + entityValue + ", " + filterValue);
   }

}
