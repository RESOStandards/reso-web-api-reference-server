// Switch to or create the 'reso' database
const MONGO_DB = process.env.MONGO_INITDB_DATABASE
const resoDb = db.getSiblingDB(MONGO_DB);

// Define collections and indexes
resoDb.createCollection('property', {});
resoDb.property.createIndex({ ListingKey: 1 }, { unique: true });

resoDb.createCollection('member', {});
resoDb.member.createIndex({ MemberKey: 1 }, { unique: true });

resoDb.createCollection('office', {});
resoDb.office.createIndex({ OfficeKey: 1 }, { unique: true });

resoDb.createCollection('contacts', {});
resoDb.contacts.createIndex({ ContactKey: 1 }, { unique: true });

resoDb.createCollection('media', {});
resoDb.media.createIndex({ MediaKey: 1 }, { unique: true });

resoDb.createCollection('history_transactional', {});
resoDb.history_transactional.createIndex({ HistoryTransactionalKey: 1 }, { unique: true });

resoDb.createCollection('contact_listings', {});
resoDb.contact_listings.createIndex({ ContactListingsKey: 1 }, { unique: true });

resoDb.createCollection('internet_tracking', {});
resoDb.internet_tracking.createIndex({ EventKey: 1 }, { unique: true });

resoDb.createCollection('saved_search', {});
resoDb.saved_search.createIndex({ SavedSearchKey: 1 }, { unique: true });

resoDb.createCollection('open_house', {});
resoDb.open_house.createIndex({ OpenHouseKey: 1 }, { unique: true });

resoDb.createCollection('prospecting', {});
resoDb.prospecting.createIndex({ ProspectingKey: 1 }, { unique: true });

resoDb.createCollection('queue', {});
resoDb.queue.createIndex({ QueueTransactionKey: 1 }, { unique: true });

resoDb.createCollection('rules', {});
resoDb.rules.createIndex({ RuleKey: 1 }, { unique: true });

resoDb.createCollection('showing', {});
resoDb.showing.createIndex({ ShowingKey: 1 }, { unique: true });

resoDb.createCollection('teams', {});
resoDb.teams.createIndex({ TeamKey: 1 }, { unique: true });

resoDb.createCollection('team_members', {});
resoDb.team_members.createIndex({ TeamMemberKey: 1 }, { unique: true });

resoDb.createCollection('ouid', {});
resoDb.ouid.createIndex({ OrganizationUniqueIdKey: 1 }, { unique: true });

resoDb.createCollection('contact_listing_notes', {});
resoDb.contact_listing_notes.createIndex({ ContactKey: 1 }, { unique: true });

resoDb.createCollection('other_phone', {});
resoDb.other_phone.createIndex({ OtherPhoneKey: 1 }, { unique: true });

resoDb.createCollection('property_green_verification', {});
resoDb.property_green_verification.createIndex({ GreenBuildingVerificationKey: 1 }, { unique: true });

resoDb.createCollection('property_power_production', {});
resoDb.property_power_production.createIndex({ PowerProductionKey: 1 }, { unique: true });

resoDb.createCollection('property_rooms', {});
resoDb.property_rooms.createIndex({ RoomKey: 1 }, { unique: true });

resoDb.createCollection('property_unit_types', {});
resoDb.property_unit_types.createIndex({ UnitTypeKey: 1 }, { unique: true });

resoDb.createCollection('social_media', {});
resoDb.social_media.createIndex({ SocialMediaKey: 1 }, { unique: true });

resoDb.createCollection('field', {});
resoDb.field.createIndex({ FieldKey: 1 }, { unique: true });

resoDb.createCollection('lookup', {});
resoDb.lookup.createIndex({ LookupKey: 1 }, { unique: true });