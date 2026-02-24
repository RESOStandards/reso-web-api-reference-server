const sourceUri = process.env.ATLAS_DATAFILL_URI;
const remoteDb = process.env.MONGO_INITDB_DATABASE;

var useFallback = false;
var sourceDB = null;

const collections = [
    "property",
    "media",
    "contact_listing_notes",
    "contact_listings",
    "contacts",
    "history_transactional",
    "internet_tracking",
    "lookup_value",
    "member",
    "office",
    "open_house",
    "other_phone",
    "ouid",
    "property_green_verification",
    "property_power_production",
    "property_rooms",
    "property_unit_type",
    "propsecting",
    "queue",
    "rules",
    "saved_search",
    "showing",
    "social_media",
    "team_members",
    "teams"

];

// Check if the ATLAS_DATAFILL_URI is provided.
if (!sourceUri) {
    print("No source URI provided. Switching to fallback mode.");
    useFallback = true;
} else {
    try {
        var sourceConn = new Mongo(sourceUri);
        sourceDB = sourceConn.getDB(remoteDb);
        // Test the connection.
        var pingResult = sourceDB.runCommand({ ping: 1 });
        if (!pingResult.ok) {
            throw "Ping to database failed";
        }
        print("Connected to database successfully.");
    } catch (e) {
        print("Error connecting to remote source: " + e + ". Switching to fallback mode.");
        useFallback = true;
    }
}

// Function to fetch fallback data from the blob storage.
async function fetchFallbackData(collectionName) {
    var url = "https://resostuff.blob.core.windows.net/refserverfiles/" + collectionName + ".json";
    print("Fetching fallback JSON from: " + url);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        return data;

    } catch (err) {
        print("Error fetching or parsing fallback data for " + collectionName + ": " + err);
        return [];
    }
}

// Function to copy a collection.
async function copyCollection(collectionName) {
    print("Copying collection: " + collectionName);
    var data = [];

    if (!useFallback) {
        try {
            data = sourceDB[collectionName].find().toArray();
            print("Fetched " + data.length + " documents for " + collectionName);
        } catch (e) {
            print("Error fetching data for " + collectionName + ": " + e + ". Falling back.");
            data = fetchFallbackData(collectionName);
            print("Fetched " + data.length + " fallback documents for " + collectionName);
        }
    } else {
        data = await fetchFallbackData(collectionName);
        print("Fetched " + data.length + " fallback documents for " + collectionName);
    }

    if (data && data.length > 0) {
        db[collectionName].insertMany(data);
        print("Inserted " + data.length + " documents into local collection " + collectionName);
    } else {
        print("No documents to insert for " + collectionName);
    }
}

(async function () {
    for (const collectionName of collections) {
        await copyCollection(collectionName);
    }
})();
