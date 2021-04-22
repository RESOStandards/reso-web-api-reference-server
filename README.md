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

Assuming you're running the server locally, go to [http://localhost:8080/RESOservice-1.0/$metadata](http://localhost:8080/RESOservice-1.0/$metadata)\
Otherwise, you will have to replace `localhost` with the IP of your Docker machine.

## Running with a different database

If you set the `SQL_HOST` Environment Variable, then the build script will not build the test database.
It will only build the reference server.

You will need to configure the following environment variables, so the server can connect to your custom database.

* SQL_HOST
* SQL_USER
* SQL_PASSWORD
