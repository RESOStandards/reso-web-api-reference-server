#!/bin/bash

mvn compile
mvn package

docker-compose build
rm -rf temp/spring-server-generated
