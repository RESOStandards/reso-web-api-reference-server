const fs = require('fs');
const MONGO_DB = process.env.MONGO_INITDB_DATABASE
const METADATA_JSON_FILENAME = process.env.CERT_REPORT_FILENAME

print(`Inserting lookups from metadata json file ${METADATA_JSON_FILENAME}`);

const jsonData = JSON.parse(fs.readFileSync("/" + METADATA_JSON_FILENAME, 'utf8'));

const lookups = jsonData.lookups.map(({ lookupName, lookupValue, annotations }) => {
    const standardNameAnnotation = annotations && annotations.find(a => a.term === "RESO.OData.Metadata.StandardName");
    const legacyValueAnnotation = annotations && annotations.find(a => a.term === "RESO.OData.Metadata.LegacyODataValue");
    return ({
        "LookupKey": crypto.randomUUID().replace(/-/g, ''),
        "LookupName": lookupName.split('.').pop(),
        "LookupValue": lookupValue,
        "StandardLookupValue": standardNameAnnotation ? standardNameAnnotation.value : null,
        "LegacyODataValue": legacyValueAnnotation ? legacyValueAnnotation.value : null,
        "ModificationTimestamp": ISODate()
    })
})

const resoDb = db.getSiblingDB(MONGO_DB);
resoDb.lookup.insertMany(lookups)
print(`Lookups from metadata json file ${METADATA_JSON_FILENAME} inserted successfully`);