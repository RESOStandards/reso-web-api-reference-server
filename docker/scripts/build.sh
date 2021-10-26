#!/bin/bash

REAL_VAR0=`readlink -f $0`
HOME_DIR_OLD=`dirname ${REAL_VAR0}`
HOME_DIR=/usr/src/app
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
    else
      curl -L https://raw.githubusercontent.com/RESOStandards/web-api-commander/main/src/main/resources/RESODataDictionary-1.7.metadata-report.json --output RESODataDictionary-1.7.metadata-report.json
    fi
  else
    wget https://raw.githubusercontent.com/RESOStandards/web-api-commander/main/src/main/resources/RESODataDictionary-1.7.metadata-report.json -O RESODataDictionary-1.7.metadata-report.json
  fi

  java -jar temp/web-api-commander.jar --generateReferenceDDL --useKeyNumeric >sql/reso-reference-ddl-dd-1.7.numeric-keys.sql

else
  COMPOSE_FILE="docker-compose.yml"
fi

#VERSION=6.5.1
#wget https://services.gradle.org/distributions/gradle-${VERSION}-bin.zip -P /tmp
#unzip -d /opt/gradle /tmp/gradle-${VERSION}-bin.zip
#ln -s /opt/gradle/gradle-${VERSION} /opt/gradle/latest

#/opt/gradle/latest/bin/gradle build
#mkdir target
#cp build/libs/RESOservice-1.0.war ./target/
#cp RESODataDictionary-1.7.metadata-report.json ./target/

if ! mvn compile
then
  echo "Maven could not be found."
  exit
else
  mvn package
  cp RESODataDictionary-1.7.metadata-report.json ./target/
fi
