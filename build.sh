#!/bin/bash

REAL_VAR0=`readlink -f $0`
HOME_DIR=`dirname ${REAL_VAR0}`
TEMP_DIR="${HOME_DIR}/temp"
SQL_DIR="${HOME_DIR}/sql"

if [ ! -f "${HOME_DIR}/.env" ]
then
  cp "${HOME_DIR}/env-default" "${HOME_DIR}/.env"
fi

#Needed for Linux builds
chmod a+x ./docker/scripts/*

docker build -t reso-builder -f docker/docker-builder .
docker run --name builder --mount type=bind,source="${HOME_DIR}",target=/usr/src/app -t reso-builder

if ! docker-compose build
then
  echo "docker-compose could not be found.  You may need to install with pip."
  exit
fi