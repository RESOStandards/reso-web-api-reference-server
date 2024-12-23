#!/bin/bash

# This will run commands to setup your build server / Ubuntu 20.04 with the needed prerequisites.

DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y wget pip maven docker-compose