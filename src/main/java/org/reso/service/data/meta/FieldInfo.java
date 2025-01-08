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
   private Integer precision                 = null;
   private Integer scale                     = null;
   private boolean isCollection = false;
   private boolean isExpansion = false;

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
      //return fieldName.toLowerCase();  // For PostgreSQL.  Not currently supported, but here if you want to play with it.
   }
   public String getODATAFieldName()
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


   /**
    * Set the Decimal Precision.
    *
    * @param precision The value to set the attribute to.
    */
   public void setPrecision(Integer precision)
   {
      this.precision = precision;
   }


   /**
    * Set the Decimal Scale.
    *
    * @param scale The value to set the attribute to.
    */
   public void setScale(Integer scale)
   {
      this.scale = scale;
   }


   public Integer getMaxLength()
   {
      return maxLength;
   }


   public Integer getPrecision()
   {
      return precision;
   }


   public Integer getScale()
   {
      return scale;
   }


   public boolean isCollection()
   {
      return isCollection;
   }

   public boolean isExpansion() {
      return isExpansion;
   }

   public boolean isFlags()
   {
      return false;
   }

   public boolean isComplex()
   {
      return false;
   }

   public void setCollection()
   {
      isCollection = true;
   }

    public void setExpansion() {
        isExpansion = true;
    }
}
