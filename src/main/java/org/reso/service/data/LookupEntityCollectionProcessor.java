package org.reso.service.data;

import org.apache.olingo.commons.api.edm.EdmPrimitiveTypeKind;
import org.reso.service.data.meta.FieldInfo;
import org.reso.service.data.meta.ResourceInfo;

import java.util.ArrayList;

import java.sql.Connection;

public class LookupEntityCollectionProcessor extends GenericEntityCollectionProcessor
{
   private static ArrayList<FieldInfo> fieldList = null;

   public LookupEntityCollectionProcessor(Connection connection, ResourceInfo resourceInfo)
   {
      super(connection);
      this.setResourceInfo(resourceInfo);
   }

}
