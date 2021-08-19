package org.reso.service.data.meta.builder;


import com.google.gson.stream.JsonReader;

import java.util.AbstractMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class AnnotationObject extends GenericGSONobject<Object>
{
   private static final Map<String, Object> PROPERTIES_META = Stream.of(
                     new AbstractMap.SimpleEntry<>("term", String.class),
                     new AbstractMap.SimpleEntry<>("value", String.class) )
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

   public AnnotationObject(JsonReader reader)
   {
      super(reader);
   }

   public Map<String, Object> getPropertiesMeta()
   {
      return PROPERTIES_META;
   }
}