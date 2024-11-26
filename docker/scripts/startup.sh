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



  if [ -e "${TEMP_DIR}/web-api-commander.jar" ]; then
      echo "RESODataDictionary-1.7.metadata-report.json exists already. Skipping."
  else
      wget https://resostuff.blob.core.windows.net/refserverfiles/RESODataDictionary-1.7.metadata-report.json -O "RESODataDictionary-1.7.metadata-report.json"
  fi
  # Fetch the RESO Data Dictionary
fi


# Run Maven to build the project
if mvn install; then
  mv ./target/RESOservice-1.0.war ./target/core.war
  cp RESODataDictionary-1.7.metadata-report.json ./target/
else
  echo "Maven build failed"
  exit 1
fi
