package org.reso.service.data.meta;

import com.google.gson.stream.JsonReader;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class AnnotationObject
{
   private static Map<String, Object> FIELD_PROPERTIES = Stream.of(
                     new AbstractMap.SimpleEntry<>("term", String.class),
                     new AbstractMap.SimpleEntry<>("value", String.class) )
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
}

class FieldObject
{
   private static Map<String, Object> FIELD_PROPERTIES = Stream.of(
                     new AbstractMap.SimpleEntry<>("resourceName", String.class),
                     new AbstractMap.SimpleEntry<>("fieldName", String.class),
                     new AbstractMap.SimpleEntry<>("type", String.class),
                     new AbstractMap.SimpleEntry<>("nullable", Boolean.class),
                     new AbstractMap.SimpleEntry<>("scale", Number.class),
                     new AbstractMap.SimpleEntry<>("precision", Number.class),
                     new AbstractMap.SimpleEntry<>("isCollection", Boolean.class),
                     new AbstractMap.SimpleEntry<>("unicode", Boolean.class) )
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

   private JsonReader reader;
   private HashMap<String,Object> properties = new HashMap<>();

   public FieldObject(JsonReader reader)
   {
      this.reader = reader;
      this.readObject();
   }

   private void readObject()
   {
      try
      {
         reader.beginObject();

         while (reader.hasNext()) {

            String name = reader.nextName();

            if (FIELD_PROPERTIES.containsKey(name))
            {
               Object classType = FIELD_PROPERTIES.get(name);

               if (classType.equals(String.class))
               {
                  properties.put(name,reader.nextString() );
               }
               else if (classType.equals(Boolean.class))
               {
                  properties.put(name,reader.nextBoolean() );
               }
               else if (classType.equals(Number.class))
               {
                  properties.put(name,reader.nextLong() );
               }
            } else if (name.equals("annotations")) {
               // read array
               reader.beginArray();

               while (reader.hasNext()) {
                  reader.skipValue();
                  //fields.add( this.readField() );
               }
               reader.endArray();

            } else {
               reader.skipValue(); //avoid some unhandle events
            }
         }

         reader.endObject();
      }
      catch (IOException e)
      {
         e.printStackTrace();
      }
   }


}

public class DefinitionBuilder
{
   private static Map<String, Boolean> HEADER_FIELDS = Stream.of(
                     new AbstractMap.SimpleEntry<>("description", true),
                     new AbstractMap.SimpleEntry<>("generatedOn", true),
                     new AbstractMap.SimpleEntry<>("version", true))
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

   private String fileName;
   private JsonReader reader;

   public DefinitionBuilder(String fileName)
   {
      this.fileName = fileName;
      this.openFile();
   }

   public void openFile()
   {
      try
      {
         reader = new JsonReader(new FileReader(fileName));
      }
      catch (FileNotFoundException e)
      {
         e.printStackTrace();
      }
   }

   private FieldObject readField()
   {
      FieldObject fo = new FieldObject(reader);
      return fo;
   }

   public List<ResourceInfo> readResources()
   {
      List<ResourceInfo> resources = new ArrayList<>();
      ArrayList<FieldObject> fields = new ArrayList();

      try
      {
         reader.beginObject();

         while (reader.hasNext()) {

            String name = reader.nextName();

            if (HEADER_FIELDS.containsKey(name))
            {
               String headerValue = reader.nextString();
            } else if (name.equals("fields")) {

               // read array
               reader.beginArray();

               while (reader.hasNext()) {
                  fields.add( this.readField() );
               }

               reader.endArray();

            } else {
               reader.skipValue(); //avoid some unhandle events
            }
         }

         reader.endObject();
      }
      catch (IOException e)
      {
         e.printStackTrace();
      }

      return resources;
   }
}
