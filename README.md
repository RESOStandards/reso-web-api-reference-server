# RESO Web API and Data Dictionary compliant reference server

## Building the server

In order to run your own local server you need a linux / Unix environment with the following dependencies:

* Maven
* docker-compose
* wget or curl

Run the `build.sh`

This will create everything to run the test server.

## Running the server

Run the `run.sh`

## Access the Server

Assuming you're running the server locally, go to [http://localhost:8080/core/2.0.0/$metadata](http://localhost:8080/core/2.0.0/$metadata)\
Otherwise, you will have to replace `localhost` with the IP of your Docker machine.

## Running with a different database

If you set the `SQL_HOST` Environment Variable, then the build script will not build the test database.
It will only build the reference server.

You will need to configure the following environment variables, so the server can connect to your custom database.

* SQL_HOST
* SQL_USER
* SQL_PASSWORD

## ENVIRNONMENT SPECIFIC NOTES

The build scripts were moved to take place in a Docker container so that they would work consistently across environments.

### Windows
In Windows, running under a Bash shell will work, assuming you meet the above requirements.
Don't forget to have Docker installed for Windows.

There is an `env-default-windows` file you should rename to `.env` before running the build script.

The `docker/docker-builder` file has a line commented out for Windows users, and a line that needs to be commented out.

### MAC

This has not been tested.  Anyone wanting to give feedback would be appreciated.

## Build Failures

In the case this happens, and you have fixed the source of the error and need to rebuild everything using the build scripts, you should delete any prior Docker containers.

## Customizing your setup

You can have your own SQL database.  Just copy the `env-default` file to `.env` and modify the appropriate properties.