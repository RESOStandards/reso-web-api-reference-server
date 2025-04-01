#!/bin/bash
HOME_DIR=/usr/src/app
TEMP_DIR="${HOME_DIR}/temp"
SQL_DIR="${HOME_DIR}/sql"

# Ensure directories exist
[ -d "${TEMP_DIR}" ] || mkdir -p "${TEMP_DIR}"
[ -d "${SQL_DIR}" ] || mkdir -p "${SQL_DIR}"

if [ -z "${SQL_HOST}" ]; then
  # Fetch the web-api-commander JAR if doesn't exist
  if [ -e "${TEMP_DIR}/web-api-commander.jar" ]; then
      echo "web-api-commander.jar exists already. Skipping."
  else
      wget https://resostuff.blob.core.windows.net/refserverfiles/web-api-commander.jar -O "${TEMP_DIR}/web-api-commander.jar" || exit
  fi

# Generate the DDL
  java -jar "${TEMP_DIR}/web-api-commander.jar" --generateReferenceDDL --useKeyNumeric >"${SQL_DIR}/reso-reference-ddl-dd-1.7.numeric-keys.sql"
  sed -i '1,2d' "${SQL_DIR}/reso-reference-ddl-dd-1.7.numeric-keys.sql"
  sed -i '1359s/(LookupKey, LookupName, LookupValue, StandardLookupValue, LegacyOdataValue)/(LookupKey, LookupName, LookupValue, LegacyOdataValue, StandardLookupValue)/' "${SQL_DIR}/reso-reference-ddl-dd-1.7.numeric-keys.sql"
  echo "CREATE TABLE IF NOT EXISTS lookup_value (
      LookupValueKey TEXT,
      LookupValueKeyNumeric BIGINT NOT NULL AUTO_INCREMENT,
      ResourceName TEXT,
      ResourceRecordKey TEXT,
      ResourceRecordKeyNumeric BIGINT,
      LookupKey TEXT,
      ModificationTimestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FieldName TEXT NOT NULL,
      PRIMARY KEY (LookupValueKeyNumeric)
  ) ENGINE=MyISAM DEFAULT CHARSET=utf8;" >> "${SQL_DIR}/reso-reference-ddl-dd-1.7.numeric-keys.sql"



  if [ -e "RESODataDictionary-1.7.metadata-report.json" ]; then
      echo "RESODataDictionary-1.7.metadata-report.json exists already. Skipping."
  else
      wget "https://services.reso.org/metadata?version=1.7&view=all" -O "RESODataDictionary-1.7.metadata-report.json"
  fi
#   Fetch the RESO Data Dictionary
fi


if ./gradlew war; then
  if [ -f "./build/libs/RESOservice-1.0.war" ]; then
      mv ./build/libs/RESOservice-1.0.war ./build/libs/core.war
      echo "Moved RESOservice-1.0.war to core.war"
    else
      echo "WAR file not found: ./build/libs/RESOservice-1.0.war"
      exit 1
    fi

#     Copy the JSON file (if it exists)
    if [ -f "RESODataDictionary-1.7.metadata-report.json" ]; then
      cp RESODataDictionary-1.7.metadata-report.json ./build/libs/
      echo "Copied RESODataDictionary-1.7.metadata-report.json to build/libs/"
    else
      echo "JSON file not found: RESODataDictionary-1.7.metadata-report.json"
      exit 1
    fi
else
  echo "Gradle build failed"
  exit 1
fi
