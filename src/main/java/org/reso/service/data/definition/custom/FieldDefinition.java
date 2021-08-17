package org.reso.service.data.definition.custom;

import org.apache.olingo.commons.api.data.Entity;
import org.apache.olingo.commons.api.data.EntityCollection;
import org.apache.olingo.commons.api.data.Property;
import org.apache.olingo.commons.api.data.ValueType;
import org.apache.olingo.commons.api.edm.EdmEntitySet;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.provider.CsdlAnnotation;
import org.apache.olingo.commons.api.edm.provider.CsdlEntitySet;
import org.apache.olingo.server.api.ODataApplicationException;
import org.apache.olingo.server.api.uri.UriInfo;
import org.apache.olingo.server.api.uri.UriParameter;
import org.apache.olingo.server.api.uri.queryoption.FilterOption;
import org.apache.olingo.server.api.uri.queryoption.expression.ExpressionVisitException;
import org.reso.service.data.common.CommonDataProcessing;
import org.reso.service.data.meta.BreakdownOfFilterExpressionVisitor;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.MySQLFilterExpressionVisitor;
import org.reso.service.data.meta.ResourceInfo;

import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.*;

public class FieldDefinition extends ResourceInfo
{
   private static String STANDARD_NAME = "RESO.OData.Metadata.StandardName";

   private static ArrayList<FieldInfo> fieldList = null;
   private ArrayList<ResourceInfo> resources;

   public FieldDefinition()
   {
      this.tableName = "field";  // Never used
      this.resourcesName = "Field";
      this.resourceName = "Field";
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

      ArrayList<FieldInfo> list = new ArrayList<FieldInfo>();
      FieldDefinition.fieldList = list;
      FieldInfo fieldInfo = null;

      fieldInfo = new FieldInfo("FieldKey", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      fieldInfo.addAnnotation("Field Key Field", "RESO.OData.Metadata.DisplayName");
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("ResourceName", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("FieldName", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("DisplayName", EdmPrimitiveTypeKind.String.getFullQualifiedName());
      list.add(fieldInfo);

      fieldInfo = new FieldInfo("ModificationTimestamp", EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName());
      list.add(fieldInfo);

      return FieldDefinition.fieldList;
   }

   public Boolean useCustomDatasource() { return true; }

   public Entity getData(EdmEntitySet edmEntitySet, List<UriParameter> keyPredicates)
   {
      ArrayList<FieldInfo> fields = this.getFieldList();

      Entity product = null;

      Map<String, String> properties = System.getenv();

      try {

         String sqlCriteria = null;

         // Statements allow to issue SQL queries to the database
         Statement statement = null;
         // Result set get the result of the SQL query
         String queryString = null;

         for (final UriParameter key : keyPredicates)
         {
            // key
            String keyName = key.getName().toLowerCase();
            String keyValue = key.getText();
            if (sqlCriteria==null)
            {
               sqlCriteria = keyName + " = " + keyValue;
            }
            else
            {
               sqlCriteria = sqlCriteria + " and " + keyName + " = " + keyValue;
            }
         }

         queryString = "select * from " + this.getTableName();

         if (null!=sqlCriteria && sqlCriteria.length()>0)
         {
            queryString = queryString + " WHERE " + sqlCriteria;
         }

         LOG.info("SQL Query: "+queryString);
         ResultSet resultSet = statement.executeQuery(queryString);

         String primaryFieldName = this.getPrimaryKeyName();

         // add the lookups from the database.
         while (resultSet.next())
         {
            Entity ent = CommonDataProcessing.getEntityFromRow(resultSet, this, null);

            product = ent;
         }

         statement.close();

      } catch (Exception e) {
         LOG.error("Server Error occurred in reading "+this.getResourceName(), e);
         return product;
      }

      return product;
   }

   public EntityCollection getData(EdmEntitySet edmEntitySet, UriInfo uriInfo, boolean isCount) throws ODataApplicationException
   {
      EntityCollection entCollection = new EntityCollection();
      List<Entity> productList = entCollection.getEntities();

      FilterOption filter = uriInfo.getFilterOption();

      BreakdownOfFilterExpressionVisitor customExpression = new BreakdownOfFilterExpressionVisitor(this);
      try
      {
         String criteria = filter.getExpression().accept(customExpression);
      }
      catch (ExpressionVisitException e)
      {
         LOG.error("Server Error occurred in reading "+this.getResourceName(), e);
         return entCollection;
      }

      HashMap<String,String> reps = customExpression.getRepresentations();

      String resourceName = reps.remove("ResourceName");
      resourceName = resourceName.substring(1,resourceName.length()-1);

      ResourceInfo res = null;

      for (ResourceInfo defn :resources)
      {
         if (resourceName.equals(defn.getResourcesName()))
         {
            res = defn;
            break;
         }
      }

      ArrayList<FieldInfo> resourceFieldList = res.getFieldList();

      for (FieldInfo field: resourceFieldList)
      {
         HashMap<String,Object> entityValues = new HashMap<>();
         entityValues.put("FieldKey", field.getFieldName());
         entityValues.put("FieldName", field.getFieldName());
         entityValues.put("ResourceName", resourceName);
         entityValues.put("DisplayName", field.getFieldName());
         Date date = new Date();
         entityValues.put("ModificationTimestamp", date);

         boolean match = true;

         for (String key: reps.keySet() )
         {
            String toMatch = reps.get(key);
            toMatch = toMatch.substring(1,toMatch.length()-1);
            String value = entityValues.get(key).toString();
            if (!toMatch.equals(value))
            {
               match = false;
               break;
            }
         }

         if (match)
         {
            Entity ent = new Entity();
            ent.addProperty(new Property(null, "FieldKey", ValueType.PRIMITIVE, field.getFieldName()));
            ent.addProperty(new Property(null, "FieldName", ValueType.PRIMITIVE, field.getFieldName()));
            ent.addProperty(new Property(null, "ResourceName", ValueType.PRIMITIVE, resourceName));

            String displayName = field.getFieldName();
            ent.addProperty(new Property(null, "DisplayName", ValueType.PRIMITIVE, displayName));
            ent.addProperty(new Property(null, "ModificationTimestamp", ValueType.PRIMITIVE, date ));
            productList.add(ent);
         }
      }

      return entCollection;
   }

   public void addResources(ArrayList<ResourceInfo> resources)
   {
      this.resources = resources;
   }
}
