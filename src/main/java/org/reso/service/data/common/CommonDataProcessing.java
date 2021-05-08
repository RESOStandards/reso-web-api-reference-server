package org.reso.service.data.common;


import org.apache.olingo.commons.api.data.Entity;
import org.apache.olingo.commons.api.data.Property;
import org.apache.olingo.commons.api.data.ValueType;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.ex.ODataRuntimeException;
import org.reso.service.data.GenericEntityCollectionProcessor;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

public class CommonDataProcessing
{
   private static final Logger LOG = LoggerFactory.getLogger(CommonDataProcessing.class);

   public static Object getFieldValueFromRow(FieldInfo field, ResultSet resultSet) throws SQLException
   {
      String fieldName = field.getFieldName();
      Object value = null;
      if (field.getType().equals(EdmPrimitiveTypeKind.String.getFullQualifiedName()))
      {
         value = resultSet.getString(fieldName);
      }
      else if (field.getType().equals(EdmPrimitiveTypeKind.DateTimeOffset.getFullQualifiedName()))
      {
         value = resultSet.getTimestamp(fieldName);
      }
      else
      {
         LOG.info("Field Name: "+field.getFieldName()+" Field type: "+field.getType());
      }

      return value;
   }

   public static Entity getEntityFromRow(ResultSet resultSet, ResourceInfo resource, HashMap<String,Boolean> selectLookup) throws SQLException
   {
      String primaryFieldName = resource.getPrimaryKeyName();
      ArrayList<FieldInfo> fields = resource.getFieldList();
      String lookupKey = null;
      if (selectLookup!=null && selectLookup.get(primaryFieldName)!=null)
      {
         lookupKey = resultSet.getString(primaryFieldName);
      }
      Entity ent = new Entity();
      for (FieldInfo field : fields)
      {
         String fieldName = field.getFieldName();
         Object value = null;
         if (selectLookup==null || selectLookup.containsKey(fieldName) )
         {
            value = CommonDataProcessing.getFieldValueFromRow(field, resultSet);
            ent.addProperty(new Property(null, fieldName, ValueType.PRIMITIVE, value));
         }
      }

      if (lookupKey!=null)
      {
         ent.setId(createId(resource.getResourcesName(), lookupKey));
      }

      return ent;
   }

   private static URI createId(String entitySetName, Object id) {
      try {
         return new URI(entitySetName + "('" + String.valueOf(id) + "')");
      } catch (URISyntaxException e) {
         throw new ODataRuntimeException("Unable to create id for entity: " + entitySetName, e);
      }
   }
}
