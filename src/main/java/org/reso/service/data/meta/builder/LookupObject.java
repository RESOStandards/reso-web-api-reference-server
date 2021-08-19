package org.reso.service.data.meta.builder;


import com.google.gson.stream.JsonReader;

import java.util.AbstractMap;
import java.util.ArrayList;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LookupObject extends GenericGSONobject<AnnotationObject>
{
   private static final Map<String, Object> PROPERTIES_META = Stream.of(
                     new AbstractMap.SimpleEntry<>("lookupName", String.class),
                     new AbstractMap.SimpleEntry<>("lookupValue", String.class),
                     new AbstractMap.SimpleEntry<>("type", String.class) )
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

   protected static String subArrayName = "annotations";

   public LookupObject(JsonReader reader)
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