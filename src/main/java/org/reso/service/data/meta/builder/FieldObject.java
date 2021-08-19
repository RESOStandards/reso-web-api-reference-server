package org.reso.service.data.meta.builder;


import com.google.gson.stream.JsonReader;

import java.util.AbstractMap;
import java.util.ArrayList;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FieldObject extends GenericGSONobject<AnnotationObject>
{
   private static final Map<String, Object> PROPERTIES_META = Stream.of(
                     new AbstractMap.SimpleEntry<>("resourceName", String.class),
                     new AbstractMap.SimpleEntry<>("fieldName", String.class),
                     new AbstractMap.SimpleEntry<>("type", String.class),
                     new AbstractMap.SimpleEntry<>("nullable", Boolean.class),
                     new AbstractMap.SimpleEntry<>("maxLength", Integer.class),
                     new AbstractMap.SimpleEntry<>("scale", Integer.class),
                     new AbstractMap.SimpleEntry<>("precision", Integer.class),
                     new AbstractMap.SimpleEntry<>("isCollection", Boolean.class),
                     new AbstractMap.SimpleEntry<>("unicode", Boolean.class) )
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

   protected static String subArrayName = "annotations";

   public FieldObject(JsonReader reader)
   {
      super(reader);
   }

   public Map<String, Object> getPropertiesMeta()
   {
      return PROPERTIES_META;
   }

   protected GenericGSONobject createSubType()  // must also be of type GenericGSONobject
   {
      return new AnnotationObject(reader);
   }

   /**
    * Get the annotations for this field.
    * @return
    */
   public ArrayList<AnnotationObject> getAnnotations()
   {
      return getSubArrayList();
   }
}
