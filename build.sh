#!/bin/bash

unzip temp/resources/spring-server-generated.zip -d temp/spring-server-generated

mvn -f temp/spring-server-generated compile
mvn -f temp/spring-server-generated package

docker-compose build
rm -rf temp/spring-server-generated
