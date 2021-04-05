package org.reso.service.data.meta;

import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.apache.olingo.commons.api.edm.provider.CsdlAnnotation;
import org.apache.olingo.commons.api.edm.provider.annotation.CsdlConstantExpression;
import org.apache.olingo.commons.api.edm.provider.annotation.CsdlExpression;
import org.reso.service.edmprovider.RESOedmProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;

public class FieldInfo
{
   private String       fieldName            = null;
   private FullQualifiedName    type         = null;
   private Integer maxLength                 = null;

   private ArrayList<CsdlAnnotation> annotations = null;

   private static final Logger LOG = LoggerFactory.getLogger(FieldInfo.class);

   public FieldInfo(String fieldName, FullQualifiedName type, Integer maxLength)
   {
      this.fieldName = fieldName;
      this.type = type;
      this.maxLength = maxLength;
   }

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

   public void addAnnotation(String annotation, String term)
   {
      if (null==annotations)
         annotations = new ArrayList<>();

      CsdlAnnotation csdlAnnotation = new CsdlAnnotation().setTerm(term).setExpression(new CsdlConstantExpression(CsdlConstantExpression.ConstantExpressionType.String,annotation));

      annotations.add( csdlAnnotation );
   }

   public ArrayList<CsdlAnnotation> getAnnotations()
   {
      return annotations;
   }


   /**
    * Set the Maximum Length of the field.
    *
    * @param maxLength The value to set the maximum length to.
    */
   public void setMaxLength(Integer maxLength)
   {
      this.maxLength = maxLength;
   }

   public Integer getMaxLength()
   {
      return maxLength;
   }
}
