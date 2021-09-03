package org.reso.service.data.meta.builder;

import com.google.gson.stream.JsonReader;
import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.reso.service.data.meta.*;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;


public class DefinitionBuilder
{
   // Constants

   private static final String EDM_ENUM = "org.reso.metadata.enums";

   private static final Map<String, FullQualifiedName> EDM_MAP = Stream.of(
                     new AbstractMap.SimpleEntry<>("Edm.String", EdmPrimitiveTypeKind.String.getFullQualifiedName() ),
                     new AbstractMap.SimpleEntry<>("Edm.Boolean", EdmPrimitiveTypeKind.Boolean.getFullQualifiedName() ),
                     new AbstractMap.SimpleEntry<>("Edm.Decimal", EdmPrimitiveTypeKind.Int64.getFullQualifiedName() ))
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
   
   private static final Map<String, Boolean> HEADER_FIELDS = Stream.of(
                     new AbstractMap.SimpleEntry<>("description", true),
                     new AbstractMap.SimpleEntry<>("generatedOn", true),
                     new AbstractMap.SimpleEntry<>("version", true))
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

   // Internals
   private final String     fileName;
   private       JsonReader reader;

   // Constructor
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
      return new FieldObject(reader);
   }

   private LookupObject readLookup()
   {
      return new LookupObject(reader);
   }

   private HashMap<String,ArrayList<GenericGSONobject>> createHashFromKey(ArrayList<GenericGSONobject> allObjects, String keyName)
   {
      HashMap<String,ArrayList<GenericGSONobject>> lookup = new HashMap<>();

      for (GenericGSONobject obj: allObjects)
      {
         String keyValue = obj.getProperty(keyName).toString();
         ArrayList<GenericGSONobject> commonList = lookup.get(keyValue);
         if (commonList==null)
         {
            commonList = new ArrayList<>();
            lookup.put(keyValue, commonList);
         }

         commonList.add(obj);
      }

      return lookup;
   }

   // Function to convert camel case
   // string to snake case string
   public static String camelToSnake(String str)
   {

      // Empty String
      String result = "";

      // Append first character(in lower case)
      // to result string
      char c = str.charAt(0);
      result = result + Character.toLowerCase(c);

      // Traverse the string from
      // ist index to last index
      for (int i = 1; i < str.length(); i++) {

         char ch = str.charAt(i);

         // Check if the character is upper case
         // then append '_' and such character
         // (in lower case) to result string
         if (Character.isUpperCase(ch)) {
            result = result + '_';
            result
                     = result
                       + Character.toLowerCase(ch);
         }

         // If the character is lower case then
         // add such character into result string
         else {
            result = result + ch;
         }
      }

      // return the result
      return result;
   }

   private List<ResourceInfo> createResources(ArrayList<GenericGSONobject> fields, ArrayList<GenericGSONobject> lookups)
   {
      HashMap<String, ArrayList<GenericGSONobject>> lookupMap = createHashFromKey(lookups, "lookupName");
      HashMap<String, ArrayList<GenericGSONobject>> fieldMap = createHashFromKey(fields, "resourceName");

      List<ResourceInfo> resources = new ArrayList<>();

      for (String resourceName: fieldMap.keySet() )
      {
         ArrayList<GenericGSONobject> resourceFields = fieldMap.get(resourceName);

         String tableName = resourceName.toLowerCase();

         if (!"ouid".equals(tableName))
         {
            tableName = camelToSnake(resourceName); // @ToDo: This is NOT Guaranteed for all users
         }

         ResourceInfo resource = new GenericResourceInfo(resourceName, tableName);
         resources.add(resource);

         ArrayList<FieldInfo> fieldList = resource.getFieldList();

         for (GenericGSONobject field : resourceFields)
         {

            FieldInfo newField = null;

            String fieldName = (String) field.getProperty("fieldName");
            String fieldType = (String) field.getProperty("type");
            Boolean nullable = (Boolean) field.getProperty("nullable");
            Boolean isCollection = (Boolean) field.getProperty("isCollection");
            Integer maxLength = (Integer) field.getProperty("maxLength");
            Integer scale = (Integer) field.getProperty("scale");
            Integer precision = (Integer) field.getProperty("precision");

            FullQualifiedName fqn = EDM_MAP.get(fieldType);
            if (fqn != null)
            {
               newField = new FieldInfo(fieldName, fqn);
            }
            else
               if (fieldType.startsWith(EDM_ENUM))
               {
                  String lookupName = fieldType.substring(EDM_ENUM.length()+1 );
                  EnumFieldInfo enumFieldInfo = new EnumFieldInfo(fieldName, EdmPrimitiveTypeKind.Int64.getFullQualifiedName());
                  enumFieldInfo.setLookupName(lookupName);
                  if (isCollection==true)
                  {
                     enumFieldInfo.setCollection();
                  }
                  newField = enumFieldInfo;

                  ArrayList<GenericGSONobject> lookupList = lookupMap.get(fieldType);
                  boolean setFlags = false; //lookupList.size()>1;

                  for (GenericGSONobject lookupItem: lookupList)
                  {
                     String enumValueString = (String)lookupItem.getProperty("lookupValue");
                     EnumValueInfo enumValue = new EnumValueInfo(enumValueString);

                     /**
                     try
                     {
                        Long enumLongValue = Long.parseLong(enumValueString);
                        if (enumLongValue<=0)
                        {
                           setFlags = false;
                        }
                        else
                        {
                           long hob = Long.highestOneBit(enumLongValue);
                           long lob = Long.lowestOneBit(enumLongValue);
                           setFlags = (hob==lob);
                        }
                     }
                     catch (Exception e)
                     {
                        setFlags = false;
                     }
                     /**/


                     ArrayList<AnnotationObject> annotations = null;
                     if (lookupItem.getClass().equals(LookupObject.class))
                     {
                        annotations = ((LookupObject)lookupItem).getAnnotations();
                     }
                     if (annotations!=null)
                     {
                        for (AnnotationObject annotation : annotations)
                        {
                           enumValue.addAnnotation((String) annotation.getProperty("value"), (String) annotation.getProperty("term"));
                        }
                     }

                     enumFieldInfo.addValue(enumValue);
                  }

                  if (setFlags)
                  {
                     enumFieldInfo.setFlags();
                  }

               }

            if (newField != null)
            {
               if (maxLength != null)
               {
                  newField.setMaxLength(maxLength);
               }
               if (scale != null)
               {
                  newField.setScale(scale);
               }
               if (precision != null)
               {
                  newField.setPrecision(precision);
               }

               ArrayList<AnnotationObject> annotations = null;
               if (field.getClass().equals(FieldObject.class))
               {
                  annotations = ((FieldObject)field).getAnnotations();
               }
               if (annotations!=null)
               {
                  for (AnnotationObject annotation : annotations)
                  {
                     newField.addAnnotation((String) annotation.getProperty("value"), (String) annotation.getProperty("term"));
                  }
               }
               fieldList.add(newField);
            }

         }
      }

      return resources;
   }

   public List<ResourceInfo> readResources()
   {
      ArrayList<GenericGSONobject> fields = new ArrayList();
      ArrayList<GenericGSONobject> lookups = new ArrayList();

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

            } else if (name.equals("lookups")) {
               // read array
               reader.beginArray();

               while (reader.hasNext()) {
                  lookups.add( this.readLookup() );
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

      return createResources(fields, lookups);
   }
}
