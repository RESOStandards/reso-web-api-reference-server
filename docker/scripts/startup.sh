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



  if [ -e "RESODataDictionary-1.7.metadata-report.json" ]; then
      echo "RESODataDictionary-1.7.metadata-report.json exists already. Skipping."
  else
      wget https://resostuff.blob.core.windows.net/refserverfiles/RESODataDictionary-1.7.metadata-report.json -O "RESODataDictionary-1.7.metadata-report.json"
  fi
  # Fetch the RESO Data Dictionary
fi


# Run Maven to build the project
#if mvn install; then
if ./gradlew war; then
#  mv ./target/RESOservice-1.0.war ./target/core.war
#  cp RESODataDictionary-1.7.metadata-report.json ./target/
  if [ -f "./build/libs/RESOservice-1.0.war" ]; then
      mv ./build/libs/RESOservice-1.0.war ./build/libs/core.war
      echo "Moved RESOservice-1.0.war to core.war"
    else
      echo "WAR file not found: ./build/libs/RESOservice-1.0.war"
      exit 1
    fi

    # Copy the JSON file (if it exists)
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
