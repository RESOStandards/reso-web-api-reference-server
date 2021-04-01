#!/bin/bash

mvn compile
mvn package

docker-compose build
