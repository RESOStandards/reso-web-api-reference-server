#!/bin/bash

REAL_VAR0=`readlink -f $0`
HOME_DIR=`dirname ${REAL_VAR0}`
TEMP_DIR="${HOME_DIR}/temp"
SQL_DIR="${HOME_DIR}/sql"

# Ensure we have directories set up
[ -d "${TEMP_DIR}" ] && echo "temp directory found." ||  mkdir ${TEMP_DIR}
[ -d "${SQL_DIR}" ] && echo "sql directory found." ||  mkdir ${SQL_DIR}

if [ -z "${SQL_HOST}" ]
then
  # Get the Web API Commander, needed to generate the test database
  if ! wget https://github.com/RESOStandards/web-api-commander/releases/download/current-version/web-api-commander.jar -O temp/web-api-commander.jar
  then
    echo "WGET not installed. trying CURL."
    if ! curl -L https://github.com/RESOStandards/web-api-commander/releases/download/current-version/web-api-commander.jar --output  temp/web-api-commander.jar
    then
      echo "CURL not installed. Exiting build."
      exit
    fi
  fi

  java -jar temp/web-api-commander.jar --generateReferenceDDL --useKeyNumeric > sql/reso-reference-ddl-dd-1.7.numeric-keys.sql

  # The following lines should be independent of the SQL logic.
  java -jar temp/web-api-commander.jar --generateResourceInfoModels
  mv ResourceInfoModels/* src/main/java/org/reso/service/data/definition/

else
  COMPOSE_FILE="docker-compose.yml"
fi

if ! mvn compile
then
  echo "Maven could not be found."
  exit
else
  mvn package
fi

if ! docker-compose build
then
  echo "docker-compose could not be found.  You may need to install with pip."
  exit
fi
