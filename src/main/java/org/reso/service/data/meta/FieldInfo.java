package org.reso.service.data.meta;

import org.apache.olingo.commons.api.edm.FullQualifiedName;

public class FieldInfo
{
   private String       fieldName   = null;
   private FullQualifiedName    type        = null;

   public FieldInfo(String fieldName, FullQualifiedName type)
   {
      this.fieldName = fieldName;
      this.type = type;
   }

   /**
    * Accessors
    */

   public String getFieldName()
   {
      return fieldName;
   }

   public FullQualifiedName getType()
   {
      return type;
   }
}
