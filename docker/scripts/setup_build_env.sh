#!/bin/bash

# This will run commands to setup your build server / Ubuntu 20.10 with the needed prerequisites. 22.04

DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y wget pip maven docker-compose