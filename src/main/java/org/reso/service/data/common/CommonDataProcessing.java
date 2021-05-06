package org.reso.service.data.common;


import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.reso.service.data.GenericEntityCollectionProcessor;
import org.reso.service.data.meta.FieldInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

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
}
