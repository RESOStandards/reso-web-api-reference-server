package org.reso.service.data.meta;


import org.apache.olingo.commons.api.edm.provider.CsdlAnnotation;
import org.apache.olingo.commons.api.edm.provider.annotation.CsdlConstantExpression;

import java.util.ArrayList;

public class EnumValueInfo
{
   private String                    value;
   private ArrayList<CsdlAnnotation> annotations = new ArrayList<>();


   public EnumValueInfo(String value)
   {
      this.value = value;
   }

   public String getValue()
   {
      return value;
   }

   public void addAnnotation(String annotation, String term)
   {
      CsdlAnnotation csdlAnnotation = new CsdlAnnotation().setTerm(term).setExpression(new CsdlConstantExpression(CsdlConstantExpression.ConstantExpressionType.String, annotation));

      annotations.add( csdlAnnotation );
   }

   public ArrayList<CsdlAnnotation> getAnnotations()
   {
      return annotations;
   }

}
