#!/bin/bash

wget https://github.com/RESOStandards/web-api-commander/releases/download/current-version/web-api-commander.jar -O temp/web-api-commander.jar
java -jar temp/web-api-commander.jar --generateReferenceDDL --useKeyNumeric > sql/reso-reference-ddl-dd-1.7.numeric-keys.sql

mvn compile
mvn package

docker-compose build
