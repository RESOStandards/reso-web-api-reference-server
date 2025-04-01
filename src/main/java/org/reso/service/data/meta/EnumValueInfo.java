package org.reso.service.data.meta;


import org.apache.olingo.commons.api.edm.provider.CsdlAnnotation;
import org.apache.olingo.commons.api.edm.provider.annotation.CsdlConstantExpression;
import org.reso.service.data.definition.LookupDefinition;

import java.util.ArrayList;
import java.util.Optional;

public class EnumValueInfo
{
   private final String                    value;
   private final ArrayList<CsdlAnnotation> annotations = new ArrayList<>();


   public EnumValueInfo(String value)
   {
      this.value = value;
   }

   public String getValue()
   {
      return value;
   }

   public String getKey(String fieldName) {
      return Optional.ofNullable(LookupDefinition.getReverseLookupCache())
         .map(cache -> cache.get(fieldName))
         .map(innerMap -> innerMap.get(value))
         .orElse(null);
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
