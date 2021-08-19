package org.reso.service.data.meta.builder;


import com.google.gson.stream.JsonReader;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class GenericGSONobject<SubType>
{
   protected static String subArrayName = "annotations";

   protected JsonReader             reader;
   protected HashMap<String,Object> properties   = new HashMap<>();
   protected ArrayList<SubType>     subArrayList = new ArrayList<>();

   public GenericGSONobject(JsonReader reader)
   {
      this.reader = reader;
      this.readObject();
   }

   public Map<String, Object> getPropertiesMeta()
   {
      return null;
   }

   private void readObject()
   {
      Map<String, Object> PROPERTIES_META = this.getPropertiesMeta();
      try
      {
         reader.beginObject();

         while (reader.hasNext()) {

            String name = reader.nextName();

            if (PROPERTIES_META.containsKey(name))
            {
               Object classType = PROPERTIES_META.get(name);

               if (classType.equals(String.class))
               {
                  properties.put(name,reader.nextString() );
               }
               else if (classType.equals(Boolean.class))
               {
                  properties.put(name,reader.nextBoolean() );
               }
               else if (classType.equals(Integer.class))
                  {
                     properties.put(name,reader.nextInt() );
                  }
            } else if (name.equals(subArrayName)) {
               // read array
               reader.beginArray();


               while (reader.hasNext()) {
                  GenericGSONobject subArrayItem = this.createSubType();

                  subArrayList.add((SubType)subArrayItem);
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

   public Object getProperty(String name)
   {
      return properties.get(name);
   }

   protected GenericGSONobject createSubType()  // must also be of type GenericGSONobject
   {
      return null;
   }


   /**
    * Get the annotations for this field.
    * @return the sub-array for this generic object
    */
   public ArrayList<SubType> getSubArrayList()
   {
      return subArrayList;
   }

}
