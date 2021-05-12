package org.reso.service.data.meta;


import org.apache.olingo.commons.api.data.Entity;
import org.apache.olingo.commons.api.data.Property;
import org.apache.olingo.commons.api.edm.FullQualifiedName;
import org.reso.service.data.common.CommonDataProcessing;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

import static org.reso.service.servlet.RESOservlet.resourceLookup;
import static org.reso.service.servlet.RESOservlet.getConnection;

public class EnumFieldInfo extends FieldInfo
{
   private String lookupName;
   private              ArrayList<EnumValueInfo> values = new ArrayList<>();
   private static final Logger            LOG    = LoggerFactory.getLogger(EnumFieldInfo.class);
   private boolean isCollection = false;

   private static String LOOKUP_COLUMN_NAME = "LookupValue";

   public EnumFieldInfo(String fieldName, FullQualifiedName type)
   {
      super(fieldName, type);
   }

   public void addValue(EnumValueInfo value)
   {
      values.add(value);
   }

   private void loadValues()
   {
      ResourceInfo resource = resourceLookup.get("Lookup");
      if (resource!=null)
      {
         Connection connect = getConnection();
         String queryString = null;
         try
         {
            Statement statement = connect.createStatement();
            HashMap<String,Boolean> selectLookup = new HashMap<>();
            selectLookup.put(LOOKUP_COLUMN_NAME, true);

            queryString = "Select "+LOOKUP_COLUMN_NAME+" from "+resource.getTableName()+" WHERE LookupName = '"+lookupName+"'";
            LOG.debug("Query: "+queryString);

            ResultSet resultSet = statement.executeQuery(queryString);
            while (resultSet.next())
            {
               Entity ent = CommonDataProcessing.getEntityFromRow(resultSet, resource, selectLookup);
               Property property = ent.getProperty(LOOKUP_COLUMN_NAME);
               String val = property.getValue().toString();
               values.add( new EnumValueInfo(val) );
            }
         }
         catch (Exception e)
         {
            LOG.info("Query: "+queryString);
            LOG.error("Error in finding Lookup values for "+lookupName+": "+e.getMessage());
         }
      }
   }

   public ArrayList<EnumValueInfo> getValues()
   {
      if (values.size()==0)
      {
         loadValues();
      }

      return values;
   }

   public void setLookupName(String name) { lookupName=name; }

   public FullQualifiedName getType()
   {
      if (values.size()==0)
      {
         loadValues();
      }
      if (values.size()>0)
      {
         return new FullQualifiedName("org.reso.metadata.enums." + lookupName);
      }

      LOG.info("No values for lookup: "+lookupName);
      return super.getType();
   }


   /**
    * Accessor for lookupName
    * @return
    */
   public String getLookupName()
   {
      return lookupName;
   }

   public boolean isCollection()
   {
      return isCollection;
   }

   public void setCollection()
   {
      isCollection = true;
   }

}
