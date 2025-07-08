# RESO Web API and Data Dictionary compliant reference server

## Building the server

In order to run your own local server you need a linux / Unix environment with the following dependencies:

* Maven
* docker-compose
* wget or curl

Run the `docker-compose -f docker-compose.builder.yml --project-name builder-stack up --build`

This will create everything to run the test server.

## Running the server

Run the server with `docker-compose up`

To run with debug enabled `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`

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


## Testing the RESO Web API Reference Server

### Prerequisites
Before running the tests, ensure you have the following installed:
- **Java 17** (Ensure it's properly set in your environment)
- **Gradle**
- **Docker** (with Docker Compose)
- **Node.js** (for `reso-certification-utils`)
- `reso-certification-utils` installed globally  
  _(Check with `where reso-certification-utils` on Windows or `which reso-certification-utils` on Linux/Mac)_
- on `.env` add the env variable: `WEB_API_COMMANDER_PATH=<your-webapicommander-repo-folder>\web-api-commander` 
- `refServLocal.json` should be on the root of `<your-webapicommander-repo-folder>\web-api-commander` folder
### Running Tests
To execute all JUnit tests, run:

```sh
./gradlew test --rerun-tasks --info
```

This will:

- Start the RESO Reference Server (via Docker).
- Run Data Dictionary compliance tests.
- Validate different Lookup Types (STRING, ENUM_FLAGS, ENUM_COLLECTION).

### Testing Specific Lookup Types

Each test modifies the ```LOOKUP_TYPE``` environment variable dynamically.

To run tests manually with a specific lookup type:

##### Linux / macOS:
```sh
LOOKUP_TYPE=STRING ./gradlew test --tests org.reso.tests.LookupStringTest
LOOKUP_TYPE=ENUM_FLAGS ./gradlew test --tests org.reso.tests.LookupEnumFlagsTest
LOOKUP_TYPE=ENUM_COLLECTION ./gradlew test --tests org.reso.tests.LookupEnumTest
```

##### Windows:
```sh
$env:LOOKUP_TYPE="STRING"; ./gradlew test --tests org.reso.tests.LookupStringTest
$env:LOOKUP_TYPE="ENUM_FLAGS"; ./gradlew test --tests org.reso.tests.LookupEnumFlagsTest
$env:LOOKUP_TYPE="ENUM_COLLECTION"; ./gradlew test --tests org.reso.tests.LookupEnumTest
```

You can run aditional tests for $expand funtionallity:
##### Linux / macOS:
```sh
./gradlew runExpandUtilsTest --rerun-tasks --info
```

##### Windows:
```sh
./gradlew runExpandUtilsTest --rerun-tasks --info
```

### Debugging Issues
- **Docker Stops During Tests?**
Check the container logs:
```sh
docker ps -a
docker logs <container_id>
```
Restart Docker and try again

- **```LOOKUP_TYPE``` Not Changing?**
```java
System.out.println("LOOKUP_TYPE: " + System.getenv("LOOKUP_TYPE"));
```
- **Gradle Not Picking Up Changes?**
```sh
./gradlew clean test --rerun-tasks --info
```

# MongoDB Lookup Field Addition Scripts

This repository contains scripts to add missing lookup fields to a MongoDB database for the RESO Web API reference implementation.

## Available Scripts

### 1. MongoDB Shell Script (`add_missing_lookups.js`)

A MongoDB shell script that adds missing lookup fields directly.

**Usage:**
```
mongo localhost:27017/reso add_missing_lookups.js
```

### 2. Python Script (`add_missing_lookups.py`)

A Python implementation that provides the same functionality with interactive confirmation.

**Requirements:**
- Python 3.6+
- PyMongo library

**Installation:**
```
pip install pymongo
```

**Usage:**
```
python add_missing_lookups.py
```

### 3. Automated Python Script (`add_missing_lookups_auto.py`)

A command-line version of the Python script with additional options for automation.

**Usage:**
```
python add_missing_lookups_auto.py [options]
```

**Options:**
- `--auto`: Run without confirmation prompts
- `--mongo-uri URI`: Specify MongoDB connection URI (default: mongodb://localhost:27017/)
- `--db-name NAME`: Specify database name (default: reso)

Example:
```
python add_missing_lookups_auto.py --auto --mongo-uri mongodb://localhost:27017/ --db-name reso
```

## What These Scripts Do

These scripts:

1. Check for 100+ standard lookup fields specified in the RESO Data Dictionary
2. Add missing fields with standard values (3 values per field)
3. Skip fields that already exist in the database
4. Generate unique hash keys for each lookup value
5. Add proper formatting for `LegacyODataValue` fields
6. Include `ModificationTimestamp` with current date/time

## Fields Added

The scripts add standard values for common lookup fields like:
- PropertyType, PropertySubType
- StandardStatus, OpenHouseStatus
- StructureType, ConstructionMaterials
- Heating, Cooling, Appliances
- And many more (100+ fields total)

Each field gets three standard values appropriate for that field type.

## Verification

After running any of the scripts, you can verify the added fields with:

```javascript
// In MongoDB shell
db.lookup.find({LookupName: "PropertyType"}).pretty()

// Count by LookupName
db.lookup.aggregate([
  {$group: {_id: "$LookupName", count: {$sum: 1}}},
  {$sort: {_id: 1}}
])
```

