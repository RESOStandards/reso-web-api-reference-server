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
      fieldInfo.addAnnotation("The name of the field as expressed in the payload. For OData APIs, this field MUST meet certain naming requirements and should be consistent with what’s advertised in the OData XML metadata (to be verified in certification). ", "Core.Description");
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
         entityValues.put("FieldKey", resourceName.toLowerCase()+'_'+field.getFieldName().toLowerCase() );
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
