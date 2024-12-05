// Switch to or create the 'reso' database
const resoDb = db.getSiblingDB('reso');

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

resoDb.lookup.insertMany([
    {
        "LookupKey": "bdfe79034c8272cae26bc06b85e9193f4f3150699b7459414556f2952e7e9e68",
        "LookupName": "AreaSource",
        "LookupValue": "Appraiser",
        "StandardLookupValue": "Appraiser",
        "LegacyOdataValue": "Appraiser"
    },
    {
        "LookupKey": "2c71afd6ae17e07bc1eecfbcf97384f2cfacd0edefa195b9d11bf175940b298d",
        "LookupName": "AreaSource",
        "LookupValue": "Assessor",
        "StandardLookupValue": "Assessor",
        "LegacyOdataValue": "Assessor"
    },
    {
        "LookupKey": "0e6018a3658bd7bf55a297f38fdcaf09e7205a4cc19cfcfb73f133bdcf03cf35",
        "LookupName": "AreaSource",
        "LookupValue": "Builder",
        "StandardLookupValue": "Builder",
        "LegacyOdataValue": "Builder"
    },
    {
        "LookupKey": "0786aad986cdf0cdc2a772da20d1dc627a928d1e1ef41bfdc97b491604bcac18",
        "LookupName": "AreaSource",
        "LookupValue": "Estimated",
        "StandardLookupValue": "Estimated",
        "LegacyOdataValue": "Estimated"
    },
    {
        "LookupKey": "ff1235525c14b93deb318e47c35f81c190995923d08567719198fe969a3a6da4",
        "LookupName": "AreaSource",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "d0e803bdccc624237e1767dd8d0ce5aef7260ac8c45793d631135ee2c59d92d5",
        "LookupName": "AreaSource",
        "LookupValue": "Owner",
        "StandardLookupValue": "Owner",
        "LegacyOdataValue": "Owner"
    },
    {
        "LookupKey": "d2d344694302101e99b8770c61edd9eddc6f3f79887c1a958881954470dc07f3",
        "LookupName": "AreaSource",
        "LookupValue": "Plans",
        "StandardLookupValue": "Plans",
        "LegacyOdataValue": "Plans"
    },
    {
        "LookupKey": "b4906932f31d1bb2f89878258896e025c13cd5db0f71d8b6b25d08fbe5b03806",
        "LookupName": "AreaSource",
        "LookupValue": "PublicRecords",
        "StandardLookupValue": "PublicRecords",
        "LegacyOdataValue": "Public Records"
    },
    {
        "LookupKey": "f8356f61d027d9e1155117561054961d52745fee8f5bd80fbcbd27f5fe9be868",
        "LookupName": "AreaSource",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "647d5a6e6f2c2b074b2a3bd8a9ff788e3bdb39007e60f68d079daa10179497f7",
        "LookupName": "AreaUnits",
        "LookupValue": "SquareFeet",
        "StandardLookupValue": "SquareFeet",
        "LegacyOdataValue": "Square Feet"
    },
    {
        "LookupKey": "b1920654747eb76c5e9f1f733a3a2cf455a6d5f8e001abdbc0ae13d34f3ab17f",
        "LookupName": "AreaUnits",
        "LookupValue": "SquareMeters",
        "StandardLookupValue": "SquareMeters",
        "LegacyOdataValue": "Square Meters"
    },
    {
        "LookupKey": "76c7499104496c6b478f6734e704c0afac9f955572b5da15b6a27f7eb96acceb",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleApproachWithRamp",
        "StandardLookupValue": "AccessibleApproachWithRamp",
        "LegacyOdataValue": "Accessible Approach with Ramp"
    },
    {
        "LookupKey": "a0000c64dff17db8e303e947806de2978717ebb20ba63f07628fe80990b56ec2",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleBedroom",
        "StandardLookupValue": "AccessibleBedroom",
        "LegacyOdataValue": "Accessible Bedroom"
    },
    {
        "LookupKey": "9ec7426db995edd79006efcf7fa6cccdeb2f2d84b4a00f167f48f7ae4bcb222d",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleCentralLivingArea",
        "StandardLookupValue": "AccessibleCentralLivingArea",
        "LegacyOdataValue": "Accessible Central Living Area"
    },
    {
        "LookupKey": "e5b5e64383b07c4d1f10748b47da2a509f98ab782285fa80777fb1c29debc5b3",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleClosets",
        "StandardLookupValue": "AccessibleClosets",
        "LegacyOdataValue": "Accessible Closets"
    },
    {
        "LookupKey": "6573d8e53fc1d8adcffd69709d9e7cf87ebb1a12936a0a56615b089db5b5ba87",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleCommonArea",
        "StandardLookupValue": "AccessibleCommonArea",
        "LegacyOdataValue": "Accessible Common Area"
    },
    {
        "LookupKey": "e818574674907d3f5ef1260e88bf340caeb45b4638282ba376ebba22d2971785",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleDoors",
        "StandardLookupValue": "AccessibleDoors",
        "LegacyOdataValue": "Accessible Doors"
    },
    {
        "LookupKey": "d3e948a8ca5be6a3e98255e6d4bc2c2a5e46a9d44c396f477e1774e81a15c34a",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleElectricalAndEnvironmentalControls",
        "StandardLookupValue": "AccessibleElectricalAndEnvironmentalControls",
        "LegacyOdataValue": "Accessible Electrical and Environmental Controls"
    },
    {
        "LookupKey": "e46e6081cc2f444cabcf39e43d157d20be2fc2cc0939c7fc20595c9f0c6fd9e8",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleElevatorInstalled",
        "StandardLookupValue": "AccessibleElevatorInstalled",
        "LegacyOdataValue": "Accessible Elevator Installed"
    },
    {
        "LookupKey": "fd7ae86632f1a6afde28fb9ca5a73e851f5ac296427c7c6b94ccee612a962520",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleEntrance",
        "StandardLookupValue": "AccessibleEntrance",
        "LegacyOdataValue": "Accessible Entrance"
    },
    {
        "LookupKey": "eafffb51168c804a2314c232b119a6209b69a76c2bc2ff10d38d21774fc283a3",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleForHearingImpairment",
        "StandardLookupValue": "AccessibleForHearingImpairment",
        "LegacyOdataValue": "Accessible for Hearing-Impairment"
    },
    {
        "LookupKey": "22f98857bb05c899332242bc9e393e22d24518f2f5b3676694cd0ebc8276e3ef",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleFullBath",
        "StandardLookupValue": "AccessibleFullBath",
        "LegacyOdataValue": "Accessible Full Bath"
    },
    {
        "LookupKey": "4bc93a45b7912b8580308a589935c7f7fd599e1cd2350981614b477dfa245350",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleHallways",
        "StandardLookupValue": "AccessibleHallways",
        "LegacyOdataValue": "Accessible Hallways"
    },
    {
        "LookupKey": "77c548b56a59416a21258f25c0011105fca5bf9f0b06bc46e870c0ee373951d2",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleKitchen",
        "StandardLookupValue": "AccessibleKitchen",
        "LegacyOdataValue": "Accessible Kitchen"
    },
    {
        "LookupKey": "3b2fc453872b0b6729ef37482134edfc68b46f10eb8294d4ac7ac6c3d8fd1471",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleKitchenAppliances",
        "StandardLookupValue": "AccessibleKitchenAppliances",
        "LegacyOdataValue": "Accessible Kitchen Appliances"
    },
    {
        "LookupKey": "97b278aeb64864051cf004bd8765c93da05f394c34bc7d80ed94a21871212395",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleStairway",
        "StandardLookupValue": "AccessibleStairway",
        "LegacyOdataValue": "Accessible Stairway"
    },
    {
        "LookupKey": "1dafcfa850a3e71f115f5d4ffff3515d4f0db653d69442d7452c1f58a6710195",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AccessibleWasherDryer",
        "StandardLookupValue": "AccessibleWasherDryer",
        "LegacyOdataValue": "Accessible Washer/Dryer"
    },
    {
        "LookupKey": "be85042502053726e5d339aa588daa473e65c1459a9269b5c961d142de223fb4",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AdaptableBathroomWalls",
        "StandardLookupValue": "AdaptableBathroomWalls",
        "LegacyOdataValue": "Adaptable Bathroom Walls"
    },
    {
        "LookupKey": "2be9cce121bfa7c0822a8f5f0888bf118434a29ee14d43010d376cb2dcfd815f",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "AdaptableForElevator",
        "StandardLookupValue": "AdaptableForElevator",
        "LegacyOdataValue": "Adaptable For Elevator"
    },
    {
        "LookupKey": "b4e0ed4a1570c4e259e18fd9e6ba7884917eb6d4a696b15116f99c8d16b6dc88",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "CeilingTrack",
        "StandardLookupValue": "CeilingTrack",
        "LegacyOdataValue": "Ceiling Track"
    },
    {
        "LookupKey": "9afeef60f5e92232bdc43d6ba32507d380678e9a82c45deaa820d0a18eb9a4b6",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "CentralLivingArea",
        "StandardLookupValue": "CentralLivingArea",
        "LegacyOdataValue": "Central Living Area"
    },
    {
        "LookupKey": "dda2e9d25559ecd2354a8303262171c48e4861b3753f253163d02d5f40c7c567",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "CommonArea",
        "StandardLookupValue": "CommonArea",
        "LegacyOdataValue": "Common Area"
    },
    {
        "LookupKey": "b72574e22d992219a41ddc89c0e4d448502dfff8c7caddf4f4b37390800ae6c5",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "CustomizedWheelchairAccessible",
        "StandardLookupValue": "CustomizedWheelchairAccessible",
        "LegacyOdataValue": "Customized Wheelchair Accessible"
    },
    {
        "LookupKey": "f9af6c003a6e3821c8d01885f20826668c1aad4760e9d11711570f2ae7d2c352",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "ElectronicEnvironmentalControls",
        "StandardLookupValue": "ElectronicEnvironmentalControls",
        "LegacyOdataValue": "Electronic Environmental Controls"
    },
    {
        "LookupKey": "1a7f8158fa4a5bb4be2b030b6d0626bfab77f7c8236fb023d298283e099ecc45",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "EnhancedAccessible",
        "StandardLookupValue": "EnhancedAccessible",
        "LegacyOdataValue": "Enhanced Accessible"
    },
    {
        "LookupKey": "e00d205eb94cbea7c7e1d1501b8f8246cb7fa90e6110d991bf751cffdc71b99d",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "ExteriorWheelchairLift",
        "StandardLookupValue": "ExteriorWheelchairLift",
        "LegacyOdataValue": "Exterior Wheelchair Lift"
    },
    {
        "LookupKey": "647de97321eb73a7f840a96a7732c0006d4e649ee52893e2662d98a54ba44fba",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "GripAccessibleFeatures",
        "StandardLookupValue": "GripAccessibleFeatures",
        "LegacyOdataValue": "Grip-Accessible Features"
    },
    {
        "LookupKey": "9da80678d0114467d7c35924c517984d85be225ea4ec0f898ba5249dc4dd4470",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "ReinforcedFloors",
        "StandardLookupValue": "ReinforcedFloors",
        "LegacyOdataValue": "Reinforced Floors"
    },
    {
        "LookupKey": "347cd7a32272ddaff63ac9479676114662ef4e5fb167f72857bc43b59524d06e",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "SafeEmergencyEgressFromHome",
        "StandardLookupValue": "SafeEmergencyEgressFromHome",
        "LegacyOdataValue": "Safe Emergency Egress from Home"
    },
    {
        "LookupKey": "1068ad1685b06c133adff7c82d85f9f39521c246c5ba9b62987bf29deba0a615",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "SmartTechnology",
        "StandardLookupValue": "SmartTechnology",
        "LegacyOdataValue": "Smart Technology"
    },
    {
        "LookupKey": "eb92bc7152f11cd70f919df127bf02a00b2888454d0e1f7bc0a3057b6b6e51a2",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "StairLift",
        "StandardLookupValue": "StairLift",
        "LegacyOdataValue": "Stair Lift"
    },
    {
        "LookupKey": "611fd98928520caa24caace9c6b5e6f168a1aab11f1c653e32bd92c94e6ba490",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "StandbyGenerator",
        "StandardLookupValue": "StandbyGenerator",
        "LegacyOdataValue": "Standby Generator"
    },
    {
        "LookupKey": "1b96bf064e40ca1bd25e3103560ca8fe486a81f8803bc06ee798289b1341964e",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "TherapeuticWhirlpool",
        "StandardLookupValue": "TherapeuticWhirlpool",
        "LegacyOdataValue": "Therapeutic Whirlpool"
    },
    {
        "LookupKey": "cdd25cc89e1d823bfee35640ffe8792ee44de65e5585b54cd1729a358f8e15c5",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "Visitable",
        "StandardLookupValue": "Visitable",
        "LegacyOdataValue": "Visitable"
    },
    {
        "LookupKey": "d76c475adac4daad1c96a2b6af5611ed939820b158c71426b503694b7cb66e03",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "VisitorBathroom",
        "StandardLookupValue": "VisitorBathroom",
        "LegacyOdataValue": "Visitor Bathroom"
    },
    {
        "LookupKey": "e400c25f9bfc2b99447c11905f7fdf8787d73f922381ed4699191bd903b835e6",
        "LookupName": "AccessibilityFeatures",
        "LookupValue": "WalkerAccessibleStairs",
        "StandardLookupValue": "WalkerAccessibleStairs",
        "LegacyOdataValue": "Walker-Accessible Stairs"
    },
    {
        "LookupKey": "b764e59f355671e81a1d17c1d484f69f5483ab9bb63e47b4b23d555d938b930e",
        "LookupName": "Appliances",
        "LookupValue": "BarFridge",
        "StandardLookupValue": "BarFridge",
        "LegacyOdataValue": "Bar Fridge"
    },
    {
        "LookupKey": "1c75daa3bc558b916f37fb2caf4f4fdbcf13fdf3471b6ee19500b610155de75e",
        "LookupName": "Appliances",
        "LookupValue": "BuiltInElectricOven",
        "StandardLookupValue": "BuiltInElectricOven",
        "LegacyOdataValue": "Built-In Electric Oven"
    },
    {
        "LookupKey": "903a6b1b20d32729873e577b923ce7ea03567a5cae4e98825d19eb476085467d",
        "LookupName": "Appliances",
        "LookupValue": "BuiltInElectricRange",
        "StandardLookupValue": "BuiltInElectricRange",
        "LegacyOdataValue": "Built-In Electric Range"
    },
    {
        "LookupKey": "a5ba082d7fff224033bbd8251cde82426258f51180dd38ecdc78b0388cad8d20",
        "LookupName": "Appliances",
        "LookupValue": "BuiltInFreezer",
        "StandardLookupValue": "BuiltInFreezer",
        "LegacyOdataValue": "Built-In Freezer"
    },
    {
        "LookupKey": "c7872f59d8635fc3a6505fd90760f165e443ebc942b05fe302c71a29b6f6803b",
        "LookupName": "Appliances",
        "LookupValue": "BuiltInGasOven",
        "StandardLookupValue": "BuiltInGasOven",
        "LegacyOdataValue": "Built-In Gas Oven"
    },
    {
        "LookupKey": "4b0345e30e34f19cbf0444e1c14e9356e24b97c34a9fe0730939f42226ddc270",
        "LookupName": "Appliances",
        "LookupValue": "BuiltInGasRange",
        "StandardLookupValue": "BuiltInGasRange",
        "LegacyOdataValue": "Built-In Gas Range"
    },
    {
        "LookupKey": "f8a8729ee86bac809b569538ca63073994fc61e1771f9cb204e2a3f60eb84a4e",
        "LookupName": "Appliances",
        "LookupValue": "BuiltInRange",
        "StandardLookupValue": "BuiltInRange",
        "LegacyOdataValue": "Built-In Range"
    },
    {
        "LookupKey": "f62a8ed7bd078a207b35d7b48f0d29d199d1a200c0a7c950f7df5a815ec15381",
        "LookupName": "Appliances",
        "LookupValue": "BuiltInRefrigerator",
        "StandardLookupValue": "BuiltInRefrigerator",
        "LegacyOdataValue": "Built-In Refrigerator"
    },
    {
        "LookupKey": "95faa478ee6c4ffec9fbfcd343f8e2232665a6f89f08dfc0978fd03370b11053",
        "LookupName": "Appliances",
        "LookupValue": "ConvectionOven",
        "StandardLookupValue": "ConvectionOven",
        "LegacyOdataValue": "Convection Oven"
    },
    {
        "LookupKey": "714b9c3e3d11f592b5051bee3b8844152bfcd9b342bb36a59a48e3fd64aec9fb",
        "LookupName": "Appliances",
        "LookupValue": "Cooktop",
        "StandardLookupValue": "Cooktop",
        "LegacyOdataValue": "Cooktop"
    },
    {
        "LookupKey": "f31ed3e47b234991922b5624120019d64a0c400154fbffd26b6aeef7e03bad4f",
        "LookupName": "Appliances",
        "LookupValue": "Dishwasher",
        "StandardLookupValue": "Dishwasher",
        "LegacyOdataValue": "Dishwasher"
    },
    {
        "LookupKey": "0a826fbc4ebbb7fc1e1d7c7e26819e5135e5e37b68b32f3fb6cd5ce022c987d4",
        "LookupName": "Appliances",
        "LookupValue": "Disposal",
        "StandardLookupValue": "Disposal",
        "LegacyOdataValue": "Disposal"
    },
    {
        "LookupKey": "e0aff535afcd712e776665bf1994c8c0ad83486e6b1467b406b7eb5e9f0e7998",
        "LookupName": "Appliances",
        "LookupValue": "DoubleOven",
        "StandardLookupValue": "DoubleOven",
        "LegacyOdataValue": "Double Oven"
    },
    {
        "LookupKey": "f9f7acbecc4923af034fc1f422b5abbbfd725c9936c8dc56bd5f81e415b8d366",
        "LookupName": "Appliances",
        "LookupValue": "DownDraft",
        "StandardLookupValue": "DownDraft",
        "LegacyOdataValue": "Down Draft"
    },
    {
        "LookupKey": "9c8160a72633efbf1082f0ced69d054092618e0cb710b7e0006b5a6317a59ee7",
        "LookupName": "Appliances",
        "LookupValue": "Dryer",
        "StandardLookupValue": "Dryer",
        "LegacyOdataValue": "Dryer"
    },
    {
        "LookupKey": "014586dcd47dd7d4cb443d521c24245a936ee348837d97b7652473350834e592",
        "LookupName": "Appliances",
        "LookupValue": "ElectricCooktop",
        "StandardLookupValue": "ElectricCooktop",
        "LegacyOdataValue": "Electric Cooktop"
    },
    {
        "LookupKey": "eb5018f22629e4b784da1d72840a50cf5d3803e8e3b6f8348378f2be9826105b",
        "LookupName": "Appliances",
        "LookupValue": "ElectricOven",
        "StandardLookupValue": "ElectricOven",
        "LegacyOdataValue": "Electric Oven"
    },
    {
        "LookupKey": "d7d06fb3ee8836450cb4dc222a4f3f1d353a9e9e3d67c31ca2ea6f3c99c756eb",
        "LookupName": "Appliances",
        "LookupValue": "ElectricRange",
        "StandardLookupValue": "ElectricRange",
        "LegacyOdataValue": "Electric Range"
    },
    {
        "LookupKey": "d032c4070ca345bb99e1c494547932645953def241cc0604c404a5afd8d60e18",
        "LookupName": "Appliances",
        "LookupValue": "ElectricWaterHeater",
        "StandardLookupValue": "ElectricWaterHeater",
        "LegacyOdataValue": "Electric Water Heater"
    },
    {
        "LookupKey": "31c7bb878f0bcb7b9c482664357991ead6c94bd0b66faa05cdfc0ffe72472301",
        "LookupName": "Appliances",
        "LookupValue": "EnergyStarQualifiedAppliances",
        "StandardLookupValue": "EnergyStarQualifiedAppliances",
        "LegacyOdataValue": "ENERGY STAR Qualified Appliances"
    },
    {
        "LookupKey": "aeeece21a6943fd52860e05f68ae7ed7504f81019b01d8fb00f4e355559ed8a2",
        "LookupName": "Appliances",
        "LookupValue": "EnergyStarQualifiedDishwasher",
        "StandardLookupValue": "EnergyStarQualifiedDishwasher",
        "LegacyOdataValue": "ENERGY STAR Qualified Dishwasher"
    },
    {
        "LookupKey": "bf5627c929502019e647b71ecd3a6ffd3ca68950c2797f9e7ffbc38aa805ddb5",
        "LookupName": "Appliances",
        "LookupValue": "EnergyStarQualifiedDryer",
        "StandardLookupValue": "EnergyStarQualifiedDryer",
        "LegacyOdataValue": "ENERGY STAR Qualified Dryer"
    },
    {
        "LookupKey": "4e7e233799b5e8d65905ee88e3cd9894f678646c1c1fa9f1bd9b84be79636f4b",
        "LookupName": "Appliances",
        "LookupValue": "EnergyStarQualifiedFreezer",
        "StandardLookupValue": "EnergyStarQualifiedFreezer",
        "LegacyOdataValue": "ENERGY STAR Qualified Freezer"
    },
    {
        "LookupKey": "6f1a9f873b9d10da6422ae378d4fef0b221589be1cdcfb2c625936cb240f8517",
        "LookupName": "Appliances",
        "LookupValue": "EnergyStarQualifiedRefrigerator",
        "StandardLookupValue": "EnergyStarQualifiedRefrigerator",
        "LegacyOdataValue": "ENERGY STAR Qualified Refrigerator"
    },
    {
        "LookupKey": "5dfee8999a23298ea69c296d08d2923b15b6a068334ce2c1004d0df6637f0f83",
        "LookupName": "Appliances",
        "LookupValue": "EnergyStarQualifiedWasher",
        "StandardLookupValue": "EnergyStarQualifiedWasher",
        "LegacyOdataValue": "ENERGY STAR Qualified Washer"
    },
    {
        "LookupKey": "6e0093449924c83f1b058d6902d0a1f77ba8bbd014c8abf44963507fdefe8b46",
        "LookupName": "Appliances",
        "LookupValue": "EnergyStarQualifiedWaterHeater",
        "StandardLookupValue": "EnergyStarQualifiedWaterHeater",
        "LegacyOdataValue": "ENERGY STAR Qualified Water Heater"
    },
    {
        "LookupKey": "eb8eb7f7b64ddb79010d1d6404633ba7b73e46e146b38819a1a6ad7e03963404",
        "LookupName": "Appliances",
        "LookupValue": "ExhaustFan",
        "StandardLookupValue": "ExhaustFan",
        "LegacyOdataValue": "Exhaust Fan"
    },
    {
        "LookupKey": "d83fd0376f7ab3de82e0b90d6f73c0b2469007b5fa36379a5a6395c5aab275fd",
        "LookupName": "Appliances",
        "LookupValue": "FreeStandingElectricOven",
        "StandardLookupValue": "FreeStandingElectricOven",
        "LegacyOdataValue": "Free-Standing Electric Oven"
    },
    {
        "LookupKey": "820843f2f057b35f4c7dcfc0d1d49dd6e7914a5541a4346252c56c604d7df21d",
        "LookupName": "Appliances",
        "LookupValue": "FreeStandingElectricRange",
        "StandardLookupValue": "FreeStandingElectricRange",
        "LegacyOdataValue": "Free-Standing Electric Range"
    },
    {
        "LookupKey": "c0769324047ae0e8db89070b1154294f51a8ab0d68b461f92984d40048bda380",
        "LookupName": "Appliances",
        "LookupValue": "FreeStandingFreezer",
        "StandardLookupValue": "FreeStandingFreezer",
        "LegacyOdataValue": "Free-Standing Freezer"
    },
    {
        "LookupKey": "3fd01ed01fefef1c34119d8c2088d4ab25344f167b725ad977bd4390a78bc5e2",
        "LookupName": "Appliances",
        "LookupValue": "FreeStandingGasOven",
        "StandardLookupValue": "FreeStandingGasOven",
        "LegacyOdataValue": "Free-Standing Gas Oven"
    },
    {
        "LookupKey": "5e357ed7f5867b0b35fae9d8bcf3af86df1498508de525fe7a9d420581158dd8",
        "LookupName": "Appliances",
        "LookupValue": "FreeStandingGasRange",
        "StandardLookupValue": "FreeStandingGasRange",
        "LegacyOdataValue": "Free-Standing Gas Range"
    },
    {
        "LookupKey": "c6cb741d3b1d0d69bb16a94e261d4d9c7102e3ae2726e06d8949aa1cf2e4f55a",
        "LookupName": "Appliances",
        "LookupValue": "FreeStandingRange",
        "StandardLookupValue": "FreeStandingRange",
        "LegacyOdataValue": "Free-Standing Range"
    },
    {
        "LookupKey": "fd2efa0a95b3ff255805a4cca0327642a88eb67742af91dbb874eb52bc9cbae1",
        "LookupName": "Appliances",
        "LookupValue": "FreeStandingRefrigerator",
        "StandardLookupValue": "FreeStandingRefrigerator",
        "LegacyOdataValue": "Free-Standing Refrigerator"
    },
    {
        "LookupKey": "00ecd6faa25dc33c31dfaed6458693fe727328f1b265c3b78dbcae0fffa7f416",
        "LookupName": "Appliances",
        "LookupValue": "Freezer",
        "StandardLookupValue": "Freezer",
        "LegacyOdataValue": "Freezer"
    },
    {
        "LookupKey": "f0cb13aa5ae0d75b2f6027022566c86279246a62512228d6c01dda2c1e575ad5",
        "LookupName": "Appliances",
        "LookupValue": "GasCooktop",
        "StandardLookupValue": "GasCooktop",
        "LegacyOdataValue": "Gas Cooktop"
    },
    {
        "LookupKey": "7a0a83810bcb6542a30e25646df4525518a1a83c930f10acafb9bbc7190d1df1",
        "LookupName": "Appliances",
        "LookupValue": "GasOven",
        "StandardLookupValue": "GasOven",
        "LegacyOdataValue": "Gas Oven"
    },
    {
        "LookupKey": "32ed061ada6c93503cf26191b59712b0be01995c2b0ae1783941599a95b5adb1",
        "LookupName": "Appliances",
        "LookupValue": "GasRange",
        "StandardLookupValue": "GasRange",
        "LegacyOdataValue": "Gas Range"
    },
    {
        "LookupKey": "5cfe9817e7d46ca8359683f7af9c25003c0d1735991902bb86714294c31712e3",
        "LookupName": "Appliances",
        "LookupValue": "GasWaterHeater",
        "StandardLookupValue": "GasWaterHeater",
        "LegacyOdataValue": "Gas Water Heater"
    },
    {
        "LookupKey": "746c656a1d9f9da8790bad967c096ae158f94f6c08ed176b0837cda1d811bb52",
        "LookupName": "Appliances",
        "LookupValue": "Humidifier",
        "StandardLookupValue": "Humidifier",
        "LegacyOdataValue": "Humidifier"
    },
    {
        "LookupKey": "03fea1d475fc78cb077a7d20cfecfc46162bea0e509e67fedbbba755d3d42ebe",
        "LookupName": "Appliances",
        "LookupValue": "IceMaker",
        "StandardLookupValue": "IceMaker",
        "LegacyOdataValue": "Ice Maker"
    },
    {
        "LookupKey": "4eff7fc28de46615bfa88cbdb5037159289bb9689383fa6697ed8511fa9476c6",
        "LookupName": "Appliances",
        "LookupValue": "IndoorGrill",
        "StandardLookupValue": "IndoorGrill",
        "LegacyOdataValue": "Indoor Grill"
    },
    {
        "LookupKey": "cc4b76320ce92ba38ea04e7ef57beb38d429f5fa5f55c935cd0901acf6c2bc4c",
        "LookupName": "Appliances",
        "LookupValue": "InductionCooktop",
        "StandardLookupValue": "InductionCooktop",
        "LegacyOdataValue": "Induction Cooktop"
    },
    {
        "LookupKey": "44033f6a4d1d03bc13aa38f20d29d5347850e01cb8ec7061df168dcd7b915ce2",
        "LookupName": "Appliances",
        "LookupValue": "InstantHotWater",
        "StandardLookupValue": "InstantHotWater",
        "LegacyOdataValue": "Instant Hot Water"
    },
    {
        "LookupKey": "7ef8673b1c6a975d7bfc0c9528b14cb7a0da8b9cad507006fac9386e66db4997",
        "LookupName": "Appliances",
        "LookupValue": "Microwave",
        "StandardLookupValue": "Microwave",
        "LegacyOdataValue": "Microwave"
    },
    {
        "LookupKey": "e231b168fbe2e4948983a2569b4591cf1ba68a04b3623576f40dff48f9745a89",
        "LookupName": "Appliances",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "028ae2a3c6f2d759a9b5b23dd22fec4b2349f4916f6bd77645fef58574cafa70",
        "LookupName": "Appliances",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "e7dc1e2dd360e57bf871dbd02c09b02760dd40efcad021e5978855b9b954e41f",
        "LookupName": "Appliances",
        "LookupValue": "Oven",
        "StandardLookupValue": "Oven",
        "LegacyOdataValue": "Oven"
    },
    {
        "LookupKey": "83135747deb58780a19e5213eab368660a6c2b23c6f65df1031a23076b443059",
        "LookupName": "Appliances",
        "LookupValue": "PlumbedForIceMaker",
        "StandardLookupValue": "PlumbedForIceMaker",
        "LegacyOdataValue": "Plumbed For Ice Maker"
    },
    {
        "LookupKey": "46e437913d945ea0874b7a446a5a1b2f99f6dab4764f7a368e5980d45d9a8beb",
        "LookupName": "Appliances",
        "LookupValue": "PortableDishwasher",
        "StandardLookupValue": "PortableDishwasher",
        "LegacyOdataValue": "Portable Dishwasher"
    },
    {
        "LookupKey": "08cf4d00d61185b9a1608c4c6f5d6c23b2875fe5479fde7491a62555242072df",
        "LookupName": "Appliances",
        "LookupValue": "PropaneCooktop",
        "StandardLookupValue": "PropaneCooktop",
        "LegacyOdataValue": "Propane Cooktop"
    },
    {
        "LookupKey": "b234fec4ff721d325221f1aa3146ff189ab6f52c11098cbe21eb70087af805d3",
        "LookupName": "Appliances",
        "LookupValue": "Range",
        "StandardLookupValue": "Range",
        "LegacyOdataValue": "Range"
    },
    {
        "LookupKey": "73f8a4dff04843e4b3b61c8fa86f2d47b31d189483d2703de41388132ee2ffb6",
        "LookupName": "Appliances",
        "LookupValue": "RangeHood",
        "StandardLookupValue": "RangeHood",
        "LegacyOdataValue": "Range Hood"
    },
    {
        "LookupKey": "aea0f22072803032420084d53ba104217125ef87a57272cfe98a638d4c226c92",
        "LookupName": "Appliances",
        "LookupValue": "Refrigerator",
        "StandardLookupValue": "Refrigerator",
        "LegacyOdataValue": "Refrigerator"
    },
    {
        "LookupKey": "2489cb2da084fd171e5dd13541fa093d5ace0e6c4a9fa24ace0c2fe527dc92c3",
        "LookupName": "Appliances",
        "LookupValue": "SelfCleaningOven",
        "StandardLookupValue": "SelfCleaningOven",
        "LegacyOdataValue": "Self Cleaning Oven"
    },
    {
        "LookupKey": "45a91bfc6c979f503136d18d82c76a0a0539272f791ffd6c94a67edc3bf667d1",
        "LookupName": "Appliances",
        "LookupValue": "SolarHotWater",
        "StandardLookupValue": "SolarHotWater",
        "LegacyOdataValue": "Solar Hot Water"
    },
    {
        "LookupKey": "56dd4b41bdbe68dbd22dee81dab59b78b14d1c7b16a1f34365913f9da06f663b",
        "LookupName": "Appliances",
        "LookupValue": "StainlessSteelAppliances",
        "StandardLookupValue": "StainlessSteelAppliances",
        "LegacyOdataValue": "Stainless Steel Appliances"
    },
    {
        "LookupKey": "dfb5fdd4810595f58d6af32200bffb77ba0cf5a5d7441eb866f03b68691adf2e",
        "LookupName": "Appliances",
        "LookupValue": "TanklessWaterHeater",
        "StandardLookupValue": "TanklessWaterHeater",
        "LegacyOdataValue": "Tankless Water Heater"
    },
    {
        "LookupKey": "fc69475522e8bdde623f3829e4ba559cc3401af98971aaa94431be1c2d900cf4",
        "LookupName": "Appliances",
        "LookupValue": "TrashCompactor",
        "StandardLookupValue": "TrashCompactor",
        "LegacyOdataValue": "Trash Compactor"
    },
    {
        "LookupKey": "cd341963c8ce359f4fe333709b41e25d0e54a51b0efe550c2fce6e6840082cf6",
        "LookupName": "Appliances",
        "LookupValue": "VentedExhaustFan",
        "StandardLookupValue": "VentedExhaustFan",
        "LegacyOdataValue": "Vented Exhaust Fan"
    },
    {
        "LookupKey": "e911476089fa7956010b38be15664609a020c339cbf84729fd33fc203978245f",
        "LookupName": "Appliances",
        "LookupValue": "WarmingDrawer",
        "StandardLookupValue": "WarmingDrawer",
        "LegacyOdataValue": "Warming Drawer"
    },
    {
        "LookupKey": "983a329a0dee8684cb66bb8958a8e82a39e1f9038f0d5b7a280fdbace966dae0",
        "LookupName": "Appliances",
        "LookupValue": "Washer",
        "StandardLookupValue": "Washer",
        "LegacyOdataValue": "Washer"
    },
    {
        "LookupKey": "882f4f9e114c7b88ab9b53f974f8d8d529c74e82ba2631be9042af02c096d5ff",
        "LookupName": "Appliances",
        "LookupValue": "WasherDryer",
        "StandardLookupValue": "WasherDryer",
        "LegacyOdataValue": "Washer/Dryer"
    },
    {
        "LookupKey": "215555325dcef3dc1e28edacb7b09c9c65bb3282192bb2afb0a2a893ef6874a6",
        "LookupName": "Appliances",
        "LookupValue": "WasherDryerStacked",
        "StandardLookupValue": "WasherDryerStacked",
        "LegacyOdataValue": "Washer/Dryer Stacked"
    },
    {
        "LookupKey": "f3ea699e25da5e2157dd8bce5752ad369454bea43e02e214829a7a2eb8c7ee0f",
        "LookupName": "Appliances",
        "LookupValue": "WaterHeater",
        "StandardLookupValue": "WaterHeater",
        "LegacyOdataValue": "Water Heater"
    },
    {
        "LookupKey": "353dfe327b4e99cfaad4f305275221195dae7439da619dc73ec97f5dc57e61db",
        "LookupName": "Appliances",
        "LookupValue": "WaterPurifier",
        "StandardLookupValue": "WaterPurifier",
        "LegacyOdataValue": "Water Purifier"
    },
    {
        "LookupKey": "42e2fde1247ed64913ca2da908ac1e1994bd0039c0649e65d9cc87f814a21b2a",
        "LookupName": "Appliances",
        "LookupValue": "WaterPurifierOwned",
        "StandardLookupValue": "WaterPurifierOwned",
        "LegacyOdataValue": "Water Purifier Owned"
    },
    {
        "LookupKey": "6c0e117f482e46a39cdda76b062f172778869e6d1e9ee7e27880082306491e0e",
        "LookupName": "Appliances",
        "LookupValue": "WaterPurifierRented",
        "StandardLookupValue": "WaterPurifierRented",
        "LegacyOdataValue": "Water Purifier Rented"
    },
    {
        "LookupKey": "4378580e63f6fc6f2ec47d310a218f50930677b0e1081a3773a34938a17de57f",
        "LookupName": "Appliances",
        "LookupValue": "WaterSoftener",
        "StandardLookupValue": "WaterSoftener",
        "LegacyOdataValue": "Water Softener"
    },
    {
        "LookupKey": "a59000d02cafcdb740600d0a5a9847970e05e18601adc0e3dcced2c301229c6b",
        "LookupName": "Appliances",
        "LookupValue": "WaterSoftenerOwned",
        "StandardLookupValue": "WaterSoftenerOwned",
        "LegacyOdataValue": "Water Softener Owned"
    },
    {
        "LookupKey": "a175c304bea964287169384629b8089da9baa59e1e3d75e0f690040979e20b6c",
        "LookupName": "Appliances",
        "LookupValue": "WaterSoftenerRented",
        "StandardLookupValue": "WaterSoftenerRented",
        "LegacyOdataValue": "Water Softener Rented"
    },
    {
        "LookupKey": "9c3f1c831b6fbf1a1c48c7f63351eef17c2f2b6cc2207b51617a23ac16a979fd",
        "LookupName": "Appliances",
        "LookupValue": "WineCooler",
        "StandardLookupValue": "WineCooler",
        "LegacyOdataValue": "Wine Cooler"
    },
    {
        "LookupKey": "ad8f78e69511bf34d1384e6269bd14a60ad0cfab55ceb01e66863f4a9a185649",
        "LookupName": "Appliances",
        "LookupValue": "WineRefrigerator",
        "StandardLookupValue": "WineRefrigerator",
        "LegacyOdataValue": "Wine Refrigerator"
    },
    {
        "LookupKey": "c67ac2d9eed16c06f1abf2f6dc381f27f857fb72213b67ea072feda385fcc034",
        "LookupName": "AssociationAmenities",
        "LookupValue": "AirportRunway",
        "StandardLookupValue": "AirportRunway",
        "LegacyOdataValue": "Airport/Runway"
    },
    {
        "LookupKey": "3e21963426d4b064c7225033c83907596f5dc9917d76836b21864f4bb285cb28",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Barbecue",
        "StandardLookupValue": "Barbecue",
        "LegacyOdataValue": "Barbecue"
    },
    {
        "LookupKey": "b07f49a3858bb2862a58915780631ea5fe3cf7c9937300d80528ebac2706dabd",
        "LookupName": "AssociationAmenities",
        "LookupValue": "BasketballCourt",
        "StandardLookupValue": "BasketballCourt",
        "LegacyOdataValue": "Basketball Court"
    },
    {
        "LookupKey": "d2eb2dfe8591113231a49e208f5b5a98a4c7f74c7bc895266762aee690110861",
        "LookupName": "AssociationAmenities",
        "LookupValue": "BeachAccess",
        "StandardLookupValue": "BeachAccess",
        "LegacyOdataValue": "Beach Access"
    },
    {
        "LookupKey": "62955b66062d2deaddd7367e064a72898554c5b4b0ff392f7f3a579a1459a081",
        "LookupName": "AssociationAmenities",
        "LookupValue": "BeachRights",
        "StandardLookupValue": "BeachRights",
        "LegacyOdataValue": "Beach Rights"
    },
    {
        "LookupKey": "6a4cda998a9997bea6ef55ebbb3b3776266af619119697f3df9046a62b56ae16",
        "LookupName": "AssociationAmenities",
        "LookupValue": "BilliardRoom",
        "StandardLookupValue": "BilliardRoom",
        "LegacyOdataValue": "Billiard Room"
    },
    {
        "LookupKey": "34bcf272946f69f479bfec8c4eda5ced70e93eb4a8cdafc706c21589d27b8c84",
        "LookupName": "AssociationAmenities",
        "LookupValue": "BoatDock",
        "StandardLookupValue": "BoatDock",
        "LegacyOdataValue": "Boat Dock"
    },
    {
        "LookupKey": "511b13fa87fb64996c715c08a686490605bc27d744cbba34bb99da0caa21949d",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Boating",
        "StandardLookupValue": "Boating",
        "LegacyOdataValue": "Boating"
    },
    {
        "LookupKey": "c2bef7d2de2f58ff7ed973c0f2137e50a8853ec43594fe589968cceac45c27cd",
        "LookupName": "AssociationAmenities",
        "LookupValue": "BoatSlip",
        "StandardLookupValue": "BoatSlip",
        "LegacyOdataValue": "Boat Slip"
    },
    {
        "LookupKey": "9f6103be54defe9b9ef459bcc1a304bbfc11d68e2978564799c2dcc4a0d89883",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Cabana",
        "StandardLookupValue": "Cabana",
        "LegacyOdataValue": "Cabana"
    },
    {
        "LookupKey": "0511f1f9f4dcd917b61f8d0c2184e3d804c831980613321ccf5783241f6d7828",
        "LookupName": "AssociationAmenities",
        "LookupValue": "CableTv",
        "StandardLookupValue": "CableTv",
        "LegacyOdataValue": "Cable TV"
    },
    {
        "LookupKey": "b29b5dbf05c4194fb115b5a84f972e7a3cfca225d1ff92856d529f929f1f590f",
        "LookupName": "AssociationAmenities",
        "LookupValue": "CarWashArea",
        "StandardLookupValue": "CarWashArea",
        "LegacyOdataValue": "Car Wash Area"
    },
    {
        "LookupKey": "21235d1236206e271a00bf2f0e6db5e0618f240ed34a523e923ee90190da76d9",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Clubhouse",
        "StandardLookupValue": "Clubhouse",
        "LegacyOdataValue": "Clubhouse"
    },
    {
        "LookupKey": "2046219bca4be5365222179923f6fc639777232a0d9ee48c5f56c51feef850a8",
        "LookupName": "AssociationAmenities",
        "LookupValue": "CoinLaundry",
        "StandardLookupValue": "CoinLaundry",
        "LegacyOdataValue": "Coin Laundry"
    },
    {
        "LookupKey": "0709b98f40c2511d785be7192819819f72067060d5355fcb4ac3f5bd2fc1e208",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Concierge",
        "StandardLookupValue": "Concierge",
        "LegacyOdataValue": "Concierge"
    },
    {
        "LookupKey": "101d82e3b0e1f6c40eb79830e875f1afd2d84be3917089ff38e0a75426d57ec8",
        "LookupName": "AssociationAmenities",
        "LookupValue": "DayCare",
        "StandardLookupValue": "DayCare",
        "LegacyOdataValue": "Day Care"
    },
    {
        "LookupKey": "4d03ab01abb1fc104a6af71c2696c95ac7be6e8ba0162c4fcfab2fabb4c15c4a",
        "LookupName": "AssociationAmenities",
        "LookupValue": "DogPark",
        "StandardLookupValue": "DogPark",
        "LegacyOdataValue": "Dog Park"
    },
    {
        "LookupKey": "746cf4ca07f04db72a84a143a967e3d601a787e1f4fde32e9be59149a7a7fc94",
        "LookupName": "AssociationAmenities",
        "LookupValue": "DryDock",
        "StandardLookupValue": "DryDock",
        "LegacyOdataValue": "Dry Dock"
    },
    {
        "LookupKey": "8b9cef438d0abf92a8e4f1244935102ed1294bb1f822b02ab6d3b775e454aa67",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Electricity",
        "StandardLookupValue": "Electricity",
        "LegacyOdataValue": "Electricity"
    },
    {
        "LookupKey": "51b8081488f81890f106a8cb12d7603c97ea8a4694e69db3686e8bd05c383c40",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Elevators",
        "StandardLookupValue": "Elevators",
        "LegacyOdataValue": "Elevators"
    },
    {
        "LookupKey": "8d6898462856123bb2572a537bbf0f9687232e0d0c2fa65b4e38f48dc8b7ffa9",
        "LookupName": "AssociationAmenities",
        "LookupValue": "ExerciseCourse",
        "StandardLookupValue": "ExerciseCourse",
        "LegacyOdataValue": "Exercise Course"
    },
    {
        "LookupKey": "a58d2e1c0048bb077249c906706eca718fffc291c66d8073e1d411bbaffb9c80",
        "LookupName": "AssociationAmenities",
        "LookupValue": "FitnessCenter",
        "StandardLookupValue": "FitnessCenter",
        "LegacyOdataValue": "Fitness Center"
    },
    {
        "LookupKey": "dfd642a6624321bb8c52da021827379861d31a85860dc800d1648667087a869f",
        "LookupName": "AssociationAmenities",
        "LookupValue": "GameCourtExterior",
        "StandardLookupValue": "GameCourtExterior",
        "LegacyOdataValue": "Game Court Exterior"
    },
    {
        "LookupKey": "f5e9ba6c3f1277101a47ef18c9210d60c6588a6706bc7e29b3ccb0270c110c72",
        "LookupName": "AssociationAmenities",
        "LookupValue": "GameCourtInterior",
        "StandardLookupValue": "GameCourtInterior",
        "LegacyOdataValue": "Game Court Interior"
    },
    {
        "LookupKey": "8340a106cdf967f66232e324c649a56469038135119ffc33d447233b8d51c892",
        "LookupName": "AssociationAmenities",
        "LookupValue": "GameRoom",
        "StandardLookupValue": "GameRoom",
        "LegacyOdataValue": "Game Room"
    },
    {
        "LookupKey": "d5d4b7153589f2061e0f3d3e6398d9d0e4048d34a85bb9bc70c74239ab8125dd",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Gas",
        "StandardLookupValue": "Gas",
        "LegacyOdataValue": "Gas"
    },
    {
        "LookupKey": "4615e9413dd7927473213f33e3cd9b924dcc3393bd57337b825e52ae43dbbc49",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Gated",
        "StandardLookupValue": "Gated",
        "LegacyOdataValue": "Gated"
    },
    {
        "LookupKey": "c6f81c897cd0861df1839cb61c06cdc9178237b5e94524006d6303347cedffbf",
        "LookupName": "AssociationAmenities",
        "LookupValue": "GolfCourse",
        "StandardLookupValue": "GolfCourse",
        "LegacyOdataValue": "Golf Course"
    },
    {
        "LookupKey": "0ea0f1946b612cf19ed65162c2420102738dde99e815fb50f4a7158f2c134465",
        "LookupName": "AssociationAmenities",
        "LookupValue": "HotWater",
        "StandardLookupValue": "HotWater",
        "LegacyOdataValue": "Hot Water"
    },
    {
        "LookupKey": "0a7f283828e540c9586ab9297f7d178a081fc92c2135e9e1547ebd5c1728d826",
        "LookupName": "AssociationAmenities",
        "LookupValue": "IndoorPool",
        "StandardLookupValue": "IndoorPool",
        "LegacyOdataValue": "Indoor Pool"
    },
    {
        "LookupKey": "5536aaa7ede2b52215ed0733a8cf448cb49619ca2e681dee63b5bfc9540c149a",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Insurance",
        "StandardLookupValue": "Insurance",
        "LegacyOdataValue": "Insurance"
    },
    {
        "LookupKey": "8d41aec52a6b1166548bbd5c08b3549a1da82e8a1ad4d5ae9894f6fdd7c9b0b0",
        "LookupName": "AssociationAmenities",
        "LookupValue": "JoggingPath",
        "StandardLookupValue": "JoggingPath",
        "LegacyOdataValue": "Jogging Path"
    },
    {
        "LookupKey": "58f54ab22a25232134b8c2a70d908f7f84c8df2930d21c4c95ee4ef1437d5461",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Landscaping",
        "StandardLookupValue": "Landscaping",
        "LegacyOdataValue": "Landscaping"
    },
    {
        "LookupKey": "2696f7c6cad92efeeb25b65f6b17441f1e16542e9410f2afa3516ee80ace8d9d",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Laundry",
        "StandardLookupValue": "Laundry",
        "LegacyOdataValue": "Laundry"
    },
    {
        "LookupKey": "677f1f9ea6850567628baeeba691c960c583264ffc1537d33237abaab7af487c",
        "LookupName": "AssociationAmenities",
        "LookupValue": "MaidService",
        "StandardLookupValue": "MaidService",
        "LegacyOdataValue": "Maid service"
    },
    {
        "LookupKey": "81b163ca5f3548af38c0394c45f03cd9ac47373427295f9d9645c8acda82ee8d",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Maintenance",
        "StandardLookupValue": "Maintenance",
        "LegacyOdataValue": "Maintenance"
    },
    {
        "LookupKey": "ab7573beba9fb82c1fe1a65b516bd8426ef867d1fdb676b2b22565bab2deabc1",
        "LookupName": "AssociationAmenities",
        "LookupValue": "MaintenanceGrounds",
        "StandardLookupValue": "MaintenanceGrounds",
        "LegacyOdataValue": "Maintenance Grounds"
    },
    {
        "LookupKey": "352b0abb618ccdc61e822366885b9922feca4aff93e871726281f56d6a39b7e9",
        "LookupName": "AssociationAmenities",
        "LookupValue": "MaintenanceStructure",
        "StandardLookupValue": "MaintenanceStructure",
        "LegacyOdataValue": "Maintenance Structure"
    },
    {
        "LookupKey": "e26f78c18fe3589c6a1c768f9f682ee4e168ac62c692f4cf0c4fcafaa75f4c02",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Management",
        "StandardLookupValue": "Management",
        "LegacyOdataValue": "Management"
    },
    {
        "LookupKey": "c2ec22f211d837a57ad94248c3ca873ebc5a83e58c54c050f184f07e3395f89c",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Marina",
        "StandardLookupValue": "Marina",
        "LegacyOdataValue": "Marina"
    },
    {
        "LookupKey": "611a7ea33ca6cf019a2126fb64989e148e63ebe5be9ebb5788954596b49c4c39",
        "LookupName": "AssociationAmenities",
        "LookupValue": "MeetingRoom",
        "StandardLookupValue": "MeetingRoom",
        "LegacyOdataValue": "Meeting Room"
    },
    {
        "LookupKey": "6bbd92be383b4b7a2b1bd66e860699d9c1ed4475c8e8fbdcbbd07d7bbf6287ce",
        "LookupName": "AssociationAmenities",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "582887a1f24384f8690eb3299a3dc5925c40c583efc1b5ed02d41a1c5f4d8060",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "83497e6fc5cdc79e024985eba7251dfc1c341e1cd51e3a4f0ce89e915bdfe346",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Park",
        "StandardLookupValue": "Park",
        "LegacyOdataValue": "Park"
    },
    {
        "LookupKey": "4f0f75de39e613e9dabf1ed65a51159e482513b33635568ad87cf04d8369da0a",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Parking",
        "StandardLookupValue": "Parking",
        "LegacyOdataValue": "Parking"
    },
    {
        "LookupKey": "5868c12f3999610d743817b38b0be259ce58980ddc3d71c0f0e1053fb7c3a973",
        "LookupName": "AssociationAmenities",
        "LookupValue": "PartyRoom",
        "StandardLookupValue": "PartyRoom",
        "LegacyOdataValue": "Party Room"
    },
    {
        "LookupKey": "dba929e3d53392867e82b46a4320823c2ce4940bba85b26d03dd1cdb39f69d75",
        "LookupName": "AssociationAmenities",
        "LookupValue": "PicnicArea",
        "StandardLookupValue": "PicnicArea",
        "LegacyOdataValue": "Picnic Area"
    },
    {
        "LookupKey": "5f8c30d86265ce6bb30cd025ab810beb9bf483bdc9a0372b99abe9f15db43538",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Playground",
        "StandardLookupValue": "Playground",
        "LegacyOdataValue": "Playground"
    },
    {
        "LookupKey": "49f869cf0a586d08d824e34b4b7bef5ecca7658b41b88ec1964786c044208ddf",
        "LookupName": "AssociationAmenities",
        "LookupValue": "PondSeasonal",
        "StandardLookupValue": "PondSeasonal",
        "LegacyOdataValue": "Pond Seasonal"
    },
    {
        "LookupKey": "4a81bc7e9742f6f8063543b8b52128642aa6b8692e5392adf19654e394b60a77",
        "LookupName": "AssociationAmenities",
        "LookupValue": "PondYearRound",
        "StandardLookupValue": "PondYearRound",
        "LegacyOdataValue": "Pond Year Round"
    },
    {
        "LookupKey": "b6d289ebc486aa53e1cd366966765e91257f5401a7ae0623196630e68b971c4a",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Pool",
        "StandardLookupValue": "Pool",
        "LegacyOdataValue": "Pool"
    },
    {
        "LookupKey": "589f092c9ef2687954bfea29dd0192d3e2fdf147e12a54dbc19157a4c1690af5",
        "LookupName": "AssociationAmenities",
        "LookupValue": "PoweredBoatsAllowed",
        "StandardLookupValue": "PoweredBoatsAllowed",
        "LegacyOdataValue": "Powered Boats Allowed"
    },
    {
        "LookupKey": "6226a0e2364f3cd4b76a0d8924483d5673769ce881f01227346d57c624ec0fba",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Racquetball",
        "StandardLookupValue": "Racquetball",
        "LegacyOdataValue": "Racquetball"
    },
    {
        "LookupKey": "0c1aa3f7e3f529a4f4ac5e4fc3c69e3e98d64f7aeca0db65ffb4eef0534382ef",
        "LookupName": "AssociationAmenities",
        "LookupValue": "RecreationFacilities",
        "StandardLookupValue": "RecreationFacilities",
        "LegacyOdataValue": "Recreation Facilities"
    },
    {
        "LookupKey": "e6864fbb85e0800646b4f11383418a3e2eb1dcbeb0628a507d84eba1b468e416",
        "LookupName": "AssociationAmenities",
        "LookupValue": "RecreationRoom",
        "StandardLookupValue": "RecreationRoom",
        "LegacyOdataValue": "Recreation Room"
    },
    {
        "LookupKey": "55ca0b874b08b2ae57a63284f51391cdc3703a1a56ee374f1ebd28b00c3fefad",
        "LookupName": "AssociationAmenities",
        "LookupValue": "RoofDeck",
        "StandardLookupValue": "RoofDeck",
        "LegacyOdataValue": "Roof Deck"
    },
    {
        "LookupKey": "4ece122db78a947f52603f59fccd5da9b929f0623c340b7c7fa9e50b1f0b7c14",
        "LookupName": "AssociationAmenities",
        "LookupValue": "RvBoatStorage",
        "StandardLookupValue": "RvBoatStorage",
        "LegacyOdataValue": "RV/Boat Storage"
    },
    {
        "LookupKey": "b0da4aeda6159d5d07d7d78e5322e1c7e1d5d5ffdf9d446424c5e4289aa97377",
        "LookupName": "AssociationAmenities",
        "LookupValue": "RvParking",
        "StandardLookupValue": "RvParking",
        "LegacyOdataValue": "RV Parking"
    },
    {
        "LookupKey": "c5a375f9c2210c42af8cad5422800fa0999c1458d9801522ac4e062a0f708259",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Sauna",
        "StandardLookupValue": "Sauna",
        "LegacyOdataValue": "Sauna"
    },
    {
        "LookupKey": "82668a98c552bad78e91b45f6cbb482c014032261a6075bbb58a13efa508e305",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Security",
        "StandardLookupValue": "Security",
        "LegacyOdataValue": "Security"
    },
    {
        "LookupKey": "d2d4886ee11d113c76e182890f72884d94a9aa7310db4de5e0dcefc77bfa4a88",
        "LookupName": "AssociationAmenities",
        "LookupValue": "ServiceElevators",
        "StandardLookupValue": "ServiceElevators",
        "LegacyOdataValue": "Service Elevators"
    },
    {
        "LookupKey": "4663289cbbc24643bf6b2d78bafab76863f5936b095f9fbe2fd6fd113448c1a8",
        "LookupName": "AssociationAmenities",
        "LookupValue": "ShuffleboardCourt",
        "StandardLookupValue": "ShuffleboardCourt",
        "LegacyOdataValue": "Shuffleboard Court"
    },
    {
        "LookupKey": "fe11dc0e934ab6610ac9df6a0fcfef15ff40208ef8a0ef64bb1fcedb4226ab7c",
        "LookupName": "AssociationAmenities",
        "LookupValue": "SkiAccessible",
        "StandardLookupValue": "SkiAccessible",
        "LegacyOdataValue": "Ski Accessible"
    },
    {
        "LookupKey": "885592bae98ab85b0b745be7dc509ddd991a6d809c8b23162cdaf323158621d3",
        "LookupName": "AssociationAmenities",
        "LookupValue": "SnowRemoval",
        "StandardLookupValue": "SnowRemoval",
        "LegacyOdataValue": "Snow Removal"
    },
    {
        "LookupKey": "97e658219bdd0ac6349fb72176bba9a508df9db7958911740942d0ddd2f75871",
        "LookupName": "AssociationAmenities",
        "LookupValue": "SpaHotTub",
        "StandardLookupValue": "SpaHotTub",
        "LegacyOdataValue": "Spa/Hot Tub"
    },
    {
        "LookupKey": "f884cd9a064c454a05cf1696b4e2b94a01c1665ca5b13025702092d9b9a72109",
        "LookupName": "AssociationAmenities",
        "LookupValue": "SportCourt",
        "StandardLookupValue": "SportCourt",
        "LegacyOdataValue": "Sport Court"
    },
    {
        "LookupKey": "b3e2fba9c3b997f43c5b2790dc3c8e87641711962d2104fbf016c369e1c1b7b1",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Stables",
        "StandardLookupValue": "Stables",
        "LegacyOdataValue": "Stables"
    },
    {
        "LookupKey": "b54aa916b83a03760321598ae6ffedc6a962173ce192d683e04ef948125b6c75",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Storage",
        "StandardLookupValue": "Storage",
        "LegacyOdataValue": "Storage"
    },
    {
        "LookupKey": "11eb6f4eeda545816bb00d206f596b7928918234906469b1460449fedbd4be5a",
        "LookupName": "AssociationAmenities",
        "LookupValue": "StreamSeasonal",
        "StandardLookupValue": "StreamSeasonal",
        "LegacyOdataValue": "Stream Seasonal"
    },
    {
        "LookupKey": "be05dbb3a97cb56c1bfdc98d7034452787543d942edbf9e07ec4b61dadd2f6df",
        "LookupName": "AssociationAmenities",
        "LookupValue": "StreamYearRound",
        "StandardLookupValue": "StreamYearRound",
        "LegacyOdataValue": "Stream Year Round"
    },
    {
        "LookupKey": "c532da8db4ef420bac0dae669926b5c018e092b7f354ee0a63dde3e09815c462",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Taxes",
        "StandardLookupValue": "Taxes",
        "LegacyOdataValue": "Taxes"
    },
    {
        "LookupKey": "d79d89f20aa2c0bca0f531fd5dc3c0c8582ef50f79a0e6ae8ac4fb1b0d59e9d3",
        "LookupName": "AssociationAmenities",
        "LookupValue": "TennisCourts",
        "StandardLookupValue": "TennisCourts",
        "LegacyOdataValue": "Tennis Courts"
    },
    {
        "LookupKey": "1f9c8d2a9fb8359216966d3eab21bbad78268e00b279ee1393fa8fe82566cb24",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Trails",
        "StandardLookupValue": "Trails",
        "LegacyOdataValue": "Trails"
    },
    {
        "LookupKey": "8db7d8c578c0e23649b346d61ca93035ffee070548e820634e80f40e1af944ba",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Trash",
        "StandardLookupValue": "Trash",
        "LegacyOdataValue": "Trash"
    },
    {
        "LookupKey": "604a8ccc81845d3f34efe8aed4e32ac145b21a68957f6cb6762f95a2fb74e6b4",
        "LookupName": "AssociationAmenities",
        "LookupValue": "Water",
        "StandardLookupValue": "Water",
        "LegacyOdataValue": "Water"
    },
    {
        "LookupKey": "d4cb4f841cb7efe8d6f9fcaa680ba6338514c34421cbe082c8a4ea33653d5392",
        "LookupName": "AssociationAmenities",
        "LookupValue": "WorkshopArea",
        "StandardLookupValue": "WorkshopArea",
        "LegacyOdataValue": "Workshop Area"
    },
    {
        "LookupKey": "decb7783521d006e2aabd446b74e2abec9fef1fb3216d39ef48a0b60a8aa12f8",
        "LookupName": "FeeFrequency",
        "LookupValue": "Annually",
        "StandardLookupValue": "Annually",
        "LegacyOdataValue": "Annually"
    },
    {
        "LookupKey": "f28de16abf8720ccdbfbc79c6c6338c670e23954f204afaae22cf6c8b894e209",
        "LookupName": "FeeFrequency",
        "LookupValue": "BiMonthly",
        "StandardLookupValue": "BiMonthly",
        "LegacyOdataValue": "Bi-Monthly"
    },
    {
        "LookupKey": "dc07f39519ec4eb87ee9369edcf634ec631a2ce9ec20eec92bb700ae464eabd5",
        "LookupName": "FeeFrequency",
        "LookupValue": "BiWeekly",
        "StandardLookupValue": "BiWeekly",
        "LegacyOdataValue": "Bi-Weekly"
    },
    {
        "LookupKey": "15e6f66871ab04e9db3e3885d969d98fbeab2c610c57f2263a263d01ce93d19c",
        "LookupName": "FeeFrequency",
        "LookupValue": "Daily",
        "StandardLookupValue": "Daily",
        "LegacyOdataValue": "Daily"
    },
    {
        "LookupKey": "d7b0f08218a744755dbc779f8a2ce2a994e7227cf60b28e8301fd2f0174c3be4",
        "LookupName": "FeeFrequency",
        "LookupValue": "Monthly",
        "StandardLookupValue": "Monthly",
        "LegacyOdataValue": "Monthly"
    },
    {
        "LookupKey": "4d5083384fcb99027a4ffcd82c101a5b553b3f0648d7a65a1e605d932421c925",
        "LookupName": "FeeFrequency",
        "LookupValue": "OneTime",
        "StandardLookupValue": "OneTime",
        "LegacyOdataValue": "One Time"
    },
    {
        "LookupKey": "43ef4600c4535f3eb07a843ca27311347b4fecafb12f3503563b65808c60a2f7",
        "LookupName": "FeeFrequency",
        "LookupValue": "Quarterly",
        "StandardLookupValue": "Quarterly",
        "LegacyOdataValue": "Quarterly"
    },
    {
        "LookupKey": "96f5a7985a11b4e80c5078e27c0f4bfd37c45770b5b1b45efdc12e9f9356a606",
        "LookupName": "FeeFrequency",
        "LookupValue": "Seasonal",
        "StandardLookupValue": "Seasonal",
        "LegacyOdataValue": "Seasonal"
    },
    {
        "LookupKey": "82dee0eca000fe97326b5d53efe81d443d433906696a8034b40a6e36b873dba5",
        "LookupName": "FeeFrequency",
        "LookupValue": "SemiAnnually",
        "StandardLookupValue": "SemiAnnually",
        "LegacyOdataValue": "Semi-Annually"
    },
    {
        "LookupKey": "4f9f2908ffd75dd42d2a0522c06480869e1ab3c94b8c6592625940d7b417415d",
        "LookupName": "FeeFrequency",
        "LookupValue": "SemiMonthly",
        "StandardLookupValue": "SemiMonthly",
        "LegacyOdataValue": "Semi-Monthly"
    },
    {
        "LookupKey": "f46a8655451c5344f0468f21ef512ea6916727c9a984c87e4884dc45519c41b1",
        "LookupName": "FeeFrequency",
        "LookupValue": "Weekly",
        "StandardLookupValue": "Weekly",
        "LegacyOdataValue": "Weekly"
    },
    {
        "LookupKey": "15d41ed6c39c6cae1bba4271edae8fe24c5254a887011747a4d5b8725ef8a0d3",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "CableTv",
        "StandardLookupValue": "CableTv",
        "LegacyOdataValue": "Cable TV"
    },
    {
        "LookupKey": "8be10792ef4c2b60ec083ed14130385bea69a2a0a1496d274fd5df795b333f4b",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "EarthquakeInsurance",
        "StandardLookupValue": "EarthquakeInsurance",
        "LegacyOdataValue": "Earthquake Insurance"
    },
    {
        "LookupKey": "83bd82ac44a0ce4b03f02b6a63028f7a6517e6434f44b190c59006088855442d",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "Electricity",
        "StandardLookupValue": "Electricity",
        "LegacyOdataValue": "Electricity"
    },
    {
        "LookupKey": "15f81fe4f1d5a58bd97d50f42fceb627f84623f2ed647e48a0fe30b946b3fa77",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "Gas",
        "StandardLookupValue": "Gas",
        "LegacyOdataValue": "Gas"
    },
    {
        "LookupKey": "ad780033a6d69a17104509adeaf00327f896a1e60b0c906e6a800b60678055c1",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "Insurance",
        "StandardLookupValue": "Insurance",
        "LegacyOdataValue": "Insurance"
    },
    {
        "LookupKey": "b119bb69bd0ae8b0d5a1b25ccd55b926222de5cb2909fb577d207a6f8bdaa6bd",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "Internet",
        "StandardLookupValue": "Internet",
        "LegacyOdataValue": "Internet"
    },
    {
        "LookupKey": "64584ccefe4b3107b0b8d2931f45e2b0384d10c4f7d7067fd334989ccaa08782",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "MaintenanceGrounds",
        "StandardLookupValue": "MaintenanceGrounds",
        "LegacyOdataValue": "Maintenance Grounds"
    },
    {
        "LookupKey": "31277c02560f4d37f69efce7c0651054cf150564816edc0bc6ae88414c860cbb",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "MaintenanceStructure",
        "StandardLookupValue": "MaintenanceStructure",
        "LegacyOdataValue": "Maintenance Structure"
    },
    {
        "LookupKey": "8577c2fdf2c5e77d7b13b1c6e58c0cb7822f74568dc3e4ede413f4cf95af8163",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "PestControl",
        "StandardLookupValue": "PestControl",
        "LegacyOdataValue": "Pest Control"
    },
    {
        "LookupKey": "3de9a1516bee4d44fd2e5cb3ad165b1c7bcc0f281ead3b876c6b1b72ecacd457",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "Security",
        "StandardLookupValue": "Security",
        "LegacyOdataValue": "Security"
    },
    {
        "LookupKey": "20302611f7877181af39a3ea3c1278851f3cd4ede436905d40a8ad02116b6ef7",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "Sewer",
        "StandardLookupValue": "Sewer",
        "LegacyOdataValue": "Sewer"
    },
    {
        "LookupKey": "04dd73223738feec40d7a25c152c8292207f934edd38dff147c30ca43050805b",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "SnowRemoval",
        "StandardLookupValue": "SnowRemoval",
        "LegacyOdataValue": "Snow Removal"
    },
    {
        "LookupKey": "bcd64f9ec8c79eacf6a4e8acb4b48fdb08a0e6806f7311ad592d7e0bee0aacec",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "Trash",
        "StandardLookupValue": "Trash",
        "LegacyOdataValue": "Trash"
    },
    {
        "LookupKey": "ffeb7c9e854f8d695d2932090423d2fd864ad875fe075f50cc14df88b7224579",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "Utilities",
        "StandardLookupValue": "Utilities",
        "LegacyOdataValue": "Utilities"
    },
    {
        "LookupKey": "42321de98e9bb5afef0401518a2624ec4b8b36d1f73581ed71f55dad0e67d1ed",
        "LookupName": "AssociationFeeIncludes",
        "LookupValue": "Water",
        "StandardLookupValue": "Water",
        "LegacyOdataValue": "Water"
    },
    {
        "LookupKey": "35780cf5e9fbed7534ab7fdc8d1980d84d94fc47b7b39eaf3d0869a7b8baf245",
        "LookupName": "Basement",
        "LookupValue": "Apartment",
        "StandardLookupValue": "Apartment",
        "LegacyOdataValue": "Apartment"
    },
    {
        "LookupKey": "dc8eb17d63f3d05181e13e648c53119de3b5fa8d6360c3210eeeb5a4e06fa9a4",
        "LookupName": "Basement",
        "LookupValue": "BathStubbed",
        "StandardLookupValue": "BathStubbed",
        "LegacyOdataValue": "Bath/Stubbed"
    },
    {
        "LookupKey": "88c25599789949780b238119540f31434799be0e99562a062fd863c18319c0d1",
        "LookupName": "Basement",
        "LookupValue": "Block",
        "StandardLookupValue": "Block",
        "LegacyOdataValue": "Block"
    },
    {
        "LookupKey": "07f9baa91f7be4e31afe78aa704c2e4c438fae1aa630150af585f76d0463f34b",
        "LookupName": "Basement",
        "LookupValue": "Concrete",
        "StandardLookupValue": "Concrete",
        "LegacyOdataValue": "Concrete"
    },
    {
        "LookupKey": "faa10487dfa89dd415ed826613a063721140a7ebbaff6e113799e7223c4bf41a",
        "LookupName": "Basement",
        "LookupValue": "CrawlSpace",
        "StandardLookupValue": "CrawlSpace",
        "LegacyOdataValue": "Crawl Space"
    },
    {
        "LookupKey": "ffd07a9f85ce0ee7fe77fe1021521bd2d9389b1642e367129fc62f6f30fc976c",
        "LookupName": "Basement",
        "LookupValue": "Daylight",
        "StandardLookupValue": "Daylight",
        "LegacyOdataValue": "Daylight"
    },
    {
        "LookupKey": "d16248ecfddc50d01cc2b25a6b5acf917e19391fa5b7d4bd3f196c95c4c4d74d",
        "LookupName": "Basement",
        "LookupValue": "DirtFloor",
        "StandardLookupValue": "DirtFloor",
        "LegacyOdataValue": "Dirt Floor"
    },
    {
        "LookupKey": "99538bac351ecbec81c1a2fd91e0dfab39487a8813bd984bddba3dd977fb89a2",
        "LookupName": "Basement",
        "LookupValue": "ExteriorEntry",
        "StandardLookupValue": "ExteriorEntry",
        "LegacyOdataValue": "Exterior Entry"
    },
    {
        "LookupKey": "89535aa2f03725ca88fb13849679fef0280c37935f56f6ddb2a78aed4da4072d",
        "LookupName": "Basement",
        "LookupValue": "Finished",
        "StandardLookupValue": "Finished",
        "LegacyOdataValue": "Finished"
    },
    {
        "LookupKey": "1ef9559ce68ba9172d875c5a19e824a4ec926204ad2085f8ddc0819c8889a716",
        "LookupName": "Basement",
        "LookupValue": "FrenchDrain",
        "StandardLookupValue": "FrenchDrain",
        "LegacyOdataValue": "French Drain"
    },
    {
        "LookupKey": "8e8b7a2553d081ef1043e20d652c3a5ae09aa1d618a2fe34439c440e0e9dbf42",
        "LookupName": "Basement",
        "LookupValue": "Full",
        "StandardLookupValue": "Full",
        "LegacyOdataValue": "Full"
    },
    {
        "LookupKey": "342e21a42b0cdc5a0f478c43b076d8a760aab66a938f7712dc8360bc661cd8ef",
        "LookupName": "Basement",
        "LookupValue": "InteriorEntry",
        "StandardLookupValue": "InteriorEntry",
        "LegacyOdataValue": "Interior Entry"
    },
    {
        "LookupKey": "f69b3bcac7cf9cf582cc7b6857ec4e2f2c4917d8e184a8351634f53c8af5e32b",
        "LookupName": "Basement",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "0915efec6194890d11da25c931d81763f994c9bfa930fdd74abac56ab30e1b4b",
        "LookupName": "Basement",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "d2c8f6f5d7e44609b71524c23c6ebf77493e1091ef1db998bcaa93d2abbfd08c",
        "LookupName": "Basement",
        "LookupValue": "Partial",
        "StandardLookupValue": "Partial",
        "LegacyOdataValue": "Partial"
    },
    {
        "LookupKey": "942ab030c46f40b8f0ffb18b9a50b77b6d0fe8f2d12718af8c367bbfa23e4cf0",
        "LookupName": "Basement",
        "LookupValue": "PartiallyFinished",
        "StandardLookupValue": "PartiallyFinished",
        "LegacyOdataValue": "Partially Finished"
    },
    {
        "LookupKey": "0e50cad4e7268ebc7d26ea956573ed437a1433e725cfe8d0bf9171e69cf2a6ff",
        "LookupName": "Basement",
        "LookupValue": "StorageSpace",
        "StandardLookupValue": "StorageSpace",
        "LegacyOdataValue": "Storage Space"
    },
    {
        "LookupKey": "76efc0023cd628819ae5c4a7c9fe6475cd72bf5efd2bb0dbc1f5b4311a3203ec",
        "LookupName": "Basement",
        "LookupValue": "SumpPump",
        "StandardLookupValue": "SumpPump",
        "LegacyOdataValue": "Sump Pump"
    },
    {
        "LookupKey": "47c761d897743c7bc78b91267c3b2ca925f2fee18cd9117786cd9b7ddc1131b9",
        "LookupName": "Basement",
        "LookupValue": "Unfinished",
        "StandardLookupValue": "Unfinished",
        "LegacyOdataValue": "Unfinished"
    },
    {
        "LookupKey": "7beaf616ed1aa02516b862b09bacb136b5a956c81ce358e5f8865311f6ead63a",
        "LookupName": "Basement",
        "LookupValue": "WalkOutAccess",
        "StandardLookupValue": "WalkOutAccess",
        "LegacyOdataValue": "Walk-Out Access"
    },
    {
        "LookupKey": "746b76f41b5fed2226f013cc70092b5e07cf2a5ea4804cd0fc985c65b9e4fd8c",
        "LookupName": "Basement",
        "LookupValue": "WalkUpAccess",
        "StandardLookupValue": "WalkUpAccess",
        "LegacyOdataValue": "Walk-Up Access"
    },
    {
        "LookupKey": "9134d82711191431986e5ab5547c80acf99774701c41cb14f35ec2abbad9d33e",
        "LookupName": "BodyType",
        "LookupValue": "DoubleWide",
        "StandardLookupValue": "DoubleWide",
        "LegacyOdataValue": "Double Wide"
    },
    {
        "LookupKey": "be030ccc8933c8ca713500d6f0f5022202c41255948ba0a774db4b9cd23dfa93",
        "LookupName": "BodyType",
        "LookupValue": "Expando",
        "StandardLookupValue": "Expando",
        "LegacyOdataValue": "Expando"
    },
    {
        "LookupKey": "e3d4868f17797b603cd5e04ed9935490967a8c8e3d3f97244d17b30239b826c2",
        "LookupName": "BodyType",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "3ab83b92311579fd5c0799d618dfc073d848499947deb35d8e06a52cbd7d980d",
        "LookupName": "BodyType",
        "LookupValue": "QuadWide",
        "StandardLookupValue": "QuadWide",
        "LegacyOdataValue": "Quad Wide"
    },
    {
        "LookupKey": "adf8553b33e96ff0a5b52d0868c1f503bdd5d5b8719d0bbcf3c9c8b163b608b6",
        "LookupName": "BodyType",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "a360b862497a51a3d030ddfa53e7e71e8ce276893aca4eba991f9b30fe0d3191",
        "LookupName": "BodyType",
        "LookupValue": "SingleWide",
        "StandardLookupValue": "SingleWide",
        "LegacyOdataValue": "Single Wide"
    },
    {
        "LookupKey": "dc216999c6314a25fefdb8f2d34db74f40e6a647a80f117f8b6763ad345d31f1",
        "LookupName": "BodyType",
        "LookupValue": "TripleWide",
        "StandardLookupValue": "TripleWide",
        "LegacyOdataValue": "Triple Wide"
    },
    {
        "LookupKey": "11b49626d0d7502994ef626b51bee93693cbcd076c4e4ea02604a92cad014ce8",
        "LookupName": "BusinessType",
        "LookupValue": "Accounting",
        "StandardLookupValue": "Accounting",
        "LegacyOdataValue": "Accounting"
    },
    {
        "LookupKey": "23f1af7ff44dabebe38dc6fde1beeaeefa6eb26ea2c77daf2f96370fda19debb",
        "LookupName": "BusinessType",
        "LookupValue": "AdministrativeAndSupport",
        "StandardLookupValue": "AdministrativeAndSupport",
        "LegacyOdataValue": "Administrative and Support"
    },
    {
        "LookupKey": "967de6958d3522ef84a9e93b8efa669fcf39f757b795462c657767edef909c1e",
        "LookupName": "BusinessType",
        "LookupValue": "Advertising",
        "StandardLookupValue": "Advertising",
        "LegacyOdataValue": "Advertising"
    },
    {
        "LookupKey": "c04f6de69435fd99c0cd6eb279d0b7a2f0620ca7da423db7871c3304d17e2505",
        "LookupName": "BusinessType",
        "LookupValue": "Agriculture",
        "StandardLookupValue": "Agriculture",
        "LegacyOdataValue": "Agriculture"
    },
    {
        "LookupKey": "ad7b890f9804a92e38a863e32a06406eea09b80c6f763aed32c8ac79470ce0fa",
        "LookupName": "BusinessType",
        "LookupValue": "AnimalGrooming",
        "StandardLookupValue": "AnimalGrooming",
        "LegacyOdataValue": "Animal Grooming"
    },
    {
        "LookupKey": "a5d1d11c3f48682c890bcbb76ddecdf46ed6860284f656f20645d15117d64d97",
        "LookupName": "BusinessType",
        "LookupValue": "Appliances",
        "StandardLookupValue": "Appliances",
        "LegacyOdataValue": "Appliances"
    },
    {
        "LookupKey": "53a8efe31d8b704feec495f95c4cedc9bb33da5f7c9f6832c04a92b8ff7afb8f",
        "LookupName": "BusinessType",
        "LookupValue": "AquariumSupplies",
        "StandardLookupValue": "AquariumSupplies",
        "LegacyOdataValue": "Aquarium Supplies"
    },
    {
        "LookupKey": "c392d7ad52c73e6033f92e2d5e5a26ffeb0442ab19d15156e05236c333376bb0",
        "LookupName": "BusinessType",
        "LookupValue": "ArtsAndEntertainment",
        "StandardLookupValue": "ArtsAndEntertainment",
        "LegacyOdataValue": "Arts and Entertainment"
    },
    {
        "LookupKey": "c96c23a97abab9a63f9a4c01cf00d5dfaa1711cda2ef6c90b32f0b6a8af581d2",
        "LookupName": "BusinessType",
        "LookupValue": "Athletic",
        "StandardLookupValue": "Athletic",
        "LegacyOdataValue": "Athletic"
    },
    {
        "LookupKey": "68a97508d6d7e1aa588c449ae634892541091e0d8000dd724217a93472e2a77d",
        "LookupName": "BusinessType",
        "LookupValue": "AutoBody",
        "StandardLookupValue": "AutoBody",
        "LegacyOdataValue": "Auto Body"
    },
    {
        "LookupKey": "2da866fbb16fef6ccd7ec334fd6f9dd2cb55a7a8cb00b8d91ebde194384d249c",
        "LookupName": "BusinessType",
        "LookupValue": "AutoDealer",
        "StandardLookupValue": "AutoDealer",
        "LegacyOdataValue": "Auto Dealer"
    },
    {
        "LookupKey": "5c7a2a5b6edd9c8983142d312d63e42e27284d1c4cf5a4019d23b16062207537",
        "LookupName": "BusinessType",
        "LookupValue": "AutoGlass",
        "StandardLookupValue": "AutoGlass",
        "LegacyOdataValue": "Auto Glass"
    },
    {
        "LookupKey": "8ca7bfd6cb320c006ecd52628967e632d877453bc142433bb78fe63e6cb3a04e",
        "LookupName": "BusinessType",
        "LookupValue": "AutoParts",
        "StandardLookupValue": "AutoParts",
        "LegacyOdataValue": "Auto Parts"
    },
    {
        "LookupKey": "91d95cf4f9bc9a8f6f909eaf5806606835532ac49815e3a8668515355f72f99e",
        "LookupName": "BusinessType",
        "LookupValue": "AutoRentLease",
        "StandardLookupValue": "AutoRentLease",
        "LegacyOdataValue": "Auto Rent/Lease"
    },
    {
        "LookupKey": "835be45ac47faa9ef537156eac6c20ad7c20e36bb89f853c2e8f32480edd8c2c",
        "LookupName": "BusinessType",
        "LookupValue": "AutoRepairSpecialty",
        "StandardLookupValue": "AutoRepairSpecialty",
        "LegacyOdataValue": "Auto Repair-Specialty"
    },
    {
        "LookupKey": "c7f4eaad7eca0d4106ae0b654ce43f519ea54eef263fda4c2ba1f2f04cc5338e",
        "LookupName": "BusinessType",
        "LookupValue": "AutoService",
        "StandardLookupValue": "AutoService",
        "LegacyOdataValue": "Auto Service"
    },
    {
        "LookupKey": "a65750812718a3d8e426d6f9de771282d755363706021bb9a7939b4a75419260",
        "LookupName": "BusinessType",
        "LookupValue": "AutoStereoAlarm",
        "StandardLookupValue": "AutoStereoAlarm",
        "LegacyOdataValue": "Auto Stereo/Alarm"
    },
    {
        "LookupKey": "afc10117419aa61e4a05e7d6c27834e5e759899919f4bf3a1bcc81585fe5a415",
        "LookupName": "BusinessType",
        "LookupValue": "AutoTires",
        "StandardLookupValue": "AutoTires",
        "LegacyOdataValue": "Auto Tires"
    },
    {
        "LookupKey": "28970286c6cbe820753a386cd13babeb0e3c87adf0ffe8b498eaf0d973942920",
        "LookupName": "BusinessType",
        "LookupValue": "AutoWrecking",
        "StandardLookupValue": "AutoWrecking",
        "LegacyOdataValue": "Auto Wrecking"
    },
    {
        "LookupKey": "3f51de3388589c45749daf7657e00db39cfe7a74be20eb924c4c426ff0a6d88d",
        "LookupName": "BusinessType",
        "LookupValue": "Bakery",
        "StandardLookupValue": "Bakery",
        "LegacyOdataValue": "Bakery"
    },
    {
        "LookupKey": "b23bdeb2cfc7dfb19f29b9fa1bbbca5b580010fef93a45292b301b3f1ab7b3d1",
        "LookupName": "BusinessType",
        "LookupValue": "BarberBeauty",
        "StandardLookupValue": "BarberBeauty",
        "LegacyOdataValue": "Barber/Beauty"
    },
    {
        "LookupKey": "04114c8c43d3606dd6c8f8a3a7c388454d33fbea7437963905d4665bc57ccc33",
        "LookupName": "BusinessType",
        "LookupValue": "BarTavernLounge",
        "StandardLookupValue": "BarTavernLounge",
        "LegacyOdataValue": "Bar/Tavern/Lounge"
    },
    {
        "LookupKey": "d6703696f012c2bab7014640864648e2f9aa4884a965ebbd90f4341b0def3469",
        "LookupName": "BusinessType",
        "LookupValue": "BedAndBreakfast",
        "StandardLookupValue": "BedAndBreakfast",
        "LegacyOdataValue": "Bed & Breakfast"
    },
    {
        "LookupKey": "04f49c4dd4259e1688df4538a184a149f13a157f630cdf4ab919b12495ba9600",
        "LookupName": "BusinessType",
        "LookupValue": "BooksCardsStationary",
        "StandardLookupValue": "BooksCardsStationary",
        "LegacyOdataValue": "Books/Cards/Stationary"
    },
    {
        "LookupKey": "a0bb9907bc527f6770a0a592546d493fada12cb3e3e7b1b7bd0e32377568adf9",
        "LookupName": "BusinessType",
        "LookupValue": "Butcher",
        "StandardLookupValue": "Butcher",
        "LegacyOdataValue": "Butcher"
    },
    {
        "LookupKey": "c1720c1a563925e9158f41a1e6e13cdcfe860b3c3f7214164168d216a25d73d9",
        "LookupName": "BusinessType",
        "LookupValue": "Cabinets",
        "StandardLookupValue": "Cabinets",
        "LegacyOdataValue": "Cabinets"
    },
    {
        "LookupKey": "843aeba982c8cb544d978776faa616782474ce6567d980b543ce7db462c322fe",
        "LookupName": "BusinessType",
        "LookupValue": "CandyCookie",
        "StandardLookupValue": "CandyCookie",
        "LegacyOdataValue": "Candy/Cookie"
    },
    {
        "LookupKey": "fd0947d6b5e17aac350a5191c49f1c33ececa627e3c96a16f35decead9bcfd47",
        "LookupName": "BusinessType",
        "LookupValue": "CarpetTile",
        "StandardLookupValue": "CarpetTile",
        "LegacyOdataValue": "Carpet/Tile"
    },
    {
        "LookupKey": "0febee99d22eebcf5d7a7b5406788f8601e6de50863dc81a0d422b82bbb91a81",
        "LookupName": "BusinessType",
        "LookupValue": "CarWash",
        "StandardLookupValue": "CarWash",
        "LegacyOdataValue": "Car Wash"
    },
    {
        "LookupKey": "a3f6c969b1cd9d7f309df7a73c5e791c5b1a104f24b7f7a594886aa828f9f600",
        "LookupName": "BusinessType",
        "LookupValue": "ChildCare",
        "StandardLookupValue": "ChildCare",
        "LegacyOdataValue": "Child Care"
    },
    {
        "LookupKey": "b7e0c7c2037ed53128efdf03c84bce90f0b5764bfcf8d2c16d19181ac8a8fde4",
        "LookupName": "BusinessType",
        "LookupValue": "Church",
        "StandardLookupValue": "Church",
        "LegacyOdataValue": "Church"
    },
    {
        "LookupKey": "b32dd3d223b9e8a12627f055b41323d4fa1440144d448841c06c9deaf86c1e3e",
        "LookupName": "BusinessType",
        "LookupValue": "Clothing",
        "StandardLookupValue": "Clothing",
        "LegacyOdataValue": "Clothing"
    },
    {
        "LookupKey": "59fac2e4af13475760fcb9ae495d0fcb575e19d25a4d2355032baafcb62f0270",
        "LookupName": "BusinessType",
        "LookupValue": "Commercial",
        "StandardLookupValue": "Commercial",
        "LegacyOdataValue": "Commercial"
    },
    {
        "LookupKey": "e96473206ca618a2578fa83be69bdf0eaabbd0aa3102f30f9fa309f8d6051fc5",
        "LookupName": "BusinessType",
        "LookupValue": "Computer",
        "StandardLookupValue": "Computer",
        "LegacyOdataValue": "Computer"
    },
    {
        "LookupKey": "db0055cc6f70cb4fc62ce0b3dfe43b72718f99e26f320a72d72053c942e7e26e",
        "LookupName": "BusinessType",
        "LookupValue": "ConstructionContractor",
        "StandardLookupValue": "ConstructionContractor",
        "LegacyOdataValue": "Construction/Contractor"
    },
    {
        "LookupKey": "0a4df41384fb2212addb03784dd914f84db34031081b581f4406cc51653d8513",
        "LookupName": "BusinessType",
        "LookupValue": "Convalescent",
        "StandardLookupValue": "Convalescent",
        "LegacyOdataValue": "Convalescent"
    },
    {
        "LookupKey": "9b965e9374b305815f14e07084f31ecbbbddcf2d325e860048b867558c34dd76",
        "LookupName": "BusinessType",
        "LookupValue": "ConvenienceStore",
        "StandardLookupValue": "ConvenienceStore",
        "LegacyOdataValue": "Convenience Store"
    },
    {
        "LookupKey": "2fbaa6e045a5638f884083c8c76e92407fe492ec881e3ecc4059bea5c08c9ed5",
        "LookupName": "BusinessType",
        "LookupValue": "DanceStudio",
        "StandardLookupValue": "DanceStudio",
        "LegacyOdataValue": "Dance Studio"
    },
    {
        "LookupKey": "a2d291ab2486eb233cadca69a297dce7982ad5322352be052e86276f8d3d7139",
        "LookupName": "BusinessType",
        "LookupValue": "Decorator",
        "StandardLookupValue": "Decorator",
        "LegacyOdataValue": "Decorator"
    },
    {
        "LookupKey": "53cb06352e35b972d9a71f4563c544bcec89182ae638d2221615d1148ccee575",
        "LookupName": "BusinessType",
        "LookupValue": "DeliCatering",
        "StandardLookupValue": "DeliCatering",
        "LegacyOdataValue": "Deli/Catering"
    },
    {
        "LookupKey": "af7b4b52e529bcf66c4c3ef2b8398751d6435e580f08c5d43e2084d0030bb065",
        "LookupName": "BusinessType",
        "LookupValue": "Dental",
        "StandardLookupValue": "Dental",
        "LegacyOdataValue": "Dental"
    },
    {
        "LookupKey": "93ffda0a8ce0dbb88b10762aca959e1327eb008f80c99e806015055527295d66",
        "LookupName": "BusinessType",
        "LookupValue": "Distribution",
        "StandardLookupValue": "Distribution",
        "LegacyOdataValue": "Distribution"
    },
    {
        "LookupKey": "86587ef7f535198751a53c65ba91de499bb31237967013974df2d2304babeca1",
        "LookupName": "BusinessType",
        "LookupValue": "Doughnut",
        "StandardLookupValue": "Doughnut",
        "LegacyOdataValue": "Doughnut"
    },
    {
        "LookupKey": "30c5e14d901ed461f5b1da60f6e8451ea85c94ccca4f6f4adf31190a1472f6be",
        "LookupName": "BusinessType",
        "LookupValue": "Drugstore",
        "StandardLookupValue": "Drugstore",
        "LegacyOdataValue": "Drugstore"
    },
    {
        "LookupKey": "645639fd7de97bc254a058b41cd45bef24396d17c1630f6e8fd76a6b652a6c86",
        "LookupName": "BusinessType",
        "LookupValue": "DryCleaner",
        "StandardLookupValue": "DryCleaner",
        "LegacyOdataValue": "Dry Cleaner"
    },
    {
        "LookupKey": "a3a00953d7ff501baa895dd325daec1b07bc55d01e93b8a656ce22da5cd55858",
        "LookupName": "BusinessType",
        "LookupValue": "EducationSchool",
        "StandardLookupValue": "EducationSchool",
        "LegacyOdataValue": "Education/School"
    },
    {
        "LookupKey": "118850b0caba84c100d9d7e4a3fe291730aa3a5dab8b8f23d130fea04230ce13",
        "LookupName": "BusinessType",
        "LookupValue": "Electronics",
        "StandardLookupValue": "Electronics",
        "LegacyOdataValue": "Electronics"
    },
    {
        "LookupKey": "9f3a69e8ab9e508578d4a3016793478bc89c0c8cc81fef60f59e9ebe4c4b96c0",
        "LookupName": "BusinessType",
        "LookupValue": "Employment",
        "StandardLookupValue": "Employment",
        "LegacyOdataValue": "Employment"
    },
    {
        "LookupKey": "b7fdcdbde7c9aa718e514243c4960f08f89c3b644a452fe1e9da6f959947488a",
        "LookupName": "BusinessType",
        "LookupValue": "Farm",
        "StandardLookupValue": "Farm",
        "LegacyOdataValue": "Farm"
    },
    {
        "LookupKey": "1d05878870bda11944a4cc24c8a5479932b89a7590e1247fb1dae4c36f465f55",
        "LookupName": "BusinessType",
        "LookupValue": "FastFood",
        "StandardLookupValue": "FastFood",
        "LegacyOdataValue": "Fast Food"
    },
    {
        "LookupKey": "f7a028a746062d8d5846eb98589e7a4f02255e5e3c8abec8f42d48833fd971c6",
        "LookupName": "BusinessType",
        "LookupValue": "Financial",
        "StandardLookupValue": "Financial",
        "LegacyOdataValue": "Financial"
    },
    {
        "LookupKey": "6056d6c37d22df035288369eb67ccddc77bae37b74d34f4cc77c6457ad25fa59",
        "LookupName": "BusinessType",
        "LookupValue": "Fitness",
        "StandardLookupValue": "Fitness",
        "LegacyOdataValue": "Fitness"
    },
    {
        "LookupKey": "55c3a640e027cf021d2e50595d1721dc24bd7bf8293248c62b8b7d0c41af4b8a",
        "LookupName": "BusinessType",
        "LookupValue": "FloristNursery",
        "StandardLookupValue": "FloristNursery",
        "LegacyOdataValue": "Florist/Nursery"
    },
    {
        "LookupKey": "c6b82b5b5bfccb1095010dd870868aa7fb7fa98420de192b02177eb980c818a1",
        "LookupName": "BusinessType",
        "LookupValue": "FoodAndBeverage",
        "StandardLookupValue": "FoodAndBeverage",
        "LegacyOdataValue": "Food & Beverage"
    },
    {
        "LookupKey": "1c83d0cb4735157359a99d3aa5f37f144743a6872450c4409760018cd73fc984",
        "LookupName": "BusinessType",
        "LookupValue": "ForestReserve",
        "StandardLookupValue": "ForestReserve",
        "LegacyOdataValue": "Forest Reserve"
    },
    {
        "LookupKey": "4984f720976c794ec81d958d0f5d5bff565c981252f39fd5c86d0206c19a3e6e",
        "LookupName": "BusinessType",
        "LookupValue": "Franchise",
        "StandardLookupValue": "Franchise",
        "LegacyOdataValue": "Franchise"
    },
    {
        "LookupKey": "071157e10b5aa298b4faed73154b145fd162ebc73d46dba50da73d26409aef2e",
        "LookupName": "BusinessType",
        "LookupValue": "Furniture",
        "StandardLookupValue": "Furniture",
        "LegacyOdataValue": "Furniture"
    },
    {
        "LookupKey": "6251374a9054b3617cbaeddd1611a7566f072f48cc5154f021a3541b690a2e72",
        "LookupName": "BusinessType",
        "LookupValue": "GasStation",
        "StandardLookupValue": "GasStation",
        "LegacyOdataValue": "Gas Station"
    },
    {
        "LookupKey": "647186d3b9350f1cb135db1d24d611ee8203c5c135c7f651b651a56b806c40fa",
        "LookupName": "BusinessType",
        "LookupValue": "GiftShop",
        "StandardLookupValue": "GiftShop",
        "LegacyOdataValue": "Gift Shop"
    },
    {
        "LookupKey": "32520802f383738d2daee4fe9d977086b0416bb2e9837d5a04ca53a875411c27",
        "LookupName": "BusinessType",
        "LookupValue": "Grocery",
        "StandardLookupValue": "Grocery",
        "LegacyOdataValue": "Grocery"
    },
    {
        "LookupKey": "ac83f5553939e2fbc6089d353c8ba1318c60a860cdbbb0241338dd8685b724c6",
        "LookupName": "BusinessType",
        "LookupValue": "Hardware",
        "StandardLookupValue": "Hardware",
        "LegacyOdataValue": "Hardware"
    },
    {
        "LookupKey": "2f6467b40ed436e33b99b7b281db0d0e6d9f6c8f6860d9fad06d781fd9e5b0dc",
        "LookupName": "BusinessType",
        "LookupValue": "HealthFood",
        "StandardLookupValue": "HealthFood",
        "LegacyOdataValue": "Health Food"
    },
    {
        "LookupKey": "2a1a3b434c0ae21b58cdabd8d0b11190f52bf81ae5e6dec3073173c25a9e2bd9",
        "LookupName": "BusinessType",
        "LookupValue": "HealthServices",
        "StandardLookupValue": "HealthServices",
        "LegacyOdataValue": "Health Services"
    },
    {
        "LookupKey": "eeb02974b56c6b28293d34a2ac1676462d7fcb848c85f3e4ac79431333e9b041",
        "LookupName": "BusinessType",
        "LookupValue": "Hobby",
        "StandardLookupValue": "Hobby",
        "LegacyOdataValue": "Hobby"
    },
    {
        "LookupKey": "e0539973828052e62c0bb6a791804835de28eb0fe27c8549b40b427bb3b5bdf7",
        "LookupName": "BusinessType",
        "LookupValue": "HomeCleaner",
        "StandardLookupValue": "HomeCleaner",
        "LegacyOdataValue": "Home Cleaner"
    },
    {
        "LookupKey": "931c2e8238a516f2e3f8b07ddf552ab004dee78cade8b5f6c9d0389c51d8c369",
        "LookupName": "BusinessType",
        "LookupValue": "Hospitality",
        "StandardLookupValue": "Hospitality",
        "LegacyOdataValue": "Hospitality"
    },
    {
        "LookupKey": "4943d78b7b83911e576a9a7c0e247eca3d223aa94e1270198971f41e95551031",
        "LookupName": "BusinessType",
        "LookupValue": "HotelMotel",
        "StandardLookupValue": "HotelMotel",
        "LegacyOdataValue": "Hotel/Motel"
    },
    {
        "LookupKey": "7de3854136da1cf127fb96098b61ebbb7e02375645fe14f8008e55daf3f65eea",
        "LookupName": "BusinessType",
        "LookupValue": "IceCreamFrozenYogurt",
        "StandardLookupValue": "IceCreamFrozenYogurt",
        "LegacyOdataValue": "Ice Cream/Frozen Yogurt"
    },
    {
        "LookupKey": "ddf18b5ac00341e34c3eca7d233e7caa82ff86de50d2f5746ce14f160084d261",
        "LookupName": "BusinessType",
        "LookupValue": "Industrial",
        "StandardLookupValue": "Industrial",
        "LegacyOdataValue": "Industrial"
    },
    {
        "LookupKey": "0d4a2c456027e614962c4e720b74508d560831a4b830a83f2ea2e3d0b618e0fa",
        "LookupName": "BusinessType",
        "LookupValue": "Jewelry",
        "StandardLookupValue": "Jewelry",
        "LegacyOdataValue": "Jewelry"
    },
    {
        "LookupKey": "abe868cac8a67cedc73d5000496ae28b38a967eed908a5f0ccaf5b67a5e3026f",
        "LookupName": "BusinessType",
        "LookupValue": "Landscaping",
        "StandardLookupValue": "Landscaping",
        "LegacyOdataValue": "Landscaping"
    },
    {
        "LookupKey": "69df1b3b472d44a99cb8e56a5290be0f18b9e56135c61af5f87fbeda8fde0c93",
        "LookupName": "BusinessType",
        "LookupValue": "Laundromat",
        "StandardLookupValue": "Laundromat",
        "LegacyOdataValue": "Laundromat"
    },
    {
        "LookupKey": "7e57a23f6a5b370d35ba2ffd095cb3a4249e1e843c0eb6797614eb52511b3c9e",
        "LookupName": "BusinessType",
        "LookupValue": "LiquorStore",
        "StandardLookupValue": "LiquorStore",
        "LegacyOdataValue": "Liquor Store"
    },
    {
        "LookupKey": "a2f6f4d4b34d975aa690354f8d0b1c9846ee50a659566a0f8148614b8d4ab24f",
        "LookupName": "BusinessType",
        "LookupValue": "Locksmith",
        "StandardLookupValue": "Locksmith",
        "LegacyOdataValue": "Locksmith"
    },
    {
        "LookupKey": "c7400ed14c5a16a7d8be887cffff054beaa8274d4449ae976b2f26c8eefd8c6a",
        "LookupName": "BusinessType",
        "LookupValue": "Manufacturing",
        "StandardLookupValue": "Manufacturing",
        "LegacyOdataValue": "Manufacturing"
    },
    {
        "LookupKey": "142d2ba9003b379151a3c80775cb9072298cc76c78dbdbc55fbd608c0eac0875",
        "LookupName": "BusinessType",
        "LookupValue": "Medical",
        "StandardLookupValue": "Medical",
        "LegacyOdataValue": "Medical"
    },
    {
        "LookupKey": "06edac704bb25b1a59a391885f2c2fd75b1e92231d3fa058754353ef525d1807",
        "LookupName": "BusinessType",
        "LookupValue": "Mixed",
        "StandardLookupValue": "Mixed",
        "LegacyOdataValue": "Mixed"
    },
    {
        "LookupKey": "80743dd7a6b011322e5a3337cd4bf7f03ec307b1e96a97a4572ad952dc54ebe1",
        "LookupName": "BusinessType",
        "LookupValue": "MobileTrailerPark",
        "StandardLookupValue": "MobileTrailerPark",
        "LegacyOdataValue": "Mobile/Trailer Park"
    },
    {
        "LookupKey": "3888f2639e658a9019bfd3b4c33a8138b6cf6d985badda7e13ba0e23b2f6df6a",
        "LookupName": "BusinessType",
        "LookupValue": "Music",
        "StandardLookupValue": "Music",
        "LegacyOdataValue": "Music"
    },
    {
        "LookupKey": "f1f159a6d1fa40e70fe18b403f1f28c9a35b854f40faac9c3940a1ee7e481cd3",
        "LookupName": "BusinessType",
        "LookupValue": "NursingHome",
        "StandardLookupValue": "NursingHome",
        "LegacyOdataValue": "Nursing Home"
    },
    {
        "LookupKey": "f8a31200cb0c389b168c1b63fdbf473a696e6847f0791906aa1fe2fa6428c27a",
        "LookupName": "BusinessType",
        "LookupValue": "OfficeSupply",
        "StandardLookupValue": "OfficeSupply",
        "LegacyOdataValue": "Office Supply"
    },
    {
        "LookupKey": "c6d42b320fab1886412f354fb5445bb322461fdbe9658a111449077953abf8ae",
        "LookupName": "BusinessType",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "fee724986bdb7eedbfd47453ea5b8935684166bb857a9b5f4b87b35253a9adc2",
        "LookupName": "BusinessType",
        "LookupValue": "Paints",
        "StandardLookupValue": "Paints",
        "LegacyOdataValue": "Paints"
    },
    {
        "LookupKey": "ed35c9537c99a4b3c6f782a035c28960b2f1858393bd9d69dbe4d2e0617221ad",
        "LookupName": "BusinessType",
        "LookupValue": "Parking",
        "StandardLookupValue": "Parking",
        "LegacyOdataValue": "Parking"
    },
    {
        "LookupKey": "5b2a72ab8c66695d4ae5aa17d5cbaf02fa12c36f55638050b9f016c96e22b5e3",
        "LookupName": "BusinessType",
        "LookupValue": "PetStore",
        "StandardLookupValue": "PetStore",
        "LegacyOdataValue": "Pet Store"
    },
    {
        "LookupKey": "aad07138ac43fbd98dc540f9f5563fe141663744d4be3ad3dd115fb6f1cab393",
        "LookupName": "BusinessType",
        "LookupValue": "Photographer",
        "StandardLookupValue": "Photographer",
        "LegacyOdataValue": "Photographer"
    },
    {
        "LookupKey": "a4517d463a6d2f4d4a5f31eab500c021cdfd28d948e5fb0c4c9c735ef68c3b06",
        "LookupName": "BusinessType",
        "LookupValue": "Pizza",
        "StandardLookupValue": "Pizza",
        "LegacyOdataValue": "Pizza"
    },
    {
        "LookupKey": "62ee59858c91312b2bd8592fe91fb5fb68550d3f5d2871206c32b7e6c30ab0b6",
        "LookupName": "BusinessType",
        "LookupValue": "Printing",
        "StandardLookupValue": "Printing",
        "LegacyOdataValue": "Printing"
    },
    {
        "LookupKey": "b47203b96cde97eca29508b5d267dffff15d3613617f3807cb21430be2ea8c6a",
        "LookupName": "BusinessType",
        "LookupValue": "ProfessionalOffice",
        "StandardLookupValue": "ProfessionalOffice",
        "LegacyOdataValue": "Professional/Office"
    },
    {
        "LookupKey": "78efe3aa804be1f5fd8e1ec2f56ffca53f1c8d68079c33dc0e46aee19bc112b2",
        "LookupName": "BusinessType",
        "LookupValue": "ProfessionalService",
        "StandardLookupValue": "ProfessionalService",
        "LegacyOdataValue": "Professional Service"
    },
    {
        "LookupKey": "40bbc3fe8734d6680946c6d7edf370bf60a816adb803def39836b74fca358af0",
        "LookupName": "BusinessType",
        "LookupValue": "RealEstate",
        "StandardLookupValue": "RealEstate",
        "LegacyOdataValue": "Real Estate"
    },
    {
        "LookupKey": "98164960031b655116f1f72c169ae395b29d33683128b5c271eb15d24c7fe486",
        "LookupName": "BusinessType",
        "LookupValue": "Recreation",
        "StandardLookupValue": "Recreation",
        "LegacyOdataValue": "Recreation"
    },
    {
        "LookupKey": "bc45365edc9f6b2196437b8e3492798933b420abb43fdbc59425214564dc2fa7",
        "LookupName": "BusinessType",
        "LookupValue": "Rental",
        "StandardLookupValue": "Rental",
        "LegacyOdataValue": "Rental"
    },
    {
        "LookupKey": "9a86bade114cb7c6bb3ea9c5cdbd403b804cb06d6acbc3b74374bd1679e8dcd9",
        "LookupName": "BusinessType",
        "LookupValue": "Residential",
        "StandardLookupValue": "Residential",
        "LegacyOdataValue": "Residential"
    },
    {
        "LookupKey": "25d2f9bd3d287d32b67732337b35094b3e5fc01eacf90a42112e6fb8869b610b",
        "LookupName": "BusinessType",
        "LookupValue": "Restaurant",
        "StandardLookupValue": "Restaurant",
        "LegacyOdataValue": "Restaurant"
    },
    {
        "LookupKey": "5b5e55a6354cd9c8a1ae67042fb54b642cbf297bc4884df3d07e21acc88ecd5e",
        "LookupName": "BusinessType",
        "LookupValue": "Retail",
        "StandardLookupValue": "Retail",
        "LegacyOdataValue": "Retail"
    },
    {
        "LookupKey": "f451e9b18a3d4caa665adf72d6d2b0b532ecae6fc3f2612ee476f740318589d6",
        "LookupName": "BusinessType",
        "LookupValue": "SaddleryHarness",
        "StandardLookupValue": "SaddleryHarness",
        "LegacyOdataValue": "Saddlery/Harness"
    },
    {
        "LookupKey": "26a0c45b65629b31cd4488c7ea974629558b43ef91cff0160ae1fe6e95fdcc2c",
        "LookupName": "BusinessType",
        "LookupValue": "SportingGoods",
        "StandardLookupValue": "SportingGoods",
        "LegacyOdataValue": "Sporting Goods"
    },
    {
        "LookupKey": "83967f14142a6514d8d6f9b449041d35f24c0b7749e96af9697415a090de3283",
        "LookupName": "BusinessType",
        "LookupValue": "Storage",
        "StandardLookupValue": "Storage",
        "LegacyOdataValue": "Storage"
    },
    {
        "LookupKey": "f0667ecd63b870eb464a01a8997e37fe86d73c878c7f6146f29c1972c3002cdc",
        "LookupName": "BusinessType",
        "LookupValue": "Toys",
        "StandardLookupValue": "Toys",
        "LegacyOdataValue": "Toys"
    },
    {
        "LookupKey": "26dfa4d6715f7adb34532192dfdb68487ec4e4d484a319681409d464c7818728",
        "LookupName": "BusinessType",
        "LookupValue": "Transportation",
        "StandardLookupValue": "Transportation",
        "LegacyOdataValue": "Transportation"
    },
    {
        "LookupKey": "ffe5d8f771b06525f259837a67992b991112f8aa8d9b811718bf6c9091ce28c4",
        "LookupName": "BusinessType",
        "LookupValue": "Travel",
        "StandardLookupValue": "Travel",
        "LegacyOdataValue": "Travel"
    },
    {
        "LookupKey": "c3b371ecad870004d171d4b122e508db790cb94c0fc880970d3bd2b5e48c065a",
        "LookupName": "BusinessType",
        "LookupValue": "Upholstery",
        "StandardLookupValue": "Upholstery",
        "LegacyOdataValue": "Upholstery"
    },
    {
        "LookupKey": "35a922d5781545df3b23099e80b466dccbdc0a2dcf5be0e5f8765fcd25008871",
        "LookupName": "BusinessType",
        "LookupValue": "Utility",
        "StandardLookupValue": "Utility",
        "LegacyOdataValue": "Utility"
    },
    {
        "LookupKey": "c86e971f0ec2443492b7bf3c54e1cd3b6327772a35349b061dac8c96f0ddffbd",
        "LookupName": "BusinessType",
        "LookupValue": "Variety",
        "StandardLookupValue": "Variety",
        "LegacyOdataValue": "Variety"
    },
    {
        "LookupKey": "3929862bf35e1d8e10ba5e8430645387d2c1092c7075ac5e9d9d1d5ae7673482",
        "LookupName": "BusinessType",
        "LookupValue": "Video",
        "StandardLookupValue": "Video",
        "LegacyOdataValue": "Video"
    },
    {
        "LookupKey": "8bfee1a568b94c5397986cca862ce6ec64cf0c4e0149e367d6f8c8991d5c5304",
        "LookupName": "BusinessType",
        "LookupValue": "Wallpaper",
        "StandardLookupValue": "Wallpaper",
        "LegacyOdataValue": "Wallpaper"
    },
    {
        "LookupKey": "3d2485174890231ef9a798322071b4f10e487d51e75caf866fd57f78ba84e208",
        "LookupName": "BusinessType",
        "LookupValue": "Warehouse",
        "StandardLookupValue": "Warehouse",
        "LegacyOdataValue": "Warehouse"
    },
    {
        "LookupKey": "d8c6e559e125992821cc49d3e1c0bd4684d511b1c0a27255a12c864be7108aee",
        "LookupName": "BusinessType",
        "LookupValue": "Wholesale",
        "StandardLookupValue": "Wholesale",
        "LegacyOdataValue": "Wholesale"
    },
    {
        "LookupKey": "aabbf0551622e6fa27850a054139bc58eea7b56e79e6ba93fc955ff8edbcc3f5",
        "LookupName": "CompensationType",
        "LookupValue": "Dollars",
        "StandardLookupValue": "Dollars",
        "LegacyOdataValue": "$"
    },
    {
        "LookupKey": "f159da3ceba3d0d00d41741cd18141a3b45927c3210aa75d5432ecc811abb4b4",
        "LookupName": "CompensationType",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "0f693dcb9701d24fe568b35d78fd4dc01455695b6c588951e3dc630601bab785",
        "LookupName": "CompensationType",
        "LookupValue": "Percent",
        "StandardLookupValue": "Percent",
        "LegacyOdataValue": "%"
    },
    {
        "LookupKey": "ab9e1f2b4145f045482e67b5bb0e031cd30b4bc7bdffba796bd424349e732685",
        "LookupName": "CompensationType",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "8ad618013968be32affd0df8f976f9ea1c8bc421f95d5c5f9fcf8d0ee1f7c3de",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "AccreditedBuyersRepresentative",
        "StandardLookupValue": "AccreditedBuyersRepresentative",
        "LegacyOdataValue": "Accredited Buyer's Representative / ABR"
    },
    {
        "LookupKey": "ac3f7bf5ef3e205d05a45e3ccf02a82c0a454c6ea0c1c30af1ea77e897a3e714",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "AccreditedLandConsultant",
        "StandardLookupValue": "AccreditedLandConsultant",
        "LegacyOdataValue": "Accredited Land Consultant / ALC"
    },
    {
        "LookupKey": "dc3382f9728663a6b86537eaf60498b3da9d42a17c799aa0195057f7c94173fa",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "AtHomeWithDiversity",
        "StandardLookupValue": "AtHomeWithDiversity",
        "LegacyOdataValue": "At Home With Diversity / AHWD"
    },
    {
        "LookupKey": "a53d0fcde36cf122cd837ef3650613eaa19b4d69e65bf5eac3ac032acf4355a2",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "CertifiedCommercialInvestmentMember",
        "StandardLookupValue": "CertifiedCommercialInvestmentMember",
        "LegacyOdataValue": "Certified Commercial Investment Member / CCIM"
    },
    {
        "LookupKey": "b3b053f4c99f0d8d5daef8c149420daeb6947eae48d1ff5c16fc1b0077816495",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "CertifiedDistressedPropertyExpert",
        "StandardLookupValue": "CertifiedDistressedPropertyExpert",
        "LegacyOdataValue": "Certified Distressed Property Expert / CDPE"
    },
    {
        "LookupKey": "a274130c15d6cde9f537da4bb6c64cc38dac23a82a8ccbcbf9e79b2605b8650b",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "CertifiedInternationalPropertySpecialist",
        "StandardLookupValue": "CertifiedInternationalPropertySpecialist",
        "LegacyOdataValue": "Certified International Property Specialist / CIPS"
    },
    {
        "LookupKey": "1f80bb94513a44db16f10c8d32b3cacdca8eb6b3d4d85921c3614bd77e7f260f",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "CertifiedPropertyManager",
        "StandardLookupValue": "CertifiedPropertyManager",
        "LegacyOdataValue": "Certified Property Manager / CPM"
    },
    {
        "LookupKey": "e67bc1da461757bc0cf7160422b848c5691cada03957b28b30648ef250f21ad8",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "CertifiedRealEstateBrokerageManager",
        "StandardLookupValue": "CertifiedRealEstateBrokerageManager",
        "LegacyOdataValue": "Certified Real Estate Brokerage Manager / CRB"
    },
    {
        "LookupKey": "30dcec50df0e217128d2d949c120ea4425bd01ca7ef1fe4f2010e3a3d52bae49",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "CertifiedRealEstateTeamSpecialist",
        "StandardLookupValue": "CertifiedRealEstateTeamSpecialist",
        "LegacyOdataValue": "Certified Real Estate Team Specialist / C-RETS"
    },
    {
        "LookupKey": "66a4ed321a86d5f5ec31db91b274d1aa1ea6620b85aaeae511d63ab8153e1b19",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "CertifiedResidentialSpecialist",
        "StandardLookupValue": "CertifiedResidentialSpecialist",
        "LegacyOdataValue": "Certified Residential Specialist / CRS"
    },
    {
        "LookupKey": "78860b5ba2c851053c0e61c7ef5fa0c4c1fba61e2505c9544414ac142f9eba58",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "CounselorOfRealEstate",
        "StandardLookupValue": "CounselorOfRealEstate",
        "LegacyOdataValue": "Counselor of Real Estate / CRE"
    },
    {
        "LookupKey": "952ff4fe50c9535cc3667ea6407bbb1d5543e1504665067017c08576c27c2bd1",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "ePRO",
        "StandardLookupValue": "ePRO",
        "LegacyOdataValue": "e-PRO"
    },
    {
        "LookupKey": "0b87ff916a08fa4a98aa75816cbf956330bff266a3727693a3813b820083671c",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "GeneralAccreditedAppraiser",
        "StandardLookupValue": "GeneralAccreditedAppraiser",
        "LegacyOdataValue": "General Accredited Appraiser / GAA"
    },
    {
        "LookupKey": "44ddd529360049a1f5eca415a81b91ccd9b3d956b29f6f2ee96c7c357c14c143",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "GraduateRealtorInstitute",
        "StandardLookupValue": "GraduateRealtorInstitute",
        "LegacyOdataValue": "Graduate"
    },
    {
        "LookupKey": "8e11a5fcda92c328a04f0cf2f6de53af0dcfc14624bdc5e350cdaae9a749610e",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "MilitaryRelocationProfessional",
        "StandardLookupValue": "MilitaryRelocationProfessional",
        "LegacyOdataValue": "Military Relocation Professional / MRP"
    },
    {
        "LookupKey": "e6aebf99b92a00771aa140af0505b41219d44015c8c8975edbc77bd639fbc7dd",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "NARsGreenDesignation",
        "StandardLookupValue": "NARsGreenDesignation",
        "LegacyOdataValue": "NAR's Green Designation / GREEN"
    },
    {
        "LookupKey": "c87502818f696412677cf7268200680329c7a8efaac187595192bb63761a62d5",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "PerformanceManagementNetwork",
        "StandardLookupValue": "PerformanceManagementNetwork",
        "LegacyOdataValue": "Performance Management Network / PMN"
    },
    {
        "LookupKey": "b7eeba17f68ca8638d30fdabbf666447cd63bf1359a18924a842c1987438fced",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "PricingStrategyAdvisor",
        "StandardLookupValue": "PricingStrategyAdvisor",
        "LegacyOdataValue": "Pricing Strategy Advisor / PSA"
    },
    {
        "LookupKey": "7073c69434c12d038c88d081e4ff868016cc4ae95eee328bb5c8691c73fac7cc",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "RealEstateNegotiationExpert",
        "StandardLookupValue": "RealEstateNegotiationExpert",
        "LegacyOdataValue": "Real Estate Negotiation Expert / RENE"
    },
    {
        "LookupKey": "758ba72540b84665f42cd4e83a6e4c6100ff57fa8258a3fcdf16ec595dfa2707",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "RealtorAssociationCertifiedExecutive",
        "StandardLookupValue": "RealtorAssociationCertifiedExecutive",
        "LegacyOdataValue": "REALTOR Association Certified Executive / RCE"
    },
    {
        "LookupKey": "305561bfa49c38606e24c333289c42310d2d4e3b01344cb1b98da74c627efc9c",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "ResidentialAccreditedAppraiser",
        "StandardLookupValue": "ResidentialAccreditedAppraiser",
        "LegacyOdataValue": "Residential Accredited Appraiser / RAA"
    },
    {
        "LookupKey": "c7f430fa1bbca5b4650b06d65191913725fa0cbbe9809cbbb087e8e5d42e7776",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "ResortAndSecondHomePropertySpecialist",
        "StandardLookupValue": "ResortAndSecondHomePropertySpecialist",
        "LegacyOdataValue": "Resort & Second-Home Property Specialist / RSPS"
    },
    {
        "LookupKey": "a724452e5f1830b995fb0b8dc7e98a3b325926657eae0e24c2d131a967ce8a45",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "SellerRepresentativeSpecialist",
        "StandardLookupValue": "SellerRepresentativeSpecialist",
        "LegacyOdataValue": "Seller Representative Specialist / SRS"
    },
    {
        "LookupKey": "b78c5b0eb9534aa82dc57d5281bb79055b8f38c6a38c509aed6cecebe8a0f238",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "SeniorsRealEstateSpecialist",
        "StandardLookupValue": "SeniorsRealEstateSpecialist",
        "LegacyOdataValue": "Seniors Real Estate Specialist / SRES"
    },
    {
        "LookupKey": "0ed28099ba002764ab5e66e9d834215afd15023af1599d599916af54bea3bc3d",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "ShortSalesAndForeclosureResource",
        "StandardLookupValue": "ShortSalesAndForeclosureResource",
        "LegacyOdataValue": "Short Sales & Foreclosure Resource / SFR"
    },
    {
        "LookupKey": "fbaf46d6776f06310f960a0ad6e26aae47d51dc8c025ccd831b2295301209f8b",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "StandardLookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "LegacyOdataValue": "Society of Industrial and Office REALTORS / SIOR"
    },
    {
        "LookupKey": "d07469b89b7070de5f91211236720fc2077e17fa8d5bdbc64dd273f167ecf538",
        "LookupName": "BuyerAgentDesignation",
        "LookupValue": "TransnationalReferralCertification",
        "StandardLookupValue": "TransnationalReferralCertification",
        "LegacyOdataValue": "Transnational Referral Certification / TRC"
    },
    {
        "LookupKey": "5b25cfe95e86608103cdb476e796d6636796f9a554355eb1e02acb8f8049aef3",
        "LookupName": "BuyerFinancing",
        "LookupValue": "Assumed",
        "StandardLookupValue": "Assumed",
        "LegacyOdataValue": "Assumed"
    },
    {
        "LookupKey": "62bd879451121da28f147a118959e3cb133cab2302cbb4b4253f61ead5b9634a",
        "LookupName": "BuyerFinancing",
        "LookupValue": "Cash",
        "StandardLookupValue": "Cash",
        "LegacyOdataValue": "Cash"
    },
    {
        "LookupKey": "a1b177df71de8685c4cc84735ff07139b4fcb0ec992647299f07d5fcdbebc281",
        "LookupName": "BuyerFinancing",
        "LookupValue": "Contract",
        "StandardLookupValue": "Contract",
        "LegacyOdataValue": "Contract"
    },
    {
        "LookupKey": "d9c9b25a047323173243b988975aa4e39acc270fddd070a33e9661898eb438e0",
        "LookupName": "BuyerFinancing",
        "LookupValue": "Conventional",
        "StandardLookupValue": "Conventional",
        "LegacyOdataValue": "Conventional"
    },
    {
        "LookupKey": "1f49bf02e085263015d6b88d7630dbf88be94825d23afd433144616a1b334b7c",
        "LookupName": "BuyerFinancing",
        "LookupValue": "FHA",
        "StandardLookupValue": "FHA",
        "LegacyOdataValue": "FHA"
    },
    {
        "LookupKey": "20f1e899936647aafd37fbe49373b15673968beec6402971b8e4d86ebf35c4ca",
        "LookupName": "BuyerFinancing",
        "LookupValue": "FHA203b",
        "StandardLookupValue": "FHA203b",
        "LegacyOdataValue": "FHA 203b"
    },
    {
        "LookupKey": "daa5f8bfd598b9dc324efa4641095a1ce378d72d826f9a3db80390a9f3348c23",
        "LookupName": "BuyerFinancing",
        "LookupValue": "FHA203k",
        "StandardLookupValue": "FHA203k",
        "LegacyOdataValue": "FHA 203k"
    },
    {
        "LookupKey": "c41ccd69135e4ebb1b2cd3b597a8a97bee60167ed898ffe8e2323b87e010c2a3",
        "LookupName": "BuyerFinancing",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "6e546ca695a5ccd4864c7904dc857b6aaffa99706f1e0b5c6ac833b9f26aeeac",
        "LookupName": "BuyerFinancing",
        "LookupValue": "Private",
        "StandardLookupValue": "Private",
        "LegacyOdataValue": "Private"
    },
    {
        "LookupKey": "2d54452356a5e9a838b27f9c1536a32af30de82bffd1fd4643a617b9e699d0c8",
        "LookupName": "BuyerFinancing",
        "LookupValue": "SellerFinancing",
        "StandardLookupValue": "SellerFinancing",
        "LegacyOdataValue": "Seller Financing"
    },
    {
        "LookupKey": "dcd40cf1993c0a19df480ab09756f8deb0b19f5f4b1313abb7b001530fd8b5d3",
        "LookupName": "BuyerFinancing",
        "LookupValue": "TrustDeed",
        "StandardLookupValue": "TrustDeed",
        "LegacyOdataValue": "Trust Deed"
    },
    {
        "LookupKey": "598e2b51360dfb332dc88969d104b3751cd0de071147e2fa3ae0c3193214fd20",
        "LookupName": "BuyerFinancing",
        "LookupValue": "USDA",
        "StandardLookupValue": "USDA",
        "LegacyOdataValue": "USDA"
    },
    {
        "LookupKey": "f590beea1729cc371d1c98091c09850950a18ddced36e059eaff7943866ac423",
        "LookupName": "BuyerFinancing",
        "LookupValue": "VA",
        "StandardLookupValue": "VA",
        "LegacyOdataValue": "VA"
    },
    {
        "LookupKey": "95f8fb6962a497922abb49c28b9e92969425cdce182e0a572870c4e2feb98136",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "AccreditedBuyersRepresentative",
        "StandardLookupValue": "AccreditedBuyersRepresentative",
        "LegacyOdataValue": "Accredited Buyer's Representative / ABR"
    },
    {
        "LookupKey": "c7258d7e8a1b9c8fb5e45ec0c1d62d913b85150602495ac567d2980fb929fbc7",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "AccreditedLandConsultant",
        "StandardLookupValue": "AccreditedLandConsultant",
        "LegacyOdataValue": "Accredited Land Consultant / ALC"
    },
    {
        "LookupKey": "1cfc870de6420b0c7340e5651f6b839c90dcf531cc85d0897e2bcaae08569fe4",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "AtHomeWithDiversity",
        "StandardLookupValue": "AtHomeWithDiversity",
        "LegacyOdataValue": "At Home With Diversity / AHWD"
    },
    {
        "LookupKey": "22388bce3660ab307ba4b564c399ccc59edcf7984eba46ab4e0ce1e17460d4d9",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "CertifiedCommercialInvestmentMember",
        "StandardLookupValue": "CertifiedCommercialInvestmentMember",
        "LegacyOdataValue": "Certified Commercial Investment Member / CCIM"
    },
    {
        "LookupKey": "59a5360837b2caf817b6619fb8191014849459f9dd4d1d60273fb9f805fb55c8",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "CertifiedDistressedPropertyExpert",
        "StandardLookupValue": "CertifiedDistressedPropertyExpert",
        "LegacyOdataValue": "Certified Distressed Property Expert / CDPE"
    },
    {
        "LookupKey": "6e4bebed48b7accc04498151adb6077c76e53e3ec031ebaaa11854ce823fe14a",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "CertifiedInternationalPropertySpecialist",
        "StandardLookupValue": "CertifiedInternationalPropertySpecialist",
        "LegacyOdataValue": "Certified International Property Specialist / CIPS"
    },
    {
        "LookupKey": "0b4e222c707a6d2c11e3ea95a628fa53e3c413aba522ea585a5eacf0d44ce249",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "CertifiedPropertyManager",
        "StandardLookupValue": "CertifiedPropertyManager",
        "LegacyOdataValue": "Certified Property Manager / CPM"
    },
    {
        "LookupKey": "a124a7b9b3ec046f39a0b10f343ab7303369b5d65c4449163af73ad365bae5ec",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "CertifiedRealEstateBrokerageManager",
        "StandardLookupValue": "CertifiedRealEstateBrokerageManager",
        "LegacyOdataValue": "Certified Real Estate Brokerage Manager / CRB"
    },
    {
        "LookupKey": "fdfec5a06c3f874241eade7d21f029ab9091edcd2c171716b46510232b13f341",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "CertifiedRealEstateTeamSpecialist",
        "StandardLookupValue": "CertifiedRealEstateTeamSpecialist",
        "LegacyOdataValue": "Certified Real Estate Team Specialist / C-RETS"
    },
    {
        "LookupKey": "6f8d69a8d5912e5f6287ce8dadf0eac5b999a1faceaf5c1f837bb833ad6d3c77",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "CertifiedResidentialSpecialist",
        "StandardLookupValue": "CertifiedResidentialSpecialist",
        "LegacyOdataValue": "Certified Residential Specialist / CRS"
    },
    {
        "LookupKey": "bef57919269bfd41c76ce73906b17c47715f1dc2d17cba65726611933b5d853f",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "CounselorOfRealEstate",
        "StandardLookupValue": "CounselorOfRealEstate",
        "LegacyOdataValue": "Counselor of Real Estate / CRE"
    },
    {
        "LookupKey": "db3a26eb58e7383941327748dc70e665104f74cfa69a88747a9392a33e795bcb",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "ePRO",
        "StandardLookupValue": "ePRO",
        "LegacyOdataValue": "e-PRO"
    },
    {
        "LookupKey": "c032c045a9d7fb61a46be04c1eab5748f3c0227dd7fe01f3fa334a60fadd1a13",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "GeneralAccreditedAppraiser",
        "StandardLookupValue": "GeneralAccreditedAppraiser",
        "LegacyOdataValue": "General Accredited Appraiser / GAA"
    },
    {
        "LookupKey": "9cba742dfa7954cf34550174cd65697f99f8142abe8f857d41673f439819a3d3",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "GraduateRealtorInstitute",
        "StandardLookupValue": "GraduateRealtorInstitute",
        "LegacyOdataValue": "Graduate"
    },
    {
        "LookupKey": "4b11ea8656e11c5aeec18ed5244f5d746712fd5896e164e20f5d35830052eebd",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "MilitaryRelocationProfessional",
        "StandardLookupValue": "MilitaryRelocationProfessional",
        "LegacyOdataValue": "Military Relocation Professional / MRP"
    },
    {
        "LookupKey": "6fef1d5ad17ef4826591c462ad035b11762f454309f00c837e9478e8f593518f",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "NARsGreenDesignation",
        "StandardLookupValue": "NARsGreenDesignation",
        "LegacyOdataValue": "NAR's Green Designation / GREEN"
    },
    {
        "LookupKey": "d77159867a52691b5cba054c6d8c43d2df082c2c8135fa80236daeeb88830b83",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "PerformanceManagementNetwork",
        "StandardLookupValue": "PerformanceManagementNetwork",
        "LegacyOdataValue": "Performance Management Network / PMN"
    },
    {
        "LookupKey": "df0fde0576ff57bf9ba98ba5c1efb92ec386ae5a6cda35c3c9eef2c05189933a",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "PricingStrategyAdvisor",
        "StandardLookupValue": "PricingStrategyAdvisor",
        "LegacyOdataValue": "Pricing Strategy Advisor / PSA"
    },
    {
        "LookupKey": "5e0f72c349f7cfccc14c34fe0f03040a691b68045863c6014046624071a2ae0d",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "RealEstateNegotiationExpert",
        "StandardLookupValue": "RealEstateNegotiationExpert",
        "LegacyOdataValue": "Real Estate Negotiation Expert / RENE"
    },
    {
        "LookupKey": "1651f33cfbe24e26dad8284b0e42614d1b5384e6f347402bf64a6422b04120da",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "RealtorAssociationCertifiedExecutive",
        "StandardLookupValue": "RealtorAssociationCertifiedExecutive",
        "LegacyOdataValue": "REALTOR Association Certified Executive / RCE"
    },
    {
        "LookupKey": "5691df04e5206d50236724be63e8894949889f5d00eae504e7d917f25cd12764",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "ResidentialAccreditedAppraiser",
        "StandardLookupValue": "ResidentialAccreditedAppraiser",
        "LegacyOdataValue": "Residential Accredited Appraiser / RAA"
    },
    {
        "LookupKey": "63ca956d9ca10c861b7fb5d8d003ac8e7a2dc8e7303a1ef66e939fe667a10899",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "ResortAndSecondHomePropertySpecialist",
        "StandardLookupValue": "ResortAndSecondHomePropertySpecialist",
        "LegacyOdataValue": "Resort & Second-Home Property Specialist / RSPS"
    },
    {
        "LookupKey": "1709dda420bcd02a5ed7861f97df949eda3ca6f55e78606f3bb493c6e8714fac",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "SellerRepresentativeSpecialist",
        "StandardLookupValue": "SellerRepresentativeSpecialist",
        "LegacyOdataValue": "Seller Representative Specialist / SRS"
    },
    {
        "LookupKey": "563447d4d98c37fac0206e3bcb6d0ace831734631f30ce8abca35a9aabe09e09",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "SeniorsRealEstateSpecialist",
        "StandardLookupValue": "SeniorsRealEstateSpecialist",
        "LegacyOdataValue": "Seniors Real Estate Specialist / SRES"
    },
    {
        "LookupKey": "6e687a933b786294bf7847283ef439d5b25d3de6d0c6a6d73305c343d57ab2a8",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "ShortSalesAndForeclosureResource",
        "StandardLookupValue": "ShortSalesAndForeclosureResource",
        "LegacyOdataValue": "Short Sales & Foreclosure Resource / SFR"
    },
    {
        "LookupKey": "e95a3024bdb96ce19b4ffef6a622e4b5bea5ec5b6d7d502e5d78e4b9289463ad",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "StandardLookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "LegacyOdataValue": "Society of Industrial and Office REALTORS / SIOR"
    },
    {
        "LookupKey": "2d587f06b45701d8a5374e7e697b5a3f66aa482e8dd3c786a2658d0457bff4a4",
        "LookupName": "CoBuyerAgentDesignation",
        "LookupValue": "TransnationalReferralCertification",
        "StandardLookupValue": "TransnationalReferralCertification",
        "LegacyOdataValue": "Transnational Referral Certification / TRC"
    },
    {
        "LookupKey": "ea73a26c430d05688d7a9c09369f81c249fdb7a5c7980afa93d5d545aff7b0be",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "AccreditedBuyersRepresentative",
        "StandardLookupValue": "AccreditedBuyersRepresentative",
        "LegacyOdataValue": "Accredited Buyer's Representative / ABR"
    },
    {
        "LookupKey": "4ea403334175421fb2953848c63727f65eef3a49ac551e0afdffa458d729de21",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "AccreditedLandConsultant",
        "StandardLookupValue": "AccreditedLandConsultant",
        "LegacyOdataValue": "Accredited Land Consultant / ALC"
    },
    {
        "LookupKey": "c3b1e8ac48ceefe017b913ca856b1536f897c66e57d5dd1ea444f1d1b5dd8fe0",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "AtHomeWithDiversity",
        "StandardLookupValue": "AtHomeWithDiversity",
        "LegacyOdataValue": "At Home With Diversity / AHWD"
    },
    {
        "LookupKey": "dcf7353de9e4cc985af712a48c36610271bee50df3d11ca43d2a8c2e77de5539",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "CertifiedCommercialInvestmentMember",
        "StandardLookupValue": "CertifiedCommercialInvestmentMember",
        "LegacyOdataValue": "Certified Commercial Investment Member / CCIM"
    },
    {
        "LookupKey": "d671eae1772a9c67ff350fc99f1b5537944e0f562fea04fe0e9ce8048fded4eb",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "CertifiedDistressedPropertyExpert",
        "StandardLookupValue": "CertifiedDistressedPropertyExpert",
        "LegacyOdataValue": "Certified Distressed Property Expert / CDPE"
    },
    {
        "LookupKey": "fb9dcf33d592cf83a47ff446dbc6b469ce2fa05248d3de61ca90892a1efc23d0",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "CertifiedInternationalPropertySpecialist",
        "StandardLookupValue": "CertifiedInternationalPropertySpecialist",
        "LegacyOdataValue": "Certified International Property Specialist / CIPS"
    },
    {
        "LookupKey": "d32273a98a2c2a029ba0d9c555087510473e6911a197121ba1ab57a61ba90a35",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "CertifiedPropertyManager",
        "StandardLookupValue": "CertifiedPropertyManager",
        "LegacyOdataValue": "Certified Property Manager / CPM"
    },
    {
        "LookupKey": "10e0717f0d3aeef9bceb9b9ff935a1f33c32a06b39aa97694558a2f327799679",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "CertifiedRealEstateBrokerageManager",
        "StandardLookupValue": "CertifiedRealEstateBrokerageManager",
        "LegacyOdataValue": "Certified Real Estate Brokerage Manager / CRB"
    },
    {
        "LookupKey": "ba488d4550b75765ec5804ad055860ad9b6525a6284a85a3246d40f4971b3020",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "CertifiedRealEstateTeamSpecialist",
        "StandardLookupValue": "CertifiedRealEstateTeamSpecialist",
        "LegacyOdataValue": "Certified Real Estate Team Specialist / C-RETS"
    },
    {
        "LookupKey": "516958a95543bfb2921912b83215ae3d9b43aa3baddf06e3aafc408bbea96540",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "CertifiedResidentialSpecialist",
        "StandardLookupValue": "CertifiedResidentialSpecialist",
        "LegacyOdataValue": "Certified Residential Specialist / CRS"
    },
    {
        "LookupKey": "4af9d1da2188a65f368991b1e5d9cad85d652a83f3da110e07ecb3c4b224168a",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "CounselorOfRealEstate",
        "StandardLookupValue": "CounselorOfRealEstate",
        "LegacyOdataValue": "Counselor of Real Estate / CRE"
    },
    {
        "LookupKey": "84b0212f902f30fbf0437f6fd05eb4b666de93f43a0fd0a09fb7d584e9d75fed",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "ePRO",
        "StandardLookupValue": "ePRO",
        "LegacyOdataValue": "e-PRO"
    },
    {
        "LookupKey": "f59a2e7ffad178562a140b63e5da5c914a9ef02ef2df5387c73fdb2d303a071f",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "GeneralAccreditedAppraiser",
        "StandardLookupValue": "GeneralAccreditedAppraiser",
        "LegacyOdataValue": "General Accredited Appraiser / GAA"
    },
    {
        "LookupKey": "fb58f0733799818f5eaf819f80bc11e3350b5c8cefbf993507a72c29a4ef3f58",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "GraduateRealtorInstitute",
        "StandardLookupValue": "GraduateRealtorInstitute",
        "LegacyOdataValue": "Graduate"
    },
    {
        "LookupKey": "515a8b31a494d27a36052748898f4719cc3f17422e575a67b4d794319ba1056c",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "MilitaryRelocationProfessional",
        "StandardLookupValue": "MilitaryRelocationProfessional",
        "LegacyOdataValue": "Military Relocation Professional / MRP"
    },
    {
        "LookupKey": "80a61de0dbea0b8017d85cf8403faad0c8f49fcd1699fcef8e604b615ad37d8f",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "NARsGreenDesignation",
        "StandardLookupValue": "NARsGreenDesignation",
        "LegacyOdataValue": "NAR's Green Designation / GREEN"
    },
    {
        "LookupKey": "2fb7b146fc582801bdb78bcea62587bd8ad59d6b217e06f05cb4ba4e5ec29ccb",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "PerformanceManagementNetwork",
        "StandardLookupValue": "PerformanceManagementNetwork",
        "LegacyOdataValue": "Performance Management Network / PMN"
    },
    {
        "LookupKey": "ad5419d359597af303d33e8e538d9933e845ced6f566c70c087de0f1090a07bd",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "PricingStrategyAdvisor",
        "StandardLookupValue": "PricingStrategyAdvisor",
        "LegacyOdataValue": "Pricing Strategy Advisor / PSA"
    },
    {
        "LookupKey": "250c874be98e3ae73e34ca86b347195f67df0169bb13933c0f1adaec17c4dfa6",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "RealEstateNegotiationExpert",
        "StandardLookupValue": "RealEstateNegotiationExpert",
        "LegacyOdataValue": "Real Estate Negotiation Expert / RENE"
    },
    {
        "LookupKey": "714a5486d163f1cf8875336658c13ceb42b5c6d7a53bde9a4db8148238a4a5e9",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "RealtorAssociationCertifiedExecutive",
        "StandardLookupValue": "RealtorAssociationCertifiedExecutive",
        "LegacyOdataValue": "REALTOR Association Certified Executive / RCE"
    },
    {
        "LookupKey": "d32e924099752ee6de950b451916f49b101a01a1460ee4c951f5f0fb1ec4c449",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "ResidentialAccreditedAppraiser",
        "StandardLookupValue": "ResidentialAccreditedAppraiser",
        "LegacyOdataValue": "Residential Accredited Appraiser / RAA"
    },
    {
        "LookupKey": "501126d39e50687b24b57b10a3084472551e1b49f57f1b2cdbe3eaf5adff5ce8",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "ResortAndSecondHomePropertySpecialist",
        "StandardLookupValue": "ResortAndSecondHomePropertySpecialist",
        "LegacyOdataValue": "Resort & Second-Home Property Specialist / RSPS"
    },
    {
        "LookupKey": "ade218ba537471d01d1109fa92cd18727fab01ef75d35bc0ba0726764259ce80",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "SellerRepresentativeSpecialist",
        "StandardLookupValue": "SellerRepresentativeSpecialist",
        "LegacyOdataValue": "Seller Representative Specialist / SRS"
    },
    {
        "LookupKey": "22a9138172966bd32621f35f4f352df168ec1b3be5262b2df9b5edfa5aed3e6f",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "SeniorsRealEstateSpecialist",
        "StandardLookupValue": "SeniorsRealEstateSpecialist",
        "LegacyOdataValue": "Seniors Real Estate Specialist / SRES"
    },
    {
        "LookupKey": "85a6726f7fd4b4c84dcb9bd11367b69471dbc825c04b748fecef260381c2523e",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "ShortSalesAndForeclosureResource",
        "StandardLookupValue": "ShortSalesAndForeclosureResource",
        "LegacyOdataValue": "Short Sales & Foreclosure Resource / SFR"
    },
    {
        "LookupKey": "ff769ea99bc8c3cbc69bb5a37ca5b5d4847404ae67905305dd0709d84e6dec5b",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "StandardLookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "LegacyOdataValue": "Society of Industrial and Office REALTORS / SIOR"
    },
    {
        "LookupKey": "543279658f0e3b801eec1d00da170cc652987c11167d144c51a859db77f13fa7",
        "LookupName": "CoListAgentDesignation",
        "LookupValue": "TransnationalReferralCertification",
        "StandardLookupValue": "TransnationalReferralCertification",
        "LegacyOdataValue": "Transnational Referral Certification / TRC"
    },
    {
        "LookupKey": "cf5248a89cd67cdfdc8c99e908e96d62ed0c785229fd4cfc25625bedaf01e8c6",
        "LookupName": "CommonInterest",
        "LookupValue": "CommunityApartment",
        "StandardLookupValue": "CommunityApartment",
        "LegacyOdataValue": "Community Apartment"
    },
    {
        "LookupKey": "63fee0c8eb06e134f0e900334364e11fac3ad0ee07de8a201a2a955923fb975c",
        "LookupName": "CommonInterest",
        "LookupValue": "Condominium",
        "StandardLookupValue": "Condominium",
        "LegacyOdataValue": "Condominium"
    },
    {
        "LookupKey": "b0201ac2715a9b096941e913f303c788a1663900e58c0465e8cbeabf62a8aa63",
        "LookupName": "CommonInterest",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "2023fd803f6c2919a7b66183aeda0ded7b7cdb38890d887984f7a1747ed27d41",
        "LookupName": "CommonInterest",
        "LookupValue": "PlannedDevelopment",
        "StandardLookupValue": "PlannedDevelopment",
        "LegacyOdataValue": "Planned Development"
    },
    {
        "LookupKey": "b79c1b207d488b49e890687d92815412e64578d1494d4375ad5b14d0c1ef4cea",
        "LookupName": "CommonInterest",
        "LookupValue": "StockCooperative",
        "StandardLookupValue": "StockCooperative",
        "LegacyOdataValue": "Stock Cooperative"
    },
    {
        "LookupKey": "d83056e78ff696ccb50952e8334d74dd3daf03737851e056bd0e5c76e19c545f",
        "LookupName": "CommonInterest",
        "LookupValue": "Timeshare",
        "StandardLookupValue": "Timeshare",
        "LegacyOdataValue": "Timeshare"
    },
    {
        "LookupKey": "c90d4d089e97fe108720ccd4a4da92f92f033611994f4c7e9ef4945c39e3273d",
        "LookupName": "CommonWalls",
        "LookupValue": "EndUnit",
        "StandardLookupValue": "EndUnit",
        "LegacyOdataValue": "End Unit"
    },
    {
        "LookupKey": "c0ffa9da745a5b6bd0c43e2b5bf066d2ac14295f5387cbeed10e2ef33c4f42cc",
        "LookupName": "CommonWalls",
        "LookupValue": "NoCommonWalls",
        "StandardLookupValue": "NoCommonWalls",
        "LegacyOdataValue": "No Common Walls"
    },
    {
        "LookupKey": "dc0c8c4683b1b505efa2383ad69a6eb2b3fdf423c89403ca762bcdc636e04998",
        "LookupName": "CommonWalls",
        "LookupValue": "NoOneAbove",
        "StandardLookupValue": "NoOneAbove",
        "LegacyOdataValue": "No One Above"
    },
    {
        "LookupKey": "0efc058229e1aaf9568d2f7439212e6bed0e082211230f89005f90ec7a8f06e2",
        "LookupName": "CommonWalls",
        "LookupValue": "NoOneBelow",
        "StandardLookupValue": "NoOneBelow",
        "LegacyOdataValue": "No One Below"
    },
    {
        "LookupKey": "3f8ea896a62b5774d4e3a392a40fdebbfafe78e73be76b3566bfd1e4e367aec8",
        "LookupName": "CommonWalls",
        "LookupValue": "OneCommonWall",
        "StandardLookupValue": "OneCommonWall",
        "LegacyOdataValue": "1 Common Wall"
    },
    {
        "LookupKey": "f172c2b3596e12e8d2e91ba7e0d0227b16f0a58401045f33526e34f9ad7a1746",
        "LookupName": "CommonWalls",
        "LookupValue": "TwoOrMoreCommonWalls",
        "StandardLookupValue": "TwoOrMoreCommonWalls",
        "LegacyOdataValue": "2+ Common Walls"
    },
    {
        "LookupKey": "9801c4db64acf307a63070d2fe93a7dcb59c84e114fdddc3ad75a1000772d931",
        "LookupName": "CommunityFeatures",
        "LookupValue": "AirportRunway",
        "StandardLookupValue": "AirportRunway",
        "LegacyOdataValue": "Airport/Runway"
    },
    {
        "LookupKey": "3a8630ff1f8643974c129d10540227b129fb64a73159f9fc561eecbdcaa4edc5",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Clubhouse",
        "StandardLookupValue": "Clubhouse",
        "LegacyOdataValue": "Clubhouse"
    },
    {
        "LookupKey": "72ea18bbbac2b572df98f149f3bc5576a4c9b2928b962e39f3b5137a52b89dca",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Curbs",
        "StandardLookupValue": "Curbs",
        "LegacyOdataValue": "Curbs"
    },
    {
        "LookupKey": "52727c17a21a8e7b51c3d787c36f910649fc7d4db41b9f940aef06432bee0574",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Fishing",
        "StandardLookupValue": "Fishing",
        "LegacyOdataValue": "Fishing"
    },
    {
        "LookupKey": "8171e76b1bf48421b763be8c146cfc5e6dac0273f6708b2da1d4ff41d4b7fcc4",
        "LookupName": "CommunityFeatures",
        "LookupValue": "FitnessCenter",
        "StandardLookupValue": "FitnessCenter",
        "LegacyOdataValue": "Fitness Center"
    },
    {
        "LookupKey": "108e4f9af48c4c3760efa46f513c69286d553ff28c4b4c854e72da632c78da39",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Gated",
        "StandardLookupValue": "Gated",
        "LegacyOdataValue": "Gated"
    },
    {
        "LookupKey": "df62c98a92c1924ff83d8f2c0595c17c72bd86734827a3d448bc210c283fa891",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Golf",
        "StandardLookupValue": "Golf",
        "LegacyOdataValue": "Golf"
    },
    {
        "LookupKey": "c13a0ff6b0e0c0277832572bd5164e3077eece8c777eecf053dd3776d662b7a6",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Lake",
        "StandardLookupValue": "Lake",
        "LegacyOdataValue": "Lake"
    },
    {
        "LookupKey": "59d37ef2a5c8d526e02b394abf23eb145f6770a717f406d5559a8f27c56947c9",
        "LookupName": "CommunityFeatures",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "1518316ebadea37f76690cfc632ce7dd4494bd7f0db63040ca3db195c631d967",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "e116b5f83036b65da3a8d03d7e6e9e0a1eb0936fbc5e8cdc638a5c66daf9a314",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Park",
        "StandardLookupValue": "Park",
        "LegacyOdataValue": "Park"
    },
    {
        "LookupKey": "f159cb224b8768f2a357158fb1de71deb8f19b22e91247d7bb8f92a9652c3b38",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Playground",
        "StandardLookupValue": "Playground",
        "LegacyOdataValue": "Playground"
    },
    {
        "LookupKey": "377537e55d363e0b59fe8ec1dea877c8fe2d7617f7ff72a2190d203e369cfcd6",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Pool",
        "StandardLookupValue": "Pool",
        "LegacyOdataValue": "Pool"
    },
    {
        "LookupKey": "3b32c48c81440694073925be062b65726079e18122d1b36b3d3f4de22fdc5372",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Racquetball",
        "StandardLookupValue": "Racquetball",
        "LegacyOdataValue": "Racquetball"
    },
    {
        "LookupKey": "e45591e76841ba7bf15f96e83989575f7c5a50a914462453ed40c415b1285179",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Restaurant",
        "StandardLookupValue": "Restaurant",
        "LegacyOdataValue": "Restaurant"
    },
    {
        "LookupKey": "ae9f37be9ec4cb399240958e519b21da2e2dca0fe58efc8a2fd11b84fddd3272",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Sidewalks",
        "StandardLookupValue": "Sidewalks",
        "LegacyOdataValue": "Sidewalks"
    },
    {
        "LookupKey": "060e54ec4ecc682dcc2618ca24080e5d591aad23504d25f1a33757c45df05330",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Stables",
        "StandardLookupValue": "Stables",
        "LegacyOdataValue": "Stables"
    },
    {
        "LookupKey": "6cc3870cf963bb44858ddd2041be266b548044414f7c1193a21cc66fb70398bd",
        "LookupName": "CommunityFeatures",
        "LookupValue": "StreetLights",
        "StandardLookupValue": "StreetLights",
        "LegacyOdataValue": "Street Lights"
    },
    {
        "LookupKey": "e7843b3d8384500a5635e957413c3cb04cfe54852bcd9a9689bce2e3a2aa605d",
        "LookupName": "CommunityFeatures",
        "LookupValue": "Suburban",
        "StandardLookupValue": "Suburban",
        "LegacyOdataValue": "Suburban"
    },
    {
        "LookupKey": "2dde41555de8c9043692a755649f7c8b829432bcca7148e1246c3f09e492b86d",
        "LookupName": "CommunityFeatures",
        "LookupValue": "TennisCourts",
        "StandardLookupValue": "TennisCourts",
        "LegacyOdataValue": "Tennis Courts"
    },
    {
        "LookupKey": "472d4ed7026045ca1e486ebbbdc454c33ef893d635fe84d49a209ce8d635005f",
        "LookupName": "Concessions",
        "LookupValue": "CallListingAgent",
        "StandardLookupValue": "CallListingAgent",
        "LegacyOdataValue": "Call Listing Agent"
    },
    {
        "LookupKey": "4003c664ace3044e7a846765989656129194d89e8f8b80983fd3354bffa6c04f",
        "LookupName": "Concessions",
        "LookupValue": "No",
        "StandardLookupValue": "No",
        "LegacyOdataValue": "No"
    },
    {
        "LookupKey": "8bb16004bf5d72991a8ca6c2f5b180ee50f05159d8db0cf34e57b63e989d93fe",
        "LookupName": "Concessions",
        "LookupValue": "Yes",
        "StandardLookupValue": "Yes",
        "LegacyOdataValue": "Yes"
    },
    {
        "LookupKey": "4f23067383704f1f240cacc54b7ac8fbfbff38d688b6dc2535018706bb919200",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Adobe",
        "StandardLookupValue": "Adobe",
        "LegacyOdataValue": "Adobe"
    },
    {
        "LookupKey": "6b97e9e51e8ca708af473f2029da8a961724e7868ec93d560f97dc4641a76515",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "AluminumSiding",
        "StandardLookupValue": "AluminumSiding",
        "LegacyOdataValue": "Aluminum Siding"
    },
    {
        "LookupKey": "b3a5ba13cc1777f798e1fd82689269da7ee06426a861257002606e36935bf78c",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Asbestos",
        "StandardLookupValue": "Asbestos",
        "LegacyOdataValue": "Asbestos"
    },
    {
        "LookupKey": "12cb4ab85a246c5c7b11570aa25f0179a13830b8b80d8e1d150ebd0b20415dd7",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Asphalt",
        "StandardLookupValue": "Asphalt",
        "LegacyOdataValue": "Asphalt"
    },
    {
        "LookupKey": "f18ab3807743adf307b87c12d40eee3c237f64f41a1729afd673f3c64cf019e3",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "AtticCrawlHatchwaysInsulated",
        "StandardLookupValue": "AtticCrawlHatchwaysInsulated",
        "LegacyOdataValue": "Attic/Crawl Hatchways Insulated"
    },
    {
        "LookupKey": "a2e1c94b1f42cdb401ce99683d484b8b022d82ace58cbc55e5c0fb370da0cfec",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "BattsInsulation",
        "StandardLookupValue": "BattsInsulation",
        "LegacyOdataValue": "Batts Insulation"
    },
    {
        "LookupKey": "92167fa73357fb9627a261dbba5c4f904f2c767edad44c1d2192aac49739f92a",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Block",
        "StandardLookupValue": "Block",
        "LegacyOdataValue": "Block"
    },
    {
        "LookupKey": "5d26ad862bee9f361d2c7babfc6100551aa9371e808dcf96bc778c9e80b8f2c7",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "BlownInInsulation",
        "StandardLookupValue": "BlownInInsulation",
        "LegacyOdataValue": "Blown-In Insulation"
    },
    {
        "LookupKey": "b2d8bc331d49e11dc52f8a282f95b557118b4abc87ad22320c2fab00673d2e7a",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "BoardAndBattenSiding",
        "StandardLookupValue": "BoardAndBattenSiding",
        "LegacyOdataValue": "Board & Batten Siding"
    },
    {
        "LookupKey": "c1d241efefb93ea68da16b9cc67f9c72fe814cda712957de6f7c0ce4adc2dd4b",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Brick",
        "StandardLookupValue": "Brick",
        "LegacyOdataValue": "Brick"
    },
    {
        "LookupKey": "a5eacab3d8f6a0430ab9c9def2d20144984c431f8ef12f10c662a7728fa6ff4d",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "BrickVeneer",
        "StandardLookupValue": "BrickVeneer",
        "LegacyOdataValue": "Brick Veneer"
    },
    {
        "LookupKey": "30c946f6beb67d8e20e67d031af025144e1f1ad86ea9c305c888ea57c942011c",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Cedar",
        "StandardLookupValue": "Cedar",
        "LegacyOdataValue": "Cedar"
    },
    {
        "LookupKey": "ec565515b3b31dbbc101df3fb38647a89a7c8cf9ae538f2abc38243ef3ba5d54",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "CementSiding",
        "StandardLookupValue": "CementSiding",
        "LegacyOdataValue": "Cement Siding"
    },
    {
        "LookupKey": "ea1f7c3ed099874fd3e48c59dd3418c8eaa68efebe4e5aa23f33c1af8528f8e0",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Clapboard",
        "StandardLookupValue": "Clapboard",
        "LegacyOdataValue": "Clapboard"
    },
    {
        "LookupKey": "c7a67e4bc35117963c1f8dd9c65388b4e8d1b9c98bceac3ca79e12e0b9dcb657",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Concrete",
        "StandardLookupValue": "Concrete",
        "LegacyOdataValue": "Concrete"
    },
    {
        "LookupKey": "96d3ecaca8ab924ca9b9180e4892c65d791ad422e41fbfcf297303b4331ad683",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "DuctsProfessionallyAirSealed",
        "StandardLookupValue": "DuctsProfessionallyAirSealed",
        "LegacyOdataValue": "Ducts Professionally Air-Sealed"
    },
    {
        "LookupKey": "be5476437f8ac80c6bf0a4dd0db839f328d1b9f49c9e40c78a84cb99d4a91f84",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "ExteriorDuctWorkIsInsulated",
        "StandardLookupValue": "ExteriorDuctWorkIsInsulated",
        "LegacyOdataValue": "Exterior Duct-Work is Insulated"
    },
    {
        "LookupKey": "5e500a8c920dad43bc23276ab1d34841d01f72472a603d9b7c20fa2246710a4f",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "FiberCement",
        "StandardLookupValue": "FiberCement",
        "LegacyOdataValue": "Fiber Cement"
    },
    {
        "LookupKey": "3f22956bd4846eb460456407379bb2cf5e98f6c4e595ebaf738f9c23fb2f00e0",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "FiberglassSiding",
        "StandardLookupValue": "FiberglassSiding",
        "LegacyOdataValue": "Fiberglass Siding"
    },
    {
        "LookupKey": "542634906ed3a43a64d1b88f846e16f211eaad073af21d6acd256862411a9d3d",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "FoamInsulation",
        "StandardLookupValue": "FoamInsulation",
        "LegacyOdataValue": "Foam Insulation"
    },
    {
        "LookupKey": "4bfbcc75e66a2751d79f1afea9594e38ac66e8579fe62f08eba94d778f325266",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Frame",
        "StandardLookupValue": "Frame",
        "LegacyOdataValue": "Frame"
    },
    {
        "LookupKey": "2f7df5f9a4d1e61c3563efd20c3913e4edc835b16915b65ce844ae0f71ca9d10",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Glass",
        "StandardLookupValue": "Glass",
        "LegacyOdataValue": "Glass"
    },
    {
        "LookupKey": "f6eb575cc2693b634397832f0ce09c4faa41e49ef420b49bd254625317d5dea6",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "HardiplankType",
        "StandardLookupValue": "HardiplankType",
        "LegacyOdataValue": "HardiPlank Type"
    },
    {
        "LookupKey": "1a247ca47f09f3a98d62ffd52086a1724a8bcf3b38aff0173214efcd85b959cb",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "IcatRecessedLighting",
        "StandardLookupValue": "IcatRecessedLighting",
        "LegacyOdataValue": "ICAT Recessed Lighting"
    },
    {
        "LookupKey": "1037afb3360e7a795d8bb4c926fa9117803cf8cc4383d7c49e5be1bfcbac4ad0",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "InsulatedConcreteForms",
        "StandardLookupValue": "InsulatedConcreteForms",
        "LegacyOdataValue": "ICFs Insulated Concrete Forms"
    },
    {
        "LookupKey": "f4b5b6c228496f6f452e2b28b691da406a5796908823ac5add7d3b0833ee0875",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "LapSiding",
        "StandardLookupValue": "LapSiding",
        "LegacyOdataValue": "Lap Siding"
    },
    {
        "LookupKey": "219fb261537a1d9209cc240059bb0e9b29a09dd6e23611ef0370edfc42d750c3",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Log",
        "StandardLookupValue": "Log",
        "LegacyOdataValue": "Log"
    },
    {
        "LookupKey": "f67455074c3e1c08bcb73b06cdffe92ac65931f5393085ea4c272e707390f7f6",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "LogSiding",
        "StandardLookupValue": "LogSiding",
        "LegacyOdataValue": "Log Siding"
    },
    {
        "LookupKey": "db473c3490662b181d692e9c97522b821b2fb4e4755fe65407b79acddbc1408d",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "LowVocInsulation",
        "StandardLookupValue": "LowVocInsulation",
        "LegacyOdataValue": "Low VOC Insulation"
    },
    {
        "LookupKey": "3ed2cf25540c836d4c4ddef8a6214523caabd697f54c5d40e8cebe6a559d0a74",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Masonite",
        "StandardLookupValue": "Masonite",
        "LegacyOdataValue": "Masonite"
    },
    {
        "LookupKey": "e032ce0cb9d0db5f3e7260c82b3405f68e54ef42e23dbfb112044e68bf92a0a2",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "MetalSiding",
        "StandardLookupValue": "MetalSiding",
        "LegacyOdataValue": "Metal Siding"
    },
    {
        "LookupKey": "3c581fe3cfa2f0a299a3b36b483dfbcb87d9cac04a4f141733f496de17e02b12",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "NaturalBuilding",
        "StandardLookupValue": "NaturalBuilding",
        "LegacyOdataValue": "Natural Building"
    },
    {
        "LookupKey": "f30e31edda77a387acb59635063a37b45052fa3c2c389a96758b79fa1de80584",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "25b18055431ca41047b781d60052453dc1840519aa8944a0ee26b671298a5c23",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Plaster",
        "StandardLookupValue": "Plaster",
        "LegacyOdataValue": "Plaster"
    },
    {
        "LookupKey": "122b75b627b79c85f214e0b0f68a40262df021c347526b1cd7365d885a31a3e3",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "RadiantBarrier",
        "StandardLookupValue": "RadiantBarrier",
        "LegacyOdataValue": "Radiant Barrier"
    },
    {
        "LookupKey": "0a0cdcbcdf0781e7a4227076698d9c8cd01a460cf6cd8fe6ac613067a02e5942",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "RammedEarth",
        "StandardLookupValue": "RammedEarth",
        "LegacyOdataValue": "Rammed Earth"
    },
    {
        "LookupKey": "96f1462e1d168d808fbaecaf7b9776a45a79462c9218de31062f9da545860e95",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "RecycledBioBasedInsulation",
        "StandardLookupValue": "RecycledBioBasedInsulation",
        "LegacyOdataValue": "Recycled/Bio-Based Insulation"
    },
    {
        "LookupKey": "2972c6799582843610b9464f441273996c5ed7509d70417e888a1c1eaf2d21d5",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "RedwoodSiding",
        "StandardLookupValue": "RedwoodSiding",
        "LegacyOdataValue": "Redwood Siding"
    },
    {
        "LookupKey": "4b5c41ca8365b5f9e075cc467c6ff034cd5790cb03e098d7aa0e8a22ff1243d0",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "f0e1652404e997ed51fc08df51f457cf659075f31d1efba80ab8d3fa318598ae",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "ShakeSiding",
        "StandardLookupValue": "ShakeSiding",
        "LegacyOdataValue": "Shake Siding"
    },
    {
        "LookupKey": "d832d960a9ab7b6ffa523884ee57a59ffde3e649f510470755442f9d40f46803",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "ShingleSiding",
        "StandardLookupValue": "ShingleSiding",
        "LegacyOdataValue": "Shingle Siding"
    },
    {
        "LookupKey": "0bfe6902ba3dc650e29f42c5b1a2bec9c8e2849cae371d404573af8f2a77226e",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "SlumpBlock",
        "StandardLookupValue": "SlumpBlock",
        "LegacyOdataValue": "Slump Block"
    },
    {
        "LookupKey": "fc92ebddedbbc20117e7f2b1e5733fd520a0159ef5436561a2615b8361bba1d1",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "SprayFoamInsulation",
        "StandardLookupValue": "SprayFoamInsulation",
        "LegacyOdataValue": "Spray Foam Insulation"
    },
    {
        "LookupKey": "f83e90a6e2962bba0175a3fa4509cd0682b70387ab51fdcbeae388fab6ecd720",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "SteelSiding",
        "StandardLookupValue": "SteelSiding",
        "LegacyOdataValue": "Steel Siding"
    },
    {
        "LookupKey": "6ce6f4c85dbe667fa7242fc823e347f7f7deabfdd3606a0bfe411a4a807806d3",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Stone",
        "StandardLookupValue": "Stone",
        "LegacyOdataValue": "Stone"
    },
    {
        "LookupKey": "e3fdce8a7dc426c002931214e1b31d5a8c7ee77eac03dbfb596a6b0ad358aaaa",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "StoneVeneer",
        "StandardLookupValue": "StoneVeneer",
        "LegacyOdataValue": "Stone Veneer"
    },
    {
        "LookupKey": "82c3f38a175db669f4867b3bee711eee568153c720da32c15274aad9928b9bed",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Straw",
        "StandardLookupValue": "Straw",
        "LegacyOdataValue": "Straw"
    },
    {
        "LookupKey": "df8fef343062b6f950e1550bc47eb094551edfd423817e26d7cbabcbd2e507d1",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Stucco",
        "StandardLookupValue": "Stucco",
        "LegacyOdataValue": "Stucco"
    },
    {
        "LookupKey": "db093a564e8d2cebcd871689220a304b19c00c9130dcf075c1a3e1654276d546",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "SyntheticStucco",
        "StandardLookupValue": "SyntheticStucco",
        "LegacyOdataValue": "Synthetic Stucco"
    },
    {
        "LookupKey": "41920f2fe04d0a48ddc5052cb23323860eecef70b3bf3ea4b4aae5cd61c9ec4c",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "Unknown",
        "StandardLookupValue": "Unknown",
        "LegacyOdataValue": "Unknown"
    },
    {
        "LookupKey": "a135c4b1fb82b679af5cfb1030ff0a587ca41549b7592bd15d07b505230f9922",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "VerticalSiding",
        "StandardLookupValue": "VerticalSiding",
        "LegacyOdataValue": "Vertical Siding"
    },
    {
        "LookupKey": "4b46db73661e52f9abe46a76439695e4ca34c9cc04af49ee0f5a153e4936a92d",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "VinylSiding",
        "StandardLookupValue": "VinylSiding",
        "LegacyOdataValue": "Vinyl Siding"
    },
    {
        "LookupKey": "a5cb2209a65d4fbb0317cdba643c6fa9eb0363ed5155d1f6018752a684e57997",
        "LookupName": "ConstructionMaterials",
        "LookupValue": "WoodSiding",
        "StandardLookupValue": "WoodSiding",
        "LegacyOdataValue": "Wood Siding"
    },
    {
        "LookupKey": "db5b9f715fdd6099f118f3fb46ef80bd638472f30bd8baf018c8a35c26ca7d9b",
        "LookupName": "Cooling",
        "LookupValue": "AtticFan",
        "StandardLookupValue": "AtticFan",
        "LegacyOdataValue": "Attic Fan"
    },
    {
        "LookupKey": "b8d85a41c5ea2533ef18827c55380739ec01f14bd429b27567ad6685196b7e6b",
        "LookupName": "Cooling",
        "LookupValue": "CeilingFans",
        "StandardLookupValue": "CeilingFans",
        "LegacyOdataValue": "Ceiling Fans"
    },
    {
        "LookupKey": "f11d489e2aa206733e64c6f08edbd672bc63176d7e50d39a511f120418ca495e",
        "LookupName": "Cooling",
        "LookupValue": "CentralAir",
        "StandardLookupValue": "CentralAir",
        "LegacyOdataValue": "Central Air"
    },
    {
        "LookupKey": "23ac317429ba7264dd1b2d57fbc44f828a8e59a63c2b7edd488d9e926bec93c4",
        "LookupName": "Cooling",
        "LookupValue": "Dual",
        "StandardLookupValue": "Dual",
        "LegacyOdataValue": "Dual"
    },
    {
        "LookupKey": "8565ad4d22c7db8abc16049710d2bac58663e86a7164ad0bf5e3796bf6cc2030",
        "LookupName": "Cooling",
        "LookupValue": "Ductless",
        "StandardLookupValue": "Ductless",
        "LegacyOdataValue": "Ductless"
    },
    {
        "LookupKey": "97ee3809f25c82d19be4a7b2b39ecb749c712ceca74a40c6cedb5c637fc0a659",
        "LookupName": "Cooling",
        "LookupValue": "Electric",
        "StandardLookupValue": "Electric",
        "LegacyOdataValue": "Electric"
    },
    {
        "LookupKey": "2031ff379faabb94bf9422049f417fc78cdf9364c108ff9d63a6a2d06109e27f",
        "LookupName": "Cooling",
        "LookupValue": "EnergyStarQualifiedEquipment",
        "StandardLookupValue": "EnergyStarQualifiedEquipment",
        "LegacyOdataValue": "ENERGY STAR Qualified Equipment"
    },
    {
        "LookupKey": "c0be1b5b7dfc3a059043ce7f3cc65c1a447da28ef0889cd4ab00750bfa886d17",
        "LookupName": "Cooling",
        "LookupValue": "EvaporativeCooling",
        "StandardLookupValue": "EvaporativeCooling",
        "LegacyOdataValue": "Evaporative Cooling"
    },
    {
        "LookupKey": "5f539575ea9a048c1b150ed0e319c123b9764356330e91d0072a8b171abce06c",
        "LookupName": "Cooling",
        "LookupValue": "ExhaustFan",
        "StandardLookupValue": "ExhaustFan",
        "LegacyOdataValue": "Exhaust Fan"
    },
    {
        "LookupKey": "0c5169920f1518f2c987ae78e976ddd30d5b94f720a958c1ab780f16f2198c3f",
        "LookupName": "Cooling",
        "LookupValue": "Gas",
        "StandardLookupValue": "Gas",
        "LegacyOdataValue": "Gas"
    },
    {
        "LookupKey": "dbade4ba8dd297216400449070fb5e1961a239e12124d340b124e7c2dd48da06",
        "LookupName": "Cooling",
        "LookupValue": "Geothermal",
        "StandardLookupValue": "Geothermal",
        "LegacyOdataValue": "Geothermal"
    },
    {
        "LookupKey": "a1f6a04426cb4429823853b4548e89cec900742f1dffc814e0835604db56b4c8",
        "LookupName": "Cooling",
        "LookupValue": "HeatPump",
        "StandardLookupValue": "HeatPump",
        "LegacyOdataValue": "Heat Pump"
    },
    {
        "LookupKey": "fab0453675ecca8f35ca5d7f94e7acecd9a29cb18d553e91050e4087b53fec1d",
        "LookupName": "Cooling",
        "LookupValue": "HumidityControl",
        "StandardLookupValue": "HumidityControl",
        "LegacyOdataValue": "Humidity Control"
    },
    {
        "LookupKey": "3d294462d0628ac8495d4a679c62597de0795144bc0b238de67e8f99418d427b",
        "LookupName": "Cooling",
        "LookupValue": "MultiUnits",
        "StandardLookupValue": "MultiUnits",
        "LegacyOdataValue": "Multi Units"
    },
    {
        "LookupKey": "53c22dd8ab0ddd5b17c724b23a097a998980771e7906ae46d2092eba1cca150b",
        "LookupName": "Cooling",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "fd68a4dfa140f724f8d57c32cdeaf373e314df42a2d92c50c49f51985b85ff60",
        "LookupName": "Cooling",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "f0e6852caedb1dbb9396f46bb8e979a31c5950a2ea04b17c2ec1a496ebea37df",
        "LookupName": "Cooling",
        "LookupValue": "RoofTurbines",
        "StandardLookupValue": "RoofTurbines",
        "LegacyOdataValue": "Roof Turbines"
    },
    {
        "LookupKey": "e0ed030bf57e4aa40ed20f417b95063fdd525d23438e185ab1bc8088b09cdb5a",
        "LookupName": "Cooling",
        "LookupValue": "SeparateMeters",
        "StandardLookupValue": "SeparateMeters",
        "LegacyOdataValue": "Separate Meters"
    },
    {
        "LookupKey": "d61e8ae8b1466c684e4c3aadb4079e681186eae91a55599dbecdf78c26bce32a",
        "LookupName": "Cooling",
        "LookupValue": "VariesByUnit",
        "StandardLookupValue": "VariesByUnit",
        "LegacyOdataValue": "Varies by Unit"
    },
    {
        "LookupKey": "ca501fedc04c9ad3e48b97c21c0fdb1d813cfd0ff7aaf455e3208565647e7232",
        "LookupName": "Cooling",
        "LookupValue": "WallUnits",
        "StandardLookupValue": "WallUnits",
        "LegacyOdataValue": "Wall Units"
    },
    {
        "LookupKey": "34ad31466d60ded8343f43678d618ab74eac9ab46ddce4c8cae57a9372f9699f",
        "LookupName": "Cooling",
        "LookupValue": "WallWindowUnits",
        "StandardLookupValue": "WallWindowUnits",
        "LegacyOdataValue": "Wall/Window Units"
    },
    {
        "LookupKey": "6b8b6d952f6e5e58043bd077c3e25f5b961e45ca2bc673f2aa3819518fa8de8d",
        "LookupName": "Cooling",
        "LookupValue": "WholeHouseFan",
        "StandardLookupValue": "WholeHouseFan",
        "LegacyOdataValue": "Whole House Fan"
    },
    {
        "LookupKey": "825e84e07e7f748487735738840b1d782cac3fe7aede364db4c15b304ee7e277",
        "LookupName": "Cooling",
        "LookupValue": "WindowUnits",
        "StandardLookupValue": "WindowUnits",
        "LegacyOdataValue": "Window Units"
    },
    {
        "LookupKey": "8c3f37c251213b1b6119145104fbb907352c97ad1f95f54059d23369e77683fd",
        "LookupName": "Cooling",
        "LookupValue": "Zoned",
        "StandardLookupValue": "Zoned",
        "LegacyOdataValue": "Zoned"
    },
    {
        "LookupKey": "6965ba6f66ee87152ca9a85e6f9c10eb8a437b3b0174fe9cfb88a72ccf067e55",
        "LookupName": "Country",
        "LookupValue": "AD",
        "StandardLookupValue": "AD",
        "LegacyOdataValue": "AD"
    },
    {
        "LookupKey": "903670fec6a3ed7b5afe51006f8e52d26110357cc56965c31c5867bfd198cba1",
        "LookupName": "Country",
        "LookupValue": "AE",
        "StandardLookupValue": "AE",
        "LegacyOdataValue": "AE"
    },
    {
        "LookupKey": "601012de4a8038d6b74f86fc0f6a6bb1808503a48d6f956a5faf0a0c9a94a734",
        "LookupName": "Country",
        "LookupValue": "AF",
        "StandardLookupValue": "AF",
        "LegacyOdataValue": "AF"
    },
    {
        "LookupKey": "75b7a1bacde4829a53fdad3a80913005ad0ab7669939ed64207776da56fd9152",
        "LookupName": "Country",
        "LookupValue": "AG",
        "StandardLookupValue": "AG",
        "LegacyOdataValue": "AG"
    },
    {
        "LookupKey": "e5f14b9b80fb90ec81d12065f3f113d1c4c268f1b5e7b4b11bbdb7d568351786",
        "LookupName": "Country",
        "LookupValue": "AI",
        "StandardLookupValue": "AI",
        "LegacyOdataValue": "AI"
    },
    {
        "LookupKey": "6713cca0d14b11a6590fd8eda3b2c5c6ba252e1f89fdfa80e12739a90406a037",
        "LookupName": "Country",
        "LookupValue": "AL",
        "StandardLookupValue": "AL",
        "LegacyOdataValue": "AL"
    },
    {
        "LookupKey": "385746ef6b2fc491a693a4debfb0ac6e00447b071525b5bb279533bce0e01399",
        "LookupName": "Country",
        "LookupValue": "AM",
        "StandardLookupValue": "AM",
        "LegacyOdataValue": "AM"
    },
    {
        "LookupKey": "9a63d567377610ed21c21d661d1c22462f06530d33d068fbb8a3943696190aa4",
        "LookupName": "Country",
        "LookupValue": "AN",
        "StandardLookupValue": "AN",
        "LegacyOdataValue": "AN"
    },
    {
        "LookupKey": "ccc1f57b8ba6ced443110910f3b03b9f5d90f92b85a88935f36a0a8f8a577717",
        "LookupName": "Country",
        "LookupValue": "AO",
        "StandardLookupValue": "AO",
        "LegacyOdataValue": "AO"
    },
    {
        "LookupKey": "0c284daea468ae7a087e4ae9deda7876b2efe69730295b4135f39ca90caa141e",
        "LookupName": "Country",
        "LookupValue": "AQ",
        "StandardLookupValue": "AQ",
        "LegacyOdataValue": "AQ"
    },
    {
        "LookupKey": "29515ce1bcd5b22be063e39a9de376c1c3610865771c53f4a77d6c532f9d9544",
        "LookupName": "Country",
        "LookupValue": "AR",
        "StandardLookupValue": "AR",
        "LegacyOdataValue": "AR"
    },
    {
        "LookupKey": "1d6f254a4bd2a53b7bcb76cc048e03ab712c7111a8b4f1f0a3b088b05c91979c",
        "LookupName": "Country",
        "LookupValue": "AS",
        "StandardLookupValue": "AS",
        "LegacyOdataValue": "AS"
    },
    {
        "LookupKey": "9d9663b2c3b881ca4791cd38f2b27a06b2d0cc9bc40f14d7a7b68dd52538b8e7",
        "LookupName": "Country",
        "LookupValue": "AT",
        "StandardLookupValue": "AT",
        "LegacyOdataValue": "AT"
    },
    {
        "LookupKey": "0a2f57cd6fde8d95ca138b8a0d582fcf87cf8c8c7521454ac586702d0fccb85b",
        "LookupName": "Country",
        "LookupValue": "AU",
        "StandardLookupValue": "AU",
        "LegacyOdataValue": "AU"
    },
    {
        "LookupKey": "df68e6ea31a614c294878be5e4e1045b0283ba26d9cd1de4496eaddefe43f0d2",
        "LookupName": "Country",
        "LookupValue": "AW",
        "StandardLookupValue": "AW",
        "LegacyOdataValue": "AW"
    },
    {
        "LookupKey": "49b6cd00dd25522cfb7abaf854efafcd4f16cf3a0de49e1095bab6ea84bb9f67",
        "LookupName": "Country",
        "LookupValue": "AX",
        "StandardLookupValue": "AX",
        "LegacyOdataValue": "AX"
    },
    {
        "LookupKey": "9f1647ba345868dea65ee76d86563e226daa372b2d12a49800e20e784b48af29",
        "LookupName": "Country",
        "LookupValue": "AZ",
        "StandardLookupValue": "AZ",
        "LegacyOdataValue": "AZ"
    },
    {
        "LookupKey": "181f5a6e712397bea8bae58048c02b5337e013b929fd32bc51bbd4556d61a14d",
        "LookupName": "Country",
        "LookupValue": "BA",
        "StandardLookupValue": "BA",
        "LegacyOdataValue": "BA"
    },
    {
        "LookupKey": "aa374a9b0ad0117b170eae2573f7d03a4e8a9fdb9139f70afc8950b43be63e2e",
        "LookupName": "Country",
        "LookupValue": "BB",
        "StandardLookupValue": "BB",
        "LegacyOdataValue": "BB"
    },
    {
        "LookupKey": "7f2d20340ed663534a0ffd91cb5953162cdb7882d217e608ee240a50e332aa61",
        "LookupName": "Country",
        "LookupValue": "BD",
        "StandardLookupValue": "BD",
        "LegacyOdataValue": "BD"
    },
    {
        "LookupKey": "7efa472d7d70c51c371392200dfe141c54cc7eab298a8a2b79e1d95dfbd73e83",
        "LookupName": "Country",
        "LookupValue": "BE",
        "StandardLookupValue": "BE",
        "LegacyOdataValue": "BE"
    },
    {
        "LookupKey": "beed0db984c87f9361d5705c1017d7419ac9e3b3e6af632f3a21b85e856d2944",
        "LookupName": "Country",
        "LookupValue": "BF",
        "StandardLookupValue": "BF",
        "LegacyOdataValue": "BF"
    },
    {
        "LookupKey": "7ca9be990ffb5277030069a3a2673eef9d45c1e7c55838a0edfc4bc7300e10e3",
        "LookupName": "Country",
        "LookupValue": "BG",
        "StandardLookupValue": "BG",
        "LegacyOdataValue": "BG"
    },
    {
        "LookupKey": "eebd49adac9b78ba87516c17558282f060f2da011018a37e4587d86ee4055033",
        "LookupName": "Country",
        "LookupValue": "BH",
        "StandardLookupValue": "BH",
        "LegacyOdataValue": "BH"
    },
    {
        "LookupKey": "31f0a415e844c6cbe304d2f7962a52a16f9cc4026b693b3128247bb33a81a7db",
        "LookupName": "Country",
        "LookupValue": "BI",
        "StandardLookupValue": "BI",
        "LegacyOdataValue": "BI"
    },
    {
        "LookupKey": "125769c4adf326d459716249da65365fc720056bdb94462cd50952e7c49b7d44",
        "LookupName": "Country",
        "LookupValue": "BJ",
        "StandardLookupValue": "BJ",
        "LegacyOdataValue": "BJ"
    },
    {
        "LookupKey": "63c53e9faed7e847de12d2d43e8f8c2ec13f8df87b06345a358699e12b7c917b",
        "LookupName": "Country",
        "LookupValue": "BL",
        "StandardLookupValue": "BL",
        "LegacyOdataValue": "BL"
    },
    {
        "LookupKey": "dfa879facc5942f1e127bb49198d0211b970958ee6fc896d766a9e215a2b53d0",
        "LookupName": "Country",
        "LookupValue": "BM",
        "StandardLookupValue": "BM",
        "LegacyOdataValue": "BM"
    },
    {
        "LookupKey": "c9a169a3c1220294c54cc34554fd69aeaa3e4cfd66e72cd5a15406e3526b249c",
        "LookupName": "Country",
        "LookupValue": "BN",
        "StandardLookupValue": "BN",
        "LegacyOdataValue": "BN"
    },
    {
        "LookupKey": "012d7fb37348d2d81372609552ade6337d67d3bf51668d6ee636be0fa059b723",
        "LookupName": "Country",
        "LookupValue": "BO",
        "StandardLookupValue": "BO",
        "LegacyOdataValue": "BO"
    },
    {
        "LookupKey": "f6009cf1c0ea43f9b34ad3eece736f9e290f32c3aa274b39c88a7892d2f86328",
        "LookupName": "Country",
        "LookupValue": "BR",
        "StandardLookupValue": "BR",
        "LegacyOdataValue": "BR"
    },
    {
        "LookupKey": "da2aac773811d5bf83a21fa8be6444a47d6825ac8611cf274822425883f75667",
        "LookupName": "Country",
        "LookupValue": "BS",
        "StandardLookupValue": "BS",
        "LegacyOdataValue": "BS"
    },
    {
        "LookupKey": "c261860ef17a957565b5a278a46cf6a1dd54758ea3d32be17c8830016bcf5b6a",
        "LookupName": "Country",
        "LookupValue": "BT",
        "StandardLookupValue": "BT",
        "LegacyOdataValue": "BT"
    },
    {
        "LookupKey": "58eabe1cc2762088d29b72a37b9f91ac58b6d5bdb9c9be5e6a14e884612bd939",
        "LookupName": "Country",
        "LookupValue": "BV",
        "StandardLookupValue": "BV",
        "LegacyOdataValue": "BV"
    },
    {
        "LookupKey": "64e8738ea795d6539ddab7dd3df54bb90067e7b2516559497ad4589a28018512",
        "LookupName": "Country",
        "LookupValue": "BW",
        "StandardLookupValue": "BW",
        "LegacyOdataValue": "BW"
    },
    {
        "LookupKey": "abf678abf0c3e646cec6a557fd67e66c6fe52b66f9fae67038570f484e85556c",
        "LookupName": "Country",
        "LookupValue": "BY",
        "StandardLookupValue": "BY",
        "LegacyOdataValue": "BY"
    },
    {
        "LookupKey": "de290d971d4d7ade6dca7badbf86cb1603676e01d06bec73158dc956a49fba7e",
        "LookupName": "Country",
        "LookupValue": "BZ",
        "StandardLookupValue": "BZ",
        "LegacyOdataValue": "BZ"
    },
    {
        "LookupKey": "b357ee798c3c1752ba7685841c3ef6608b0186ac692118992cddb4f1ffd6897f",
        "LookupName": "Country",
        "LookupValue": "CA",
        "StandardLookupValue": "CA",
        "LegacyOdataValue": "CA"
    },
    {
        "LookupKey": "19f6345649317e89bfadafda7f982eac5a7c9e94d480c8a7f94ce7d5bc0daad8",
        "LookupName": "Country",
        "LookupValue": "CC",
        "StandardLookupValue": "CC",
        "LegacyOdataValue": "CC"
    },
    {
        "LookupKey": "5ff0e9931ab32e7ab1d28db6c89482f25feac177ff7cd95a04e7f283424fce36",
        "LookupName": "Country",
        "LookupValue": "CD",
        "StandardLookupValue": "CD",
        "LegacyOdataValue": "CD"
    },
    {
        "LookupKey": "f7f5d2eccb813ca19ef873e081e35d9aaeef66eb540b55bb2aa7213efa12576e",
        "LookupName": "Country",
        "LookupValue": "CF",
        "StandardLookupValue": "CF",
        "LegacyOdataValue": "CF"
    },
    {
        "LookupKey": "e6df221975e91b7361e08138388be1ca447ff46b885947a10c8c4f76b4b8fd71",
        "LookupName": "Country",
        "LookupValue": "CG",
        "StandardLookupValue": "CG",
        "LegacyOdataValue": "CG"
    },
    {
        "LookupKey": "197de9c9ca334331e1bf2ec1f1bfa0ed49acfdf840d749bcfa99ed51d23e7342",
        "LookupName": "Country",
        "LookupValue": "CH",
        "StandardLookupValue": "CH",
        "LegacyOdataValue": "CH"
    },
    {
        "LookupKey": "0401527b9af405d463476967fce873f5e553ab34b61a63f7bf6f2e8025c45fb0",
        "LookupName": "Country",
        "LookupValue": "CI",
        "StandardLookupValue": "CI",
        "LegacyOdataValue": "CI"
    },
    {
        "LookupKey": "60c332f11786c88777f9fecad3ec008438899697771053016d0a2714b1400aca",
        "LookupName": "Country",
        "LookupValue": "CK",
        "StandardLookupValue": "CK",
        "LegacyOdataValue": "CK"
    },
    {
        "LookupKey": "995ba368413c4ad8e89d11df8dd0309cae40fd000196ea76a2d2f7bd6f9200df",
        "LookupName": "Country",
        "LookupValue": "CL",
        "StandardLookupValue": "CL",
        "LegacyOdataValue": "CL"
    },
    {
        "LookupKey": "8bba1735e7373caa10032655cd62cbbea31521dd7ea4a79a43068772ad8a4e8f",
        "LookupName": "Country",
        "LookupValue": "CM",
        "StandardLookupValue": "CM",
        "LegacyOdataValue": "CM"
    },
    {
        "LookupKey": "7070e88b129e70a2744fd28df60951d02eb75c1f76c6aade9450cb927a084d96",
        "LookupName": "Country",
        "LookupValue": "CN",
        "StandardLookupValue": "CN",
        "LegacyOdataValue": "CN"
    },
    {
        "LookupKey": "7185c169fe3d4ac7f3867e2243037eba6f10c5ea86ca6381692aedf9be68290b",
        "LookupName": "Country",
        "LookupValue": "CO",
        "StandardLookupValue": "CO",
        "LegacyOdataValue": "CO"
    },
    {
        "LookupKey": "559e001448eb284f19a753082382b791f9823656f6205389799a3023031c0f1d",
        "LookupName": "Country",
        "LookupValue": "CR",
        "StandardLookupValue": "CR",
        "LegacyOdataValue": "CR"
    },
    {
        "LookupKey": "ffb74f2080510a48226ee068aaa97c9940af8642ab38acfa61fcb2bdb48a3006",
        "LookupName": "Country",
        "LookupValue": "CU",
        "StandardLookupValue": "CU",
        "LegacyOdataValue": "CU"
    },
    {
        "LookupKey": "642b244e8f7e425600fd0baef7b522a5275eee22462c18c95fe5f6a028e3f487",
        "LookupName": "Country",
        "LookupValue": "CV",
        "StandardLookupValue": "CV",
        "LegacyOdataValue": "CV"
    },
    {
        "LookupKey": "79c6ffeee1e497fd72dce11673ad4aeda3d670b8dd9fd342f924088140a57a61",
        "LookupName": "Country",
        "LookupValue": "CX",
        "StandardLookupValue": "CX",
        "LegacyOdataValue": "CX"
    },
    {
        "LookupKey": "6e9becea7aacde72fab33e34853693cc61d18416d7d49287830f1edfe492b1cb",
        "LookupName": "Country",
        "LookupValue": "CY",
        "StandardLookupValue": "CY",
        "LegacyOdataValue": "CY"
    },
    {
        "LookupKey": "1c34ac9d7ffed618dfbf231c3d9c5de15e1e349873d9c02a8f3eb7a4df6c0d34",
        "LookupName": "Country",
        "LookupValue": "CZ",
        "StandardLookupValue": "CZ",
        "LegacyOdataValue": "CZ"
    },
    {
        "LookupKey": "71285554a4c3cafbbf65bfe5999082a715279041dbfae4483d80f7815048d34a",
        "LookupName": "Country",
        "LookupValue": "DE",
        "StandardLookupValue": "DE",
        "LegacyOdataValue": "DE"
    },
    {
        "LookupKey": "8c8830e4848993ddbaaff22b819a78d5d948f5e2e05c0e16c05764fa6b93966a",
        "LookupName": "Country",
        "LookupValue": "DJ",
        "StandardLookupValue": "DJ",
        "LegacyOdataValue": "DJ"
    },
    {
        "LookupKey": "42889f1b6eaf2fe1c5e51f0fa808e4da4c27262c89675d629762e34fcd2d1475",
        "LookupName": "Country",
        "LookupValue": "DK",
        "StandardLookupValue": "DK",
        "LegacyOdataValue": "DK"
    },
    {
        "LookupKey": "9b88908a88b70ee984d319344cd79d5c2d30fbff0fb920707bd6d4b2d8b5b2fa",
        "LookupName": "Country",
        "LookupValue": "DM",
        "StandardLookupValue": "DM",
        "LegacyOdataValue": "DM"
    },
    {
        "LookupKey": "a0d29ec420854512176619657542be9070ef713e2e61ebbbec6affb200c0f335",
        "LookupName": "Country",
        "LookupValue": "DO",
        "StandardLookupValue": "DO",
        "LegacyOdataValue": "DO"
    },
    {
        "LookupKey": "f710a57c79de7c12ae5716be064ce41331386e17d89216baa9853ab35588b28b",
        "LookupName": "Country",
        "LookupValue": "DZ",
        "StandardLookupValue": "DZ",
        "LegacyOdataValue": "DZ"
    },
    {
        "LookupKey": "477344298380cf1bfe4f036118757b027d9ff5be33336af54c81e61818e1092d",
        "LookupName": "Country",
        "LookupValue": "EC",
        "StandardLookupValue": "EC",
        "LegacyOdataValue": "EC"
    },
    {
        "LookupKey": "2800b42a9ee8e268148932c3f8a176bc5f72849ea03d464f587bfec1e48fc983",
        "LookupName": "Country",
        "LookupValue": "EE",
        "StandardLookupValue": "EE",
        "LegacyOdataValue": "EE"
    },
    {
        "LookupKey": "f40a63d10b25925e9d4e786a8dd44cff32b37cb939d1a6dfc07e3946acc7336f",
        "LookupName": "Country",
        "LookupValue": "EG",
        "StandardLookupValue": "EG",
        "LegacyOdataValue": "EG"
    },
    {
        "LookupKey": "0d9a0f5c6d5824c7a8d78df71776a47c8338f57809c4f21687f167945937cc3e",
        "LookupName": "Country",
        "LookupValue": "EH",
        "StandardLookupValue": "EH",
        "LegacyOdataValue": "EH"
    },
    {
        "LookupKey": "314a2ad281957f099a45c0fa64ff39a23375a66da807209ac21864fafc44419b",
        "LookupName": "Country",
        "LookupValue": "ER",
        "StandardLookupValue": "ER",
        "LegacyOdataValue": "ER"
    },
    {
        "LookupKey": "7c8058193ea11c76ffa61d04ad4326308ff1e2cf8bddab161c3e9e1b286d8868",
        "LookupName": "Country",
        "LookupValue": "ES",
        "StandardLookupValue": "ES",
        "LegacyOdataValue": "ES"
    },
    {
        "LookupKey": "18bbcde2c1f7451f1f072dfbccc2a1708c0c867eb83a546929002739a8681289",
        "LookupName": "Country",
        "LookupValue": "ET",
        "StandardLookupValue": "ET",
        "LegacyOdataValue": "ET"
    },
    {
        "LookupKey": "952f0008bdc839e7f37fc9c7e477d297c8c673be76daf8659af4f759eba52dc9",
        "LookupName": "Country",
        "LookupValue": "FI",
        "StandardLookupValue": "FI",
        "LegacyOdataValue": "FI"
    },
    {
        "LookupKey": "3d37a9880178102f19a8a4e3a5ee5d65b8018824baa12197ec488e628620289c",
        "LookupName": "Country",
        "LookupValue": "FJ",
        "StandardLookupValue": "FJ",
        "LegacyOdataValue": "FJ"
    },
    {
        "LookupKey": "66a5334bae60b8de9b7b905d0fcc82169f3076420bd76cee80ef7502ce2ce19f",
        "LookupName": "Country",
        "LookupValue": "FK",
        "StandardLookupValue": "FK",
        "LegacyOdataValue": "FK"
    },
    {
        "LookupKey": "facece1b982b7daa92c8e08fc853dab6bf17f58fc2ae96987c42ee1926b1cbd2",
        "LookupName": "Country",
        "LookupValue": "FM",
        "StandardLookupValue": "FM",
        "LegacyOdataValue": "FM"
    },
    {
        "LookupKey": "901eefbc431b33aa22c7dfc43bfed0c82f6f42c80c9262e524c5908c03a12c4f",
        "LookupName": "Country",
        "LookupValue": "FO",
        "StandardLookupValue": "FO",
        "LegacyOdataValue": "FO"
    },
    {
        "LookupKey": "d46aa87e9376c8ebbcc9767c26c83e9f47c9fae5b898704ca92d8e733b71cca1",
        "LookupName": "Country",
        "LookupValue": "FR",
        "StandardLookupValue": "FR",
        "LegacyOdataValue": "FR"
    },
    {
        "LookupKey": "9260d1a302d29075e1f3d0d965075375564f2049a18f24718cf8ad6286d75759",
        "LookupName": "Country",
        "LookupValue": "GA",
        "StandardLookupValue": "GA",
        "LegacyOdataValue": "GA"
    },
    {
        "LookupKey": "4d932d4d2c1582b01483149d22b9b2bb8751282ac94cbcccf68f6612e5a6e50f",
        "LookupName": "Country",
        "LookupValue": "GB",
        "StandardLookupValue": "GB",
        "LegacyOdataValue": "GB"
    },
    {
        "LookupKey": "50858b0163d9cbe98976da6a4a436f1f8b0e22d12f033be8d5da1eed5c94f9d1",
        "LookupName": "Country",
        "LookupValue": "GD",
        "StandardLookupValue": "GD",
        "LegacyOdataValue": "GD"
    },
    {
        "LookupKey": "614bb240d23aded8e02718e9659bffe6deadaf4580d8f5e9da62f42d805bd9df",
        "LookupName": "Country",
        "LookupValue": "GE",
        "StandardLookupValue": "GE",
        "LegacyOdataValue": "GE"
    },
    {
        "LookupKey": "b761e7009fa9a91dd99763c4a00126a79145779fe5011cc606c1551723d971a5",
        "LookupName": "Country",
        "LookupValue": "GF",
        "StandardLookupValue": "GF",
        "LegacyOdataValue": "GF"
    },
    {
        "LookupKey": "97e3a5dee06c5c6a352841d3e67399f94774048740ab3c9ce9bcc57c1223755d",
        "LookupName": "Country",
        "LookupValue": "GG",
        "StandardLookupValue": "GG",
        "LegacyOdataValue": "GG"
    },
    {
        "LookupKey": "31d1c59f6068ece1cf1b78e357d921e7e3bd020e89269520411cb3c423f8e131",
        "LookupName": "Country",
        "LookupValue": "GH",
        "StandardLookupValue": "GH",
        "LegacyOdataValue": "GH"
    },
    {
        "LookupKey": "ac8fc64f31c0a0e1c79316718d6d798169647de8e8538604a734ded20705129a",
        "LookupName": "Country",
        "LookupValue": "GI",
        "StandardLookupValue": "GI",
        "LegacyOdataValue": "GI"
    },
    {
        "LookupKey": "cb8bf5188457ee60733b1b8417f1853874ec5e84e8f94963d1a5ee67d2da68c7",
        "LookupName": "Country",
        "LookupValue": "GL",
        "StandardLookupValue": "GL",
        "LegacyOdataValue": "GL"
    },
    {
        "LookupKey": "008b932d4f7f496a2faa417ff4ff3fbb59b0045a405693f5b759e5d6cd5b0be4",
        "LookupName": "Country",
        "LookupValue": "GM",
        "StandardLookupValue": "GM",
        "LegacyOdataValue": "GM"
    },
    {
        "LookupKey": "e84d0e5b8615e2794affb938b125d9cfad25a0bd6062fb3b75d437a032344802",
        "LookupName": "Country",
        "LookupValue": "GN",
        "StandardLookupValue": "GN",
        "LegacyOdataValue": "GN"
    },
    {
        "LookupKey": "ff30dc10e9af1e63f6c03ca61d370ae3b75adcc3a693e6fdcfa6d400c3591f18",
        "LookupName": "Country",
        "LookupValue": "GP",
        "StandardLookupValue": "GP",
        "LegacyOdataValue": "GP"
    },
    {
        "LookupKey": "c3214051205bd0736e2be4b7e691c09419a695055b04ec497d296773b75b8aa4",
        "LookupName": "Country",
        "LookupValue": "GQ",
        "StandardLookupValue": "GQ",
        "LegacyOdataValue": "GQ"
    },
    {
        "LookupKey": "700f4811005d6a27280ae1d0293637d7df18465733033468cd64f2e0ca6f9bc1",
        "LookupName": "Country",
        "LookupValue": "GR",
        "StandardLookupValue": "GR",
        "LegacyOdataValue": "GR"
    },
    {
        "LookupKey": "6b4c5de2c4e4d9ac9716f9c877a82ae0450e0327f826404d5746123d8a41f657",
        "LookupName": "Country",
        "LookupValue": "GS",
        "StandardLookupValue": "GS",
        "LegacyOdataValue": "GS"
    },
    {
        "LookupKey": "af9979cb50965ea0f3fb5bebe26b6cf8b6104dcf291f6113ff33226cbec2a6ba",
        "LookupName": "Country",
        "LookupValue": "GT",
        "StandardLookupValue": "GT",
        "LegacyOdataValue": "GT"
    },
    {
        "LookupKey": "89176bd53f39fc3c304f7ed084a76418aded09ffef9960b0d7e8c377e6740655",
        "LookupName": "Country",
        "LookupValue": "GU",
        "StandardLookupValue": "GU",
        "LegacyOdataValue": "GU"
    },
    {
        "LookupKey": "1603829d016f6cc7e2cd0606fe408f241ed495cd8cdf29026f23e06ca4aefd90",
        "LookupName": "Country",
        "LookupValue": "GW",
        "StandardLookupValue": "GW",
        "LegacyOdataValue": "GW"
    },
    {
        "LookupKey": "3c52a76f4a6e654de3489109aa5c2dc88d589d7752a21d5453f41dd56fdbe145",
        "LookupName": "Country",
        "LookupValue": "GY",
        "StandardLookupValue": "GY",
        "LegacyOdataValue": "GY"
    },
    {
        "LookupKey": "8eee76884718dcc068e3c3fce97178568702f11f7fe52f2eef352783f8b62b71",
        "LookupName": "Country",
        "LookupValue": "HK",
        "StandardLookupValue": "HK",
        "LegacyOdataValue": "HK"
    },
    {
        "LookupKey": "692c0d6d85bd8caa40fb07948ba31ddb6a29ec6bbf82e645b6213d58d3250c8e",
        "LookupName": "Country",
        "LookupValue": "HM",
        "StandardLookupValue": "HM",
        "LegacyOdataValue": "HM"
    },
    {
        "LookupKey": "6130981b0ad3fd8289a220f429e312f6a9633659c19eb41b0d5dcb4d589d3053",
        "LookupName": "Country",
        "LookupValue": "HN",
        "StandardLookupValue": "HN",
        "LegacyOdataValue": "HN"
    },
    {
        "LookupKey": "8f3b19b0dd4b15f848640f5aa90847b18ffcdc85f5e8f772ae4f8581dcce08b8",
        "LookupName": "Country",
        "LookupValue": "HR",
        "StandardLookupValue": "HR",
        "LegacyOdataValue": "HR"
    },
    {
        "LookupKey": "15020615a1a4f32175510d55fd49da7482951fba59ec88a80594895dc4a0b196",
        "LookupName": "Country",
        "LookupValue": "HT",
        "StandardLookupValue": "HT",
        "LegacyOdataValue": "HT"
    },
    {
        "LookupKey": "b46779d03b25827b9b4695a1cc61875a9fee88d8ed43dce575157871fb59e7f0",
        "LookupName": "Country",
        "LookupValue": "HU",
        "StandardLookupValue": "HU",
        "LegacyOdataValue": "HU"
    },
    {
        "LookupKey": "eb0d451c06924e923e57d3bb5e6249d4776189dd0c58af00a2d5f3dc08a21986",
        "LookupName": "Country",
        "LookupValue": "ID",
        "StandardLookupValue": "ID",
        "LegacyOdataValue": "ID"
    },
    {
        "LookupKey": "4f592cea17a5889349a7046ffcb33bd1dfdc67e747497f66ba923363342b667c",
        "LookupName": "Country",
        "LookupValue": "IE",
        "StandardLookupValue": "IE",
        "LegacyOdataValue": "IE"
    },
    {
        "LookupKey": "67c9ef89522dcc3329947040c12674640dc78a78a87d7ce591b12e7beaf0bb65",
        "LookupName": "Country",
        "LookupValue": "IL",
        "StandardLookupValue": "IL",
        "LegacyOdataValue": "IL"
    },
    {
        "LookupKey": "a05107ed94d2b8900a8c8201032ef3b5bd12e1293d98b6fca388380216d4b366",
        "LookupName": "Country",
        "LookupValue": "IM",
        "StandardLookupValue": "IM",
        "LegacyOdataValue": "IM"
    },
    {
        "LookupKey": "6196b96e38f8a5bff3de9e99d25df74b9520b8dd1c9adbd401fafea1bc034c11",
        "LookupName": "Country",
        "LookupValue": "IN",
        "StandardLookupValue": "IN",
        "LegacyOdataValue": "IN"
    },
    {
        "LookupKey": "7417903dacf2aef3074b56a77fcf186e1915aa8125cf55f7a491ce444caaa993",
        "LookupName": "Country",
        "LookupValue": "IO",
        "StandardLookupValue": "IO",
        "LegacyOdataValue": "IO"
    },
    {
        "LookupKey": "01bd80d1384b53304a94f2ba90faeb4250773388d08b615ba384a0a17f30dc57",
        "LookupName": "Country",
        "LookupValue": "IQ",
        "StandardLookupValue": "IQ",
        "LegacyOdataValue": "IQ"
    },
    {
        "LookupKey": "6176cc59678e4ddf4bc7a75632994f2db5f9b49bd04337d3cf904b669eb8c61e",
        "LookupName": "Country",
        "LookupValue": "IR",
        "StandardLookupValue": "IR",
        "LegacyOdataValue": "IR"
    },
    {
        "LookupKey": "1570c2f48d5c3dc96a02fd5b5c60f90489eb2797b68d28726c4730e3f3dc8599",
        "LookupName": "Country",
        "LookupValue": "IS",
        "StandardLookupValue": "IS",
        "LegacyOdataValue": "IS"
    },
    {
        "LookupKey": "742b4c7d5d886ac16e1cb95e00e02642366e688d2cc9a47704a8e27a9cec0d25",
        "LookupName": "Country",
        "LookupValue": "IT",
        "StandardLookupValue": "IT",
        "LegacyOdataValue": "IT"
    },
    {
        "LookupKey": "d8031375283be38979b781e97733fce5c85d947bad3b9724b9b058762594e863",
        "LookupName": "Country",
        "LookupValue": "JE",
        "StandardLookupValue": "JE",
        "LegacyOdataValue": "JE"
    },
    {
        "LookupKey": "2e9b84bcea61d79e3e8c7239139746616a4adf2c177fe514c0217a5c7340f261",
        "LookupName": "Country",
        "LookupValue": "JM",
        "StandardLookupValue": "JM",
        "LegacyOdataValue": "JM"
    },
    {
        "LookupKey": "2d1aedb64447eba192c13d33dfbc11c319f00321ba053567359416fadafe8220",
        "LookupName": "Country",
        "LookupValue": "JO",
        "StandardLookupValue": "JO",
        "LegacyOdataValue": "JO"
    },
    {
        "LookupKey": "d6062603dcfe71690c628c68cbfa0149a895dcc5c5c0be36a66a67c44c333c4a",
        "LookupName": "Country",
        "LookupValue": "JP",
        "StandardLookupValue": "JP",
        "LegacyOdataValue": "JP"
    },
    {
        "LookupKey": "7dbc8910216b87ea222bb8fc77686136957591ab313c67f2f1ddc5ed30e6dcc1",
        "LookupName": "Country",
        "LookupValue": "KE",
        "StandardLookupValue": "KE",
        "LegacyOdataValue": "KE"
    },
    {
        "LookupKey": "f0b3b6e206e3b1a1523c69ee62b0da21c7083a9368cbd2046f6c04366cfb20ba",
        "LookupName": "Country",
        "LookupValue": "KG",
        "StandardLookupValue": "KG",
        "LegacyOdataValue": "KG"
    },
    {
        "LookupKey": "8e579447c7c96fc3b78eddf8731fdd81bacaa0f3ec14cdc6498cc94d4b6e9297",
        "LookupName": "Country",
        "LookupValue": "KH",
        "StandardLookupValue": "KH",
        "LegacyOdataValue": "KH"
    },
    {
        "LookupKey": "d487c56956090935fb1aa02864f25ac3818f795aaec6a307f094e97346fb5f10",
        "LookupName": "Country",
        "LookupValue": "KI",
        "StandardLookupValue": "KI",
        "LegacyOdataValue": "KI"
    },
    {
        "LookupKey": "356729ef7f860ab847ea5fcf3c1c86a7cd329f2363c45b011381b09afc375d54",
        "LookupName": "Country",
        "LookupValue": "KM",
        "StandardLookupValue": "KM",
        "LegacyOdataValue": "KM"
    },
    {
        "LookupKey": "e9d0b2f6c91f8246b04b3f862f22e37c2dd8c16220ea69e5ac1f457c8b97eed1",
        "LookupName": "Country",
        "LookupValue": "KN",
        "StandardLookupValue": "KN",
        "LegacyOdataValue": "KN"
    },
    {
        "LookupKey": "8532a8bc7871f85cc52d5abc5f0dd084ae63cbb100122f630d3f4a66618cae21",
        "LookupName": "Country",
        "LookupValue": "KP",
        "StandardLookupValue": "KP",
        "LegacyOdataValue": "KP"
    },
    {
        "LookupKey": "4f3bdb55353b038d82b1881f25034fe2594d494dd971658fc6c9c2d543030ae8",
        "LookupName": "Country",
        "LookupValue": "KR",
        "StandardLookupValue": "KR",
        "LegacyOdataValue": "KR"
    },
    {
        "LookupKey": "20df3262d0e65a520b830d16b2ee568024db85a6d60348f28f1a4d06dc363127",
        "LookupName": "Country",
        "LookupValue": "KW",
        "StandardLookupValue": "KW",
        "LegacyOdataValue": "KW"
    },
    {
        "LookupKey": "1e3c3bdb5e52c27ef1d035c6ffc102ed40511e261bb9700989464c5b5a94aa49",
        "LookupName": "Country",
        "LookupValue": "KY",
        "StandardLookupValue": "KY",
        "LegacyOdataValue": "KY"
    },
    {
        "LookupKey": "da442704b534b0ee0900e666b35f080ec79b63fcc6348f3c4cdb8cb74cbdb9db",
        "LookupName": "Country",
        "LookupValue": "KZ",
        "StandardLookupValue": "KZ",
        "LegacyOdataValue": "KZ"
    },
    {
        "LookupKey": "c40f9484c440e43ed3032c8c01740d0a7eaabd454b6bddbaa29c4dc62ebaf3b8",
        "LookupName": "Country",
        "LookupValue": "LA",
        "StandardLookupValue": "LA",
        "LegacyOdataValue": "LA"
    },
    {
        "LookupKey": "c20abdd5041ab319af4343c9eda69cc6b225621ea9204c897c790d36d5ac6be1",
        "LookupName": "Country",
        "LookupValue": "LB",
        "StandardLookupValue": "LB",
        "LegacyOdataValue": "LB"
    },
    {
        "LookupKey": "181c73a5b3d8ac84e5c1c7460191125030602b59551204c33865937673c44d87",
        "LookupName": "Country",
        "LookupValue": "LC",
        "StandardLookupValue": "LC",
        "LegacyOdataValue": "LC"
    },
    {
        "LookupKey": "05c33bf1e342d3c0402433d40c68bd90c947bc05196cd2cde68bb8b62e0066b2",
        "LookupName": "Country",
        "LookupValue": "LI",
        "StandardLookupValue": "LI",
        "LegacyOdataValue": "LI"
    },
    {
        "LookupKey": "e798c19bbc3461a1f041b4b493be8ac12e3d5346a866c4fc26b2d702ec5968aa",
        "LookupName": "Country",
        "LookupValue": "LK",
        "StandardLookupValue": "LK",
        "LegacyOdataValue": "LK"
    },
    {
        "LookupKey": "d7587b4618119a96b50a2a16919d2e95de09c01689d18f0039b640f2465871b2",
        "LookupName": "Country",
        "LookupValue": "LR",
        "StandardLookupValue": "LR",
        "LegacyOdataValue": "LR"
    },
    {
        "LookupKey": "c1ae272dac7634a95750777b68ded849f4ed166b0fb7cda1b0f0faf20bb84ebf",
        "LookupName": "Country",
        "LookupValue": "LS",
        "StandardLookupValue": "LS",
        "LegacyOdataValue": "LS"
    },
    {
        "LookupKey": "da57533978c4c0c176d807acef10e540302d719eb73746be1e803b1e0e6d4acb",
        "LookupName": "Country",
        "LookupValue": "LT",
        "StandardLookupValue": "LT",
        "LegacyOdataValue": "LT"
    },
    {
        "LookupKey": "f8f3a0ac9a930292e28153bed8e3face1646e830ba175d9144034fde01235e25",
        "LookupName": "Country",
        "LookupValue": "LU",
        "StandardLookupValue": "LU",
        "LegacyOdataValue": "LU"
    },
    {
        "LookupKey": "ff413557c3e18389603408c40d3483ae6ee8ab0be2739909f482e8166e5f4818",
        "LookupName": "Country",
        "LookupValue": "LV",
        "StandardLookupValue": "LV",
        "LegacyOdataValue": "LV"
    },
    {
        "LookupKey": "8be5fd42d522c8deb53ee39167c8fb02c267b50a6bb9300f3e4dbb6f1ec67f71",
        "LookupName": "Country",
        "LookupValue": "LY",
        "StandardLookupValue": "LY",
        "LegacyOdataValue": "LY"
    },
    {
        "LookupKey": "be6c7a78e628f6338c9f0a9e943508b1cb20c47c73771050c86958ebc2f2972a",
        "LookupName": "Country",
        "LookupValue": "MA",
        "StandardLookupValue": "MA",
        "LegacyOdataValue": "MA"
    },
    {
        "LookupKey": "f94a0561cba09a6fa5ed926ddc92cdbef428e1b316e526ed8bf5de6e415deba6",
        "LookupName": "Country",
        "LookupValue": "MC",
        "StandardLookupValue": "MC",
        "LegacyOdataValue": "MC"
    },
    {
        "LookupKey": "d2a6620e9f7c350f9cadb4e35cc8ffe0513c26fcc5bfb7f229f6624b79bc318e",
        "LookupName": "Country",
        "LookupValue": "MD",
        "StandardLookupValue": "MD",
        "LegacyOdataValue": "MD"
    },
    {
        "LookupKey": "2b49eb875354993df520e7f8491a53c60668f6b71d2edb0437fccb1b559115df",
        "LookupName": "Country",
        "LookupValue": "ME",
        "StandardLookupValue": "ME",
        "LegacyOdataValue": "ME"
    },
    {
        "LookupKey": "ff6df8bcdf9aba941a484948be7e7cec24dcf8817126227c95e6a2bfa7108079",
        "LookupName": "Country",
        "LookupValue": "MF",
        "StandardLookupValue": "MF",
        "LegacyOdataValue": "MF"
    },
    {
        "LookupKey": "d712655199708c92be1d30cd2f777853ae831cf5bc3d487986f7ac6d74fec4d1",
        "LookupName": "Country",
        "LookupValue": "MG",
        "StandardLookupValue": "MG",
        "LegacyOdataValue": "MG"
    },
    {
        "LookupKey": "00d09dcdaeae592517d0ac965965bbb76c27ad5717c8687254f47631f16bcbdc",
        "LookupName": "Country",
        "LookupValue": "MH",
        "StandardLookupValue": "MH",
        "LegacyOdataValue": "MH"
    },
    {
        "LookupKey": "d72a70d2c4f94119c276869d8161584dd764ee47a12af49d0c2c289d17c50425",
        "LookupName": "Country",
        "LookupValue": "MK",
        "StandardLookupValue": "MK",
        "LegacyOdataValue": "MK"
    },
    {
        "LookupKey": "305621df6f4cc3c4a08c6b01fc092787a063d62f455ddb6cefb4cff8943c5be1",
        "LookupName": "Country",
        "LookupValue": "ML",
        "StandardLookupValue": "ML",
        "LegacyOdataValue": "ML"
    },
    {
        "LookupKey": "e327a0d9c207a349590de1778504ef2d1f73bea1d1c6e1c5761aac6495077875",
        "LookupName": "Country",
        "LookupValue": "MM",
        "StandardLookupValue": "MM",
        "LegacyOdataValue": "MM"
    },
    {
        "LookupKey": "1c64ffcd538fef2c1bfdb8f4597d7b8e0db4063001b95a5bb940a60f4147e4ff",
        "LookupName": "Country",
        "LookupValue": "MN",
        "StandardLookupValue": "MN",
        "LegacyOdataValue": "MN"
    },
    {
        "LookupKey": "4ca6f88f4c88a086d9731324338c0cb14da698ccea78ecbcedbdc5f967571b2f",
        "LookupName": "Country",
        "LookupValue": "MO",
        "StandardLookupValue": "MO",
        "LegacyOdataValue": "MO"
    },
    {
        "LookupKey": "2293e6a0f295d47f2f77bb16beb42d0a4c2231b71fec8f11679ccfa72363abcd",
        "LookupName": "Country",
        "LookupValue": "MP",
        "StandardLookupValue": "MP",
        "LegacyOdataValue": "MP"
    },
    {
        "LookupKey": "a1731af02176f8b2745a7c64717f6cd6c02025a83442f938ca7163ea2abbc996",
        "LookupName": "Country",
        "LookupValue": "MQ",
        "StandardLookupValue": "MQ",
        "LegacyOdataValue": "MQ"
    },
    {
        "LookupKey": "a08d74ee465ddcb9d0c812fc358b1f391a7dce55e6be3688d899ea24d3b70fb8",
        "LookupName": "Country",
        "LookupValue": "MR",
        "StandardLookupValue": "MR",
        "LegacyOdataValue": "MR"
    },
    {
        "LookupKey": "3f4552ab0d9b675f2944fdd6d3687997eeb17904e282b2b75febfc047ac48e84",
        "LookupName": "Country",
        "LookupValue": "MS",
        "StandardLookupValue": "MS",
        "LegacyOdataValue": "MS"
    },
    {
        "LookupKey": "6abc79ff568e5affffffb2994c897c378355d703c7565346116318045e0a7c2b",
        "LookupName": "Country",
        "LookupValue": "MT",
        "StandardLookupValue": "MT",
        "LegacyOdataValue": "MT"
    },
    {
        "LookupKey": "49579c1b1d1bff995f7516e76544bdc84cb3d3b7403bfa4864b3571bfc4f82b3",
        "LookupName": "Country",
        "LookupValue": "MU",
        "StandardLookupValue": "MU",
        "LegacyOdataValue": "MU"
    },
    {
        "LookupKey": "c56c8d2822a38eb4b8a0f2357ca3d68fab9d306f60eecdd67f69c6e53539f784",
        "LookupName": "Country",
        "LookupValue": "MV",
        "StandardLookupValue": "MV",
        "LegacyOdataValue": "MV"
    },
    {
        "LookupKey": "11802ebb84525eb74fb8cd63da10b3e524a296eca930c5e6c7719f585c977802",
        "LookupName": "Country",
        "LookupValue": "MW",
        "StandardLookupValue": "MW",
        "LegacyOdataValue": "MW"
    },
    {
        "LookupKey": "6e2334a014545affbcd078cf22b4035bee5ae4319b7a1255cf030fe023bc0fdf",
        "LookupName": "Country",
        "LookupValue": "MX",
        "StandardLookupValue": "MX",
        "LegacyOdataValue": "MX"
    },
    {
        "LookupKey": "c65ac0dc1eaeba829b2d20734aeed38953470032a15649fe0d74d69e752c3a80",
        "LookupName": "Country",
        "LookupValue": "MY",
        "StandardLookupValue": "MY",
        "LegacyOdataValue": "MY"
    },
    {
        "LookupKey": "80f7231c98b6c9c0766192bb9466c15d57c16e8d85c579968ddcf42a2837a137",
        "LookupName": "Country",
        "LookupValue": "MZ",
        "StandardLookupValue": "MZ",
        "LegacyOdataValue": "MZ"
    },
    {
        "LookupKey": "72f353be72c8728161a76299e8be41d732bab900e431023185dff1a0755a047c",
        "LookupName": "Country",
        "LookupValue": "NA",
        "StandardLookupValue": "NA",
        "LegacyOdataValue": "NA"
    },
    {
        "LookupKey": "0cd9e3fbedb0344712a8459bf90a575f6a777b80dafb9137b1b8d2f9038edc3a",
        "LookupName": "Country",
        "LookupValue": "NC",
        "StandardLookupValue": "NC",
        "LegacyOdataValue": "NC"
    },
    {
        "LookupKey": "2b2f6917a04978306c9202e3a509d9c76004bac8f1a304cc6e5893590da752f5",
        "LookupName": "Country",
        "LookupValue": "NE",
        "StandardLookupValue": "NE",
        "LegacyOdataValue": "NE"
    },
    {
        "LookupKey": "cbcbf2a3319a48db660623e58db3dbdf7e624b86942958b492c7f5fca3064804",
        "LookupName": "Country",
        "LookupValue": "NF",
        "StandardLookupValue": "NF",
        "LegacyOdataValue": "NF"
    },
    {
        "LookupKey": "9326241c765bbbfe1e2c1513bc703d4cfa32110fc6347a9119d3367e96e2c2ba",
        "LookupName": "Country",
        "LookupValue": "NG",
        "StandardLookupValue": "NG",
        "LegacyOdataValue": "NG"
    },
    {
        "LookupKey": "f68c5a52d297bb823e099e27a9c3e7eb3029cb37ce8d1d70610f9eb8f53059bf",
        "LookupName": "Country",
        "LookupValue": "NI",
        "StandardLookupValue": "NI",
        "LegacyOdataValue": "NI"
    },
    {
        "LookupKey": "d8097e2107baac232f35d21f55640abe26992f04637ab35886d360599eae29a3",
        "LookupName": "Country",
        "LookupValue": "NL",
        "StandardLookupValue": "NL",
        "LegacyOdataValue": "NL"
    },
    {
        "LookupKey": "8481d9342968e310fb20be2900307d17f8bff8336a3752dc02a1050acd25cca4",
        "LookupName": "Country",
        "LookupValue": "NP",
        "StandardLookupValue": "NP",
        "LegacyOdataValue": "NP"
    },
    {
        "LookupKey": "6a38f78f51de80fe180381f6d0f1349759498f50c3faa6c83072bf0546c6317e",
        "LookupName": "Country",
        "LookupValue": "NR",
        "StandardLookupValue": "NR",
        "LegacyOdataValue": "NR"
    },
    {
        "LookupKey": "554700eccbfc972a83b0e4af586599f8dc87750d6f0efced232d93cf93c59d04",
        "LookupName": "Country",
        "LookupValue": "NU",
        "StandardLookupValue": "NU",
        "LegacyOdataValue": "NU"
    },
    {
        "LookupKey": "67beec8987d829b74646080579b66076bb0650787273d27d637f4eccd2ba8279",
        "LookupName": "Country",
        "LookupValue": "NZ",
        "StandardLookupValue": "NZ",
        "LegacyOdataValue": "NZ"
    },
    {
        "LookupKey": "5798ffe662adfaed036dff9c73dfd80755df6076998d8f3a655e06868e79ea0b",
        "LookupName": "Country",
        "LookupValue": "OM",
        "StandardLookupValue": "OM",
        "LegacyOdataValue": "OM"
    },
    {
        "LookupKey": "6b49633e51424f363e413c2b405295d88bab33427f52eb85c17248e8088eb2b2",
        "LookupName": "Country",
        "LookupValue": "OT",
        "StandardLookupValue": "OT",
        "LegacyOdataValue": "OT"
    },
    {
        "LookupKey": "313c35adb423aa66860bb87a46cd317a8e5df892e5f147068c3fab166b8518e2",
        "LookupName": "Country",
        "LookupValue": "PA",
        "StandardLookupValue": "PA",
        "LegacyOdataValue": "PA"
    },
    {
        "LookupKey": "137883b980f38308ea46c561e87006ed70ce8f48039ae196f3851033890fda80",
        "LookupName": "Country",
        "LookupValue": "PE",
        "StandardLookupValue": "PE",
        "LegacyOdataValue": "PE"
    },
    {
        "LookupKey": "86876302cf041c37191a91962582d1a524078253cf35b4072d7008717dbd5116",
        "LookupName": "Country",
        "LookupValue": "PF",
        "StandardLookupValue": "PF",
        "LegacyOdataValue": "PF"
    },
    {
        "LookupKey": "af61ad5df67f7c5e3615ae27cb0733f13157ff38d6525ca8dee4e49427a6639a",
        "LookupName": "Country",
        "LookupValue": "PG",
        "StandardLookupValue": "PG",
        "LegacyOdataValue": "PG"
    },
    {
        "LookupKey": "e0382eabf0f9f60be7407498edecdab7dacadea18493d3da3c46edb27e22b1c0",
        "LookupName": "Country",
        "LookupValue": "PH",
        "StandardLookupValue": "PH",
        "LegacyOdataValue": "PH"
    },
    {
        "LookupKey": "c46aee01a6006c678df40d383dc18ac3862c746136c1474b772cd322b02339ae",
        "LookupName": "Country",
        "LookupValue": "PK",
        "StandardLookupValue": "PK",
        "LegacyOdataValue": "PK"
    },
    {
        "LookupKey": "5c08155504ac0f75cb4ec99f9653bbf921c7c37ac2fb86f52b3f22a0dbab3338",
        "LookupName": "Country",
        "LookupValue": "PL",
        "StandardLookupValue": "PL",
        "LegacyOdataValue": "PL"
    },
    {
        "LookupKey": "cbcf1ad7a15340820032ebbd1150d2880f3d7529bc407700341f7675e293fa1e",
        "LookupName": "Country",
        "LookupValue": "PM",
        "StandardLookupValue": "PM",
        "LegacyOdataValue": "PM"
    },
    {
        "LookupKey": "2f6b43e3bf1821d57ec8aa34d476884a473efc8994b8efaf8bde7c82c11b2131",
        "LookupName": "Country",
        "LookupValue": "PN",
        "StandardLookupValue": "PN",
        "LegacyOdataValue": "PN"
    },
    {
        "LookupKey": "b2b3705aab29fd1fdf24049851fd12edac35d18bc5c64e585014c02c2cda1e13",
        "LookupName": "Country",
        "LookupValue": "PR",
        "StandardLookupValue": "PR",
        "LegacyOdataValue": "PR"
    },
    {
        "LookupKey": "b521d728be907e212e22c06ca32cfe254201943b3ed94f2888b5ac5fa2558c77",
        "LookupName": "Country",
        "LookupValue": "PS",
        "StandardLookupValue": "PS",
        "LegacyOdataValue": "PS"
    },
    {
        "LookupKey": "46d0557f90cfe348792b3a05c1951055cd72878f7e939b0c05ef0310aedbb070",
        "LookupName": "Country",
        "LookupValue": "PT",
        "StandardLookupValue": "PT",
        "LegacyOdataValue": "PT"
    },
    {
        "LookupKey": "036c4885638413b838dabc209bb06e6464b3bc31d6fc9db5eb0c601a489de156",
        "LookupName": "Country",
        "LookupValue": "PW",
        "StandardLookupValue": "PW",
        "LegacyOdataValue": "PW"
    },
    {
        "LookupKey": "a34044f13d8a298d8816e1d158aa585a97ce8bc8d2227c5353d21582ea0442e3",
        "LookupName": "Country",
        "LookupValue": "PY",
        "StandardLookupValue": "PY",
        "LegacyOdataValue": "PY"
    },
    {
        "LookupKey": "7e5a044362077d6b603056f8f487a17096b90e6c1dd094dfa374591fca64c389",
        "LookupName": "Country",
        "LookupValue": "QA",
        "StandardLookupValue": "QA",
        "LegacyOdataValue": "QA"
    },
    {
        "LookupKey": "f3757982fc953fd74f9401482cad817f153d15e46f474d7038528e33b61aeedc",
        "LookupName": "Country",
        "LookupValue": "RE",
        "StandardLookupValue": "RE",
        "LegacyOdataValue": "RE"
    },
    {
        "LookupKey": "51511ca545545d6da201f059dc154a41c374b95d945d3b4a355f7803c00a0baf",
        "LookupName": "Country",
        "LookupValue": "RO",
        "StandardLookupValue": "RO",
        "LegacyOdataValue": "RO"
    },
    {
        "LookupKey": "442a8f082b59e407a054833f7980043c28232b5ffcbf37f9adaedfcdfbe1466d",
        "LookupName": "Country",
        "LookupValue": "RS",
        "StandardLookupValue": "RS",
        "LegacyOdataValue": "RS"
    },
    {
        "LookupKey": "1c3bf8447fcd33c4134152efff060efa980d623154d16ad6e0a6630c8d14d4d0",
        "LookupName": "Country",
        "LookupValue": "RU",
        "StandardLookupValue": "RU",
        "LegacyOdataValue": "RU"
    },
    {
        "LookupKey": "c728da5e36b186c6093ddb6b571265073807dadabd72e808ef4248b7f4f27e58",
        "LookupName": "Country",
        "LookupValue": "RW",
        "StandardLookupValue": "RW",
        "LegacyOdataValue": "RW"
    },
    {
        "LookupKey": "749b734185a36159b40f6cebc46a4721425168b5a692d52ba6802377049baaa2",
        "LookupName": "Country",
        "LookupValue": "SA",
        "StandardLookupValue": "SA",
        "LegacyOdataValue": "SA"
    },
    {
        "LookupKey": "83005a42d59ce4bf748ada97b34241144522a02afe17f1159cfbbcebc303ae46",
        "LookupName": "Country",
        "LookupValue": "SB",
        "StandardLookupValue": "SB",
        "LegacyOdataValue": "SB"
    },
    {
        "LookupKey": "1394ae14a70d51bfec5f4c4acfcb343372c9706bb4d74db76e13fd07de94e17d",
        "LookupName": "Country",
        "LookupValue": "SC",
        "StandardLookupValue": "SC",
        "LegacyOdataValue": "SC"
    },
    {
        "LookupKey": "e7a1a08fa901256a4beca180dc5669bebbeb8504e7a6f497a7db2078ff0525a1",
        "LookupName": "Country",
        "LookupValue": "SD",
        "StandardLookupValue": "SD",
        "LegacyOdataValue": "SD"
    },
    {
        "LookupKey": "c2078b3cd0d4a1f0c51de1132efe37bf1ca5c17f8d43d2bde88d08cd3ac21316",
        "LookupName": "Country",
        "LookupValue": "SE",
        "StandardLookupValue": "SE",
        "LegacyOdataValue": "SE"
    },
    {
        "LookupKey": "58b6521255f1e3b13371c839c433b6a148d67cc6e5f21edb4bd4b0b6211d1829",
        "LookupName": "Country",
        "LookupValue": "SG",
        "StandardLookupValue": "SG",
        "LegacyOdataValue": "SG"
    },
    {
        "LookupKey": "24d389a0f711a0f094a5b7485a18d2b79fb6960ada4f44308f9995458a285817",
        "LookupName": "Country",
        "LookupValue": "SH",
        "StandardLookupValue": "SH",
        "LegacyOdataValue": "SH"
    },
    {
        "LookupKey": "4c54ef241d0241048073d8086a12813c16870296472401d762a4889da680b831",
        "LookupName": "Country",
        "LookupValue": "SI",
        "StandardLookupValue": "SI",
        "LegacyOdataValue": "SI"
    },
    {
        "LookupKey": "8baa7e88e544475e158a30e275fdcefbc9d88394d29f62a6a9c4651bc69e9b45",
        "LookupName": "Country",
        "LookupValue": "SJ",
        "StandardLookupValue": "SJ",
        "LegacyOdataValue": "SJ"
    },
    {
        "LookupKey": "9d6c75fe78286d2701f0e8b90fa56cf6715da49f3867595fd909316bc8f26542",
        "LookupName": "Country",
        "LookupValue": "SK",
        "StandardLookupValue": "SK",
        "LegacyOdataValue": "SK"
    },
    {
        "LookupKey": "1ba31eabde078f68efaf8330826cbcb95a10b33c2b9535d128f42deeffbdea72",
        "LookupName": "Country",
        "LookupValue": "SL",
        "StandardLookupValue": "SL",
        "LegacyOdataValue": "SL"
    },
    {
        "LookupKey": "3a4b63d0d6dfa5246db211f313ab1d6108cc6e26fe3eb92afd1daf1c2749d070",
        "LookupName": "Country",
        "LookupValue": "SM",
        "StandardLookupValue": "SM",
        "LegacyOdataValue": "SM"
    },
    {
        "LookupKey": "a7ec2ca8c73c97610e9ae704a9ef8c5bac19585680da764388326385efc4191a",
        "LookupName": "Country",
        "LookupValue": "SN",
        "StandardLookupValue": "SN",
        "LegacyOdataValue": "SN"
    },
    {
        "LookupKey": "d61874e773136718e61dc3d5f6292ce5dc4a14a846195f1dc138a028ef9c7b9e",
        "LookupName": "Country",
        "LookupValue": "SO",
        "StandardLookupValue": "SO",
        "LegacyOdataValue": "SO"
    },
    {
        "LookupKey": "1ffa9f856f6784870348c279f88abbb130366501e6c6cdc09803a578c3c79cf6",
        "LookupName": "Country",
        "LookupValue": "SR",
        "StandardLookupValue": "SR",
        "LegacyOdataValue": "SR"
    },
    {
        "LookupKey": "e6365501a2de4c1cf0403c1df3d4f2b8ced4b1724332ee037de1e31952704315",
        "LookupName": "Country",
        "LookupValue": "ST",
        "StandardLookupValue": "ST",
        "LegacyOdataValue": "ST"
    },
    {
        "LookupKey": "8a33e4209f90eb76c35a853cc02c70cd7e0b5cdba3dfef4eeb8d731d80f2ca58",
        "LookupName": "Country",
        "LookupValue": "SV",
        "StandardLookupValue": "SV",
        "LegacyOdataValue": "SV"
    },
    {
        "LookupKey": "01e4423137932340309e15ddc92d98db12b9da96de22ee67b084c3f46ff5561a",
        "LookupName": "Country",
        "LookupValue": "SY",
        "StandardLookupValue": "SY",
        "LegacyOdataValue": "SY"
    },
    {
        "LookupKey": "3d2627219bfa2b0b922bf52cbd37ba533813e5532099cf9d265d434d5dc805a5",
        "LookupName": "Country",
        "LookupValue": "SZ",
        "StandardLookupValue": "SZ",
        "LegacyOdataValue": "SZ"
    },
    {
        "LookupKey": "c63fc4adbb97b7ab466f5445995956c417f15cf1dc2555cd63aadbaacfe98ffc",
        "LookupName": "Country",
        "LookupValue": "TC",
        "StandardLookupValue": "TC",
        "LegacyOdataValue": "TC"
    },
    {
        "LookupKey": "99e8cf9e62c3828d379d2381c193e41f2015687608329d80b8d7404fb7e1cc19",
        "LookupName": "Country",
        "LookupValue": "TD",
        "StandardLookupValue": "TD",
        "LegacyOdataValue": "TD"
    },
    {
        "LookupKey": "209bdd07f251cbaa24eba7fae27cb92cad28b0b0ea807eba6f5731307efb4357",
        "LookupName": "Country",
        "LookupValue": "TF",
        "StandardLookupValue": "TF",
        "LegacyOdataValue": "TF"
    },
    {
        "LookupKey": "e236338fc2c27d62a50d907f140022a64de3c441a385da99af8c69162f416d0f",
        "LookupName": "Country",
        "LookupValue": "TG",
        "StandardLookupValue": "TG",
        "LegacyOdataValue": "TG"
    },
    {
        "LookupKey": "c9a2223b27db51ab38b2160d64ffec09ef596c1b19f673fb788c9c36063ecd56",
        "LookupName": "Country",
        "LookupValue": "TH",
        "StandardLookupValue": "TH",
        "LegacyOdataValue": "TH"
    },
    {
        "LookupKey": "ccb420db462c8e57923231e0c8e16d3faa19ce7f22183818b5cd1b2ef1950a56",
        "LookupName": "Country",
        "LookupValue": "TJ",
        "StandardLookupValue": "TJ",
        "LegacyOdataValue": "TJ"
    },
    {
        "LookupKey": "205127c3a784eec36756b263711a8b57fcf401a47003509081292d0581c77b3e",
        "LookupName": "Country",
        "LookupValue": "TK",
        "StandardLookupValue": "TK",
        "LegacyOdataValue": "TK"
    },
    {
        "LookupKey": "553afb177d1c94034f9d061d6fa16c4f91f88d3da35268ca54f64b73e56902d3",
        "LookupName": "Country",
        "LookupValue": "TL",
        "StandardLookupValue": "TL",
        "LegacyOdataValue": "TL"
    },
    {
        "LookupKey": "933420088443c144e82cf56d5d34866d9d1e7c60f8bb7cc297d40395632c500a",
        "LookupName": "Country",
        "LookupValue": "TM",
        "StandardLookupValue": "TM",
        "LegacyOdataValue": "TM"
    },
    {
        "LookupKey": "8a8eb96b478426ed31cae36d918646b935cfad9cf43bfce2de92bb2bc775b2f7",
        "LookupName": "Country",
        "LookupValue": "TN",
        "StandardLookupValue": "TN",
        "LegacyOdataValue": "TN"
    },
    {
        "LookupKey": "e611528dc749eff33d6fd674c034e0c886621e1aaa5191233b13ebc2a99dcb8f",
        "LookupName": "Country",
        "LookupValue": "TO",
        "StandardLookupValue": "TO",
        "LegacyOdataValue": "TO"
    },
    {
        "LookupKey": "e240231778d28b50d2df5aed2dc82237711bd9d95022e97eb94316983fc00a4d",
        "LookupName": "Country",
        "LookupValue": "TR",
        "StandardLookupValue": "TR",
        "LegacyOdataValue": "TR"
    },
    {
        "LookupKey": "09801bb4ed96da859bfab4ba745b776ea4edd101c71638fa15e5ca12f272b4b8",
        "LookupName": "Country",
        "LookupValue": "TT",
        "StandardLookupValue": "TT",
        "LegacyOdataValue": "TT"
    },
    {
        "LookupKey": "5e6ca20406b94f010e1cce3a3010a6ff7580b88946407e1f5f83ec8408ad6436",
        "LookupName": "Country",
        "LookupValue": "TV",
        "StandardLookupValue": "TV",
        "LegacyOdataValue": "TV"
    },
    {
        "LookupKey": "29fad7b0566ab1d81fcba38491a324f79d30688617f26330879c31d79d0a9b61",
        "LookupName": "Country",
        "LookupValue": "TW",
        "StandardLookupValue": "TW",
        "LegacyOdataValue": "TW"
    },
    {
        "LookupKey": "8c5c726a3ae89d1d4e1ed59911e178f250dcde07cc93f9a3cf2a7956b65a7ea6",
        "LookupName": "Country",
        "LookupValue": "TZ",
        "StandardLookupValue": "TZ",
        "LegacyOdataValue": "TZ"
    },
    {
        "LookupKey": "4008477011910acfc1edad0bb441eeab5f41f577499a5ad41c9a06e7df8b977c",
        "LookupName": "Country",
        "LookupValue": "UA",
        "StandardLookupValue": "UA",
        "LegacyOdataValue": "UA"
    },
    {
        "LookupKey": "40c6b402fcb5306b8ac9b9604f65a2f9fae9e434d25a53801e198b3495d9a791",
        "LookupName": "Country",
        "LookupValue": "UG",
        "StandardLookupValue": "UG",
        "LegacyOdataValue": "UG"
    },
    {
        "LookupKey": "3564d0e6cd46c86b5fd337a8f7a716944afaa69fe2d6776514905efee6f89602",
        "LookupName": "Country",
        "LookupValue": "UM",
        "StandardLookupValue": "UM",
        "LegacyOdataValue": "UM"
    },
    {
        "LookupKey": "3669a788b6b3c04380a249a8ad929fe867dab42b92f2f6fd97556cfe86941b8f",
        "LookupName": "Country",
        "LookupValue": "US",
        "StandardLookupValue": "US",
        "LegacyOdataValue": "US"
    },
    {
        "LookupKey": "544518c910f9b4d1e098f17bf6794307ef06f728061dc8e7e5b25e858fc78915",
        "LookupName": "Country",
        "LookupValue": "UY",
        "StandardLookupValue": "UY",
        "LegacyOdataValue": "UY"
    },
    {
        "LookupKey": "d6c21030041465921e471796d368a64e34d43e7d0565e9af94272d2a7d6c583f",
        "LookupName": "Country",
        "LookupValue": "UZ",
        "StandardLookupValue": "UZ",
        "LegacyOdataValue": "UZ"
    },
    {
        "LookupKey": "cbb306f271ffd17b8e2e5d5e5b9a1f7ce8c41d3e0ce11cd9e5014eefbbdcf581",
        "LookupName": "Country",
        "LookupValue": "VA",
        "StandardLookupValue": "VA",
        "LegacyOdataValue": "VA"
    },
    {
        "LookupKey": "c3059365b8bbbd7c8003da96017f55012bd115001ee023bad9fb9159985a4c5c",
        "LookupName": "Country",
        "LookupValue": "VC",
        "StandardLookupValue": "VC",
        "LegacyOdataValue": "VC"
    },
    {
        "LookupKey": "be0c1714d8a51293227952c46edc86e0dbc824aee1b3a1051278fd7e2eb0ff3b",
        "LookupName": "Country",
        "LookupValue": "VE",
        "StandardLookupValue": "VE",
        "LegacyOdataValue": "VE"
    },
    {
        "LookupKey": "aebdd44f63fb8ad6efe4977523ed8e147711671854cda266727bc5683f9d8186",
        "LookupName": "Country",
        "LookupValue": "VG",
        "StandardLookupValue": "VG",
        "LegacyOdataValue": "VG"
    },
    {
        "LookupKey": "dc50d32872237471b435e721b40f108ba9796e5c9a4997cdba4f6109f64bad3c",
        "LookupName": "Country",
        "LookupValue": "VI",
        "StandardLookupValue": "VI",
        "LegacyOdataValue": "VI"
    },
    {
        "LookupKey": "ab4aac246a48692c2c5985420ba34b05a7b62637b56013787eb705f3953f120b",
        "LookupName": "Country",
        "LookupValue": "VN",
        "StandardLookupValue": "VN",
        "LegacyOdataValue": "VN"
    },
    {
        "LookupKey": "cf6333afb4999d9feef775c9b9049ae8331199a47b22c8b0cb04a8310043d1f2",
        "LookupName": "Country",
        "LookupValue": "VU",
        "StandardLookupValue": "VU",
        "LegacyOdataValue": "VU"
    },
    {
        "LookupKey": "824ccace31fdfd322194eddd6e0154ada2f9147425cbead703deb990d3467ba8",
        "LookupName": "Country",
        "LookupValue": "WF",
        "StandardLookupValue": "WF",
        "LegacyOdataValue": "WF"
    },
    {
        "LookupKey": "60152ac0a55b91b8d69654559f68108c43bc70b2a96ead047322a484c858161e",
        "LookupName": "Country",
        "LookupValue": "WS",
        "StandardLookupValue": "WS",
        "LegacyOdataValue": "WS"
    },
    {
        "LookupKey": "241b32edc8a7165d0a8ff1ac7422b92c00a32c93650bae8ba5d0d452b039d58e",
        "LookupName": "Country",
        "LookupValue": "YE",
        "StandardLookupValue": "YE",
        "LegacyOdataValue": "YE"
    },
    {
        "LookupKey": "39159f6c3f9d9fd3554ab6ed8a8ae7959d4c7489ee0ed1b3b8fc63d20f076244",
        "LookupName": "Country",
        "LookupValue": "YT",
        "StandardLookupValue": "YT",
        "LegacyOdataValue": "YT"
    },
    {
        "LookupKey": "b719b49fa9ce3daa3e09174f6c17eff47dc9bcb4bd4a73e56d6ecf8014ba12f8",
        "LookupName": "Country",
        "LookupValue": "ZA",
        "StandardLookupValue": "ZA",
        "LegacyOdataValue": "ZA"
    },
    {
        "LookupKey": "fc1dc0bd6d083158f06623a6c977b960ea6d55a8ea0a763ed106a96723cfabf3",
        "LookupName": "Country",
        "LookupValue": "ZM",
        "StandardLookupValue": "ZM",
        "LegacyOdataValue": "ZM"
    },
    {
        "LookupKey": "b638eb4557e7189826986a75fe0b1ba87c422dca949dad0953700719291112a6",
        "LookupName": "Country",
        "LookupValue": "ZW",
        "StandardLookupValue": "ZW",
        "LegacyOdataValue": "ZW"
    },
    {
        "LookupKey": "67fcfdc55725cddb39e6c6887e3f83658ea4f368ce69eeabcd80146769f048b4",
        "LookupName": "CurrentFinancing",
        "LookupValue": "Assumable",
        "StandardLookupValue": "Assumable",
        "LegacyOdataValue": "Assumable"
    },
    {
        "LookupKey": "719ffbf9d16a806e4e615cbe50ab3bc3aea9b8ee8cfcbba4c65a4bb4c810ee41",
        "LookupName": "CurrentFinancing",
        "LookupValue": "Contract",
        "StandardLookupValue": "Contract",
        "LegacyOdataValue": "Contract"
    },
    {
        "LookupKey": "38eb4bb919b1488904965b2ce1ea984f63e4aba3097dc296a3db92b388148011",
        "LookupName": "CurrentFinancing",
        "LookupValue": "Conventional",
        "StandardLookupValue": "Conventional",
        "LegacyOdataValue": "Conventional"
    },
    {
        "LookupKey": "07224583742dbd7aeb653c126df54db2cd876e01678770316582ed0757caf17c",
        "LookupName": "CurrentFinancing",
        "LookupValue": "FHA",
        "StandardLookupValue": "FHA",
        "LegacyOdataValue": "FHA"
    },
    {
        "LookupKey": "db608cb86fd92780539861756bff9de94bebd30b618b8deb12483da98c88daaa",
        "LookupName": "CurrentFinancing",
        "LookupValue": "FHA203b",
        "StandardLookupValue": "FHA203b",
        "LegacyOdataValue": "FHA 203b"
    },
    {
        "LookupKey": "187e0d72d6b639801b332f5924612be18bb9f84264de052552c4323b38f0e537",
        "LookupName": "CurrentFinancing",
        "LookupValue": "FHA203k",
        "StandardLookupValue": "FHA203k",
        "LegacyOdataValue": "FHA 203k"
    },
    {
        "LookupKey": "4f3b003abd07d2322386c394dc64317e82dc64df084935a484e8a694cfe55263",
        "LookupName": "CurrentFinancing",
        "LookupValue": "LeasedRenewables",
        "StandardLookupValue": "LeasedRenewables",
        "LegacyOdataValue": "Leased Renewables"
    },
    {
        "LookupKey": "ca83cbb85dab6b531a251be84adb14113987cf1cfce82a776cf757b7a5593b8e",
        "LookupName": "CurrentFinancing",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "1fd250da4efc3154e359e17b6f4ed53e7e9aa7aee6ce736e7306e97eb9753b6f",
        "LookupName": "CurrentFinancing",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "09f04950609f710771a4c5703a67b1665cd11b0e0f5217aa655428027471c294",
        "LookupName": "CurrentFinancing",
        "LookupValue": "PowerPurchaseAgreement",
        "StandardLookupValue": "PowerPurchaseAgreement",
        "LegacyOdataValue": "Power Purchase Agreement"
    },
    {
        "LookupKey": "2548a27c85789890d2c0864391a1f5f9a974e1907fac847f7b8aaa336fb0e715",
        "LookupName": "CurrentFinancing",
        "LookupValue": "Private",
        "StandardLookupValue": "Private",
        "LegacyOdataValue": "Private"
    },
    {
        "LookupKey": "6b2d0a6b4c86b2c1b0ebfb0fb8c1f8c1daf059c001f1929cae2ce2a2118754d6",
        "LookupName": "CurrentFinancing",
        "LookupValue": "PropertyAssessedCleanEnergy",
        "StandardLookupValue": "PropertyAssessedCleanEnergy",
        "LegacyOdataValue": "Property-Assessed Clean Energy"
    },
    {
        "LookupKey": "e3a90036f6744b626bd52b4dfa1d4a3b55425619efd9775ac4bc80fa05bf4d8f",
        "LookupName": "CurrentFinancing",
        "LookupValue": "TrustDeed",
        "StandardLookupValue": "TrustDeed",
        "LegacyOdataValue": "Trust Deed"
    },
    {
        "LookupKey": "9f2bf4689bbcc915fb7064b7b40090992dd9dd4fa984955c6639ea81dbc5504e",
        "LookupName": "CurrentFinancing",
        "LookupValue": "USDA",
        "StandardLookupValue": "USDA",
        "LegacyOdataValue": "USDA"
    },
    {
        "LookupKey": "8eb69a32d8b1af20791968a7fa21f02ab330febbed0164cf50657ab10d907806",
        "LookupName": "CurrentFinancing",
        "LookupValue": "VA",
        "StandardLookupValue": "VA",
        "LegacyOdataValue": "VA"
    },
    {
        "LookupKey": "a2b28fb449e5f7290f6d9620284d6d151d0a201e21c90bfcc266aeb7c2928ef3",
        "LookupName": "CurrentUse",
        "LookupValue": "Agricultural",
        "StandardLookupValue": "Agricultural",
        "LegacyOdataValue": "Agricultural"
    },
    {
        "LookupKey": "e25aa1e9e3505f15a9280d3fd2bfcd99115e80acdc3a27acac584ba7e9093972",
        "LookupName": "CurrentUse",
        "LookupValue": "Automotive",
        "StandardLookupValue": "Automotive",
        "LegacyOdataValue": "Automotive"
    },
    {
        "LookupKey": "2eabc0b6132a4b7c5a314fdf220287d37ee5fabae5c7e3b754ae9a5812963b83",
        "LookupName": "CurrentUse",
        "LookupValue": "Cattle",
        "StandardLookupValue": "Cattle",
        "LegacyOdataValue": "Cattle"
    },
    {
        "LookupKey": "d5521b279440c7160e4e56c10a2e76bf168bb64e1ca26eeeb220934841e6591a",
        "LookupName": "CurrentUse",
        "LookupValue": "Commercial",
        "StandardLookupValue": "Commercial",
        "LegacyOdataValue": "Commercial"
    },
    {
        "LookupKey": "252253d9765f40438b71898ce84589584bac5984a5e5d0869c4476a6fde47f93",
        "LookupName": "CurrentUse",
        "LookupValue": "Dairy",
        "StandardLookupValue": "Dairy",
        "LegacyOdataValue": "Dairy"
    },
    {
        "LookupKey": "e98b6cf832c827045c1b34370135550c8a15e8d6267661fd717e0ea45b3097be",
        "LookupName": "CurrentUse",
        "LookupValue": "Farm",
        "StandardLookupValue": "Farm",
        "LegacyOdataValue": "Farm"
    },
    {
        "LookupKey": "6b110cc408dc479129ddaa38095980ea8f1bbe38073ef1b47bda766a5b367849",
        "LookupName": "CurrentUse",
        "LookupValue": "Fishery",
        "StandardLookupValue": "Fishery",
        "LegacyOdataValue": "Fishery"
    },
    {
        "LookupKey": "5e974474d39e3b04bfd5023c317a4285f1f8261c4f02a567f51821507f0feb3d",
        "LookupName": "CurrentUse",
        "LookupValue": "Grazing",
        "StandardLookupValue": "Grazing",
        "LegacyOdataValue": "Grazing"
    },
    {
        "LookupKey": "c9a7f3922defa3e5e89d01f6566135a7ab94b6710d9bddac44f18995eb5218c8",
        "LookupName": "CurrentUse",
        "LookupValue": "HighwayTouristService",
        "StandardLookupValue": "HighwayTouristService",
        "LegacyOdataValue": "Highway/Tourist Service"
    },
    {
        "LookupKey": "d3baa03127417a0a201f49d0d32a5c9585fcf97889ce6133de524e0ecc3ecc74",
        "LookupName": "CurrentUse",
        "LookupValue": "Horses",
        "StandardLookupValue": "Horses",
        "LegacyOdataValue": "Horses"
    },
    {
        "LookupKey": "0f197b7847bc7b36ce4cabb15150ab84bd86544c14bda7005acad0ce3b787d44",
        "LookupName": "CurrentUse",
        "LookupValue": "Hunting",
        "StandardLookupValue": "Hunting",
        "LegacyOdataValue": "Hunting"
    },
    {
        "LookupKey": "a2aed940afd61e71b33a70f9fc6482acff81976a56ffa87f69e7981ef4acd45b",
        "LookupName": "CurrentUse",
        "LookupValue": "Industrial",
        "StandardLookupValue": "Industrial",
        "LegacyOdataValue": "Industrial"
    },
    {
        "LookupKey": "67a6ced2436fa7b490d5bd6f79eb5b4fa493c9e4b1a1dfbb1e574cec60b49fb1",
        "LookupName": "CurrentUse",
        "LookupValue": "Investment",
        "StandardLookupValue": "Investment",
        "LegacyOdataValue": "Investment"
    },
    {
        "LookupKey": "cebe438fd988c1848d8c16fe674940df66af4940f39718c4b79d674940d76e39",
        "LookupName": "CurrentUse",
        "LookupValue": "Livestock",
        "StandardLookupValue": "Livestock",
        "LegacyOdataValue": "Livestock"
    },
    {
        "LookupKey": "9a5a46c6e96881c0d6ffc196ed6747ef6bbebcb0af8f7414ecbc41cfdf06ff97",
        "LookupName": "CurrentUse",
        "LookupValue": "ManufacturedHome",
        "StandardLookupValue": "ManufacturedHome",
        "LegacyOdataValue": "Manufactured Home"
    },
    {
        "LookupKey": "32572f828f1f23a5f72e790ed0a872141615a6984315443bce8db5325d9bf164",
        "LookupName": "CurrentUse",
        "LookupValue": "MedicalDental",
        "StandardLookupValue": "MedicalDental",
        "LegacyOdataValue": "Medical/Dental"
    },
    {
        "LookupKey": "446da3caf1dd82a0fd1b426486d47e1ea7c7f2f8e3b403da9b8cd598886c7b2e",
        "LookupName": "CurrentUse",
        "LookupValue": "MiniStorage",
        "StandardLookupValue": "MiniStorage",
        "LegacyOdataValue": "Mini-Storage"
    },
    {
        "LookupKey": "da82dd860d290f141588646da3d74c6b684773d0fdefe77f1fe2a55e6f7d5667",
        "LookupName": "CurrentUse",
        "LookupValue": "MixedUse",
        "StandardLookupValue": "MixedUse",
        "LegacyOdataValue": "Mixed Use"
    },
    {
        "LookupKey": "e22f7cc4f75baad7496b52efa38920788d681435b56952e3d93a76d83bf6dd7d",
        "LookupName": "CurrentUse",
        "LookupValue": "MultiFamily",
        "StandardLookupValue": "MultiFamily",
        "LegacyOdataValue": "Multi-Family"
    },
    {
        "LookupKey": "84f0f239bdcd5fc9d4368ac69e26d2f7f54e7e11c3768df7f886934f23f71876",
        "LookupName": "CurrentUse",
        "LookupValue": "Nursery",
        "StandardLookupValue": "Nursery",
        "LegacyOdataValue": "Nursery"
    },
    {
        "LookupKey": "a983166046adf67f7940faa6f007b21ac0325c5f2d64d37a0f84b1b2a89e25c3",
        "LookupName": "CurrentUse",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "7ea3752e74c015dae170a81f292c0571fdd0ab91eee7704662c12a38f0dfde00",
        "LookupName": "CurrentUse",
        "LookupValue": "Orchard",
        "StandardLookupValue": "Orchard",
        "LegacyOdataValue": "Orchard"
    },
    {
        "LookupKey": "0bac8dd0ea274f097ad8f0d73ffe64dbaa02c03b2f01aff540f5a44e73ab67c6",
        "LookupName": "CurrentUse",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "c0fbb736f85e2f31d00d54c6b33982f2f2cafc4d4c6553e2121e4e7072686536",
        "LookupName": "CurrentUse",
        "LookupValue": "Pasture",
        "StandardLookupValue": "Pasture",
        "LegacyOdataValue": "Pasture"
    },
    {
        "LookupKey": "354c1ef78ff6ed21287ee855dd7aaa278f564e965343a2c9ade6ea868eb5c600",
        "LookupName": "CurrentUse",
        "LookupValue": "PlaceOfWorship",
        "StandardLookupValue": "PlaceOfWorship",
        "LegacyOdataValue": "Place of Worship"
    },
    {
        "LookupKey": "73012f1a91546b71b75edf77607544088654e2c2f86d3ccaf4ad365943cbe4f0",
        "LookupName": "CurrentUse",
        "LookupValue": "Plantable",
        "StandardLookupValue": "Plantable",
        "LegacyOdataValue": "Plantable"
    },
    {
        "LookupKey": "b30bbd343adf75fc0316d724d8e3043e01b77b62693d22aadab0f3ae5183c045",
        "LookupName": "CurrentUse",
        "LookupValue": "Poultry",
        "StandardLookupValue": "Poultry",
        "LegacyOdataValue": "Poultry"
    },
    {
        "LookupKey": "c0a25cf81fb09d5a10bd3bd346c12b70450fa915bbf7255f0892186b6e91213d",
        "LookupName": "CurrentUse",
        "LookupValue": "Ranch",
        "StandardLookupValue": "Ranch",
        "LegacyOdataValue": "Ranch"
    },
    {
        "LookupKey": "9944a022705c130938a01c00b4fbce683b28d4668f592a33a7873d9b5f9d6914",
        "LookupName": "CurrentUse",
        "LookupValue": "Recreational",
        "StandardLookupValue": "Recreational",
        "LegacyOdataValue": "Recreational"
    },
    {
        "LookupKey": "ba262d7209d759ff030bc923300c46d59743eed55793e6628a1df3ef812ab823",
        "LookupName": "CurrentUse",
        "LookupValue": "Residential",
        "StandardLookupValue": "Residential",
        "LegacyOdataValue": "Residential"
    },
    {
        "LookupKey": "4d3a6cd08e3abad2f78d1686e57a3c3d3d587c57f7100258770acd5c0a165d5a",
        "LookupName": "CurrentUse",
        "LookupValue": "Retail",
        "StandardLookupValue": "Retail",
        "LegacyOdataValue": "Retail"
    },
    {
        "LookupKey": "f2e4a924228b29c5047e6003c70fb6ce788a153412225fc84a8d039eb505ca8f",
        "LookupName": "CurrentUse",
        "LookupValue": "RowCrops",
        "StandardLookupValue": "RowCrops",
        "LegacyOdataValue": "Row Crops"
    },
    {
        "LookupKey": "7119cce039d7a4a6ca68b18a8b8e976b2cba18440e8b51947b0911b3cf45779c",
        "LookupName": "CurrentUse",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "dca444f37b0bc71055f91f67f9bec0303117b078bfe8682f3e86161ea6fd4712",
        "LookupName": "CurrentUse",
        "LookupValue": "SingleFamily",
        "StandardLookupValue": "SingleFamily",
        "LegacyOdataValue": "Single Family"
    },
    {
        "LookupKey": "a14f8bcfcced06c0517d879caecce1617e0ffe83264e017e4309401d0fc1798d",
        "LookupName": "CurrentUse",
        "LookupValue": "Subdivision",
        "StandardLookupValue": "Subdivision",
        "LegacyOdataValue": "Subdivision"
    },
    {
        "LookupKey": "a548cc56a31e015a7e4bd2010f5864cc6cb19df4d2769eddf8b35319bd43065b",
        "LookupName": "CurrentUse",
        "LookupValue": "Timber",
        "StandardLookupValue": "Timber",
        "LegacyOdataValue": "Timber"
    },
    {
        "LookupKey": "f02fd1912445fd8352c85a5531aa2fe52dffd4df27aa58790a5fa0c71a62906e",
        "LookupName": "CurrentUse",
        "LookupValue": "TreeFarm",
        "StandardLookupValue": "TreeFarm",
        "LegacyOdataValue": "Tree Farm"
    },
    {
        "LookupKey": "0e933b7210d39d89dcf95e82be698f717be6088ea02bc4e0f0bd88d4c43f03a0",
        "LookupName": "CurrentUse",
        "LookupValue": "Unimproved",
        "StandardLookupValue": "Unimproved",
        "LegacyOdataValue": "Unimproved"
    },
    {
        "LookupKey": "e0471f9ebe50ad431840e4901c383ced828b5a24ad4ae400e56fe0c7a8a9602e",
        "LookupName": "CurrentUse",
        "LookupValue": "Vacant",
        "StandardLookupValue": "Vacant",
        "LegacyOdataValue": "Vacant"
    },
    {
        "LookupKey": "9a0ecc390ede242f240323e1098d3d65c752a84f0d127b7fe04499df52e6160b",
        "LookupName": "CurrentUse",
        "LookupValue": "Vineyard",
        "StandardLookupValue": "Vineyard",
        "LegacyOdataValue": "Vineyard"
    },
    {
        "LookupKey": "c496e3fb0fc317e4468d7ee81de4644f1c552baeee77a4fdbd7904f5aff9e6de",
        "LookupName": "CurrentUse",
        "LookupValue": "Warehouse",
        "StandardLookupValue": "Warehouse",
        "LegacyOdataValue": "Warehouse"
    },
    {
        "LookupKey": "939c04548d596c169b730b97321740b41ee7a40833dc35a8ac99712a838d93b9",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "Completed",
        "StandardLookupValue": "Completed",
        "LegacyOdataValue": "Completed"
    },
    {
        "LookupKey": "fc12a7370a1ac51e867c7009061652110d03b8c33fd8ee90204baf55b1887948",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "FinishedLots",
        "StandardLookupValue": "FinishedLots",
        "LegacyOdataValue": "Finished Lots"
    },
    {
        "LookupKey": "ddd34ea07e233e6e67758594e85e64569e7b16028ab19ec8276b99d129b978cd",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "c31bae345d1a364e354fbc8f7114b11b83699bb401e7ee6ce3bbcafabae9eddc",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "Proposed",
        "StandardLookupValue": "Proposed",
        "LegacyOdataValue": "Proposed"
    },
    {
        "LookupKey": "766e81b68f59532d6e67f08d36b3ecd92843afc506caad29581930c8444c1939",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "RawLand",
        "StandardLookupValue": "RawLand",
        "LegacyOdataValue": "Raw Land"
    },
    {
        "LookupKey": "64759076bdbe2586f39aa0d2b803b3ffe760eecee81421e46575ed418a28b247",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "RoughGrade",
        "StandardLookupValue": "RoughGrade",
        "LegacyOdataValue": "Rough Grade"
    },
    {
        "LookupKey": "b17b90cf0e4c55a67bf1e7a239b1d1c88ddef512dc1aef27dbbeb5b2a2b95f05",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "dc45cee5c514e8b476186e880200fd3ff9f5b12857ad7b16ba36ccf6c67930ec",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "SitePlanApproved",
        "StandardLookupValue": "SitePlanApproved",
        "LegacyOdataValue": "Site Plan Approved"
    },
    {
        "LookupKey": "28d31377b7f20967eb07d07fca4cebf1e93456f6b7cfdb9e7e81fc5da84046d8",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "SitePlanFiled",
        "StandardLookupValue": "SitePlanFiled",
        "LegacyOdataValue": "Site Plan Filed"
    },
    {
        "LookupKey": "d5707b0fa401170a54db4ded4e6241025c14b7845db76fefcaf4763752e995fa",
        "LookupName": "DevelopmentStatus",
        "LookupValue": "UnderConstruction",
        "StandardLookupValue": "UnderConstruction",
        "LegacyOdataValue": "Under Construction"
    },
    {
        "LookupKey": "55cc078636fe59def616d3a7c6c33dfbac71927c5250946349fc54a33d3cd864",
        "LookupName": "DirectionFaces",
        "LookupValue": "East",
        "StandardLookupValue": "East",
        "LegacyOdataValue": "East"
    },
    {
        "LookupKey": "f74ba1fce9c6299c57dc64a401db6cf39e715b79f45c02085506798d384c408c",
        "LookupName": "DirectionFaces",
        "LookupValue": "North",
        "StandardLookupValue": "North",
        "LegacyOdataValue": "North"
    },
    {
        "LookupKey": "7322583b65b0e6292c17f179deb4f7a0f4d2b1a251d26274a5d485ef7053eb78",
        "LookupName": "DirectionFaces",
        "LookupValue": "Northeast",
        "StandardLookupValue": "Northeast",
        "LegacyOdataValue": "Northeast"
    },
    {
        "LookupKey": "f9651f39cab07326789a643b6598c1d692d55185188870008e1e5d75e1f9fe0f",
        "LookupName": "DirectionFaces",
        "LookupValue": "Northwest",
        "StandardLookupValue": "Northwest",
        "LegacyOdataValue": "Northwest"
    },
    {
        "LookupKey": "03276ba01c49e94d18e00e68febe83f559685b734c5ed1059f63ed1ef1c3aadc",
        "LookupName": "DirectionFaces",
        "LookupValue": "South",
        "StandardLookupValue": "South",
        "LegacyOdataValue": "South"
    },
    {
        "LookupKey": "1943bacdb490d47fe076d9cfe1f7207f0d9abdfe54ac4f8bb3b9de2a4210aa1a",
        "LookupName": "DirectionFaces",
        "LookupValue": "Southeast",
        "StandardLookupValue": "Southeast",
        "LegacyOdataValue": "Southeast"
    },
    {
        "LookupKey": "e0e5e87a2b0d44156715afa59fb0333969f1f7ad68f20f5c857fe7c7fe99a4a6",
        "LookupName": "DirectionFaces",
        "LookupValue": "Southwest",
        "StandardLookupValue": "Southwest",
        "LegacyOdataValue": "Southwest"
    },
    {
        "LookupKey": "4eb6afb45df32305b1c42648879b849c4046d126b98be964d2d98845ed05dc4f",
        "LookupName": "DirectionFaces",
        "LookupValue": "West",
        "StandardLookupValue": "West",
        "LegacyOdataValue": "West"
    },
    {
        "LookupKey": "c2c0e156e7852cbcc9d9640c5f219d313239280c41b758e74d368cfedc983716",
        "LookupName": "LinearUnits",
        "LookupValue": "Feet",
        "StandardLookupValue": "Feet",
        "LegacyOdataValue": "Feet"
    },
    {
        "LookupKey": "938a8e27613892db8d457b0243168d4a41313688fe995d0c7ead538ccb358d17",
        "LookupName": "LinearUnits",
        "LookupValue": "Meters",
        "StandardLookupValue": "Meters",
        "LegacyOdataValue": "Meters"
    },
    {
        "LookupKey": "fab1988dada2fde90d5971e8aaaa26de19fb9e2d6380f5a5a0601870911e84a7",
        "LookupName": "DoorFeatures",
        "LookupValue": "EnergyStarQualifiedDoors",
        "StandardLookupValue": "EnergyStarQualifiedDoors",
        "LegacyOdataValue": "ENERGY STAR Qualified Doors"
    },
    {
        "LookupKey": "037a3b278eaf8fcb39ce48661ee529a110d59d25e459d1f5e33d0af57852ca01",
        "LookupName": "DoorFeatures",
        "LookupValue": "FrenchDoors",
        "StandardLookupValue": "FrenchDoors",
        "LegacyOdataValue": "French Doors"
    },
    {
        "LookupKey": "60a7732943a3eeb3327103c4092c5c6867485cad154a1f59745eb2f81db3bdd1",
        "LookupName": "DoorFeatures",
        "LookupValue": "MirroredClosetDoors",
        "StandardLookupValue": "MirroredClosetDoors",
        "LegacyOdataValue": "Mirrored Closet Doors"
    },
    {
        "LookupKey": "bdf928bfe05307479b641403c7e4873458b35f963aba1138887d3506e643c09f",
        "LookupName": "DoorFeatures",
        "LookupValue": "SlidingDoors",
        "StandardLookupValue": "SlidingDoors",
        "LegacyOdataValue": "Sliding Doors"
    },
    {
        "LookupKey": "99f2f9289f2ef45aba911c3f8458b22f70c590248ddec9da6499d7927b59d175",
        "LookupName": "DoorFeatures",
        "LookupValue": "StormDoors",
        "StandardLookupValue": "StormDoors",
        "LegacyOdataValue": "Storm Doors"
    },
    {
        "LookupKey": "f4f30200026e5cc7bd7c36ca99ab38ba01399bb8e567cade2c79bd747b5cb516",
        "LookupName": "Electric",
        "LookupValue": "Amps100",
        "StandardLookupValue": "Amps100",
        "LegacyOdataValue": "100 Amp Service"
    },
    {
        "LookupKey": "9c336907830fa04e017c2c369f78e81d65c3d9e497a877d5714e1931ee0ba25f",
        "LookupName": "Electric",
        "LookupValue": "Amps150",
        "StandardLookupValue": "Amps150",
        "LegacyOdataValue": "150 Amp Service"
    },
    {
        "LookupKey": "c2482268e60bb668bbea40e9c750705e2e860964bdaa101cd964d3ee5c0eb3b4",
        "LookupName": "Electric",
        "LookupValue": "Amps200OrMore",
        "StandardLookupValue": "Amps200OrMore",
        "LegacyOdataValue": "200+ Amp Service"
    },
    {
        "LookupKey": "1e1763afcf97c7c722a94b7e5ae96d9e1cdfd727a71bb43f8bc0e943df24a823",
        "LookupName": "Electric",
        "LookupValue": "CircuitBreakers",
        "StandardLookupValue": "CircuitBreakers",
        "LegacyOdataValue": "Circuit Breakers"
    },
    {
        "LookupKey": "eb793424f82466bfdee7501b8a22455455b7a6665e4f5882d1bfdd1c3bef70cb",
        "LookupName": "Electric",
        "LookupValue": "EnergyStorageDevice",
        "StandardLookupValue": "EnergyStorageDevice",
        "LegacyOdataValue": "Energy Storage Device"
    },
    {
        "LookupKey": "36ea46cab55d01b0f5a4b73f287185c4489ebd2b5637c1f1a34233719c44745b",
        "LookupName": "Electric",
        "LookupValue": "Fuses",
        "StandardLookupValue": "Fuses",
        "LegacyOdataValue": "Fuses"
    },
    {
        "LookupKey": "5856f23ed27373592e360d9a9107d27167debc6b482cdb253689b304482ce55a",
        "LookupName": "Electric",
        "LookupValue": "Generator",
        "StandardLookupValue": "Generator",
        "LegacyOdataValue": "Generator"
    },
    {
        "LookupKey": "ed524f2308913fe404ee8e11a12e644f5743c1d213afe1a2f009170ebceaa968",
        "LookupName": "Electric",
        "LookupValue": "NetMeter",
        "StandardLookupValue": "NetMeter",
        "LegacyOdataValue": "Net Meter"
    },
    {
        "LookupKey": "709545145a2fc4488a503ce2e09513006436fe4dd10d2478383d53416ff803db",
        "LookupName": "Electric",
        "LookupValue": "PhotovoltaicsSellerOwned",
        "StandardLookupValue": "PhotovoltaicsSellerOwned",
        "LegacyOdataValue": "Photovoltaics Seller Owned"
    },
    {
        "LookupKey": "8f9792ff24eeeb63cd72e281241fbaa697861758103de54d4dd8cc3359830631",
        "LookupName": "Electric",
        "LookupValue": "PhotovoltaicsThirdPartyOwned",
        "StandardLookupValue": "PhotovoltaicsThirdPartyOwned",
        "LegacyOdataValue": "Photovoltaics Third-Party Owned"
    },
    {
        "LookupKey": "7fe2e462f4127a4a20c76682c18bc82cddc20c35d28b984a4b60749d44c7c847",
        "LookupName": "Electric",
        "LookupValue": "PreWiredForRenewables",
        "StandardLookupValue": "PreWiredForRenewables",
        "LegacyOdataValue": "Pre-Wired for Renewables"
    },
    {
        "LookupKey": "a5cc9e92d3e9fbc3a9c8aed155c95369d51ee635826343d0df81ced337dbb1c4",
        "LookupName": "Electric",
        "LookupValue": "ReadyForRenewables",
        "StandardLookupValue": "ReadyForRenewables",
        "LegacyOdataValue": "Ready for Renewables"
    },
    {
        "LookupKey": "39df48a5877f937198ded7b15c5513efa7093e671ef7ade4f574b450aeb641d5",
        "LookupName": "Electric",
        "LookupValue": "Underground",
        "StandardLookupValue": "Underground",
        "LegacyOdataValue": "Underground"
    },
    {
        "LookupKey": "21697eb1f141ba88e5d6657b794d3d718007f3ef9e08f450aafbdb41812fbc53",
        "LookupName": "Electric",
        "LookupValue": "Volts220",
        "StandardLookupValue": "Volts220",
        "LegacyOdataValue": "220 Volts"
    },
    {
        "LookupKey": "20f7c2fdfc3de25cb968367ad3c4664ffe4877d31eafdf5157119d9335095a9e",
        "LookupName": "Electric",
        "LookupValue": "Volts220ForSpa",
        "StandardLookupValue": "Volts220ForSpa",
        "LegacyOdataValue": "220 Volts For Spa"
    },
    {
        "LookupKey": "af8fe7d3a502095c92bee7b93fd154c90daad315eccd09c757101129876731a8",
        "LookupName": "Electric",
        "LookupValue": "Volts220InGarage",
        "StandardLookupValue": "Volts220InGarage",
        "LegacyOdataValue": "220 Volts in Garage"
    },
    {
        "LookupKey": "d527c94c7e4fd6800f54c86975a31ebfe016b2ee4ce26b2cf59d377051304757",
        "LookupName": "Electric",
        "LookupValue": "Volts220InKitchen",
        "StandardLookupValue": "Volts220InKitchen",
        "LegacyOdataValue": "220 Volts in Kitchen"
    },
    {
        "LookupKey": "6543f97c15eb9956d9b79ab7bc79a15d5cf08d80afe5d7f56fdadbc70613d22d",
        "LookupName": "Electric",
        "LookupValue": "Volts220InLaundry",
        "StandardLookupValue": "Volts220InLaundry",
        "LegacyOdataValue": "220 Volts in Laundry"
    },
    {
        "LookupKey": "018d24b01d94afc836a906f5b51a216db9a82fe103bd0a812d1bc0a63f3536c8",
        "LookupName": "Electric",
        "LookupValue": "Volts220InWorkshop",
        "StandardLookupValue": "Volts220InWorkshop",
        "LegacyOdataValue": "220 Volts in Workshop"
    },
    {
        "LookupKey": "327262cee5efad8c12660dcf91636b0532504f5de024a34fb0cf69d852509212",
        "LookupName": "Electric",
        "LookupValue": "Volts440",
        "StandardLookupValue": "Volts440",
        "LegacyOdataValue": "440 Volts"
    },
    {
        "LookupKey": "c27f43c29d9bcc3149658c41f54ec60d8a5ac42edc875fde039deff99ebb0024",
        "LookupName": "Electric",
        "LookupValue": "WindTurbineSellerOwned",
        "StandardLookupValue": "WindTurbineSellerOwned",
        "LegacyOdataValue": "Wind Turbine Seller Owned"
    },
    {
        "LookupKey": "0fe5da36f688ceaf5330f59cd23d9345e0c4f774995a14edeb4d2cfd9e9d1c72",
        "LookupName": "Electric",
        "LookupValue": "WindTurbineThirdPartyOwned",
        "StandardLookupValue": "WindTurbineThirdPartyOwned",
        "LegacyOdataValue": "Wind Turbine Third-Party Owned"
    },
    {
        "LookupKey": "3586a7f373bbee8b850372abd8dccbe35bca63ea30b091ef0259fa1e85052828",
        "LookupName": "ExistingLeaseType",
        "LookupValue": "AbsoluteNet",
        "StandardLookupValue": "AbsoluteNet",
        "LegacyOdataValue": "Absolute Net"
    },
    {
        "LookupKey": "5501c0b1aeb2155f111cd7e7fc1469472283ac5ac8b90737324f6c93a4eb3207",
        "LookupName": "ExistingLeaseType",
        "LookupValue": "CpiAdjustment",
        "StandardLookupValue": "CpiAdjustment",
        "LegacyOdataValue": "CPI Adjustment"
    },
    {
        "LookupKey": "5a2e5053006e9022fe7f5cc6382fad571be5a11651f2255c7fcebb3b045c0d99",
        "LookupName": "ExistingLeaseType",
        "LookupValue": "EscalationClause",
        "StandardLookupValue": "EscalationClause",
        "LegacyOdataValue": "Escalation Clause"
    },
    {
        "LookupKey": "e1f07df7887b1e25ad587d67e2e2b17f528f133a9624a96c76fbdc5a7582ce29",
        "LookupName": "ExistingLeaseType",
        "LookupValue": "Gross",
        "StandardLookupValue": "Gross",
        "LegacyOdataValue": "Gross"
    },
    {
        "LookupKey": "9f2066b2fe5a0ccdd5c8f5e0f84b171ae8b3cec14ae4a07e2d21a8adc4471d03",
        "LookupName": "ExistingLeaseType",
        "LookupValue": "GroundLease",
        "StandardLookupValue": "GroundLease",
        "LegacyOdataValue": "Ground Lease"
    },
    {
        "LookupKey": "def2b86f30fdaf5933974ea42bd95201cb7d4b671868c6cfc06eb7dd3f130ae1",
        "LookupName": "ExistingLeaseType",
        "LookupValue": "Net",
        "StandardLookupValue": "Net",
        "LegacyOdataValue": "Net"
    },
    {
        "LookupKey": "ae920b8e60682a563a4ae1505614cb506b87d80db7595f0c7d8d41f74b22432c",
        "LookupName": "ExistingLeaseType",
        "LookupValue": "Nn",
        "StandardLookupValue": "Nn",
        "LegacyOdataValue": "NN"
    },
    {
        "LookupKey": "f2001d16bc4c2043582e9af4d97d0c8655fc66d7fbc4fd3bdeb8183d935cc577",
        "LookupName": "ExistingLeaseType",
        "LookupValue": "Nnn",
        "StandardLookupValue": "Nnn",
        "LegacyOdataValue": "NNN"
    },
    {
        "LookupKey": "c42241594ca8ebb4cd9eaefe71c845ba2cf2c9036c22c7501a44e4c83ce94d12",
        "LookupName": "ExistingLeaseType",
        "LookupValue": "Oral",
        "StandardLookupValue": "Oral",
        "LegacyOdataValue": "Oral"
    },
    {
        "LookupKey": "56cd1edf6df4227f2017ccbd307c50aeb84de5d7b70184bb7f4bf1eb4ea451a9",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Awnings",
        "StandardLookupValue": "Awnings",
        "LegacyOdataValue": "Awnings"
    },
    {
        "LookupKey": "e7c70152c9b208921248ba69dc6cebd6bcc6b3fea55bf2e99f6093a56fbc5e4a",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Balcony",
        "StandardLookupValue": "Balcony",
        "LegacyOdataValue": "Balcony"
    },
    {
        "LookupKey": "fab4f2b1285654a101f88cc60a0c74edb052b244dc61277d7e334d71c6cc5323",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Barbecue",
        "StandardLookupValue": "Barbecue",
        "LegacyOdataValue": "Barbecue"
    },
    {
        "LookupKey": "b61aea9b0485fff13b54f276c61a23b382fee64f7f6cd80d03099247a6bc3fe5",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "BasketballCourt",
        "StandardLookupValue": "BasketballCourt",
        "LegacyOdataValue": "Basketball Court"
    },
    {
        "LookupKey": "95ffd8fdb45eff4740af98cb3e5acda35d8915a5bfa5333e709d4dd64434ee86",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "BoatSlip",
        "StandardLookupValue": "BoatSlip",
        "LegacyOdataValue": "Boat Slip"
    },
    {
        "LookupKey": "5f97600fe5f7e05dc54429b46a76f509386ac6b5d48652fa6c9e0a7892ff8d2e",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "BuiltInBarbecue",
        "StandardLookupValue": "BuiltInBarbecue",
        "LegacyOdataValue": "Built-in Barbecue"
    },
    {
        "LookupKey": "e0dae1d3b8f7856ae99ab4d305db806ef8c42d79b41cc9d55d2e6565af422616",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Courtyard",
        "StandardLookupValue": "Courtyard",
        "LegacyOdataValue": "Courtyard"
    },
    {
        "LookupKey": "cf4eb394eb92ca7521fd4b58222f7365251a90eeab652fb1b293f0def908ba56",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "CoveredCourtyard",
        "StandardLookupValue": "CoveredCourtyard",
        "LegacyOdataValue": "Covered Courtyard"
    },
    {
        "LookupKey": "3e1b65b4bc8e1604b53f9b0917a27858de7f693e8ff3500a068c38b1ca21d990",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Dock",
        "StandardLookupValue": "Dock",
        "LegacyOdataValue": "Dock"
    },
    {
        "LookupKey": "d20d94c6b0b93ddca13bc866ddead48e4829fe90fd2d7d98c95f5dc69688d001",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "DogRun",
        "StandardLookupValue": "DogRun",
        "LegacyOdataValue": "Dog Run"
    },
    {
        "LookupKey": "1dbc0ba793d609ba31eebea8f97d2ff468b79844f73a38bb039ade4d2b7264d9",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "ElectricGrill",
        "StandardLookupValue": "ElectricGrill",
        "LegacyOdataValue": "Electric Grill"
    },
    {
        "LookupKey": "d7ce8239188467667c480f8dfdb08e8e0f7c8917d3d1fbfd7696f1d4db078914",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "FirePit",
        "StandardLookupValue": "FirePit",
        "LegacyOdataValue": "Fire Pit"
    },
    {
        "LookupKey": "92fb50983a837b03fae58598ea4d6d4378de0f118d48f0f59943fb82ebaeb360",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Garden",
        "StandardLookupValue": "Garden",
        "LegacyOdataValue": "Garden"
    },
    {
        "LookupKey": "86d3ac8fbe3574940c282f4f73ceba46fc49e845c4a28d48c6ea44ace47450a3",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "GasGrill",
        "StandardLookupValue": "GasGrill",
        "LegacyOdataValue": "Gas Grill"
    },
    {
        "LookupKey": "460e5c79fb6729cc1a24941b18dd4d14d81052684f40af1cfdf78d66d7277005",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "GrayWaterSystem",
        "StandardLookupValue": "GrayWaterSystem",
        "LegacyOdataValue": "Gray Water System"
    },
    {
        "LookupKey": "f4e78b8deb7c761263e5a55da9dd5a00006e4fbad8a3d02d9f6824214de0aa1e",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Kennel",
        "StandardLookupValue": "Kennel",
        "LegacyOdataValue": "Kennel"
    },
    {
        "LookupKey": "cdab620a9834a844993a3af9512e1e84276e64fa8f36fdfe18c8eed5fdacaba1",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Lighting",
        "StandardLookupValue": "Lighting",
        "LegacyOdataValue": "Lighting"
    },
    {
        "LookupKey": "8786350739b7b6e23fea80bc94f7c1c7b182a5c5077ff50f736ca6ae65179db2",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "MistingSystem",
        "StandardLookupValue": "MistingSystem",
        "LegacyOdataValue": "Misting System"
    },
    {
        "LookupKey": "872872eb57dde9f53e365e43f92f2c7b096b690ebbf88a2991771b5656e5b59e",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "fff43cac44b37a4d3b75b4f3077d9b5795125ee260c76eb1b891758b7f84f283",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "9251e48eb2142af5d43ae8b979b06f55cc527862d7c06943f0eeb41ce204ba3e",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "OutdoorGrill",
        "StandardLookupValue": "OutdoorGrill",
        "LegacyOdataValue": "Outdoor Grill"
    },
    {
        "LookupKey": "bdbf9053d8af4ad56cc965ae8ad74a3f025e26e85ac10f395e731c9d088398ee",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "OutdoorKitchen",
        "StandardLookupValue": "OutdoorKitchen",
        "LegacyOdataValue": "Outdoor Kitchen"
    },
    {
        "LookupKey": "f50ef236c26eada27013f88ed4a339fcc8654014cd0c7969bc08b20f845e8ae7",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "OutdoorShower",
        "StandardLookupValue": "OutdoorShower",
        "LegacyOdataValue": "Outdoor Shower"
    },
    {
        "LookupKey": "dc84cc1fa4d0f4191804b331bbbf4d4eab04d02874c6ab198f03aec76db5b462",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "PermeablePaving",
        "StandardLookupValue": "PermeablePaving",
        "LegacyOdataValue": "Permeable Paving"
    },
    {
        "LookupKey": "2e4bd5ebdfe46c046a777431868e3769e7103a82c3c3a1e24b3c5f3f38fe08fd",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Playground",
        "StandardLookupValue": "Playground",
        "LegacyOdataValue": "Playground"
    },
    {
        "LookupKey": "cf6d341f00610b0febb47a319df9182c01d04dfb07bf93ae10ea9bc41b917286",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "PrivateEntrance",
        "StandardLookupValue": "PrivateEntrance",
        "LegacyOdataValue": "Private Entrance"
    },
    {
        "LookupKey": "2eb060df92f03af718631cd18dd8af238df997413b888319cf733cb001c5a1c2",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "PrivateYard",
        "StandardLookupValue": "PrivateYard",
        "LegacyOdataValue": "Private Yard"
    },
    {
        "LookupKey": "f3d60f156815a0323c605f39bda10b18706a4452db5bf168c37d94ad047a8b15",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "RainBarrelCisterns",
        "StandardLookupValue": "RainBarrelCisterns",
        "LegacyOdataValue": "Rain Barrel/Cisterns"
    },
    {
        "LookupKey": "046580b333aabcdbc292d160c08be3613707d4444f04a28c09e429627ed81667",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "RainGutters",
        "StandardLookupValue": "RainGutters",
        "LegacyOdataValue": "Rain Gutters"
    },
    {
        "LookupKey": "5a4538cd7eca5ca74e130b20bf48eaf44a31fcde7ad931279f0a93e746c9fd73",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "RvHookup",
        "StandardLookupValue": "RvHookup",
        "LegacyOdataValue": "RV Hookup"
    },
    {
        "LookupKey": "e2ea7f62111cbd71e3d9980fe1e271733fb29d86e333cb82074b0c0963265e55",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "Storage",
        "StandardLookupValue": "Storage",
        "LegacyOdataValue": "Storage"
    },
    {
        "LookupKey": "b5a9ba56b222e3a36904d0ed66bf6bbf50f46f0395d952592ab82801d11a6a3f",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "TennisCourts",
        "StandardLookupValue": "TennisCourts",
        "LegacyOdataValue": "Tennis Courts"
    },
    {
        "LookupKey": "a84fe3f06523e6d1458258e3dab38a9ea67855234458c3d8b28c7a99100f61fd",
        "LookupName": "ExteriorFeatures",
        "LookupValue": "UncoveredCourtyard",
        "StandardLookupValue": "UncoveredCourtyard",
        "LegacyOdataValue": "Uncovered Courtyard"
    },
    {
        "LookupKey": "85a6df8fd093cefa42781befad771a50db24c32c30709cd377b884feb5e4783a",
        "LookupName": "Fencing",
        "LookupValue": "BackYard",
        "StandardLookupValue": "BackYard",
        "LegacyOdataValue": "Back Yard"
    },
    {
        "LookupKey": "fd0ee5f9628a0e590851f428e6011269a4539fbc0d46e15371c3b745a861acd1",
        "LookupName": "Fencing",
        "LookupValue": "BarbedWire",
        "StandardLookupValue": "BarbedWire",
        "LegacyOdataValue": "Barbed Wire"
    },
    {
        "LookupKey": "517aa63e6f1d6336c34e0cfb7b7de66ac60cf70c367d2218397d25d940bd328b",
        "LookupName": "Fencing",
        "LookupValue": "Block",
        "StandardLookupValue": "Block",
        "LegacyOdataValue": "Block"
    },
    {
        "LookupKey": "587358230f4b184e78aee452a8bacbecceab8441c8fe71f3701f52878abc2f5f",
        "LookupName": "Fencing",
        "LookupValue": "Brick",
        "StandardLookupValue": "Brick",
        "LegacyOdataValue": "Brick"
    },
    {
        "LookupKey": "98eb28590ce4400fc0b7d6211f71ec76b51fe2d81d0e34a5a9ee49ae165cae94",
        "LookupName": "Fencing",
        "LookupValue": "ChainLink",
        "StandardLookupValue": "ChainLink",
        "LegacyOdataValue": "Chain Link"
    },
    {
        "LookupKey": "28a7484ea7dce51b089f08d11aaa164c9248aa38769995aa859fcc62c97e0feb",
        "LookupName": "Fencing",
        "LookupValue": "CrossFenced",
        "StandardLookupValue": "CrossFenced",
        "LegacyOdataValue": "Cross Fenced"
    },
    {
        "LookupKey": "f6649a39a46b88380e1256518559a2173bfd253758b545a2e80a04ca8c86c164",
        "LookupName": "Fencing",
        "LookupValue": "Electric",
        "StandardLookupValue": "Electric",
        "LegacyOdataValue": "Electric"
    },
    {
        "LookupKey": "a392d7701cacb57d9e6e23f88c6525473e0ecc74830f2c105ff56a62268edb82",
        "LookupName": "Fencing",
        "LookupValue": "Fenced",
        "StandardLookupValue": "Fenced",
        "LegacyOdataValue": "Fenced"
    },
    {
        "LookupKey": "e9d857c7be6b88c48536794e8fc0348f201a7f495280b2531e9bc79633bd9734",
        "LookupName": "Fencing",
        "LookupValue": "FrontYard",
        "StandardLookupValue": "FrontYard",
        "LegacyOdataValue": "Front Yard"
    },
    {
        "LookupKey": "4f0f4a03e5937d773cd58e889da85955557471859d451091564f9ca2aed26de2",
        "LookupName": "Fencing",
        "LookupValue": "Full",
        "StandardLookupValue": "Full",
        "LegacyOdataValue": "Full"
    },
    {
        "LookupKey": "eabad055f5f917d0742224cbc489d3cc5d10ddef18bd57ab6cfbf8696500e98d",
        "LookupName": "Fencing",
        "LookupValue": "Gate",
        "StandardLookupValue": "Gate",
        "LegacyOdataValue": "Gate"
    },
    {
        "LookupKey": "f72914b777710aea4848b82fc1c3a212044d3388fce0c6d6201eee0b740f117f",
        "LookupName": "Fencing",
        "LookupValue": "Invisible",
        "StandardLookupValue": "Invisible",
        "LegacyOdataValue": "Invisible"
    },
    {
        "LookupKey": "1bf0be80ac2b6de4626759ba184f9b3464d6234b5543298a3acc978aa619e480",
        "LookupName": "Fencing",
        "LookupValue": "Masonry",
        "StandardLookupValue": "Masonry",
        "LegacyOdataValue": "Masonry"
    },
    {
        "LookupKey": "ec4ed760d7c36bcd85bd7f2075550d372256ccb3018e7d02b4e42b55ec085d28",
        "LookupName": "Fencing",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "caeac4cf4951a67070873c5f08d317350344112a639d6d7f8fabac431c89fdde",
        "LookupName": "Fencing",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "9fbc7bd2162699736d0601a23672378b3a4beea7f18ce7413e593ed290771fdf",
        "LookupName": "Fencing",
        "LookupValue": "Partial",
        "StandardLookupValue": "Partial",
        "LegacyOdataValue": "Partial"
    },
    {
        "LookupKey": "d922de045407b099fadb2ddf17c3fa0f33ef2e30218af16627aa54eff7f8fdcc",
        "LookupName": "Fencing",
        "LookupValue": "PartialCross",
        "StandardLookupValue": "PartialCross",
        "LegacyOdataValue": "Partial Cross"
    },
    {
        "LookupKey": "12b01ac90ebc435463871980335088b9a89dda7e58375b2c81ed49082ad9905a",
        "LookupName": "Fencing",
        "LookupValue": "Perimeter",
        "StandardLookupValue": "Perimeter",
        "LegacyOdataValue": "Perimeter"
    },
    {
        "LookupKey": "82b6d923cea4fc08c8a38a9c49d6b8615c63374f237ac78e997bc25301c3a115",
        "LookupName": "Fencing",
        "LookupValue": "Pipe",
        "StandardLookupValue": "Pipe",
        "LegacyOdataValue": "Pipe"
    },
    {
        "LookupKey": "61f51045a11f31bad6f72fa9c9d76f73ae973f4d6f6bc0b4ba642ef1378e9f56",
        "LookupName": "Fencing",
        "LookupValue": "Privacy",
        "StandardLookupValue": "Privacy",
        "LegacyOdataValue": "Privacy"
    },
    {
        "LookupKey": "fa67bdf20b92240624bbfe16c3c8c958061228730ea6b7073226930131a29de1",
        "LookupName": "Fencing",
        "LookupValue": "Security",
        "StandardLookupValue": "Security",
        "LegacyOdataValue": "Security"
    },
    {
        "LookupKey": "f3824ccb831d9fdb7e7bd6162fdbe854f99c525d57df912defd04eb740e50c7d",
        "LookupName": "Fencing",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "cc4ed5f3759bd0b1c65c6cfc5c045a81cd6dd2333349d14a422530e1422d667a",
        "LookupName": "Fencing",
        "LookupValue": "SlumpStone",
        "StandardLookupValue": "SlumpStone",
        "LegacyOdataValue": "Slump Stone"
    },
    {
        "LookupKey": "65cf590928589da258b63ce88b30bec35586103a42df03f5ac4a61959d4e7686",
        "LookupName": "Fencing",
        "LookupValue": "SplitRail",
        "StandardLookupValue": "SplitRail",
        "LegacyOdataValue": "Split Rail"
    },
    {
        "LookupKey": "1f6176b0efc0b65934907e4a1033be68ff0e75918c3273f2d4a9c7f0453b0dfc",
        "LookupName": "Fencing",
        "LookupValue": "Stone",
        "StandardLookupValue": "Stone",
        "LegacyOdataValue": "Stone"
    },
    {
        "LookupKey": "879f6cb20d819d5a1acb45af8c2217e6baaca6b79073ba2f0d41449dfb3f542e",
        "LookupName": "Fencing",
        "LookupValue": "Vinyl",
        "StandardLookupValue": "Vinyl",
        "LegacyOdataValue": "Vinyl"
    },
    {
        "LookupKey": "8cd1e304a23c8818afa8a797a75aa8c65e0b8601ae2532307ef3dbcb40ca3987",
        "LookupName": "Fencing",
        "LookupValue": "Wire",
        "StandardLookupValue": "Wire",
        "LegacyOdataValue": "Wire"
    },
    {
        "LookupKey": "f945e9f37e1fb62c4689f9fd80d7e84319334b6529f2529c8203765fb70b2e22",
        "LookupName": "Fencing",
        "LookupValue": "Wood",
        "StandardLookupValue": "Wood",
        "LegacyOdataValue": "Wood"
    },
    {
        "LookupKey": "81fa47dc1401d1815d58db2b5a741b1f162685a17d312a845fa6c083cd56bb17",
        "LookupName": "Fencing",
        "LookupValue": "WroughtIron",
        "StandardLookupValue": "WroughtIron",
        "LegacyOdataValue": "Wrought Iron"
    },
    {
        "LookupKey": "a8cff7b58fcd0d439393f50131502012489f50e3d97c87bb766148e32f60b185",
        "LookupName": "FinancialDataSource",
        "LookupValue": "Accountant",
        "StandardLookupValue": "Accountant",
        "LegacyOdataValue": "Accountant"
    },
    {
        "LookupKey": "4d0cfe6891496de3c08f722c15fc048bb1965fce8e05430df742b216a6357452",
        "LookupName": "FinancialDataSource",
        "LookupValue": "Owner",
        "StandardLookupValue": "Owner",
        "LegacyOdataValue": "Owner"
    },
    {
        "LookupKey": "e414b887a12b9bc9918b0a4470efdbbccf320151755a93e82fed288055864344",
        "LookupName": "FinancialDataSource",
        "LookupValue": "PropertyManager",
        "StandardLookupValue": "PropertyManager",
        "LegacyOdataValue": "Property Manager"
    },
    {
        "LookupKey": "202f7954c99fc8bb5cd1f0f7a56ab3191a472af9f6c2857efc6729dd5148193d",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Basement",
        "StandardLookupValue": "Basement",
        "LegacyOdataValue": "Basement"
    },
    {
        "LookupKey": "7ec3693eaf60ddbf902999691e7d59e29d7a7b24a1bce014c921e8a371df48d6",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Bath",
        "StandardLookupValue": "Bath",
        "LegacyOdataValue": "Bath"
    },
    {
        "LookupKey": "eb23e43dae84172b7be9f189556357c6121053ea8d9d24f1420ef7aa3ea7fe2d",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Bedroom",
        "StandardLookupValue": "Bedroom",
        "LegacyOdataValue": "Bedroom"
    },
    {
        "LookupKey": "36d1db4405ea5e92fc85667c3ea69d3188b00a5260f4a24f0c76b064fba8c581",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "BlowerFan",
        "StandardLookupValue": "BlowerFan",
        "LegacyOdataValue": "Blower Fan"
    },
    {
        "LookupKey": "2145c002df5d7f09aaee25288e2004e0bde5ba4a557f747b23beade9de5f3db0",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Circulating",
        "StandardLookupValue": "Circulating",
        "LegacyOdataValue": "Circulating"
    },
    {
        "LookupKey": "ae62d16e30a8998a749b23f4f79fdc67ba4bbb0fb8c82ae85a2c7c4b2436e6cf",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Decorative",
        "StandardLookupValue": "Decorative",
        "LegacyOdataValue": "Decorative"
    },
    {
        "LookupKey": "25f1d253f12a7c6527645a93ce8ebb6c93aabf74dc176fc34f5a0c1e17f01dd1",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Den",
        "StandardLookupValue": "Den",
        "LegacyOdataValue": "Den"
    },
    {
        "LookupKey": "ccbfa8eed53f0b1d4631c0a4a086d6b77b68fdcb4c318919c19780dd16b2fc5c",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "DiningRoom",
        "StandardLookupValue": "DiningRoom",
        "LegacyOdataValue": "Dining Room"
    },
    {
        "LookupKey": "ab34b02d23edc251ca3d2a06d5dabd87c4d0f3ae9707b8e1ae6215ae4b3d3915",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "DoubleSided",
        "StandardLookupValue": "DoubleSided",
        "LegacyOdataValue": "Double Sided"
    },
    {
        "LookupKey": "0c7e5111153ea9dd65cfe600a7cec4a86f391a65200b5463e5a3f9c396c440b3",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Electric",
        "StandardLookupValue": "Electric",
        "LegacyOdataValue": "Electric"
    },
    {
        "LookupKey": "65b6e42464906ed6e8c3fa6400b3d1f7ae0727ea7c6115c308baf1dbc52011ca",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "EpaCertifiedWoodStove",
        "StandardLookupValue": "EpaCertifiedWoodStove",
        "LegacyOdataValue": "EPA Certified Wood Stove"
    },
    {
        "LookupKey": "70ad5cabb6a79f42d24435ee264aaa0de1f6a698fb12ca3d411023bd6a823f81",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "EpaQualifiedFireplace",
        "StandardLookupValue": "EpaQualifiedFireplace",
        "LegacyOdataValue": "EPA Qualified Fireplace"
    },
    {
        "LookupKey": "23c4ae53c22452cbf50b4a4cd69fd55b6014bdd78f9bdd9d1c19531ff0cfd670",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "FactoryBuilt",
        "StandardLookupValue": "FactoryBuilt",
        "LegacyOdataValue": "Factory Built"
    },
    {
        "LookupKey": "c11f8f3ef0e60e1e204bcf6113cdedcd1dfa032cfb799a44f4e93835825ca438",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "FamilyRoom",
        "StandardLookupValue": "FamilyRoom",
        "LegacyOdataValue": "Family Room"
    },
    {
        "LookupKey": "110b069e37c19d35b1e00379531016ee05a475082d9d4b1456bdb60825dafcdc",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "FirePit",
        "StandardLookupValue": "FirePit",
        "LegacyOdataValue": "Fire Pit"
    },
    {
        "LookupKey": "3e5eb6a4fef1e45bbdd12225480e33ce8ff5febdf6c9f37742928abb41fed569",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "FreeStanding",
        "StandardLookupValue": "FreeStanding",
        "LegacyOdataValue": "Free Standing"
    },
    {
        "LookupKey": "9bdfff9849d296eec20f3b3fd5a77a1974eba575e4dcc79f671c19b643cb5c25",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Gas",
        "StandardLookupValue": "Gas",
        "LegacyOdataValue": "Gas"
    },
    {
        "LookupKey": "ab4a748ec7ef0ae8d7a435a5645f0fed3ba5442c821710e335581d1cedbdf18b",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "GasLog",
        "StandardLookupValue": "GasLog",
        "LegacyOdataValue": "Gas Log"
    },
    {
        "LookupKey": "9eb855a0810b55223bc53f75e4aad390b40a5911719f2189aca34ec36e4b1ecf",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "GasStarter",
        "StandardLookupValue": "GasStarter",
        "LegacyOdataValue": "Gas Starter"
    },
    {
        "LookupKey": "61ae52463996564a69a18ed36893f6050cc2e0db94057fe3b55ffe1420e9ee6b",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "GlassDoors",
        "StandardLookupValue": "GlassDoors",
        "LegacyOdataValue": "Glass Doors"
    },
    {
        "LookupKey": "009d2f06f15bd1fc39d7b22236dc60a8411d75a49a2ebdee9d90603d1cf4400c",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "GreatRoom",
        "StandardLookupValue": "GreatRoom",
        "LegacyOdataValue": "Great Room"
    },
    {
        "LookupKey": "d6714de632a01989023df2359e7989e61f311ed557080d21e3eba318e10cdf07",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Heatilator",
        "StandardLookupValue": "Heatilator",
        "LegacyOdataValue": "Heatilator"
    },
    {
        "LookupKey": "4e284f53c64a262b8a1d0cb9adfc64cce3f1dcb0f1a987f8442249ca0e79d26c",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Insert",
        "StandardLookupValue": "Insert",
        "LegacyOdataValue": "Insert"
    },
    {
        "LookupKey": "5c0c22c21a638d53b2f384044c4a718ffcb1ba30af09741d629f24c316b6b78e",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Kitchen",
        "StandardLookupValue": "Kitchen",
        "LegacyOdataValue": "Kitchen"
    },
    {
        "LookupKey": "b18d59a24ba147d36e36b4acca846d2fa5e79924a4fed51a1ade8f5c0f7e5a70",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Library",
        "StandardLookupValue": "Library",
        "LegacyOdataValue": "Library"
    },
    {
        "LookupKey": "4885bee569d554c0c0ed143a43ec2bf9d6c9b15f0e41879f99322df13f0ee1ea",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "LivingRoom",
        "StandardLookupValue": "LivingRoom",
        "LegacyOdataValue": "Living Room"
    },
    {
        "LookupKey": "207ac9efd4e20a2f85f0d023b34e6d5efd0f1e4eefdef94c1ddf37a06e4938d4",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Masonry",
        "StandardLookupValue": "Masonry",
        "LegacyOdataValue": "Masonry"
    },
    {
        "LookupKey": "7144fb5d3bf2251990dae40ec2c41d841ed723cd343635c756a1cf2a03bcbf29",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "MasterBedroom",
        "StandardLookupValue": "MasterBedroom",
        "LegacyOdataValue": "Master Bedroom"
    },
    {
        "LookupKey": "7411bc4f03d66da5e90d60430607f113526f943fb7f9e909041b9754ebecb51a",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Metal",
        "StandardLookupValue": "Metal",
        "LegacyOdataValue": "Metal"
    },
    {
        "LookupKey": "57162f80db36d8f96c567cccb59d899dfe220769c9a599ea4c414571ace70b11",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "a972f6a327ea6cfd9a57343c6f932282d9db74b6c82994abb1d11070fb1a243e",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "e95d797fc46d732c312a4b90705c72027252e55893b473b3b5cefbc4c021db25",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Outside",
        "StandardLookupValue": "Outside",
        "LegacyOdataValue": "Outside"
    },
    {
        "LookupKey": "482432c21f3cd62605735473cb659a9534609acce5ca669a29e21879202e182c",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "PelletStove",
        "StandardLookupValue": "PelletStove",
        "LegacyOdataValue": "Pellet Stove"
    },
    {
        "LookupKey": "eefecef02818ca2062d880ee5d148b8869b4352d9500d912ab80d3b813a36927",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Propane",
        "StandardLookupValue": "Propane",
        "LegacyOdataValue": "Propane"
    },
    {
        "LookupKey": "c6da63a04ebc3cbd0cb4438916f7f55988b8ac6cbdab8a487c98879e5ffa1dbd",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "RaisedHearth",
        "StandardLookupValue": "RaisedHearth",
        "LegacyOdataValue": "Raised Hearth"
    },
    {
        "LookupKey": "8d3d6a714317e9b99062a1f764fbc7b5af296ee8cb4627f2f12e67d31187b760",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "RecreationRoom",
        "StandardLookupValue": "RecreationRoom",
        "LegacyOdataValue": "Recreation Room"
    },
    {
        "LookupKey": "599a55d662ed4f9645986f34f02db3c618eeecbe0250d273fac55c3ed4345360",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "SealedCombustion",
        "StandardLookupValue": "SealedCombustion",
        "LegacyOdataValue": "Sealed Combustion"
    },
    {
        "LookupKey": "be5a85c6b1388a3709004e3d1ad6a4e06d364855e9432e09d74a0a783f2272c2",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "91905de17a733a5b237506219c3f3da6f67e335e93810fe386372149d56b42e6",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "SeeThrough",
        "StandardLookupValue": "SeeThrough",
        "LegacyOdataValue": "See Through"
    },
    {
        "LookupKey": "52f68f777d9432b17a41ce415ac35c0adb62d5ca5de99315a4434d8b489e8229",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Stone",
        "StandardLookupValue": "Stone",
        "LegacyOdataValue": "Stone"
    },
    {
        "LookupKey": "4e12399591c784aa0e945b11bcd1f2e2eebb8c09fe66df07109934e60ef2d309",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "Ventless",
        "StandardLookupValue": "Ventless",
        "LegacyOdataValue": "Ventless"
    },
    {
        "LookupKey": "cd41cc516da590c8059e075ba2f8e9114e9bf3c80e3d4d5694b270b0a88c4331",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "WoodBurning",
        "StandardLookupValue": "WoodBurning",
        "LegacyOdataValue": "Wood Burning"
    },
    {
        "LookupKey": "b67af8a8aedb9a5503b9f5323328799e0ed4f3b121555143b3805c31e7a944a9",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "WoodBurningStove",
        "StandardLookupValue": "WoodBurningStove",
        "LegacyOdataValue": "Wood Burning Stove"
    },
    {
        "LookupKey": "a5bcff3a6895f1932fee075ef4b2306ff0f5fb66e3e8ee5fe3b1d7925e97d256",
        "LookupName": "FireplaceFeatures",
        "LookupValue": "ZeroClearance",
        "StandardLookupValue": "ZeroClearance",
        "LegacyOdataValue": "Zero Clearance"
    },
    {
        "LookupKey": "76dec42210a8e518994e60ffe937403b8dabfff9649f281ac66d23825699837a",
        "LookupName": "Flooring",
        "LookupValue": "Adobe",
        "StandardLookupValue": "Adobe",
        "LegacyOdataValue": "Adobe"
    },
    {
        "LookupKey": "1926bd30c03a9d8818ae87c38159fe9a93f8bcd04391effcb130e36c6dac1bb1",
        "LookupName": "Flooring",
        "LookupValue": "Bamboo",
        "StandardLookupValue": "Bamboo",
        "LegacyOdataValue": "Bamboo"
    },
    {
        "LookupKey": "075d3ec37c0c03ce453e89430f6af6731e142ce8e2e23cc47d30ec596bfb0120",
        "LookupName": "Flooring",
        "LookupValue": "Brick",
        "StandardLookupValue": "Brick",
        "LegacyOdataValue": "Brick"
    },
    {
        "LookupKey": "55eb5ad038c9c7a9e71f096e28de63acc34c594a6818c5fe74b5302179ca0b7c",
        "LookupName": "Flooring",
        "LookupValue": "Carpet",
        "StandardLookupValue": "Carpet",
        "LegacyOdataValue": "Carpet"
    },
    {
        "LookupKey": "4a568b6a0ab60af8ae0140cfddba2703757e9276911c8379a3f8ee020f4bb215",
        "LookupName": "Flooring",
        "LookupValue": "CeramicTile",
        "StandardLookupValue": "CeramicTile",
        "LegacyOdataValue": "Ceramic Tile"
    },
    {
        "LookupKey": "344bbd35fbc4e30990583242a529e42677c0288be0886a3a46d816020f54d265",
        "LookupName": "Flooring",
        "LookupValue": "Clay",
        "StandardLookupValue": "Clay",
        "LegacyOdataValue": "Clay"
    },
    {
        "LookupKey": "98ea31a7d46a10683c5f35dceb19b1ec22f0fd262240692beeaa610482666984",
        "LookupName": "Flooring",
        "LookupValue": "Combination",
        "StandardLookupValue": "Combination",
        "LegacyOdataValue": "Combination"
    },
    {
        "LookupKey": "0034b821563bf7453b166d042956d8e861c71f9612c305c118f45e9d78a2c1a0",
        "LookupName": "Flooring",
        "LookupValue": "Concrete",
        "StandardLookupValue": "Concrete",
        "LegacyOdataValue": "Concrete"
    },
    {
        "LookupKey": "088216d499b55f568bb09a08a5b588809ca867e6289adffeef731ba6b7e7ddc5",
        "LookupName": "Flooring",
        "LookupValue": "Cork",
        "StandardLookupValue": "Cork",
        "LegacyOdataValue": "Cork"
    },
    {
        "LookupKey": "228789589acb2b965207cbc2c250613ee7f26b3ecd8b9a249af7af3c21770b35",
        "LookupName": "Flooring",
        "LookupValue": "CriGreenLabelPlusCertifiedCarpet",
        "StandardLookupValue": "CriGreenLabelPlusCertifiedCarpet",
        "LegacyOdataValue": "CRI Green Label Plus Certified Carpet"
    },
    {
        "LookupKey": "fa4c55740357f51785f3bb265fc69d7745b3920bb33bf4d08aa4d588bfbfb015",
        "LookupName": "Flooring",
        "LookupValue": "Dirt",
        "StandardLookupValue": "Dirt",
        "LegacyOdataValue": "Dirt"
    },
    {
        "LookupKey": "56d617943af2578aa811156ae7e28b7e54f33b68d187afb6e3266b61d2515e1e",
        "LookupName": "Flooring",
        "LookupValue": "FloorscoreCertifiedFlooring",
        "StandardLookupValue": "FloorscoreCertifiedFlooring",
        "LegacyOdataValue": "FloorScorer Certified Flooring"
    },
    {
        "LookupKey": "a7c40585a4dc926e9531d6287b9a157c57e50bd9fb7e8bd9e0e2cf551d34003c",
        "LookupName": "Flooring",
        "LookupValue": "FscOrSfiCertifiedSourceHardwood",
        "StandardLookupValue": "FscOrSfiCertifiedSourceHardwood",
        "LegacyOdataValue": "FSC or SFI Certified Source Hardwood"
    },
    {
        "LookupKey": "ea0b959a6f5518e4ca3b94d42fbfcabfe2d941c3a556c319ac71360230188d52",
        "LookupName": "Flooring",
        "LookupValue": "Granite",
        "StandardLookupValue": "Granite",
        "LegacyOdataValue": "Granite"
    },
    {
        "LookupKey": "daca9490f91c7fe7d4d7e5b2edb5d8903f5d73d8c23239dae3c6631d8232defc",
        "LookupName": "Flooring",
        "LookupValue": "Hardwood",
        "StandardLookupValue": "Hardwood",
        "LegacyOdataValue": "Hardwood"
    },
    {
        "LookupKey": "b76c48ae76dc5ad2339cadd402482fde170117cb685cb0f0a5842e9cfed093f6",
        "LookupName": "Flooring",
        "LookupValue": "Laminate",
        "StandardLookupValue": "Laminate",
        "LegacyOdataValue": "Laminate"
    },
    {
        "LookupKey": "26a4c978557f20ac55c4cbe9bac902331e6f3b4b406c062d2065e88b0dcd29b0",
        "LookupName": "Flooring",
        "LookupValue": "Linoleum",
        "StandardLookupValue": "Linoleum",
        "LegacyOdataValue": "Linoleum"
    },
    {
        "LookupKey": "974fe6acc1c8f1153285b7224e0f2bf0cbe7eef10d62c3a897a4a02b2f39449c",
        "LookupName": "Flooring",
        "LookupValue": "Marble",
        "StandardLookupValue": "Marble",
        "LegacyOdataValue": "Marble"
    },
    {
        "LookupKey": "634758f981fa427f0c7e5b6882af20af139ef614b7653071fe9169a853e3c1b9",
        "LookupName": "Flooring",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "474aa53a25c49596ac3b374c65d2620bd514192c2e06a2409d0060eb73b2f626",
        "LookupName": "Flooring",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "0da6403cc3db091baab0d5d01380f733981bcf85008b642c2c0dc0497064de7b",
        "LookupName": "Flooring",
        "LookupValue": "PaintedStained",
        "StandardLookupValue": "PaintedStained",
        "LegacyOdataValue": "Painted/Stained"
    },
    {
        "LookupKey": "c0552e1be7ec6a571e684eaca7d6f8dab13203411ea77a4a5f594a997b5dddb5",
        "LookupName": "Flooring",
        "LookupValue": "Parquet",
        "StandardLookupValue": "Parquet",
        "LegacyOdataValue": "Parquet"
    },
    {
        "LookupKey": "c7f10683d6013a9f04c819a5f180a72134c1cfbaccbbd48b6fbbb1df3bb53768",
        "LookupName": "Flooring",
        "LookupValue": "Pavers",
        "StandardLookupValue": "Pavers",
        "LegacyOdataValue": "Pavers"
    },
    {
        "LookupKey": "d1388d3ee44093af0a7d1fb0b88b6279b73756642d5ae22311169096b6b4648d",
        "LookupName": "Flooring",
        "LookupValue": "ReclaimedWood",
        "StandardLookupValue": "ReclaimedWood",
        "LegacyOdataValue": "Reclaimed Wood"
    },
    {
        "LookupKey": "1f5be6c7a4c72bb6f044fbc3db52bc6dd9c71d14bf94c2c43cd055cde076f19a",
        "LookupName": "Flooring",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "6ce0e1960cd8285551fc7360722c78dbe45a2c44b6d68ee0f08c63bfa9a91510",
        "LookupName": "Flooring",
        "LookupValue": "SimulatedWood",
        "StandardLookupValue": "SimulatedWood",
        "LegacyOdataValue": "Simulated Wood"
    },
    {
        "LookupKey": "777520f9db6d6397464bd48b0a8b933679bff46b448e35c2ec3ac0db2d0e9ed4",
        "LookupName": "Flooring",
        "LookupValue": "Slate",
        "StandardLookupValue": "Slate",
        "LegacyOdataValue": "Slate"
    },
    {
        "LookupKey": "6a583184fe3d97d5f54d1c6137bc9f633d2c6e44c8576a9149f0bf7ff0e45295",
        "LookupName": "Flooring",
        "LookupValue": "Softwood",
        "StandardLookupValue": "Softwood",
        "LegacyOdataValue": "Softwood"
    },
    {
        "LookupKey": "56a28fc562eb9739394342cfafd620a61ec656708d7995b61216fe0372fbf61f",
        "LookupName": "Flooring",
        "LookupValue": "Stamped",
        "StandardLookupValue": "Stamped",
        "LegacyOdataValue": "Stamped"
    },
    {
        "LookupKey": "f34b8000fafeb70daae6f69e79f43fabc34f4676d25402534d663b6877c5937d",
        "LookupName": "Flooring",
        "LookupValue": "Stone",
        "StandardLookupValue": "Stone",
        "LegacyOdataValue": "Stone"
    },
    {
        "LookupKey": "c641eb8ea4007462e2de39dd6840e3659d53adaa17c3998c72901862e0db5fd4",
        "LookupName": "Flooring",
        "LookupValue": "Sustainable",
        "StandardLookupValue": "Sustainable",
        "LegacyOdataValue": "Sustainable"
    },
    {
        "LookupKey": "cab86b6fd27e23b7144bdb63965799944bef548022ea6d11005ce38f6d4bd11d",
        "LookupName": "Flooring",
        "LookupValue": "Terrazzo",
        "StandardLookupValue": "Terrazzo",
        "LegacyOdataValue": "Terrazzo"
    },
    {
        "LookupKey": "7d0697858aaa6f4e6498a5f20d2ff1f045a1ffa0f505c453b08600195ca938ae",
        "LookupName": "Flooring",
        "LookupValue": "Tile",
        "StandardLookupValue": "Tile",
        "LegacyOdataValue": "Tile"
    },
    {
        "LookupKey": "bb8c1f437ca555fa441ed9792fff0330dcfc1193bb4a113a4f764ffa0ac23510",
        "LookupName": "Flooring",
        "LookupValue": "Varies",
        "StandardLookupValue": "Varies",
        "LegacyOdataValue": "Varies"
    },
    {
        "LookupKey": "280b2457d9bcf3d038f3d511f2d2974dd3438ba4ccb31712b086b273054593b0",
        "LookupName": "Flooring",
        "LookupValue": "Vinyl",
        "StandardLookupValue": "Vinyl",
        "LegacyOdataValue": "Vinyl"
    },
    {
        "LookupKey": "39e393357ac824b4f93c8d2910e2564f94d44ed8f409ea943b082e4ef2921d07",
        "LookupName": "Flooring",
        "LookupValue": "Wood",
        "StandardLookupValue": "Wood",
        "LegacyOdataValue": "Wood"
    },
    {
        "LookupKey": "5cb193afc5b36bd87ec7c557882b341f37d5790b552b2039d3e6e0e0a94c4f89",
        "LookupName": "FoundationDetails",
        "LookupValue": "Block",
        "StandardLookupValue": "Block",
        "LegacyOdataValue": "Block"
    },
    {
        "LookupKey": "7065df5d820faf90052a5d3a7ca99a287e7cdda27c37680269a15d6a8981e1ca",
        "LookupName": "FoundationDetails",
        "LookupValue": "BrickMortar",
        "StandardLookupValue": "BrickMortar",
        "LegacyOdataValue": "Brick/Mortar"
    },
    {
        "LookupKey": "e891408d0049d635b76db3416d88445afc2225abb61be3a874d7a221d042af64",
        "LookupName": "FoundationDetails",
        "LookupValue": "Combination",
        "StandardLookupValue": "Combination",
        "LegacyOdataValue": "Combination"
    },
    {
        "LookupKey": "1f191ed875ec6fd23460bc98bb541692fc7a153d8a189160ae6afd1060c254d7",
        "LookupName": "FoundationDetails",
        "LookupValue": "ConcretePerimeter",
        "StandardLookupValue": "ConcretePerimeter",
        "LegacyOdataValue": "Concrete Perimeter"
    },
    {
        "LookupKey": "3a535062580345923d958e11889a207699ace4b59bc82ef08b9bc6cded42cc6e",
        "LookupName": "FoundationDetails",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "292dcfef2736bb46f17da96a38be97989ac7c507551d05a9ef4705364d13ff0e",
        "LookupName": "FoundationDetails",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "f7dbefcb328241c102b5d172006b1f0dafb4cabef9461f969f6df103b482dc93",
        "LookupName": "FoundationDetails",
        "LookupValue": "Permanent",
        "StandardLookupValue": "Permanent",
        "LegacyOdataValue": "Permanent"
    },
    {
        "LookupKey": "89257bc10bb3a81fd682e526544d73133e2a742b4e8a31e77b634ce0e01ce266",
        "LookupName": "FoundationDetails",
        "LookupValue": "PillarPostPier",
        "StandardLookupValue": "PillarPostPier",
        "LegacyOdataValue": "Pillar/Post/Pier"
    },
    {
        "LookupKey": "ff59132fa7631827d6a9459264020c34a7b68c6866f7ed14fa13cd311efeffa5",
        "LookupName": "FoundationDetails",
        "LookupValue": "Raised",
        "StandardLookupValue": "Raised",
        "LegacyOdataValue": "Raised"
    },
    {
        "LookupKey": "31f535ad86b473b2406d522951a96c500281aafb50e5a69f5a3b8f3509d365c3",
        "LookupName": "FoundationDetails",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "5f8b2e5cdd892819f1674a63cdf50b3966506ebad246cef888e6be1208a1f768",
        "LookupName": "FoundationDetails",
        "LookupValue": "Slab",
        "StandardLookupValue": "Slab",
        "LegacyOdataValue": "Slab"
    },
    {
        "LookupKey": "fcc24bc88b6b9599f0b7529c3f15ba8dc74d3db9ea611bc055a200926edb9106",
        "LookupName": "FoundationDetails",
        "LookupValue": "Stone",
        "StandardLookupValue": "Stone",
        "LegacyOdataValue": "Stone"
    },
    {
        "LookupKey": "3cc1782419006c014492574d206d88a003872dcdd844074dab42afbc687c3883",
        "LookupName": "FrontageType",
        "LookupValue": "BayHarbor",
        "StandardLookupValue": "BayHarbor",
        "LegacyOdataValue": "Bay/Harbor"
    },
    {
        "LookupKey": "757eef734412731e9a00f92f6e72c5c6d6d730be2480d4c7f30ead3432def545",
        "LookupName": "FrontageType",
        "LookupValue": "GolfCourse",
        "StandardLookupValue": "GolfCourse",
        "LegacyOdataValue": "Golf Course"
    },
    {
        "LookupKey": "e0f556f2a5b9df60dac9fbfae428c5375dc6b13c42735d605f099a2d9f95089b",
        "LookupName": "FrontageType",
        "LookupValue": "LagoonEstuary",
        "StandardLookupValue": "LagoonEstuary",
        "LegacyOdataValue": "Lagoon/Estuary"
    },
    {
        "LookupKey": "447b7c0171f5644a56778b2ec7dbd4b81cdfe1fe65f416ae1dd5f7b47851ff71",
        "LookupName": "FrontageType",
        "LookupValue": "Lakefront",
        "StandardLookupValue": "Lakefront",
        "LegacyOdataValue": "Lakefront"
    },
    {
        "LookupKey": "8a8b8cfa2f72a5511cee12289d4117c60cef95450b17519478f5cedcef4b88fc",
        "LookupName": "FrontageType",
        "LookupValue": "Oceanfront",
        "StandardLookupValue": "Oceanfront",
        "LegacyOdataValue": "Oceanfront"
    },
    {
        "LookupKey": "5d6d38a4441fda259d396c41f1e7ef1b963a4db784959e62c86cb3081a91264b",
        "LookupName": "FrontageType",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "6e1ca6646fa6d12df85033b9174f59617234732994003767fc6e8e11d6191dda",
        "LookupName": "FrontageType",
        "LookupValue": "River",
        "StandardLookupValue": "River",
        "LegacyOdataValue": "River"
    },
    {
        "LookupKey": "99c10f1dcd03205362b262ae9c9c048f46e3a23e5d62534fb06b42d58025c90d",
        "LookupName": "FrontageType",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "1802ea017bb1ff2186b92cd5d8a66fa51a9cf8684aa8ed752863f08ee761a9ec",
        "LookupName": "FrontageType",
        "LookupValue": "Waterfront",
        "StandardLookupValue": "Waterfront",
        "LegacyOdataValue": "Waterfront"
    },
    {
        "LookupKey": "367bce5eb7c51120407e54ee2fcebc80150fd3574d779fed038c74e53d69ee49",
        "LookupName": "Furnished",
        "LookupValue": "Furnished",
        "StandardLookupValue": "Furnished",
        "LegacyOdataValue": "Furnished"
    },
    {
        "LookupKey": "9db1eea10f69486d7a9fe92ae16a376cfc2cc0e7fcf9aeca591661a7901cdfc5",
        "LookupName": "Furnished",
        "LookupValue": "Negotiable",
        "StandardLookupValue": "Negotiable",
        "LegacyOdataValue": "Negotiable"
    },
    {
        "LookupKey": "2590f230ead6295410a8c78f9ee21be2aebc505cdea8457058952843ad0fc0db",
        "LookupName": "Furnished",
        "LookupValue": "Partially",
        "StandardLookupValue": "Partially",
        "LegacyOdataValue": "Partially"
    },
    {
        "LookupKey": "87dd0b617aeeda8cf0e126ca9465ba279eaf1f91dd4e258dd97ca10b5909acea",
        "LookupName": "Furnished",
        "LookupValue": "Unfurnished",
        "StandardLookupValue": "Unfurnished",
        "LegacyOdataValue": "Unfurnished"
    },
    {
        "LookupKey": "470f53461f21b06de290d709dcf0c38a02f5d7434dbc5aa0dfe4d77e65866823",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "CertifiedPassiveHouse",
        "StandardLookupValue": "CertifiedPassiveHouse",
        "LegacyOdataValue": "Certified Passive House"
    },
    {
        "LookupKey": "5dde79952381d60a52377a163d1c3c596147cbb0909eab5f4d32ad051cc61ec2",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "EnergyStarCertifiedHomes",
        "StandardLookupValue": "EnergyStarCertifiedHomes",
        "LegacyOdataValue": "ENERGY STAR Certified Homes"
    },
    {
        "LookupKey": "26c5f3e698ddb953e6d3761671b24680662a5a63f8fb3bda4e209251e09b029a",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "Enerphit",
        "StandardLookupValue": "Enerphit",
        "LegacyOdataValue": "EnerPHit"
    },
    {
        "LookupKey": "6562d23c8acd3ea888695a35cefb9ec3a4b27cd2105b766c3115972586aaee7a",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "HersIndexScore",
        "StandardLookupValue": "HersIndexScore",
        "LegacyOdataValue": "HERS Index Score"
    },
    {
        "LookupKey": "66309b7eea02d6dbe4206afb409ab2b7f45f4a5faf1f479dc7eb6729e7c7c801",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "HomeEnergyScore",
        "StandardLookupValue": "HomeEnergyScore",
        "LegacyOdataValue": "Home Energy Score"
    },
    {
        "LookupKey": "3eb81d850aed5c77278e1df2b05c594f7020592a0f6dec5e138e445ece169458",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "HomeEnergyUpgradeCertificateOfEnergyEfficiencyImprovements",
        "StandardLookupValue": "HomeEnergyUpgradeCertificateOfEnergyEfficiencyImprovements",
        "LegacyOdataValue": "Home Energy Upgrade Certificate of Energy Efficiency Improvements"
    },
    {
        "LookupKey": "ac18f90d00eda082768d328d581655763ed0752f15ab2b4e95e73d619eb43a84",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "HomeEnergyUpgradeCertificateOfEnergyEfficiencyPerformance",
        "StandardLookupValue": "HomeEnergyUpgradeCertificateOfEnergyEfficiencyPerformance",
        "LegacyOdataValue": "Home Energy Upgrade Certificate of Energy Efficiency Performance"
    },
    {
        "LookupKey": "4a0eef3d4170b830d46cb641b9b82a80db2b86f659927e7820a086f8399816b0",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "HomePerformanceWithEnergyStar",
        "StandardLookupValue": "HomePerformanceWithEnergyStar",
        "LegacyOdataValue": "Home Performance with ENERGY STAR"
    },
    {
        "LookupKey": "c33486ebb23df12241b8838c7d5d6dbeea056a052d5082b211f3856caf4f9470",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "IndoorAirplus",
        "StandardLookupValue": "IndoorAirplus",
        "LegacyOdataValue": "Indoor airPLUS"
    },
    {
        "LookupKey": "25ea131919fe79ce198df314748980b11d0cde7f477d9e8a1e11a7be9a9f32cf",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "LeedForHomes",
        "StandardLookupValue": "LeedForHomes",
        "LegacyOdataValue": "LEED For Homes"
    },
    {
        "LookupKey": "7f83a37c25aaff47b2ac745268171d6cf69ab7a3f8f4da9cdd60b520770b0410",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "LivingBuildingChallenge",
        "StandardLookupValue": "LivingBuildingChallenge",
        "LegacyOdataValue": "Living Building Challenge"
    },
    {
        "LookupKey": "c5b6752938f5459e48923a07b6119f88c3ba9e1ae4790b9f0c05520889470565",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "NgbsNewConstruction",
        "StandardLookupValue": "NgbsNewConstruction",
        "LegacyOdataValue": "NGBS New Construction"
    },
    {
        "LookupKey": "cc98bffa4d67cc0dd1697e61efc7c7265bd5617b9005aa898e7784e9ae4c3cee",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "NgbsSmallProjectsRemodel",
        "StandardLookupValue": "NgbsSmallProjectsRemodel",
        "LegacyOdataValue": "NGBS Small Projects Remodel"
    },
    {
        "LookupKey": "722ebde51b4026ca15b451e8624603859be41c8e5e7b5004d02b7eabb6fdc125",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "NgbsWholeHomeRemodel",
        "StandardLookupValue": "NgbsWholeHomeRemodel",
        "LegacyOdataValue": "NGBS Whole-Home Remodel"
    },
    {
        "LookupKey": "e67d504c8b509b2c7e5238648e49ba5dbc20082bd69dfd695766ecbc87293614",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "PhiusPlus",
        "StandardLookupValue": "PhiusPlus",
        "LegacyOdataValue": "PHIUS+"
    },
    {
        "LookupKey": "01a66d512142dd76c81c53a278f65769008e689e62919f9eaeaea5e42f67fd59",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "Watersense",
        "StandardLookupValue": "Watersense",
        "LegacyOdataValue": "WaterSense"
    },
    {
        "LookupKey": "71d890b1b92ff73b86645cf227bd6f521be3443c25786041b6bb3f53f6b6b759",
        "LookupName": "GreenBuildingVerificationType",
        "LookupValue": "ZeroEnergyReadyHome",
        "StandardLookupValue": "ZeroEnergyReadyHome",
        "LegacyOdataValue": "Zero Energy Ready Home"
    },
    {
        "LookupKey": "2a22f25dfdafd7cf904b662c786268c0cf7d7cceaf50f5f7b6fc17742b26a045",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Appliances",
        "StandardLookupValue": "Appliances",
        "LegacyOdataValue": "Appliances"
    },
    {
        "LookupKey": "97ad5483dd8e3129e770815a33d4a39f561313640351988966aa993f2b238322",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Construction",
        "StandardLookupValue": "Construction",
        "LegacyOdataValue": "Construction"
    },
    {
        "LookupKey": "ef8c704fe8f07863ad20ef2e427c5e413c55eea5a08f18a75fbe97722c4eeedf",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Doors",
        "StandardLookupValue": "Doors",
        "LegacyOdataValue": "Doors"
    },
    {
        "LookupKey": "adc224677f8666c7b3572a82b01f44237494a57278c32d5d0756e74363743453",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "ExposureShade",
        "StandardLookupValue": "ExposureShade",
        "LegacyOdataValue": "Exposure/Shade"
    },
    {
        "LookupKey": "091d3f7e35aa2782df261521daa28b7c10c131fcc58853ec514ea72dcb256576",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Hvac",
        "StandardLookupValue": "Hvac",
        "LegacyOdataValue": "HVAC"
    },
    {
        "LookupKey": "1add54c7fca14580500cdf729a3e8c50f147f4306ecaffd90c61932d3eb708e0",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Incentives",
        "StandardLookupValue": "Incentives",
        "LegacyOdataValue": "Incentives"
    },
    {
        "LookupKey": "362335eafe0d7bc468f05d1c6d6d3fb3046daf365ca463ca9436c5eaf931e97f",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Insulation",
        "StandardLookupValue": "Insulation",
        "LegacyOdataValue": "Insulation"
    },
    {
        "LookupKey": "540d9485afa196e726633926c67529aaabc6d2f7ff2923dee882acb257f9a30b",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Lighting",
        "StandardLookupValue": "Lighting",
        "LegacyOdataValue": "Lighting"
    },
    {
        "LookupKey": "6026917b09675bd0b1f189e0ca3fa9e49c19a27342207d99748167bee7bfc993",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Roof",
        "StandardLookupValue": "Roof",
        "LegacyOdataValue": "Roof"
    },
    {
        "LookupKey": "deeb25b10f5bafc1dd6f42bad9ace88f72a5e5c33f0578f1aeeb602412d60d69",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Thermostat",
        "StandardLookupValue": "Thermostat",
        "LegacyOdataValue": "Thermostat"
    },
    {
        "LookupKey": "27b87f9a9090384f3380fe69bb5dc94d812488d92336646b78c788b262f4eebd",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "WaterHeater",
        "StandardLookupValue": "WaterHeater",
        "LegacyOdataValue": "Water Heater"
    },
    {
        "LookupKey": "99c088170033818d60eecb2cd423647891950f84171463b98bef01874dd12b73",
        "LookupName": "GreenEnergyEfficient",
        "LookupValue": "Windows",
        "StandardLookupValue": "Windows",
        "LegacyOdataValue": "Windows"
    },
    {
        "LookupKey": "52e5494a249687e6cb8c88d3fe1ab9db8afd2453a227d3187bcc8d6e4f9d2bac",
        "LookupName": "GreenEnergyGeneration",
        "LookupValue": "Solar",
        "StandardLookupValue": "Solar",
        "LegacyOdataValue": "Solar"
    },
    {
        "LookupKey": "2020282508fd861c77b9fa14440d91af33f05847423c17604462a56bad9ba310",
        "LookupName": "GreenEnergyGeneration",
        "LookupValue": "Wind",
        "StandardLookupValue": "Wind",
        "LegacyOdataValue": "Wind"
    },
    {
        "LookupKey": "008587cef821f4602efdc0b1a2296ee27cc844d4d9905f8cdb5c9f0399f6a999",
        "LookupName": "GreenIndoorAirQuality",
        "LookupValue": "ContaminantControl",
        "StandardLookupValue": "ContaminantControl",
        "LegacyOdataValue": "Contaminant Control"
    },
    {
        "LookupKey": "9010cb89c668e16abe5433835bb9656729daddfdfd85a5f863beb923f30da7ac",
        "LookupName": "GreenIndoorAirQuality",
        "LookupValue": "IntegratedPestManagement",
        "StandardLookupValue": "IntegratedPestManagement",
        "LegacyOdataValue": "Integrated Pest Management"
    },
    {
        "LookupKey": "d2ced1f1bf86eb3b2a2bad7eac9f04005c72c5d8f564f82fde4fdeb9c0b02e9d",
        "LookupName": "GreenIndoorAirQuality",
        "LookupValue": "MoistureControl",
        "StandardLookupValue": "MoistureControl",
        "LegacyOdataValue": "Moisture Control"
    },
    {
        "LookupKey": "a57c40f07970559ee6f9788cb65c1e47ddd1976ea5653cac90e4b6c52dbc5d24",
        "LookupName": "GreenIndoorAirQuality",
        "LookupValue": "Ventilation",
        "StandardLookupValue": "Ventilation",
        "LegacyOdataValue": "Ventilation"
    },
    {
        "LookupKey": "751631e3876825a7e2c8384d9aece423585fdce9cd027ad7522c8ffdd47b9e92",
        "LookupName": "GreenSustainability",
        "LookupValue": "ConservingMethods",
        "StandardLookupValue": "ConservingMethods",
        "LegacyOdataValue": "Conserving Methods"
    },
    {
        "LookupKey": "6cda0ee136787aeaf4da4e77bad1bd8b009858c01a1270270bd73253ee685e91",
        "LookupName": "GreenSustainability",
        "LookupValue": "OnsiteRecyclingCenter",
        "StandardLookupValue": "OnsiteRecyclingCenter",
        "LegacyOdataValue": "Onsite Recycling Center"
    },
    {
        "LookupKey": "0482476bad96d332b0e106baa2b6b52b4923e22113b42f2ef810e9728103b305",
        "LookupName": "GreenSustainability",
        "LookupValue": "RecyclableMaterials",
        "StandardLookupValue": "RecyclableMaterials",
        "LegacyOdataValue": "Recyclable Materials"
    },
    {
        "LookupKey": "d8bcb1db95082349c884e96d77fb3bbfb47f9ca19411efe6f557677719c9178d",
        "LookupName": "GreenSustainability",
        "LookupValue": "RecycledMaterials",
        "StandardLookupValue": "RecycledMaterials",
        "LegacyOdataValue": "Recycled Materials"
    },
    {
        "LookupKey": "c4e708b84182769c6a5d3430080c1603843079c7e4a719a447b32aca8322c1e1",
        "LookupName": "GreenSustainability",
        "LookupValue": "RegionallySourcedMaterials",
        "StandardLookupValue": "RegionallySourcedMaterials",
        "LegacyOdataValue": "Regionally-Sourced Materials"
    },
    {
        "LookupKey": "35953824334abe769020c8fe9c7d894b9b99dace380d1b2cf6f308c6437eb016",
        "LookupName": "GreenSustainability",
        "LookupValue": "RenewableMaterials",
        "StandardLookupValue": "RenewableMaterials",
        "LegacyOdataValue": "Renewable Materials"
    },
    {
        "LookupKey": "619e594bfd87f68fe5ec1edc284ef28cbb47357e17de3049d27294828899132f",
        "LookupName": "GreenSustainability",
        "LookupValue": "SalvagedMaterials",
        "StandardLookupValue": "SalvagedMaterials",
        "LegacyOdataValue": "Salvaged Materials"
    },
    {
        "LookupKey": "79342c237094a4d0758167db830083388010908a6b8a5264d9427a1a1f0781dd",
        "LookupName": "GreenWaterConservation",
        "LookupValue": "EfficientHotWaterDistribution",
        "StandardLookupValue": "EfficientHotWaterDistribution",
        "LegacyOdataValue": "Efficient Hot Water Distribution"
    },
    {
        "LookupKey": "fdbf4703bfc00dce86f7e3c361069d5654d7083a0a8c401957e47ad369c1d08d",
        "LookupName": "GreenWaterConservation",
        "LookupValue": "GrayWaterSystem",
        "StandardLookupValue": "GrayWaterSystem",
        "LegacyOdataValue": "Gray Water System"
    },
    {
        "LookupKey": "d47c607bdf6d4f00dbca66bfe65196ba8aa75336fc93c8d7cb1099b696bfeeb1",
        "LookupName": "GreenWaterConservation",
        "LookupValue": "GreenInfrastructure",
        "StandardLookupValue": "GreenInfrastructure",
        "LegacyOdataValue": "Green Infrastructure"
    },
    {
        "LookupKey": "ad58018bd2f0938b0fa873511812ed4f92d51326dcd648e42cbba887809e6104",
        "LookupName": "GreenWaterConservation",
        "LookupValue": "LowFlowFixtures",
        "StandardLookupValue": "LowFlowFixtures",
        "LegacyOdataValue": "Low-Flow Fixtures"
    },
    {
        "LookupKey": "494c7880e96cbb5edd0f34f5b8956c830ff414e638a2a45c9acf489e39222541",
        "LookupName": "GreenWaterConservation",
        "LookupValue": "WaterRecycling",
        "StandardLookupValue": "WaterRecycling",
        "LegacyOdataValue": "Water Recycling"
    },
    {
        "LookupKey": "7b1ece486ff5c4d65ddd20c60206220eb833593ddd3b497ce2ac31b448ff3ede",
        "LookupName": "GreenWaterConservation",
        "LookupValue": "WaterSmartLandscaping",
        "StandardLookupValue": "WaterSmartLandscaping",
        "LegacyOdataValue": "Water-Smart Landscaping"
    },
    {
        "LookupKey": "c41f32d6a49e39e7552cff9682c3e409ee25f11f123311b6eb22ad11acd1b73c",
        "LookupName": "Heating",
        "LookupValue": "ActiveSolar",
        "StandardLookupValue": "ActiveSolar",
        "LegacyOdataValue": "Active Solar"
    },
    {
        "LookupKey": "ec496d45eade8ac72277f7f4d64fa5b3a8005772a2872c7d8c59c1eb99691682",
        "LookupName": "Heating",
        "LookupValue": "Baseboard",
        "StandardLookupValue": "Baseboard",
        "LegacyOdataValue": "Baseboard"
    },
    {
        "LookupKey": "f8c4b5fa8e10e05ce6ccf93c7a3f798af1482a44f310b1265f2d218c19ea996a",
        "LookupName": "Heating",
        "LookupValue": "Ceiling",
        "StandardLookupValue": "Ceiling",
        "LegacyOdataValue": "Ceiling"
    },
    {
        "LookupKey": "0bb17cf702ea7d469f26de8eda19fbc149fdbc95ffd1e9124c3d3944c367704e",
        "LookupName": "Heating",
        "LookupValue": "Central",
        "StandardLookupValue": "Central",
        "LegacyOdataValue": "Central"
    },
    {
        "LookupKey": "b4aeaec305ee403f4fa0ea174873d8e0f20ebead56640f6349ff2fd477775be3",
        "LookupName": "Heating",
        "LookupValue": "Coal",
        "StandardLookupValue": "Coal",
        "LegacyOdataValue": "Coal"
    },
    {
        "LookupKey": "80f2b0907cb028e503bbfb49d23de1daf6216f89326f8c3e1fdee28c3a10f1b8",
        "LookupName": "Heating",
        "LookupValue": "CoalStove",
        "StandardLookupValue": "CoalStove",
        "LegacyOdataValue": "Coal Stove"
    },
    {
        "LookupKey": "7ff7fc20c2d6daef965e4366037ed346fe871e4d5237205898740c37896185d6",
        "LookupName": "Heating",
        "LookupValue": "Ductless",
        "StandardLookupValue": "Ductless",
        "LegacyOdataValue": "Ductless"
    },
    {
        "LookupKey": "64f40d2c002ece9ba6148a85d936f70ca98e26313c338749581c19eee48c0dba",
        "LookupName": "Heating",
        "LookupValue": "Electric",
        "StandardLookupValue": "Electric",
        "LegacyOdataValue": "Electric"
    },
    {
        "LookupKey": "46b288f6fd20cc017c5f6d7fee63574d56c868083adf27be847846281b4771fc",
        "LookupName": "Heating",
        "LookupValue": "EnergyStarAccaRsiQualifiedInstallation",
        "StandardLookupValue": "EnergyStarAccaRsiQualifiedInstallation",
        "LegacyOdataValue": "ENERGY STAR/ACCA RSI Qualified Installation"
    },
    {
        "LookupKey": "ce3381636c71400195992e8f6f077e743af0191ff202d40a6ab4a10e3935c23b",
        "LookupName": "Heating",
        "LookupValue": "EnergyStarQualifiedEquipment",
        "StandardLookupValue": "EnergyStarQualifiedEquipment",
        "LegacyOdataValue": "ENERGY STAR Qualified Equipment"
    },
    {
        "LookupKey": "fa91348a84844d82afa98b1f53f3e619b67483883240591e8817a85a11cbbff6",
        "LookupName": "Heating",
        "LookupValue": "ExhaustFan",
        "StandardLookupValue": "ExhaustFan",
        "LegacyOdataValue": "Exhaust Fan"
    },
    {
        "LookupKey": "d514fbfa7717d94e2db6470c20ee9d69cdbcddfd5866dad668c7c578980fd3d5",
        "LookupName": "Heating",
        "LookupValue": "FireplaceInsert",
        "StandardLookupValue": "FireplaceInsert",
        "LegacyOdataValue": "Fireplace Insert"
    },
    {
        "LookupKey": "47a3a234a22760991c7d6a2bec3a1f21faadb57019dcf318789e5727560c9b91",
        "LookupName": "Heating",
        "LookupValue": "Fireplaces",
        "StandardLookupValue": "Fireplaces",
        "LegacyOdataValue": "Fireplaces"
    },
    {
        "LookupKey": "a8c142e3b7ae976f2301d005087715c3f64c7bca868c7828110ec84c3347b4bc",
        "LookupName": "Heating",
        "LookupValue": "FloorFurnace",
        "StandardLookupValue": "FloorFurnace",
        "LegacyOdataValue": "Floor Furnace"
    },
    {
        "LookupKey": "26f99ac3adafa6d446f5cc834bb4920dbdc986a311edb67711ce3014aa69d1a8",
        "LookupName": "Heating",
        "LookupValue": "ForcedAir",
        "StandardLookupValue": "ForcedAir",
        "LegacyOdataValue": "Forced Air"
    },
    {
        "LookupKey": "0e8aef93a9333972bcdaa7ec5a66599fcb3e1ebb8f58d43f0a3262516d6fdcbf",
        "LookupName": "Heating",
        "LookupValue": "Geothermal",
        "StandardLookupValue": "Geothermal",
        "LegacyOdataValue": "Geothermal"
    },
    {
        "LookupKey": "a8d588d0fd9c28e6e2987611ffa516755896d7fd4e013988ce698697bd0ee3ee",
        "LookupName": "Heating",
        "LookupValue": "Gravity",
        "StandardLookupValue": "Gravity",
        "LegacyOdataValue": "Gravity"
    },
    {
        "LookupKey": "dce109be010bebc2ad86a635ec6939f30955402b970610312cef663e3f216cac",
        "LookupName": "Heating",
        "LookupValue": "HeatPump",
        "StandardLookupValue": "HeatPump",
        "LegacyOdataValue": "Heat Pump"
    },
    {
        "LookupKey": "6082a45a150f4a04440864879fa9fcbb523d79c1ab2ea50330181b776fe855ff",
        "LookupName": "Heating",
        "LookupValue": "HotWater",
        "StandardLookupValue": "HotWater",
        "LegacyOdataValue": "Hot Water"
    },
    {
        "LookupKey": "1146442a85d5cc8e76924b6d70ad24d36653ac441a1c4f8662a4de28d10c34a4",
        "LookupName": "Heating",
        "LookupValue": "HumidityControl",
        "StandardLookupValue": "HumidityControl",
        "LegacyOdataValue": "Humidity Control"
    },
    {
        "LookupKey": "38cd1dc46441130c718b64d3aab7ad0bcebdc09c1b73584702e9ac353037ec70",
        "LookupName": "Heating",
        "LookupValue": "Kerosene",
        "StandardLookupValue": "Kerosene",
        "LegacyOdataValue": "Kerosene"
    },
    {
        "LookupKey": "b44cd46ef2635bd59d1d9c8992ebfea63165a1e80e6a972dd5c84c8e864d420a",
        "LookupName": "Heating",
        "LookupValue": "NaturalGas",
        "StandardLookupValue": "NaturalGas",
        "LegacyOdataValue": "Natural Gas"
    },
    {
        "LookupKey": "cf3de9efdda95225038dc4e3a040b57d8a112b63ef73702e70a9ded215a0666f",
        "LookupName": "Heating",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "db24f566f6b6606ed23c66f40daded8876c39f4b4a5008c919e1fdcead9ab288",
        "LookupName": "Heating",
        "LookupValue": "Oil",
        "StandardLookupValue": "Oil",
        "LegacyOdataValue": "Oil"
    },
    {
        "LookupKey": "4a300a4278b72932602086efa5dc3a785ecf2f3e7e2416851d0c3d69e27897e8",
        "LookupName": "Heating",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "a5a96cddb2e3a28ffecb89cdb5f8e4d5bb3d510b30533b8adb6f3977159bceb2",
        "LookupName": "Heating",
        "LookupValue": "PassiveSolar",
        "StandardLookupValue": "PassiveSolar",
        "LegacyOdataValue": "Passive Solar"
    },
    {
        "LookupKey": "308beee92a55620c5d57aa89b2012c0ca495e820a404bf454fe4c846fb48346b",
        "LookupName": "Heating",
        "LookupValue": "PelletStove",
        "StandardLookupValue": "PelletStove",
        "LegacyOdataValue": "Pellet Stove"
    },
    {
        "LookupKey": "411f6fff860569ecf5e35c93974afc06deb85619aedd267091a27f362cdc1437",
        "LookupName": "Heating",
        "LookupValue": "Propane",
        "StandardLookupValue": "Propane",
        "LegacyOdataValue": "Propane"
    },
    {
        "LookupKey": "787cef8c9778526b22dca9449587bac4587023386f62a6c31479d5ee82e84f7f",
        "LookupName": "Heating",
        "LookupValue": "PropaneStove",
        "StandardLookupValue": "PropaneStove",
        "LegacyOdataValue": "Propane Stove"
    },
    {
        "LookupKey": "34d71154e116f459ca9a52c7e6a11a5fd9f69794fe6637650c461f814d53841b",
        "LookupName": "Heating",
        "LookupValue": "Radiant",
        "StandardLookupValue": "Radiant",
        "LegacyOdataValue": "Radiant"
    },
    {
        "LookupKey": "a5103f6fbb89d933260b6be5bd4199e00481be467d1fe71a8e743d138ff8d0fa",
        "LookupName": "Heating",
        "LookupValue": "RadiantCeiling",
        "StandardLookupValue": "RadiantCeiling",
        "LegacyOdataValue": "Radiant Ceiling"
    },
    {
        "LookupKey": "63100136069011c35d4c793b5302e7f878ba567ce4fc0072e08db7af73796dae",
        "LookupName": "Heating",
        "LookupValue": "RadiantFloor",
        "StandardLookupValue": "RadiantFloor",
        "LegacyOdataValue": "Radiant Floor"
    },
    {
        "LookupKey": "a737d7099acca3f41b4e8e121f5a390d5f2b9023e6b72a09fcd3bdb3ed7c08e4",
        "LookupName": "Heating",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "2a94d91fec646fef81a247c8cf88c5718aa2cf4640073e7293a77649d4f24c3e",
        "LookupName": "Heating",
        "LookupValue": "SeparateMeters",
        "StandardLookupValue": "SeparateMeters",
        "LegacyOdataValue": "Separate Meters"
    },
    {
        "LookupKey": "bd0fb5845ebc7766d21231a15c70af8f5bbbf13e5376ec74cb64e375dbeb1611",
        "LookupName": "Heating",
        "LookupValue": "Solar",
        "StandardLookupValue": "Solar",
        "LegacyOdataValue": "Solar"
    },
    {
        "LookupKey": "6843a352cf112b1a4dc17aa105803a58957d2d8eacd95fc3ea252896070172ea",
        "LookupName": "Heating",
        "LookupValue": "SpaceHeater",
        "StandardLookupValue": "SpaceHeater",
        "LegacyOdataValue": "Space Heater"
    },
    {
        "LookupKey": "98220a93be71ea82923cec352bbd8f71a750074e79a49c76e60c25241b13523d",
        "LookupName": "Heating",
        "LookupValue": "Steam",
        "StandardLookupValue": "Steam",
        "LegacyOdataValue": "Steam"
    },
    {
        "LookupKey": "09c2ee3ba4724eb6f7e2d4618ff377a21b24dabcd35e8075eed1f398f315f0ab",
        "LookupName": "Heating",
        "LookupValue": "VariesByUnit",
        "StandardLookupValue": "VariesByUnit",
        "LegacyOdataValue": "Varies by Unit"
    },
    {
        "LookupKey": "51d301c367b6ff70ed3a95f2068e7ff485645ab44edefbd6da631a0042a4bcb8",
        "LookupName": "Heating",
        "LookupValue": "WallFurnace",
        "StandardLookupValue": "WallFurnace",
        "LegacyOdataValue": "Wall Furnace"
    },
    {
        "LookupKey": "764d9cb5dbb313bdd0874d698816966d70bed54cf166fdbb3766b34de05cd096",
        "LookupName": "Heating",
        "LookupValue": "Wood",
        "StandardLookupValue": "Wood",
        "LegacyOdataValue": "Wood"
    },
    {
        "LookupKey": "994df2a9fb6129c7ff7c736f95b5284b93b9bfd5d6ac837fd5a5418dbec855d8",
        "LookupName": "Heating",
        "LookupValue": "WoodStove",
        "StandardLookupValue": "WoodStove",
        "LegacyOdataValue": "Wood Stove"
    },
    {
        "LookupKey": "4b73fbd7cd8ea0e5313f40ec68d6a2678b04e5fc774605fa4c54b06d9dd4fca9",
        "LookupName": "Heating",
        "LookupValue": "Zoned",
        "StandardLookupValue": "Zoned",
        "LegacyOdataValue": "Zoned"
    },
    {
        "LookupKey": "930bd320d12a2686df50e63d754df39b602a7ca85c2c353d86830627df1889ab",
        "LookupName": "HorseAmenities",
        "LookupValue": "Arena",
        "StandardLookupValue": "Arena",
        "LegacyOdataValue": "Arena"
    },
    {
        "LookupKey": "419bf2873037015b2d3ff54f27fe62a15c8b2db3ca0c22b06edd84c92ff0d897",
        "LookupName": "HorseAmenities",
        "LookupValue": "Barn",
        "StandardLookupValue": "Barn",
        "LegacyOdataValue": "Barn"
    },
    {
        "LookupKey": "6f8eeaaaea291058d696576977da40bd374962ea5a68ffae90c8cae1b8ba11a7",
        "LookupName": "HorseAmenities",
        "LookupValue": "BoardingFacilities",
        "StandardLookupValue": "BoardingFacilities",
        "LegacyOdataValue": "Boarding Facilities"
    },
    {
        "LookupKey": "e7944062b87db7d14e5c2594ff52229af816a31f05f3986830b38942f9f5189d",
        "LookupName": "HorseAmenities",
        "LookupValue": "Corrals",
        "StandardLookupValue": "Corrals",
        "LegacyOdataValue": "Corrals"
    },
    {
        "LookupKey": "0879dca76409890d34cc93a3696972d04658dc3fc0dd256e65f09a642d45f971",
        "LookupName": "HorseAmenities",
        "LookupValue": "HayStorage",
        "StandardLookupValue": "HayStorage",
        "LegacyOdataValue": "Hay Storage"
    },
    {
        "LookupKey": "be37753e46bf1ea6595da20fc36f3c349e50ebf859807bc7ed620fd59191c810",
        "LookupName": "HorseAmenities",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "7fcaa0b94315cfceb58a9e7f6f22547826816ba21fe90da68098ea4c3d732b20",
        "LookupName": "HorseAmenities",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "43fe7dd737cbc8582b4cfff49aad49ffb14107dfe2ade5ed3781b0d08d51c585",
        "LookupName": "HorseAmenities",
        "LookupValue": "Paddocks",
        "StandardLookupValue": "Paddocks",
        "LegacyOdataValue": "Paddocks"
    },
    {
        "LookupKey": "3cee31b1ed82296e8fe8d5b112749134e6ca9485840a3fcc786839070e4f3dcd",
        "LookupName": "HorseAmenities",
        "LookupValue": "PalpationChute",
        "StandardLookupValue": "PalpationChute",
        "LegacyOdataValue": "Palpation Chute"
    },
    {
        "LookupKey": "a9e370683c1c62384c284cf73a6c6167ad9a580924115388329c3f6a7be40fec",
        "LookupName": "HorseAmenities",
        "LookupValue": "Pasture",
        "StandardLookupValue": "Pasture",
        "LegacyOdataValue": "Pasture"
    },
    {
        "LookupKey": "abaa5f7572a59e1dc33c7ec9e4eabc568f509172dcd13cc480cc5516012768e2",
        "LookupName": "HorseAmenities",
        "LookupValue": "RidingTrail",
        "StandardLookupValue": "RidingTrail",
        "LegacyOdataValue": "Riding Trail"
    },
    {
        "LookupKey": "4b7d4ac21e735b0744b9046c536d8208f36a432e00128dd662036dea2a3a05be",
        "LookupName": "HorseAmenities",
        "LookupValue": "RoundPen",
        "StandardLookupValue": "RoundPen",
        "LegacyOdataValue": "Round Pen"
    },
    {
        "LookupKey": "eba04b14788da5514ffdcf844dda32118e33acd27bd9630dd54d3d8c267c80ac",
        "LookupName": "HorseAmenities",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "dbc3e3d6b61db1bcfba21a95f99ed9943f3e58c5bc678319f577213dbfdc7be4",
        "LookupName": "HorseAmenities",
        "LookupValue": "ShavingBin",
        "StandardLookupValue": "ShavingBin",
        "LegacyOdataValue": "Shaving Bin"
    },
    {
        "LookupKey": "ea51223cf2f74f92c0f8ea1be129ec3a515c74e485b0ba47d5a26c3344762a41",
        "LookupName": "HorseAmenities",
        "LookupValue": "Stables",
        "StandardLookupValue": "Stables",
        "LegacyOdataValue": "Stables"
    },
    {
        "LookupKey": "1d65d4abc82055b13440a9e4bc99b83b7875d27ff61fbdf7dd48020555ae3f70",
        "LookupName": "HorseAmenities",
        "LookupValue": "TackRoom",
        "StandardLookupValue": "TackRoom",
        "LegacyOdataValue": "Tack Room"
    },
    {
        "LookupKey": "ea72c24d825758d011382d39b4328ed70b4ba8869f6a95fdd656d7006217ba17",
        "LookupName": "HorseAmenities",
        "LookupValue": "TrailerStorage",
        "StandardLookupValue": "TrailerStorage",
        "LegacyOdataValue": "Trailer Storage"
    },
    {
        "LookupKey": "aa65d65117c61ed34053e488a31f1952350a073cc5555b9a215d4e05da26e4d4",
        "LookupName": "HorseAmenities",
        "LookupValue": "WashRack",
        "StandardLookupValue": "WashRack",
        "LegacyOdataValue": "Wash Rack"
    },
    {
        "LookupKey": "545964e5001bf24b2c8171fbffd80482811ac791b016200364f9f2a8026e69f5",
        "LookupName": "HoursDaysOfOperation",
        "LookupValue": "EveningsOnly",
        "StandardLookupValue": "EveningsOnly",
        "LegacyOdataValue": "Evenings Only"
    },
    {
        "LookupKey": "7b1e199b6c2c3d9e38245ab556cd2dfa2d7019fd39c34675c6a6e612a562cf3c",
        "LookupName": "HoursDaysOfOperation",
        "LookupValue": "Open24Hours",
        "StandardLookupValue": "Open24Hours",
        "LegacyOdataValue": "Open 24 Hours"
    },
    {
        "LookupKey": "e66b2e6b634409f47d263ab7a0b78bbf929f17ab431cbce8b24a0d6872eba3f3",
        "LookupName": "HoursDaysOfOperation",
        "LookupValue": "Open7Days",
        "StandardLookupValue": "Open7Days",
        "LegacyOdataValue": "Open 7 Days"
    },
    {
        "LookupKey": "9d4cfd152434cf08995c448153f0795806cd0fee33b86a6ed17f596a46a2318a",
        "LookupName": "HoursDaysOfOperation",
        "LookupValue": "Open8HoursDay",
        "StandardLookupValue": "Open8HoursDay",
        "LegacyOdataValue": "Open 8 Hours/Day"
    },
    {
        "LookupKey": "f985bf411ceba599c9341ff9d4ea4ba7c109212f6604074b3534a4ce08da8be1",
        "LookupName": "HoursDaysOfOperation",
        "LookupValue": "OpenLessThan8HoursDay",
        "StandardLookupValue": "OpenLessThan8HoursDay",
        "LegacyOdataValue": "Open -8 Hours/Day"
    },
    {
        "LookupKey": "c1fbe370a9c148a74313728b4df39b73aab3c8072369d456535140a6fb5c9f84",
        "LookupName": "HoursDaysOfOperation",
        "LookupValue": "OpenMondayFriday",
        "StandardLookupValue": "OpenMondayFriday",
        "LegacyOdataValue": "Open Monday-Friday"
    },
    {
        "LookupKey": "2234fc028e085e450c6024cfa1329c53afa190293175f79c038e7547abcf725e",
        "LookupName": "HoursDaysOfOperation",
        "LookupValue": "OpenOver8HoursDay",
        "StandardLookupValue": "OpenOver8HoursDay",
        "LegacyOdataValue": "Open 8+ Hours/Day"
    },
    {
        "LookupKey": "589963b7abb28fb05db5ba82d6b786ead0ed04b911fb95463c36ca3125ddbcfa",
        "LookupName": "HoursDaysOfOperation",
        "LookupValue": "OpenSaturday",
        "StandardLookupValue": "OpenSaturday",
        "LegacyOdataValue": "Open Saturday"
    },
    {
        "LookupKey": "2edbfb3b4f116dfcfc5158cdb80c7ce2c15bf9c1cec1acb05747aa6d2ae4925c",
        "LookupName": "HoursDaysOfOperation",
        "LookupValue": "OpenSunday",
        "StandardLookupValue": "OpenSunday",
        "LegacyOdataValue": "Open Sunday"
    },
    {
        "LookupKey": "0ab60dc6b3e91b9e1ab2d0807e8d84033a7bdba63e9d92a02ab59a22c92098ad",
        "LookupName": "IncomeIncludes",
        "LookupValue": "Laundry",
        "StandardLookupValue": "Laundry",
        "LegacyOdataValue": "Laundry"
    },
    {
        "LookupKey": "ceeb7fd0312fc8098e7d2dc1cc7242e72a1a989d49e9677019f115874c325a95",
        "LookupName": "IncomeIncludes",
        "LookupValue": "Parking",
        "StandardLookupValue": "Parking",
        "LegacyOdataValue": "Parking"
    },
    {
        "LookupKey": "86ced1fadc906896d3456c9bcef088089e33b3ffee5c3884ae82ec3c5d94e67c",
        "LookupName": "IncomeIncludes",
        "LookupValue": "Recreation",
        "StandardLookupValue": "Recreation",
        "LegacyOdataValue": "Recreation"
    },
    {
        "LookupKey": "c554681ce6139d4f58f30c95ea56e54f1071689c3c12168c3517ca9c7a8bfb35",
        "LookupName": "IncomeIncludes",
        "LookupValue": "RentOnly",
        "StandardLookupValue": "RentOnly",
        "LegacyOdataValue": "Rent Only"
    },
    {
        "LookupKey": "8d4be084b72b1535356057410a488d7897c15f4fac87a2a89ff84e3af981354d",
        "LookupName": "IncomeIncludes",
        "LookupValue": "RvStorage",
        "StandardLookupValue": "RvStorage",
        "LegacyOdataValue": "RV Storage"
    },
    {
        "LookupKey": "eb0bb13220820b6a94b68046ca7b6ff6da413e7d5da816a079d5df4b86b8a1b5",
        "LookupName": "IncomeIncludes",
        "LookupValue": "Storage",
        "StandardLookupValue": "Storage",
        "LegacyOdataValue": "Storage"
    },
    {
        "LookupKey": "943fe51adc64cf3885dc36ab899b0f96cef034b258b9621e196c1c301ad6c7b9",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Bar",
        "StandardLookupValue": "Bar",
        "LegacyOdataValue": "Bar"
    },
    {
        "LookupKey": "3ef14bb6b07dd46bb978a7f0270c96ec719e468177491a478f7cd2d90e7c3d7a",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "BeamedCeilings",
        "StandardLookupValue": "BeamedCeilings",
        "LegacyOdataValue": "Beamed Ceilings"
    },
    {
        "LookupKey": "fedf456f983cc5c5f3894f0960c419ac176cdd2bafb3162d72064ebf5f66a695",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Bidet",
        "StandardLookupValue": "Bidet",
        "LegacyOdataValue": "Bidet"
    },
    {
        "LookupKey": "f6ce9617a33efd06989a7b6be29b6fa51521fc92f7cbe894bbd1b51adaef1a46",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Bookcases",
        "StandardLookupValue": "Bookcases",
        "LegacyOdataValue": "Bookcases"
    },
    {
        "LookupKey": "71af73d43d1cef0929d6123a398fc15a7f21e58d4f4283d8e701468f3b1aca39",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "BreakfastBar",
        "StandardLookupValue": "BreakfastBar",
        "LegacyOdataValue": "Breakfast Bar"
    },
    {
        "LookupKey": "b9c9fb25a9868a6277ff59e46e3d9dc6daba0f4badf33092914db14e9cb2fee5",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "BuiltInFeatures",
        "StandardLookupValue": "BuiltInFeatures",
        "LegacyOdataValue": "Built-in Features"
    },
    {
        "LookupKey": "6f0a38efd45713299363c38510c30361cb8d0bac48c26f0d6a28448cab0d76df",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "CathedralCeilings",
        "StandardLookupValue": "CathedralCeilings",
        "LegacyOdataValue": "Cathedral Ceilings"
    },
    {
        "LookupKey": "8fd559c6826297aaf7f6ad1e1ca3075afcb99f55d9f6d197f66e4ae46a750730",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "CedarClosets",
        "StandardLookupValue": "CedarClosets",
        "LegacyOdataValue": "Cedar Closets"
    },
    {
        "LookupKey": "8f377eef58e90b96a7eccdf84b98d139b0125af6cfee70033f2c69be0e1c2b41",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "CeilingFans",
        "StandardLookupValue": "CeilingFans",
        "LegacyOdataValue": "Ceiling Fans"
    },
    {
        "LookupKey": "dc0da36f36c4a200e9b53c8a1e2cdab0c550d5733b6e1b5124e45881647b7cdb",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "CentralVacuum",
        "StandardLookupValue": "CentralVacuum",
        "LegacyOdataValue": "Central Vacuum"
    },
    {
        "LookupKey": "1396f04c4f2efde63545c22f93e439cbc206771dc2b6b9f3c239f1c1dcc94aee",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Chandelier",
        "StandardLookupValue": "Chandelier",
        "LegacyOdataValue": "Chandelier"
    },
    {
        "LookupKey": "b856ebf46e927815359a41f85d09cf28ffae65f44128b8fdc0d480ab63e1823c",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "CofferedCeilings",
        "StandardLookupValue": "CofferedCeilings",
        "LegacyOdataValue": "Coffered Ceilings"
    },
    {
        "LookupKey": "9e77a5766b0eb73af730813ffce1865de8f6d5875a434e184da7ac2db974eeae",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "CrownMolding",
        "StandardLookupValue": "CrownMolding",
        "LegacyOdataValue": "Crown Molding"
    },
    {
        "LookupKey": "1133fdd468a95da2f96d917cb744bd2cd3ab97de91de26cc2c365c232b780af4",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "DoubleVanity",
        "StandardLookupValue": "DoubleVanity",
        "LegacyOdataValue": "Double Vanity"
    },
    {
        "LookupKey": "15f23e69afc4aba6b557e3fb19c6a212a9d0b61236176aefecbe8ef55d452f20",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "DryBar",
        "StandardLookupValue": "DryBar",
        "LegacyOdataValue": "Dry Bar"
    },
    {
        "LookupKey": "15011fe4527bf73951fb19bcc42b6e1f9537a936ced5de362ac7d68c63036c87",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Dumbwaiter",
        "StandardLookupValue": "Dumbwaiter",
        "LegacyOdataValue": "Dumbwaiter"
    },
    {
        "LookupKey": "8641b19ce5e593c40068979c6bfa82aca5763176540198087de297ac9b38f243",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "EatInKitchen",
        "StandardLookupValue": "EatInKitchen",
        "LegacyOdataValue": "Eat-in Kitchen"
    },
    {
        "LookupKey": "0b93024f7a993b9eea863db2292042d0f86afc7e637b55dedfc99634bddd2295",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Elevator",
        "StandardLookupValue": "Elevator",
        "LegacyOdataValue": "Elevator"
    },
    {
        "LookupKey": "8f89e2be060dffde131a8c0197eb82eb8e25f24a932cebed5c4f3a9f4c03602b",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "EntranceFoyer",
        "StandardLookupValue": "EntranceFoyer",
        "LegacyOdataValue": "Entrance Foyer"
    },
    {
        "LookupKey": "b3cd3fe0a48e75ba516c81b67b2aab33638fd9fce850a8aa6ceddda46e574ace",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "GraniteCounters",
        "StandardLookupValue": "GraniteCounters",
        "LegacyOdataValue": "Granite Counters"
    },
    {
        "LookupKey": "e0bf798bc0d5c5fe752d3d116524c7bc5e29a6d21fa96cf0d9d0421f43ace8c8",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "HighCeilings",
        "StandardLookupValue": "HighCeilings",
        "LegacyOdataValue": "High Ceilings"
    },
    {
        "LookupKey": "3e10dd0b90dc318a725a501376a7cc02af9d7e449e9b673d2bd013be9a1f6de2",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "HighSpeedInternet",
        "StandardLookupValue": "HighSpeedInternet",
        "LegacyOdataValue": "High Speed Internet"
    },
    {
        "LookupKey": "69466586d2a098137c5d0e4950be50aa2f3a8e714a10de3d71955e61490bf9ae",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "HisAndHersClosets",
        "StandardLookupValue": "HisAndHersClosets",
        "LegacyOdataValue": "His and Hers Closets"
    },
    {
        "LookupKey": "020030cfb2375deeae5b26b66697ffcd114d09f8e37572c8a2cb68f10004819e",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "InLawFloorplan",
        "StandardLookupValue": "InLawFloorplan",
        "LegacyOdataValue": "In-Law Floorplan"
    },
    {
        "LookupKey": "738246cdcdc403273e4ffd5d3725c36405d102b81a2a1e2a260fe62006f694aa",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "KitchenIsland",
        "StandardLookupValue": "KitchenIsland",
        "LegacyOdataValue": "Kitchen Island"
    },
    {
        "LookupKey": "16792f57a7ffc2507843d8b672e3a6b31818c800bf6ea3e95b92e868f2cb15c6",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "LaminateCounters",
        "StandardLookupValue": "LaminateCounters",
        "LegacyOdataValue": "Laminate Counters"
    },
    {
        "LookupKey": "57629cc61bb3cd04b2f4fba6b029d255b55edb8644547010b053777a656ae43d",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "LowFlowPlumbingFixtures",
        "StandardLookupValue": "LowFlowPlumbingFixtures",
        "LegacyOdataValue": "Low Flow Plumbing Fixtures"
    },
    {
        "LookupKey": "df60196cc30fdda9cf6de716757e703325dda2d0cbbac11b5f5f8462af114f8e",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "MasterDownstairs",
        "StandardLookupValue": "MasterDownstairs",
        "LegacyOdataValue": "Master Downstairs"
    },
    {
        "LookupKey": "f131a956f3086fdf1bd93287ac204e9449a2660d79ac0c452b9c3167858312a0",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "NaturalWoodwork",
        "StandardLookupValue": "NaturalWoodwork",
        "LegacyOdataValue": "Natural Woodwork"
    },
    {
        "LookupKey": "843c2889ae6e2cd1738b460bfa2b2a5b7223bb9e7642462f9a41127cb55cdfde",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "OpenFloorplan",
        "StandardLookupValue": "OpenFloorplan",
        "LegacyOdataValue": "Open Floorplan"
    },
    {
        "LookupKey": "99e84987e9103e22c9c19b593228dbcb9d40b72206f6fbbc4d14865a5c39d49d",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "a6973d0128b8ec670b31382601ca5e7c54dc10d76871770b7d5f414fb5eb6e94",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Pantry",
        "StandardLookupValue": "Pantry",
        "LegacyOdataValue": "Pantry"
    },
    {
        "LookupKey": "a5e0a8329bb9cddef8d24586afdf1db3984b46cf3bfe123e012809d403ec4f8d",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "RecessedLighting",
        "StandardLookupValue": "RecessedLighting",
        "LegacyOdataValue": "Recessed Lighting"
    },
    {
        "LookupKey": "1393e8cf1fbe7a80d52d649f797b2b9bde02e8fc24bb29017ce05a17198c1c2e",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Sauna",
        "StandardLookupValue": "Sauna",
        "LegacyOdataValue": "Sauna"
    },
    {
        "LookupKey": "c9fc9edfe9c224dfbd63d7c8e343745934050d075e6777e75fb185723ac7f322",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "6871cade03b030f888cca3ea1832f615bde44896e92b2aaebe59ce042844ec12",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "SmartHome",
        "StandardLookupValue": "SmartHome",
        "LegacyOdataValue": "Smart Home"
    },
    {
        "LookupKey": "9b73e11f69e93c5c494dae798999bb6fa5fab1b4ed585d98b69374fd501f06ca",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "SmartThermostat",
        "StandardLookupValue": "SmartThermostat",
        "LegacyOdataValue": "Smart Thermostat"
    },
    {
        "LookupKey": "6cafee9808fe6c733f9e51e364ba0f5a82aadcff233d60b8caf3012a494edacd",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "SoakingTub",
        "StandardLookupValue": "SoakingTub",
        "LegacyOdataValue": "Soaking Tub"
    },
    {
        "LookupKey": "8b4aea900b826ac3714bc5a038a2c823a2558b577c74c10652f19b85a01c9811",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "SolarTubes",
        "StandardLookupValue": "SolarTubes",
        "LegacyOdataValue": "Solar Tubes"
    },
    {
        "LookupKey": "624e0c4b8bbf4974ec371aae559e28dea9d4d64cbd0bea9b84ceb9bc60460e88",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "SoundSystem",
        "StandardLookupValue": "SoundSystem",
        "LegacyOdataValue": "Sound System"
    },
    {
        "LookupKey": "e49349e88c14fd9ac65b5c84863b28d5d0f0051948d6448a7868a4d73b57961a",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "StoneCounters",
        "StandardLookupValue": "StoneCounters",
        "LegacyOdataValue": "Stone Counters"
    },
    {
        "LookupKey": "c18474a2e114fa0794d51ab7f6ca70e1bf9a13f933ebc482dfd97791bb14862d",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "Storage",
        "StandardLookupValue": "Storage",
        "LegacyOdataValue": "Storage"
    },
    {
        "LookupKey": "74429fba01e179c96837554f4d0b3bf7b14eac6ad1a0b5545762ae04f7ce7e10",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "TileCounters",
        "StandardLookupValue": "TileCounters",
        "LegacyOdataValue": "Tile Counters"
    },
    {
        "LookupKey": "18738e16b8cc972e691bdddf420448fd8e099b26a9c0491431bbc4706ffdcb6f",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "TrackLighting",
        "StandardLookupValue": "TrackLighting",
        "LegacyOdataValue": "Track Lighting"
    },
    {
        "LookupKey": "2e0026edfa5a47b19cf44063328114df244673432dfa28c4bb8d365a1b49a58a",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "TrayCeilings",
        "StandardLookupValue": "TrayCeilings",
        "LegacyOdataValue": "Tray Ceilings"
    },
    {
        "LookupKey": "75cf921aac159d3276d1f3be9b6e45f9bae96be3f5ed98a76f81219964f408c8",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "VaultedCeilings",
        "StandardLookupValue": "VaultedCeilings",
        "LegacyOdataValue": "Vaulted Ceilings"
    },
    {
        "LookupKey": "fadcba03ec6298288f12347afc3d5024ff07aa93f53d86abf8f046e6640b7e75",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "WalkInClosets",
        "StandardLookupValue": "WalkInClosets",
        "LegacyOdataValue": "Walk-In Closets"
    },
    {
        "LookupKey": "f704fb4453ab8e782335332dcf92fec0d42a323aeb3da73c862d8f96c3e102b5",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "WaterSenseFixtures",
        "StandardLookupValue": "WaterSenseFixtures",
        "LegacyOdataValue": "WaterSense Fixtures"
    },
    {
        "LookupKey": "0c89f98f511647c6ee478bd95b11fbe260cae33c7c7f78d45d195c14b955879a",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "WetBar",
        "StandardLookupValue": "WetBar",
        "LegacyOdataValue": "Wet Bar"
    },
    {
        "LookupKey": "12ad41176e32fd3d0879a37e6105080e3223cd2ae09c9a8e3fefc24bf338d91a",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "WiredForData",
        "StandardLookupValue": "WiredForData",
        "LegacyOdataValue": "Wired for Data"
    },
    {
        "LookupKey": "7e8ab5a7bb7e0452819989eeb00b7ecb1c0b0f4111835512fb6a4a2eccbe1523",
        "LookupName": "InteriorOrRoomFeatures",
        "LookupValue": "WiredForSound",
        "StandardLookupValue": "WiredForSound",
        "LegacyOdataValue": "Wired for Sound"
    },
    {
        "LookupKey": "05b109587a1ad22b378ba47c67858bee8025c3554ea4e7e8e00d91da9ab1f14b",
        "LookupName": "LaborInformation",
        "LookupValue": "EmployeeLicenseRequired",
        "StandardLookupValue": "EmployeeLicenseRequired",
        "LegacyOdataValue": "Employee License Required"
    },
    {
        "LookupKey": "c317e59d78f5cb1c31023f85fcceb7634e7bb0d9e174d457c784ed5c3e71f6f3",
        "LookupName": "LaborInformation",
        "LookupValue": "NonUnion",
        "StandardLookupValue": "NonUnion",
        "LegacyOdataValue": "Non-Union"
    },
    {
        "LookupKey": "f1c50c11f77ccb3b93776d18b0ed5f318dad5523c6e4396da6d4ec8a119291c1",
        "LookupName": "LaborInformation",
        "LookupValue": "Union",
        "StandardLookupValue": "Union",
        "LegacyOdataValue": "Union"
    },
    {
        "LookupKey": "6d5e1c7eeeed9d01951dec3a1f6aa14a8a44bd566a4e42715d7ca5028d6926d5",
        "LookupName": "LaundryFeatures",
        "LookupValue": "CommonArea",
        "StandardLookupValue": "CommonArea",
        "LegacyOdataValue": "Common Area"
    },
    {
        "LookupKey": "f380a1e24aa7f77b84bc6c89b95a3c07e4a6f0181f646b5e19eafaf7ba6e6ff5",
        "LookupName": "LaundryFeatures",
        "LookupValue": "ElectricDryerHookup",
        "StandardLookupValue": "ElectricDryerHookup",
        "LegacyOdataValue": "Electric Dryer Hookup"
    },
    {
        "LookupKey": "af5295aa0dfd2a80011c7308024f5e93828b745dee9de418484e190887d56e34",
        "LookupName": "LaundryFeatures",
        "LookupValue": "GasDryerHookup",
        "StandardLookupValue": "GasDryerHookup",
        "LegacyOdataValue": "Gas Dryer Hookup"
    },
    {
        "LookupKey": "d2a53d457328b9dae4690877f0e8efb36f5500680821d208d7bb80d46826ed4d",
        "LookupName": "LaundryFeatures",
        "LookupValue": "InBasement",
        "StandardLookupValue": "InBasement",
        "LegacyOdataValue": "In Basement"
    },
    {
        "LookupKey": "8d6397ac80b897c43f8ec86ea2826a623cbd62a1baf13982e978f627d4e8695a",
        "LookupName": "LaundryFeatures",
        "LookupValue": "InBathroom",
        "StandardLookupValue": "InBathroom",
        "LegacyOdataValue": "In Bathroom"
    },
    {
        "LookupKey": "0ed79db3a214a7f62fb06197572759de65a77bdfdd480ad07c8ba93b99fab7f4",
        "LookupName": "LaundryFeatures",
        "LookupValue": "InCarport",
        "StandardLookupValue": "InCarport",
        "LegacyOdataValue": "In Carport"
    },
    {
        "LookupKey": "f2b948321be84b050a95b224aa56db8eaef8cc948f963f508a00955cf0f39f05",
        "LookupName": "LaundryFeatures",
        "LookupValue": "InGarage",
        "StandardLookupValue": "InGarage",
        "LegacyOdataValue": "In Garage"
    },
    {
        "LookupKey": "b07d4b4af5d1f214368bc8976236750f04f0fe08f10a7f3795449672a68dc71e",
        "LookupName": "LaundryFeatures",
        "LookupValue": "InHall",
        "StandardLookupValue": "InHall",
        "LegacyOdataValue": "In Hall"
    },
    {
        "LookupKey": "d94c0287f341180067a0fc6c9019b5fe13ec8c0a51856fe82285e892a1a491e8",
        "LookupName": "LaundryFeatures",
        "LookupValue": "InKitchen",
        "StandardLookupValue": "InKitchen",
        "LegacyOdataValue": "In Kitchen"
    },
    {
        "LookupKey": "ee86c57e5380f27979e6c5504b87b25350d045eb60a6682bb5e846351724ddd3",
        "LookupName": "LaundryFeatures",
        "LookupValue": "Inside",
        "StandardLookupValue": "Inside",
        "LegacyOdataValue": "Inside"
    },
    {
        "LookupKey": "47aa96f9f009ebca8a58b97d785e603deb5576b850c65a3b4951c885a1d90630",
        "LookupName": "LaundryFeatures",
        "LookupValue": "InUnit",
        "StandardLookupValue": "InUnit",
        "LegacyOdataValue": "In Unit"
    },
    {
        "LookupKey": "5e51f21b7440d64b5c8c16f8492b06792e9c2eab55cb6e0dc498f35c037e9f12",
        "LookupName": "LaundryFeatures",
        "LookupValue": "LaundryChute",
        "StandardLookupValue": "LaundryChute",
        "LegacyOdataValue": "Laundry Chute"
    },
    {
        "LookupKey": "bc3c24eaebc1af2dafd2b57150074625384c91559498b4d4fa5cafd2240addbd",
        "LookupName": "LaundryFeatures",
        "LookupValue": "LaundryCloset",
        "StandardLookupValue": "LaundryCloset",
        "LegacyOdataValue": "Laundry Closet"
    },
    {
        "LookupKey": "5b14a4b91014d07cde6d803d364a935f091013f7e395bb90a176256e9ca7d02a",
        "LookupName": "LaundryFeatures",
        "LookupValue": "LaundryRoom",
        "StandardLookupValue": "LaundryRoom",
        "LegacyOdataValue": "Laundry Room"
    },
    {
        "LookupKey": "776c4f1496ad786df3770bbd6dcf7d20d9b35c9e0cc84e81c8e124aedc8f4b89",
        "LookupName": "LaundryFeatures",
        "LookupValue": "LowerLevel",
        "StandardLookupValue": "LowerLevel",
        "LegacyOdataValue": "Lower Level"
    },
    {
        "LookupKey": "f56fe48cf4a5ee06f2db1d76b4bbcc7594e8932781cd63b63b34c3d06c133678",
        "LookupName": "LaundryFeatures",
        "LookupValue": "MainLevel",
        "StandardLookupValue": "MainLevel",
        "LegacyOdataValue": "Main Level"
    },
    {
        "LookupKey": "dc805ce265853a0d6475717c0e311a04818f834b0fee805dcad5b44060d19f8e",
        "LookupName": "LaundryFeatures",
        "LookupValue": "MultipleLocations",
        "StandardLookupValue": "MultipleLocations",
        "LegacyOdataValue": "Multiple Locations"
    },
    {
        "LookupKey": "02b5f3656ed1c6a7ad18f8450bacac10532b3067d4567599032ffe7c593ec4c6",
        "LookupName": "LaundryFeatures",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "8b63aedffc39602be802d48b90386fefc94fa5ddd114740439138e76871c9bdd",
        "LookupName": "LaundryFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "6b2ce49379ec57503c4a4cf720baad63f60723441ed5197fad85ec46bb3823e5",
        "LookupName": "LaundryFeatures",
        "LookupValue": "Outside",
        "StandardLookupValue": "Outside",
        "LegacyOdataValue": "Outside"
    },
    {
        "LookupKey": "ee5735d19736c0cca08749a9ee5eb2373d0ea7365030deea5344651e90836d3b",
        "LookupName": "LaundryFeatures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "0d232c3d14bb2ff5ed10e20787cfd0d1e78969865ecbbca13ffd0d3cb72a41f1",
        "LookupName": "LaundryFeatures",
        "LookupValue": "Sink",
        "StandardLookupValue": "Sink",
        "LegacyOdataValue": "Sink"
    },
    {
        "LookupKey": "0d55b3cfcd92ed4a075fd07b90ad4028dc81768dbe39cdd5ba740cc7bcfa9ab7",
        "LookupName": "LaundryFeatures",
        "LookupValue": "UpperLevel",
        "StandardLookupValue": "UpperLevel",
        "LegacyOdataValue": "Upper Level"
    },
    {
        "LookupKey": "7541e724ea5da11c4b7b4a16aede0e4bc68719532e3c967f6ad925f38fa87d2d",
        "LookupName": "LaundryFeatures",
        "LookupValue": "WasherHookup",
        "StandardLookupValue": "WasherHookup",
        "LegacyOdataValue": "Washer Hookup"
    },
    {
        "LookupKey": "18834ad2444a8ae653cbcbbab032373ec0be964f617ed3e776b79638e0f0d253",
        "LookupName": "LeaseRenewalCompensation",
        "LookupValue": "CallListingAgent",
        "StandardLookupValue": "CallListingAgent",
        "LegacyOdataValue": "Call Listing Agent"
    },
    {
        "LookupKey": "b3ae3775427ef0aeab4b16012a6ba58d71f3f8fbda26d92b97a07275c75ed42f",
        "LookupName": "LeaseRenewalCompensation",
        "LookupValue": "CallListingOffice",
        "StandardLookupValue": "CallListingOffice",
        "LegacyOdataValue": "Call Listing Office"
    },
    {
        "LookupKey": "3a04592c25e254422bb6b643d0fc8c68402ba3da281e6eea6c433b819a029456",
        "LookupName": "LeaseRenewalCompensation",
        "LookupValue": "CommissionPaidOnTenantPurchase",
        "StandardLookupValue": "CommissionPaidOnTenantPurchase",
        "LegacyOdataValue": "Commission Paid On Tenant Purchase"
    },
    {
        "LookupKey": "1376e7e88f9586d27e8899dcc0a30556cd9ac1b9f2defde1b67d8ac9567596f5",
        "LookupName": "LeaseRenewalCompensation",
        "LookupValue": "NoRenewalCommission",
        "StandardLookupValue": "NoRenewalCommission",
        "LegacyOdataValue": "No Renewal Commission"
    },
    {
        "LookupKey": "754e5677e18ce382d20dbca1411dbd701b33dbc925a2197ef65fc13031244cdc",
        "LookupName": "LeaseRenewalCompensation",
        "LookupValue": "RenewalCommissionPaid",
        "StandardLookupValue": "RenewalCommissionPaid",
        "LegacyOdataValue": "Renewal Commission Paid"
    },
    {
        "LookupKey": "2492ea515a4dc0f5824a40847de48ca156a0fa7299d5071561ba990068d9b0f1",
        "LookupName": "LeaseTerm",
        "LookupValue": "MonthToMonth",
        "StandardLookupValue": "MonthToMonth",
        "LegacyOdataValue": "Month To Month"
    },
    {
        "LookupKey": "e780fb44bbafbb97398aa97eb41f08351cdec4b4bd541f96afa9d47fb080bbfc",
        "LookupName": "LeaseTerm",
        "LookupValue": "Negotiable",
        "StandardLookupValue": "Negotiable",
        "LegacyOdataValue": "Negotiable"
    },
    {
        "LookupKey": "8caf479bc1e0cc03a362b9154934abc8a173d07b55ded6a84d8d4eba8e593ff7",
        "LookupName": "LeaseTerm",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "4503b79d64614c8e4c6213c34de07571eee2fcff23de3281eddb765d59006c7f",
        "LookupName": "LeaseTerm",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "4a6a84c8416b6ee3de81e3438518a2f5519dc9511bf1d3ab59050922d929a3b6",
        "LookupName": "LeaseTerm",
        "LookupValue": "RenewalOption",
        "StandardLookupValue": "RenewalOption",
        "LegacyOdataValue": "Renewal Option"
    },
    {
        "LookupKey": "cc9a321ac1df24c156dacc75c431281327fe412abd874c33ffc344eb400d9fc2",
        "LookupName": "LeaseTerm",
        "LookupValue": "ShortTermLease",
        "StandardLookupValue": "ShortTermLease",
        "LegacyOdataValue": "Short Term Lease"
    },
    {
        "LookupKey": "6e1f444c2052414ff76d4871f76a6125bf6c69238b56f8e8b5f4f6bfa97eb59d",
        "LookupName": "LeaseTerm",
        "LookupValue": "SixMonths",
        "StandardLookupValue": "SixMonths",
        "LegacyOdataValue": "6 Months"
    },
    {
        "LookupKey": "6e09dda586d640cbde513365210d4c656d345965793c982426f7c9f915182e28",
        "LookupName": "LeaseTerm",
        "LookupValue": "TwelveMonths",
        "StandardLookupValue": "TwelveMonths",
        "LegacyOdataValue": "12 Months"
    },
    {
        "LookupKey": "a2e67be8caa871d2092fa176ea9e24088b76d10e30ec65aac68057fa57ffe8f1",
        "LookupName": "LeaseTerm",
        "LookupValue": "TwentyFourMonths",
        "StandardLookupValue": "TwentyFourMonths",
        "LegacyOdataValue": "24 Months"
    },
    {
        "LookupKey": "8994051d9be9eeb9756eb307ec83d1198758f6dc19a8c86444ee344c9ded3689",
        "LookupName": "LeaseTerm",
        "LookupValue": "Weekly",
        "StandardLookupValue": "Weekly",
        "LegacyOdataValue": "Weekly"
    },
    {
        "LookupKey": "49b8f9b676a32980a10ba660b47e1b6ff0237bc22b84532357a5060bee5ecbd8",
        "LookupName": "Levels",
        "LookupValue": "MultiSplit",
        "StandardLookupValue": "MultiSplit",
        "LegacyOdataValue": "Multi/Split"
    },
    {
        "LookupKey": "aa8391b12f10c3502b4bafedcc42f3d04b31642487091d6655a1685f7d43fd7f",
        "LookupName": "Levels",
        "LookupValue": "One",
        "StandardLookupValue": "One",
        "LegacyOdataValue": "One"
    },
    {
        "LookupKey": "8f04d8ce7d47a951879a46cb13f83d2bac3f81ee9d98b26bd28488cb41ac5df9",
        "LookupName": "Levels",
        "LookupValue": "OneAndOneHalf",
        "StandardLookupValue": "OneAndOneHalf",
        "LegacyOdataValue": "One and One Half"
    },
    {
        "LookupKey": "30e9f450579d02096d4321b9eb2cf49f530949a5d288e6c1d46c349c5c2351ce",
        "LookupName": "Levels",
        "LookupValue": "ThreeOrMore",
        "StandardLookupValue": "ThreeOrMore",
        "LegacyOdataValue": "Three Or More"
    },
    {
        "LookupKey": "2201d807f19c99aed465f5465c45aea72cf287da5e6314899aae5f708ab27fe2",
        "LookupName": "Levels",
        "LookupValue": "Two",
        "StandardLookupValue": "Two",
        "LegacyOdataValue": "Two"
    },
    {
        "LookupKey": "ce03302b965e6deda7785a80321bdcd407ebdecbed67a902e2a078cd42b81c39",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "AccreditedBuyersRepresentative",
        "StandardLookupValue": "AccreditedBuyersRepresentative",
        "LegacyOdataValue": "Accredited Buyer's Representative / ABR"
    },
    {
        "LookupKey": "aa63dd740bd0c0368e0bf4166f5d92ed5ce9427f81a16de43f832c724d99bdaf",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "AccreditedLandConsultant",
        "StandardLookupValue": "AccreditedLandConsultant",
        "LegacyOdataValue": "Accredited Land Consultant / ALC"
    },
    {
        "LookupKey": "ecc59066ee5839cb9cafbb72c0d4e1ec55daede462385f4e56f9a781ac9d7b60",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "AtHomeWithDiversity",
        "StandardLookupValue": "AtHomeWithDiversity",
        "LegacyOdataValue": "At Home With Diversity / AHWD"
    },
    {
        "LookupKey": "e2baf9330faf899fdde06167cb0b1f0f2f6830280807ae877b1e943a9b95e9a5",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "CertifiedCommercialInvestmentMember",
        "StandardLookupValue": "CertifiedCommercialInvestmentMember",
        "LegacyOdataValue": "Certified Commercial Investment Member / CCIM"
    },
    {
        "LookupKey": "36df8e7f90ae1280702e479432a5e2ffebfd1611dfbff959c2c01a4b5e66020d",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "CertifiedDistressedPropertyExpert",
        "StandardLookupValue": "CertifiedDistressedPropertyExpert",
        "LegacyOdataValue": "Certified Distressed Property Expert / CDPE"
    },
    {
        "LookupKey": "6b0f4e5f4c7db014b0ca0dbda57aac8251ecef2dd137ccda1e0304d15b618de5",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "CertifiedInternationalPropertySpecialist",
        "StandardLookupValue": "CertifiedInternationalPropertySpecialist",
        "LegacyOdataValue": "Certified International Property Specialist / CIPS"
    },
    {
        "LookupKey": "ff756af26501bc1869e4b37d91105793caa66dffe933ce47f7d6a5e4496e633c",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "CertifiedPropertyManager",
        "StandardLookupValue": "CertifiedPropertyManager",
        "LegacyOdataValue": "Certified Property Manager / CPM"
    },
    {
        "LookupKey": "bf8176c6931b79b2d9f9f6da9e4a3effaac661d20367e2daaa99c43b8ee20884",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "CertifiedRealEstateBrokerageManager",
        "StandardLookupValue": "CertifiedRealEstateBrokerageManager",
        "LegacyOdataValue": "Certified Real Estate Brokerage Manager / CRB"
    },
    {
        "LookupKey": "81ffb61294d7476d245cbba89abb8ad008942c00dc1712176987d9f14a4a0078",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "CertifiedRealEstateTeamSpecialist",
        "StandardLookupValue": "CertifiedRealEstateTeamSpecialist",
        "LegacyOdataValue": "Certified Real Estate Team Specialist / C-RETS"
    },
    {
        "LookupKey": "bf9d57980ec1c8df4183962657a14407971ff3fb2483f3da9dd2d8f080fac981",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "CertifiedResidentialSpecialist",
        "StandardLookupValue": "CertifiedResidentialSpecialist",
        "LegacyOdataValue": "Certified Residential Specialist / CRS"
    },
    {
        "LookupKey": "639ee1e239c4bbb6dc3ab1444cb0d9513303c56237544d4820f376b4ff3f0a2a",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "CounselorOfRealEstate",
        "StandardLookupValue": "CounselorOfRealEstate",
        "LegacyOdataValue": "Counselor of Real Estate / CRE"
    },
    {
        "LookupKey": "31399ff635f0a716a7b15ff36f6081cfd7f2c90f1bb1092ed098f3cd9343dac0",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "ePRO",
        "StandardLookupValue": "ePRO",
        "LegacyOdataValue": "e-PRO"
    },
    {
        "LookupKey": "290b3df138ae7e03f843be8e6ec7dc30de6ef300a3cd1cb428560f8d0656f2cc",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "GeneralAccreditedAppraiser",
        "StandardLookupValue": "GeneralAccreditedAppraiser",
        "LegacyOdataValue": "General Accredited Appraiser / GAA"
    },
    {
        "LookupKey": "483071715ea94fd74424ae1104b9b1cb810d55d961110c5123b9d3af273cb542",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "GraduateRealtorInstitute",
        "StandardLookupValue": "GraduateRealtorInstitute",
        "LegacyOdataValue": "Graduate"
    },
    {
        "LookupKey": "ce5f45b159b09618a878f15b6cf79368a8e7291109361efce7eab3b0caf155bd",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "MilitaryRelocationProfessional",
        "StandardLookupValue": "MilitaryRelocationProfessional",
        "LegacyOdataValue": "Military Relocation Professional / MRP"
    },
    {
        "LookupKey": "b85adebed8f2f9a15939edc82b9ce64837b5990dce6e36bef0105793752a3ea8",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "NARsGreenDesignation",
        "StandardLookupValue": "NARsGreenDesignation",
        "LegacyOdataValue": "NAR's Green Designation / GREEN"
    },
    {
        "LookupKey": "e659117b502e79e2f21ae50455edf85c962a6302964e2b6e36ddc7ec746922c1",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "PerformanceManagementNetwork",
        "StandardLookupValue": "PerformanceManagementNetwork",
        "LegacyOdataValue": "Performance Management Network / PMN"
    },
    {
        "LookupKey": "e64a854947af77fc40f3e502a60582293f211bbf4f17f073b675d5a999d792c2",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "PricingStrategyAdvisor",
        "StandardLookupValue": "PricingStrategyAdvisor",
        "LegacyOdataValue": "Pricing Strategy Advisor / PSA"
    },
    {
        "LookupKey": "5d29264730e15904f99bd092f3239d928b4c33ec5aeb1d1a562a8da6ccffd260",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "RealEstateNegotiationExpert",
        "StandardLookupValue": "RealEstateNegotiationExpert",
        "LegacyOdataValue": "Real Estate Negotiation Expert / RENE"
    },
    {
        "LookupKey": "ff72806ab88f74032777c65a79db68e05fbc483775f47d9081875faffdb706ae",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "RealtorAssociationCertifiedExecutive",
        "StandardLookupValue": "RealtorAssociationCertifiedExecutive",
        "LegacyOdataValue": "REALTOR Association Certified Executive / RCE"
    },
    {
        "LookupKey": "f13d1c0ecc5066c62633903fcc79bce44cd95465797a17934314755b16faa173",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "ResidentialAccreditedAppraiser",
        "StandardLookupValue": "ResidentialAccreditedAppraiser",
        "LegacyOdataValue": "Residential Accredited Appraiser / RAA"
    },
    {
        "LookupKey": "044132ee5eaf9438b1af24a7b471784c5d279c9daa946109d969c96d8472fa4b",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "ResortAndSecondHomePropertySpecialist",
        "StandardLookupValue": "ResortAndSecondHomePropertySpecialist",
        "LegacyOdataValue": "Resort & Second-Home Property Specialist / RSPS"
    },
    {
        "LookupKey": "892d00bbf738a4f80ef5ff6bf8608943b4b358cce008058f5176c332a80af070",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "SellerRepresentativeSpecialist",
        "StandardLookupValue": "SellerRepresentativeSpecialist",
        "LegacyOdataValue": "Seller Representative Specialist / SRS"
    },
    {
        "LookupKey": "3f2978015caf2a8949e34bfce72bcc9d6dd3d034f4a52473014d512b13157a2e",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "SeniorsRealEstateSpecialist",
        "StandardLookupValue": "SeniorsRealEstateSpecialist",
        "LegacyOdataValue": "Seniors Real Estate Specialist / SRES"
    },
    {
        "LookupKey": "79b14a56642feea950f7ecda55afb912f15dbc0f3bb93afcf7f5ad4511641d0c",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "ShortSalesAndForeclosureResource",
        "StandardLookupValue": "ShortSalesAndForeclosureResource",
        "LegacyOdataValue": "Short Sales & Foreclosure Resource / SFR"
    },
    {
        "LookupKey": "fde4671857ccceb148aad591d777955cb1885ed9af6f6686dc666a7b1e574af1",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "StandardLookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "LegacyOdataValue": "Society of Industrial and Office REALTORS / SIOR"
    },
    {
        "LookupKey": "d1a391e440943a98ca2927e02c03c3c3aec36c9ab27e30f345ac17c42e3ebd75",
        "LookupName": "ListAgentDesignation",
        "LookupValue": "TransnationalReferralCertification",
        "StandardLookupValue": "TransnationalReferralCertification",
        "LegacyOdataValue": "Transnational Referral Certification / TRC"
    },
    {
        "LookupKey": "d7430fecf3aa2fa2ae448ed2341af5191f393f7c413477a36010a7b022f9e320",
        "LookupName": "ListingAgreement",
        "LookupValue": "ExclusiveAgency",
        "StandardLookupValue": "ExclusiveAgency",
        "LegacyOdataValue": "Exclusive Agency"
    },
    {
        "LookupKey": "0f693a49ae37bc47bca52192352e1c1541a58a87b70898a40483e9d57a9c5fa9",
        "LookupName": "ListingAgreement",
        "LookupValue": "ExclusiveRightToLease",
        "StandardLookupValue": "ExclusiveRightToLease",
        "LegacyOdataValue": "Exclusive Right To Lease"
    },
    {
        "LookupKey": "063417d96aeee14aedfc901c63a2c16189038a60f0c9eddcf3cfd0021c9a30e8",
        "LookupName": "ListingAgreement",
        "LookupValue": "ExclusiveRightToSell",
        "StandardLookupValue": "ExclusiveRightToSell",
        "LegacyOdataValue": "Exclusive Right To Sell"
    },
    {
        "LookupKey": "3aac2897a4c5b61210b1aad26ddaeaa1ab6a90d6e532f9497e681807d69926ab",
        "LookupName": "ListingAgreement",
        "LookupValue": "ExclusiveRightWithException",
        "StandardLookupValue": "ExclusiveRightWithException",
        "LegacyOdataValue": "Exclusive Right With Exception"
    },
    {
        "LookupKey": "18dd542a1a58f9c30a47757d9047a08b2b2f974f070328a0aa55183f0786b005",
        "LookupName": "ListingAgreement",
        "LookupValue": "Net",
        "StandardLookupValue": "Net",
        "LegacyOdataValue": "Net"
    },
    {
        "LookupKey": "33a324f91fa5fa8c0d16c53542fadd32f08bd28a339a300345ffd6f1689f2599",
        "LookupName": "ListingAgreement",
        "LookupValue": "Open",
        "StandardLookupValue": "Open",
        "LegacyOdataValue": "Open"
    },
    {
        "LookupKey": "b755098630ba8f3b1f93aa7dd7cf7386dbac617885a84fc30cc61ad69a91ebc3",
        "LookupName": "ListingAgreement",
        "LookupValue": "Probate",
        "StandardLookupValue": "Probate",
        "LegacyOdataValue": "Probate"
    },
    {
        "LookupKey": "754966d1f0c046e2cf01688caa37c5f0e2cba0125ca8562d3d6bfc6f582c061e",
        "LookupName": "ListingService",
        "LookupValue": "EntryOnly",
        "StandardLookupValue": "EntryOnly",
        "LegacyOdataValue": "Entry Only"
    },
    {
        "LookupKey": "8b4d7c348ca0f009d1fc1ff883e4bed98302f7abfb075e5279fc3fbd25e16ca2",
        "LookupName": "ListingService",
        "LookupValue": "FullService",
        "StandardLookupValue": "FullService",
        "LegacyOdataValue": "Full Service"
    },
    {
        "LookupKey": "c6da8e4a1e922742cc3147dddb0bba9b750de3f513824b31c08856daf764cce7",
        "LookupName": "ListingService",
        "LookupValue": "LimitedService",
        "StandardLookupValue": "LimitedService",
        "LegacyOdataValue": "Limited Service"
    },
    {
        "LookupKey": "b97ec4b58a02c513393f8d30414a8320613f019c86bdc1065d2aba1f21a6d8f5",
        "LookupName": "ListingTerms",
        "LookupValue": "AllInclusiveTrustDeed",
        "StandardLookupValue": "AllInclusiveTrustDeed",
        "LegacyOdataValue": "All Inclusive Trust Deed"
    },
    {
        "LookupKey": "fe88489474b1aa82df4ef4b011333d9a5ee3f6d7a88d36aad158be1418c64d26",
        "LookupName": "ListingTerms",
        "LookupValue": "Assumable",
        "StandardLookupValue": "Assumable",
        "LegacyOdataValue": "Assumable"
    },
    {
        "LookupKey": "795ac0e28e9dcc2334d512a9582994406d4daddbc8982e0756cae54c5c6e7dfa",
        "LookupName": "ListingTerms",
        "LookupValue": "Cash",
        "StandardLookupValue": "Cash",
        "LegacyOdataValue": "Cash"
    },
    {
        "LookupKey": "fd079f35a3df13008c92dfb8a80791520d1601103cb6d92a92f0868d36d870fb",
        "LookupName": "ListingTerms",
        "LookupValue": "Contract",
        "StandardLookupValue": "Contract",
        "LegacyOdataValue": "Contract"
    },
    {
        "LookupKey": "750e87b1e39ee3b1a6a5eb40ba305a94ce532a63ee378bd8e1dd1dfa0d307f22",
        "LookupName": "ListingTerms",
        "LookupValue": "Conventional",
        "StandardLookupValue": "Conventional",
        "LegacyOdataValue": "Conventional"
    },
    {
        "LookupKey": "8dac0623431e4fe1f918886d26d720ea6ee36c6b9dbbe60553aa09b1ccc066a7",
        "LookupName": "ListingTerms",
        "LookupValue": "Exchange1031",
        "StandardLookupValue": "Exchange1031",
        "LegacyOdataValue": "1031 Exchange"
    },
    {
        "LookupKey": "f7265dc635bd60dcf27979e111ab4a10d718f2a4c8b0cf4d7e7adcf5ebaa8c01",
        "LookupName": "ListingTerms",
        "LookupValue": "ExistingBonds",
        "StandardLookupValue": "ExistingBonds",
        "LegacyOdataValue": "Existing Bonds"
    },
    {
        "LookupKey": "c75a76c26d5c2da0ff4e27d9b7e03ccc6d122031b4798b8b64de21e2e36d4dc1",
        "LookupName": "ListingTerms",
        "LookupValue": "FHA",
        "StandardLookupValue": "FHA",
        "LegacyOdataValue": "FHA"
    },
    {
        "LookupKey": "92e8f39f8b1f52f8b26f27d5cb611af767fa0178c80c8a5309a9722b4fc981fa",
        "LookupName": "ListingTerms",
        "LookupValue": "LandUseFee",
        "StandardLookupValue": "LandUseFee",
        "LegacyOdataValue": "Land Use Fee"
    },
    {
        "LookupKey": "cdbb4569cf933027e820276b6f13f54d8f22171ca373ad33e617d21df8c0946f",
        "LookupName": "ListingTerms",
        "LookupValue": "LeaseBack",
        "StandardLookupValue": "LeaseBack",
        "LegacyOdataValue": "Lease Back"
    },
    {
        "LookupKey": "c2e2a27b5a391491b4c8183b319f76fc06d3b5132b7f91fa59c294792ccc02bf",
        "LookupName": "ListingTerms",
        "LookupValue": "LeaseOption",
        "StandardLookupValue": "LeaseOption",
        "LegacyOdataValue": "Lease Option"
    },
    {
        "LookupKey": "eab835a7cb327954e41ea7d62da435e1e61863eda48ee4ef9537708af792a7b6",
        "LookupName": "ListingTerms",
        "LookupValue": "LeasePurchase",
        "StandardLookupValue": "LeasePurchase",
        "LegacyOdataValue": "Lease Purchase"
    },
    {
        "LookupKey": "a2c601568072ceb2c92dabc3f3355aed8f8831d8af7295c6728b67f255ce53dd",
        "LookupName": "ListingTerms",
        "LookupValue": "LienRelease",
        "StandardLookupValue": "LienRelease",
        "LegacyOdataValue": "Lien Release"
    },
    {
        "LookupKey": "7e3450c650ac3cf4ca6ffc37869b7f21570016aee9ecf68896a90bb3baeda8e1",
        "LookupName": "ListingTerms",
        "LookupValue": "OwnerMayCarry",
        "StandardLookupValue": "OwnerMayCarry",
        "LegacyOdataValue": "Owner May Carry"
    },
    {
        "LookupKey": "516be3295b979756b89b18217c510827d4f96be35af0a2c25278229f81b66681",
        "LookupName": "ListingTerms",
        "LookupValue": "OwnerPayPoints",
        "StandardLookupValue": "OwnerPayPoints",
        "LegacyOdataValue": "Owner Pay Points"
    },
    {
        "LookupKey": "c2af601bd74148464582bb84201ef4f246b664eb32a2a94985dcb241f30c4fed",
        "LookupName": "ListingTerms",
        "LookupValue": "OwnerWillCarry",
        "StandardLookupValue": "OwnerWillCarry",
        "LegacyOdataValue": "Owner Will Carry"
    },
    {
        "LookupKey": "c09d8c030e6fc01c60358914a76923503a25f890f4ba84ec7ecb0332ad48f067",
        "LookupName": "ListingTerms",
        "LookupValue": "PrivateFinancingAvailable",
        "StandardLookupValue": "PrivateFinancingAvailable",
        "LegacyOdataValue": "Private Financing Available"
    },
    {
        "LookupKey": "c57b2f896ca7c818c726d255a689579f15d24a74425b3406dc758c00e338ce08",
        "LookupName": "ListingTerms",
        "LookupValue": "RelocationProperty",
        "StandardLookupValue": "RelocationProperty",
        "LegacyOdataValue": "Relocation Property"
    },
    {
        "LookupKey": "3512adab997ce2e41211b21c9b93c80c227e5e9bc700ef943f65df84909f92ab",
        "LookupName": "ListingTerms",
        "LookupValue": "SellerEquityShare",
        "StandardLookupValue": "SellerEquityShare",
        "LegacyOdataValue": "Seller Equity Share"
    },
    {
        "LookupKey": "5428fa83c24f5120a044bd0bca029b0957e44eef0da0088236c39a1ec4248b0f",
        "LookupName": "ListingTerms",
        "LookupValue": "SpecialFunding",
        "StandardLookupValue": "SpecialFunding",
        "LegacyOdataValue": "Special Funding"
    },
    {
        "LookupKey": "2480d579aa849f89a3bbf3f5b7dd2e003f609ed7df88173f0c924b8e14d0e2a3",
        "LookupName": "ListingTerms",
        "LookupValue": "Submit",
        "StandardLookupValue": "Submit",
        "LegacyOdataValue": "Submit"
    },
    {
        "LookupKey": "3c92433d5f26820f7b00b3348f2c5195b06a53c3e212e728cfdb2957b3d580c4",
        "LookupName": "ListingTerms",
        "LookupValue": "Trade",
        "StandardLookupValue": "Trade",
        "LegacyOdataValue": "Trade"
    },
    {
        "LookupKey": "5ecdb50b661cf41f8bc9ec66787c90089597644ba2d4e4a9837190bb49355522",
        "LookupName": "ListingTerms",
        "LookupValue": "TrustConveyance",
        "StandardLookupValue": "TrustConveyance",
        "LegacyOdataValue": "Trust Conveyance"
    },
    {
        "LookupKey": "31aefb0a6d4d426e9dff22e76552af0be613057b5c55802102267c1d2b4ec15a",
        "LookupName": "ListingTerms",
        "LookupValue": "TrustDeed",
        "StandardLookupValue": "TrustDeed",
        "LegacyOdataValue": "Trust Deed"
    },
    {
        "LookupKey": "fc7de24217d7697fc98ffbd3d857e41e83732c7801db3acd8a22f5a49b57fc0a",
        "LookupName": "ListingTerms",
        "LookupValue": "UsdaLoan",
        "StandardLookupValue": "UsdaLoan",
        "LegacyOdataValue": "USDA Loan"
    },
    {
        "LookupKey": "4de5e39fbe03f78b6c6515df58b449a5c6f0b241ce43cf3b451b88f27246fcc0",
        "LookupName": "ListingTerms",
        "LookupValue": "VaLoan",
        "StandardLookupValue": "VaLoan",
        "LegacyOdataValue": "VA Loan"
    },
    {
        "LookupKey": "dd26db8a8eacea8ec16ee1287e178b188e81003867ad4d93c738248defab240b",
        "LookupName": "LockBoxType",
        "LookupValue": "CallListingOffice",
        "StandardLookupValue": "CallListingOffice",
        "LegacyOdataValue": "Call Listing Office"
    },
    {
        "LookupKey": "c4802dc561be31fbbcac2a9f823ddae9568a4d3f151ae4775f093d04a0cebe7a",
        "LookupName": "LockBoxType",
        "LookupValue": "CallSellerDirect",
        "StandardLookupValue": "CallSellerDirect",
        "LegacyOdataValue": "Call Seller Direct"
    },
    {
        "LookupKey": "f065214378659471dabd8e6fa20195e1a37bcfc67bf28437f3d1eb1e317a0c18",
        "LookupName": "LockBoxType",
        "LookupValue": "Combo",
        "StandardLookupValue": "Combo",
        "LegacyOdataValue": "Combo"
    },
    {
        "LookupKey": "41a6fe425ebf27dd6791b36de5ac165d3910b8f1ac5b70c7c60163fd0e3a0dca",
        "LookupName": "LockBoxType",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "391f6de1f297978421c1318ebdfab532d9ed54bb3eac2ca8cbb664b9a93b3e01",
        "LookupName": "LockBoxType",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "b621dae248d84ab9abb61ae5a0ad98d00bf4b6e98d206527711246194f2c75c0",
        "LookupName": "LockBoxType",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "aea4924486fcd8078fc94ef3dba5b885630ad254eb5dd776e2755dd9d909dc9a",
        "LookupName": "LockBoxType",
        "LookupValue": "Sentrilock",
        "StandardLookupValue": "Sentrilock",
        "LegacyOdataValue": "SentriLock"
    },
    {
        "LookupKey": "4e3b050da10a0db31fe8d3f4f718a9dc945338b4ec8b3ea628d01c6352f9a522",
        "LookupName": "LockBoxType",
        "LookupValue": "Supra",
        "StandardLookupValue": "Supra",
        "LegacyOdataValue": "Supra"
    },
    {
        "LookupKey": "37bb1667c633b5d5d1fc19bb6560830ec98ce978b96d6109d78528928279587d",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "Appraiser",
        "StandardLookupValue": "Appraiser",
        "LegacyOdataValue": "Appraiser"
    },
    {
        "LookupKey": "8ecd512d3acd7ba81f6b41abf12a0212076c0942ef002513036e67241365fabe",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "Assessor",
        "StandardLookupValue": "Assessor",
        "LegacyOdataValue": "Assessor"
    },
    {
        "LookupKey": "682f64832a6c4116a4b19885d3a388a10b57985f61a1ac9142602bedda95aca4",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "Builder",
        "StandardLookupValue": "Builder",
        "LegacyOdataValue": "Builder"
    },
    {
        "LookupKey": "c7b9f653839433701cc7d17f401bc68d774d65e646847bbbdeb727421e7273dc",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "Estimated",
        "StandardLookupValue": "Estimated",
        "LegacyOdataValue": "Estimated"
    },
    {
        "LookupKey": "364309f39e58459a5fec5472b1871cb576788d864c363003018e1c68cd151017",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "GisCalculated",
        "StandardLookupValue": "GisCalculated",
        "LegacyOdataValue": "GIS Calculated"
    },
    {
        "LookupKey": "e1a6701f3d9ca9a3ffbeb339390e95a142ebc8f1b307df6b67ebd1e3c256b41b",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "Measured",
        "StandardLookupValue": "Measured",
        "LegacyOdataValue": "Measured"
    },
    {
        "LookupKey": "ab6ad672482e03c502e15d473bda6323aa1c1d85abe826311af0a2f8be8aa7b3",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "12e00aef47c70af0dcd96bd03f875293823b51b5c452b354a69b2525199f0626",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "Owner",
        "StandardLookupValue": "Owner",
        "LegacyOdataValue": "Owner"
    },
    {
        "LookupKey": "611482f7934b9f345225b355c63c0c5b4dd20e3a790b9319b40bc2df2204a9c4",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "PublicRecords",
        "StandardLookupValue": "PublicRecords",
        "LegacyOdataValue": "Public Records"
    },
    {
        "LookupKey": "16279878ad4e7e711ec0a743add1bdd3aaf0bb8241b7a934b9b1ed81605da9c0",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "89606fed6d3671855115a78a5fb1706fbdbc3b4e8db3ac01d87b74331ec5d1c2",
        "LookupName": "LotDimensionsSource",
        "LookupValue": "Survey",
        "StandardLookupValue": "Survey",
        "LegacyOdataValue": "Survey"
    },
    {
        "LookupKey": "959616bcc340ecf87db9459f65b5993b5fd4902a850034fe14837ef89e83470d",
        "LookupName": "LotFeatures",
        "LookupValue": "Agricultural",
        "StandardLookupValue": "Agricultural",
        "LegacyOdataValue": "Agricultural"
    },
    {
        "LookupKey": "a4593fd9491de58990accc06ac64cc2960ba60d91bb52cfac4abd5d0443d4473",
        "LookupName": "LotFeatures",
        "LookupValue": "BackYard",
        "StandardLookupValue": "BackYard",
        "LegacyOdataValue": "Back Yard"
    },
    {
        "LookupKey": "4fe9a87e452f3c407874127bdfd28ed25e5e4c3da26ba4d37074f8d91bab7af8",
        "LookupName": "LotFeatures",
        "LookupValue": "Bluff",
        "StandardLookupValue": "Bluff",
        "LegacyOdataValue": "Bluff"
    },
    {
        "LookupKey": "966e6ebcef9ca397e0a46ff1e6e500f0304ac777365d39efa9decaae07739701",
        "LookupName": "LotFeatures",
        "LookupValue": "CityLot",
        "StandardLookupValue": "CityLot",
        "LegacyOdataValue": "City Lot"
    },
    {
        "LookupKey": "0631d087ef3e0c505b9a2a85a45a0ed2c694ff7800b4c8aea8dac275cd48a83b",
        "LookupName": "LotFeatures",
        "LookupValue": "Cleared",
        "StandardLookupValue": "Cleared",
        "LegacyOdataValue": "Cleared"
    },
    {
        "LookupKey": "fcdb4029b07c4e1eb76a69e126292807a8b68dd3240710cd365b2bc7357ef0b3",
        "LookupName": "LotFeatures",
        "LookupValue": "CloseToClubhouse",
        "StandardLookupValue": "CloseToClubhouse",
        "LegacyOdataValue": "Close to Clubhouse"
    },
    {
        "LookupKey": "768923844d6c9473c61f774309f91616888aeb649a828b74125695c1a035df08",
        "LookupName": "LotFeatures",
        "LookupValue": "CornerLot",
        "StandardLookupValue": "CornerLot",
        "LegacyOdataValue": "Corner Lot"
    },
    {
        "LookupKey": "389bf4e6e143e73ff4336281ac4384b5f0517806e541553c27bb27f2a234f35e",
        "LookupName": "LotFeatures",
        "LookupValue": "CornersMarked",
        "StandardLookupValue": "CornersMarked",
        "LegacyOdataValue": "Corners Marked"
    },
    {
        "LookupKey": "06815f6a01ca76c178b0cc468956b6d5cc43722a058aac9e21b27ac29a62ceac",
        "LookupName": "LotFeatures",
        "LookupValue": "CulDeSac",
        "StandardLookupValue": "CulDeSac",
        "LegacyOdataValue": "Cul-De-Sac"
    },
    {
        "LookupKey": "b1804a524ab1ce638a43d8155e0c303c34149a83765dbb1f047491772a8acd0c",
        "LookupName": "LotFeatures",
        "LookupValue": "DesertBack",
        "StandardLookupValue": "DesertBack",
        "LegacyOdataValue": "Desert Back"
    },
    {
        "LookupKey": "30edb4c747cc17ff44c52565e0c65d84f91f16f076b3c42f3b7517912c7c669f",
        "LookupName": "LotFeatures",
        "LookupValue": "DesertFront",
        "StandardLookupValue": "DesertFront",
        "LegacyOdataValue": "Desert Front"
    },
    {
        "LookupKey": "222b39a9dee25bb4da97f210bda1c31c370a087fa7752d32f972e5178a19e9dc",
        "LookupName": "LotFeatures",
        "LookupValue": "Farm",
        "StandardLookupValue": "Farm",
        "LegacyOdataValue": "Farm"
    },
    {
        "LookupKey": "fb428647e0f76c387216984ea7068aab5d55e1babb5ac8f903c08d7138d56376",
        "LookupName": "LotFeatures",
        "LookupValue": "FewTrees",
        "StandardLookupValue": "FewTrees",
        "LegacyOdataValue": "Few Trees"
    },
    {
        "LookupKey": "05acd25aff1ee300bc16b8fdfe3766462288f5f50235f00f22badb8c2674db56",
        "LookupName": "LotFeatures",
        "LookupValue": "FlagLot",
        "StandardLookupValue": "FlagLot",
        "LegacyOdataValue": "Flag Lot"
    },
    {
        "LookupKey": "9186ba7e5c9ebc30bc6ba2e6a54bac057270cabbd609ae52d3285b5119216810",
        "LookupName": "LotFeatures",
        "LookupValue": "FrontYard",
        "StandardLookupValue": "FrontYard",
        "LegacyOdataValue": "Front Yard"
    },
    {
        "LookupKey": "c76363f55935f10f06e1fa40f3e7d47ccd9ea259bd102b8105b9e222d63b2ad2",
        "LookupName": "LotFeatures",
        "LookupValue": "Garden",
        "StandardLookupValue": "Garden",
        "LegacyOdataValue": "Garden"
    },
    {
        "LookupKey": "5b1534befc91d6e4c783b9b0085b18de3f91dc1636fa9807d9acb3220f4f9fd2",
        "LookupName": "LotFeatures",
        "LookupValue": "GentleSloping",
        "StandardLookupValue": "GentleSloping",
        "LegacyOdataValue": "Gentle Sloping"
    },
    {
        "LookupKey": "50c4afef52e6a6d10831a5de7e8af0eaf7de0dbf3ab1fc937c15462c95fe36b3",
        "LookupName": "LotFeatures",
        "LookupValue": "Greenbelt",
        "StandardLookupValue": "Greenbelt",
        "LegacyOdataValue": "Greenbelt"
    },
    {
        "LookupKey": "ddaf8efe182ec4f3b5b602d977c1965149dfa508a27ec2ca8f95a20cdd5d3a41",
        "LookupName": "LotFeatures",
        "LookupValue": "InteriorLot",
        "StandardLookupValue": "InteriorLot",
        "LegacyOdataValue": "Interior Lot"
    },
    {
        "LookupKey": "1e7f3c182ad158ba171507807d09e27622f8a858223ed1ee8e50efdf858e421d",
        "LookupName": "LotFeatures",
        "LookupValue": "IrregularLot",
        "StandardLookupValue": "IrregularLot",
        "LegacyOdataValue": "Irregular Lot"
    },
    {
        "LookupKey": "f73ec341f9be443c8b19979fee7e76cb76fba6c1cbd24ee5ffec45641c923f17",
        "LookupName": "LotFeatures",
        "LookupValue": "Landscaped",
        "StandardLookupValue": "Landscaped",
        "LegacyOdataValue": "Landscaped"
    },
    {
        "LookupKey": "6b3fa7c57c6022db7629520181c615677a15ea0e89a0e91bbf74a39c174bfa05",
        "LookupName": "LotFeatures",
        "LookupValue": "Level",
        "StandardLookupValue": "Level",
        "LegacyOdataValue": "Level"
    },
    {
        "LookupKey": "d1f0fc38a3e7c162b3185ed44a93542945fd53d52251fdacb5b94206b48db1a7",
        "LookupName": "LotFeatures",
        "LookupValue": "ManyTrees",
        "StandardLookupValue": "ManyTrees",
        "LegacyOdataValue": "Many Trees"
    },
    {
        "LookupKey": "cdee9b9f4396fdf8598f4775819044a2b506d481163bf63c657ffff6388ff440",
        "LookupName": "LotFeatures",
        "LookupValue": "Meadow",
        "StandardLookupValue": "Meadow",
        "LegacyOdataValue": "Meadow"
    },
    {
        "LookupKey": "8c8b663449fed6837ef6a6ca3545761fc6308b602bb97992e25744a597c8fda4",
        "LookupName": "LotFeatures",
        "LookupValue": "NativePlants",
        "StandardLookupValue": "NativePlants",
        "LegacyOdataValue": "Native Plants"
    },
    {
        "LookupKey": "44798651efa6a0e0f6e49557b8ae2b43166f9d51037a4cc8e4f310d4602278a6",
        "LookupName": "LotFeatures",
        "LookupValue": "NearGolfCourse",
        "StandardLookupValue": "NearGolfCourse",
        "LegacyOdataValue": "Near Golf Course"
    },
    {
        "LookupKey": "50413ac60f43a0e36c88926d56a8bc194a530c97ec29779ef844f0823cfafa33",
        "LookupName": "LotFeatures",
        "LookupValue": "NearPublicTransit",
        "StandardLookupValue": "NearPublicTransit",
        "LegacyOdataValue": "Near Public Transit"
    },
    {
        "LookupKey": "abfa6b0dcfcc61ec404933b855bf4141aa67241630c7a2a03752a4ff1f37897a",
        "LookupName": "LotFeatures",
        "LookupValue": "OnGolfCourse",
        "StandardLookupValue": "OnGolfCourse",
        "LegacyOdataValue": "On Golf Course"
    },
    {
        "LookupKey": "b5b96eed08f5111472d4a54bd286b951833d8d69f672d6142b0c70a7e923f1b1",
        "LookupName": "LotFeatures",
        "LookupValue": "OpenLot",
        "StandardLookupValue": "OpenLot",
        "LegacyOdataValue": "Open Lot"
    },
    {
        "LookupKey": "d823bfada228b28241cf3b303b82a805db63413a39f9cc6ca4a4c3cd3d5c5656",
        "LookupName": "LotFeatures",
        "LookupValue": "Orchards",
        "StandardLookupValue": "Orchards",
        "LegacyOdataValue": "Orchards"
    },
    {
        "LookupKey": "2f89c5cb1ab4f1fdddf0df5789432d60eaf4ccc5e21f686acb6a7e3a43ee7e4f",
        "LookupName": "LotFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "66425de7fe4a7cb1311b7a46eb2b596645190d2d7af29253d115e68b3f29bb8b",
        "LookupName": "LotFeatures",
        "LookupValue": "Pasture",
        "StandardLookupValue": "Pasture",
        "LegacyOdataValue": "Pasture"
    },
    {
        "LookupKey": "c1a7858a74431c2a2162a45ed7405a4498f19963a0b13919a1819768831c0bd1",
        "LookupName": "LotFeatures",
        "LookupValue": "Paved",
        "StandardLookupValue": "Paved",
        "LegacyOdataValue": "Paved"
    },
    {
        "LookupKey": "665f6632c2da37809263c94e72cff5bcf2b7f9bf0a78225f564c6bb6fc80d8f9",
        "LookupName": "LotFeatures",
        "LookupValue": "PieShapedLot",
        "StandardLookupValue": "PieShapedLot",
        "LegacyOdataValue": "Pie Shaped Lot"
    },
    {
        "LookupKey": "8976a5e76e76c53623f3f2e31a876efdcdc23be7acff2c1f0e0efda2bcf02b37",
        "LookupName": "LotFeatures",
        "LookupValue": "Private",
        "StandardLookupValue": "Private",
        "LegacyOdataValue": "Private"
    },
    {
        "LookupKey": "0e41bec0a4ba55afd10349f2cbd0fc9c211456337909bd40654db174dc60d188",
        "LookupName": "LotFeatures",
        "LookupValue": "RectangularLot",
        "StandardLookupValue": "RectangularLot",
        "LegacyOdataValue": "Rectangular Lot"
    },
    {
        "LookupKey": "a2538a17fa3bc2729d2e1734653fc0f508d768d5341ee1428af2cf55965f17e2",
        "LookupName": "LotFeatures",
        "LookupValue": "RockOutcropping",
        "StandardLookupValue": "RockOutcropping",
        "LegacyOdataValue": "Rock Outcropping"
    },
    {
        "LookupKey": "39a9c323430be64e2be8ef83d008a2aa51460c29c2373d8cc32743b142c403d5",
        "LookupName": "LotFeatures",
        "LookupValue": "RollingSlope",
        "StandardLookupValue": "RollingSlope",
        "LegacyOdataValue": "Rolling Slope"
    },
    {
        "LookupKey": "691ad2a16ed4d684657c5cef2078c95549ce58ab34f4349acae049ee8277e1bf",
        "LookupName": "LotFeatures",
        "LookupValue": "Secluded",
        "StandardLookupValue": "Secluded",
        "LegacyOdataValue": "Secluded"
    },
    {
        "LookupKey": "410b9d36645a6ee57e7d1ebee74aac9be187819c6e7a41c4bec3c5a5b26ca365",
        "LookupName": "LotFeatures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "993f725acbecec326e02dea47573a594eaba6dcd262e299dec38d9f8b48c7f00",
        "LookupName": "LotFeatures",
        "LookupValue": "Sloped",
        "StandardLookupValue": "Sloped",
        "LegacyOdataValue": "Sloped"
    },
    {
        "LookupKey": "8be1cd160f80ea1716fefc4c1d7c3b536c2240fd53144076515a8b37571876fd",
        "LookupName": "LotFeatures",
        "LookupValue": "SlopedDown",
        "StandardLookupValue": "SlopedDown",
        "LegacyOdataValue": "Sloped Down"
    },
    {
        "LookupKey": "4e3d378e7104d9dad04f9f89a075a6fdb0f1255c2fad45e88c2e6f70787aad73",
        "LookupName": "LotFeatures",
        "LookupValue": "SlopedUp",
        "StandardLookupValue": "SlopedUp",
        "LegacyOdataValue": "Sloped Up"
    },
    {
        "LookupKey": "04a95650bffb065d058783b4a200d22514bc80995e7a283f250a2392c6d4ecef",
        "LookupName": "LotFeatures",
        "LookupValue": "SplitPossible",
        "StandardLookupValue": "SplitPossible",
        "LegacyOdataValue": "Split Possible"
    },
    {
        "LookupKey": "ebbf94596e19d20b84b0dedd984914a8ac5f773739660fe255c8fb98899eb187",
        "LookupName": "LotFeatures",
        "LookupValue": "SprinklersInFront",
        "StandardLookupValue": "SprinklersInFront",
        "LegacyOdataValue": "Sprinklers In Front"
    },
    {
        "LookupKey": "5cbe1f3fef713ed9f89738a02a208ae65df1ecc1274cf8765997fe09085f1e76",
        "LookupName": "LotFeatures",
        "LookupValue": "SprinklersInRear",
        "StandardLookupValue": "SprinklersInRear",
        "LegacyOdataValue": "Sprinklers In Rear"
    },
    {
        "LookupKey": "fe7f4f0c36a1834082fbdc17e25e1add9f5b3b1ba762bfcff05c1e1040f8ba6a",
        "LookupName": "LotFeatures",
        "LookupValue": "SteepSlope",
        "StandardLookupValue": "SteepSlope",
        "LegacyOdataValue": "Steep Slope"
    },
    {
        "LookupKey": "66bf25bfd8147c2d0fd4c141a8db035f364c113847e8729d0772951770dd3073",
        "LookupName": "LotFeatures",
        "LookupValue": "Subdivided",
        "StandardLookupValue": "Subdivided",
        "LegacyOdataValue": "Subdivided"
    },
    {
        "LookupKey": "21eb99ace0560856d3b549ad112d9496d87c82503b7ea69869cbacf305e893c2",
        "LookupName": "LotFeatures",
        "LookupValue": "Views",
        "StandardLookupValue": "Views",
        "LegacyOdataValue": "Views"
    },
    {
        "LookupKey": "87c78d38e04e40f4c3da938d88c539ef6692ae72d8773746dd5f81aade7d159c",
        "LookupName": "LotFeatures",
        "LookupValue": "Waterfall",
        "StandardLookupValue": "Waterfall",
        "LegacyOdataValue": "Waterfall"
    },
    {
        "LookupKey": "66420526cfcfde0d52d1ad885284219f8d0b10c01199985bc6918e639d79fbb1",
        "LookupName": "LotFeatures",
        "LookupValue": "Waterfront",
        "StandardLookupValue": "Waterfront",
        "LegacyOdataValue": "Waterfront"
    },
    {
        "LookupKey": "7479e2b99c3df938c7ce99841c5d93514dd7cbe66b9eff7e21f232e3cf8ebf54",
        "LookupName": "LotFeatures",
        "LookupValue": "Wetlands",
        "StandardLookupValue": "Wetlands",
        "LegacyOdataValue": "Wetlands"
    },
    {
        "LookupKey": "5398860a0e9b45ed51092c9d27d47813c30b4fd878bffb6b383f6f2542c2fa64",
        "LookupName": "LotFeatures",
        "LookupValue": "Wooded",
        "StandardLookupValue": "Wooded",
        "LegacyOdataValue": "Wooded"
    },
    {
        "LookupKey": "e746a35494ed7695c11918c05e348841d375a3f8f7e415d11d6e9f53625b0def",
        "LookupName": "LotFeatures",
        "LookupValue": "ZeroLotLine",
        "StandardLookupValue": "ZeroLotLine",
        "LegacyOdataValue": "Zero Lot Line"
    },
    {
        "LookupKey": "44604e619d16246ff852ad311c467483e8bb72e920ec43fbf69dea53d090a191",
        "LookupName": "LotSizeSource",
        "LookupValue": "Appraiser",
        "StandardLookupValue": "Appraiser",
        "LegacyOdataValue": "Appraiser"
    },
    {
        "LookupKey": "6387e687dccfa4c5e1a29f093841bb47e5c172e4ec1e14a53bd478d81fcdbbab",
        "LookupName": "LotSizeSource",
        "LookupValue": "Assessor",
        "StandardLookupValue": "Assessor",
        "LegacyOdataValue": "Assessor"
    },
    {
        "LookupKey": "2a10c50a87c8f536fabfee1e061e4b3b794c2ed7c2b2d539544daaeb54b6be53",
        "LookupName": "LotSizeSource",
        "LookupValue": "Builder",
        "StandardLookupValue": "Builder",
        "LegacyOdataValue": "Builder"
    },
    {
        "LookupKey": "bb04d5b74f239544ba655fa340711a85ada8d85d10eb8d6dc4200e8d496d2940",
        "LookupName": "LotSizeSource",
        "LookupValue": "Estimated",
        "StandardLookupValue": "Estimated",
        "LegacyOdataValue": "Estimated"
    },
    {
        "LookupKey": "27c6e64233a116011eb10810d0ad8c3ef950440de2ab747110622eb75895016d",
        "LookupName": "LotSizeSource",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "22476d92e77c029a177de73ec4c9f0ff7637ce53fc4beb80af8ab3eb79b4102f",
        "LookupName": "LotSizeSource",
        "LookupValue": "Owner",
        "StandardLookupValue": "Owner",
        "LegacyOdataValue": "Owner"
    },
    {
        "LookupKey": "a4ed4cdf1ca70d1b48ab3ff3ab06d1724b6edbfd1062d3595b03fadd22117567",
        "LookupName": "LotSizeSource",
        "LookupValue": "Plans",
        "StandardLookupValue": "Plans",
        "LegacyOdataValue": "Plans"
    },
    {
        "LookupKey": "3e2ba7ad53b13d15273712a61977b48e444a279a6e54132cab39110988b3342a",
        "LookupName": "LotSizeSource",
        "LookupValue": "PublicRecords",
        "StandardLookupValue": "PublicRecords",
        "LegacyOdataValue": "Public Records"
    },
    {
        "LookupKey": "114166dc03708e386a845d53a63480119c4bd8e35c1937c770305134aa9a5ce9",
        "LookupName": "LotSizeSource",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "1ef793fa04c2349800c26461e2c45c8b525a974990e1b4cc0703e989b6040d56",
        "LookupName": "LotSizeUnits",
        "LookupValue": "Acres",
        "StandardLookupValue": "Acres",
        "LegacyOdataValue": "Acres"
    },
    {
        "LookupKey": "6c9783994ebbcfcecf9056f63ab21b4096e0f1265bd8a6974cca7fc7e4112ccd",
        "LookupName": "LotSizeUnits",
        "LookupValue": "SquareFeet",
        "StandardLookupValue": "SquareFeet",
        "LegacyOdataValue": "Square Feet"
    },
    {
        "LookupKey": "4b4d88a5ee357cc99a28f13293a385d6d9a5815bf2685514223950a16ef0c40c",
        "LookupName": "LotSizeUnits",
        "LookupValue": "SquareMeters",
        "StandardLookupValue": "SquareMeters",
        "LegacyOdataValue": "Square Meters"
    },
    {
        "LookupKey": "4491b0f90713343e6ac609ae648f70e59f340c24ee9773fa1116b9c15316cd75",
        "LookupName": "ChangeType",
        "LookupValue": "Active",
        "StandardLookupValue": "Active",
        "LegacyOdataValue": "Active"
    },
    {
        "LookupKey": "08cfbef4710af78f9885630582dc79a17a31db4293b9fcda1d129cb05ad65a29",
        "LookupName": "ChangeType",
        "LookupValue": "ActiveUnderContract",
        "StandardLookupValue": "ActiveUnderContract",
        "LegacyOdataValue": "Active Under Contract"
    },
    {
        "LookupKey": "6f31015d7f5ffa26d55e1496ac171334a252e47f7f5f5d4f4010297b74beb57c",
        "LookupName": "ChangeType",
        "LookupValue": "BackOnMarket",
        "StandardLookupValue": "BackOnMarket",
        "LegacyOdataValue": "Back On Market"
    },
    {
        "LookupKey": "337112a593d983b35506b16e590815b19e9db799ac63554069a4f24e2914e5d5",
        "LookupName": "ChangeType",
        "LookupValue": "Canceled",
        "StandardLookupValue": "Canceled",
        "LegacyOdataValue": "Canceled"
    },
    {
        "LookupKey": "01f43e60ee7be9f4f3592aab8edb0000bcddb2b7ae9b776ae04a1c2ee8b09e4c",
        "LookupName": "ChangeType",
        "LookupValue": "Closed",
        "StandardLookupValue": "Closed",
        "LegacyOdataValue": "Closed"
    },
    {
        "LookupKey": "c94763cc40df3d0dd7a99f9d159a5247329cfc37fa984e9cf6ad896a2c5639ab",
        "LookupName": "ChangeType",
        "LookupValue": "Deleted",
        "StandardLookupValue": "Deleted",
        "LegacyOdataValue": "Deleted"
    },
    {
        "LookupKey": "fd5837fcace9e177a0cd31dd642d9cbce200f6dbf6223fa179690c128242769b",
        "LookupName": "ChangeType",
        "LookupValue": "Expired",
        "StandardLookupValue": "Expired",
        "LegacyOdataValue": "Expired"
    },
    {
        "LookupKey": "a6d024a9b83b1c76a7165416fde765db94442f883d4b90243af0e8fd7f9fba76",
        "LookupName": "ChangeType",
        "LookupValue": "Hold",
        "StandardLookupValue": "Hold",
        "LegacyOdataValue": "Hold"
    },
    {
        "LookupKey": "e949f32a02c6ccf5d08c0d7307a6b4f4da01faebeeea1dbb918ec59b992fa629",
        "LookupName": "ChangeType",
        "LookupValue": "NewListing",
        "StandardLookupValue": "NewListing",
        "LegacyOdataValue": "New Listing"
    },
    {
        "LookupKey": "1cd5861a0c4526679f69ba8975c2a71de68b63602a069eb814fe744c72a93aad",
        "LookupName": "ChangeType",
        "LookupValue": "Pending",
        "StandardLookupValue": "Pending",
        "LegacyOdataValue": "Pending"
    },
    {
        "LookupKey": "029cf77646af817f3f9abc68c996c06c5a032586f1e11e601fc8eabe5b9fc97a",
        "LookupName": "ChangeType",
        "LookupValue": "PriceChange",
        "StandardLookupValue": "PriceChange",
        "LegacyOdataValue": "Price Change"
    },
    {
        "LookupKey": "27cd4ef2abc93ea44178f5afae3c00b10d11b24e9855c163b065187e525b0e53",
        "LookupName": "ChangeType",
        "LookupValue": "Withdrawn",
        "StandardLookupValue": "Withdrawn",
        "LegacyOdataValue": "Withdrawn"
    },
    {
        "LookupKey": "191b317becd9d11f32c14429323bbfcec7d440974725ce81e6699236ecb490bf",
        "LookupName": "OccupantType",
        "LookupValue": "Owner",
        "StandardLookupValue": "Owner",
        "LegacyOdataValue": "Owner"
    },
    {
        "LookupKey": "f7b8722a4bbd0aedb84324c38b917f4398bc7c3baa79a002128cad7129e7bc98",
        "LookupName": "OccupantType",
        "LookupValue": "Tenant",
        "StandardLookupValue": "Tenant",
        "LegacyOdataValue": "Tenant"
    },
    {
        "LookupKey": "440f728da36ceb886d52257c00e30aaab68bbdc391de392b4fd43a8b5f0e6bd8",
        "LookupName": "OccupantType",
        "LookupValue": "Vacant",
        "StandardLookupValue": "Vacant",
        "LegacyOdataValue": "Vacant"
    },
    {
        "LookupKey": "498af0cbd3e308a8b34603c272531c9b4df042bea13ec7bac85cc68266b90b0a",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Accounting",
        "StandardLookupValue": "Accounting",
        "LegacyOdataValue": "Accounting"
    },
    {
        "LookupKey": "1d30805bcd30f312786f614837af3848cb186fdea2f30f1eb75671e498e3bb61",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Advertising",
        "StandardLookupValue": "Advertising",
        "LegacyOdataValue": "Advertising"
    },
    {
        "LookupKey": "74c81e2a89f769dee1017e07aa2ec5c7023871c118c31cf4e86670ca59831f48",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Association",
        "StandardLookupValue": "Association",
        "LegacyOdataValue": "Association"
    },
    {
        "LookupKey": "bc5c806eca91372f45294d9da5d992166c54ef9160219991d9096349f5f2417f",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "CableTv",
        "StandardLookupValue": "CableTv",
        "LegacyOdataValue": "Cable TV"
    },
    {
        "LookupKey": "b6fe42b75c8473cffb44445278839c23a6cffef25ae24b590fe0fb7b07e39ec4",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "CapitalImprovements",
        "StandardLookupValue": "CapitalImprovements",
        "LegacyOdataValue": "Capital Improvements"
    },
    {
        "LookupKey": "1af8fd564a3b299e9a8b79a544b0a187fb8098e36010574096b662635de65351",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Depreciation",
        "StandardLookupValue": "Depreciation",
        "LegacyOdataValue": "Depreciation"
    },
    {
        "LookupKey": "b87455656ffe75e7962e68f825cf6920b6465803e0ee3c19408068ec8b1e6386",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "EquipmentRental",
        "StandardLookupValue": "EquipmentRental",
        "LegacyOdataValue": "Equipment Rental"
    },
    {
        "LookupKey": "498ef74fec8ddcd87aa4f4a30c65c11bb342054051863d2d1287b62cf78d306d",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Fuel",
        "StandardLookupValue": "Fuel",
        "LegacyOdataValue": "Fuel"
    },
    {
        "LookupKey": "b7d1acd631ff24a8c133f2ead35bb4e8c348eac3453a5842047f823a56319d02",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "FurnitureReplacement",
        "StandardLookupValue": "FurnitureReplacement",
        "LegacyOdataValue": "Furniture Replacement"
    },
    {
        "LookupKey": "b5cd0d0c63f6735c47d9e3b536c0d5187b036ba46030a8a0c46d1f0b40b5f65a",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Gardener",
        "StandardLookupValue": "Gardener",
        "LegacyOdataValue": "Gardener"
    },
    {
        "LookupKey": "c18cbb74bd50c9384468fe81e1f1b52465684c29bd363c62c60062d18f7a4f84",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Insurance",
        "StandardLookupValue": "Insurance",
        "LegacyOdataValue": "Insurance"
    },
    {
        "LookupKey": "bd416958dc57161f55f0a20ee06c0e51d869e2b14151165c7061f4caed3d8afa",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Legal",
        "StandardLookupValue": "Legal",
        "LegacyOdataValue": "Legal"
    },
    {
        "LookupKey": "526fa6268f021ceb3566c56a4cfb24209488db091839c284ee37113e83900bbe",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Licenses",
        "StandardLookupValue": "Licenses",
        "LegacyOdataValue": "Licenses"
    },
    {
        "LookupKey": "d403c93a6c4fac73b50e61fa57e428d4fae9cfe84b0931eb44ef21cb884f44d5",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Maintenance",
        "StandardLookupValue": "Maintenance",
        "LegacyOdataValue": "Maintenance"
    },
    {
        "LookupKey": "cfef1a016d52777a77c800d597e386cd64a302feaa5c5562e086a88fd2deb270",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "MaintenanceGrounds",
        "StandardLookupValue": "MaintenanceGrounds",
        "LegacyOdataValue": "Maintenance Grounds"
    },
    {
        "LookupKey": "bc8ba194a816cbf94b58dc31ed34bb385175b3d09e4394d7c97df8c7104c08eb",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "MaintenanceStructure",
        "StandardLookupValue": "MaintenanceStructure",
        "LegacyOdataValue": "Maintenance Structure"
    },
    {
        "LookupKey": "47d27b93799cb50f5a1c461e25a48cabef8f9bbf2bcb8f1bcfefe71cb88fc24b",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Manager",
        "StandardLookupValue": "Manager",
        "LegacyOdataValue": "Manager"
    },
    {
        "LookupKey": "05f05547b3f50ae8c86670427d80013a7a26cc26b932fd0ef9a48f52efd8ec44",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "MortgageLoans",
        "StandardLookupValue": "MortgageLoans",
        "LegacyOdataValue": "Mortgage/Loans"
    },
    {
        "LookupKey": "60e2d160893a323ba8c8a4e5018ec6e23ac615ab930dd6d64a0774ba717b2b67",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "NewTax",
        "StandardLookupValue": "NewTax",
        "LegacyOdataValue": "New Tax"
    },
    {
        "LookupKey": "dd131fa0303cd8c4fe05fceaf373b72c854228e51c8fbc5bec9bf22bb56887f1",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "9a22ff970e4ded29cf5e36cd22612973bc5ef1bbeb3dede2af9bcf8373597a50",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Parking",
        "StandardLookupValue": "Parking",
        "LegacyOdataValue": "Parking"
    },
    {
        "LookupKey": "633f4ed03068a5376a9e7fa45ab1519c4c1ccaa660da255c53d3c62ee5939cdb",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "PestControl",
        "StandardLookupValue": "PestControl",
        "LegacyOdataValue": "Pest Control"
    },
    {
        "LookupKey": "ba1b51a0b8606546c64663afad16eb265845c8e1223e2a14e9396715508db76c",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "PoolSpa",
        "StandardLookupValue": "PoolSpa",
        "LegacyOdataValue": "Pool/Spa"
    },
    {
        "LookupKey": "d57e604a6df8d22dfd9902d43d1a8a2b335b4e4e0002c2a442b2abcd2ab50cb4",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "ProfessionalManagement",
        "StandardLookupValue": "ProfessionalManagement",
        "LegacyOdataValue": "Professional Management"
    },
    {
        "LookupKey": "1078e3a874e1789acc834d19eb3980d1c80fd03dc677685108e720b0452ff2c5",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Security",
        "StandardLookupValue": "Security",
        "LegacyOdataValue": "Security"
    },
    {
        "LookupKey": "510888a2378bc960b9ef382dd752edbabae5deefe6fbdfdcc940908d335fab6f",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "SnowRemoval",
        "StandardLookupValue": "SnowRemoval",
        "LegacyOdataValue": "Snow Removal"
    },
    {
        "LookupKey": "458e9d9402ccfb842a2c87d2eea613687ca814a37575d46085d158e11db66d7d",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Staff",
        "StandardLookupValue": "Staff",
        "LegacyOdataValue": "Staff"
    },
    {
        "LookupKey": "cc38650dee680bb441e8fa2ff45b0006b1fcf6162b462d6d300656757e8cdc85",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Supplies",
        "StandardLookupValue": "Supplies",
        "LegacyOdataValue": "Supplies"
    },
    {
        "LookupKey": "da2eede5a0c4a31b040d31d1f1315b3af7183aaa971596b49489cce035177cdb",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Trash",
        "StandardLookupValue": "Trash",
        "LegacyOdataValue": "Trash"
    },
    {
        "LookupKey": "e26613780efdc4882948ada36da77f0f9d009595ec689edbc7b6285ea5ceb052",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "Utilities",
        "StandardLookupValue": "Utilities",
        "LegacyOdataValue": "Utilities"
    },
    {
        "LookupKey": "a67f3544c87472f6597603acc8505a4ca945feb3c1e04bc0782ef2a4810d75e3",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "VacancyAllowance",
        "StandardLookupValue": "VacancyAllowance",
        "LegacyOdataValue": "Vacancy Allowance"
    },
    {
        "LookupKey": "9cb68d0d552e37896d94474935aa5e35a83152ec7fb098b3b6bc2d56e84bb3fc",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "WaterSewer",
        "StandardLookupValue": "WaterSewer",
        "LegacyOdataValue": "Water/Sewer"
    },
    {
        "LookupKey": "62336b0e1ac5e506ea96a938efa0342a56a4b9e5163c0dd7897064bde5d85153",
        "LookupName": "OperatingExpenseIncludes",
        "LookupValue": "WorkmansCompensation",
        "StandardLookupValue": "WorkmansCompensation",
        "LegacyOdataValue": "Workmans Compensation"
    },
    {
        "LookupKey": "8cf19ea1354ad9f307ea205dedadd89d147f991aeb75adac3d18c6e3887fa398",
        "LookupName": "OtherEquipment",
        "LookupValue": "AirPurifier",
        "StandardLookupValue": "AirPurifier",
        "LegacyOdataValue": "Air Purifier"
    },
    {
        "LookupKey": "95908d68096314f8b29e669bb11b8a7de6d302fcfd177190ad280288d9901e2d",
        "LookupName": "OtherEquipment",
        "LookupValue": "CallListingAgent",
        "StandardLookupValue": "CallListingAgent",
        "LegacyOdataValue": "Call Listing Agent"
    },
    {
        "LookupKey": "0a40c367c841688832a524005ed60305d004783ead39dab76195d5396580942f",
        "LookupName": "OtherEquipment",
        "LookupValue": "Compressor",
        "StandardLookupValue": "Compressor",
        "LegacyOdataValue": "Compressor"
    },
    {
        "LookupKey": "b97013c33826ce736c15bf7373bab31950bef20cea2fb0bfae3c6cedcb873842",
        "LookupName": "OtherEquipment",
        "LookupValue": "DcWellPump",
        "StandardLookupValue": "DcWellPump",
        "LegacyOdataValue": "DC Well Pump"
    },
    {
        "LookupKey": "41bb594a63983c6e8a32ffaf9032cdb9271708349610e3f2198ab7fc9ed6e4d2",
        "LookupName": "OtherEquipment",
        "LookupValue": "Dehumidifier",
        "StandardLookupValue": "Dehumidifier",
        "LegacyOdataValue": "Dehumidifier"
    },
    {
        "LookupKey": "0480132adebe69de68ff8d51bd54b177f4a0216bcf998a50c21c19a21fb45388",
        "LookupName": "OtherEquipment",
        "LookupValue": "FarmEquipment",
        "StandardLookupValue": "FarmEquipment",
        "LegacyOdataValue": "Farm Equipment"
    },
    {
        "LookupKey": "df5abfa2366409c5897c5b754f69291b0d0e6010e98f2448b7d0cdf7bd02043c",
        "LookupName": "OtherEquipment",
        "LookupValue": "FuelTanks",
        "StandardLookupValue": "FuelTanks",
        "LegacyOdataValue": "Fuel Tanks"
    },
    {
        "LookupKey": "baf66d7e5e925e362c740f5ddefa6790d9b1bccd8dbbd654ba16eede1a91fe6f",
        "LookupName": "OtherEquipment",
        "LookupValue": "Generator",
        "StandardLookupValue": "Generator",
        "LegacyOdataValue": "Generator"
    },
    {
        "LookupKey": "d122bb768dd09aaf2e8e5b54b286260c47c47334168c86b5aedaa4e9da8c3f92",
        "LookupName": "OtherEquipment",
        "LookupValue": "HomeTheater",
        "StandardLookupValue": "HomeTheater",
        "LegacyOdataValue": "Home Theater"
    },
    {
        "LookupKey": "36603eda9085770568ae3a0f2088d6b350ea20e98aee1e71e007e0ff0bcabd30",
        "LookupName": "OtherEquipment",
        "LookupValue": "Intercom",
        "StandardLookupValue": "Intercom",
        "LegacyOdataValue": "Intercom"
    },
    {
        "LookupKey": "e4193b5765808398a416772a6e18a53d9618fbfe1fe7ba2d71ed8c31ece94538",
        "LookupName": "OtherEquipment",
        "LookupValue": "IrrigationEquipment",
        "StandardLookupValue": "IrrigationEquipment",
        "LegacyOdataValue": "Irrigation Equipment"
    },
    {
        "LookupKey": "7c7560784abe583cf778548878f1b0dbe5fac0c0a44a82f3d2e54e43e5ea41e0",
        "LookupName": "OtherEquipment",
        "LookupValue": "ListAvailable",
        "StandardLookupValue": "ListAvailable",
        "LegacyOdataValue": "List Available"
    },
    {
        "LookupKey": "f66fc52e11b648ed0fd353766c28bf2618b7329cbbcd5bb25056c634b667e094",
        "LookupName": "OtherEquipment",
        "LookupValue": "LivestockEquipment",
        "StandardLookupValue": "LivestockEquipment",
        "LegacyOdataValue": "Livestock Equipment"
    },
    {
        "LookupKey": "03385e052903b9e876eb0ba3e084e04ad67076508508d7d521ed0d55e1655793",
        "LookupName": "OtherEquipment",
        "LookupValue": "Negotiable",
        "StandardLookupValue": "Negotiable",
        "LegacyOdataValue": "Negotiable"
    },
    {
        "LookupKey": "35a519fb3799d5ab84cdf4452f88fc1baadbda2b6f7807a4ecd61ef4d2e935bd",
        "LookupName": "OtherEquipment",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "a6de8bfb52be1eec56b2824d63ad00768e27a67ab5a4ceebe5543f6cd0b7a10a",
        "LookupName": "OtherEquipment",
        "LookupValue": "OrchardEquipment",
        "StandardLookupValue": "OrchardEquipment",
        "LegacyOdataValue": "Orchard Equipment"
    },
    {
        "LookupKey": "df4c2b7e6ca2cb09b690b4c5a407e67b458bb5669e36e3d8c3d5b5e5b24d2f2b",
        "LookupName": "OtherEquipment",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "3a5a5a616070e8154d8b1bcd3916d17cba9b44416debc5588a4a600749f2838d",
        "LookupName": "OtherEquipment",
        "LookupValue": "RotaryAntenna",
        "StandardLookupValue": "RotaryAntenna",
        "LegacyOdataValue": "Rotary Antenna"
    },
    {
        "LookupKey": "a513cb18a69f927de0aac54dd9cc814c7ec1f01c357b9381fa34e6f1ed3271b8",
        "LookupName": "OtherEquipment",
        "LookupValue": "SatelliteDish",
        "StandardLookupValue": "SatelliteDish",
        "LegacyOdataValue": "Satellite Dish"
    },
    {
        "LookupKey": "0cd5fe3571b9f2d61bdb26f1d194962b001492e270ecacb440f7ad23bc7381fb",
        "LookupName": "OtherEquipment",
        "LookupValue": "TvAntenna",
        "StandardLookupValue": "TvAntenna",
        "LegacyOdataValue": "TV Antenna"
    },
    {
        "LookupKey": "e1d03f821a2e691707abc487295559552d4cf6a862c59fb32a526d7b8efbe4b9",
        "LookupName": "OtherEquipment",
        "LookupValue": "VariesByUnit",
        "StandardLookupValue": "VariesByUnit",
        "LegacyOdataValue": "Varies by Unit"
    },
    {
        "LookupKey": "df2d54726b06471e79214f8915994faa8cfa19b412332ba4600c031e88a77c54",
        "LookupName": "OtherStructures",
        "LookupValue": "AirplaneHangar",
        "StandardLookupValue": "AirplaneHangar",
        "LegacyOdataValue": "Airplane Hangar"
    },
    {
        "LookupKey": "c89d23bd1521c6f3bc6241b7198e2385cef79ea985a752368ff7ba99b2a13d60",
        "LookupName": "OtherStructures",
        "LookupValue": "Arena",
        "StandardLookupValue": "Arena",
        "LegacyOdataValue": "Arena"
    },
    {
        "LookupKey": "80c3366e411d54a270b2c9e195f81b12e371299701981e242d46fc9cb7c4f1a8",
        "LookupName": "OtherStructures",
        "LookupValue": "Barns",
        "StandardLookupValue": "Barns",
        "LegacyOdataValue": "Barns"
    },
    {
        "LookupKey": "412a75caad604c877788f4a90c56ed76d6094bf9278bacfeec1b5fc9391afb5a",
        "LookupName": "OtherStructures",
        "LookupValue": "BoatHouse",
        "StandardLookupValue": "BoatHouse",
        "LegacyOdataValue": "Boat House"
    },
    {
        "LookupKey": "7e3677db2f84ff9d0c1fd7d8ce968d98a2b5332815bdd9a9d5785eeaa88d4bfe",
        "LookupName": "OtherStructures",
        "LookupValue": "Cabana",
        "StandardLookupValue": "Cabana",
        "LegacyOdataValue": "Cabana"
    },
    {
        "LookupKey": "27ac3d4d2586ea808b30b0740b9dc4e3ccd66249b5407935931489a8bfb99a2a",
        "LookupName": "OtherStructures",
        "LookupValue": "Caves",
        "StandardLookupValue": "Caves",
        "LegacyOdataValue": "Caves"
    },
    {
        "LookupKey": "cff16e904194e3ea696a15f8f50a21baf66c5f005026dd75faafdc5a750e8031",
        "LookupName": "OtherStructures",
        "LookupValue": "Corrals",
        "StandardLookupValue": "Corrals",
        "LegacyOdataValue": "Corrals"
    },
    {
        "LookupKey": "73ae0d0261ef7433287e69ed129b0f2532f2d91b886ea56c7686bc0a094e6184",
        "LookupName": "OtherStructures",
        "LookupValue": "CoveredArena",
        "StandardLookupValue": "CoveredArena",
        "LegacyOdataValue": "Covered Arena"
    },
    {
        "LookupKey": "21dcb954e6d437f2578b5b5ffb1f319a2034a45d5d11194ec34dfbdd063cd26d",
        "LookupName": "OtherStructures",
        "LookupValue": "Garages",
        "StandardLookupValue": "Garages",
        "LegacyOdataValue": "Garages"
    },
    {
        "LookupKey": "ab95b0c867c07aff836bcc40a762fbbb5e43482ff61449053392ac0c883b37e1",
        "LookupName": "OtherStructures",
        "LookupValue": "Gazebo",
        "StandardLookupValue": "Gazebo",
        "LegacyOdataValue": "Gazebo"
    },
    {
        "LookupKey": "e90c35fd230d78267902f88c29f9b20386061485139a7e119997aec8f719c609",
        "LookupName": "OtherStructures",
        "LookupValue": "GrainStorage",
        "StandardLookupValue": "GrainStorage",
        "LegacyOdataValue": "Grain Storage"
    },
    {
        "LookupKey": "a4dbf76b5a00c78db6554e61464869be971f20982c72d0ccb301918d7afd226b",
        "LookupName": "OtherStructures",
        "LookupValue": "Greenhouse",
        "StandardLookupValue": "Greenhouse",
        "LegacyOdataValue": "Greenhouse"
    },
    {
        "LookupKey": "c14e266a3da171a7898d3da1f410b7a33fe455c75899e59c481f5a51ba9353ce",
        "LookupName": "OtherStructures",
        "LookupValue": "GuestHouse",
        "StandardLookupValue": "GuestHouse",
        "LegacyOdataValue": "Guest House"
    },
    {
        "LookupKey": "9cb19c6607a11e6de57db3bc105ad036068593a29660b3d7caf4828b37ee2236",
        "LookupName": "OtherStructures",
        "LookupValue": "KennelDogRun",
        "StandardLookupValue": "KennelDogRun",
        "LegacyOdataValue": "Kennel/Dog Run"
    },
    {
        "LookupKey": "7472102a046ddbc5222055087fdd3e54b1e033c47ea8088f4e779b1b9b8d3359",
        "LookupName": "OtherStructures",
        "LookupValue": "MobileHome",
        "StandardLookupValue": "MobileHome",
        "LegacyOdataValue": "Mobile Home"
    },
    {
        "LookupKey": "3d285db5105939da79a7664487576e220aabf0d65f74fa86ebba7bcae83a76d8",
        "LookupName": "OtherStructures",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "5017698ea24a28be3c7305257c2060920214eccc145b58c4892815a4c65bad1c",
        "LookupName": "OtherStructures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "190f3a4dc86b4a653d4f07b8e72d10ab0fb732600188a571c407c789dcc26cc6",
        "LookupName": "OtherStructures",
        "LookupValue": "Outbuilding",
        "StandardLookupValue": "Outbuilding",
        "LegacyOdataValue": "Outbuilding"
    },
    {
        "LookupKey": "3b57b33bf20b00e012ef50ecb20aadd1bf17cd7056a90e37b050332e035decb0",
        "LookupName": "OtherStructures",
        "LookupValue": "OutdoorKitchen",
        "StandardLookupValue": "OutdoorKitchen",
        "LegacyOdataValue": "Outdoor Kitchen"
    },
    {
        "LookupKey": "563da4b48cb5fb2471e9608389a4b0f92ee32eb0480926bff229b6fc2ac61f68",
        "LookupName": "OtherStructures",
        "LookupValue": "PackingShed",
        "StandardLookupValue": "PackingShed",
        "LegacyOdataValue": "Packing Shed"
    },
    {
        "LookupKey": "30843cea51b8f16c836d4631b4b81f1d3fe0ba6bcafbf8265d6fa276f8edb057",
        "LookupName": "OtherStructures",
        "LookupValue": "Pergola",
        "StandardLookupValue": "Pergola",
        "LegacyOdataValue": "Pergola"
    },
    {
        "LookupKey": "174dc281fb000a5939262b3f64997e1763f4628e5caae63157f523d03fb1a136",
        "LookupName": "OtherStructures",
        "LookupValue": "PoolHouse",
        "StandardLookupValue": "PoolHouse",
        "LegacyOdataValue": "Pool House"
    },
    {
        "LookupKey": "d2b56a37d8b41a656efa6b4b85ae42699e82d92905b85c6b684f9e33a70865ff",
        "LookupName": "OtherStructures",
        "LookupValue": "PoultryCoop",
        "StandardLookupValue": "PoultryCoop",
        "LegacyOdataValue": "Poultry Coop"
    },
    {
        "LookupKey": "2cecb621702662f2e551d83466a344909c2b275c49500381dc3a4cd451135ff1",
        "LookupName": "OtherStructures",
        "LookupValue": "Residence",
        "StandardLookupValue": "Residence",
        "LegacyOdataValue": "Residence"
    },
    {
        "LookupKey": "6f2049fdbee16abc8be2ffcf8575d4fbeabb2dd5d6b857d26938e6bddfbc2d70",
        "LookupName": "OtherStructures",
        "LookupValue": "RvBoatStorage",
        "StandardLookupValue": "RvBoatStorage",
        "LegacyOdataValue": "RV/Boat Storage"
    },
    {
        "LookupKey": "c453dd26eead1fed4ebdca81ab3adc8453e0c4bd54877846534362b2cc720c05",
        "LookupName": "OtherStructures",
        "LookupValue": "SecondGarage",
        "StandardLookupValue": "SecondGarage",
        "LegacyOdataValue": "Second Garage"
    },
    {
        "LookupKey": "ac87883f576347a875519c6c18a358b41490435b55b4011bcc911e4bace9c7ea",
        "LookupName": "OtherStructures",
        "LookupValue": "SecondResidence",
        "StandardLookupValue": "SecondResidence",
        "LegacyOdataValue": "Second Residence"
    },
    {
        "LookupKey": "a110c7a1f88cf7db20067bc8e0c8e0a2cbc3fe410bbb29ac702d24efc860bacc",
        "LookupName": "OtherStructures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "2b554295a272829fad702c6be34acc97a53b11d81cf0fd23bf52b570348d4cd3",
        "LookupName": "OtherStructures",
        "LookupValue": "Sheds",
        "StandardLookupValue": "Sheds",
        "LegacyOdataValue": "Sheds"
    },
    {
        "LookupKey": "27f313cb52f6cc3c23d1bb0f262707d81c947d8daa6cfb23b1856332255e6dc9",
        "LookupName": "OtherStructures",
        "LookupValue": "Stables",
        "StandardLookupValue": "Stables",
        "LegacyOdataValue": "Stables"
    },
    {
        "LookupKey": "8dbb1edeb6b2fc3b0a934b562763bc74822662f3f49dbe8795185a62d7679b96",
        "LookupName": "OtherStructures",
        "LookupValue": "Storage",
        "StandardLookupValue": "Storage",
        "LegacyOdataValue": "Storage"
    },
    {
        "LookupKey": "0459bedbd17adf887b57e8c4e544bacab2a4cb718204e1182dd9f4df5fe5cab5",
        "LookupName": "OtherStructures",
        "LookupValue": "TennisCourts",
        "StandardLookupValue": "TennisCourts",
        "LegacyOdataValue": "Tennis Courts"
    },
    {
        "LookupKey": "72de3ab87aa7813632089a6cc5ea3e696aa8038e6866628c5bcc37dd6c9e9c27",
        "LookupName": "OtherStructures",
        "LookupValue": "Workshop",
        "StandardLookupValue": "Workshop",
        "LegacyOdataValue": "Workshop"
    },
    {
        "LookupKey": "7da81230090185c2bd55df9da2c109f05d3d73f12af2486030e4b75c475e7a13",
        "LookupName": "OwnerPays",
        "LookupValue": "AllUtilities",
        "StandardLookupValue": "AllUtilities",
        "LegacyOdataValue": "All Utilities"
    },
    {
        "LookupKey": "4c88edbe94bc25251e7a2bccfc5dbc61d210b7e36bc2dcec2f9b0860a095c88f",
        "LookupName": "OwnerPays",
        "LookupValue": "AssociationFees",
        "StandardLookupValue": "AssociationFees",
        "LegacyOdataValue": "Association Fees"
    },
    {
        "LookupKey": "2807607b2152e9c070ecc015ccec89692505d3f0db288e97bdfae20f0484aba2",
        "LookupName": "OwnerPays",
        "LookupValue": "CableTv",
        "StandardLookupValue": "CableTv",
        "LegacyOdataValue": "Cable TV"
    },
    {
        "LookupKey": "631586370406d5a40524b15f75b30e1dac4462a7f3297a95b54b8c6c74504c8a",
        "LookupName": "OwnerPays",
        "LookupValue": "CommonAreaMaintenance",
        "StandardLookupValue": "CommonAreaMaintenance",
        "LegacyOdataValue": "Common Area Maintenance"
    },
    {
        "LookupKey": "2ed1b6c4bc68fdd892b0876bd0897f03965f92cb8f1f40702e870afc8405a12a",
        "LookupName": "OwnerPays",
        "LookupValue": "Electricity",
        "StandardLookupValue": "Electricity",
        "LegacyOdataValue": "Electricity"
    },
    {
        "LookupKey": "f1ff0839ed1961a4dab672a6876107c6712e387f9c1964aa0d5d46b2bf6bd6d6",
        "LookupName": "OwnerPays",
        "LookupValue": "ExteriorMaintenance",
        "StandardLookupValue": "ExteriorMaintenance",
        "LegacyOdataValue": "Exterior Maintenance"
    },
    {
        "LookupKey": "540ab63513d57d31a5214756952709f1796613c74bbf33f9fe38c20b86202d2b",
        "LookupName": "OwnerPays",
        "LookupValue": "Gas",
        "StandardLookupValue": "Gas",
        "LegacyOdataValue": "Gas"
    },
    {
        "LookupKey": "2a54fe9248324f630c664362428d59a9721bc6af3b017049083af3ac1d29e735",
        "LookupName": "OwnerPays",
        "LookupValue": "GroundsCare",
        "StandardLookupValue": "GroundsCare",
        "LegacyOdataValue": "Grounds Care"
    },
    {
        "LookupKey": "df70f0e5e5c2bbd74c0116daf67058d82a524d8ef2e3aebde68391f388877673",
        "LookupName": "OwnerPays",
        "LookupValue": "HotWater",
        "StandardLookupValue": "HotWater",
        "LegacyOdataValue": "Hot Water"
    },
    {
        "LookupKey": "d7e43ccca6ed7b1f648cd7e6504a09b6c526a2a06490ff7e1c70d032c478fc74",
        "LookupName": "OwnerPays",
        "LookupValue": "HvacMaintenance",
        "StandardLookupValue": "HvacMaintenance",
        "LegacyOdataValue": "HVAC Maintenance"
    },
    {
        "LookupKey": "2fa6f06295f5672c8480f74f0f18aa58cfc39b15ee2c5806b6ac08d278a056d2",
        "LookupName": "OwnerPays",
        "LookupValue": "Insurance",
        "StandardLookupValue": "Insurance",
        "LegacyOdataValue": "Insurance"
    },
    {
        "LookupKey": "2394e3327205a66f07dbc53a1232a6ad2e822c4a9696213844e637b908d49417",
        "LookupName": "OwnerPays",
        "LookupValue": "JanitorialService",
        "StandardLookupValue": "JanitorialService",
        "LegacyOdataValue": "Janitorial Service"
    },
    {
        "LookupKey": "b3fe480b53346ceedb6f46d359b884cf2eeff2cc4acdeb082395f1ccce8479b1",
        "LookupName": "OwnerPays",
        "LookupValue": "Management",
        "StandardLookupValue": "Management",
        "LegacyOdataValue": "Management"
    },
    {
        "LookupKey": "e2e39bf8dfd8eb0d82b4a8723c3e9e65d5942f731c46776e47644d18dcd13af4",
        "LookupName": "OwnerPays",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "3d3d4b3a1a2ba3db0ec41c8cf3840d97c42139950334f2aa232868bbcc371dd3",
        "LookupName": "OwnerPays",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "9b30cba0c41bd7b287a7258648b64939221d3b14304bd013ec1f5455bc5ff705",
        "LookupName": "OwnerPays",
        "LookupValue": "OtherTax",
        "StandardLookupValue": "OtherTax",
        "LegacyOdataValue": "Other Tax"
    },
    {
        "LookupKey": "e2d5c72886f6f671c7616bad5bc141c2cf9e9d3ff42859dde6067f3b69b56459",
        "LookupName": "OwnerPays",
        "LookupValue": "ParkingFee",
        "StandardLookupValue": "ParkingFee",
        "LegacyOdataValue": "Parking Fee"
    },
    {
        "LookupKey": "47f36df9413743fad260d94b6938150f7f60ab0764b1d919921d2fbc3e8a9c68",
        "LookupName": "OwnerPays",
        "LookupValue": "PestControl",
        "StandardLookupValue": "PestControl",
        "LegacyOdataValue": "Pest Control"
    },
    {
        "LookupKey": "e5b58ef64aca489e3013b25cfa86b3cf0b4ad53634bff4515f8bad9e82f6e146",
        "LookupName": "OwnerPays",
        "LookupValue": "PoolMaintenance",
        "StandardLookupValue": "PoolMaintenance",
        "LegacyOdataValue": "Pool Maintenance"
    },
    {
        "LookupKey": "8a0d40b81a75b03bea26084efa67aedd0a0f8f4873f7c438efa154c715bf4c95",
        "LookupName": "OwnerPays",
        "LookupValue": "Repairs",
        "StandardLookupValue": "Repairs",
        "LegacyOdataValue": "Repairs"
    },
    {
        "LookupKey": "d898a04d531eb786614fcaa70e751be95e7c9ba9cbe704bbbc7e87a64b1de1db",
        "LookupName": "OwnerPays",
        "LookupValue": "RoofMaintenance",
        "StandardLookupValue": "RoofMaintenance",
        "LegacyOdataValue": "Roof Maintenance"
    },
    {
        "LookupKey": "90cf3c770bc5da430c9bafeb101757148e79ff4975683e236542c670f7d6a1dd",
        "LookupName": "OwnerPays",
        "LookupValue": "Security",
        "StandardLookupValue": "Security",
        "LegacyOdataValue": "Security"
    },
    {
        "LookupKey": "34bb8da0d2be2799f8b3c3d159d1ff2873fc923b4f9052b3e6e699023fe761e0",
        "LookupName": "OwnerPays",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "938103e2372e2d417af04b4a1aac2edb7a4c45347952a78e95b0c5a213fd2a15",
        "LookupName": "OwnerPays",
        "LookupValue": "Sewer",
        "StandardLookupValue": "Sewer",
        "LegacyOdataValue": "Sewer"
    },
    {
        "LookupKey": "e9415aff79d0fbe9f04f735173e71ff3807e01c7d99ad09b0dfac7d4ada9fac3",
        "LookupName": "OwnerPays",
        "LookupValue": "SnowRemoval",
        "StandardLookupValue": "SnowRemoval",
        "LegacyOdataValue": "Snow Removal"
    },
    {
        "LookupKey": "30291af2e67c724e7657dfbd672cd1ccd0fb33638cbcd06146aa6719653f7f27",
        "LookupName": "OwnerPays",
        "LookupValue": "Taxes",
        "StandardLookupValue": "Taxes",
        "LegacyOdataValue": "Taxes"
    },
    {
        "LookupKey": "5cc3e8305be59e6acb94dde6971b195e10708c8d60cc3180f3f845dba3cea95d",
        "LookupName": "OwnerPays",
        "LookupValue": "Telephone",
        "StandardLookupValue": "Telephone",
        "LegacyOdataValue": "Telephone"
    },
    {
        "LookupKey": "5b39d65a7810cbd7d5f7164567a5bfb8bceace65e835c4a630ea2bf7eb1be8cc",
        "LookupName": "OwnerPays",
        "LookupValue": "TrashCollection",
        "StandardLookupValue": "TrashCollection",
        "LegacyOdataValue": "Trash Collection"
    },
    {
        "LookupKey": "95059e0d0a9d506ff847daa6d525327255b668c7729cd92f90a482039335d3bf",
        "LookupName": "OwnerPays",
        "LookupValue": "Water",
        "StandardLookupValue": "Water",
        "LegacyOdataValue": "Water"
    },
    {
        "LookupKey": "469010472e168982811c50239b72be738fef4395deb244210b3306ad46b485ed",
        "LookupName": "OwnershipType",
        "LookupValue": "Corporation",
        "StandardLookupValue": "Corporation",
        "LegacyOdataValue": "Corporation"
    },
    {
        "LookupKey": "d3de98c306bdd57a00f0989cdb7580e4320e4d1ce9693a005dc3dbf7a27dc80f",
        "LookupName": "OwnershipType",
        "LookupValue": "Llc",
        "StandardLookupValue": "Llc",
        "LegacyOdataValue": "LLC"
    },
    {
        "LookupKey": "0aeddf5e197302e833a8bf97f01a01fbc8ecbdb5c746e6f0d24d135fff5f04b8",
        "LookupName": "OwnershipType",
        "LookupValue": "Partnership",
        "StandardLookupValue": "Partnership",
        "LegacyOdataValue": "Partnership"
    },
    {
        "LookupKey": "f8fac8010080c07df399e2fa450a31c6dd033740fe4d4f7497e974b023d7515f",
        "LookupName": "OwnershipType",
        "LookupValue": "SoleProprietor",
        "StandardLookupValue": "SoleProprietor",
        "LegacyOdataValue": "Sole Proprietor"
    },
    {
        "LookupKey": "806ca2dc179c623bd4032537381583a7abc8dd73ae4459bd72c90f9f77ea13c7",
        "LookupName": "ParkingFeatures",
        "LookupValue": "AdditionalParking",
        "StandardLookupValue": "AdditionalParking",
        "LegacyOdataValue": "Additional Parking"
    },
    {
        "LookupKey": "80fbc1f9960084e5c5b336c65b50672b3b5a7f02e46257b6071b1ef99dd68baf",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Aggregate",
        "StandardLookupValue": "Aggregate",
        "LegacyOdataValue": "Aggregate"
    },
    {
        "LookupKey": "99df0c05868648bd2fa1f68aee5afbbf0bf9d04ba52c9c8c49d06f372ddd4a6e",
        "LookupName": "ParkingFeatures",
        "LookupValue": "AlleyAccess",
        "StandardLookupValue": "AlleyAccess",
        "LegacyOdataValue": "Alley Access"
    },
    {
        "LookupKey": "ce8d4f217a8e57c539306a027210cba3ded66030e721aca9f3345dd5fdf9b251",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Asphalt",
        "StandardLookupValue": "Asphalt",
        "LegacyOdataValue": "Asphalt"
    },
    {
        "LookupKey": "4b354a0cc86726cd455cde00c50abdb213418d29ec7cbd34ef079b067bb75c18",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Assigned",
        "StandardLookupValue": "Assigned",
        "LegacyOdataValue": "Assigned"
    },
    {
        "LookupKey": "3ec70e28c0a85be5a01657d1d687b07546d7a212630ade86f16462aa15ddf5e2",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Attached",
        "StandardLookupValue": "Attached",
        "LegacyOdataValue": "Attached"
    },
    {
        "LookupKey": "4ae44b5e5af36d6520923346b6e6462fee4683f1fa97b3c4f0eacd9ec2034279",
        "LookupName": "ParkingFeatures",
        "LookupValue": "AttachedCarport",
        "StandardLookupValue": "AttachedCarport",
        "LegacyOdataValue": "Attached Carport"
    },
    {
        "LookupKey": "27f6f9b520abeb3f63ea628e180e7c535fc8e8b92720156f2e287662fc400892",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Basement",
        "StandardLookupValue": "Basement",
        "LegacyOdataValue": "Basement"
    },
    {
        "LookupKey": "0333344263fa22004334e7fb9d85fcccb16fdc78287afba20bd1525268f7d84a",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Boat",
        "StandardLookupValue": "Boat",
        "LegacyOdataValue": "Boat"
    },
    {
        "LookupKey": "003a31afec06d12e6faa6b40f662707d0fe534b2ad77ecd7e1ee7d2a37dd3092",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Carport",
        "StandardLookupValue": "Carport",
        "LegacyOdataValue": "Carport"
    },
    {
        "LookupKey": "40abcddb735ca434ba57a8ca724ec580a1d2b89503f1f840358af0cdecdcf424",
        "LookupName": "ParkingFeatures",
        "LookupValue": "CircularDriveway",
        "StandardLookupValue": "CircularDriveway",
        "LegacyOdataValue": "Circular Driveway"
    },
    {
        "LookupKey": "2fefe75db05ca32ca7687a22dac42febfeeb369664d8c8fe324491e0733c189e",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Common",
        "StandardLookupValue": "Common",
        "LegacyOdataValue": "Common"
    },
    {
        "LookupKey": "a54661b15f935da383d3385cea056ec1109bbf23045be25bce69b6666f8788a6",
        "LookupName": "ParkingFeatures",
        "LookupValue": "CommunityStructure",
        "StandardLookupValue": "CommunityStructure",
        "LegacyOdataValue": "Community Structure"
    },
    {
        "LookupKey": "306fdebc1f5ef253a304b81a425ff5cee2f61d1ed0e815bb985481ea88a33374",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Concrete",
        "StandardLookupValue": "Concrete",
        "LegacyOdataValue": "Concrete"
    },
    {
        "LookupKey": "d7b0816edaeac7e8326c9380e47b2f6cb5709bea5c7f3d8c76bb0e4a3ed1fc82",
        "LookupName": "ParkingFeatures",
        "LookupValue": "ConvertedGarage",
        "StandardLookupValue": "ConvertedGarage",
        "LegacyOdataValue": "Converted Garage"
    },
    {
        "LookupKey": "6f9f354dabb055360d988282cc97cfedd610847b85c2a007976575c72db579db",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Covered",
        "StandardLookupValue": "Covered",
        "LegacyOdataValue": "Covered"
    },
    {
        "LookupKey": "5cc8f6d31fb39a40381d298215656cebf370f71c9e0ca95029a50576f315705a",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Deck",
        "StandardLookupValue": "Deck",
        "LegacyOdataValue": "Deck"
    },
    {
        "LookupKey": "d88ca6e51b5e66bb0d4e6211d457d74b2c4e683721952da9d9a9cfda1e73820d",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Deeded",
        "StandardLookupValue": "Deeded",
        "LegacyOdataValue": "Deeded"
    },
    {
        "LookupKey": "c0ef93b432d86dc6fbcd228e195f82c38b23ae08513b184bf17e03a3c577fe57",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Detached",
        "StandardLookupValue": "Detached",
        "LegacyOdataValue": "Detached"
    },
    {
        "LookupKey": "1e4ebed23c6382131e012ba98bc624e5155c14ef3ff453e4cf18640f6f9cc668",
        "LookupName": "ParkingFeatures",
        "LookupValue": "DetachedCarport",
        "StandardLookupValue": "DetachedCarport",
        "LegacyOdataValue": "Detached Carport"
    },
    {
        "LookupKey": "1fbf619b24f42b6f7d9b582192f90a0794b56aed00196e19908f66b645f68214",
        "LookupName": "ParkingFeatures",
        "LookupValue": "DirectAccess",
        "StandardLookupValue": "DirectAccess",
        "LegacyOdataValue": "Direct Access"
    },
    {
        "LookupKey": "08d822b8fe81de1fab85ce55ccd285d7c9a0228a747e38f90e39a2c9bfc2c10a",
        "LookupName": "ParkingFeatures",
        "LookupValue": "DriveThrough",
        "StandardLookupValue": "DriveThrough",
        "LegacyOdataValue": "Drive Through"
    },
    {
        "LookupKey": "f28dec46b57da585a8837d0987d8b6b61d4f51d6711277d408d5e3c6a198598b",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Driveway",
        "StandardLookupValue": "Driveway",
        "LegacyOdataValue": "Driveway"
    },
    {
        "LookupKey": "f1a83947e70b984545b9b41a43052b0f5062d3403216910059497308477ee7e7",
        "LookupName": "ParkingFeatures",
        "LookupValue": "ElectricGate",
        "StandardLookupValue": "ElectricGate",
        "LegacyOdataValue": "Electric Gate"
    },
    {
        "LookupKey": "c4cd38eb74c32473c8eb17f8a693eede190e892762e70a0bd6e023cfaff9259b",
        "LookupName": "ParkingFeatures",
        "LookupValue": "ElectricVehicleChargingStations",
        "StandardLookupValue": "ElectricVehicleChargingStations",
        "LegacyOdataValue": "Electric Vehicle Charging Stations"
    },
    {
        "LookupKey": "a320875c5ed8119e22e18c23547b08e4e1bc00ce7deff9e8004672afc1ec2681",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Enclosed",
        "StandardLookupValue": "Enclosed",
        "LegacyOdataValue": "Enclosed"
    },
    {
        "LookupKey": "f8edb1edc0b7d95fa855c7f1f1ea82cd3e7d0f15dc649118f81c19dcb5515ac6",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Garage",
        "StandardLookupValue": "Garage",
        "LegacyOdataValue": "Garage"
    },
    {
        "LookupKey": "0f53ba42816f4af6775258b32c2a7b399edc1660698fba502ddedc188c4b0480",
        "LookupName": "ParkingFeatures",
        "LookupValue": "GarageDoorOpener",
        "StandardLookupValue": "GarageDoorOpener",
        "LegacyOdataValue": "Garage Door Opener"
    },
    {
        "LookupKey": "8499c3f57ea12e9e06e940650261082f7d418407c755485a50595d8f5ff7c3cf",
        "LookupName": "ParkingFeatures",
        "LookupValue": "GarageFacesFront",
        "StandardLookupValue": "GarageFacesFront",
        "LegacyOdataValue": "Garage Faces Front"
    },
    {
        "LookupKey": "caa3d137fd42523c4deaa66385a91f77d9c54cdf2e7781f868a13fe388391835",
        "LookupName": "ParkingFeatures",
        "LookupValue": "GarageFacesRear",
        "StandardLookupValue": "GarageFacesRear",
        "LegacyOdataValue": "Garage Faces Rear"
    },
    {
        "LookupKey": "7fbfc0abb5acc13b2aeffde70f9b7f13f56152b22015c95982f2605f8728255b",
        "LookupName": "ParkingFeatures",
        "LookupValue": "GarageFacesSide",
        "StandardLookupValue": "GarageFacesSide",
        "LegacyOdataValue": "Garage Faces Side"
    },
    {
        "LookupKey": "a41c01018a935d863cbdd75fb9ecad19c568389bd7653640194701c67d788115",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Gated",
        "StandardLookupValue": "Gated",
        "LegacyOdataValue": "Gated"
    },
    {
        "LookupKey": "d25b5055f60d9849e355afbd5706b046adb0c7445daddafb291043e6c0484888",
        "LookupName": "ParkingFeatures",
        "LookupValue": "GolfCartGarage",
        "StandardLookupValue": "GolfCartGarage",
        "LegacyOdataValue": "Golf Cart Garage"
    },
    {
        "LookupKey": "2a479da2e2e75aa2a619b9a070011df55e5507dca85ace50864255991749b526",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Gravel",
        "StandardLookupValue": "Gravel",
        "LegacyOdataValue": "Gravel"
    },
    {
        "LookupKey": "cc42ccaac5f37cf2bcece4b207a831d295b5b3167db5bbe5a1ad965b4a1397f7",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Guest",
        "StandardLookupValue": "Guest",
        "LegacyOdataValue": "Guest"
    },
    {
        "LookupKey": "1c7e6e0d00c5d35e0e9e43ea5c1860c26bee0bca8cf82e6002e40911c9a8f18a",
        "LookupName": "ParkingFeatures",
        "LookupValue": "HeatedGarage",
        "StandardLookupValue": "HeatedGarage",
        "LegacyOdataValue": "Heated Garage"
    },
    {
        "LookupKey": "278a5ad03396c059b9910aa7c3e3542cd621e6fa7a4bd976dc723686f0f6c8f4",
        "LookupName": "ParkingFeatures",
        "LookupValue": "InsideEntrance",
        "StandardLookupValue": "InsideEntrance",
        "LegacyOdataValue": "Inside Entrance"
    },
    {
        "LookupKey": "bed0956657d2e3c5086a76951cc9e31f98c4efad467c0ed5b8f3019d999687ff",
        "LookupName": "ParkingFeatures",
        "LookupValue": "KitchenLevel",
        "StandardLookupValue": "KitchenLevel",
        "LegacyOdataValue": "Kitchen Level"
    },
    {
        "LookupKey": "5d0e97a4ed72f750f514f42222ee5a8865c3b5525f6ffe4cec69ca57834275fe",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Leased",
        "StandardLookupValue": "Leased",
        "LegacyOdataValue": "Leased"
    },
    {
        "LookupKey": "b74296d85a3ba4cbbf3c35db0bdb63bd02da9db8bd02499987011269846cadbe",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Lighted",
        "StandardLookupValue": "Lighted",
        "LegacyOdataValue": "Lighted"
    },
    {
        "LookupKey": "ebde84d64e60914e7b5f174eb2d06223365ab8b5f0fe6cba059bec5d5633b14a",
        "LookupName": "ParkingFeatures",
        "LookupValue": "NoGarage",
        "StandardLookupValue": "NoGarage",
        "LegacyOdataValue": "No Garage"
    },
    {
        "LookupKey": "214913bb4b008d05915c8a7a9d54e7cffd5011c16da11dc6786cf5334e139cab",
        "LookupName": "ParkingFeatures",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "d185976353fca0b5fc5b5fedf6c8f9cdb4dc562679334c72b98f6c3df4a415d1",
        "LookupName": "ParkingFeatures",
        "LookupValue": "OffSite",
        "StandardLookupValue": "OffSite",
        "LegacyOdataValue": "Off Site"
    },
    {
        "LookupKey": "cd15123bb2ce43ef35ed992faf45a3dca86f3afffff1e448f7f12e3f525a12f9",
        "LookupName": "ParkingFeatures",
        "LookupValue": "OffStreet",
        "StandardLookupValue": "OffStreet",
        "LegacyOdataValue": "Off Street"
    },
    {
        "LookupKey": "a5c2df1031b96c34e03b8bf8ac1a3f02ead3d7f6e024cc0488945cc122298a00",
        "LookupName": "ParkingFeatures",
        "LookupValue": "OnSite",
        "StandardLookupValue": "OnSite",
        "LegacyOdataValue": "On Site"
    },
    {
        "LookupKey": "e28d873460eae4f72887921ccbe47a1e011385e45f7ed454f4f13965ff6952c1",
        "LookupName": "ParkingFeatures",
        "LookupValue": "OnStreet",
        "StandardLookupValue": "OnStreet",
        "LegacyOdataValue": "On Street"
    },
    {
        "LookupKey": "ddd4e72f6855bb9fa71f4034bdc25a37600b6ad3cef511d1e53ed851c53a2394",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Open",
        "StandardLookupValue": "Open",
        "LegacyOdataValue": "Open"
    },
    {
        "LookupKey": "898c1f41e12a8930c76defdb1c823b403433dc2b6cae7d896abe828539fe8395",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "92fcc05df5402155e0726646b7fdc1bc98d4d44dadba114f847199dc7e9ca3d1",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Outside",
        "StandardLookupValue": "Outside",
        "LegacyOdataValue": "Outside"
    },
    {
        "LookupKey": "0160583817383af5768e3c90388a6aa5f4124595365d0b1de71518fe11ffa3fb",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Oversized",
        "StandardLookupValue": "Oversized",
        "LegacyOdataValue": "Oversized"
    },
    {
        "LookupKey": "c749ce1c3e5bc8e97de86d6418f705245c648ac4cecfeb35b0224221fadb73dd",
        "LookupName": "ParkingFeatures",
        "LookupValue": "ParkingLot",
        "StandardLookupValue": "ParkingLot",
        "LegacyOdataValue": "Parking Lot"
    },
    {
        "LookupKey": "13e01e98af800aceb29b024f2e8c308a63b346abf02f901288b04acd132292af",
        "LookupName": "ParkingFeatures",
        "LookupValue": "ParkingPad",
        "StandardLookupValue": "ParkingPad",
        "LegacyOdataValue": "Parking Pad"
    },
    {
        "LookupKey": "2c104f8d7f2c1d947f64fdda3ed94a289d9a2c44cffa62afc4851fef563e1158",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Paved",
        "StandardLookupValue": "Paved",
        "LegacyOdataValue": "Paved"
    },
    {
        "LookupKey": "816dc117396f62aad269f01727fb2dc5dc784aa883e146685c7acab70e1b84be",
        "LookupName": "ParkingFeatures",
        "LookupValue": "PaverBlock",
        "StandardLookupValue": "PaverBlock",
        "LegacyOdataValue": "Paver Block"
    },
    {
        "LookupKey": "f61d4d20700c2b6c1c0098cb884af199abcdbbefec2e087f1be2c8bd69671e98",
        "LookupName": "ParkingFeatures",
        "LookupValue": "PermitRequired",
        "StandardLookupValue": "PermitRequired",
        "LegacyOdataValue": "Permit Required"
    },
    {
        "LookupKey": "5a9716375e03f34bae9e685637fd88acfea43f4be246c05942eeae5574ab22a5",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Private",
        "StandardLookupValue": "Private",
        "LegacyOdataValue": "Private"
    },
    {
        "LookupKey": "d0a36b1ed813d95ca4f63eb5951e8ca9b1e844ec0e358d34d266c652c2e48b87",
        "LookupName": "ParkingFeatures",
        "LookupValue": "RvAccessParking",
        "StandardLookupValue": "RvAccessParking",
        "LegacyOdataValue": "RV Access/Parking"
    },
    {
        "LookupKey": "5b1154e053204caf812c1aaab86185a33181e2a40bf7a514a6b740b0c8b958ed",
        "LookupName": "ParkingFeatures",
        "LookupValue": "RvCarport",
        "StandardLookupValue": "RvCarport",
        "LegacyOdataValue": "RV Carport"
    },
    {
        "LookupKey": "66a2dd719b0172285f742c332a0a96f240007675a7ecf20ba70053b9a965d4bd",
        "LookupName": "ParkingFeatures",
        "LookupValue": "RvGarage",
        "StandardLookupValue": "RvGarage",
        "LegacyOdataValue": "RV Garage"
    },
    {
        "LookupKey": "a0f463b38111111b08022dd41aa4bfa89a7aed7e7368fb06a0fffcd842075a06",
        "LookupName": "ParkingFeatures",
        "LookupValue": "RvGated",
        "StandardLookupValue": "RvGated",
        "LegacyOdataValue": "RV Gated"
    },
    {
        "LookupKey": "29e6e28551b25c608a782bf83aa308ae4f3e12fbcfb15c89221cd116af2c400d",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Secured",
        "StandardLookupValue": "Secured",
        "LegacyOdataValue": "Secured"
    },
    {
        "LookupKey": "f4882926b332362c7fc6d104189775a1eb63811b69794fed93130779d8572019",
        "LookupName": "ParkingFeatures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "bb2c489b4c4856fab40131b1d9a8e6126c6d3b0e2928881aae97ba7d05e81b63",
        "LookupName": "ParkingFeatures",
        "LookupValue": "SharedDriveway",
        "StandardLookupValue": "SharedDriveway",
        "LegacyOdataValue": "Shared Driveway"
    },
    {
        "LookupKey": "2d79df3d988bfc667498ffead7f1ab8549066182f29adbd0459148e485039025",
        "LookupName": "ParkingFeatures",
        "LookupValue": "SideBySide",
        "StandardLookupValue": "SideBySide",
        "LegacyOdataValue": "Side By Side"
    },
    {
        "LookupKey": "96ab8ec06511d5447b7f88cf0751e2645917ccc7c52561e56b2c4211c9a86c4d",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Storage",
        "StandardLookupValue": "Storage",
        "LegacyOdataValue": "Storage"
    },
    {
        "LookupKey": "22e16679c00b17da71f0ded99e970155f3b651c911004ef72c2ba5381e213206",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Tandem",
        "StandardLookupValue": "Tandem",
        "LegacyOdataValue": "Tandem"
    },
    {
        "LookupKey": "d0b208aa7ce6bf1460a84b378cbae9635bb4d6fbf0b641f24a8cd688ad9cb02f",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Unassigned",
        "StandardLookupValue": "Unassigned",
        "LegacyOdataValue": "Unassigned"
    },
    {
        "LookupKey": "2bceb0afe25433605ce44e3bfa0d0691ecc9fcca85fe60e93b1635543b738e4a",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Underground",
        "StandardLookupValue": "Underground",
        "LegacyOdataValue": "Underground"
    },
    {
        "LookupKey": "c19f6e80ed6a63138befb97e0e68eb76ee0b253a5df11725e05fb0012f7c1a78",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Unpaved",
        "StandardLookupValue": "Unpaved",
        "LegacyOdataValue": "Unpaved"
    },
    {
        "LookupKey": "747c6ad8824830413689841e020d5e763c181d5c1e4456ae25d4551c4962b5c8",
        "LookupName": "ParkingFeatures",
        "LookupValue": "Valet",
        "StandardLookupValue": "Valet",
        "LegacyOdataValue": "Valet"
    },
    {
        "LookupKey": "a2f63a7e59101adccd61cd2297b892688db5fda9879eb65f4b0b70885d9a79c8",
        "LookupName": "ParkingFeatures",
        "LookupValue": "VariesByUnit",
        "StandardLookupValue": "VariesByUnit",
        "LegacyOdataValue": "Varies by Unit"
    },
    {
        "LookupKey": "a86ae5352fb05355041a2e4ea19a3c3a199cb295d8e07ccc8b345b6995b9e1ed",
        "LookupName": "ParkingFeatures",
        "LookupValue": "WorkshopInGarage",
        "StandardLookupValue": "WorkshopInGarage",
        "LegacyOdataValue": "Workshop in Garage"
    },
    {
        "LookupKey": "406e9f45e201a9bd13131150c81d4156522610640c9bb7a57b8cf969c9fa864f",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "Awnings",
        "StandardLookupValue": "Awnings",
        "LegacyOdataValue": "Awnings"
    },
    {
        "LookupKey": "e14db0e5f30596d49031cd0962047ee8f689a09acd50bf4bc386d170e737c317",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "Covered",
        "StandardLookupValue": "Covered",
        "LegacyOdataValue": "Covered"
    },
    {
        "LookupKey": "94208901f3c80d01a3a1520a6bafd1de65ab3f4417f6fdbaf236e98610afd39c",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "Deck",
        "StandardLookupValue": "Deck",
        "LegacyOdataValue": "Deck"
    },
    {
        "LookupKey": "a6455746dfac1a52e44ed59a677b33e126d29f2becb6332d93855adeb51f1bd5",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "Enclosed",
        "StandardLookupValue": "Enclosed",
        "LegacyOdataValue": "Enclosed"
    },
    {
        "LookupKey": "ef161f82c040f60ef1f2fde159c450832837e5f51b062705b19f70e09e2431e1",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "FrontPorch",
        "StandardLookupValue": "FrontPorch",
        "LegacyOdataValue": "Front Porch"
    },
    {
        "LookupKey": "7cb58924d2e91671f3f9cbb045a7a0f300ff3cc1e4d24b1e14ed872ae2ceb5d4",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "GlassEnclosed",
        "StandardLookupValue": "GlassEnclosed",
        "LegacyOdataValue": "Glass Enclosed"
    },
    {
        "LookupKey": "19c4ce99146fd2ba2b6759f85c835d4184491654142380757445218b6b43b5c7",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "13d0141b69f2f478f5942a0f1dfb6f01294f7c5602e1d74cddba5bc2921c238a",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "dfd2ec9dbae7358e424c03cb9703d7c8aeeaa1009723c3d219fe27adc2c442ae",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "Patio",
        "StandardLookupValue": "Patio",
        "LegacyOdataValue": "Patio"
    },
    {
        "LookupKey": "9d1b426299a01565f3dd2607b0abd33f99a47875999699091bccf2659b70e95c",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "Porch",
        "StandardLookupValue": "Porch",
        "LegacyOdataValue": "Porch"
    },
    {
        "LookupKey": "c9fd2f01de6d66ccc484339d9d47689df707623196b53273e9b99db74d5de491",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "RearPorch",
        "StandardLookupValue": "RearPorch",
        "LegacyOdataValue": "Rear Porch"
    },
    {
        "LookupKey": "8e417045236c8d2998430af4d4b8ac58cc45e038e5dd2d7d9481e899d8c8de24",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "Screened",
        "StandardLookupValue": "Screened",
        "LegacyOdataValue": "Screened"
    },
    {
        "LookupKey": "51a34e50ae746881fb71152b70ad02cc32d04a5d6f4ec5acb80ece6293179bec",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "26eb8e660cd43900563150e82273a4b099c90f6670386819e99803a9e4c73db9",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "SidePorch",
        "StandardLookupValue": "SidePorch",
        "LegacyOdataValue": "Side Porch"
    },
    {
        "LookupKey": "950305d2163be45d0123e6e9d57354012d77fe12dc92f8cd65c1feec7ae8b0aa",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "Terrace",
        "StandardLookupValue": "Terrace",
        "LegacyOdataValue": "Terrace"
    },
    {
        "LookupKey": "966a2864c9b5686a9fe9a893c61a905da5a71bf49970fb7cf84384ec4a1323e9",
        "LookupName": "PatioAndPorchFeatures",
        "LookupValue": "WrapAround",
        "StandardLookupValue": "WrapAround",
        "LegacyOdataValue": "Wrap Around"
    },
    {
        "LookupKey": "80e35aed54c1c36b4634797cfbfdbbbbd18ae998381c5de48fc1192c4d4e17b0",
        "LookupName": "PetsAllowed",
        "LookupValue": "BreedRestrictions",
        "StandardLookupValue": "BreedRestrictions",
        "LegacyOdataValue": "Breed Restrictions"
    },
    {
        "LookupKey": "973bae51e5d3b74c3d9232a0f99b7ee34ca49d3e62f281928124edbadaf7e735",
        "LookupName": "PetsAllowed",
        "LookupValue": "Call",
        "StandardLookupValue": "Call",
        "LegacyOdataValue": "Call"
    },
    {
        "LookupKey": "e62c38d34da4b40829c8c4347415e6841f097000331e1735a30091222e418bf3",
        "LookupName": "PetsAllowed",
        "LookupValue": "CatsOk",
        "StandardLookupValue": "CatsOk",
        "LegacyOdataValue": "Cats OK"
    },
    {
        "LookupKey": "2bf6dd679cec4d52a563e6a8f940c9a4f145428ecdef3d4d2ff179da0a526c06",
        "LookupName": "PetsAllowed",
        "LookupValue": "DogsOk",
        "StandardLookupValue": "DogsOk",
        "LegacyOdataValue": "Dogs OK"
    },
    {
        "LookupKey": "8362825f2b072f079c7a83dede59d156d907a47223bdd4c33f68c7c7c78ca649",
        "LookupName": "PetsAllowed",
        "LookupValue": "No",
        "StandardLookupValue": "No",
        "LegacyOdataValue": "No"
    },
    {
        "LookupKey": "74d51b6e67c74beacea16525aa3047e1673ba56af86bc2282fef35a418b1efa8",
        "LookupName": "PetsAllowed",
        "LookupValue": "NumberLimit",
        "StandardLookupValue": "NumberLimit",
        "LegacyOdataValue": "Number Limit"
    },
    {
        "LookupKey": "14c17b1805986b144020b7396f729565923a0c98595f49fa751c4f797c4bdba4",
        "LookupName": "PetsAllowed",
        "LookupValue": "SizeLimit",
        "StandardLookupValue": "SizeLimit",
        "LegacyOdataValue": "Size Limit"
    },
    {
        "LookupKey": "972321c6ed4d7d25c6e1aefd34b3d6fbd81f80097d47b79ed95b71689d32597a",
        "LookupName": "PetsAllowed",
        "LookupValue": "Yes",
        "StandardLookupValue": "Yes",
        "LegacyOdataValue": "Yes"
    },
    {
        "LookupKey": "e66713a1006409673dcc2c139a3f9113a4233923d7c72f4c320e0b49d26a7673",
        "LookupName": "PoolFeatures",
        "LookupValue": "AboveGround",
        "StandardLookupValue": "AboveGround",
        "LegacyOdataValue": "Above Ground"
    },
    {
        "LookupKey": "2d33a9f29e9a0a0b3d48bdb5c4396bd4a546847897f5dbb58ff7e00018f4e84f",
        "LookupName": "PoolFeatures",
        "LookupValue": "Association",
        "StandardLookupValue": "Association",
        "LegacyOdataValue": "Association"
    },
    {
        "LookupKey": "ffaf56a5d9be8779b2773bd651ccfa7d1ad598b7a0f232f837078ab6e33304ce",
        "LookupName": "PoolFeatures",
        "LookupValue": "BlackBottom",
        "StandardLookupValue": "BlackBottom",
        "LegacyOdataValue": "Black Bottom"
    },
    {
        "LookupKey": "0959d39321b454dc645562bc6785d824a7bc5dc541b1d41a802d99b3bc47eb62",
        "LookupName": "PoolFeatures",
        "LookupValue": "Cabana",
        "StandardLookupValue": "Cabana",
        "LegacyOdataValue": "Cabana"
    },
    {
        "LookupKey": "4a7a5268ae78cd955961c170bb2edb0634d1ce65d274102b46f3c417b8cd7aa0",
        "LookupName": "PoolFeatures",
        "LookupValue": "Community",
        "StandardLookupValue": "Community",
        "LegacyOdataValue": "Community"
    },
    {
        "LookupKey": "35e2546c617cefeb5d393327130c5bbc3905c7ffe88e9ccb8ef17e7548289d95",
        "LookupName": "PoolFeatures",
        "LookupValue": "DivingBoard",
        "StandardLookupValue": "DivingBoard",
        "LegacyOdataValue": "Diving Board"
    },
    {
        "LookupKey": "327744208db18b75dceac4c2f134a05056fbc1c2881714943061041bf19af554",
        "LookupName": "PoolFeatures",
        "LookupValue": "ElectricHeat",
        "StandardLookupValue": "ElectricHeat",
        "LegacyOdataValue": "Electric Heat"
    },
    {
        "LookupKey": "bb6a2a607bbd821154871683c39d9e70312871bffe41f7bf8134930dd902f6f7",
        "LookupName": "PoolFeatures",
        "LookupValue": "EnergyStarQualifiedPoolPump",
        "StandardLookupValue": "EnergyStarQualifiedPoolPump",
        "LegacyOdataValue": "ENERGY STAR Qualified pool pump"
    },
    {
        "LookupKey": "e4b455f4540c362a4f55c81eec9c074a2149d37933471506ca2762b8ef89e3d6",
        "LookupName": "PoolFeatures",
        "LookupValue": "Fenced",
        "StandardLookupValue": "Fenced",
        "LegacyOdataValue": "Fenced"
    },
    {
        "LookupKey": "dbc5217f8c68e971605865819adcc071a895d0b8ef84e95ababdb057f00cef96",
        "LookupName": "PoolFeatures",
        "LookupValue": "Fiberglass",
        "StandardLookupValue": "Fiberglass",
        "LegacyOdataValue": "Fiberglass"
    },
    {
        "LookupKey": "dc20934929b795324db6585df435165f6150a4d02ecfdce1af24537146469cd2",
        "LookupName": "PoolFeatures",
        "LookupValue": "Filtered",
        "StandardLookupValue": "Filtered",
        "LegacyOdataValue": "Filtered"
    },
    {
        "LookupKey": "e6ce4d5997e3f05a088ac91c135cff098ce79ea6c550f0744a638d0c504c330a",
        "LookupName": "PoolFeatures",
        "LookupValue": "GasHeat",
        "StandardLookupValue": "GasHeat",
        "LegacyOdataValue": "Gas Heat"
    },
    {
        "LookupKey": "512e9e02c5234f39ab2e6c9d8963da6686a4f95c47f81ed97979cb5ca19864c3",
        "LookupName": "PoolFeatures",
        "LookupValue": "Gunite",
        "StandardLookupValue": "Gunite",
        "LegacyOdataValue": "Gunite"
    },
    {
        "LookupKey": "e7e37656559b2915f4751b489100da03aa9d6a2a48d30fc398887d982c5d35cc",
        "LookupName": "PoolFeatures",
        "LookupValue": "Heated",
        "StandardLookupValue": "Heated",
        "LegacyOdataValue": "Heated"
    },
    {
        "LookupKey": "adca699132ef40ac9c0d27d88e82fbea2690dd576611f03716c821836eed23eb",
        "LookupName": "PoolFeatures",
        "LookupValue": "Indoor",
        "StandardLookupValue": "Indoor",
        "LegacyOdataValue": "Indoor"
    },
    {
        "LookupKey": "84788279169789bfc6acdfa749fcbbc5dcb974a16b8be8bb0dc3489fc8c82fa6",
        "LookupName": "PoolFeatures",
        "LookupValue": "Infinity",
        "StandardLookupValue": "Infinity",
        "LegacyOdataValue": "Infinity"
    },
    {
        "LookupKey": "ad44a9831422c63b6151b26784dbe78cbc8866150c8d57fdd1fde1362ed442ec",
        "LookupName": "PoolFeatures",
        "LookupValue": "InGround",
        "StandardLookupValue": "InGround",
        "LegacyOdataValue": "In Ground"
    },
    {
        "LookupKey": "e316392f6ad235eb393e5d4df349d2715cf7c891cbfdc3d594132c80373b13aa",
        "LookupName": "PoolFeatures",
        "LookupValue": "Lap",
        "StandardLookupValue": "Lap",
        "LegacyOdataValue": "Lap"
    },
    {
        "LookupKey": "c2f458de1bf34da17c7bb52839c3f520eb995544823d345cf295413c0c59c2fc",
        "LookupName": "PoolFeatures",
        "LookupValue": "Liner",
        "StandardLookupValue": "Liner",
        "LegacyOdataValue": "Liner"
    },
    {
        "LookupKey": "6cfaafd7d851c3493a8637e77c914ba729be64ccd6ad9711233e42e881724a88",
        "LookupName": "PoolFeatures",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "de9b26eb2125daaea78244425526d389028e1ca3c5a2f9467d8b3e905708a8c3",
        "LookupName": "PoolFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "dec0b2287b84fa75e5a98149c1a5fd531863a91e2ec99fb83091973c00fdfe4e",
        "LookupName": "PoolFeatures",
        "LookupValue": "OutdoorPool",
        "StandardLookupValue": "OutdoorPool",
        "LegacyOdataValue": "Outdoor Pool"
    },
    {
        "LookupKey": "59b9f7d77d5f882ca3b9d02c55080807e4664ebf242abea10cfe54521555c932",
        "LookupName": "PoolFeatures",
        "LookupValue": "PoolCover",
        "StandardLookupValue": "PoolCover",
        "LegacyOdataValue": "Pool Cover"
    },
    {
        "LookupKey": "da6d2ed5442d620157e9f35e7ab733423ab3b787b214347d4f4fdd3352bce576",
        "LookupName": "PoolFeatures",
        "LookupValue": "PoolSpaCombo",
        "StandardLookupValue": "PoolSpaCombo",
        "LegacyOdataValue": "Pool/Spa Combo"
    },
    {
        "LookupKey": "b7e313373cd21321198258121b98a66e643364ea958f8214d51dca50cc999e23",
        "LookupName": "PoolFeatures",
        "LookupValue": "PoolSweep",
        "StandardLookupValue": "PoolSweep",
        "LegacyOdataValue": "Pool Sweep"
    },
    {
        "LookupKey": "3259586eca392dcb6351c70fee049d86b9fe40fa619a582513e9e0fef367c867",
        "LookupName": "PoolFeatures",
        "LookupValue": "Private",
        "StandardLookupValue": "Private",
        "LegacyOdataValue": "Private"
    },
    {
        "LookupKey": "54d3fcbf29fc877df27abdfd37d0e81922226ad252dab69260fe2d9653b20ded",
        "LookupName": "PoolFeatures",
        "LookupValue": "SaltWater",
        "StandardLookupValue": "SaltWater",
        "LegacyOdataValue": "Salt Water"
    },
    {
        "LookupKey": "f0dcc5bcf5f2eaf6bccb3ad62f47a6c981cb56adce731ece9864f9df88ada0f1",
        "LookupName": "PoolFeatures",
        "LookupValue": "ScreenEnclosure",
        "StandardLookupValue": "ScreenEnclosure",
        "LegacyOdataValue": "Screen Enclosure"
    },
    {
        "LookupKey": "2827d1d82480516350e9dc5e00bf4cfe61c7a62c97b2a3cac9de0555cd6fce47",
        "LookupName": "PoolFeatures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "4dafb332002dfb8cd019bd041c608e9ba371690a06f77c90d9dafc8dd569f739",
        "LookupName": "PoolFeatures",
        "LookupValue": "SolarCover",
        "StandardLookupValue": "SolarCover",
        "LegacyOdataValue": "Solar Cover"
    },
    {
        "LookupKey": "3e33660ba506736e44edc87640ffe104c1ecf98eb3c78ea38f58379b3170f1d4",
        "LookupName": "PoolFeatures",
        "LookupValue": "SolarHeat",
        "StandardLookupValue": "SolarHeat",
        "LegacyOdataValue": "Solar Heat"
    },
    {
        "LookupKey": "f1a0e39d057b45d3cd2ca88920ac8fe48f115ad44a4a1fc519cfc7ffbe4afb61",
        "LookupName": "PoolFeatures",
        "LookupValue": "Sport",
        "StandardLookupValue": "Sport",
        "LegacyOdataValue": "Sport"
    },
    {
        "LookupKey": "6a3e7e7c02aacbc7abc564aa899d4d4ebe70ca8ea8c1c3601ecf1d911a312bd7",
        "LookupName": "PoolFeatures",
        "LookupValue": "Tile",
        "StandardLookupValue": "Tile",
        "LegacyOdataValue": "Tile"
    },
    {
        "LookupKey": "966e0b93337e0172795f4fd196de759f9fa83f943d1cfd1474399329857d2989",
        "LookupName": "PoolFeatures",
        "LookupValue": "Vinyl",
        "StandardLookupValue": "Vinyl",
        "LegacyOdataValue": "Vinyl"
    },
    {
        "LookupKey": "47dcc4fc26ea9db9c1ff00061872ebfd15d0d2f5199fb89b866dab47071b534c",
        "LookupName": "PoolFeatures",
        "LookupValue": "Waterfall",
        "StandardLookupValue": "Waterfall",
        "LegacyOdataValue": "Waterfall"
    },
    {
        "LookupKey": "0b1d5ae7291efcbe552fd2300758e9fba27d8da8be11be66897b15e259f632ae",
        "LookupName": "Possession",
        "LookupValue": "CloseOfEscrow",
        "StandardLookupValue": "CloseOfEscrow",
        "LegacyOdataValue": "Close Of Escrow"
    },
    {
        "LookupKey": "dbffb6823f3746d4212fda7724307ac6f71cb50ace5d594d06114fd5847f909b",
        "LookupName": "Possession",
        "LookupValue": "ClosePlus1Day",
        "StandardLookupValue": "ClosePlus1Day",
        "LegacyOdataValue": "Close Plus 1 Day"
    },
    {
        "LookupKey": "de894bd589d6ed2fea73e2d5d742fdc9acc1f05c8a1d7880934ac2d7f3519331",
        "LookupName": "Possession",
        "LookupValue": "ClosePlus2Days",
        "StandardLookupValue": "ClosePlus2Days",
        "LegacyOdataValue": "Close Plus 2 Days"
    },
    {
        "LookupKey": "3b61d845cd0429f4e13f44fb8fb0c9f8f5f9b04d1bbbde2d51d26bc397c82656",
        "LookupName": "Possession",
        "LookupValue": "ClosePlus30Days",
        "StandardLookupValue": "ClosePlus30Days",
        "LegacyOdataValue": "Close Plus 30 Days"
    },
    {
        "LookupKey": "c83df53af2d707c045f3facebf1247c5fe5bf5d48998555751c95015bf411950",
        "LookupName": "Possession",
        "LookupValue": "ClosePlus3Days",
        "StandardLookupValue": "ClosePlus3Days",
        "LegacyOdataValue": "Close Plus 3 Days"
    },
    {
        "LookupKey": "3f835248563c1e242073481b0dd3e732580afe7f2206d53e0c5e3dd233f65e1f",
        "LookupName": "Possession",
        "LookupValue": "ClosePlus3To5Days",
        "StandardLookupValue": "ClosePlus3To5Days",
        "LegacyOdataValue": "Close Plus 3 to 5 Days"
    },
    {
        "LookupKey": "b1ffd4a0fb2837137da2b556e1b3744e3a76a9f9c16776e555f71acf8bec04b2",
        "LookupName": "Possession",
        "LookupValue": "Negotiable",
        "StandardLookupValue": "Negotiable",
        "LegacyOdataValue": "Negotiable"
    },
    {
        "LookupKey": "9410788d0a462de45f097852a878363c975dcb375148f4cf86f3e4a62888f672",
        "LookupName": "Possession",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "3b4ad22e10e4193965f0c5b6bd9804c490075cff002da958ae2265c7fdcd6c71",
        "LookupName": "Possession",
        "LookupValue": "RentalAgreement",
        "StandardLookupValue": "RentalAgreement",
        "LegacyOdataValue": "Rental Agreement"
    },
    {
        "LookupKey": "766ef019204154be4c5f99e685e4de63a83baa01eef75a84791fb98c2e977474",
        "LookupName": "Possession",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "6ed642687be924b13ed3fd06581557d67bcc8a93e2e440a53a35b627a706795b",
        "LookupName": "Possession",
        "LookupValue": "SellerRentBack",
        "StandardLookupValue": "SellerRentBack",
        "LegacyOdataValue": "Seller Rent Back"
    },
    {
        "LookupKey": "8bf840249a635f31c18b6c1f160b06bdfb6aa5c5dca95e6a8df732cc86e09d61",
        "LookupName": "Possession",
        "LookupValue": "SubjectToTenantRights",
        "StandardLookupValue": "SubjectToTenantRights",
        "LegacyOdataValue": "Subject To Tenant Rights"
    },
    {
        "LookupKey": "c4a9e9d514f9ef6e092e63bc45d66748cf96ffce831c03ac61a4e8545780b8a7",
        "LookupName": "PossibleUse",
        "LookupValue": "Agricultural",
        "StandardLookupValue": "Agricultural",
        "LegacyOdataValue": "Agricultural"
    },
    {
        "LookupKey": "eb82b158d9f0a75f7ad7607121ce6a4a3347f7171444f4dcc4e7b0210f5845dd",
        "LookupName": "PossibleUse",
        "LookupValue": "Cattle",
        "StandardLookupValue": "Cattle",
        "LegacyOdataValue": "Cattle"
    },
    {
        "LookupKey": "af57999f1251f13a4af90f43b67f814143584da86ea23d082dfef8a7d549686a",
        "LookupName": "PossibleUse",
        "LookupValue": "Commercial",
        "StandardLookupValue": "Commercial",
        "LegacyOdataValue": "Commercial"
    },
    {
        "LookupKey": "2d8ebd2116acf9ad3a5ec5de3e1764bfe57cb400f48bf07b06ee075fce3a8862",
        "LookupName": "PossibleUse",
        "LookupValue": "Dairy",
        "StandardLookupValue": "Dairy",
        "LegacyOdataValue": "Dairy"
    },
    {
        "LookupKey": "d13e61ed82b64c6b2b43e72ece06374a10b2c02d7b396969dd8059857c8bfb08",
        "LookupName": "PossibleUse",
        "LookupValue": "Development",
        "StandardLookupValue": "Development",
        "LegacyOdataValue": "Development"
    },
    {
        "LookupKey": "ad3523db75ba58db7261e6e9696871b01b427ef758e13ca49099940e4cf9200f",
        "LookupName": "PossibleUse",
        "LookupValue": "Farm",
        "StandardLookupValue": "Farm",
        "LegacyOdataValue": "Farm"
    },
    {
        "LookupKey": "b02d0a7c6d32c53acfce37ee2fb05b9f0a408ed3e91a5d6a70cf1ecef04197e4",
        "LookupName": "PossibleUse",
        "LookupValue": "Fishery",
        "StandardLookupValue": "Fishery",
        "LegacyOdataValue": "Fishery"
    },
    {
        "LookupKey": "7bb51ac389c229eec577f502d6c6335fb72574a48cb1628d7aded6d50e6fdc13",
        "LookupName": "PossibleUse",
        "LookupValue": "Grazing",
        "StandardLookupValue": "Grazing",
        "LegacyOdataValue": "Grazing"
    },
    {
        "LookupKey": "018cedb5b5eada9f27d0740b3c9f8ad8c88aa6a306ddc9a302d95919791210fa",
        "LookupName": "PossibleUse",
        "LookupValue": "HighwayTouristService",
        "StandardLookupValue": "HighwayTouristService",
        "LegacyOdataValue": "Highway/Tourist Service"
    },
    {
        "LookupKey": "f7261657793f3406fe6fcf84c013bde173f78b1dae799c97a1059cfc83ce87cb",
        "LookupName": "PossibleUse",
        "LookupValue": "Horses",
        "StandardLookupValue": "Horses",
        "LegacyOdataValue": "Horses"
    },
    {
        "LookupKey": "670818f659cb825d47104f7ed5bbe500764c2cff394fb0ac263e2e45701628aa",
        "LookupName": "PossibleUse",
        "LookupValue": "Hunting",
        "StandardLookupValue": "Hunting",
        "LegacyOdataValue": "Hunting"
    },
    {
        "LookupKey": "c004062e9079f42ca325dc81eeb77c20e5eb7937f08ff305260ffd95897ff0b8",
        "LookupName": "PossibleUse",
        "LookupValue": "Industrial",
        "StandardLookupValue": "Industrial",
        "LegacyOdataValue": "Industrial"
    },
    {
        "LookupKey": "ae0b5055bb55b4241c756654cd7606a1b280ab67b09590450f33f1b6aff11b8b",
        "LookupName": "PossibleUse",
        "LookupValue": "Investment",
        "StandardLookupValue": "Investment",
        "LegacyOdataValue": "Investment"
    },
    {
        "LookupKey": "1ed439753adc36fb7e14be0a7253fa8d42cbfa8c41e51f2ea78c54c8dc7b5c77",
        "LookupName": "PossibleUse",
        "LookupValue": "Livestock",
        "StandardLookupValue": "Livestock",
        "LegacyOdataValue": "Livestock"
    },
    {
        "LookupKey": "83577bbc749a8948cf9614481147c5f4bf53ce037a08819dc83b329dbcba16c4",
        "LookupName": "PossibleUse",
        "LookupValue": "ManufacturedHome",
        "StandardLookupValue": "ManufacturedHome",
        "LegacyOdataValue": "Manufactured Home"
    },
    {
        "LookupKey": "3222defa736b30ab51f93194ca20e53f74b2e10359b9a9607d99d2d57bff2d54",
        "LookupName": "PossibleUse",
        "LookupValue": "MiniStorage",
        "StandardLookupValue": "MiniStorage",
        "LegacyOdataValue": "Mini-Storage"
    },
    {
        "LookupKey": "ac943534ffcd534848094310da30f3f3cc15c01e6af69b218dfe42ce0f8d2364",
        "LookupName": "PossibleUse",
        "LookupValue": "MultiFamily",
        "StandardLookupValue": "MultiFamily",
        "LegacyOdataValue": "Multi-Family"
    },
    {
        "LookupKey": "015f721b2425d70a6835d305c04f94730a96062cd851379fa0d9a29c573deba9",
        "LookupName": "PossibleUse",
        "LookupValue": "Orchard",
        "StandardLookupValue": "Orchard",
        "LegacyOdataValue": "Orchard"
    },
    {
        "LookupKey": "58e046644cec490ad6a41dfa5a8a6500ecbe1b21e5d3b1d947889e8fbcefa680",
        "LookupName": "PossibleUse",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "d6ea8193a297587efe6b7c56f7edcede0ec21aa6d38c97e7f08b4058061d39af",
        "LookupName": "PossibleUse",
        "LookupValue": "Pasture",
        "StandardLookupValue": "Pasture",
        "LegacyOdataValue": "Pasture"
    },
    {
        "LookupKey": "4f5b7826bd82816ea75a5e42b14203e09cbc2a47c65fe683d4acea41af450864",
        "LookupName": "PossibleUse",
        "LookupValue": "PlaceOfWorship",
        "StandardLookupValue": "PlaceOfWorship",
        "LegacyOdataValue": "Place of Worship"
    },
    {
        "LookupKey": "4dc79fe3169072579daf6c823129302ed8d84415db08680742204c6097189051",
        "LookupName": "PossibleUse",
        "LookupValue": "Poultry",
        "StandardLookupValue": "Poultry",
        "LegacyOdataValue": "Poultry"
    },
    {
        "LookupKey": "4fae74e0f955bce504e7872fe3656e86fe86ffb18fe40afb018399ae8ccfe45d",
        "LookupName": "PossibleUse",
        "LookupValue": "Ranch",
        "StandardLookupValue": "Ranch",
        "LegacyOdataValue": "Ranch"
    },
    {
        "LookupKey": "c49ced2866c79ffeca200c3ad426d91b5a41e19cadbb007bb0ac72f8b8c105eb",
        "LookupName": "PossibleUse",
        "LookupValue": "Recreational",
        "StandardLookupValue": "Recreational",
        "LegacyOdataValue": "Recreational"
    },
    {
        "LookupKey": "3f0ff2dd23df89089b20fdcf016da833a9cbc19de3ab2dba17e916df67f4ebce",
        "LookupName": "PossibleUse",
        "LookupValue": "Residential",
        "StandardLookupValue": "Residential",
        "LegacyOdataValue": "Residential"
    },
    {
        "LookupKey": "23846c5a763cc30aee24d51ef72aebda733360abd758c1478b02718932c5c3d9",
        "LookupName": "PossibleUse",
        "LookupValue": "Retail",
        "StandardLookupValue": "Retail",
        "LegacyOdataValue": "Retail"
    },
    {
        "LookupKey": "9b37d4b7aaae3b6918b1fe5905a2d208b008393dbea3cff290edbc7f2810c92e",
        "LookupName": "PossibleUse",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "121142a377f4e1cef83a9acda282f805e7f538051df95e2e946b8af97bae8645",
        "LookupName": "PossibleUse",
        "LookupValue": "SingleFamily",
        "StandardLookupValue": "SingleFamily",
        "LegacyOdataValue": "Single Family"
    },
    {
        "LookupKey": "5cfb821e17e0a5aac4210e897981e523455afa482696fc22017c5289181cc0ef",
        "LookupName": "PossibleUse",
        "LookupValue": "Subdevelopment",
        "StandardLookupValue": "Subdevelopment",
        "LegacyOdataValue": "Subdevelopment"
    },
    {
        "LookupKey": "144a95fe7f895a333305eee4c78324d09d242c320f0a470ddedb356fe0677280",
        "LookupName": "PossibleUse",
        "LookupValue": "Timber",
        "StandardLookupValue": "Timber",
        "LegacyOdataValue": "Timber"
    },
    {
        "LookupKey": "482684d312fe1197f0102a955e77be7edbdd64867b15f3e40dec38e62f87f061",
        "LookupName": "PossibleUse",
        "LookupValue": "Unimproved",
        "StandardLookupValue": "Unimproved",
        "LegacyOdataValue": "Unimproved"
    },
    {
        "LookupKey": "f209036b71d7d961e93a8a158defc350b9671171b68ec0dd188e5bd02d7b7e8a",
        "LookupName": "PossibleUse",
        "LookupValue": "Vacant",
        "StandardLookupValue": "Vacant",
        "LegacyOdataValue": "Vacant"
    },
    {
        "LookupKey": "30bc6f18abbeeec8c459e991dcdb7c38be69e925ba075e22ab35ad7f11d6f254",
        "LookupName": "PossibleUse",
        "LookupValue": "Warehouse",
        "StandardLookupValue": "Warehouse",
        "LegacyOdataValue": "Warehouse"
    },
    {
        "LookupKey": "1437a3d00d450f8072b736102145514c9f5b18b1639869972f9cad1396cdae3f",
        "LookupName": "PowerProductionType",
        "LookupValue": "Photovoltaics",
        "StandardLookupValue": "Photovoltaics",
        "LegacyOdataValue": "Photovoltaics"
    },
    {
        "LookupKey": "893666ce46aba88dfab7422cf8f58cbbe4c66e81967059065e2f3b8be453dd9c",
        "LookupName": "PowerProductionType",
        "LookupValue": "Wind",
        "StandardLookupValue": "Wind",
        "LegacyOdataValue": "Wind"
    },
    {
        "LookupKey": "458b0220201b8690b3d9f950f48b55b2393ab8a393d16002ff867562a4374d20",
        "LookupName": "PropertyCondition",
        "LookupValue": "Fixer",
        "StandardLookupValue": "Fixer",
        "LegacyOdataValue": "Fixer"
    },
    {
        "LookupKey": "a52a0ec55349ee5981479558105535ec396e8f95a952c696a7d4bfc942413056",
        "LookupName": "PropertyCondition",
        "LookupValue": "NewConstruction",
        "StandardLookupValue": "NewConstruction",
        "LegacyOdataValue": "New Construction"
    },
    {
        "LookupKey": "0aac41e40f98f6a6f28b6146a1bb4b2c72e3ac7b696bdf2db2f1f211dab0a747",
        "LookupName": "PropertyCondition",
        "LookupValue": "UnderConstruction",
        "StandardLookupValue": "UnderConstruction",
        "LegacyOdataValue": "Under Construction"
    },
    {
        "LookupKey": "f9f7cf04c3bac0b065e797ffcc7280844d776b58b6b6e4dea66ffca4c8b42727",
        "LookupName": "PropertyCondition",
        "LookupValue": "UpdatedRemodeled",
        "StandardLookupValue": "UpdatedRemodeled",
        "LegacyOdataValue": "Updated/Remodeled"
    },
    {
        "LookupKey": "fce764dfed92862a7a1d49550c4965fee7056430b2ccc4c18e12cd031977b137",
        "LookupName": "PropertySubType",
        "LookupValue": "Agriculture",
        "StandardLookupValue": "Agriculture",
        "LegacyOdataValue": "Agriculture"
    },
    {
        "LookupKey": "c3cf946089d93964c3a1bc07cb733adb0504eb9dc3758ad7d611e4165ac2bcea",
        "LookupName": "PropertySubType",
        "LookupValue": "Apartment",
        "StandardLookupValue": "Apartment",
        "LegacyOdataValue": "Apartment"
    },
    {
        "LookupKey": "c6b824c5878f82eed24bf1e285f2bca9cd6a8e4511a28dcba3a87861f88430eb",
        "LookupName": "PropertySubType",
        "LookupValue": "BoatSlip",
        "StandardLookupValue": "BoatSlip",
        "LegacyOdataValue": "Boat Slip"
    },
    {
        "LookupKey": "3af9f1bb213ec8bd34fdc5d1c108efe7f661cb5004b8ef4779e34e9f59ed778d",
        "LookupName": "PropertySubType",
        "LookupValue": "Business",
        "StandardLookupValue": "Business",
        "LegacyOdataValue": "Business"
    },
    {
        "LookupKey": "602f4dbbd0e53cf62baa4ff0d452bebea8a72dac488a86283759b95b39012e55",
        "LookupName": "PropertySubType",
        "LookupValue": "Cabin",
        "StandardLookupValue": "Cabin",
        "LegacyOdataValue": "Cabin"
    },
    {
        "LookupKey": "d8856873e6b6f514942c6a82ed59c12fb7fd678fbc833035e374a20743a9bda4",
        "LookupName": "PropertySubType",
        "LookupValue": "Condominium",
        "StandardLookupValue": "Condominium",
        "LegacyOdataValue": "Condominium"
    },
    {
        "LookupKey": "d0e7e78285f206b06bef3dffae4d50c675da5c17acbfca99830a8e7152f1f555",
        "LookupName": "PropertySubType",
        "LookupValue": "DeededParking",
        "StandardLookupValue": "DeededParking",
        "LegacyOdataValue": "Deeded Parking"
    },
    {
        "LookupKey": "fc63639daec8d35e502b4df72d549fb3f977262081c36cd5f374bdffa11203d3",
        "LookupName": "PropertySubType",
        "LookupValue": "Duplex",
        "StandardLookupValue": "Duplex",
        "LegacyOdataValue": "Duplex"
    },
    {
        "LookupKey": "348063e6b24cf62a7ed59ef59737f1fa2131c0ef9256ee80a96d1c81b4e82328",
        "LookupName": "PropertySubType",
        "LookupValue": "Farm",
        "StandardLookupValue": "Farm",
        "LegacyOdataValue": "Farm"
    },
    {
        "LookupKey": "8408235ab98957634bd230e539e7d9215a92e2c2d99dfbb7604e1069b72177e7",
        "LookupName": "PropertySubType",
        "LookupValue": "HotelMotel",
        "StandardLookupValue": "HotelMotel",
        "LegacyOdataValue": "Hotel/Motel"
    },
    {
        "LookupKey": "8142d083ed47218bf652a8db4cf1439698cbcc746cec578acd630736f889961f",
        "LookupName": "PropertySubType",
        "LookupValue": "Industrial",
        "StandardLookupValue": "Industrial",
        "LegacyOdataValue": "Industrial"
    },
    {
        "LookupKey": "476da592393cbee77ef1d4be85de1e38aec7ed49de143e47900cf2e7eb9d1a14",
        "LookupName": "PropertySubType",
        "LookupValue": "ManufacturedHome",
        "StandardLookupValue": "ManufacturedHome",
        "LegacyOdataValue": "Manufactured Home"
    },
    {
        "LookupKey": "1e0dfd6f95306be3a05490315930836f5d006ded6d6ccdb05cd26bf9d5243dc4",
        "LookupName": "PropertySubType",
        "LookupValue": "ManufacturedOnLand",
        "StandardLookupValue": "ManufacturedOnLand",
        "LegacyOdataValue": "Manufactured On Land"
    },
    {
        "LookupKey": "d9da28d270556f6c967cbd8db5057601f2d2879e56883ce9ba6a76e056cbc0c9",
        "LookupName": "PropertySubType",
        "LookupValue": "MixedUse",
        "StandardLookupValue": "MixedUse",
        "LegacyOdataValue": "Mixed Use"
    },
    {
        "LookupKey": "3c0974e1922e06273ea11e973fe742b9fcb95caf82df7a99d6caeca5d6f7d4af",
        "LookupName": "PropertySubType",
        "LookupValue": "MobileHome",
        "StandardLookupValue": "MobileHome",
        "LegacyOdataValue": "Mobile Home"
    },
    {
        "LookupKey": "55ea7bbe461a6c347da7beb6e13cd60e5b0e5b958f8de2100c88d276bd3f1bfc",
        "LookupName": "PropertySubType",
        "LookupValue": "MultiFamily",
        "StandardLookupValue": "MultiFamily",
        "LegacyOdataValue": "Multi Family"
    },
    {
        "LookupKey": "c649ec98f5eb7c4e9f8f759a189d86ae98aac30829258f7c529f58df7c5cdf0d",
        "LookupName": "PropertySubType",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "08b085ff30b8d6988f8e07797f57c098a26eee4a2fa3e4fca95a262aaee883cb",
        "LookupName": "PropertySubType",
        "LookupValue": "OwnYourOwn",
        "StandardLookupValue": "OwnYourOwn",
        "LegacyOdataValue": "Own Your Own"
    },
    {
        "LookupKey": "ec74ec2cfaa9ad013189e32ff9a654f1c4ef26aa55a31387713b4295a6ff9868",
        "LookupName": "PropertySubType",
        "LookupValue": "Quadruplex",
        "StandardLookupValue": "Quadruplex",
        "LegacyOdataValue": "Quadruplex"
    },
    {
        "LookupKey": "971ece03679527538bbe308c772a81bdf82ef97e081c8547eea52ebe63ecbb12",
        "LookupName": "PropertySubType",
        "LookupValue": "Ranch",
        "StandardLookupValue": "Ranch",
        "LegacyOdataValue": "Ranch"
    },
    {
        "LookupKey": "6b194c268595594286251830cb05d6ee5a16acd4bf35ad68bc7640d532e5b679",
        "LookupName": "PropertySubType",
        "LookupValue": "Retail",
        "StandardLookupValue": "Retail",
        "LegacyOdataValue": "Retail"
    },
    {
        "LookupKey": "7999cef6043106e924bf75437e6d50aad630aa76d0a4ead477d9489be35ba3de",
        "LookupName": "PropertySubType",
        "LookupValue": "SingleFamilyResidence",
        "StandardLookupValue": "SingleFamilyResidence",
        "LegacyOdataValue": "Single Family Residence"
    },
    {
        "LookupKey": "924305e6069b1c184cdd51bc9601856de70547f9f720dbb22bd7a1fbc7a27d45",
        "LookupName": "PropertySubType",
        "LookupValue": "StockCooperative",
        "StandardLookupValue": "StockCooperative",
        "LegacyOdataValue": "Stock Cooperative"
    },
    {
        "LookupKey": "7964ebadb9eaf1c938566329cc1397cc6391337ddf55d4cc72731b94826e313d",
        "LookupName": "PropertySubType",
        "LookupValue": "Timeshare",
        "StandardLookupValue": "Timeshare",
        "LegacyOdataValue": "Timeshare"
    },
    {
        "LookupKey": "99c649fc83093b2bee6c9bae027d19d3e40f560f08f0b35460b0149406322486",
        "LookupName": "PropertySubType",
        "LookupValue": "Townhouse",
        "StandardLookupValue": "Townhouse",
        "LegacyOdataValue": "Townhouse"
    },
    {
        "LookupKey": "820d219165c5e7be322a6b6281322602d6245b537b76a03380dd4dcff66839fe",
        "LookupName": "PropertySubType",
        "LookupValue": "Triplex",
        "StandardLookupValue": "Triplex",
        "LegacyOdataValue": "Triplex"
    },
    {
        "LookupKey": "17affd765723c2684b4e55cb1aabcdb21596c5c17da48ab6ebea2cf0bd61ee96",
        "LookupName": "PropertySubType",
        "LookupValue": "UnimprovedLand",
        "StandardLookupValue": "UnimprovedLand",
        "LegacyOdataValue": "Unimproved Land"
    },
    {
        "LookupKey": "1419312e6a08ddb936c11bbf362d4c22074d8e13ca8960ea001c7cc0edf7f48a",
        "LookupName": "PropertySubType",
        "LookupValue": "Warehouse",
        "StandardLookupValue": "Warehouse",
        "LegacyOdataValue": "Warehouse"
    },
    {
        "LookupKey": "2e97d837106d5a1a42f55dd36f5b33d541be0363a8a341c564ee022f45e93016",
        "LookupName": "PropertyType",
        "LookupValue": "BusinessOpportunity",
        "StandardLookupValue": "BusinessOpportunity",
        "LegacyOdataValue": "Business Opportunity"
    },
    {
        "LookupKey": "1b0009be53f08dc8915e063e638ded74f38c387d6b3e2b5f2f1158f72881bb00",
        "LookupName": "PropertyType",
        "LookupValue": "CommercialLease",
        "StandardLookupValue": "CommercialLease",
        "LegacyOdataValue": "Commercial Lease"
    },
    {
        "LookupKey": "7eae4f44b4076125974aeb6bfa5804f98ba480f67a7acece1a07a502cdfb3591",
        "LookupName": "PropertyType",
        "LookupValue": "CommercialSale",
        "StandardLookupValue": "CommercialSale",
        "LegacyOdataValue": "Commercial Sale"
    },
    {
        "LookupKey": "f84e27c8277c5e3e951e57aee997ba9ea6e010de1827b4c485df1beab94cd32c",
        "LookupName": "PropertyType",
        "LookupValue": "Farm",
        "StandardLookupValue": "Farm",
        "LegacyOdataValue": "Farm"
    },
    {
        "LookupKey": "fb797c2097e6c52cf5aa03946f66693a47398c1c137ff751f69fdc80c6718c4e",
        "LookupName": "PropertyType",
        "LookupValue": "Land",
        "StandardLookupValue": "Land",
        "LegacyOdataValue": "Land"
    },
    {
        "LookupKey": "61788b6fd432d4d9478df064b0120c4f2bdb79b692ba3e3005e93f902291c971",
        "LookupName": "PropertyType",
        "LookupValue": "ManufacturedInPark",
        "StandardLookupValue": "ManufacturedInPark",
        "LegacyOdataValue": "Manufactured In Park"
    },
    {
        "LookupKey": "afe865cf941ceff1fcb9f8af1510396a5ca23809e2d6dd1f08badabc0d8f5630",
        "LookupName": "PropertyType",
        "LookupValue": "Residential",
        "StandardLookupValue": "Residential",
        "LegacyOdataValue": "Residential"
    },
    {
        "LookupKey": "0501c2abb6cbbb00f476573d2c28490b7a0d3dbc4ad03bcb368b8627c0e67608",
        "LookupName": "PropertyType",
        "LookupValue": "ResidentialIncome",
        "StandardLookupValue": "ResidentialIncome",
        "LegacyOdataValue": "Residential Income"
    },
    {
        "LookupKey": "9caa6b76a1bfd4b90ab334ad0eeee407470f73b0d0ef895bcfe4d961010a7823",
        "LookupName": "PropertyType",
        "LookupValue": "ResidentialLease",
        "StandardLookupValue": "ResidentialLease",
        "LegacyOdataValue": "Residential Lease"
    },
    {
        "LookupKey": "c54ac6da4f7430a05fc9e18916d7574714a760d856d3fbd33330f8938b433d04",
        "LookupName": "RentIncludes",
        "LookupValue": "AllUtilities",
        "StandardLookupValue": "AllUtilities",
        "LegacyOdataValue": "All Utilities"
    },
    {
        "LookupKey": "4c8cc014ce0c9378f3f6979747d4871aaf5f030c0046e4a736ad345f5659dcb0",
        "LookupName": "RentIncludes",
        "LookupValue": "CableTv",
        "StandardLookupValue": "CableTv",
        "LegacyOdataValue": "Cable TV"
    },
    {
        "LookupKey": "21d5f5bbd849625c70387df8515ffb3fa102b1734cf4be08ba98adf3d1492fce",
        "LookupName": "RentIncludes",
        "LookupValue": "Electricity",
        "StandardLookupValue": "Electricity",
        "LegacyOdataValue": "Electricity"
    },
    {
        "LookupKey": "f6f21beae0261f95c00cec24288de05cd614e8e980a69c998487d7759680e975",
        "LookupName": "RentIncludes",
        "LookupValue": "Gardener",
        "StandardLookupValue": "Gardener",
        "LegacyOdataValue": "Gardener"
    },
    {
        "LookupKey": "836780a89df8c2214147082c8910009de266a47936245dfc3a31b3cff2553144",
        "LookupName": "RentIncludes",
        "LookupValue": "Gas",
        "StandardLookupValue": "Gas",
        "LegacyOdataValue": "Gas"
    },
    {
        "LookupKey": "5045c3c5bc150928f5516308e73af62db85cd4c7d47bf4357e56b4a734f108a1",
        "LookupName": "RentIncludes",
        "LookupValue": "Internet",
        "StandardLookupValue": "Internet",
        "LegacyOdataValue": "Internet"
    },
    {
        "LookupKey": "75caf623976fa4e14354ad3291cbeb7d0b744cc04e20d8d434b3e96ee52b7bdf",
        "LookupName": "RentIncludes",
        "LookupValue": "Management",
        "StandardLookupValue": "Management",
        "LegacyOdataValue": "Management"
    },
    {
        "LookupKey": "ac7582458a40edd25652b5b4a2a920b4bcafd4f69e7395d0bd4ad69cbdc8af7c",
        "LookupName": "RentIncludes",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "f071d2cff99f1926b4239430d6fb5c07e60940824c25a72debc9c1303a65ff78",
        "LookupName": "RentIncludes",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "42e8583d95b010e00230c0ad03b95ee3b32266939dae62dcced41046f3bf4588",
        "LookupName": "RentIncludes",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "b748c7421000c85d24529db52d1244424e016339ac6f414a40c0590709c414ed",
        "LookupName": "RentIncludes",
        "LookupValue": "Sewer",
        "StandardLookupValue": "Sewer",
        "LegacyOdataValue": "Sewer"
    },
    {
        "LookupKey": "f6bed7c050c1235de6dc7cc2ca2b7654e9121a8218a03c7917ae7531a97af110",
        "LookupName": "RentIncludes",
        "LookupValue": "TrashCollection",
        "StandardLookupValue": "TrashCollection",
        "LegacyOdataValue": "Trash Collection"
    },
    {
        "LookupKey": "785eae1c0fddee612ecc98d0307bc084d5c6f9a5d945400f7eeb25bca567abef",
        "LookupName": "RentIncludes",
        "LookupValue": "Water",
        "StandardLookupValue": "Water",
        "LegacyOdataValue": "Water"
    },
    {
        "LookupKey": "2b4b916561f663b330afcf34028cfc7dd32fb3e74623f770a60568652e046030",
        "LookupName": "RoadFrontageType",
        "LookupValue": "Alley",
        "StandardLookupValue": "Alley",
        "LegacyOdataValue": "Alley"
    },
    {
        "LookupKey": "9df2ff6e6f02100b07c9472114b48ae63671d64fc792696a82a28534b759ee90",
        "LookupName": "RoadFrontageType",
        "LookupValue": "CityStreet",
        "StandardLookupValue": "CityStreet",
        "LegacyOdataValue": "City Street"
    },
    {
        "LookupKey": "56d32cdb0017dd3ad1820680ab007c1b206cd34de538a9e3839f91bfda3d62a2",
        "LookupName": "RoadFrontageType",
        "LookupValue": "CountyRoad",
        "StandardLookupValue": "CountyRoad",
        "LegacyOdataValue": "County Road"
    },
    {
        "LookupKey": "512ec8579746e246f7633f7cc3610acf793060bb225f0b343242caac25a423fc",
        "LookupName": "RoadFrontageType",
        "LookupValue": "Easement",
        "StandardLookupValue": "Easement",
        "LegacyOdataValue": "Easement"
    },
    {
        "LookupKey": "8fac01f401c3925086164d62513ae972172bd432367d254b324ee264a31088b6",
        "LookupName": "RoadFrontageType",
        "LookupValue": "Freeway",
        "StandardLookupValue": "Freeway",
        "LegacyOdataValue": "Freeway"
    },
    {
        "LookupKey": "d4e32440f79e5562d8d36053273817044d9647943b44eec1d526934f3dd3f0d4",
        "LookupName": "RoadFrontageType",
        "LookupValue": "Highway",
        "StandardLookupValue": "Highway",
        "LegacyOdataValue": "Highway"
    },
    {
        "LookupKey": "0789e8c76b25ddf7d7b70d689836acabef1e2e7abd86886e4928a673c8d0a206",
        "LookupName": "RoadFrontageType",
        "LookupValue": "Interstate",
        "StandardLookupValue": "Interstate",
        "LegacyOdataValue": "Interstate"
    },
    {
        "LookupKey": "214a1a9656bf4bf48af60e19abf2f7340c60f703258aaf85a5fefafe95acffa9",
        "LookupName": "RoadFrontageType",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "50729d7315c9caedbba89654353135666c25602c498497f5ad536df2e6ee5885",
        "LookupName": "RoadFrontageType",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "10ce961dff17efcd9aae9885d4f4b40facd6503c9f5d256333e9d6e7553e3406",
        "LookupName": "RoadFrontageType",
        "LookupValue": "PrivateRoad",
        "StandardLookupValue": "PrivateRoad",
        "LegacyOdataValue": "Private Road"
    },
    {
        "LookupKey": "368ca72375dee39b538b84ea385964ef455d90f9a3706ddb4675a76915bcc1bd",
        "LookupName": "RoadFrontageType",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "0e5746612a6b8c5c8fbbadc052c62924d7ceb3f260fdf3ae9f190b31995094fa",
        "LookupName": "RoadFrontageType",
        "LookupValue": "StateRoad",
        "StandardLookupValue": "StateRoad",
        "LegacyOdataValue": "State Road"
    },
    {
        "LookupKey": "92af49306473c47ef8b388bfd298bd027ee66b2bbe4b055b628241a4f9224210",
        "LookupName": "RoadFrontageType",
        "LookupValue": "Unimproved",
        "StandardLookupValue": "Unimproved",
        "LegacyOdataValue": "Unimproved"
    },
    {
        "LookupKey": "d0c1c55eddf4f8c401a579dca1fef67d7042ede8ae6339ce7d9b2011dd30a7c8",
        "LookupName": "RoadResponsibility",
        "LookupValue": "PrivateMaintainedRoad",
        "StandardLookupValue": "PrivateMaintainedRoad",
        "LegacyOdataValue": "Private Maintained Road"
    },
    {
        "LookupKey": "f00252dc2fd08569d41e67fa09141763d3b7873638a17e1fdd6aa85dc8bd9053",
        "LookupName": "RoadResponsibility",
        "LookupValue": "PublicMaintainedRoad",
        "StandardLookupValue": "PublicMaintainedRoad",
        "LegacyOdataValue": "Public Maintained Road"
    },
    {
        "LookupKey": "01e90d5db9821d72cd9f086652169b3b6cdea82140ce8cf25af3fc78f18cd4cc",
        "LookupName": "RoadResponsibility",
        "LookupValue": "RoadMaintenanceAgreement",
        "StandardLookupValue": "RoadMaintenanceAgreement",
        "LegacyOdataValue": "Road Maintenance Agreement"
    },
    {
        "LookupKey": "0b48b88c0b49a687c595a17d0d58db33f96fc75a3c4ed49945978ca0195b20d4",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "AlleyPaved",
        "StandardLookupValue": "AlleyPaved",
        "LegacyOdataValue": "Alley Paved"
    },
    {
        "LookupKey": "dc5a1b1ab80e9b50e9bd1196ebb50fbfb1e2a8d59ef108cdf45e173b725d774e",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "Asphalt",
        "StandardLookupValue": "Asphalt",
        "LegacyOdataValue": "Asphalt"
    },
    {
        "LookupKey": "718718b6c9f2b5d31ca1fb36853686e3b964d93476d2ecfb6f4293a1b052cb29",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "ChipAndSeal",
        "StandardLookupValue": "ChipAndSeal",
        "LegacyOdataValue": "Chip And Seal"
    },
    {
        "LookupKey": "0d98187e0d05cc978d65385996bc3fb51486ba089f248b9fffadd1c30df34a48",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "Concrete",
        "StandardLookupValue": "Concrete",
        "LegacyOdataValue": "Concrete"
    },
    {
        "LookupKey": "6025a887e00f78c897de57cbf1b338b119669f161c9e80312942b547555764e5",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "Dirt",
        "StandardLookupValue": "Dirt",
        "LegacyOdataValue": "Dirt"
    },
    {
        "LookupKey": "863c75fc0c2319b6db450a6aee09d657c672cac2f5aa4efd81a3634df6e3e7ad",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "Gravel",
        "StandardLookupValue": "Gravel",
        "LegacyOdataValue": "Gravel"
    },
    {
        "LookupKey": "cd6b42e8435a9a3cdd15457555e2931088e5505aa7433657867533b7a951058d",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "d1e7b6331c55f2157df221de55281c267d35dc023cffa780fb747168909df933",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "42526e8044f7664827d5d455b7e5d2c3dc0076787b65bb8e923410e427c41024",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "Paved",
        "StandardLookupValue": "Paved",
        "LegacyOdataValue": "Paved"
    },
    {
        "LookupKey": "bc208eb54e6af4b704fed2fdf019d27813fde0480b844fc2e002c3d1a69b14a7",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "9c8db07743d566f5f2c6a83c9ed5392285a4823d370de072b68ac522efc0da14",
        "LookupName": "RoadSurfaceType",
        "LookupValue": "Unimproved",
        "StandardLookupValue": "Unimproved",
        "LegacyOdataValue": "Unimproved"
    },
    {
        "LookupKey": "ea4717863ecb2aff66a3c40b52a0e13c3bfccb093e633212bf60a960f60565f5",
        "LookupName": "Roof",
        "LookupValue": "Aluminum",
        "StandardLookupValue": "Aluminum",
        "LegacyOdataValue": "Aluminum"
    },
    {
        "LookupKey": "93a7e0c3c3ba2359f36200b871436d752d29901e345b7a6a2df5155dc7b55a7f",
        "LookupName": "Roof",
        "LookupValue": "AsbestosShingle",
        "StandardLookupValue": "AsbestosShingle",
        "LegacyOdataValue": "Asbestos Shingle"
    },
    {
        "LookupKey": "b81ed18904407e47076ca8d92b85ace2f5e960132eb12363789895fa203c2774",
        "LookupName": "Roof",
        "LookupValue": "Asphalt",
        "StandardLookupValue": "Asphalt",
        "LegacyOdataValue": "Asphalt"
    },
    {
        "LookupKey": "364ed210e325e26489b9e8378b1213fa600a9eef88975cdb7f86aa41aaf90b12",
        "LookupName": "Roof",
        "LookupValue": "Bahama",
        "StandardLookupValue": "Bahama",
        "LegacyOdataValue": "Bahama"
    },
    {
        "LookupKey": "36ae412b6f827a80ec0a0a62c5bb02032cd8405c3c399658d85bf702c3229c18",
        "LookupName": "Roof",
        "LookupValue": "Barrel",
        "StandardLookupValue": "Barrel",
        "LegacyOdataValue": "Barrel"
    },
    {
        "LookupKey": "82112317d618666840f21eb4053f7fac6025a51876157d50c28cb715fa75c2b3",
        "LookupName": "Roof",
        "LookupValue": "Bituthene",
        "StandardLookupValue": "Bituthene",
        "LegacyOdataValue": "Bituthene"
    },
    {
        "LookupKey": "dc35b3e0ce567a9dd776ad4b3887b062626eb335992bfa5f08925873294cfd42",
        "LookupName": "Roof",
        "LookupValue": "BuiltUp",
        "StandardLookupValue": "BuiltUp",
        "LegacyOdataValue": "Built-Up"
    },
    {
        "LookupKey": "dd6adf76340c74aa49fcee79de12b8678e35d6e4cc46cf7a8c19f0afc58fe55b",
        "LookupName": "Roof",
        "LookupValue": "Composition",
        "StandardLookupValue": "Composition",
        "LegacyOdataValue": "Composition"
    },
    {
        "LookupKey": "fba87a262fa2ff3e8e73259e07dcdf7122eb98dd69dbcdf581ffcdd715f77a52",
        "LookupName": "Roof",
        "LookupValue": "Concrete",
        "StandardLookupValue": "Concrete",
        "LegacyOdataValue": "Concrete"
    },
    {
        "LookupKey": "083a0508ae093f8460a731ada109d17d9274bfbe7d9c0f05a53caa33cb3f0854",
        "LookupName": "Roof",
        "LookupValue": "Copper",
        "StandardLookupValue": "Copper",
        "LegacyOdataValue": "Copper"
    },
    {
        "LookupKey": "d15269a371105a7a7ac266b7b2dbda1949cd37d685a40bbc7da878def2de49c1",
        "LookupName": "Roof",
        "LookupValue": "Elastomeric",
        "StandardLookupValue": "Elastomeric",
        "LegacyOdataValue": "Elastomeric"
    },
    {
        "LookupKey": "0dd3da6b9c208d559216115d2b47cfd46be2c31f6f8af6d114e22217192f319d",
        "LookupName": "Roof",
        "LookupValue": "Fiberglass",
        "StandardLookupValue": "Fiberglass",
        "LegacyOdataValue": "Fiberglass"
    },
    {
        "LookupKey": "3db58587a75745f8b4a9be1c3fdabcdd7af5dc0ca2b2b0bc963d16e627733a65",
        "LookupName": "Roof",
        "LookupValue": "Flat",
        "StandardLookupValue": "Flat",
        "LegacyOdataValue": "Flat"
    },
    {
        "LookupKey": "92a0e07b9902329fa61d296547f53a4f0833776fb527008d4547481cd170ac59",
        "LookupName": "Roof",
        "LookupValue": "FlatTile",
        "StandardLookupValue": "FlatTile",
        "LegacyOdataValue": "Flat Tile"
    },
    {
        "LookupKey": "b2fae91be3a8461dd920b772117d076a7704004de0f3b24c2dc43df214c0776b",
        "LookupName": "Roof",
        "LookupValue": "Foam",
        "StandardLookupValue": "Foam",
        "LegacyOdataValue": "Foam"
    },
    {
        "LookupKey": "62e3afd3009716998dc5bb9bef0fcc4562d30c98375b26d2b78e7a3eeb6df374",
        "LookupName": "Roof",
        "LookupValue": "GreenRoof",
        "StandardLookupValue": "GreenRoof",
        "LegacyOdataValue": "Green Roof"
    },
    {
        "LookupKey": "ba0805fbd0a6b04b328758b524d0cc706e880730cf4a09e1f72f0bd3b7f0e1e5",
        "LookupName": "Roof",
        "LookupValue": "Mansard",
        "StandardLookupValue": "Mansard",
        "LegacyOdataValue": "Mansard"
    },
    {
        "LookupKey": "43c56fba1b55007698afa17f9e760e56e3398a4114a520a1356e483aa3f08a00",
        "LookupName": "Roof",
        "LookupValue": "Membrane",
        "StandardLookupValue": "Membrane",
        "LegacyOdataValue": "Membrane"
    },
    {
        "LookupKey": "2b344fc27d279bbe23e717f6fc5727c0fb77b7c3394d9052e9088d73c83d724c",
        "LookupName": "Roof",
        "LookupValue": "Metal",
        "StandardLookupValue": "Metal",
        "LegacyOdataValue": "Metal"
    },
    {
        "LookupKey": "2682a7e00d2eff8d618963580240854c1ee20d569d520730a94f0bac9317f073",
        "LookupName": "Roof",
        "LookupValue": "Mixed",
        "StandardLookupValue": "Mixed",
        "LegacyOdataValue": "Mixed"
    },
    {
        "LookupKey": "651be59aa091a494ce4f9ee09f90b7ffc657fbbc8f5c3dd299fa9f65da478a07",
        "LookupName": "Roof",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "42ac8ba1246a369f8ae7f001e915a7b7f2c42379cb765dc1a91a4fb3dda31458",
        "LookupName": "Roof",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "397b3c6579d1dc3be0efd0cad9ff8ebf05fe9bcd6ffa7464675daaff1a046ab4",
        "LookupName": "Roof",
        "LookupValue": "RolledHotMop",
        "StandardLookupValue": "RolledHotMop",
        "LegacyOdataValue": "Rolled/Hot Mop"
    },
    {
        "LookupKey": "4656cd401ab57c9b3e297293e4745541a7c75c5ce8a79892e4a85c8499bf2043",
        "LookupName": "Roof",
        "LookupValue": "Rubber",
        "StandardLookupValue": "Rubber",
        "LegacyOdataValue": "Rubber"
    },
    {
        "LookupKey": "86f2c8ecce0b3b01e26c16e42944c81578d12ea1a21125003b97d65321eb5b5a",
        "LookupName": "Roof",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "812fc37a4c7af1a7f6a59bc9ba7f7b2796489e8ed40bd9a2c634d9005156cc94",
        "LookupName": "Roof",
        "LookupValue": "Shake",
        "StandardLookupValue": "Shake",
        "LegacyOdataValue": "Shake"
    },
    {
        "LookupKey": "5d1f0821bd9a4b935a102e5382ca37d5197d2f4ccd3d8d814f55c010ebcc3d1a",
        "LookupName": "Roof",
        "LookupValue": "Shingle",
        "StandardLookupValue": "Shingle",
        "LegacyOdataValue": "Shingle"
    },
    {
        "LookupKey": "5c0c7aa4713a18307fbd1006780bb9e2d01dc02cff1dbaccfab050013677efa0",
        "LookupName": "Roof",
        "LookupValue": "Slate",
        "StandardLookupValue": "Slate",
        "LegacyOdataValue": "Slate"
    },
    {
        "LookupKey": "239fd28cee13738a94a8f538384853aae14bcee8c2689d71d53a2d7f1538bf73",
        "LookupName": "Roof",
        "LookupValue": "SpanishTile",
        "StandardLookupValue": "SpanishTile",
        "LegacyOdataValue": "Spanish Tile"
    },
    {
        "LookupKey": "339fd47fc705bf09f5c6a6446f321784f749d046552ce3ba64c9ce33735bc9dc",
        "LookupName": "Roof",
        "LookupValue": "Stone",
        "StandardLookupValue": "Stone",
        "LegacyOdataValue": "Stone"
    },
    {
        "LookupKey": "7b4b6e7da7d500a7a86871106002c72cbf19e2aa85a8fa6ad9fc18427fd57c2c",
        "LookupName": "Roof",
        "LookupValue": "Synthetic",
        "StandardLookupValue": "Synthetic",
        "LegacyOdataValue": "Synthetic"
    },
    {
        "LookupKey": "7651990c3ae63eb3c7e75b9a077a10318488ec409cdede76a4520b355ebdd845",
        "LookupName": "Roof",
        "LookupValue": "TarGravel",
        "StandardLookupValue": "TarGravel",
        "LegacyOdataValue": "Tar/Gravel"
    },
    {
        "LookupKey": "43e8780c20fc7f8c963c60414a44412dc1639a36e465ca5cc0b816454282d371",
        "LookupName": "Roof",
        "LookupValue": "Tile",
        "StandardLookupValue": "Tile",
        "LegacyOdataValue": "Tile"
    },
    {
        "LookupKey": "af5cdc0c0307bd96cb0928423ceb1046ea26f54f5c65f53e523ee742a42ebc7f",
        "LookupName": "Roof",
        "LookupValue": "Wood",
        "StandardLookupValue": "Wood",
        "LegacyOdataValue": "Wood"
    },
    {
        "LookupKey": "da2abcb9996d8e45d9261071da04ddcb898fbb98258e687b6128cde67e850dae",
        "LookupName": "RoomType",
        "LookupValue": "Basement",
        "StandardLookupValue": "Basement",
        "LegacyOdataValue": "Basement"
    },
    {
        "LookupKey": "f200eea00abcce46499b261ebd078ac7da72c5942af3c27746dd52a6e996422b",
        "LookupName": "RoomType",
        "LookupValue": "Bathroom",
        "StandardLookupValue": "Bathroom",
        "LegacyOdataValue": "Bathroom"
    },
    {
        "LookupKey": "e1e7140e7f154b385c11d1d431b8fb8d7568e3f65c7eb75d83174cf7e9b2c7b4",
        "LookupName": "RoomType",
        "LookupValue": "Bathroom1",
        "StandardLookupValue": "Bathroom1",
        "LegacyOdataValue": "Bathroom 1"
    },
    {
        "LookupKey": "26e40dead509e2a0d50280253b8ff797bab94ae346ed7e92595d5be2591f48bc",
        "LookupName": "RoomType",
        "LookupValue": "Bathroom2",
        "StandardLookupValue": "Bathroom2",
        "LegacyOdataValue": "Bathroom 2"
    },
    {
        "LookupKey": "3a10543d1c616218ee14b605efdf4e488413646690e5ec0c9277a31869fab754",
        "LookupName": "RoomType",
        "LookupValue": "Bathroom3",
        "StandardLookupValue": "Bathroom3",
        "LegacyOdataValue": "Bathroom 3"
    },
    {
        "LookupKey": "5d59c22c90b609c1b317f68cabebb522ca20748b59655bd7b3e4bb2bb7cc12e6",
        "LookupName": "RoomType",
        "LookupValue": "Bathroom4",
        "StandardLookupValue": "Bathroom4",
        "LegacyOdataValue": "Bathroom 4"
    },
    {
        "LookupKey": "5c7877ac518c1951fe3a13674e701553e6cb199a3c0c656f719157e547daba73",
        "LookupName": "RoomType",
        "LookupValue": "Bathroom5",
        "StandardLookupValue": "Bathroom5",
        "LegacyOdataValue": "Bathroom 5"
    },
    {
        "LookupKey": "8da5152118827b87312df99b5d58d37bb2799eed466551efb0580f3d88b88b3a",
        "LookupName": "RoomType",
        "LookupValue": "Bedroom",
        "StandardLookupValue": "Bedroom",
        "LegacyOdataValue": "Bedroom"
    },
    {
        "LookupKey": "5a3a7f0b605f96995dabfae91799945c4c30500410402527d7334faa54a3118c",
        "LookupName": "RoomType",
        "LookupValue": "Bedroom1",
        "StandardLookupValue": "Bedroom1",
        "LegacyOdataValue": "Bedroom 1"
    },
    {
        "LookupKey": "0e8ae80c40c5af8db1ea91033470ca62467942c2fcc925dbdce9ee003163390d",
        "LookupName": "RoomType",
        "LookupValue": "Bedroom2",
        "StandardLookupValue": "Bedroom2",
        "LegacyOdataValue": "Bedroom 2"
    },
    {
        "LookupKey": "e42ccdae735fed5e42367b738b13a16c0309d4c65a8ddc552312999be1032619",
        "LookupName": "RoomType",
        "LookupValue": "Bedroom3",
        "StandardLookupValue": "Bedroom3",
        "LegacyOdataValue": "Bedroom 3"
    },
    {
        "LookupKey": "6516684f751312ab3dc95628cefad41de42df8badff1bd3eb5df0e9b79d9c724",
        "LookupName": "RoomType",
        "LookupValue": "Bedroom4",
        "StandardLookupValue": "Bedroom4",
        "LegacyOdataValue": "Bedroom 4"
    },
    {
        "LookupKey": "cf91de119ce0a3273787caccc941a9395ed5a7fea3f70b844a9461adfd014f78",
        "LookupName": "RoomType",
        "LookupValue": "Bedroom5",
        "StandardLookupValue": "Bedroom5",
        "LegacyOdataValue": "Bedroom 5"
    },
    {
        "LookupKey": "3c2257f9a4aca194466a8350a5cea7e17afa74e4866aaf8f45a35fe21cc974cd",
        "LookupName": "RoomType",
        "LookupValue": "BonusRoom",
        "StandardLookupValue": "BonusRoom",
        "LegacyOdataValue": "Bonus Room"
    },
    {
        "LookupKey": "e5b242b729f551d9f390a4da7ae70f20a8eba498b59469431825e1a653f6dd30",
        "LookupName": "RoomType",
        "LookupValue": "Den",
        "StandardLookupValue": "Den",
        "LegacyOdataValue": "Den"
    },
    {
        "LookupKey": "3babcb30cb14f785362d1b679808aae88dc8cd438efc54fe0e568c937def6d07",
        "LookupName": "RoomType",
        "LookupValue": "DiningRoom",
        "StandardLookupValue": "DiningRoom",
        "LegacyOdataValue": "Dining Room"
    },
    {
        "LookupKey": "c972e5db95a29ec5cfed8032d775adc7b2d6491a39ae7f425d098da62d11d314",
        "LookupName": "RoomType",
        "LookupValue": "ExerciseRoom",
        "StandardLookupValue": "ExerciseRoom",
        "LegacyOdataValue": "Exercise Room"
    },
    {
        "LookupKey": "e4f9e0658315de59342086d2e1252d92ca8214ada918eb3c6656708dee60e832",
        "LookupName": "RoomType",
        "LookupValue": "FamilyRoom",
        "StandardLookupValue": "FamilyRoom",
        "LegacyOdataValue": "Family Room"
    },
    {
        "LookupKey": "c16fde28715d455f31d0206a7c9cab16aaf03da4224494d26bc5d67b90b8a1c0",
        "LookupName": "RoomType",
        "LookupValue": "GameRoom",
        "StandardLookupValue": "GameRoom",
        "LegacyOdataValue": "Game Room"
    },
    {
        "LookupKey": "0abb7fed24b527bf0764a2a04b53fcd7a39e41d89cfeb90b18f47eae0c4c2e30",
        "LookupName": "RoomType",
        "LookupValue": "GreatRoom",
        "StandardLookupValue": "GreatRoom",
        "LegacyOdataValue": "Great Room"
    },
    {
        "LookupKey": "d10f880093e4f4cf1cca4e79a3ab273a8e0a22f1aea74b73a65307ae75eb3227",
        "LookupName": "RoomType",
        "LookupValue": "Gym",
        "StandardLookupValue": "Gym",
        "LegacyOdataValue": "Gym"
    },
    {
        "LookupKey": "ca119a83152733af6b8d996122b81254a762e9db24c6702a9808feddcfda0534",
        "LookupName": "RoomType",
        "LookupValue": "Kitchen",
        "StandardLookupValue": "Kitchen",
        "LegacyOdataValue": "Kitchen"
    },
    {
        "LookupKey": "098cde8d1ccf27110cdd249d305398cb676ed627457cc543e3b06c01647d5446",
        "LookupName": "RoomType",
        "LookupValue": "Laundry",
        "StandardLookupValue": "Laundry",
        "LegacyOdataValue": "Laundry"
    },
    {
        "LookupKey": "34390e616cf87372ab6f3e7a5c94bd15308430ce0a04bdd73640401fb184c14d",
        "LookupName": "RoomType",
        "LookupValue": "Library",
        "StandardLookupValue": "Library",
        "LegacyOdataValue": "Library"
    },
    {
        "LookupKey": "b5eb3b067df150166281836da3fccf3fc348b7068da27b8f0b67303f245c1fc3",
        "LookupName": "RoomType",
        "LookupValue": "LivingRoom",
        "StandardLookupValue": "LivingRoom",
        "LegacyOdataValue": "Living Room"
    },
    {
        "LookupKey": "2bca047e7fdb068d2ae3b9ca6ef0608845e381d399ff14551991bcbe3c209d26",
        "LookupName": "RoomType",
        "LookupValue": "Loft",
        "StandardLookupValue": "Loft",
        "LegacyOdataValue": "Loft"
    },
    {
        "LookupKey": "0066e4660a72ece00eb91628f462668a8a02d56c272e8c599584ca7c2e8fc27d",
        "LookupName": "RoomType",
        "LookupValue": "MasterBathroom",
        "StandardLookupValue": "MasterBathroom",
        "LegacyOdataValue": "Master Bathroom"
    },
    {
        "LookupKey": "bc8f8c9ce065a0b9ccf0c7a9011945aefa4fa95dd6c80840d56dffbdc83ece45",
        "LookupName": "RoomType",
        "LookupValue": "MasterBedroom",
        "StandardLookupValue": "MasterBedroom",
        "LegacyOdataValue": "Master Bedroom"
    },
    {
        "LookupKey": "8426c00b5925473a1290befa33e55be1a848d7d7fec911229ad3a9398c8198ac",
        "LookupName": "RoomType",
        "LookupValue": "MediaRoom",
        "StandardLookupValue": "MediaRoom",
        "LegacyOdataValue": "Media Room"
    },
    {
        "LookupKey": "8cfbaddfdb9f2972c16a73f6f0960c69dd500fe6e3484d87ab4158c8c95b6964",
        "LookupName": "RoomType",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "e2fb8c5d18217300c411f44569b41dafd3ad0347832a8525ecafc228ae7393b0",
        "LookupName": "RoomType",
        "LookupValue": "Sauna",
        "StandardLookupValue": "Sauna",
        "LegacyOdataValue": "Sauna"
    },
    {
        "LookupKey": "b51903cc31b333616edcf73f6ad2a86040fb55f09315763253413eeccc679334",
        "LookupName": "RoomType",
        "LookupValue": "UtilityRoom",
        "StandardLookupValue": "UtilityRoom",
        "LegacyOdataValue": "Utility Room"
    },
    {
        "LookupKey": "f951fce06bc150a985aaf5e7cd58a18830d5e882980ea200889f1a3e58b19f1b",
        "LookupName": "RoomType",
        "LookupValue": "Workshop",
        "StandardLookupValue": "Workshop",
        "LegacyOdataValue": "Workshop"
    },
    {
        "LookupKey": "a07b11c0830100958d040bc85476a9761c525e58d1b44f6b28ac1d00f741e6b2",
        "LookupName": "SecurityFeatures",
        "LookupValue": "BuildingSecurity",
        "StandardLookupValue": "BuildingSecurity",
        "LegacyOdataValue": "Building Security"
    },
    {
        "LookupKey": "ec8492ce1294e3dfe28ff925b22a99c6aca0d59813d3fe31f181879a6ee99262",
        "LookupName": "SecurityFeatures",
        "LookupValue": "CarbonMonoxideDetectors",
        "StandardLookupValue": "CarbonMonoxideDetectors",
        "LegacyOdataValue": "Carbon Monoxide Detectors"
    },
    {
        "LookupKey": "f2e8983c4c0af5614c058d86d1df7bda7e58a4ff5f59b8dbb376c80328eac42d",
        "LookupName": "SecurityFeatures",
        "LookupValue": "ClosedCircuitCameras",
        "StandardLookupValue": "ClosedCircuitCameras",
        "LegacyOdataValue": "Closed Circuit Cameras"
    },
    {
        "LookupKey": "3472123b77f70cfa3025678e5dd0a92f4528af32463350718c477a0c89ceac90",
        "LookupName": "SecurityFeatures",
        "LookupValue": "FireAlarm",
        "StandardLookupValue": "FireAlarm",
        "LegacyOdataValue": "Fire Alarm"
    },
    {
        "LookupKey": "c50270994917840ddd1d93b775f67ddfee1ff9886f5ad2509c25fc97800547d0",
        "LookupName": "SecurityFeatures",
        "LookupValue": "FireEscape",
        "StandardLookupValue": "FireEscape",
        "LegacyOdataValue": "Fire Escape"
    },
    {
        "LookupKey": "b19d76f684fd3aaaf363826a9cd6507830984266afb26f6625e8bd10d921ff80",
        "LookupName": "SecurityFeatures",
        "LookupValue": "FireSprinklerSystem",
        "StandardLookupValue": "FireSprinklerSystem",
        "LegacyOdataValue": "Fire Sprinkler System"
    },
    {
        "LookupKey": "ebd9fe1e55fb240875211537eb3ff7c7b295a5a70b97a1d14a76bfc668e04894",
        "LookupName": "SecurityFeatures",
        "LookupValue": "Firewalls",
        "StandardLookupValue": "Firewalls",
        "LegacyOdataValue": "Firewalls"
    },
    {
        "LookupKey": "acde5d8a69c9f3225ccd36643b1a4593ce5225cfd4e702a8e0036e44bdd9cd32",
        "LookupName": "SecurityFeatures",
        "LookupValue": "GatedCommunity",
        "StandardLookupValue": "GatedCommunity",
        "LegacyOdataValue": "Gated Community"
    },
    {
        "LookupKey": "2edb298f129e4701f31de9d2f34cb6318b6b5e9a9bcc535700a7c8a87ca18014",
        "LookupName": "SecurityFeatures",
        "LookupValue": "GatedWithGuard",
        "StandardLookupValue": "GatedWithGuard",
        "LegacyOdataValue": "Gated with Guard"
    },
    {
        "LookupKey": "6e84d39c03b2adf462151a4cecc591375e262ef74288a5ee503c3b4752d51c6a",
        "LookupName": "SecurityFeatures",
        "LookupValue": "KeyCardEntry",
        "StandardLookupValue": "KeyCardEntry",
        "LegacyOdataValue": "Key Card Entry"
    },
    {
        "LookupKey": "7c102197c2ba5d8bbf3ec9222111e5e6852625bb29fff1da403ddb8f0d65ead2",
        "LookupName": "SecurityFeatures",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "200b7798932b4d8aa615514bc4ed7fb5233e262920e453816cbe580858e2615b",
        "LookupName": "SecurityFeatures",
        "LookupValue": "PanicAlarm",
        "StandardLookupValue": "PanicAlarm",
        "LegacyOdataValue": "Panic Alarm"
    },
    {
        "LookupKey": "c824564fd7a802ed7a3fc9043f72f2bcbff7f35236c93be1ac31b85c2d38123f",
        "LookupName": "SecurityFeatures",
        "LookupValue": "Prewired",
        "StandardLookupValue": "Prewired",
        "LegacyOdataValue": "Prewired"
    },
    {
        "LookupKey": "de54dfa3ab704f8579a0e373009c514151266ebec0fc735a7f6f4470b7c1ac9d",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SecuredGarageParking",
        "StandardLookupValue": "SecuredGarageParking",
        "LegacyOdataValue": "Secured Garage/Parking"
    },
    {
        "LookupKey": "9df55795b627a00765016c6bc718e1011b19e74771915d96dba8f29446f80d3b",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SecurityFence",
        "StandardLookupValue": "SecurityFence",
        "LegacyOdataValue": "Security Fence"
    },
    {
        "LookupKey": "1084e13a96e7fd1d494c5a9e17f5f4b56472a3285dfcc0f86b36f4ac6f2e5a51",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SecurityGate",
        "StandardLookupValue": "SecurityGate",
        "LegacyOdataValue": "Security Gate"
    },
    {
        "LookupKey": "410977bcf46d7c5b7208bfe37418dd42ac1a7615c0093d7cc7bb2d733bf05817",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SecurityGuard",
        "StandardLookupValue": "SecurityGuard",
        "LegacyOdataValue": "Security Guard"
    },
    {
        "LookupKey": "8e6c41df0cc370df7d9e35a1b0432d23317851f770a4960e56d8d55e13c5f544",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SecurityLights",
        "StandardLookupValue": "SecurityLights",
        "LegacyOdataValue": "Security Lights"
    },
    {
        "LookupKey": "aa2ec61661b1753ff9a7e425ef0d666976cca7ceec0546e65dbe2caa94535598",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SecurityService",
        "StandardLookupValue": "SecurityService",
        "LegacyOdataValue": "Security Service"
    },
    {
        "LookupKey": "e2cbe1b3b40601045be8f936c5e6f05d10a8add721ed27dc0845a69a1f55bda0",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SecuritySystem",
        "StandardLookupValue": "SecuritySystem",
        "LegacyOdataValue": "Security System"
    },
    {
        "LookupKey": "56b5cd972d8461b853970d67e7a239341185a9dfd2315029df4602a114e837cd",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SecuritySystemLeased",
        "StandardLookupValue": "SecuritySystemLeased",
        "LegacyOdataValue": "Security System Leased"
    },
    {
        "LookupKey": "971dd18ff3e84d80ec0f1b4db361e1a32d97652fd651286c9f6e426c0fa82390",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SecuritySystemOwned",
        "StandardLookupValue": "SecuritySystemOwned",
        "LegacyOdataValue": "Security System Owned"
    },
    {
        "LookupKey": "4a635621e9ceb1f56fbb0ddbce31c732430d6693c4491ce34d1389ae46808d8b",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "26f7a402208d79ebb1c216aac5c5191a5fd8b9864bf2a8b15f6b464cdd382fb8",
        "LookupName": "SecurityFeatures",
        "LookupValue": "SmokeDetectors",
        "StandardLookupValue": "SmokeDetectors",
        "LegacyOdataValue": "Smoke Detectors"
    },
    {
        "LookupKey": "dc08b08a1498c707d49a54bd71a380bbfe507eedf029f1c7e508f195dd1364f1",
        "LookupName": "SecurityFeatures",
        "LookupValue": "TwentyFourHourSecurity",
        "StandardLookupValue": "TwentyFourHourSecurity",
        "LegacyOdataValue": "24 Hour Security"
    },
    {
        "LookupKey": "6d89d04e25d0d5176d240191f7cad8a6f1590045217e1e68f1720bf48dfa4fa0",
        "LookupName": "SecurityFeatures",
        "LookupValue": "VariesByUnit",
        "StandardLookupValue": "VariesByUnit",
        "LegacyOdataValue": "Varies By Unit"
    },
    {
        "LookupKey": "c7ba821fef3623c98f0c79b769380a94ffbbb7e5e6a5d875823eb7d92458623f",
        "LookupName": "SecurityFeatures",
        "LookupValue": "WindowBars",
        "StandardLookupValue": "WindowBars",
        "LegacyOdataValue": "Window Bars"
    },
    {
        "LookupKey": "39210a15d52d98171c5e95044fc0f528b1eebedd76e2268cf9553f7f4cc458ea",
        "LookupName": "SecurityFeatures",
        "LookupValue": "WindowBarsWithQuickRelease",
        "StandardLookupValue": "WindowBarsWithQuickRelease",
        "LegacyOdataValue": "Window Bars with Quick Release"
    },
    {
        "LookupKey": "c0260b8ab6cbe92dd80c25e2d5df98509d3c99d44ff7526c1b5d200090649a3c",
        "LookupName": "Sewer",
        "LookupValue": "AerobicSeptic",
        "StandardLookupValue": "AerobicSeptic",
        "LegacyOdataValue": "Aerobic Septic"
    },
    {
        "LookupKey": "78363ca21babb6e21bd7d4b0f30ca7bc1fcd48bd6d0c31201d17ffd3e9ef7819",
        "LookupName": "Sewer",
        "LookupValue": "Cesspool",
        "StandardLookupValue": "Cesspool",
        "LegacyOdataValue": "Cesspool"
    },
    {
        "LookupKey": "aa1b384e2c3cf89206b7db47e86cbe9d9afbc690eb932a7ba9768815a39032df",
        "LookupName": "Sewer",
        "LookupValue": "EngineeredSeptic",
        "StandardLookupValue": "EngineeredSeptic",
        "LegacyOdataValue": "Engineered Septic"
    },
    {
        "LookupKey": "3f681307302b20e0df721d840598b24d0c0b42dfdcf8a31832dc3c12d14e9cbc",
        "LookupName": "Sewer",
        "LookupValue": "HoldingTank",
        "StandardLookupValue": "HoldingTank",
        "LegacyOdataValue": "Holding Tank"
    },
    {
        "LookupKey": "929ae056f82488ab7620ee0a392384ee6a45316ff78a721e90e3cadcb0ce8c4a",
        "LookupName": "Sewer",
        "LookupValue": "MoundSeptic",
        "StandardLookupValue": "MoundSeptic",
        "LegacyOdataValue": "Mound Septic"
    },
    {
        "LookupKey": "c9d8868e7543bb38c8dfb642185ee360003d5cd712f0d5f4da09b942ee5a6f2d",
        "LookupName": "Sewer",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "ff0a157ba6f37a31c8e81e5203f10fd70ba3925a6ef6ce4bf8c438a5473a5ec7",
        "LookupName": "Sewer",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "8abf8a95292d3de891359375be39a1c4ecad20ef6c7cfee69f1f9da60ba76492",
        "LookupName": "Sewer",
        "LookupValue": "PercTestOnFile",
        "StandardLookupValue": "PercTestOnFile",
        "LegacyOdataValue": "Perc Test On File"
    },
    {
        "LookupKey": "f734b689efe8b5e83300ea066f458a4fb42bd82aaf37b9ee44527d8119214407",
        "LookupName": "Sewer",
        "LookupValue": "PercTestRequired",
        "StandardLookupValue": "PercTestRequired",
        "LegacyOdataValue": "Perc Test Required"
    },
    {
        "LookupKey": "cdf79ef13670ffe1eb09c3e46c4c93c4d44adb90abe146cd9c57f9477e854d7a",
        "LookupName": "Sewer",
        "LookupValue": "PrivateSewer",
        "StandardLookupValue": "PrivateSewer",
        "LegacyOdataValue": "Private Sewer"
    },
    {
        "LookupKey": "8208a0da403e153f3675e1d1e5361bb7d20a5902b58e87f92dd8dcc22a418356",
        "LookupName": "Sewer",
        "LookupValue": "PublicSewer",
        "StandardLookupValue": "PublicSewer",
        "LegacyOdataValue": "Public Sewer"
    },
    {
        "LookupKey": "08ddc730f1d5389eb04e8aedd4e79ef072177ab4a070174568492f28eeacd29b",
        "LookupName": "Sewer",
        "LookupValue": "SepticNeeded",
        "StandardLookupValue": "SepticNeeded",
        "LegacyOdataValue": "Septic Needed"
    },
    {
        "LookupKey": "f3e88219ed8f0a899ef0c26e65a3fc0cc0b071c8d2878661d05050d654d2e14d",
        "LookupName": "Sewer",
        "LookupValue": "SepticTank",
        "StandardLookupValue": "SepticTank",
        "LegacyOdataValue": "Septic Tank"
    },
    {
        "LookupKey": "a794082613ebdaf8a775139a6a8ab35da4e30347444a0d4681fd839ae377fcbc",
        "LookupName": "Sewer",
        "LookupValue": "SharedSeptic",
        "StandardLookupValue": "SharedSeptic",
        "LegacyOdataValue": "Shared Septic"
    },
    {
        "LookupKey": "2bcf1b75c2e649f397812651368ad3788b9e34123eca4464a3014ef4a7132088",
        "LookupName": "Sewer",
        "LookupValue": "Unknown",
        "StandardLookupValue": "Unknown",
        "LegacyOdataValue": "Unknown"
    },
    {
        "LookupKey": "f3ea916e0b0095288409d7ba2a0d3700e4ee8f355fb274403aa7827e2ee5bee2",
        "LookupName": "ShowingContactType",
        "LookupValue": "Agent",
        "StandardLookupValue": "Agent",
        "LegacyOdataValue": "Agent"
    },
    {
        "LookupKey": "82d31b719d90eefcc4119f7ded49a2ad6f321ede5ae64f5d8c466865889de223",
        "LookupName": "ShowingContactType",
        "LookupValue": "Occupant",
        "StandardLookupValue": "Occupant",
        "LegacyOdataValue": "Occupant"
    },
    {
        "LookupKey": "ec1e7546c82b97613122fb5d0864afa844b0cae689b6a30de2e80946856bec80",
        "LookupName": "ShowingContactType",
        "LookupValue": "Owner",
        "StandardLookupValue": "Owner",
        "LegacyOdataValue": "Owner"
    },
    {
        "LookupKey": "b474df97e138253103a079500cf665c6f59298f50037733728994e1bfc890bea",
        "LookupName": "ShowingContactType",
        "LookupValue": "PropertyManager",
        "StandardLookupValue": "PropertyManager",
        "LegacyOdataValue": "Property Manager"
    },
    {
        "LookupKey": "e3c838e6c97a35df07b808a0d0b078faf99a3112be32ba256e563866bd404561",
        "LookupName": "ShowingRequirements",
        "LookupValue": "AppointmentOnly",
        "StandardLookupValue": "AppointmentOnly",
        "LegacyOdataValue": "Appointment Only"
    },
    {
        "LookupKey": "0663d05e2775bdc8d1a3a45d88f30ccab46f5632170793d67fe4a54250cda1a7",
        "LookupName": "ShowingRequirements",
        "LookupValue": "CallListingAgent",
        "StandardLookupValue": "CallListingAgent",
        "LegacyOdataValue": "Call Listing Agent"
    },
    {
        "LookupKey": "1da807e27861b72fc7948f72ca88fbfcbd3346d331fafd72f74fe893c286986d",
        "LookupName": "ShowingRequirements",
        "LookupValue": "CallListingOffice",
        "StandardLookupValue": "CallListingOffice",
        "LegacyOdataValue": "Call Listing Office"
    },
    {
        "LookupKey": "1738633d95f1a12b6501324eac3c502339dc1416b75c91bde8411f74e1ff6915",
        "LookupName": "ShowingRequirements",
        "LookupValue": "CallManager",
        "StandardLookupValue": "CallManager",
        "LegacyOdataValue": "Call Manager"
    },
    {
        "LookupKey": "7f5d24ae1358077f4cad1754e7548c4ae72c352a5a293446a68c780025b88814",
        "LookupName": "ShowingRequirements",
        "LookupValue": "CallOwner",
        "StandardLookupValue": "CallOwner",
        "LegacyOdataValue": "Call Owner"
    },
    {
        "LookupKey": "95c9ec25b333943531fdd9a49d6f0e997000deb79f91a8d388232f8c7aa6284f",
        "LookupName": "ShowingRequirements",
        "LookupValue": "CallTenant",
        "StandardLookupValue": "CallTenant",
        "LegacyOdataValue": "Call Tenant"
    },
    {
        "LookupKey": "614682ea60da41fc227dcc8f10a02f8e0f600a8d9c810880b8a98c94df52a827",
        "LookupName": "ShowingRequirements",
        "LookupValue": "CombinationLockBox",
        "StandardLookupValue": "CombinationLockBox",
        "LegacyOdataValue": "Combination Lock Box"
    },
    {
        "LookupKey": "f2df4fdf95192858bcbbe72efb0cef8e82d4613736482d16d947e3571bc3a929",
        "LookupName": "ShowingRequirements",
        "LookupValue": "DaySleeper",
        "StandardLookupValue": "DaySleeper",
        "LegacyOdataValue": "Day Sleeper"
    },
    {
        "LookupKey": "4736a632585c4d2558e92a96780ba1dbb5d1582456292f20087c51a49274e0e4",
        "LookupName": "ShowingRequirements",
        "LookupValue": "DoNotShow",
        "StandardLookupValue": "DoNotShow",
        "LegacyOdataValue": "Do Not Show"
    },
    {
        "LookupKey": "33b562aadd2abbccef2576f044f3573d0231831031711d20aa803dd734b34ef4",
        "LookupName": "ShowingRequirements",
        "LookupValue": "EmailListingAgent",
        "StandardLookupValue": "EmailListingAgent",
        "LegacyOdataValue": "Email Listing Agent"
    },
    {
        "LookupKey": "7e50494ab695cd0f760a8a07fb69fa2771b4360dfc50fc1566b4690751804e6e",
        "LookupName": "ShowingRequirements",
        "LookupValue": "KeyInOffice",
        "StandardLookupValue": "KeyInOffice",
        "LegacyOdataValue": "Key In Office"
    },
    {
        "LookupKey": "a37953916ce0f4758d8db8f239188be7bd1cd426c3cfee1331b70e635eff8246",
        "LookupName": "ShowingRequirements",
        "LookupValue": "Lockbox",
        "StandardLookupValue": "Lockbox",
        "LegacyOdataValue": "Lockbox"
    },
    {
        "LookupKey": "cceb602d31fcfb4d4f8af63811cfa555501f377a55efa2ffb397a66fd40f32bc",
        "LookupName": "ShowingRequirements",
        "LookupValue": "NoLockbox",
        "StandardLookupValue": "NoLockbox",
        "LegacyOdataValue": "No Lockbox"
    },
    {
        "LookupKey": "d7306e3f3a48e0d93d611546e90e9b21d1b9d6a0513ce761acc65d9f1000d8a6",
        "LookupName": "ShowingRequirements",
        "LookupValue": "NoSign",
        "StandardLookupValue": "NoSign",
        "LegacyOdataValue": "No Sign"
    },
    {
        "LookupKey": "28a074bfc9b3e974c8dfecad551fca3d31f2fa8ea0a65166213766f3c248cbae",
        "LookupName": "ShowingRequirements",
        "LookupValue": "Occupied",
        "StandardLookupValue": "Occupied",
        "LegacyOdataValue": "Occupied"
    },
    {
        "LookupKey": "c07b1f7515d670573eace1311212721e3b161fe7e8292e72d7a2bd6c94e11a86",
        "LookupName": "ShowingRequirements",
        "LookupValue": "PetsOnPremises",
        "StandardLookupValue": "PetsOnPremises",
        "LegacyOdataValue": "Pets on Premises"
    },
    {
        "LookupKey": "4cb5450bf02cf21d5712ec0a751020660341cffce5ef584365b76d08e55cb480",
        "LookupName": "ShowingRequirements",
        "LookupValue": "RestrictedHours",
        "StandardLookupValue": "RestrictedHours",
        "LegacyOdataValue": "Restricted Hours"
    },
    {
        "LookupKey": "82901a294ff9889119bdb62d1918bd0e2cbaf2d7ed6f93651e43bbc9cf2872dc",
        "LookupName": "ShowingRequirements",
        "LookupValue": "SecuritySystem",
        "StandardLookupValue": "SecuritySystem",
        "LegacyOdataValue": "Security System"
    },
    {
        "LookupKey": "4c929b9be44777bc06229e065d0cb77813a85d47ecd36a433069685b2abbe437",
        "LookupName": "ShowingRequirements",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "c8367d5bbd5186a8f975323430f2e764d5faa9e470addbe15f17fb1de92febb6",
        "LookupName": "ShowingRequirements",
        "LookupValue": "ShowingService",
        "StandardLookupValue": "ShowingService",
        "LegacyOdataValue": "Showing Service"
    },
    {
        "LookupKey": "a83336a4b4958d47c2bad761ea865d128eaf6caad472c35449bd377a65502a0e",
        "LookupName": "ShowingRequirements",
        "LookupValue": "TextListingAgent",
        "StandardLookupValue": "TextListingAgent",
        "LegacyOdataValue": "Text Listing Agent"
    },
    {
        "LookupKey": "04598aee5833d95f4e67b2befe40c7731e5adfe2822507601de7cd4984bdc973",
        "LookupName": "ShowingRequirements",
        "LookupValue": "ToBeBuilt",
        "StandardLookupValue": "ToBeBuilt",
        "LegacyOdataValue": "To Be Built"
    },
    {
        "LookupKey": "eaa5ba53d12d547eb1b58f3eab7a91f36e87ca8ebfd00a11946d5d61adb629db",
        "LookupName": "ShowingRequirements",
        "LookupValue": "TwentyFourHourNotice",
        "StandardLookupValue": "TwentyFourHourNotice",
        "LegacyOdataValue": "24 Hour Notice"
    },
    {
        "LookupKey": "313c4c18d7c3b0db29d91d0d7f2291897d89472cd7fb6c85e7827eaed56aab65",
        "LookupName": "ShowingRequirements",
        "LookupValue": "UnderConstruction",
        "StandardLookupValue": "UnderConstruction",
        "LegacyOdataValue": "Under Construction"
    },
    {
        "LookupKey": "46db26e79f480f92570a263f59faec8e04fcc44fffd002a6e5b964520c51f9d3",
        "LookupName": "Skirt",
        "LookupValue": "Aluminum",
        "StandardLookupValue": "Aluminum",
        "LegacyOdataValue": "Aluminum"
    },
    {
        "LookupKey": "91ec95134ed9c7c5d242e617af28873ac75b26a9de959a5c2d37b26a1da71b4a",
        "LookupName": "Skirt",
        "LookupValue": "Block",
        "StandardLookupValue": "Block",
        "LegacyOdataValue": "Block"
    },
    {
        "LookupKey": "37cf28f517049365da230b1504c744931ebd40ff58303a84035eef6625201438",
        "LookupName": "Skirt",
        "LookupValue": "Brick",
        "StandardLookupValue": "Brick",
        "LegacyOdataValue": "Brick"
    },
    {
        "LookupKey": "96a4720c11d028be40233139eac8cab55fca1be033d6141097337c59f0a7ffd4",
        "LookupName": "Skirt",
        "LookupValue": "Combination",
        "StandardLookupValue": "Combination",
        "LegacyOdataValue": "Combination"
    },
    {
        "LookupKey": "27994547146637cd0999431d3e00214c2b2c9fd0be0d4db8a83cb28dcb10ce97",
        "LookupName": "Skirt",
        "LookupValue": "Concrete",
        "StandardLookupValue": "Concrete",
        "LegacyOdataValue": "Concrete"
    },
    {
        "LookupKey": "9b46b116ccb627e4785e5f0026a687343661f73df9565ac49341cd87e08a3978",
        "LookupName": "Skirt",
        "LookupValue": "Fiberglass",
        "StandardLookupValue": "Fiberglass",
        "LegacyOdataValue": "Fiberglass"
    },
    {
        "LookupKey": "4811d31aa78d1fbcb320f147ada75d62cf512ae4f48ca2d80d1a7e910b4a5694",
        "LookupName": "Skirt",
        "LookupValue": "Frame",
        "StandardLookupValue": "Frame",
        "LegacyOdataValue": "Frame"
    },
    {
        "LookupKey": "059ede16d12caefb8b435c2e34dd53b7940b68bf6c96df93e269534e6c912bc0",
        "LookupName": "Skirt",
        "LookupValue": "Glass",
        "StandardLookupValue": "Glass",
        "LegacyOdataValue": "Glass"
    },
    {
        "LookupKey": "fb36b0f4a533729b9e6c63be8f492bf4f6719cdaf93cb2c05cdc1737346bdfde",
        "LookupName": "Skirt",
        "LookupValue": "Masonite",
        "StandardLookupValue": "Masonite",
        "LegacyOdataValue": "Masonite"
    },
    {
        "LookupKey": "4dba70c63c4dad8f076bf03a2c9b618b07f26de85389a7eb28adea057a485592",
        "LookupName": "Skirt",
        "LookupValue": "Metal",
        "StandardLookupValue": "Metal",
        "LegacyOdataValue": "Metal"
    },
    {
        "LookupKey": "b1eb6bc9aa2be371132672f2b3d39a297623b0902448707fab88353d0611ac53",
        "LookupName": "Skirt",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "e690d407378bddce214ae7c54b983fa0a1a2e167d325967c7561240abe95e1b1",
        "LookupName": "Skirt",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "716ed1f3d978f3a5eaf0d92142fa8d1f3cab4dc4270f2e659a6bf29d3f58c8c7",
        "LookupName": "Skirt",
        "LookupValue": "Steel",
        "StandardLookupValue": "Steel",
        "LegacyOdataValue": "Steel"
    },
    {
        "LookupKey": "bb22f7a463f4273824d7fd4f03bd4fb8dbd89ef36a9da56149a55dbe627a976a",
        "LookupName": "Skirt",
        "LookupValue": "Stone",
        "StandardLookupValue": "Stone",
        "LegacyOdataValue": "Stone"
    },
    {
        "LookupKey": "307c2e2da0ca4849cc2bcb5e353bbbeb4829c2ec425dd0ee89cd295d54c02959",
        "LookupName": "Skirt",
        "LookupValue": "Stucco",
        "StandardLookupValue": "Stucco",
        "LegacyOdataValue": "Stucco"
    },
    {
        "LookupKey": "297ef915c5ada4e1222e03ea52e783bbd61c2014fa9db7230aae4cee72c4a19e",
        "LookupName": "Skirt",
        "LookupValue": "Synthetic",
        "StandardLookupValue": "Synthetic",
        "LegacyOdataValue": "Synthetic"
    },
    {
        "LookupKey": "f9832aca848ea94b240c1d5e7f5edfa87d125fbea8709062ca5e67028f0ed171",
        "LookupName": "Skirt",
        "LookupValue": "Unknown",
        "StandardLookupValue": "Unknown",
        "LegacyOdataValue": "Unknown"
    },
    {
        "LookupKey": "ec67dcfba4c7231aba8b1899f3298e794e728ed4bf3508a0924ef0a4c6b6dbff",
        "LookupName": "Skirt",
        "LookupValue": "Vinyl",
        "StandardLookupValue": "Vinyl",
        "LegacyOdataValue": "Vinyl"
    },
    {
        "LookupKey": "6f45a0b8b255cbfda371686636e8b6305327bc76abd57d14b5f82dbcc4fffd42",
        "LookupName": "Skirt",
        "LookupValue": "Wood",
        "StandardLookupValue": "Wood",
        "LegacyOdataValue": "Wood"
    },
    {
        "LookupKey": "31753d7f3e5824073eab40bdb9e40be48f4f743f06df08818a04ca7e62347b75",
        "LookupName": "SpaFeatures",
        "LookupValue": "AboveGround",
        "StandardLookupValue": "AboveGround",
        "LegacyOdataValue": "Above Ground"
    },
    {
        "LookupKey": "590d00de6adfb9e7d24bec4ff974d14439d879351b80281c518b9b8247067673",
        "LookupName": "SpaFeatures",
        "LookupValue": "Bath",
        "StandardLookupValue": "Bath",
        "LegacyOdataValue": "Bath"
    },
    {
        "LookupKey": "fbcffecadfaa38a9ca2e362aeef7efa5164cc52bfe45d758c4fa8790c7f2de90",
        "LookupName": "SpaFeatures",
        "LookupValue": "Community",
        "StandardLookupValue": "Community",
        "LegacyOdataValue": "Community"
    },
    {
        "LookupKey": "53e76e924706c0148d73013085bf8f03ed38cddf8877b46722d60446458cd3fd",
        "LookupName": "SpaFeatures",
        "LookupValue": "Fiberglass",
        "StandardLookupValue": "Fiberglass",
        "LegacyOdataValue": "Fiberglass"
    },
    {
        "LookupKey": "053db0084353bf9abd58ef23f27b936526d4bfa9cf7789aa3c2e568284e4ec86",
        "LookupName": "SpaFeatures",
        "LookupValue": "Gunite",
        "StandardLookupValue": "Gunite",
        "LegacyOdataValue": "Gunite"
    },
    {
        "LookupKey": "90e786f1e8c3775bfa3a6ff5cb949566fd45c107e9577015ef2240c984466098",
        "LookupName": "SpaFeatures",
        "LookupValue": "Heated",
        "StandardLookupValue": "Heated",
        "LegacyOdataValue": "Heated"
    },
    {
        "LookupKey": "b9ea894797be960e287a1131247048d3bb279f6eea822335f7404c8016205868",
        "LookupName": "SpaFeatures",
        "LookupValue": "InGround",
        "StandardLookupValue": "InGround",
        "LegacyOdataValue": "In Ground"
    },
    {
        "LookupKey": "e54281d5daa52bea8ffa03051527c219658f5d4dbe70317087a029c54d383885",
        "LookupName": "SpaFeatures",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "5a2230f1fabf9b295cbb399ab8634626873710008d49366257405e63ce69800c",
        "LookupName": "SpaFeatures",
        "LookupValue": "Private",
        "StandardLookupValue": "Private",
        "LegacyOdataValue": "Private"
    },
    {
        "LookupKey": "8c2256a2096be9e837d65fecb34d73e92ab7f5709410da0d25a6826a946464a8",
        "LookupName": "SpaFeatures",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "87bc5ac89e26746e4652de1de9494e2640bb08d49661b67aac7524f6f20e6fce",
        "LookupName": "SpecialLicenses",
        "LookupValue": "BeerWine",
        "StandardLookupValue": "BeerWine",
        "LegacyOdataValue": "Beer/Wine"
    },
    {
        "LookupKey": "e277480681547cc0d31f91ce7c5ad954b6fb9150bdf84467153a1ec052a014a9",
        "LookupName": "SpecialLicenses",
        "LookupValue": "ClassH",
        "StandardLookupValue": "ClassH",
        "LegacyOdataValue": "Class H"
    },
    {
        "LookupKey": "1f59e3f4a71ddcb0758b6db781f54400f9a56b433e2f39bb72faab8141a0b055",
        "LookupName": "SpecialLicenses",
        "LookupValue": "Entertainment",
        "StandardLookupValue": "Entertainment",
        "LegacyOdataValue": "Entertainment"
    },
    {
        "LookupKey": "c10116545227d5cd1f34d95e15b0dae038192219a3ab360811eeb73556ece347",
        "LookupName": "SpecialLicenses",
        "LookupValue": "Franchise",
        "StandardLookupValue": "Franchise",
        "LegacyOdataValue": "Franchise"
    },
    {
        "LookupKey": "1b8286f44f024fda2daf49f2705e51917ed16819ffd78311077fa34f06d773b5",
        "LookupName": "SpecialLicenses",
        "LookupValue": "Gambling",
        "StandardLookupValue": "Gambling",
        "LegacyOdataValue": "Gambling"
    },
    {
        "LookupKey": "578f82761d2e6688e7057c7efae6ebc4f31639c7d802acdc53b099f2213bafbc",
        "LookupName": "SpecialLicenses",
        "LookupValue": "Liquor",
        "StandardLookupValue": "Liquor",
        "LegacyOdataValue": "Liquor"
    },
    {
        "LookupKey": "bcc18dccda772bce77642befd13fbd6449be710011ec1ec3bf89cf0a00b9efdf",
        "LookupName": "SpecialLicenses",
        "LookupValue": "Liquor5YearsOrLess",
        "StandardLookupValue": "Liquor5YearsOrLess",
        "LegacyOdataValue": "Liquor 5 Years Or Less"
    },
    {
        "LookupKey": "8b53d66bc3d98756c9dbb11f6ddb36ef6ec50f4c55f6a6443b704180108383d8",
        "LookupName": "SpecialLicenses",
        "LookupValue": "Liquor5YearsOrMore",
        "StandardLookupValue": "Liquor5YearsOrMore",
        "LegacyOdataValue": "Liquor 5 Years Or More"
    },
    {
        "LookupKey": "2cec26c12807ba4425de4b6e4200f28a1d655989b889d4cc225ccb58d07b59ed",
        "LookupName": "SpecialLicenses",
        "LookupValue": "LiquorOffSale",
        "StandardLookupValue": "LiquorOffSale",
        "LegacyOdataValue": "Liquor-Off Sale"
    },
    {
        "LookupKey": "7ae1090900481f3d5bc7dbb4ea6258c8500b7c524b9ba535198275a5bf821ca0",
        "LookupName": "SpecialLicenses",
        "LookupValue": "LiquorOnSale",
        "StandardLookupValue": "LiquorOnSale",
        "LegacyOdataValue": "Liquor-On Sale"
    },
    {
        "LookupKey": "a605978b4b42c7bb89e2e0d53f89a602e17bb5612701ebfda520eb234edb6c09",
        "LookupName": "SpecialLicenses",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "9135ac90f1056145d91770dff9ec0c888a95de372ffc1c8b7a2b99445ef679cf",
        "LookupName": "SpecialLicenses",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "cfdaade8193e01e63dcf690b88275bd1c9768059fbe7c758bba5f006999fb66b",
        "LookupName": "SpecialLicenses",
        "LookupValue": "Professional",
        "StandardLookupValue": "Professional",
        "LegacyOdataValue": "Professional"
    },
    {
        "LookupKey": "ef6105c8bbccf557d3ea04629405b5506244ce12f6a7896c8637a26ebfc57a6e",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "Auction",
        "StandardLookupValue": "Auction",
        "LegacyOdataValue": "Auction"
    },
    {
        "LookupKey": "664fd5bdb47e3bc1a751f22a95b0f1ce2d461d6ca9e7f12acbf63e8a618a3287",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "BankruptcyProperty",
        "StandardLookupValue": "BankruptcyProperty",
        "LegacyOdataValue": "Bankruptcy Property"
    },
    {
        "LookupKey": "a7a1684b72b21ca74eba54039ba4b0ebeb43ab6521eeb59bba6a9254ba79f479",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "HudOwned",
        "StandardLookupValue": "HudOwned",
        "LegacyOdataValue": "HUD Owned"
    },
    {
        "LookupKey": "c2eee3258244353343d77704716e64168bc7a9dcef2dcd7ad7c80ef5432df6b6",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "InForeclosure",
        "StandardLookupValue": "InForeclosure",
        "LegacyOdataValue": "In Foreclosure"
    },
    {
        "LookupKey": "bc433cefeabe7b65acc01b6ca179a2ace0fefbaac1b1ac91008b7776b321740d",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "NoticeOfDefault",
        "StandardLookupValue": "NoticeOfDefault",
        "LegacyOdataValue": "Notice Of Default"
    },
    {
        "LookupKey": "af64f3a8104c9444558b5451b9db90fae9b5c3d72c9afd9f1ae9311fe1b50799",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "ProbateListing",
        "StandardLookupValue": "ProbateListing",
        "LegacyOdataValue": "Probate Listing"
    },
    {
        "LookupKey": "59b66fc381d1d7c5f036f1ac8d06b75bfdcbc501a0dbf234c50cc13ade48307c",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "RealEstateOwned",
        "StandardLookupValue": "RealEstateOwned",
        "LegacyOdataValue": "Real Estate Owned"
    },
    {
        "LookupKey": "54622335f43842b2df1076fa6d1c69cf56b563d26e3edfe554100e389d9fbf29",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "ShortSale",
        "StandardLookupValue": "ShortSale",
        "LegacyOdataValue": "Short Sale"
    },
    {
        "LookupKey": "a202777d12ef15afad344ca509d4422e2f9e25dd40dd7547d3625de63197a07d",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "Standard",
        "StandardLookupValue": "Standard",
        "LegacyOdataValue": "Standard"
    },
    {
        "LookupKey": "a7e220ca87c6a11fd8a52ad89dca08c3ea919d360e7f77c4983daf831e737b33",
        "LookupName": "SpecialListingConditions",
        "LookupValue": "ThirdPartyApproval",
        "StandardLookupValue": "ThirdPartyApproval",
        "LegacyOdataValue": "Third Party Approval"
    },
    {
        "LookupKey": "e44fb9b44c01db5ffda095a34903fca1fe8c04acbc111edb76c86b14cff9c505",
        "LookupName": "StandardStatus",
        "LookupValue": "Active",
        "StandardLookupValue": "Active",
        "LegacyOdataValue": "Active"
    },
    {
        "LookupKey": "3eae35396896c9c122fe56f5f348ac0a74d94d6de9a68b9a166b34b4b75a9d1c",
        "LookupName": "StandardStatus",
        "LookupValue": "ActiveUnderContract",
        "StandardLookupValue": "ActiveUnderContract",
        "LegacyOdataValue": "Active Under Contract"
    },
    {
        "LookupKey": "b5513dbb5fde628f1667b9d8840a6307cf4568f0f5900c603726ac7e8391a44a",
        "LookupName": "StandardStatus",
        "LookupValue": "Canceled",
        "StandardLookupValue": "Canceled",
        "LegacyOdataValue": "Canceled"
    },
    {
        "LookupKey": "92f25867512dee088601f9b2eac5f4f2d7898834c8e0764fa38103ad2ffba838",
        "LookupName": "StandardStatus",
        "LookupValue": "Closed",
        "StandardLookupValue": "Closed",
        "LegacyOdataValue": "Closed"
    },
    {
        "LookupKey": "08c0223aaa78c78246d8b199588bc9c4e9c891750183a12fdc207b5b71b43196",
        "LookupName": "StandardStatus",
        "LookupValue": "ComingSoon",
        "StandardLookupValue": "ComingSoon",
        "LegacyOdataValue": "Coming Soon"
    },
    {
        "LookupKey": "b81d64b7d3392a2dccdff0c9e9f647f9006cc8010040007a544a5321d2a43658",
        "LookupName": "StandardStatus",
        "LookupValue": "Delete",
        "StandardLookupValue": "Delete",
        "LegacyOdataValue": "Delete"
    },
    {
        "LookupKey": "5d39bf9533cf35b571dfa2ff35e3b3b29a7e9bbb4819a2b99ae6aa0d96dbfb01",
        "LookupName": "StandardStatus",
        "LookupValue": "Expired",
        "StandardLookupValue": "Expired",
        "LegacyOdataValue": "Expired"
    },
    {
        "LookupKey": "367d12d151739a27ba0538f58328cd054ab517dad0d8785a1d9a494d1c33bbae",
        "LookupName": "StandardStatus",
        "LookupValue": "Hold",
        "StandardLookupValue": "Hold",
        "LegacyOdataValue": "Hold"
    },
    {
        "LookupKey": "0a7796279bbd3a90c8617d2ee9f48a678014db13f8fd5c8f885bd8cf4ee2c580",
        "LookupName": "StandardStatus",
        "LookupValue": "Incomplete",
        "StandardLookupValue": "Incomplete",
        "LegacyOdataValue": "Incomplete"
    },
    {
        "LookupKey": "dd08672ad3e08aef72f89a446a4b43b4c10b17957bba354f5b4a77cd8a235190",
        "LookupName": "StandardStatus",
        "LookupValue": "Pending",
        "StandardLookupValue": "Pending",
        "LegacyOdataValue": "Pending"
    },
    {
        "LookupKey": "adcd2182839255760b8bc16822bdc57386f6d92a0bfeb950efd1c9bc3448d8b1",
        "LookupName": "StandardStatus",
        "LookupValue": "Withdrawn",
        "StandardLookupValue": "Withdrawn",
        "LegacyOdataValue": "Withdrawn"
    },
    {
        "LookupKey": "4924b7be51740bdeaeecfe309f6fe3266b9b17efbf5e184d9ce0ca1f723bd20e",
        "LookupName": "StateOrProvince",
        "LookupValue": "AB",
        "StandardLookupValue": "AB",
        "LegacyOdataValue": "AB"
    },
    {
        "LookupKey": "44624d49af4e47e1b23965d2108978fbf05d2423dbf984ff3a5377ab47957932",
        "LookupName": "StateOrProvince",
        "LookupValue": "AK",
        "StandardLookupValue": "AK",
        "LegacyOdataValue": "AK"
    },
    {
        "LookupKey": "d340547460443d9cefa88e1ae3e4dc3702daea4aa6ae218a236844986e7eaf4c",
        "LookupName": "StateOrProvince",
        "LookupValue": "AL",
        "StandardLookupValue": "AL",
        "LegacyOdataValue": "AL"
    },
    {
        "LookupKey": "10661c4f748b91ca92a927f37d0c5e06f9c4e49b6c86baa9cb1462e2ae3b6335",
        "LookupName": "StateOrProvince",
        "LookupValue": "AR",
        "StandardLookupValue": "AR",
        "LegacyOdataValue": "AR"
    },
    {
        "LookupKey": "9c8c8f360c2c571addea49c59e072240cd7d27e2f243ca923dd29c17779aa32c",
        "LookupName": "StateOrProvince",
        "LookupValue": "AZ",
        "StandardLookupValue": "AZ",
        "LegacyOdataValue": "AZ"
    },
    {
        "LookupKey": "bc9a1cd7eb85e403a8c9715083ab34bb47c66f5bd2fce55d70846668ab8ad6c3",
        "LookupName": "StateOrProvince",
        "LookupValue": "BC",
        "StandardLookupValue": "BC",
        "LegacyOdataValue": "BC"
    },
    {
        "LookupKey": "fe4e881910b9ddb7cdb230c9ce31741f5bf4ca7fe11896346e2129c4e4acead8",
        "LookupName": "StateOrProvince",
        "LookupValue": "CA",
        "StandardLookupValue": "CA",
        "LegacyOdataValue": "CA"
    },
    {
        "LookupKey": "ee31c4699ca1b72cb0c480500a52a6d4d7f46049fb83d6c0bf59b16b1d6c5edc",
        "LookupName": "StateOrProvince",
        "LookupValue": "CO",
        "StandardLookupValue": "CO",
        "LegacyOdataValue": "CO"
    },
    {
        "LookupKey": "c8e4bcbc5f5b1b475fbc69d63d65fe499d3933192406e00d4896bcb749df72a3",
        "LookupName": "StateOrProvince",
        "LookupValue": "CT",
        "StandardLookupValue": "CT",
        "LegacyOdataValue": "CT"
    },
    {
        "LookupKey": "3660cf1ee16c7b878dd608cb2b7e474da67ec71b724c402cd5b1e533be341a63",
        "LookupName": "StateOrProvince",
        "LookupValue": "DC",
        "StandardLookupValue": "DC",
        "LegacyOdataValue": "DC"
    },
    {
        "LookupKey": "22f3a82153b1f601d908eb20bc272e53cef3a7bfd08365fb5594ed4d749ba9da",
        "LookupName": "StateOrProvince",
        "LookupValue": "DE",
        "StandardLookupValue": "DE",
        "LegacyOdataValue": "DE"
    },
    {
        "LookupKey": "4ad0ddf7b48794ee54008e1770068763423855b13a0ac6b7a165bbd78138c434",
        "LookupName": "StateOrProvince",
        "LookupValue": "FL",
        "StandardLookupValue": "FL",
        "LegacyOdataValue": "FL"
    },
    {
        "LookupKey": "d0c6bc05efb8efb050b334bc480abb86773f6c952960be91033fbcdab864bdf6",
        "LookupName": "StateOrProvince",
        "LookupValue": "GA",
        "StandardLookupValue": "GA",
        "LegacyOdataValue": "GA"
    },
    {
        "LookupKey": "85d946e1ca04abf13f333fd8b5c092dee113be7d28a3995d215cabfe1d78aae0",
        "LookupName": "StateOrProvince",
        "LookupValue": "HI",
        "StandardLookupValue": "HI",
        "LegacyOdataValue": "HI"
    },
    {
        "LookupKey": "479b75b067c2893f2496b81fbb281023f2a9332305a1307c4fa4a7bde61d8875",
        "LookupName": "StateOrProvince",
        "LookupValue": "IA",
        "StandardLookupValue": "IA",
        "LegacyOdataValue": "IA"
    },
    {
        "LookupKey": "a6d4a679ed25a112a703d75e7dd3c4b10154f9a375b6cc2ce6d714caea0137e2",
        "LookupName": "StateOrProvince",
        "LookupValue": "ID",
        "StandardLookupValue": "ID",
        "LegacyOdataValue": "ID"
    },
    {
        "LookupKey": "a89ed5d75260460cc9c41ea6d476b459b61e3bf99e13a9f0c50a28ef6eb576fe",
        "LookupName": "StateOrProvince",
        "LookupValue": "IL",
        "StandardLookupValue": "IL",
        "LegacyOdataValue": "IL"
    },
    {
        "LookupKey": "6d3b8899cc26eb1a1298ad316fc5e851c7e86779a296759c3c7342a2dadbcbdd",
        "LookupName": "StateOrProvince",
        "LookupValue": "IN",
        "StandardLookupValue": "IN",
        "LegacyOdataValue": "IN"
    },
    {
        "LookupKey": "2f3a84595858ade6510737e7f3bb41b45052b2f031e7601cb6dd041eb2a41fe7",
        "LookupName": "StateOrProvince",
        "LookupValue": "KS",
        "StandardLookupValue": "KS",
        "LegacyOdataValue": "KS"
    },
    {
        "LookupKey": "3668c41fc4c47f5c34525a1f141482df136db5e74db14b4ac77be5f2ee2e10b3",
        "LookupName": "StateOrProvince",
        "LookupValue": "KY",
        "StandardLookupValue": "KY",
        "LegacyOdataValue": "KY"
    },
    {
        "LookupKey": "91c474eab6c9094d7fa3b3a572b34cab1415bd1d7557ab6ddf042445654e37d6",
        "LookupName": "StateOrProvince",
        "LookupValue": "LA",
        "StandardLookupValue": "LA",
        "LegacyOdataValue": "LA"
    },
    {
        "LookupKey": "a2cc9588d5bdd3a170f4ae41fac42aeb958690c4a5b703584c1ae90c9ec17634",
        "LookupName": "StateOrProvince",
        "LookupValue": "MA",
        "StandardLookupValue": "MA",
        "LegacyOdataValue": "MA"
    },
    {
        "LookupKey": "508fe8ea3ec4ecab7c86477b52d88523b2d526cd7c6aef65c73c4e3c7daa65ee",
        "LookupName": "StateOrProvince",
        "LookupValue": "MB",
        "StandardLookupValue": "MB",
        "LegacyOdataValue": "MB"
    },
    {
        "LookupKey": "28c6331a6d73241018d4c6de5a01672ed57ed7720fa1437a16a802d4dda8360b",
        "LookupName": "StateOrProvince",
        "LookupValue": "MD",
        "StandardLookupValue": "MD",
        "LegacyOdataValue": "MD"
    },
    {
        "LookupKey": "435865b273376c5e929ab4b0cfa61a144c05bd64221ae8a647ea0e2d32808c71",
        "LookupName": "StateOrProvince",
        "LookupValue": "ME",
        "StandardLookupValue": "ME",
        "LegacyOdataValue": "ME"
    },
    {
        "LookupKey": "6b4e4042de8a385d985b5c9add499fbd9afd49c9d7b444028f22621a4092946f",
        "LookupName": "StateOrProvince",
        "LookupValue": "MI",
        "StandardLookupValue": "MI",
        "LegacyOdataValue": "MI"
    },
    {
        "LookupKey": "fa878c71810775f1c1cc56df98dbcfd9c96af9c34dc25d7c6251443f62c97e02",
        "LookupName": "StateOrProvince",
        "LookupValue": "MN",
        "StandardLookupValue": "MN",
        "LegacyOdataValue": "MN"
    },
    {
        "LookupKey": "7a76ac3d3909746fc4cf7070031ddb2c884c0fb0eb57fa966c438ee723a31c5f",
        "LookupName": "StateOrProvince",
        "LookupValue": "MO",
        "StandardLookupValue": "MO",
        "LegacyOdataValue": "MO"
    },
    {
        "LookupKey": "0b1643f3876a4ccd94a27e854e50ffa26570c51506bc1ec3b310de60485acaa2",
        "LookupName": "StateOrProvince",
        "LookupValue": "MS",
        "StandardLookupValue": "MS",
        "LegacyOdataValue": "MS"
    },
    {
        "LookupKey": "54ff01370abe6a843339acf58adda7261af8ac9da0a39c97807abc0632f49c70",
        "LookupName": "StateOrProvince",
        "LookupValue": "MT",
        "StandardLookupValue": "MT",
        "LegacyOdataValue": "MT"
    },
    {
        "LookupKey": "6971538c67a7ea5ed4cb18f04f0a85309f057e35f92fbc0e782a7c7f680a7bbc",
        "LookupName": "StateOrProvince",
        "LookupValue": "NB",
        "StandardLookupValue": "NB",
        "LegacyOdataValue": "NB"
    },
    {
        "LookupKey": "f9c8bf311b74b70302ff05c976fde45768362d438e7703a9d9ed9ce8b2ee4aec",
        "LookupName": "StateOrProvince",
        "LookupValue": "NC",
        "StandardLookupValue": "NC",
        "LegacyOdataValue": "NC"
    },
    {
        "LookupKey": "11863b724863e52ccb8627adcbcdaf4075465b6781acb24b012a9fee87dfce18",
        "LookupName": "StateOrProvince",
        "LookupValue": "ND",
        "StandardLookupValue": "ND",
        "LegacyOdataValue": "ND"
    },
    {
        "LookupKey": "09cce950c10fbf9aa265a019af3abad668fa34ebf8811fd5eec281a4b0e6c4b1",
        "LookupName": "StateOrProvince",
        "LookupValue": "NE",
        "StandardLookupValue": "NE",
        "LegacyOdataValue": "NE"
    },
    {
        "LookupKey": "a717bddc3e49ffdc4f59f98926e5e36465eb587f6a0606c0cb4bc0a07dc8795a",
        "LookupName": "StateOrProvince",
        "LookupValue": "NF",
        "StandardLookupValue": "NF",
        "LegacyOdataValue": "NF"
    },
    {
        "LookupKey": "9cc3d217a39a036de5bd68d29b8e8a0ef4aa6c30f7fa7d317051585c6c76b906",
        "LookupName": "StateOrProvince",
        "LookupValue": "NH",
        "StandardLookupValue": "NH",
        "LegacyOdataValue": "NH"
    },
    {
        "LookupKey": "623dd7e472fb348c35b70e599c7afa769d86c74e28ddbe3eb8abb271b8a40ed7",
        "LookupName": "StateOrProvince",
        "LookupValue": "NJ",
        "StandardLookupValue": "NJ",
        "LegacyOdataValue": "NJ"
    },
    {
        "LookupKey": "27d5acf5cce101e8e169140cc71dc149eaa795f0ad1734e85f33b9f18d207678",
        "LookupName": "StateOrProvince",
        "LookupValue": "NM",
        "StandardLookupValue": "NM",
        "LegacyOdataValue": "NM"
    },
    {
        "LookupKey": "e5e9eea6a5d995b1b22221fb7cc8f2f88026de4c90c857eb1846d188cc0f7da8",
        "LookupName": "StateOrProvince",
        "LookupValue": "NS",
        "StandardLookupValue": "NS",
        "LegacyOdataValue": "NS"
    },
    {
        "LookupKey": "1ee0cf96fdd574ddbff69384b1e61574db67da89603f9d4874e16eef365f6980",
        "LookupName": "StateOrProvince",
        "LookupValue": "NT",
        "StandardLookupValue": "NT",
        "LegacyOdataValue": "NT"
    },
    {
        "LookupKey": "9311e03713b2bcd9a32e71a85c19ce221c90b519d5da54c0744d3b461c614fd7",
        "LookupName": "StateOrProvince",
        "LookupValue": "NU",
        "StandardLookupValue": "NU",
        "LegacyOdataValue": "NU"
    },
    {
        "LookupKey": "c2b46bba3e1903a3ab7b43525b306eacbdf8005200e8cd9bd9f6d0304ba0c079",
        "LookupName": "StateOrProvince",
        "LookupValue": "NV",
        "StandardLookupValue": "NV",
        "LegacyOdataValue": "NV"
    },
    {
        "LookupKey": "2fe6aba52c697dea25edbbc2cb738c9bd4d1d68a23fe035e6ccc574ba6ef5520",
        "LookupName": "StateOrProvince",
        "LookupValue": "NY",
        "StandardLookupValue": "NY",
        "LegacyOdataValue": "NY"
    },
    {
        "LookupKey": "a9194f1d943c8ca90a02358cd537f09aad4944a8bb3eb09ef9390642e838f37f",
        "LookupName": "StateOrProvince",
        "LookupValue": "OH",
        "StandardLookupValue": "OH",
        "LegacyOdataValue": "OH"
    },
    {
        "LookupKey": "48566692bb26a25364726abbdd51394643bcb6380f4eee37e584e23c45689ceb",
        "LookupName": "StateOrProvince",
        "LookupValue": "OK",
        "StandardLookupValue": "OK",
        "LegacyOdataValue": "OK"
    },
    {
        "LookupKey": "692093af4b948e1c9561779f6e2a722e8190aafeb3dfc71a81fe562c35473e79",
        "LookupName": "StateOrProvince",
        "LookupValue": "ON",
        "StandardLookupValue": "ON",
        "LegacyOdataValue": "ON"
    },
    {
        "LookupKey": "17f2411c520321abc8ff562bb38a7f1719d8c89f044939ec469047f640b62b0f",
        "LookupName": "StateOrProvince",
        "LookupValue": "OR",
        "StandardLookupValue": "OR",
        "LegacyOdataValue": "OR"
    },
    {
        "LookupKey": "902bee5563c50f52d02ac9eb88bcd82f432981e61927fc799a9963b8ef1a4f73",
        "LookupName": "StateOrProvince",
        "LookupValue": "PA",
        "StandardLookupValue": "PA",
        "LegacyOdataValue": "PA"
    },
    {
        "LookupKey": "952d68cd3d3e7d9f412551c69f16bfac0e4657fb1531b7024fd6ebbc18ef281f",
        "LookupName": "StateOrProvince",
        "LookupValue": "PE",
        "StandardLookupValue": "PE",
        "LegacyOdataValue": "PE"
    },
    {
        "LookupKey": "7e00e3dc49be004bd52d2f25ace6119ce85f825b8c64b3a7ced7e3b9fc7006e4",
        "LookupName": "StateOrProvince",
        "LookupValue": "QC",
        "StandardLookupValue": "QC",
        "LegacyOdataValue": "QC"
    },
    {
        "LookupKey": "03142e3e72c2336affbca62ecb3ca06c684e0366a81e639a9901881ea186c84f",
        "LookupName": "StateOrProvince",
        "LookupValue": "RI",
        "StandardLookupValue": "RI",
        "LegacyOdataValue": "RI"
    },
    {
        "LookupKey": "87b382921510485814e4cacb0a2e2ed2b41190d29006fbf44cf031b34f99ead3",
        "LookupName": "StateOrProvince",
        "LookupValue": "SC",
        "StandardLookupValue": "SC",
        "LegacyOdataValue": "SC"
    },
    {
        "LookupKey": "315ffcd92c2b7b5061073e9058d7c152d98dd49e709940426acbcf4314d810ca",
        "LookupName": "StateOrProvince",
        "LookupValue": "SD",
        "StandardLookupValue": "SD",
        "LegacyOdataValue": "SD"
    },
    {
        "LookupKey": "04302594680f757a479f347a4446c97ba20e27585b795dc99c640e96175e9275",
        "LookupName": "StateOrProvince",
        "LookupValue": "SK",
        "StandardLookupValue": "SK",
        "LegacyOdataValue": "SK"
    },
    {
        "LookupKey": "b21a55ea685706b561c9acd25372041d176a76e225de3c8802c182b1b4a10623",
        "LookupName": "StateOrProvince",
        "LookupValue": "TN",
        "StandardLookupValue": "TN",
        "LegacyOdataValue": "TN"
    },
    {
        "LookupKey": "3e829ace1a539abccb90e08653ab5eccb1376d0b498d43734ac7b41a42b1f3f3",
        "LookupName": "StateOrProvince",
        "LookupValue": "TX",
        "StandardLookupValue": "TX",
        "LegacyOdataValue": "TX"
    },
    {
        "LookupKey": "b608e9d4e142e042b0c891b9fff14adad607bab5f2ddf2b3f40c1beac829aa7f",
        "LookupName": "StateOrProvince",
        "LookupValue": "UT",
        "StandardLookupValue": "UT",
        "LegacyOdataValue": "UT"
    },
    {
        "LookupKey": "dfc356f67a7d57ad2a73f74a68aa36d735d5bb697fdde82213d0f28c1b2247fc",
        "LookupName": "StateOrProvince",
        "LookupValue": "VA",
        "StandardLookupValue": "VA",
        "LegacyOdataValue": "VA"
    },
    {
        "LookupKey": "7013e8a195329f8f5878370fa29707d3c9eff7776830244615f0b2ffc74cdb19",
        "LookupName": "StateOrProvince",
        "LookupValue": "VI",
        "StandardLookupValue": "VI",
        "LegacyOdataValue": "VI"
    },
    {
        "LookupKey": "3e0abf978ec537a1d7e6b8dcb44201ac8876d7678696ab6d76c5191ebbfc0c28",
        "LookupName": "StateOrProvince",
        "LookupValue": "VT",
        "StandardLookupValue": "VT",
        "LegacyOdataValue": "VT"
    },
    {
        "LookupKey": "c19f95d42a4cdd187e33f5c9ae5179c4b324c47439aa69e58c00fc09c531ea9a",
        "LookupName": "StateOrProvince",
        "LookupValue": "WA",
        "StandardLookupValue": "WA",
        "LegacyOdataValue": "WA"
    },
    {
        "LookupKey": "f55fb7a8543453618d953d83f939b3125b48f89c08e2f8505fa33d3c93ab040a",
        "LookupName": "StateOrProvince",
        "LookupValue": "WI",
        "StandardLookupValue": "WI",
        "LegacyOdataValue": "WI"
    },
    {
        "LookupKey": "eec64344527b58077ccdccc632de102986cc756e84bb7dde0933cdc9e99e5d40",
        "LookupName": "StateOrProvince",
        "LookupValue": "WV",
        "StandardLookupValue": "WV",
        "LegacyOdataValue": "WV"
    },
    {
        "LookupKey": "6ea0f8a89bac0707748b8d4991e6ff4df453df91c4acca86ad7a1b8f176946a8",
        "LookupName": "StateOrProvince",
        "LookupValue": "WY",
        "StandardLookupValue": "WY",
        "LegacyOdataValue": "WY"
    },
    {
        "LookupKey": "cdce829488db4460467861926a0f2c03c85ed5a9d4fcc689e907e2eb84b0bb7c",
        "LookupName": "StateOrProvince",
        "LookupValue": "YT",
        "StandardLookupValue": "YT",
        "LegacyOdataValue": "YT"
    },
    {
        "LookupKey": "415bda87a0695f16a8dd77b3dba2d5ed8eaf2056324833ca311500d07d1ce8c9",
        "LookupName": "StreetDirection",
        "LookupValue": "E",
        "StandardLookupValue": "E",
        "LegacyOdataValue": "E"
    },
    {
        "LookupKey": "4cfb14557cfd2d03c019d28321ca165788a902d472b3f5656772e24aba9e1341",
        "LookupName": "StreetDirection",
        "LookupValue": "N",
        "StandardLookupValue": "N",
        "LegacyOdataValue": "N"
    },
    {
        "LookupKey": "b465760782f09fd0d424f5a5832d6cb9d57c58280e0e1397e5d7881764aaaec7",
        "LookupName": "StreetDirection",
        "LookupValue": "NE",
        "StandardLookupValue": "NE",
        "LegacyOdataValue": "NE"
    },
    {
        "LookupKey": "6b66a04a7bc3c77b55d3c603fca1ed00a6b5a6b5f6885d111fab6292d653207c",
        "LookupName": "StreetDirection",
        "LookupValue": "NW",
        "StandardLookupValue": "NW",
        "LegacyOdataValue": "NW"
    },
    {
        "LookupKey": "eb47072e33ed2800851a644698cfe1bc785a290633a521a91ecceabaced47d6e",
        "LookupName": "StreetDirection",
        "LookupValue": "S",
        "StandardLookupValue": "S",
        "LegacyOdataValue": "S"
    },
    {
        "LookupKey": "54e94b932fbfdc6b73f6a76b82e825bd1349179709c4a151c2caecc71fa7a58e",
        "LookupName": "StreetDirection",
        "LookupValue": "SE",
        "StandardLookupValue": "SE",
        "LegacyOdataValue": "SE"
    },
    {
        "LookupKey": "ee55743d702aef16f5c94dc0b3c1798d89ddf05843c792e0d103a4aee32b8805",
        "LookupName": "StreetDirection",
        "LookupValue": "SW",
        "StandardLookupValue": "SW",
        "LegacyOdataValue": "SW"
    },
    {
        "LookupKey": "5c0eeaa4fea4d7e078326e739f450ba0f7c6eb410f1eb6a22d4cebbc2aa76dc2",
        "LookupName": "StreetDirection",
        "LookupValue": "W",
        "StandardLookupValue": "W",
        "LegacyOdataValue": "W"
    },
    {
        "LookupKey": "4baa38fa87f2763eb9bed12e227c5c2b3a38ceef8d1b31e9981fc4be620831d2",
        "LookupName": "StructureType",
        "LookupValue": "Cabin",
        "StandardLookupValue": "Cabin",
        "LegacyOdataValue": "Cabin"
    },
    {
        "LookupKey": "b6a542ad46b579f99d59ff2cc123590075fed006e26ebf53ec2c203a0c9ecdbb",
        "LookupName": "StructureType",
        "LookupValue": "Dock",
        "StandardLookupValue": "Dock",
        "LegacyOdataValue": "Dock"
    },
    {
        "LookupKey": "28a3f0dc07fe533afd07086c96819771a2ff30973397ceadf0ebd33ab5012c41",
        "LookupName": "StructureType",
        "LookupValue": "Duplex",
        "StandardLookupValue": "Duplex",
        "LegacyOdataValue": "Duplex"
    },
    {
        "LookupKey": "7405767dd434867b82a31cc56191ce3bfb61661ab65ae294f82c3fabb813aab9",
        "LookupName": "StructureType",
        "LookupValue": "Flex",
        "StandardLookupValue": "Flex",
        "LegacyOdataValue": "Flex"
    },
    {
        "LookupKey": "1c0a436c40fe59aa92bf1191ef8b0cba54818e72fab30f7838f1e1fb50b8edb2",
        "LookupName": "StructureType",
        "LookupValue": "HotelMotel",
        "StandardLookupValue": "HotelMotel",
        "LegacyOdataValue": "Hotel/Motel"
    },
    {
        "LookupKey": "a798668b86264bb23c3f6a8fcd5fae5debafef07ebe8fb0214d05a24cd86f46b",
        "LookupName": "StructureType",
        "LookupValue": "House",
        "StandardLookupValue": "House",
        "LegacyOdataValue": "House"
    },
    {
        "LookupKey": "a751c937db259e1b600c0f465ff6074d88fee37859b391e49542b8a9a048d97d",
        "LookupName": "StructureType",
        "LookupValue": "Industrial",
        "StandardLookupValue": "Industrial",
        "LegacyOdataValue": "Industrial"
    },
    {
        "LookupKey": "2d48bc47fe4625b39fab8225834975e4b899c032e7f994b94b9b8821219896f5",
        "LookupName": "StructureType",
        "LookupValue": "ManufacturedHouse",
        "StandardLookupValue": "ManufacturedHouse",
        "LegacyOdataValue": "Manufactured House"
    },
    {
        "LookupKey": "0ffdf64cad631199d71846d5d436a38ed84518b27dc65d483eec89883435cb9e",
        "LookupName": "StructureType",
        "LookupValue": "MixedUse",
        "StandardLookupValue": "MixedUse",
        "LegacyOdataValue": "Mixed Use"
    },
    {
        "LookupKey": "c33f6c448b567306c29314604f90bdd200dd85b68152dfdeaf40dfdf157fb9b5",
        "LookupName": "StructureType",
        "LookupValue": "MultiFamily",
        "StandardLookupValue": "MultiFamily",
        "LegacyOdataValue": "Multi Family"
    },
    {
        "LookupKey": "9d39452bdb2ed0be351a338d487cdccc288307afac46d079a7912d3cf26e683b",
        "LookupName": "StructureType",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "8b8b1a4c4a208b25ad740d16bd96cefcf3777f074c243f747bfb10b34be6dad3",
        "LookupName": "StructureType",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "2888c9ba195dce697a8fbe3121cf166d04ca7e2dd8ad269f26d09429af78e697",
        "LookupName": "StructureType",
        "LookupValue": "Quadruplex",
        "StandardLookupValue": "Quadruplex",
        "LegacyOdataValue": "Quadruplex"
    },
    {
        "LookupKey": "ed18a1e643dba1d9884363a867fc0904c833f8e4d6c0b0a59d3fb7ed28201055",
        "LookupName": "StructureType",
        "LookupValue": "Retail",
        "StandardLookupValue": "Retail",
        "LegacyOdataValue": "Retail"
    },
    {
        "LookupKey": "825145d93c033e72416e00bf1870ceb2ff3e78f455d6a24310256388ee3febc8",
        "LookupName": "StructureType",
        "LookupValue": "Townhouse",
        "StandardLookupValue": "Townhouse",
        "LegacyOdataValue": "Townhouse"
    },
    {
        "LookupKey": "f312f5951571628371da38056a42f35df38c7fce583e2f38bfea1bc34e772a84",
        "LookupName": "StructureType",
        "LookupValue": "Triplex",
        "StandardLookupValue": "Triplex",
        "LegacyOdataValue": "Triplex"
    },
    {
        "LookupKey": "8837ad4ff465072f6c9cf43cb688863ed81be81fa9829543f6ee212370af7f99",
        "LookupName": "StructureType",
        "LookupValue": "Warehouse",
        "StandardLookupValue": "Warehouse",
        "LegacyOdataValue": "Warehouse"
    },
    {
        "LookupKey": "6896ecbccca390fddb0d2d50a057b1ad878c6cf5919150272c0889179d17a34a",
        "LookupName": "SyndicateTo",
        "LookupValue": "HomesDotCom",
        "StandardLookupValue": "HomesDotCom",
        "LegacyOdataValue": "Homes.com"
    },
    {
        "LookupKey": "fc3462d8562ce7e8bee982fbc1c4dbb99147c4a6b72e0926a15fe4a29a6162ca",
        "LookupName": "SyndicateTo",
        "LookupValue": "Listhub",
        "StandardLookupValue": "Listhub",
        "LegacyOdataValue": "ListHub"
    },
    {
        "LookupKey": "36ec55f8b3ceb131be44a8025ace87d04e5009c72bcc42f0bc32a9e09cc0dd18",
        "LookupName": "SyndicateTo",
        "LookupValue": "RealtorDotCom",
        "StandardLookupValue": "RealtorDotCom",
        "LegacyOdataValue": "Realtor.com"
    },
    {
        "LookupKey": "1fdd6ede4e59c1209b0633204fd18943b57ceb9c22153b1bda7ab50f16b424a9",
        "LookupName": "SyndicateTo",
        "LookupValue": "ZillowTrulia",
        "StandardLookupValue": "ZillowTrulia",
        "LegacyOdataValue": "Zillow/Trulia"
    },
    {
        "LookupKey": "ab298d8224ec3c8e5bd431002401ec0beb54be6a2d4a5ed77aa5159429153211",
        "LookupName": "TaxStatusCurrent",
        "LookupValue": "Personal",
        "StandardLookupValue": "Personal",
        "LegacyOdataValue": "Personal"
    },
    {
        "LookupKey": "a83e52b0a282ffed6694cb0b1de704194cfd02cad5cbc8eee6752a469cca9828",
        "LookupName": "TaxStatusCurrent",
        "LookupValue": "PersonalAndReal",
        "StandardLookupValue": "PersonalAndReal",
        "LegacyOdataValue": "Personal And Real"
    },
    {
        "LookupKey": "18097d0b4e7c16b63ec8462a7d8e11ec7f45327adec693726d413d9f73f71f52",
        "LookupName": "TaxStatusCurrent",
        "LookupValue": "Real",
        "StandardLookupValue": "Real",
        "LegacyOdataValue": "Real"
    },
    {
        "LookupKey": "ff2bbf798e3118311fe61236095d26abbc149b937ebebfd836ea4d20336f2a0f",
        "LookupName": "TenantPays",
        "LookupValue": "AllUtilities",
        "StandardLookupValue": "AllUtilities",
        "LegacyOdataValue": "All Utilities"
    },
    {
        "LookupKey": "a567b8db1789ff510f50c611414c2dc711a9db2fb3cfc3bf0cdfaf8217824797",
        "LookupName": "TenantPays",
        "LookupValue": "AssociationFees",
        "StandardLookupValue": "AssociationFees",
        "LegacyOdataValue": "Association Fees"
    },
    {
        "LookupKey": "4d723c6c80e40dcae104bc55ba0f320ca99787f521237e460bbf658c79103b6f",
        "LookupName": "TenantPays",
        "LookupValue": "CableTv",
        "StandardLookupValue": "CableTv",
        "LegacyOdataValue": "Cable TV"
    },
    {
        "LookupKey": "cf0031e29ee2d51c365c566200b26557a07aa1bcede39599597f18a98a95a029",
        "LookupName": "TenantPays",
        "LookupValue": "CommonAreaMaintenance",
        "StandardLookupValue": "CommonAreaMaintenance",
        "LegacyOdataValue": "Common Area Maintenance"
    },
    {
        "LookupKey": "7b88673f48b98c93cc45909a631d671da0aa9df7bec47f117d6284a352246be4",
        "LookupName": "TenantPays",
        "LookupValue": "Electricity",
        "StandardLookupValue": "Electricity",
        "LegacyOdataValue": "Electricity"
    },
    {
        "LookupKey": "97237949bf7a8e1366f83acbcbfafc101bb69f04cef50ae28e17cec75df95d66",
        "LookupName": "TenantPays",
        "LookupValue": "ExteriorMaintenance",
        "StandardLookupValue": "ExteriorMaintenance",
        "LegacyOdataValue": "Exterior Maintenance"
    },
    {
        "LookupKey": "75f6c830bc89166ce382be1bbb59c8bb21444978610dc8f958ea230427a4735f",
        "LookupName": "TenantPays",
        "LookupValue": "Gas",
        "StandardLookupValue": "Gas",
        "LegacyOdataValue": "Gas"
    },
    {
        "LookupKey": "037d80b85881d745a9fb49d83124b88ed297e35125ec28d228bd123a90a65fa2",
        "LookupName": "TenantPays",
        "LookupValue": "GroundsCare",
        "StandardLookupValue": "GroundsCare",
        "LegacyOdataValue": "Grounds Care"
    },
    {
        "LookupKey": "1a97c8b10f4487cd7da3be570597d40a328ef8745ea439e0c816611c89b79386",
        "LookupName": "TenantPays",
        "LookupValue": "HotWater",
        "StandardLookupValue": "HotWater",
        "LegacyOdataValue": "Hot Water"
    },
    {
        "LookupKey": "a428455a7fd88bdfbcc2f7128ff16d97d3cb85b710ed9cdaf61fb86af07f8828",
        "LookupName": "TenantPays",
        "LookupValue": "HvacMaintenance",
        "StandardLookupValue": "HvacMaintenance",
        "LegacyOdataValue": "HVAC Maintenance"
    },
    {
        "LookupKey": "71d47d4802c9b17b1b2529a83a5a592671e75607f47adb0efc267884dd5f1644",
        "LookupName": "TenantPays",
        "LookupValue": "Insurance",
        "StandardLookupValue": "Insurance",
        "LegacyOdataValue": "Insurance"
    },
    {
        "LookupKey": "a5c3a4961c3eefb13eb74031969cf459b9435570d301dc8b2b63e72743db8f0b",
        "LookupName": "TenantPays",
        "LookupValue": "JanitorialService",
        "StandardLookupValue": "JanitorialService",
        "LegacyOdataValue": "Janitorial Service"
    },
    {
        "LookupKey": "02dc70bc6f68f9caabb909fc55a44a4bebf7251fd37e4906456db04115d025b7",
        "LookupName": "TenantPays",
        "LookupValue": "Management",
        "StandardLookupValue": "Management",
        "LegacyOdataValue": "Management"
    },
    {
        "LookupKey": "2471c5d0cf352cfb85d277da3e2d7bf78081a271cc5f2c7b2b7f7c30b9e9c79d",
        "LookupName": "TenantPays",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "5ddc331a8ffb019470bb1b189676158b8961939c6f21604c6d08d3d32c342d7e",
        "LookupName": "TenantPays",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "6cf84691d81e5b63396e20c5f0fa657dcbf4b5e2cd0c93e8939063d0b98d0fad",
        "LookupName": "TenantPays",
        "LookupValue": "OtherTax",
        "StandardLookupValue": "OtherTax",
        "LegacyOdataValue": "Other Tax"
    },
    {
        "LookupKey": "5324c6efd6d7a3a91dcbc60aed599d7b98175222cde73c7767aa4ecc321f792e",
        "LookupName": "TenantPays",
        "LookupValue": "ParkingFee",
        "StandardLookupValue": "ParkingFee",
        "LegacyOdataValue": "Parking Fee"
    },
    {
        "LookupKey": "df7741109c4b1d27b370a1e81576a6531e1f98dc6fdaeb22d5a810b8cd1309d5",
        "LookupName": "TenantPays",
        "LookupValue": "PestControl",
        "StandardLookupValue": "PestControl",
        "LegacyOdataValue": "Pest Control"
    },
    {
        "LookupKey": "7576a44ced7d677126443633937a3128de40a9a1c17995a2a9daf56930147c35",
        "LookupName": "TenantPays",
        "LookupValue": "PoolMaintenance",
        "StandardLookupValue": "PoolMaintenance",
        "LegacyOdataValue": "Pool Maintenance"
    },
    {
        "LookupKey": "9d2684e1877898e83d4cc2394b0bb95d6b64fc83f41eb87d0c2ce2b324cd536a",
        "LookupName": "TenantPays",
        "LookupValue": "Repairs",
        "StandardLookupValue": "Repairs",
        "LegacyOdataValue": "Repairs"
    },
    {
        "LookupKey": "48894acf3e41b765a9e601d330ee54c7fefb69ff94c497bf0d8e70462fadcf85",
        "LookupName": "TenantPays",
        "LookupValue": "Roof",
        "StandardLookupValue": "Roof",
        "LegacyOdataValue": "Roof"
    },
    {
        "LookupKey": "368d600231fd87f53e2852b11c1d342cbf84f2fd46583239265c3bd7afb08be9",
        "LookupName": "TenantPays",
        "LookupValue": "Security",
        "StandardLookupValue": "Security",
        "LegacyOdataValue": "Security"
    },
    {
        "LookupKey": "fc9701094239408e3d6446ab2dd24c2c7a145418eb39086c9bfcdb805c1ff0cc",
        "LookupName": "TenantPays",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "eb171668ca1ef73d28267c96b42dc12e7b5e222baaacfa5e5d0037c86e68cfd0",
        "LookupName": "TenantPays",
        "LookupValue": "Sewer",
        "StandardLookupValue": "Sewer",
        "LegacyOdataValue": "Sewer"
    },
    {
        "LookupKey": "d80430c2cc16ef7e3044b9e2e4ece7dff085686f53e6e1bf63498a435e13899a",
        "LookupName": "TenantPays",
        "LookupValue": "SnowRemoval",
        "StandardLookupValue": "SnowRemoval",
        "LegacyOdataValue": "Snow Removal"
    },
    {
        "LookupKey": "41298de59cc20227aa847e7f7a7be0a91adb12e1886d3e94b305234bf8a370cc",
        "LookupName": "TenantPays",
        "LookupValue": "Taxes",
        "StandardLookupValue": "Taxes",
        "LegacyOdataValue": "Taxes"
    },
    {
        "LookupKey": "be7d8f469442bfe391aeca0ffcd3d702c033baa129cf453e194d9e2c622075dd",
        "LookupName": "TenantPays",
        "LookupValue": "Telephone",
        "StandardLookupValue": "Telephone",
        "LegacyOdataValue": "Telephone"
    },
    {
        "LookupKey": "879a35c1b741deff58a4c66224a36e4b9080d2d85cc1ae779480c15c2b50b0cc",
        "LookupName": "TenantPays",
        "LookupValue": "TrashCollection",
        "StandardLookupValue": "TrashCollection",
        "LegacyOdataValue": "Trash Collection"
    },
    {
        "LookupKey": "1dcf09e9c19fd1d8713a9b692a08d79c9679ebabe379b6092f32cc87a7ec0ffb",
        "LookupName": "TenantPays",
        "LookupValue": "Water",
        "StandardLookupValue": "Water",
        "LegacyOdataValue": "Water"
    },
    {
        "LookupKey": "57d2c13b986629b926867cfb009c74abb0041dbec967fc352eada991828d703a",
        "LookupName": "UnitTypeType",
        "LookupValue": "Apartments",
        "StandardLookupValue": "Apartments",
        "LegacyOdataValue": "Apartments"
    },
    {
        "LookupKey": "842c72e290a3fcc931df66a9b79fc891cb3608d7516429871fccbc31ab337d89",
        "LookupName": "UnitTypeType",
        "LookupValue": "Efficiency",
        "StandardLookupValue": "Efficiency",
        "LegacyOdataValue": "Efficiency"
    },
    {
        "LookupKey": "c9d3fe5a4fd37406d070ca6444169077dd47ab6fedf1f11531a71a01ce006c8e",
        "LookupName": "UnitTypeType",
        "LookupValue": "FourBedroomOrMore",
        "StandardLookupValue": "FourBedroomOrMore",
        "LegacyOdataValue": "4 Bedroom Or More"
    },
    {
        "LookupKey": "4d56c24344bd9e99f91b57aa680bc0644b6552b0b2516bca983264480af242e3",
        "LookupName": "UnitTypeType",
        "LookupValue": "Loft",
        "StandardLookupValue": "Loft",
        "LegacyOdataValue": "Loft"
    },
    {
        "LookupKey": "35320990167a216c207f99ca311396750929b2e7a95823f802a4f722a1e4d0c8",
        "LookupName": "UnitTypeType",
        "LookupValue": "ManagersUnit",
        "StandardLookupValue": "ManagersUnit",
        "LegacyOdataValue": "Manager's Unit"
    },
    {
        "LookupKey": "135185b0f4abbd888d7bb1f540b5758238eb75892bfa5c91744d7e2d841faef9",
        "LookupName": "UnitTypeType",
        "LookupValue": "OneBedroom",
        "StandardLookupValue": "OneBedroom",
        "LegacyOdataValue": "1 Bedroom"
    },
    {
        "LookupKey": "66ad8834d3ca8f319c8c3f6e85670a231400eb9d8f8412062736921d1b8e67e4",
        "LookupName": "UnitTypeType",
        "LookupValue": "Penthouse",
        "StandardLookupValue": "Penthouse",
        "LegacyOdataValue": "Penthouse"
    },
    {
        "LookupKey": "b33b43fdd38c8ee6aa61dc8970cae40343619230d9de6c94977f18224fc05d04",
        "LookupName": "UnitTypeType",
        "LookupValue": "Studio",
        "StandardLookupValue": "Studio",
        "LegacyOdataValue": "Studio"
    },
    {
        "LookupKey": "ded0e78f41dd2ee2e1e04fd505fbd2026327f274528af780b5f669760e8d6c12",
        "LookupName": "UnitTypeType",
        "LookupValue": "ThreeBedroom",
        "StandardLookupValue": "ThreeBedroom",
        "LegacyOdataValue": "3 Bedroom"
    },
    {
        "LookupKey": "084ce1164a430780f6a2db87fc76e9935ab93b05959d2dfb9792f5b504c7b532",
        "LookupName": "UnitTypeType",
        "LookupValue": "TwoBedroom",
        "StandardLookupValue": "TwoBedroom",
        "LegacyOdataValue": "2 Bedroom"
    },
    {
        "LookupKey": "fa99342ef444c948b48a9086d87ae8184b925c91c116c59426aa71c106cabcdb",
        "LookupName": "UnitsFurnished",
        "LookupValue": "AllUnits",
        "StandardLookupValue": "AllUnits",
        "LegacyOdataValue": "All Units"
    },
    {
        "LookupKey": "beb4eaaf93a5dc4320676f3fc20d08572d18bca2014f4117df860a49c90c19d2",
        "LookupName": "UnitsFurnished",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "467052050200d71fe27906d4bccc7840032146118885030d880292df76d81dd9",
        "LookupName": "UnitsFurnished",
        "LookupValue": "VariesByUnit",
        "StandardLookupValue": "VariesByUnit",
        "LegacyOdataValue": "Varies By Unit"
    },
    {
        "LookupKey": "5e1845d1b8f35c8efd28d88080d890831ff110d3ceeeaf04a6ab0760e388683b",
        "LookupName": "Utilities",
        "LookupValue": "CableAvailable",
        "StandardLookupValue": "CableAvailable",
        "LegacyOdataValue": "Cable Available"
    },
    {
        "LookupKey": "110df463ebb145b0769cc3828f29423326136b0b6de66ab78da5acc9c0c552f0",
        "LookupName": "Utilities",
        "LookupValue": "CableConnected",
        "StandardLookupValue": "CableConnected",
        "LegacyOdataValue": "Cable Connected"
    },
    {
        "LookupKey": "18165f45efe36f77500397d2a990c125727a3126e1f24a11a858662d5f518e19",
        "LookupName": "Utilities",
        "LookupValue": "CableNotAvailable",
        "StandardLookupValue": "CableNotAvailable",
        "LegacyOdataValue": "Cable Not Available"
    },
    {
        "LookupKey": "4a5d97e5231a1671eed716e4499e793fe1a9677f2dbac416615c6e274677bbf9",
        "LookupName": "Utilities",
        "LookupValue": "ElectricityAvailable",
        "StandardLookupValue": "ElectricityAvailable",
        "LegacyOdataValue": "Electricity Available"
    },
    {
        "LookupKey": "4ab146b345d8de0f486eb524ddc0df899752baaf57c907b17ba2d01c9dbb4396",
        "LookupName": "Utilities",
        "LookupValue": "ElectricityConnected",
        "StandardLookupValue": "ElectricityConnected",
        "LegacyOdataValue": "Electricity Connected"
    },
    {
        "LookupKey": "0bb98454f52963a18ace1dd47288706c7edc483bdec195bc58369b0310191476",
        "LookupName": "Utilities",
        "LookupValue": "ElectricityNotAvailable",
        "StandardLookupValue": "ElectricityNotAvailable",
        "LegacyOdataValue": "Electricity Not Available"
    },
    {
        "LookupKey": "28484099137626d355754fcf09a0c8b3ac0438c19bdbafd914afaa94fd8a28a5",
        "LookupName": "Utilities",
        "LookupValue": "NaturalGasAvailable",
        "StandardLookupValue": "NaturalGasAvailable",
        "LegacyOdataValue": "Natural Gas Available"
    },
    {
        "LookupKey": "f08cb006b6b37e9ba875132da7e20b6b4ca6b919a5dbc001a3a5035fbee3d513",
        "LookupName": "Utilities",
        "LookupValue": "NaturalGasConnected",
        "StandardLookupValue": "NaturalGasConnected",
        "LegacyOdataValue": "Natural Gas Connected"
    },
    {
        "LookupKey": "3f2f2eb40e956b86f76ecc6188840e7b575c39ae7fea4614155d0a6dd4c2655a",
        "LookupName": "Utilities",
        "LookupValue": "NaturalGasNotAvailable",
        "StandardLookupValue": "NaturalGasNotAvailable",
        "LegacyOdataValue": "Natural Gas Not Available"
    },
    {
        "LookupKey": "d86befa69e2fea77b088aa2ad5ca6b205113ab127eab57f954bd35af83890f05",
        "LookupName": "Utilities",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "95c9ffcd5b287d79467f6f1ec2b472a64c72c9c776843233782f46d56fef6b82",
        "LookupName": "Utilities",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "4e1a59bc18e4747af0de911b819cfccc29f307aaca0c0a362cb587cb6e91bed1",
        "LookupName": "Utilities",
        "LookupValue": "PhoneAvailable",
        "StandardLookupValue": "PhoneAvailable",
        "LegacyOdataValue": "Phone Available"
    },
    {
        "LookupKey": "ad865be4c9d25c2b958f7eadbc1473ddc3fe7e409a13fb36440f8ef3776c549d",
        "LookupName": "Utilities",
        "LookupValue": "PhoneConnected",
        "StandardLookupValue": "PhoneConnected",
        "LegacyOdataValue": "Phone Connected"
    },
    {
        "LookupKey": "cf5fa6a6b608889f7820d6a40849e3d3b9c03e2f62cc6035f66bee03ec2ffb75",
        "LookupName": "Utilities",
        "LookupValue": "PhoneNotAvailable",
        "StandardLookupValue": "PhoneNotAvailable",
        "LegacyOdataValue": "Phone Not Available"
    },
    {
        "LookupKey": "a072dca8fcc4267509775d0fed41be03c7d8f6c4ae72cafb45a6d2625671c0f6",
        "LookupName": "Utilities",
        "LookupValue": "Propane",
        "StandardLookupValue": "Propane",
        "LegacyOdataValue": "Propane"
    },
    {
        "LookupKey": "c930cdf947f34479af117ef74226a9f6963765e929efd82df915b7b3a7860baf",
        "LookupName": "Utilities",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "a07e495495e852a5e11e3f4a745448710bf21d3acfa810c8ef963a9ea7863b18",
        "LookupName": "Utilities",
        "LookupValue": "SewerAvailable",
        "StandardLookupValue": "SewerAvailable",
        "LegacyOdataValue": "Sewer Available"
    },
    {
        "LookupKey": "2d2af59501454abc431b32cbb186fe9d49015e543b499c5769a096ef76835b58",
        "LookupName": "Utilities",
        "LookupValue": "SewerConnected",
        "StandardLookupValue": "SewerConnected",
        "LegacyOdataValue": "Sewer Connected"
    },
    {
        "LookupKey": "3846d1a450cd259c77ea98885ca78d0546a917234b848bb1ce588cef07ccc6d8",
        "LookupName": "Utilities",
        "LookupValue": "SewerNotAvailable",
        "StandardLookupValue": "SewerNotAvailable",
        "LegacyOdataValue": "Sewer Not Available"
    },
    {
        "LookupKey": "ed498ae8b3bad28a3eaa61d65fb882a1d96011ff5d2b5a9a6548458020fea752",
        "LookupName": "Utilities",
        "LookupValue": "UndergroundUtilities",
        "StandardLookupValue": "UndergroundUtilities",
        "LegacyOdataValue": "Underground Utilities"
    },
    {
        "LookupKey": "2819fef1fa68134d66a207f4e28990e3b0f518c92b25bc8f0c03c6f416d6cbfc",
        "LookupName": "Utilities",
        "LookupValue": "WaterAvailable",
        "StandardLookupValue": "WaterAvailable",
        "LegacyOdataValue": "Water Available"
    },
    {
        "LookupKey": "b0b5c75857d5016357ac5af86e9d3f1fb91e6ed03799e19bc8a2331731a4cdc5",
        "LookupName": "Utilities",
        "LookupValue": "WaterConnected",
        "StandardLookupValue": "WaterConnected",
        "LegacyOdataValue": "Water Connected"
    },
    {
        "LookupKey": "05ceb98a473bf0e6167f78a4e54430c617eaf7ef19dbd9d93e81f3bc235e37fc",
        "LookupName": "Utilities",
        "LookupValue": "WaterNotAvailable",
        "StandardLookupValue": "WaterNotAvailable",
        "LegacyOdataValue": "Water Not Available"
    },
    {
        "LookupKey": "b75ce58c65bf4f301b703f13ebdc94ca38f9f6a4b70f9fb42c941d95c850c663",
        "LookupName": "Vegetation",
        "LookupValue": "Brush",
        "StandardLookupValue": "Brush",
        "LegacyOdataValue": "Brush"
    },
    {
        "LookupKey": "a4da1772112a595349072fcfb47ff1b6f8093dddfac1cc03b7ce3734e8556583",
        "LookupName": "Vegetation",
        "LookupValue": "Cleared",
        "StandardLookupValue": "Cleared",
        "LegacyOdataValue": "Cleared"
    },
    {
        "LookupKey": "0ac126c8762d674d6f2b0948c3e43cca0c1141700837ffb60e0e43d2975684da",
        "LookupName": "Vegetation",
        "LookupValue": "Crops",
        "StandardLookupValue": "Crops",
        "LegacyOdataValue": "Crops"
    },
    {
        "LookupKey": "6f9bafd74a1515fec76d32bc2826d453b4c5315e348e716b8db02dbb73fd46fa",
        "LookupName": "Vegetation",
        "LookupValue": "Grassed",
        "StandardLookupValue": "Grassed",
        "LegacyOdataValue": "Grassed"
    },
    {
        "LookupKey": "fdbe4174b3ee00d4d3df4a35d80bcd5f03feec41393fbf5f32b74daa4c68da28",
        "LookupName": "Vegetation",
        "LookupValue": "HeavilyWooded",
        "StandardLookupValue": "HeavilyWooded",
        "LegacyOdataValue": "Heavily Wooded"
    },
    {
        "LookupKey": "55276c701d62c1d80aee3c0e2f8f4a2df279c3840202fd6aaf875f320bc95148",
        "LookupName": "Vegetation",
        "LookupValue": "NaturalState",
        "StandardLookupValue": "NaturalState",
        "LegacyOdataValue": "Natural State"
    },
    {
        "LookupKey": "4ab29f7fbb95409fd7f9be95a04229b1b00f4d89d86700fb5bd68059458f10de",
        "LookupName": "Vegetation",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "40c98389289a57e970f2a27be59e7195cc24cb1d884f1bc8deb623f8c9571b1d",
        "LookupName": "Vegetation",
        "LookupValue": "PartiallyWooded",
        "StandardLookupValue": "PartiallyWooded",
        "LegacyOdataValue": "Partially Wooded"
    },
    {
        "LookupKey": "e8bb80cf22c52c89e0e6b04feeaadd537e86b0a967880de9b6d867a7d5d906c9",
        "LookupName": "Vegetation",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "0dc8234bf4f220985b00cfbb788c2f78c11fe86b10daa31657caa021f2417657",
        "LookupName": "Vegetation",
        "LookupValue": "Wooded",
        "StandardLookupValue": "Wooded",
        "LegacyOdataValue": "Wooded"
    },
    {
        "LookupKey": "dfc86ca2c6f36e83869bdfc3bbeb7e44ef7c9e59db41d783f35b76c3d58d849e",
        "LookupName": "View",
        "LookupValue": "Bay",
        "StandardLookupValue": "Bay",
        "LegacyOdataValue": "Bay"
    },
    {
        "LookupKey": "34a37a2e2ba07802470b45615ee84be10606f9c105f67d0826d6a9ae24637051",
        "LookupName": "View",
        "LookupValue": "Beach",
        "StandardLookupValue": "Beach",
        "LegacyOdataValue": "Beach"
    },
    {
        "LookupKey": "612a32cc37c8f5f17230f4c0e4fe990c1b8964b41da6eba9cdcc00d5315b208b",
        "LookupName": "View",
        "LookupValue": "Bridges",
        "StandardLookupValue": "Bridges",
        "LegacyOdataValue": "Bridges"
    },
    {
        "LookupKey": "dfbb6a7dcec0012e007a933cc9aad553204d1df1dfb03dc8f0a9c24b6d0bf91e",
        "LookupName": "View",
        "LookupValue": "Canal",
        "StandardLookupValue": "Canal",
        "LegacyOdataValue": "Canal"
    },
    {
        "LookupKey": "b873922ba1c2c54d58150a9201a77b12cbb750f5dfe70b4e9674c3a4bf4ea098",
        "LookupName": "View",
        "LookupValue": "Canyon",
        "StandardLookupValue": "Canyon",
        "LegacyOdataValue": "Canyon"
    },
    {
        "LookupKey": "7c1331c32c9cad8ee7dd19695a4f7a8dcf277e82db90bfc09029ab61fb8a3615",
        "LookupName": "View",
        "LookupValue": "City",
        "StandardLookupValue": "City",
        "LegacyOdataValue": "City"
    },
    {
        "LookupKey": "34c6a7beb77da81e942a8524d780bb6aaa53d43d46ec9e54e49e8c9b518f4ef4",
        "LookupName": "View",
        "LookupValue": "CityLights",
        "StandardLookupValue": "CityLights",
        "LegacyOdataValue": "City Lights"
    },
    {
        "LookupKey": "8ce61c886b542c0dce123c84d2b9e6e38e5735d980369fd136621e429d3e58d3",
        "LookupName": "View",
        "LookupValue": "CreekStream",
        "StandardLookupValue": "CreekStream",
        "LegacyOdataValue": "Creek/Stream"
    },
    {
        "LookupKey": "3af5f10b2f69faa67f5850e75a66585ff60d152b79dea67497e16ce85934d56c",
        "LookupName": "View",
        "LookupValue": "Desert",
        "StandardLookupValue": "Desert",
        "LegacyOdataValue": "Desert"
    },
    {
        "LookupKey": "9893703a3d655ea91418f1d345f91928e03cb9088b483a7c6d7a460f82424283",
        "LookupName": "View",
        "LookupValue": "Downtown",
        "StandardLookupValue": "Downtown",
        "LegacyOdataValue": "Downtown"
    },
    {
        "LookupKey": "3aba125117c4a0f11b4166e4fd0696a063c8bbed90f178730477f6a1c5a90de8",
        "LookupName": "View",
        "LookupValue": "Forest",
        "StandardLookupValue": "Forest",
        "LegacyOdataValue": "Forest"
    },
    {
        "LookupKey": "eb208af386b93f4f20aacafd31a93edaa32ea4938559f0a16e8ee96334803296",
        "LookupName": "View",
        "LookupValue": "Garden",
        "StandardLookupValue": "Garden",
        "LegacyOdataValue": "Garden"
    },
    {
        "LookupKey": "a96f378018b81ed20bace9d14b92ea02ac0dc52bfc9c52e5edd13ace04f6bee4",
        "LookupName": "View",
        "LookupValue": "GolfCourse",
        "StandardLookupValue": "GolfCourse",
        "LegacyOdataValue": "Golf Course"
    },
    {
        "LookupKey": "26cf0f242ed5bf00d90fb9aa1c61a18e035a1564b95547865ff5c658eb41532a",
        "LookupName": "View",
        "LookupValue": "Hills",
        "StandardLookupValue": "Hills",
        "LegacyOdataValue": "Hills"
    },
    {
        "LookupKey": "41a9a37931d8e23d219b4e3d8fa29aacbad69834374ae1e075cf130117a47d93",
        "LookupName": "View",
        "LookupValue": "Lake",
        "StandardLookupValue": "Lake",
        "LegacyOdataValue": "Lake"
    },
    {
        "LookupKey": "4549e8ff76ef396ce913a3fb19af3e68a48be74885084dee68e7fe0ccd3d5baf",
        "LookupName": "View",
        "LookupValue": "Marina",
        "StandardLookupValue": "Marina",
        "LegacyOdataValue": "Marina"
    },
    {
        "LookupKey": "cb170be711306415667a3667727bc757336cdb4fcc9846613d2ae9f42e35d9d5",
        "LookupName": "View",
        "LookupValue": "Meadow",
        "StandardLookupValue": "Meadow",
        "LegacyOdataValue": "Meadow"
    },
    {
        "LookupKey": "79feda6ad95da31f1bf560054f24efc16648c59e18823ae87e069ff295c9c457",
        "LookupName": "View",
        "LookupValue": "Mountains",
        "StandardLookupValue": "Mountains",
        "LegacyOdataValue": "Mountains"
    },
    {
        "LookupKey": "8a44ad8b6e36eab52da803ee239968c89f3eef7217deb6c18bea9a212ad14524",
        "LookupName": "View",
        "LookupValue": "Neighborhood",
        "StandardLookupValue": "Neighborhood",
        "LegacyOdataValue": "Neighborhood"
    },
    {
        "LookupKey": "0e97674a6db9d1a928005bbb5db00898bcdf59c7feb85c18b3fecd5bfd80571b",
        "LookupName": "View",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "ce8e9dcfa7a70cf09482a3f6c5526dede5347bd4e2d3aebde02c7f7a697902fb",
        "LookupName": "View",
        "LookupValue": "Ocean",
        "StandardLookupValue": "Ocean",
        "LegacyOdataValue": "Ocean"
    },
    {
        "LookupKey": "1780738796feb92212b365d3fce41ec0c8b3dd9cf2fd33b209e32e3190102a98",
        "LookupName": "View",
        "LookupValue": "Orchard",
        "StandardLookupValue": "Orchard",
        "LegacyOdataValue": "Orchard"
    },
    {
        "LookupKey": "6805217ea4056d26f6bbaddda477a9b242859af2ffc0694f8086a8d2be0c3477",
        "LookupName": "View",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "d543c38d804f1085487bf3d93cf4563a6f34ce6bd45cdab069ef7445458cc217",
        "LookupName": "View",
        "LookupValue": "Panoramic",
        "StandardLookupValue": "Panoramic",
        "LegacyOdataValue": "Panoramic"
    },
    {
        "LookupKey": "283c7a96dc644e1e7ff8a8cee6d6a5d2c8fab651b31a90d55655346a715bf56d",
        "LookupName": "View",
        "LookupValue": "ParkGreenbelt",
        "StandardLookupValue": "ParkGreenbelt",
        "LegacyOdataValue": "Park/Greenbelt"
    },
    {
        "LookupKey": "99a18de9a5723502c46375de5e6289fdd7a35776fbf5f5222337b924a9797ba9",
        "LookupName": "View",
        "LookupValue": "Pasture",
        "StandardLookupValue": "Pasture",
        "LegacyOdataValue": "Pasture"
    },
    {
        "LookupKey": "b4dbca4b0cd6fa6618d57c802725a07b693653699d781aaee81fc893fb15f87f",
        "LookupName": "View",
        "LookupValue": "Pond",
        "StandardLookupValue": "Pond",
        "LegacyOdataValue": "Pond"
    },
    {
        "LookupKey": "1a41d5c6a5624145be8055f4ef5d544a1d4c14cc5aad88a0d71b70e8376cd875",
        "LookupName": "View",
        "LookupValue": "Pool",
        "StandardLookupValue": "Pool",
        "LegacyOdataValue": "Pool"
    },
    {
        "LookupKey": "14478f2d8f59ffbdbcd800edf7974461dd76d17ccb413972a0f4275dec782047",
        "LookupName": "View",
        "LookupValue": "Ridge",
        "StandardLookupValue": "Ridge",
        "LegacyOdataValue": "Ridge"
    },
    {
        "LookupKey": "e891dfc0d1ac1b9f9978d983a1f64c534bce6a8cbb1edc4ec9ee7466aeedcf54",
        "LookupName": "View",
        "LookupValue": "River",
        "StandardLookupValue": "River",
        "LegacyOdataValue": "River"
    },
    {
        "LookupKey": "91f30feb84e6753c46a945b50ea854be972d65e5e62ee28478abcbcc01d2ffa0",
        "LookupName": "View",
        "LookupValue": "Rural",
        "StandardLookupValue": "Rural",
        "LegacyOdataValue": "Rural"
    },
    {
        "LookupKey": "fb640c7ff2d43adc02bdc738db860bff3f78c71e2b868945ebb671b72668489d",
        "LookupName": "View",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "6ee6535e43eedcb07acc30f623fcd226a72e4e0d5c0a5d7afb9b3a7e35f13c2b",
        "LookupName": "View",
        "LookupValue": "Skyline",
        "StandardLookupValue": "Skyline",
        "LegacyOdataValue": "Skyline"
    },
    {
        "LookupKey": "635824144d828220b7b321a7945dbfe2e59f4823b5fbd4a9ba9fdc6c7700f913",
        "LookupName": "View",
        "LookupValue": "Territorial",
        "StandardLookupValue": "Territorial",
        "LegacyOdataValue": "Territorial"
    },
    {
        "LookupKey": "63a614dc6289e91b35f6d72a215a3d29f3d64fbabe0a132a9abda491ab30d693",
        "LookupName": "View",
        "LookupValue": "TreesWoods",
        "StandardLookupValue": "TreesWoods",
        "LegacyOdataValue": "Trees/Woods"
    },
    {
        "LookupKey": "22198a41af687661161f8762a8a5c1c8c71a82d97381be64604032afebb2677b",
        "LookupName": "View",
        "LookupValue": "Valley",
        "StandardLookupValue": "Valley",
        "LegacyOdataValue": "Valley"
    },
    {
        "LookupKey": "b615eabbf0e35ef124a63e29ced0249da5835ed9a744a55c5e678c66b7a60618",
        "LookupName": "View",
        "LookupValue": "Vineyard",
        "StandardLookupValue": "Vineyard",
        "LegacyOdataValue": "Vineyard"
    },
    {
        "LookupKey": "0aa612c5da474ea95a4f11aa21a1a48f4ad8865a0a444e89670d29008299f5ac",
        "LookupName": "View",
        "LookupValue": "Water",
        "StandardLookupValue": "Water",
        "LegacyOdataValue": "Water"
    },
    {
        "LookupKey": "eeab99ffdfd3cf64459c9ff04b1780606ddae4d1de82446c57df00d904977002",
        "LookupName": "WaterSource",
        "LookupValue": "Cistern",
        "StandardLookupValue": "Cistern",
        "LegacyOdataValue": "Cistern"
    },
    {
        "LookupKey": "f19e894713179dd69f95c93750df681c00ba859b2cebe33ce543b1cf8ac30a3d",
        "LookupName": "WaterSource",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "722328ce9068e337e493727dd7a92da74611028b68a8d7e8f299bb3c83434e94",
        "LookupName": "WaterSource",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "09601b6bdf47deead8f0d5ee595e8b7710254fdb7d318d435bd3c3a9d593da44",
        "LookupName": "WaterSource",
        "LookupValue": "Private",
        "StandardLookupValue": "Private",
        "LegacyOdataValue": "Private"
    },
    {
        "LookupKey": "ab0547d3c774b66698d7da999352d1696bc48a8963d8e51cc39b70c988351145",
        "LookupName": "WaterSource",
        "LookupValue": "Public",
        "StandardLookupValue": "Public",
        "LegacyOdataValue": "Public"
    },
    {
        "LookupKey": "3bdfa3aa1f76ff845d2f0e2837d1ac3020aa26581fffbb939404cd4db9761e41",
        "LookupName": "WaterSource",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "5d521c6c07ba5c658b47c460fe2db281ca9dfff9c34dd6ebb015cb2e2b4acdee",
        "LookupName": "WaterSource",
        "LookupValue": "SharedWell",
        "StandardLookupValue": "SharedWell",
        "LegacyOdataValue": "Shared Well"
    },
    {
        "LookupKey": "5f83494d7c996e63d2bde99fd9f478b2658613c986770f9968eef589f3eecd0c",
        "LookupName": "WaterSource",
        "LookupValue": "Spring",
        "StandardLookupValue": "Spring",
        "LegacyOdataValue": "Spring"
    },
    {
        "LookupKey": "c24b3c6a86d475087a2d5964d2bf2bc8d4d98e5af6b1d372b0bc856a470f31fd",
        "LookupName": "WaterSource",
        "LookupValue": "Well",
        "StandardLookupValue": "Well",
        "LegacyOdataValue": "Well"
    },
    {
        "LookupKey": "12dcdd26da3597d44f8f77166c6389f2c68ce515a46eeeb20a43857277159ca8",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "BeachAccess",
        "StandardLookupValue": "BeachAccess",
        "LegacyOdataValue": "Beach Access"
    },
    {
        "LookupKey": "c0aee0a45194d068858c223c6103a1281b1d8a6d59e70c25dfd3fba2622a8f56",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "BeachFront",
        "StandardLookupValue": "BeachFront",
        "LegacyOdataValue": "Beach Front"
    },
    {
        "LookupKey": "d57f137f93b31c64d28c696fa242a67c5fa4383647d58579ffc010cf35624692",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "CanalAccess",
        "StandardLookupValue": "CanalAccess",
        "LegacyOdataValue": "Canal Access"
    },
    {
        "LookupKey": "c1ef04ed70db516bf9ee959e4e28004fc336cf9830d8c4ef6b20df6d834c7c34",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "CanalFront",
        "StandardLookupValue": "CanalFront",
        "LegacyOdataValue": "Canal Front"
    },
    {
        "LookupKey": "c3c650ee48e5ee81403a1940ea1fae24cbef490191fabbe8981ac40cc6c280f0",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "Creek",
        "StandardLookupValue": "Creek",
        "LegacyOdataValue": "Creek"
    },
    {
        "LookupKey": "d807c67c6a55d5325db6a64931cc1625acd6265bad496419c3166c8621b7ed16",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "Lagoon",
        "StandardLookupValue": "Lagoon",
        "LegacyOdataValue": "Lagoon"
    },
    {
        "LookupKey": "6698f13298440faec1e49d904148d0dedf6cffdab0df2443e5b127d4112b5238",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "Lake",
        "StandardLookupValue": "Lake",
        "LegacyOdataValue": "Lake"
    },
    {
        "LookupKey": "66644ac9803e713bce4e10f7b3cbd1699c800e3cecd0f8bcc5e506ccbd1d2b4b",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "LakeFront",
        "StandardLookupValue": "LakeFront",
        "LegacyOdataValue": "Lake Front"
    },
    {
        "LookupKey": "a22c61a552c88dba1bab3a3c57bc41a7ccf7a18cfb6f8636a7a78f5dcd29f280",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "LakePrivileges",
        "StandardLookupValue": "LakePrivileges",
        "LegacyOdataValue": "Lake Privileges"
    },
    {
        "LookupKey": "cb2b106454f58abd3d6e506fccb34c9cd985f5a19b2cc265e84615bccf5b7729",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "NavigableWater",
        "StandardLookupValue": "NavigableWater",
        "LegacyOdataValue": "Navigable Water"
    },
    {
        "LookupKey": "7002daf28695ce897a4abf874dbbc221800d3cc925e294d358689dcec5254094",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "OceanAccess",
        "StandardLookupValue": "OceanAccess",
        "LegacyOdataValue": "Ocean Access"
    },
    {
        "LookupKey": "96b37ca35fc9053862adf2ee0c7ddf189be93faafe3ed4cb0265745bf2aa15db",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "OceanFront",
        "StandardLookupValue": "OceanFront",
        "LegacyOdataValue": "Ocean Front"
    },
    {
        "LookupKey": "92225ae68eb65a5ac9bb864167426b47e1926945114c517bb9c5b9c759c4872e",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "Pond",
        "StandardLookupValue": "Pond",
        "LegacyOdataValue": "Pond"
    },
    {
        "LookupKey": "2aabfa1b38cc3b0779111a8e9a4b2dd356735c1127287a89e25a27b31b2069b9",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "RiverAccess",
        "StandardLookupValue": "RiverAccess",
        "LegacyOdataValue": "River Access"
    },
    {
        "LookupKey": "48993aa948b097e366ae946862d9ffd08edb2467d6feb8cbe886244f23dc541e",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "RiverFront",
        "StandardLookupValue": "RiverFront",
        "LegacyOdataValue": "River Front"
    },
    {
        "LookupKey": "879499f9af9b1c78f449d76ab4bac17c3440249f2f3a6eb0f7fbe170792be384",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "Seawall",
        "StandardLookupValue": "Seawall",
        "LegacyOdataValue": "Seawall"
    },
    {
        "LookupKey": "50ed73bbbf2eacc0cf0a612104e63a5d9afd3e0fe13c0d0516a5dbf384e65f24",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "Stream",
        "StandardLookupValue": "Stream",
        "LegacyOdataValue": "Stream"
    },
    {
        "LookupKey": "67d4c3a25adeddba863e6a49cbea0cc0d27c2bfd91564e076bad2019e1c55481",
        "LookupName": "WaterfrontFeatures",
        "LookupValue": "Waterfront",
        "StandardLookupValue": "Waterfront",
        "LegacyOdataValue": "Waterfront"
    },
    {
        "LookupKey": "17f6e2b65f5c90ae708e796f0c432dcdca793d0987ea49bc10cfe91ba751dbdb",
        "LookupName": "WindowFeatures",
        "LookupValue": "AluminumFrames",
        "StandardLookupValue": "AluminumFrames",
        "LegacyOdataValue": "Aluminum Frames"
    },
    {
        "LookupKey": "1d157979ec84958885ac8aa06a797fb67212efbef33463de5ee3d9354e4a15f3",
        "LookupName": "WindowFeatures",
        "LookupValue": "BayWindows",
        "StandardLookupValue": "BayWindows",
        "LegacyOdataValue": "Bay Windows"
    },
    {
        "LookupKey": "c5285534c121b65a20b4dfb730c6be4903f85be5e672f0f5d7abb5ea0175d150",
        "LookupName": "WindowFeatures",
        "LookupValue": "Blinds",
        "StandardLookupValue": "Blinds",
        "LegacyOdataValue": "Blinds"
    },
    {
        "LookupKey": "de7260dd827ea5a328bcc1a7a67834ae0c4c16fb61b27bf9ae43062d2801db72",
        "LookupName": "WindowFeatures",
        "LookupValue": "DisplayWindows",
        "StandardLookupValue": "DisplayWindows",
        "LegacyOdataValue": "Display Windows"
    },
    {
        "LookupKey": "917745462f323192f9c99125107c28923dc52e93e94121a58d31a803370e96f7",
        "LookupName": "WindowFeatures",
        "LookupValue": "DoublePaneWindows",
        "StandardLookupValue": "DoublePaneWindows",
        "LegacyOdataValue": "Double Pane Windows"
    },
    {
        "LookupKey": "f7fa6ac7900cc75b3e0425a125b41fae4401c7678759c41f9cd56e5a2a33005d",
        "LookupName": "WindowFeatures",
        "LookupValue": "Drapes",
        "StandardLookupValue": "Drapes",
        "LegacyOdataValue": "Drapes"
    },
    {
        "LookupKey": "9c977c0dc8770b0bb6c79b328c77afab7cdbe0b5215c5d49cda9c6f71314a52d",
        "LookupName": "WindowFeatures",
        "LookupValue": "EnergyStarQualifiedWindows",
        "StandardLookupValue": "EnergyStarQualifiedWindows",
        "LegacyOdataValue": "ENERGY STAR Qualified Windows"
    },
    {
        "LookupKey": "eac3948eb44fc90132bf0520d3d893648b22ebe98e44f281a198b4ff24eee7ba",
        "LookupName": "WindowFeatures",
        "LookupValue": "GardenWindows",
        "StandardLookupValue": "GardenWindows",
        "LegacyOdataValue": "Garden Windows"
    },
    {
        "LookupKey": "bd1c5c3fd19924b384e1c26681e6e677bcd4e6ba42f85dc8ec86e91323890f03",
        "LookupName": "WindowFeatures",
        "LookupValue": "InsulatedWindows",
        "StandardLookupValue": "InsulatedWindows",
        "LegacyOdataValue": "Insulated Windows"
    },
    {
        "LookupKey": "58b521eef3b9e71fa43323d5655d23c8c2303ba091aea4ae53163bc44bef7379",
        "LookupName": "WindowFeatures",
        "LookupValue": "LowEmissivityWindows",
        "StandardLookupValue": "LowEmissivityWindows",
        "LegacyOdataValue": "Low Emissivity Windows"
    },
    {
        "LookupKey": "fa955dedc49129fa13487163c4fccb4def706308b3672230aa70133f267d4448",
        "LookupName": "WindowFeatures",
        "LookupValue": "PlantationShutters",
        "StandardLookupValue": "PlantationShutters",
        "LegacyOdataValue": "Plantation Shutters"
    },
    {
        "LookupKey": "d3bfd10d60d501ea5b03bcf5b6334dc6cf0995f060dc3847cb0925d9e43f056e",
        "LookupName": "WindowFeatures",
        "LookupValue": "Screens",
        "StandardLookupValue": "Screens",
        "LegacyOdataValue": "Screens"
    },
    {
        "LookupKey": "68ff268bff06d3bda747a28a56dc452c04d53934aa2f8fc2766b3e883c20a05b",
        "LookupName": "WindowFeatures",
        "LookupValue": "Shutters",
        "StandardLookupValue": "Shutters",
        "LegacyOdataValue": "Shutters"
    },
    {
        "LookupKey": "3fe9776877e5dc86d6a42d6ab58ae8ab5028268529c8b7ecee35fb76873c4c5d",
        "LookupName": "WindowFeatures",
        "LookupValue": "Skylights",
        "StandardLookupValue": "Skylights",
        "LegacyOdataValue": "Skylights"
    },
    {
        "LookupKey": "0bb0e9f73bfef833ade99ee9e70d31918edb92926164b743fb43938f631a023b",
        "LookupName": "WindowFeatures",
        "LookupValue": "SolarScreens",
        "StandardLookupValue": "SolarScreens",
        "LegacyOdataValue": "Solar Screens"
    },
    {
        "LookupKey": "b7adb1a4709a9ad3dec5d451451f13f39e2458b80270b4591bf054e32e20a35f",
        "LookupName": "WindowFeatures",
        "LookupValue": "StormWindows",
        "StandardLookupValue": "StormWindows",
        "LegacyOdataValue": "Storm Windows"
    },
    {
        "LookupKey": "3ea5a60393a0e297314794442a17adee59bdf2ee81808aaa02a246324d37290a",
        "LookupName": "WindowFeatures",
        "LookupValue": "TintedWindows",
        "StandardLookupValue": "TintedWindows",
        "LegacyOdataValue": "Tinted Windows"
    },
    {
        "LookupKey": "45cdae7c3e25ff57d3ba2cdaaab75b4687cd24206d5a8a4ea1369fea468d01d0",
        "LookupName": "WindowFeatures",
        "LookupValue": "TriplePaneWindows",
        "StandardLookupValue": "TriplePaneWindows",
        "LegacyOdataValue": "Triple Pane Windows"
    },
    {
        "LookupKey": "20c7eb4b0155737fea041891f0ac3cd6d6843464ddbc9bcd1547ba57f7ca00ed",
        "LookupName": "WindowFeatures",
        "LookupValue": "WindowCoverings",
        "StandardLookupValue": "WindowCoverings",
        "LegacyOdataValue": "Window Coverings"
    },
    {
        "LookupKey": "ab918d4d6868c3996edc6115b0d6262f6f4dc300c188f7a72ae026ff02c0364b",
        "LookupName": "WindowFeatures",
        "LookupValue": "WindowTreatments",
        "StandardLookupValue": "WindowTreatments",
        "LegacyOdataValue": "Window Treatments"
    },
    {
        "LookupKey": "cb155fd9a9a01539f06ddd0b884e37033616ac325194e6a3c06fba54a6900eb0",
        "LookupName": "WindowFeatures",
        "LookupValue": "WoodFrames",
        "StandardLookupValue": "WoodFrames",
        "LegacyOdataValue": "Wood Frames"
    },
    {
        "LookupKey": "6d99cea9d3d90115e777d9002a9aae66fd696ac846e5f394dba038d499adf881",
        "LookupName": "YearBuiltSource",
        "LookupValue": "Appraiser",
        "StandardLookupValue": "Appraiser",
        "LegacyOdataValue": "Appraiser"
    },
    {
        "LookupKey": "f87bdd41977a60b182283ba9ec30fcd11e4ff5e9c6c9d6c4b26b535b70b279ec",
        "LookupName": "YearBuiltSource",
        "LookupValue": "Assessor",
        "StandardLookupValue": "Assessor",
        "LegacyOdataValue": "Assessor"
    },
    {
        "LookupKey": "624074970b99dfc003037e3ab60625461d40b2e6045b9f74235e2f3e86f1f1af",
        "LookupName": "YearBuiltSource",
        "LookupValue": "Builder",
        "StandardLookupValue": "Builder",
        "LegacyOdataValue": "Builder"
    },
    {
        "LookupKey": "476b6727ed75498a86b846696514bdeaab9b5c97c91f94dc6106cb42f36bae04",
        "LookupName": "YearBuiltSource",
        "LookupValue": "Estimated",
        "StandardLookupValue": "Estimated",
        "LegacyOdataValue": "Estimated"
    },
    {
        "LookupKey": "640f7ea913a6d3e4a26fd94ead1bc63c787a5f03a7b281e8e709932567524b83",
        "LookupName": "YearBuiltSource",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "569f1af1e38917ae119982ed85a67330f442f6c56f5e113e69152bad2cdc4055",
        "LookupName": "YearBuiltSource",
        "LookupValue": "Owner",
        "StandardLookupValue": "Owner",
        "LegacyOdataValue": "Owner"
    },
    {
        "LookupKey": "26de0ed9264858767aa30f7853107d78b57461e500fbd8dbcd859012453031f9",
        "LookupName": "YearBuiltSource",
        "LookupValue": "PublicRecords",
        "StandardLookupValue": "PublicRecords",
        "LegacyOdataValue": "Public Records"
    },
    {
        "LookupKey": "396d17be70d9f406fd7b96b0ac57b59873c2c0dd904775d17eb3c6e8550b48a4",
        "LookupName": "YearBuiltSource",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "ab3d6da25f27d547c8786c320e49ec08467c0d4f03273031fce179e2ef660a94",
        "LookupName": "MemberDesignation",
        "LookupValue": "AccreditedBuyersRepresentative",
        "StandardLookupValue": "AccreditedBuyersRepresentative",
        "LegacyOdataValue": "Accredited Buyer's Representative / ABR"
    },
    {
        "LookupKey": "afb7387037a475c0c4fffbf9caccb18ae02764e87103282ebb82c6ee2fb435dc",
        "LookupName": "MemberDesignation",
        "LookupValue": "AccreditedLandConsultant",
        "StandardLookupValue": "AccreditedLandConsultant",
        "LegacyOdataValue": "Accredited Land Consultant / ALC"
    },
    {
        "LookupKey": "f99b7d0b84233b227336af89e3c528d0f21ca9ff6b4e070e17dfdf47b956158d",
        "LookupName": "MemberDesignation",
        "LookupValue": "AtHomeWithDiversity",
        "StandardLookupValue": "AtHomeWithDiversity",
        "LegacyOdataValue": "At Home With Diversity / AHWD"
    },
    {
        "LookupKey": "58e79946cbab7d95027a0604782454cf676295873c16de5d92896ab08a9387cc",
        "LookupName": "MemberDesignation",
        "LookupValue": "CertifiedCommercialInvestmentMember",
        "StandardLookupValue": "CertifiedCommercialInvestmentMember",
        "LegacyOdataValue": "Certified Commercial Investment Member / CCIM"
    },
    {
        "LookupKey": "a3000631d96bee8be44f1042afd1775a0e3230ca1fcdaec99f5a314714be5b4b",
        "LookupName": "MemberDesignation",
        "LookupValue": "CertifiedDistressedPropertyExpert",
        "StandardLookupValue": "CertifiedDistressedPropertyExpert",
        "LegacyOdataValue": "Certified Distressed Property Expert / CDPE"
    },
    {
        "LookupKey": "c36dbcba31e0d8f95701b90d6c788bf2c076ab145440fd5baf4bdca3495917c3",
        "LookupName": "MemberDesignation",
        "LookupValue": "CertifiedInternationalPropertySpecialist",
        "StandardLookupValue": "CertifiedInternationalPropertySpecialist",
        "LegacyOdataValue": "Certified International Property Specialist / CIPS"
    },
    {
        "LookupKey": "100078441d72134089256feea65c79b12a5ea2a90c5f8f09e234a8622bb84c20",
        "LookupName": "MemberDesignation",
        "LookupValue": "CertifiedPropertyManager",
        "StandardLookupValue": "CertifiedPropertyManager",
        "LegacyOdataValue": "Certified Property Manager / CPM"
    },
    {
        "LookupKey": "969b79551fe7e97a4bbbc6a5924dee9a1ffdfa2b8a5b1955d1a6ebc36f5b80aa",
        "LookupName": "MemberDesignation",
        "LookupValue": "CertifiedRealEstateBrokerageManager",
        "StandardLookupValue": "CertifiedRealEstateBrokerageManager",
        "LegacyOdataValue": "Certified Real Estate Brokerage Manager / CRB"
    },
    {
        "LookupKey": "08423739f8fc8cf5bacd87fc2ee76bd8f3312af5627c31a54157afc94f7849d8",
        "LookupName": "MemberDesignation",
        "LookupValue": "CertifiedRealEstateTeamSpecialist",
        "StandardLookupValue": "CertifiedRealEstateTeamSpecialist",
        "LegacyOdataValue": "Certified Real Estate Team Specialist / C-RETS"
    },
    {
        "LookupKey": "d95e95a1f83a4b87535f2ed202d62a0e1ceaabbc5c548665ab2d83dafe419093",
        "LookupName": "MemberDesignation",
        "LookupValue": "CertifiedResidentialSpecialist",
        "StandardLookupValue": "CertifiedResidentialSpecialist",
        "LegacyOdataValue": "Certified Residential Specialist / CRS"
    },
    {
        "LookupKey": "04cad354d75ba0e1a1fcfd47e8a2cc691ab6d3fae19fa0ffef21beeb90519f25",
        "LookupName": "MemberDesignation",
        "LookupValue": "CounselorOfRealEstate",
        "StandardLookupValue": "CounselorOfRealEstate",
        "LegacyOdataValue": "Counselor of Real Estate / CRE"
    },
    {
        "LookupKey": "27e5077d7dbc7b5cd53b927ecf5e088605dee3a38fc53d8f3a75c1262c812dc7",
        "LookupName": "MemberDesignation",
        "LookupValue": "ePRO",
        "StandardLookupValue": "ePRO",
        "LegacyOdataValue": "e-PRO"
    },
    {
        "LookupKey": "a82fb3259b0d98af84c39918ac2362cbae14330919ae622def301fbdc18fec77",
        "LookupName": "MemberDesignation",
        "LookupValue": "GeneralAccreditedAppraiser",
        "StandardLookupValue": "GeneralAccreditedAppraiser",
        "LegacyOdataValue": "General Accredited Appraiser / GAA"
    },
    {
        "LookupKey": "89f5db9d5a5737dbd280fc35f6c4bd715ea27124c7d6641c56ba208bbbec946c",
        "LookupName": "MemberDesignation",
        "LookupValue": "GraduateRealtorInstitute",
        "StandardLookupValue": "GraduateRealtorInstitute",
        "LegacyOdataValue": "Graduate"
    },
    {
        "LookupKey": "1e547347a18deb9d098de22f8a0f28bffa0d4c1a08b3f29d9d8ab9e93b6a041e",
        "LookupName": "MemberDesignation",
        "LookupValue": "MilitaryRelocationProfessional",
        "StandardLookupValue": "MilitaryRelocationProfessional",
        "LegacyOdataValue": "Military Relocation Professional / MRP"
    },
    {
        "LookupKey": "b4f44be1e718960e032bfe8165cffb714577df5ea675c6c9acfe6b592f123d3d",
        "LookupName": "MemberDesignation",
        "LookupValue": "NARsGreenDesignation",
        "StandardLookupValue": "NARsGreenDesignation",
        "LegacyOdataValue": "NAR's Green Designation / GREEN"
    },
    {
        "LookupKey": "d1ab9c07c0d3bb53e3b38497796b87b41a59ac9f7bb4378af5ecacc61059be60",
        "LookupName": "MemberDesignation",
        "LookupValue": "PerformanceManagementNetwork",
        "StandardLookupValue": "PerformanceManagementNetwork",
        "LegacyOdataValue": "Performance Management Network / PMN"
    },
    {
        "LookupKey": "b2b253afdae88b76bade62093287e8517f31a20427b5533b4a28ed863eb4a2bc",
        "LookupName": "MemberDesignation",
        "LookupValue": "PricingStrategyAdvisor",
        "StandardLookupValue": "PricingStrategyAdvisor",
        "LegacyOdataValue": "Pricing Strategy Advisor / PSA"
    },
    {
        "LookupKey": "7de9d55517b176ed828d405bcaea6a6bdfbc7b8870b42e0f12d9c5d4949584dd",
        "LookupName": "MemberDesignation",
        "LookupValue": "RealEstateNegotiationExpert",
        "StandardLookupValue": "RealEstateNegotiationExpert",
        "LegacyOdataValue": "Real Estate Negotiation Expert / RENE"
    },
    {
        "LookupKey": "4a845b8de1747bd8de45d33b088300f536573c162c16ff247b60e4f5da388f2d",
        "LookupName": "MemberDesignation",
        "LookupValue": "RealtorAssociationCertifiedExecutive",
        "StandardLookupValue": "RealtorAssociationCertifiedExecutive",
        "LegacyOdataValue": "REALTOR Association Certified Executive / RCE"
    },
    {
        "LookupKey": "ce7a18418782ca879427219259a8d872456f97ac86fc06883ec51c7527932e12",
        "LookupName": "MemberDesignation",
        "LookupValue": "ResidentialAccreditedAppraiser",
        "StandardLookupValue": "ResidentialAccreditedAppraiser",
        "LegacyOdataValue": "Residential Accredited Appraiser / RAA"
    },
    {
        "LookupKey": "c5f475f5ef2ba8378b25e3e824554dd840729e21b308a1986809a790c4d0d550",
        "LookupName": "MemberDesignation",
        "LookupValue": "ResortAndSecondHomePropertySpecialist",
        "StandardLookupValue": "ResortAndSecondHomePropertySpecialist",
        "LegacyOdataValue": "Resort & Second-Home Property Specialist / RSPS"
    },
    {
        "LookupKey": "20e7ea38ed744176d864a22296181b24e2df2b94842573ca0ead7dc041771a60",
        "LookupName": "MemberDesignation",
        "LookupValue": "SellerRepresentativeSpecialist",
        "StandardLookupValue": "SellerRepresentativeSpecialist",
        "LegacyOdataValue": "Seller Representative Specialist / SRS"
    },
    {
        "LookupKey": "2c387da6b2f7950d77ab3b70a9053703d041f2bf6a7c4ef061554832b14ec843",
        "LookupName": "MemberDesignation",
        "LookupValue": "SeniorsRealEstateSpecialist",
        "StandardLookupValue": "SeniorsRealEstateSpecialist",
        "LegacyOdataValue": "Seniors Real Estate Specialist / SRES"
    },
    {
        "LookupKey": "fee04071db47e101ae8241a1832835d2e39ea75735727657c3c15fb809118134",
        "LookupName": "MemberDesignation",
        "LookupValue": "ShortSalesAndForeclosureResource",
        "StandardLookupValue": "ShortSalesAndForeclosureResource",
        "LegacyOdataValue": "Short Sales & Foreclosure Resource / SFR"
    },
    {
        "LookupKey": "6fda96c93867ea0e52d0d81ba476bb73124916f7eb5e0e3df89735ddebfd7885",
        "LookupName": "MemberDesignation",
        "LookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "StandardLookupValue": "SocietyOfIndustrialAndOfficeRealtors",
        "LegacyOdataValue": "Society of Industrial and Office REALTORS / SIOR"
    },
    {
        "LookupKey": "b10a96cae97be2b3e4c880dbc83b7107fa8fd92db5472457a6f70d54be2a6111",
        "LookupName": "MemberDesignation",
        "LookupValue": "TransnationalReferralCertification",
        "StandardLookupValue": "TransnationalReferralCertification",
        "LegacyOdataValue": "Transnational Referral Certification / TRC"
    },
    {
        "LookupKey": "d56dfb0ccbf974e00dbc0e13bebed5c34c97853c06f1825d795c0cb5e4e9e79b",
        "LookupName": "Languages",
        "LookupValue": "Abkhazian",
        "StandardLookupValue": "Abkhazian",
        "LegacyOdataValue": "Abkhazian"
    },
    {
        "LookupKey": "6cee8df87ba5426741b176d1be4c4bd12c19b5351200631c006a6adfb2e49d82",
        "LookupName": "Languages",
        "LookupValue": "Afar",
        "StandardLookupValue": "Afar",
        "LegacyOdataValue": "Afar"
    },
    {
        "LookupKey": "ecd09a1f166dc665d002ad2f5d905d0fb2e0cead96e958b3f97d3b2fbf3940b4",
        "LookupName": "Languages",
        "LookupValue": "Afrikaans",
        "StandardLookupValue": "Afrikaans",
        "LegacyOdataValue": "Afrikaans"
    },
    {
        "LookupKey": "d8ce76a8cc2900fd647a2c6ec73413e6810be3de9b7c131125d2dd81c8a31a02",
        "LookupName": "Languages",
        "LookupValue": "Albanian",
        "StandardLookupValue": "Albanian",
        "LegacyOdataValue": "Albanian"
    },
    {
        "LookupKey": "15bedf41d52b77064946568cb6dfb73a455977987781b2a4fe2de380c8c4869b",
        "LookupName": "Languages",
        "LookupValue": "AmericanSignLanguage",
        "StandardLookupValue": "AmericanSignLanguage",
        "LegacyOdataValue": "American Sign Language"
    },
    {
        "LookupKey": "20840f59bc5912a268fa6b5fd1a309b09d2c3f90479edf77d1db9b5a711905b4",
        "LookupName": "Languages",
        "LookupValue": "Amharic",
        "StandardLookupValue": "Amharic",
        "LegacyOdataValue": "Amharic"
    },
    {
        "LookupKey": "3d60eebb5d758ca46aae575e7ad1fabc7c8bb2a79e8355f20f501af1f4358ef2",
        "LookupName": "Languages",
        "LookupValue": "Arabic",
        "StandardLookupValue": "Arabic",
        "LegacyOdataValue": "Arabic"
    },
    {
        "LookupKey": "9586aea122607ef01c07384e1913cbcfaad1fc967034de59e464c1f9b67c1d6c",
        "LookupName": "Languages",
        "LookupValue": "Aramaic",
        "StandardLookupValue": "Aramaic",
        "LegacyOdataValue": "Aramaic"
    },
    {
        "LookupKey": "43ef52336f69bada94024ae51c085752bf0c8d0478ea995df7653e48095d67d0",
        "LookupName": "Languages",
        "LookupValue": "Armenian",
        "StandardLookupValue": "Armenian",
        "LegacyOdataValue": "Armenian"
    },
    {
        "LookupKey": "ba8104b44348eea0c31c3cff90124290461e49c046657e09f9066224d9854ce2",
        "LookupName": "Languages",
        "LookupValue": "Assamese",
        "StandardLookupValue": "Assamese",
        "LegacyOdataValue": "Assamese"
    },
    {
        "LookupKey": "56af8fd5289e24c83908c515df77c6019f93d7cbc0abbc77500ce48ee14e73a3",
        "LookupName": "Languages",
        "LookupValue": "AssyrianNeoAramaic",
        "StandardLookupValue": "AssyrianNeoAramaic",
        "LegacyOdataValue": "Assyrian Neo-Aramaic"
    },
    {
        "LookupKey": "6f416b2f2b6d5d59e41014ecdd2e95fd9ec51f5d0815d9dd34dcd5b2c2d2c623",
        "LookupName": "Languages",
        "LookupValue": "Avestan",
        "StandardLookupValue": "Avestan",
        "LegacyOdataValue": "Avestan"
    },
    {
        "LookupKey": "e08be3e47de363b01e12925c9516fc738ab86ffe2e512ab6613f794f3e543adc",
        "LookupName": "Languages",
        "LookupValue": "Aymara",
        "StandardLookupValue": "Aymara",
        "LegacyOdataValue": "Aymara"
    },
    {
        "LookupKey": "eb628fe79db463a96c7c9f44948c59eb042395963e9ef41838437acc3624b061",
        "LookupName": "Languages",
        "LookupValue": "Azerbaijani",
        "StandardLookupValue": "Azerbaijani",
        "LegacyOdataValue": "Azerbaijani"
    },
    {
        "LookupKey": "c4694d6f2f6f8b9b0c57990c0fdc8fb215dbb6bf697a380e7ffb8984b5932d4b",
        "LookupName": "Languages",
        "LookupValue": "Bambara",
        "StandardLookupValue": "Bambara",
        "LegacyOdataValue": "Bambara"
    },
    {
        "LookupKey": "83d0e9521995176471fd5ef396f40bd9ff608bdb451211af1b25f265e48b13ed",
        "LookupName": "Languages",
        "LookupValue": "Bashkir",
        "StandardLookupValue": "Bashkir",
        "LegacyOdataValue": "Bashkir"
    },
    {
        "LookupKey": "fc3ea4d3d6e5f17176c65501a8c75c5aa7564e4606fcb634b2c6334e7ed9db5a",
        "LookupName": "Languages",
        "LookupValue": "Basque",
        "StandardLookupValue": "Basque",
        "LegacyOdataValue": "Basque"
    },
    {
        "LookupKey": "23f2ff9a7b3440ffca5989edb8a457ce77381c49ba1714fc929ae12a71268252",
        "LookupName": "Languages",
        "LookupValue": "Bengali",
        "StandardLookupValue": "Bengali",
        "LegacyOdataValue": "Bengali"
    },
    {
        "LookupKey": "e7180cb5e754bfa3e5bf37541c0ac36300b4abbe67bbfa659e49cde58e4d82e7",
        "LookupName": "Languages",
        "LookupValue": "Bihari",
        "StandardLookupValue": "Bihari",
        "LegacyOdataValue": "Bihari"
    },
    {
        "LookupKey": "a2f6aad7371c08f68709fbc57dfb985e81e4122fc288de1da0941b909e74a73f",
        "LookupName": "Languages",
        "LookupValue": "Bikol",
        "StandardLookupValue": "Bikol",
        "LegacyOdataValue": "Bikol"
    },
    {
        "LookupKey": "9ac90e1883b54e1346b8834728906e45d9c1764440bea8fbc9fd6daa4235c2e5",
        "LookupName": "Languages",
        "LookupValue": "Bislama",
        "StandardLookupValue": "Bislama",
        "LegacyOdataValue": "Bislama"
    },
    {
        "LookupKey": "ec6a7db8f37fe5a33d822b3c0caffbf41fb41724af8062630308cb741e60b643",
        "LookupName": "Languages",
        "LookupValue": "Bosnian",
        "StandardLookupValue": "Bosnian",
        "LegacyOdataValue": "Bosnian"
    },
    {
        "LookupKey": "9f3a227a961d05ec72a9274d2995bb9fd6af20b223d70c88bd1981142690559e",
        "LookupName": "Languages",
        "LookupValue": "BrazilianPortuguese",
        "StandardLookupValue": "BrazilianPortuguese",
        "LegacyOdataValue": "Brazilian Portuguese"
    },
    {
        "LookupKey": "8f602c7c9c32934536db9b24c2320e71b9afc198053fab1507e4d76fec79761d",
        "LookupName": "Languages",
        "LookupValue": "Bulgarian",
        "StandardLookupValue": "Bulgarian",
        "LegacyOdataValue": "Bulgarian"
    },
    {
        "LookupKey": "d982a68d50994f4a12e3dd3e9a5ad06f9558a55f4321669d77abfe422c8229f9",
        "LookupName": "Languages",
        "LookupValue": "Burmese",
        "StandardLookupValue": "Burmese",
        "LegacyOdataValue": "Burmese"
    },
    {
        "LookupKey": "f05edb6e40a9752021f97a017e9c9e57349e9ce8a166aebc3b931dee31123d77",
        "LookupName": "Languages",
        "LookupValue": "Byelorussian",
        "StandardLookupValue": "Byelorussian",
        "LegacyOdataValue": "Byelorussian"
    },
    {
        "LookupKey": "7cd9dcb2054e8872704c4edac3fec70f3253381264a60a697c9b56f434107cf3",
        "LookupName": "Languages",
        "LookupValue": "Cambodian",
        "StandardLookupValue": "Cambodian",
        "LegacyOdataValue": "Cambodian"
    },
    {
        "LookupKey": "68898663a98ce9d38cce3026380053142b28237d5120eb64728de1becfec0c5c",
        "LookupName": "Languages",
        "LookupValue": "Cantonese",
        "StandardLookupValue": "Cantonese",
        "LegacyOdataValue": "Cantonese"
    },
    {
        "LookupKey": "fa2b9151b17be96c088843b7b30c221ba681d301226a6c1423f330105cab5d72",
        "LookupName": "Languages",
        "LookupValue": "CapeVerdeanCreole",
        "StandardLookupValue": "CapeVerdeanCreole",
        "LegacyOdataValue": "Cape Verdean Creole"
    },
    {
        "LookupKey": "a7755adb6410ce72161064b4b9c4ee0aa849fe66fe4056fac4186c650bceabee",
        "LookupName": "Languages",
        "LookupValue": "Catalan",
        "StandardLookupValue": "Catalan",
        "LegacyOdataValue": "Catalan"
    },
    {
        "LookupKey": "ca78683b0c9433e4b33b7a45c276be66db63f397033539c329cbd475427b75ef",
        "LookupName": "Languages",
        "LookupValue": "Cebuano",
        "StandardLookupValue": "Cebuano",
        "LegacyOdataValue": "Cebuano"
    },
    {
        "LookupKey": "6781c83d59c18a398d9b2cef6585b18f79698778c455e99eb8080df47bc47f48",
        "LookupName": "Languages",
        "LookupValue": "Chamorro",
        "StandardLookupValue": "Chamorro",
        "LegacyOdataValue": "Chamorro"
    },
    {
        "LookupKey": "238496196ae1de7086271e5666b80f3fdb5c6b4ccb942536a24b6fb7530c3498",
        "LookupName": "Languages",
        "LookupValue": "Chechen",
        "StandardLookupValue": "Chechen",
        "LegacyOdataValue": "Chechen"
    },
    {
        "LookupKey": "27865702590e28bc357d12a002b4fcb7b0f5c9fb438b505a9e0bf669d969519d",
        "LookupName": "Languages",
        "LookupValue": "Chinese",
        "StandardLookupValue": "Chinese",
        "LegacyOdataValue": "Chinese"
    },
    {
        "LookupKey": "8069cea1111d42dad7e06ef3f858013fcef11881a68b99bb3a239ef8917c2393",
        "LookupName": "Languages",
        "LookupValue": "Chuukese",
        "StandardLookupValue": "Chuukese",
        "LegacyOdataValue": "Chuukese"
    },
    {
        "LookupKey": "bed15638b44f4e733cde30c5a1e1dd0420908386f4d53126c5833c0632209ff6",
        "LookupName": "Languages",
        "LookupValue": "Chuvash",
        "StandardLookupValue": "Chuvash",
        "LegacyOdataValue": "Chuvash"
    },
    {
        "LookupKey": "8ffb8a8f2794f2e96a9a1b2a88667a21f40c6c7d24fc9036b9391b0953e0e9aa",
        "LookupName": "Languages",
        "LookupValue": "Cornish",
        "StandardLookupValue": "Cornish",
        "LegacyOdataValue": "Cornish"
    },
    {
        "LookupKey": "9c19f28ee68a9a11363868c114a28572626d33b8c33ff8a589ac1b72619e4472",
        "LookupName": "Languages",
        "LookupValue": "Corsican",
        "StandardLookupValue": "Corsican",
        "LegacyOdataValue": "Corsican"
    },
    {
        "LookupKey": "fa4aa252f171b12e9b38668e22b3dc6ee6ea7d70b4a3159133cf264c0b5b58cb",
        "LookupName": "Languages",
        "LookupValue": "Croatian",
        "StandardLookupValue": "Croatian",
        "LegacyOdataValue": "Croatian"
    },
    {
        "LookupKey": "b6a8d6236c0829c37f8bffbeeb2ca4b5815ceb01809938cd7db1405395d2bfc9",
        "LookupName": "Languages",
        "LookupValue": "Czech",
        "StandardLookupValue": "Czech",
        "LegacyOdataValue": "Czech"
    },
    {
        "LookupKey": "96f84cdb07060c46f26537e6469fd68990eae3cbb477d9d5fbea14d3cf7c2641",
        "LookupName": "Languages",
        "LookupValue": "Danish",
        "StandardLookupValue": "Danish",
        "LegacyOdataValue": "Danish"
    },
    {
        "LookupKey": "65bff790bc33c032705a42598539db158eef68499cd3bfdf2dc4b48789a8d348",
        "LookupName": "Languages",
        "LookupValue": "Dari",
        "StandardLookupValue": "Dari",
        "LegacyOdataValue": "Dari Afghan Persian"
    },
    {
        "LookupKey": "cac299c39677022827790f31ad4ad7c67264e4c43824be12ec87db686e49b522",
        "LookupName": "Languages",
        "LookupValue": "Dioula",
        "StandardLookupValue": "Dioula",
        "LegacyOdataValue": "Dioula"
    },
    {
        "LookupKey": "773a4041fb6dec2e9f457e2b029918c5a38163a4fe6bf860bff722ece12bfa6b",
        "LookupName": "Languages",
        "LookupValue": "Dutch",
        "StandardLookupValue": "Dutch",
        "LegacyOdataValue": "Dutch"
    },
    {
        "LookupKey": "e502da802c94eea1f0d3722dbcacf19b07c58f5a454b4e25b3a3d96834c114ac",
        "LookupName": "Languages",
        "LookupValue": "Dzongkha",
        "StandardLookupValue": "Dzongkha",
        "LegacyOdataValue": "Dzongkha"
    },
    {
        "LookupKey": "6aca5b1d9ad7eec9d1514fb5180bf9ff6c9ade45528addc20cf16c3a99be3a83",
        "LookupName": "Languages",
        "LookupValue": "English",
        "StandardLookupValue": "English",
        "LegacyOdataValue": "English"
    },
    {
        "LookupKey": "49bfe14fac544e0ea4461b0bdfbeb0d75fc29824fb109d730fc787762d7ff0c0",
        "LookupName": "Languages",
        "LookupValue": "Esperanto",
        "StandardLookupValue": "Esperanto",
        "LegacyOdataValue": "Esperanto"
    },
    {
        "LookupKey": "21d86349d3ce90ff14def4a7367fcf59c5b560e40ebdbcfbf46b44cafd8e8e48",
        "LookupName": "Languages",
        "LookupValue": "Estonian",
        "StandardLookupValue": "Estonian",
        "LegacyOdataValue": "Estonian"
    },
    {
        "LookupKey": "cde1b6ad67458a87c530553e5f61f78df6dc2a72fb3ca4e776f32168960f91b2",
        "LookupName": "Languages",
        "LookupValue": "Faroese",
        "StandardLookupValue": "Faroese",
        "LegacyOdataValue": "Faroese"
    },
    {
        "LookupKey": "f34716d5601526215a9c7d5c2c5b6a4d3e195e7968ca5957d83e7721e5e550e7",
        "LookupName": "Languages",
        "LookupValue": "Farsi",
        "StandardLookupValue": "Farsi",
        "LegacyOdataValue": "Farsi"
    },
    {
        "LookupKey": "329ff4fef358178a560549a0a1d80ddea01a93efb0818b97b135af97774949ae",
        "LookupName": "Languages",
        "LookupValue": "Fiji",
        "StandardLookupValue": "Fiji",
        "LegacyOdataValue": "Fiji"
    },
    {
        "LookupKey": "b16abaaad133ce6d999e90837e3f44c3025292ca87643e32757342ce9fadf09c",
        "LookupName": "Languages",
        "LookupValue": "Finnish",
        "StandardLookupValue": "Finnish",
        "LegacyOdataValue": "Finnish"
    },
    {
        "LookupKey": "28d21330ba2ae66d4f46bccdb0be537bb0d769422c0f608e5c2b25774e0ba4fa",
        "LookupName": "Languages",
        "LookupValue": "Flemish",
        "StandardLookupValue": "Flemish",
        "LegacyOdataValue": "Flemish"
    },
    {
        "LookupKey": "c6d75f8cd8020fb0d00bb0e9912124909bb2b16b7aa8c7be51a56e175de62bf0",
        "LookupName": "Languages",
        "LookupValue": "French",
        "StandardLookupValue": "French",
        "LegacyOdataValue": "French"
    },
    {
        "LookupKey": "fb301476654b687badb522495bbb0c24ed1b0f05bff9973697fdc705f3f3f592",
        "LookupName": "Languages",
        "LookupValue": "Frisian",
        "StandardLookupValue": "Frisian",
        "LegacyOdataValue": "Frisian"
    },
    {
        "LookupKey": "009f1b2f003d6a2e429c0d2d69858a086574a71004ee0d70acd232787b0f517e",
        "LookupName": "Languages",
        "LookupValue": "Galician",
        "StandardLookupValue": "Galician",
        "LegacyOdataValue": "Galician"
    },
    {
        "LookupKey": "d601d2053bc553019b7c4706beebcc285d2a963c230b5e9666b5c9b12057e543",
        "LookupName": "Languages",
        "LookupValue": "Georgian",
        "StandardLookupValue": "Georgian",
        "LegacyOdataValue": "Georgian"
    },
    {
        "LookupKey": "6e0a50da21c32c544a2f7dac7619e0e70487e2b346b6d6606d1a13861b5fbcc7",
        "LookupName": "Languages",
        "LookupValue": "German",
        "StandardLookupValue": "German",
        "LegacyOdataValue": "German"
    },
    {
        "LookupKey": "26f34036fead55e6a3ff89c99b454538ff39eee9a2c59d8e20bef23cf52bade0",
        "LookupName": "Languages",
        "LookupValue": "Greek",
        "StandardLookupValue": "Greek",
        "LegacyOdataValue": "Greek"
    },
    {
        "LookupKey": "95eb76f41107b852cb216086eec9d95786b147b27f65ced3a82001f21c904cf3",
        "LookupName": "Languages",
        "LookupValue": "Greenlandic",
        "StandardLookupValue": "Greenlandic",
        "LegacyOdataValue": "Greenlandic"
    },
    {
        "LookupKey": "ca90fccd9b9db2fb930b4684f46a5f625035d6114788c1ea3b131b35f44dd65a",
        "LookupName": "Languages",
        "LookupValue": "Guarani",
        "StandardLookupValue": "Guarani",
        "LegacyOdataValue": "Guarani"
    },
    {
        "LookupKey": "d701364874bea77ccb71b6d6503fae3664e5ea202b0d3d176e30f09504dace3f",
        "LookupName": "Languages",
        "LookupValue": "Gujarati",
        "StandardLookupValue": "Gujarati",
        "LegacyOdataValue": "Gujarati"
    },
    {
        "LookupKey": "b95299da84bdb1d846e67d0db069cd0979ef9101efed0c5e6b8f62e9b016e05c",
        "LookupName": "Languages",
        "LookupValue": "HaitianCreole",
        "StandardLookupValue": "HaitianCreole",
        "LegacyOdataValue": "Haitian Creole"
    },
    {
        "LookupKey": "ec69bafee691cc18ed4edf19e5d8fe6c55d96fb7673720e7f0e41a19921060cc",
        "LookupName": "Languages",
        "LookupValue": "Hausa",
        "StandardLookupValue": "Hausa",
        "LegacyOdataValue": "Hausa"
    },
    {
        "LookupKey": "8b37acc55fa7e46e0c9d75d693adcc815d7623e4b290550910fd9be240b8901d",
        "LookupName": "Languages",
        "LookupValue": "Hebrew",
        "StandardLookupValue": "Hebrew",
        "LegacyOdataValue": "Hebrew"
    },
    {
        "LookupKey": "3af39913691b42b455a1b4af1f3df3dd5baa23461cc0ea5d68085928887ae1ec",
        "LookupName": "Languages",
        "LookupValue": "Herero",
        "StandardLookupValue": "Herero",
        "LegacyOdataValue": "Herero"
    },
    {
        "LookupKey": "9551e34542139eaa21fe1bcaa90c29c2e8e468fffb4817a0d051396bc3859a8d",
        "LookupName": "Languages",
        "LookupValue": "Hiligaynon",
        "StandardLookupValue": "Hiligaynon",
        "LegacyOdataValue": "Hiligaynon"
    },
    {
        "LookupKey": "3fb091e03dbfb82cdae233c284605777da25abedb379c2c77390d33121e1564b",
        "LookupName": "Languages",
        "LookupValue": "Hindi",
        "StandardLookupValue": "Hindi",
        "LegacyOdataValue": "Hindi"
    },
    {
        "LookupKey": "41e69e1d32101c89df171ff281ffe8ce6d4e59d9c9265e30a4c5a16b614855fb",
        "LookupName": "Languages",
        "LookupValue": "HiriMotu",
        "StandardLookupValue": "HiriMotu",
        "LegacyOdataValue": "Hiri Motu"
    },
    {
        "LookupKey": "533bdf071ecf45ca15845645964eb9c0b61c927314b231ca910bf3eceddeffe7",
        "LookupName": "Languages",
        "LookupValue": "Hmong",
        "StandardLookupValue": "Hmong",
        "LegacyOdataValue": "Hmong"
    },
    {
        "LookupKey": "d171152f8f5521a23559c118b094f73a3d2ebbeb1046407ee657b38eaa6878be",
        "LookupName": "Languages",
        "LookupValue": "Hungarian",
        "StandardLookupValue": "Hungarian",
        "LegacyOdataValue": "Hungarian"
    },
    {
        "LookupKey": "5fd3caec3bccf91ec85edaff489bdadbf64ddee9177bd9581b3a0a701529f94b",
        "LookupName": "Languages",
        "LookupValue": "Iban",
        "StandardLookupValue": "Iban",
        "LegacyOdataValue": "Iban"
    },
    {
        "LookupKey": "45d81d572b519375af9ebd7ae87d807e083a2c9807c5db1d5c838dfb05feddd5",
        "LookupName": "Languages",
        "LookupValue": "Icelandic",
        "StandardLookupValue": "Icelandic",
        "LegacyOdataValue": "Icelandic"
    },
    {
        "LookupKey": "3f0710c1a84562eee7698249d2859a66f38e3733c61d73ed615cb0086eff89ae",
        "LookupName": "Languages",
        "LookupValue": "Igbo",
        "StandardLookupValue": "Igbo",
        "LegacyOdataValue": "Igbo"
    },
    {
        "LookupKey": "ed383904c6b8e0adaa8f0e84c0d3eb7f824ae25a9f22fb45aec391284f92f0fd",
        "LookupName": "Languages",
        "LookupValue": "Ilocano",
        "StandardLookupValue": "Ilocano",
        "LegacyOdataValue": "Ilocano"
    },
    {
        "LookupKey": "8c3902073e1a46faa53a733798d48bf773264496fedfc7bc0f2c873fd920a8c4",
        "LookupName": "Languages",
        "LookupValue": "Indonesian",
        "StandardLookupValue": "Indonesian",
        "LegacyOdataValue": "Indonesian"
    },
    {
        "LookupKey": "dfdcd1d76c00ea493abbad982b0b3ec94308ed6124f3369f0d88849e5317e5ee",
        "LookupName": "Languages",
        "LookupValue": "Interlingua",
        "StandardLookupValue": "Interlingua",
        "LegacyOdataValue": "Interlingua"
    },
    {
        "LookupKey": "879d1ce3921a996a79d1b5c00f3804f9b14c6c1bc28febb3b3cdc94a2efee1de",
        "LookupName": "Languages",
        "LookupValue": "Inuktitut",
        "StandardLookupValue": "Inuktitut",
        "LegacyOdataValue": "Inuktitut"
    },
    {
        "LookupKey": "edd0bda9012408b496f2ea2c1e4b297c3acb6dead66a40fde399ea0c3b0d3c77",
        "LookupName": "Languages",
        "LookupValue": "Inupiak",
        "StandardLookupValue": "Inupiak",
        "LegacyOdataValue": "Inupiak"
    },
    {
        "LookupKey": "4c623d5e123b3234cdaebb1ab7d7799f0be2526f9a5bca197dd9adfaf272aed8",
        "LookupName": "Languages",
        "LookupValue": "Irish",
        "StandardLookupValue": "Irish",
        "LegacyOdataValue": "Irish Gaelic"
    },
    {
        "LookupKey": "1109947a12af753d246d26cd5d5467489548bea99076cd08bf24d5a5b03b6bad",
        "LookupName": "Languages",
        "LookupValue": "Italian",
        "StandardLookupValue": "Italian",
        "LegacyOdataValue": "Italian"
    },
    {
        "LookupKey": "c866954fddc1e601804582128c44b2639f364963fb8b8ac7f079e80f89b3f69f",
        "LookupName": "Languages",
        "LookupValue": "Japanese",
        "StandardLookupValue": "Japanese",
        "LegacyOdataValue": "Japanese"
    },
    {
        "LookupKey": "ac41df8707f35a47e5a3022da893ebc2bf745298b07111e1a6c9d476e9fa1726",
        "LookupName": "Languages",
        "LookupValue": "Javanese",
        "StandardLookupValue": "Javanese",
        "LegacyOdataValue": "Javanese"
    },
    {
        "LookupKey": "66321f4e9d765a73a57611f67062054a286c06bf807866253931a4abde2670df",
        "LookupName": "Languages",
        "LookupValue": "Kannada",
        "StandardLookupValue": "Kannada",
        "LegacyOdataValue": "Kannada"
    },
    {
        "LookupKey": "4f1c37f63492aed5dee7d81e481c0fd5549f350f0acf7ac8f8baddad48e05c88",
        "LookupName": "Languages",
        "LookupValue": "Kashmiri",
        "StandardLookupValue": "Kashmiri",
        "LegacyOdataValue": "Kashmiri"
    },
    {
        "LookupKey": "6f075590109af3be925161ac3ebaca48c71c0688bdd5a2c1d0b375c7b99e558d",
        "LookupName": "Languages",
        "LookupValue": "Kazakh",
        "StandardLookupValue": "Kazakh",
        "LegacyOdataValue": "Kazakh"
    },
    {
        "LookupKey": "44c5d2931f9cc2729c462dbcf1fe72309cc0b09f596161871065eabd54c12c87",
        "LookupName": "Languages",
        "LookupValue": "KIche",
        "StandardLookupValue": "KIche",
        "LegacyOdataValue": "K'iche'"
    },
    {
        "LookupKey": "bd39043ad5301c92edb3760f52c13795544f17ed208afe0aabcb893cc6a308a0",
        "LookupName": "Languages",
        "LookupValue": "Kichwa",
        "StandardLookupValue": "Kichwa",
        "LegacyOdataValue": "Kichwa"
    },
    {
        "LookupKey": "56896a466120802a6852230be436961c7bf9fb7a66dedeed25fee02222cea738",
        "LookupName": "Languages",
        "LookupValue": "Kikuyu",
        "StandardLookupValue": "Kikuyu",
        "LegacyOdataValue": "Kikuyu"
    },
    {
        "LookupKey": "7220dc900d46c58c0910aa5390370cebfca54d816f28a5136aa7738a46065468",
        "LookupName": "Languages",
        "LookupValue": "Kinyarwanda",
        "StandardLookupValue": "Kinyarwanda",
        "LegacyOdataValue": "Kinyarwanda"
    },
    {
        "LookupKey": "f77ff4c71587215d3a303e041c629494f0e4645540d775dcbdbfc85709b56a0d",
        "LookupName": "Languages",
        "LookupValue": "Kirghiz",
        "StandardLookupValue": "Kirghiz",
        "LegacyOdataValue": "Kirghiz"
    },
    {
        "LookupKey": "bce9ad885af414250a3961ab5879668b16c6660f64e225460ee8fbed3a575063",
        "LookupName": "Languages",
        "LookupValue": "Kirundi",
        "StandardLookupValue": "Kirundi",
        "LegacyOdataValue": "Kirundi"
    },
    {
        "LookupKey": "47e3a83d88a17b885332343e1882e8ee7b78e8dd9266899c94269aa60ac33a87",
        "LookupName": "Languages",
        "LookupValue": "Komi",
        "StandardLookupValue": "Komi",
        "LegacyOdataValue": "Komi"
    },
    {
        "LookupKey": "ccf277c7d1c3ac642cff2d2bf1f48031c37e1cd4c0a8a560954cd7a73a9f58c3",
        "LookupName": "Languages",
        "LookupValue": "Korean",
        "StandardLookupValue": "Korean",
        "LegacyOdataValue": "Korean"
    },
    {
        "LookupKey": "f2c93f45a516ba17906a743a50a63cd672785bcca8b7d655458e03f450c939a7",
        "LookupName": "Languages",
        "LookupValue": "Kpelle",
        "StandardLookupValue": "Kpelle",
        "LegacyOdataValue": "Kpelle"
    },
    {
        "LookupKey": "4a1bfddad1d02c23a80205bd809d1a564024dd7fbb434782b0a585ebbeff5096",
        "LookupName": "Languages",
        "LookupValue": "Kru",
        "StandardLookupValue": "Kru",
        "LegacyOdataValue": "Kru"
    },
    {
        "LookupKey": "1dfce086dc4fc7d86a4850ed099c790b0be836f232a0bba262172422fe375497",
        "LookupName": "Languages",
        "LookupValue": "Kurdish",
        "StandardLookupValue": "Kurdish",
        "LegacyOdataValue": "Kurdish"
    },
    {
        "LookupKey": "4729546cc1dac96fcc2bb3c6ae5e271de81962b86033dcc66759416f4a59a4aa",
        "LookupName": "Languages",
        "LookupValue": "Lao",
        "StandardLookupValue": "Lao",
        "LegacyOdataValue": "Lao"
    },
    {
        "LookupKey": "145bccf447f9741b46f848a09022fb6e96e0ea5a9df05a06d3fa70275be9ccb5",
        "LookupName": "Languages",
        "LookupValue": "Latin",
        "StandardLookupValue": "Latin",
        "LegacyOdataValue": "Latin"
    },
    {
        "LookupKey": "a1ab76ae6a1a1c35acfe327f02e9f1ac7e5d242836bf80aa01e33fa532bf67e9",
        "LookupName": "Languages",
        "LookupValue": "Latvian",
        "StandardLookupValue": "Latvian",
        "LegacyOdataValue": "Latvian"
    },
    {
        "LookupKey": "63c5fd4759ba3414382e0f5baf809b1a3d1466eb31dac493f8751b9617270a66",
        "LookupName": "Languages",
        "LookupValue": "Lingala",
        "StandardLookupValue": "Lingala",
        "LegacyOdataValue": "Lingala"
    },
    {
        "LookupKey": "99b143d0c6e1df4b22f105e984c3b85a8aaf4ce60f6da5fd48fcfb6bd709490d",
        "LookupName": "Languages",
        "LookupValue": "Lithuanian",
        "StandardLookupValue": "Lithuanian",
        "LegacyOdataValue": "Lithuanian"
    },
    {
        "LookupKey": "aa8baf4127a1bce46e77d846d9699f598184fedb2f7225d0f843536bc6baaad9",
        "LookupName": "Languages",
        "LookupValue": "Luxemburgish",
        "StandardLookupValue": "Luxemburgish",
        "LegacyOdataValue": "Luxemburgish"
    },
    {
        "LookupKey": "80e68255d1e4cc1c82e38ec0bcbd33b42b1c4b05d9ed24a642b35ffcccc3c6d3",
        "LookupName": "Languages",
        "LookupValue": "Macedonian",
        "StandardLookupValue": "Macedonian",
        "LegacyOdataValue": "Macedonian"
    },
    {
        "LookupKey": "f950495a8c7aff2cffc62703239c29ad64642a4d08f36f36a066178618a7692f",
        "LookupName": "Languages",
        "LookupValue": "Malagasy",
        "StandardLookupValue": "Malagasy",
        "LegacyOdataValue": "Malagasy"
    },
    {
        "LookupKey": "0553f3ca66627eb92632cc2d1be8fbcf4bb8bc8936f1d053b5ad81f95754866b",
        "LookupName": "Languages",
        "LookupValue": "Malay",
        "StandardLookupValue": "Malay",
        "LegacyOdataValue": "Malay"
    },
    {
        "LookupKey": "b2ac38231a6b5dbeabe046f9f983052e4670f008efd88e49f407d40e224b94d2",
        "LookupName": "Languages",
        "LookupValue": "Malayalam",
        "StandardLookupValue": "Malayalam",
        "LegacyOdataValue": "Malayalam"
    },
    {
        "LookupKey": "efe0e82ed805ae07d437d1ec587e455caef1561f14a1ebcf5c66dfa52c2d6487",
        "LookupName": "Languages",
        "LookupValue": "Maltese",
        "StandardLookupValue": "Maltese",
        "LegacyOdataValue": "Maltese"
    },
    {
        "LookupKey": "3721ebdcfa09f27294bee686ea12be83daa634eb318c7d8ac98f47d6ff7208fb",
        "LookupName": "Languages",
        "LookupValue": "Mandarin",
        "StandardLookupValue": "Mandarin",
        "LegacyOdataValue": "Mandarin"
    },
    {
        "LookupKey": "03725c9cee50de795a88447c64a455facccaefaf14e7c5d9dfbbf5d2722860cc",
        "LookupName": "Languages",
        "LookupValue": "Maninka",
        "StandardLookupValue": "Maninka",
        "LegacyOdataValue": "Maninka"
    },
    {
        "LookupKey": "a7b20343c3ac3f3bd6964f88a8aed36c1aa76f5f821981402f1f23e4c027dfa4",
        "LookupName": "Languages",
        "LookupValue": "ManxGaelic",
        "StandardLookupValue": "ManxGaelic",
        "LegacyOdataValue": "Manx Gaelic"
    },
    {
        "LookupKey": "59a03c4076bed102343f87bfd499374878677dcd6fe9e4c6270673195fb25d67",
        "LookupName": "Languages",
        "LookupValue": "Maori",
        "StandardLookupValue": "Maori",
        "LegacyOdataValue": "Maori"
    },
    {
        "LookupKey": "ee18d8eeb9ab7bbdca62d0b62154dd4e75a973b26017c0a2d05c951c8d49780a",
        "LookupName": "Languages",
        "LookupValue": "Marathi",
        "StandardLookupValue": "Marathi",
        "LegacyOdataValue": "Marathi"
    },
    {
        "LookupKey": "578a818aee8e35f0b1eddb2e7358cf280a596315daab0607b1d8555fd17dcb57",
        "LookupName": "Languages",
        "LookupValue": "Marshallese",
        "StandardLookupValue": "Marshallese",
        "LegacyOdataValue": "Marshallese"
    },
    {
        "LookupKey": "f960fcfa3de33503dec9abaa9c425a6e676b3601bedeb925c12c6e7c1ac6bdfe",
        "LookupName": "Languages",
        "LookupValue": "Moldovan",
        "StandardLookupValue": "Moldovan",
        "LegacyOdataValue": "Moldovan"
    },
    {
        "LookupKey": "85fc88941e628b1f16b977c9ed7efc3f405f1870574bd2fc3174ac7f31ea90ad",
        "LookupName": "Languages",
        "LookupValue": "Mongolian",
        "StandardLookupValue": "Mongolian",
        "LegacyOdataValue": "Mongolian"
    },
    {
        "LookupKey": "55e6ffad59506dfcbff297c044b3c1a11a9621c4cb2a979c2238c3a8661ca88e",
        "LookupName": "Languages",
        "LookupValue": "Nauru",
        "StandardLookupValue": "Nauru",
        "LegacyOdataValue": "Nauru"
    },
    {
        "LookupKey": "2783d80f8b4a618b47c5dc3fcaf1ed79aaa8f91e2999e746329dc64abb7a5c6c",
        "LookupName": "Languages",
        "LookupValue": "Navajo",
        "StandardLookupValue": "Navajo",
        "LegacyOdataValue": "Navajo"
    },
    {
        "LookupKey": "cd5e22cac35248ff6b15ecb8154e55734d8f4a85407bb59fb8e5c46fc9ad46a0",
        "LookupName": "Languages",
        "LookupValue": "Ndebele",
        "StandardLookupValue": "Ndebele",
        "LegacyOdataValue": "Ndebele"
    },
    {
        "LookupKey": "15e1b2c46716ebf11abf3c3ba4caa2267b72b9ae394ed57118580994ffda06d7",
        "LookupName": "Languages",
        "LookupValue": "Ndonga",
        "StandardLookupValue": "Ndonga",
        "LegacyOdataValue": "Ndonga"
    },
    {
        "LookupKey": "c357bfb87f011d5f246d2086f230ca459633731e4632f29c7584566fdebef83d",
        "LookupName": "Languages",
        "LookupValue": "Nepali",
        "StandardLookupValue": "Nepali",
        "LegacyOdataValue": "Nepali"
    },
    {
        "LookupKey": "7288b84b0e9bbb8e62bd409fdf01fd0db3b90402f696b579401220c19f7ef411",
        "LookupName": "Languages",
        "LookupValue": "Norwegian",
        "StandardLookupValue": "Norwegian",
        "LegacyOdataValue": "Norwegian"
    },
    {
        "LookupKey": "423666ba97461b2ee9d8c4054a43a99df7f3148deea0d8e5f9e98c9c2cd27347",
        "LookupName": "Languages",
        "LookupValue": "NorwegianNynorsk",
        "StandardLookupValue": "NorwegianNynorsk",
        "LegacyOdataValue": "Norwegian Nynorsk"
    },
    {
        "LookupKey": "e081479399b5382b3584c4d04ac4d33bfb39b16c74826d57eb23185e6e15b0d7",
        "LookupName": "Languages",
        "LookupValue": "Nyanja",
        "StandardLookupValue": "Nyanja",
        "LegacyOdataValue": "Nyanja"
    },
    {
        "LookupKey": "98af431dd3cebfd525aecd59a4487df6a17cebd376f6cff9840fcdca04707beb",
        "LookupName": "Languages",
        "LookupValue": "Occitan",
        "StandardLookupValue": "Occitan",
        "LegacyOdataValue": "Occitan"
    },
    {
        "LookupKey": "0bb68819759aff38e3fdae1dce1df60f610d96706a60cd80bcf0548c10036827",
        "LookupName": "Languages",
        "LookupValue": "Oriya",
        "StandardLookupValue": "Oriya",
        "LegacyOdataValue": "Oriya"
    },
    {
        "LookupKey": "8454b3f83de774aaecd639c84f6fa9d858ce268b73ff67df93d16ba35aa164b3",
        "LookupName": "Languages",
        "LookupValue": "Oromo",
        "StandardLookupValue": "Oromo",
        "LegacyOdataValue": "Oromo"
    },
    {
        "LookupKey": "09de50e39ec950040fdf8d9668d02c4d9c33b3b96d20284d95853d13dea9e378",
        "LookupName": "Languages",
        "LookupValue": "Ossetian",
        "StandardLookupValue": "Ossetian",
        "LegacyOdataValue": "Ossetian"
    },
    {
        "LookupKey": "0008fd740dda2787bf9eeda8e70c83513174f7a3e18b4d49b0db38e0aea83bc3",
        "LookupName": "Languages",
        "LookupValue": "Pali",
        "StandardLookupValue": "Pali",
        "LegacyOdataValue": "Pali"
    },
    {
        "LookupKey": "e6b177e77974590ae2e78ef6cfdbce1e6c212d618879ed31ff797946c926c03b",
        "LookupName": "Languages",
        "LookupValue": "Pangasinan",
        "StandardLookupValue": "Pangasinan",
        "LegacyOdataValue": "Pangasinan"
    },
    {
        "LookupKey": "1eb06d72881cc788d0d922c78fd71abdfd7daa0f5c2eb3d06377dde2ffe46632",
        "LookupName": "Languages",
        "LookupValue": "Papiamento",
        "StandardLookupValue": "Papiamento",
        "LegacyOdataValue": "Papiamento"
    },
    {
        "LookupKey": "4a2a024e188c80624edf3f8cbfbdeab6315710c82cbac572c2b68f32361e82d3",
        "LookupName": "Languages",
        "LookupValue": "Pashto",
        "StandardLookupValue": "Pashto",
        "LegacyOdataValue": "Pashto"
    },
    {
        "LookupKey": "c43b77884b39ba1742e2159b7d9507b81caba5c2a08af355ded9904986774696",
        "LookupName": "Languages",
        "LookupValue": "Polish",
        "StandardLookupValue": "Polish",
        "LegacyOdataValue": "Polish"
    },
    {
        "LookupKey": "6ded338048416645bc029255ff5805451f4cd81630ca927359cd5b41b55deb6b",
        "LookupName": "Languages",
        "LookupValue": "Portuguese",
        "StandardLookupValue": "Portuguese",
        "LegacyOdataValue": "Portuguese"
    },
    {
        "LookupKey": "54702798f59b94315c7af81742304c8c8c8b67231bb923b7ab81bc6d50c31fcc",
        "LookupName": "Languages",
        "LookupValue": "Punjabi",
        "StandardLookupValue": "Punjabi",
        "LegacyOdataValue": "Punjabi"
    },
    {
        "LookupKey": "72b42a038d18a47011a7445f6bd00bf0be62e962406719f3fd5387631603fc4b",
        "LookupName": "Languages",
        "LookupValue": "Quechua",
        "StandardLookupValue": "Quechua",
        "LegacyOdataValue": "Quechua"
    },
    {
        "LookupKey": "90632937c8b7b1b1af07e61f25ff7ce74ee1c51d07128bc548249636ddbfbb53",
        "LookupName": "Languages",
        "LookupValue": "Romanian",
        "StandardLookupValue": "Romanian",
        "LegacyOdataValue": "Romanian"
    },
    {
        "LookupKey": "4ea77294e2084821cd98097270245c6e4a43da927937d95de6c1aa876322d463",
        "LookupName": "Languages",
        "LookupValue": "Romany",
        "StandardLookupValue": "Romany",
        "LegacyOdataValue": "Romany"
    },
    {
        "LookupKey": "541767d8f2b9d50cc20ee1d849e40c78920863d6b0f77afcf62b308b31ce2371",
        "LookupName": "Languages",
        "LookupValue": "Russian",
        "StandardLookupValue": "Russian",
        "LegacyOdataValue": "Russian"
    },
    {
        "LookupKey": "b3e8a47b7fa113d9429f43e47adc16c2ce0beef8fc05fe91889841ec3847daab",
        "LookupName": "Languages",
        "LookupValue": "Sami",
        "StandardLookupValue": "Sami",
        "LegacyOdataValue": "Sami"
    },
    {
        "LookupKey": "5820226ce77357301562036e856947e303196be3e31948075d8004b1ab56f413",
        "LookupName": "Languages",
        "LookupValue": "Samoan",
        "StandardLookupValue": "Samoan",
        "LegacyOdataValue": "Samoan"
    },
    {
        "LookupKey": "0634a689272ba8a5e0919eb0aae9ef757644d43387ba02010182e7dfc5bec770",
        "LookupName": "Languages",
        "LookupValue": "Sangho",
        "StandardLookupValue": "Sangho",
        "LegacyOdataValue": "Sangho"
    },
    {
        "LookupKey": "55381b3d8ea4dfa1f928edb60e9f12f6d1fd83fd4d2237f816bb6c78d2231af7",
        "LookupName": "Languages",
        "LookupValue": "Sanskrit",
        "StandardLookupValue": "Sanskrit",
        "LegacyOdataValue": "Sanskrit"
    },
    {
        "LookupKey": "d793e399bfc9f305be9c47da18b925242dc6dec40892d95b91c78e85a23c2b77",
        "LookupName": "Languages",
        "LookupValue": "Sardinian",
        "StandardLookupValue": "Sardinian",
        "LegacyOdataValue": "Sardinian"
    },
    {
        "LookupKey": "382d5c878953b9802935accc00ebc9da657ac41cf3d75ee1b6eafa96f98913bd",
        "LookupName": "Languages",
        "LookupValue": "ScotsGaelic",
        "StandardLookupValue": "ScotsGaelic",
        "LegacyOdataValue": "Scots Gaelic"
    },
    {
        "LookupKey": "aaafb725190e3aa9758c74f1a79eda3458f8dff29c84b0039e64ef18e496f22d",
        "LookupName": "Languages",
        "LookupValue": "Serbian",
        "StandardLookupValue": "Serbian",
        "LegacyOdataValue": "Serbian"
    },
    {
        "LookupKey": "ea110064bbcaadbdab8265eabfce46b241c328f0324564976027c9b41915a030",
        "LookupName": "Languages",
        "LookupValue": "SerboCroatian",
        "StandardLookupValue": "SerboCroatian",
        "LegacyOdataValue": "Serbo-Croatian"
    },
    {
        "LookupKey": "194af3552ad97c695c7833e86b68220cea9fa6479c14305baa2d5c865d32c2aa",
        "LookupName": "Languages",
        "LookupValue": "Sesotho",
        "StandardLookupValue": "Sesotho",
        "LegacyOdataValue": "Sesotho"
    },
    {
        "LookupKey": "bb39ef7869d80e871a12f7946c374b80df296b98920a518287b52cba42e94d1f",
        "LookupName": "Languages",
        "LookupValue": "Setswana",
        "StandardLookupValue": "Setswana",
        "LegacyOdataValue": "Setswana"
    },
    {
        "LookupKey": "6c2f67f69323b579f6b6bc281b96d6bdaef3a379bdb2bbb2657302a9d1f95f5d",
        "LookupName": "Languages",
        "LookupValue": "Shan",
        "StandardLookupValue": "Shan",
        "LegacyOdataValue": "Shan"
    },
    {
        "LookupKey": "de33cd9500aa7673bb5c37177dc0ffe839c253fb9e1c64bffdfe15724fd343c1",
        "LookupName": "Languages",
        "LookupValue": "Shona",
        "StandardLookupValue": "Shona",
        "LegacyOdataValue": "Shona"
    },
    {
        "LookupKey": "3c0a76ab330f7525275e61ee0dc6f6e88a9c88d1caa6a3dc199089ff6f783e8a",
        "LookupName": "Languages",
        "LookupValue": "Sindhi",
        "StandardLookupValue": "Sindhi",
        "LegacyOdataValue": "Sindhi"
    },
    {
        "LookupKey": "19c0390f04a280d92fa169d341b1115aee20160f30c0bfc88d6e70c088c8f8c5",
        "LookupName": "Languages",
        "LookupValue": "Sinhalese",
        "StandardLookupValue": "Sinhalese",
        "LegacyOdataValue": "Sinhalese"
    },
    {
        "LookupKey": "4b1d920420a84b94ef95bf7604de1239066de14e4164c43147afb19fa8c0dd8b",
        "LookupName": "Languages",
        "LookupValue": "Siswati",
        "StandardLookupValue": "Siswati",
        "LegacyOdataValue": "Siswati"
    },
    {
        "LookupKey": "15a14711041aefbbc1ac84151225e33814da388aa6af6cd01478d159c969cd52",
        "LookupName": "Languages",
        "LookupValue": "Slovak",
        "StandardLookupValue": "Slovak",
        "LegacyOdataValue": "Slovak"
    },
    {
        "LookupKey": "70467656e40dc0b9e644ff64b664f59bd0e3e570dd11b214e27c416708b3bae5",
        "LookupName": "Languages",
        "LookupValue": "Slovenian",
        "StandardLookupValue": "Slovenian",
        "LegacyOdataValue": "Slovenian"
    },
    {
        "LookupKey": "f7b6ec52afdddcf07c01031e638e4b5e0b9b7f14ed34f25e5b7978e38be49aa4",
        "LookupName": "Languages",
        "LookupValue": "Somali",
        "StandardLookupValue": "Somali",
        "LegacyOdataValue": "Somali"
    },
    {
        "LookupKey": "178a298c5ef859b710e8971f77fa4ba54ea6c3cd1fa92cba9d485997dc634c6c",
        "LookupName": "Languages",
        "LookupValue": "SouthernNdebele",
        "StandardLookupValue": "SouthernNdebele",
        "LegacyOdataValue": "Southern Ndebele"
    },
    {
        "LookupKey": "454fa28ea15307802d0b170e9c93d10698068bea871d6120104254022cac7837",
        "LookupName": "Languages",
        "LookupValue": "Spanish",
        "StandardLookupValue": "Spanish",
        "LegacyOdataValue": "Spanish"
    },
    {
        "LookupKey": "c7468f7803a73cd28b9e13715094217acebe3eedeb925c1a58b38409d8a64d2c",
        "LookupName": "Languages",
        "LookupValue": "Sundanese",
        "StandardLookupValue": "Sundanese",
        "LegacyOdataValue": "Sundanese"
    },
    {
        "LookupKey": "bf63f6d5d54567b2a106136b197345634d752727b081a62af1b4365a33229188",
        "LookupName": "Languages",
        "LookupValue": "Swahili",
        "StandardLookupValue": "Swahili",
        "LegacyOdataValue": "Swahili"
    },
    {
        "LookupKey": "d407f3ba6fec3bc33d928504027158abebdcceb6bab88631dd5324aa7358d3a0",
        "LookupName": "Languages",
        "LookupValue": "Swedish",
        "StandardLookupValue": "Swedish",
        "LegacyOdataValue": "Swedish"
    },
    {
        "LookupKey": "1e94eec1a15e35a27d786bae28b1a697b7f57547ccb5a208fb0b7b69803a468e",
        "LookupName": "Languages",
        "LookupValue": "Syriac",
        "StandardLookupValue": "Syriac",
        "LegacyOdataValue": "Syriac"
    },
    {
        "LookupKey": "e276a9ec46e32f6644e62363953da02520e5d9c78dae3b3fe8ec41bd68d62e76",
        "LookupName": "Languages",
        "LookupValue": "Tagalog",
        "StandardLookupValue": "Tagalog",
        "LegacyOdataValue": "Tagalog"
    },
    {
        "LookupKey": "13acbc1b35484e689c58751accc5829b46281e8eb7a114ac198649a61721dc19",
        "LookupName": "Languages",
        "LookupValue": "Tahitian",
        "StandardLookupValue": "Tahitian",
        "LegacyOdataValue": "Tahitian"
    },
    {
        "LookupKey": "4c96f46ee4708571e3929c960397a165676346e6a5930ede21e8fd6bcfd755b7",
        "LookupName": "Languages",
        "LookupValue": "Tajik",
        "StandardLookupValue": "Tajik",
        "LegacyOdataValue": "Tajik"
    },
    {
        "LookupKey": "ad77632685d835e3f1865411149024e03e5d70555e5d1d55560f7fbbfb06a391",
        "LookupName": "Languages",
        "LookupValue": "Tamil",
        "StandardLookupValue": "Tamil",
        "LegacyOdataValue": "Tamil"
    },
    {
        "LookupKey": "33196da5d912cbaeee98ad43a4e1266cd5e20faa7d5e5387d2e92511fc319986",
        "LookupName": "Languages",
        "LookupValue": "Tatar",
        "StandardLookupValue": "Tatar",
        "LegacyOdataValue": "Tatar"
    },
    {
        "LookupKey": "0e8cbe429d010de30680fa41668bea1bc118edf77b02b223159e2e9534e31a9d",
        "LookupName": "Languages",
        "LookupValue": "Telugu",
        "StandardLookupValue": "Telugu",
        "LegacyOdataValue": "Telugu"
    },
    {
        "LookupKey": "29581aca306cfae7f27d615fff49776bbc94f2665fd3e77979e1245107f64ae9",
        "LookupName": "Languages",
        "LookupValue": "Thai",
        "StandardLookupValue": "Thai",
        "LegacyOdataValue": "Thai"
    },
    {
        "LookupKey": "8b076118dd9d37ea0bf6a23f82d173ede492413c2655dee21bbb68eb6163f67e",
        "LookupName": "Languages",
        "LookupValue": "Tibetan",
        "StandardLookupValue": "Tibetan",
        "LegacyOdataValue": "Tibetan"
    },
    {
        "LookupKey": "d33099012ee75689f3f743d9cb0e9f3c517177cb8f843366d9259bba4c428878",
        "LookupName": "Languages",
        "LookupValue": "Tigrinya",
        "StandardLookupValue": "Tigrinya",
        "LegacyOdataValue": "Tigrinya"
    },
    {
        "LookupKey": "b084563fb9dae2205258502585502ccd149d6c530bc5ce6e6ccdc7b47df4766d",
        "LookupName": "Languages",
        "LookupValue": "Tongan",
        "StandardLookupValue": "Tongan",
        "LegacyOdataValue": "Tongan"
    },
    {
        "LookupKey": "bc5d01a8bd97f16341a3a82271699065d3084bccad80b9f10ade7102a1ccdd3a",
        "LookupName": "Languages",
        "LookupValue": "Tsonga",
        "StandardLookupValue": "Tsonga",
        "LegacyOdataValue": "Tsonga"
    },
    {
        "LookupKey": "90bcc3ec74896f1060be81ef2902c69c1bdd5b5f8e74bbb968e5b9abc1d23be5",
        "LookupName": "Languages",
        "LookupValue": "Turkish",
        "StandardLookupValue": "Turkish",
        "LegacyOdataValue": "Turkish"
    },
    {
        "LookupKey": "8302370e242ee5da3aaac444b49b69efd5b97e40ad45982f001c3f417a08dcad",
        "LookupName": "Languages",
        "LookupValue": "Turkmen",
        "StandardLookupValue": "Turkmen",
        "LegacyOdataValue": "Turkmen"
    },
    {
        "LookupKey": "80ec3e34772670ebac2266b79aaea22d54dd7b6877a19ab23464409f73da8507",
        "LookupName": "Languages",
        "LookupValue": "Twi",
        "StandardLookupValue": "Twi",
        "LegacyOdataValue": "Twi"
    },
    {
        "LookupKey": "0976b5bcdc4ed10635e0c8a0764c0d143c3d2116abf11d1f4be044fac183894c",
        "LookupName": "Languages",
        "LookupValue": "Uigur",
        "StandardLookupValue": "Uigur",
        "LegacyOdataValue": "Uigur"
    },
    {
        "LookupKey": "132d2086d8c171907c89b66dbece1430d33d53b3ef9101fca793c78e51a1453a",
        "LookupName": "Languages",
        "LookupValue": "Ukrainian",
        "StandardLookupValue": "Ukrainian",
        "LegacyOdataValue": "Ukrainian"
    },
    {
        "LookupKey": "93f1e5663d578e0b51125bad9a16706cef659f1a384f89e1c2b11f9e79598f1a",
        "LookupName": "Languages",
        "LookupValue": "Urdu",
        "StandardLookupValue": "Urdu",
        "LegacyOdataValue": "Urdu"
    },
    {
        "LookupKey": "5f5808427181c2b3e7e32b7c63aee0b375dfb7dd2af0164ecee89c2b240d90bc",
        "LookupName": "Languages",
        "LookupValue": "Uzbek",
        "StandardLookupValue": "Uzbek",
        "LegacyOdataValue": "Uzbek"
    },
    {
        "LookupKey": "18fabc6997a75110510e9a48935eac87be4c2b7b486b3355772954fa1ad02408",
        "LookupName": "Languages",
        "LookupValue": "Vietnamese",
        "StandardLookupValue": "Vietnamese",
        "LegacyOdataValue": "Vietnamese"
    },
    {
        "LookupKey": "a6b1b4831db49f0e82a795f793ff357672e8c28e4530ac6cd9995c6d7c46458a",
        "LookupName": "Languages",
        "LookupValue": "Volapuk",
        "StandardLookupValue": "Volapuk",
        "LegacyOdataValue": "Volapuk"
    },
    {
        "LookupKey": "886f2fac12f6f74203a25f5fcba34dc93f16991c7df74c2cf2f562ad6744148f",
        "LookupName": "Languages",
        "LookupValue": "Welsh",
        "StandardLookupValue": "Welsh",
        "LegacyOdataValue": "Welsh"
    },
    {
        "LookupKey": "3e826fb777604bc0aee350a2948763f02dcf39f8b2013c18cb866270e6a8ced4",
        "LookupName": "Languages",
        "LookupValue": "Wolof",
        "StandardLookupValue": "Wolof",
        "LegacyOdataValue": "Wolof"
    },
    {
        "LookupKey": "060df0fa3980281f1d600084eb5efaec7a8087bdc138980bc74dfbe7e3064843",
        "LookupName": "Languages",
        "LookupValue": "Xhosa",
        "StandardLookupValue": "Xhosa",
        "LegacyOdataValue": "Xhosa"
    },
    {
        "LookupKey": "a86fb634cb941520e4401a51a90c9ffc023b4c094ca9e377e0be829dc1c5b50d",
        "LookupName": "Languages",
        "LookupValue": "Yiddish",
        "StandardLookupValue": "Yiddish",
        "LegacyOdataValue": "Yiddish"
    },
    {
        "LookupKey": "931d2298834109c38aa3430cd1a278e32d45dace5ff986ce8d3f167a02dccb95",
        "LookupName": "Languages",
        "LookupValue": "Yoruba",
        "StandardLookupValue": "Yoruba",
        "LegacyOdataValue": "Yoruba"
    },
    {
        "LookupKey": "87f093d2a6f4bd894ea5dfac4e091729e1665b60917f9ff47b53548ee516004d",
        "LookupName": "Languages",
        "LookupValue": "Zhuang",
        "StandardLookupValue": "Zhuang",
        "LegacyOdataValue": "Zhuang"
    },
    {
        "LookupKey": "0a986bef699e86e1710130dc84c2a3c02dc2a1f9cb1b29c6916f210220c9c91f",
        "LookupName": "Languages",
        "LookupValue": "Zulu",
        "StandardLookupValue": "Zulu",
        "LegacyOdataValue": "Zulu"
    },
    {
        "LookupKey": "967095de7f552f23cca2a9a786e4c05408d96bd770eefe95c417bb60cea1fd4b",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Direct",
        "StandardLookupValue": "Direct",
        "LegacyOdataValue": "Direct"
    },
    {
        "LookupKey": "5375f813faca2946405b26687bcfa2ae2b58c57e029767498ee95fe40c6261e8",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Fax",
        "StandardLookupValue": "Fax",
        "LegacyOdataValue": "Fax"
    },
    {
        "LookupKey": "c7a9fa8b4d871ef41cb1fa8953090cbbbd7b7c18272c7507fbbab3504efb38cb",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "First",
        "StandardLookupValue": "First",
        "LegacyOdataValue": "First"
    },
    {
        "LookupKey": "687e0e74cf1d4d02fd575f66eff179fd493efa3829ef238ff4379d9a91004cca",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Home",
        "StandardLookupValue": "Home",
        "LegacyOdataValue": "Home"
    },
    {
        "LookupKey": "8cc581a2b2d2e115d7e15ae092718c82bc58d3271b1364e1bf7e2de8e733b808",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Mobile",
        "StandardLookupValue": "Mobile",
        "LegacyOdataValue": "Mobile"
    },
    {
        "LookupKey": "b1a5eb3dc770d6ace03c5e1bbf8c83399f8b4701355e1dfc983ef212dd911c25",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Modem",
        "StandardLookupValue": "Modem",
        "LegacyOdataValue": "Modem"
    },
    {
        "LookupKey": "f346e06b062a9bad53c42e467caa77d2b04f8e27d23e517f4502578e6b62e853",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "025c6f6c6750bfc5362ccaf36193ab7c55f099912922632dcdd8a45fdd3352c1",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Pager",
        "StandardLookupValue": "Pager",
        "LegacyOdataValue": "Pager"
    },
    {
        "LookupKey": "ae03259600cf5b0f3868153345ab27f22aeeef29d9ad10c5820bab22e4af5474",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Preferred",
        "StandardLookupValue": "Preferred",
        "LegacyOdataValue": "Preferred"
    },
    {
        "LookupKey": "af3d5ffedaf7427c31f5741ef82420f4d94f6483ea5282118f13ea2030d7be8b",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Second",
        "StandardLookupValue": "Second",
        "LegacyOdataValue": "Second"
    },
    {
        "LookupKey": "801d52b3203e1f411a9cca86fb3dc1cb0a5736292461a6fdd09314aa72cd4adb",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Sms",
        "StandardLookupValue": "Sms",
        "LegacyOdataValue": "SMS"
    },
    {
        "LookupKey": "50a24aa7e87bb190244b7e660cb5cf9850bab69a49d67fbe33553af68870eccf",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Third",
        "StandardLookupValue": "Third",
        "LegacyOdataValue": "Third"
    },
    {
        "LookupKey": "01976423ab24290026f286a699bdd370dc6c0c2a3fce7789d6c6ffe6fbb11629",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "TollFree",
        "StandardLookupValue": "TollFree",
        "LegacyOdataValue": "Toll Free"
    },
    {
        "LookupKey": "9e0337e18279f3f868adaa00c7e0139bb6036399c9e45b0cc318c26b021097dc",
        "LookupName": "MemberOtherPhoneType",
        "LookupValue": "Voicemail",
        "StandardLookupValue": "Voicemail",
        "LegacyOdataValue": "Voicemail"
    },
    {
        "LookupKey": "4f1af2d15bf67516f8a51dd5f60742c93c1eb035b8298b1fa98cd293fc82ea64",
        "LookupName": "MemberStatus",
        "LookupValue": "Active",
        "StandardLookupValue": "Active",
        "LegacyOdataValue": "Active"
    },
    {
        "LookupKey": "cc2aa12521bcab8442970f0408a9948e3c63785d672a52629f56657ac9fa8d2e",
        "LookupName": "MemberStatus",
        "LookupValue": "Inactive",
        "StandardLookupValue": "Inactive",
        "LegacyOdataValue": "Inactive"
    },
    {
        "LookupKey": "b9b6883c65822d3e29faea251f0ce7243f318c07db40640cb183a8ebbbba64af",
        "LookupName": "MemberType",
        "LookupValue": "Assistant",
        "StandardLookupValue": "Assistant",
        "LegacyOdataValue": "Assistant"
    },
    {
        "LookupKey": "1384bbb80ee0fc4eaf65478e04a8dd3f4a0e5893a6e11e30889aa999d1e93cf9",
        "LookupName": "MemberType",
        "LookupValue": "AssociationStaff",
        "StandardLookupValue": "AssociationStaff",
        "LegacyOdataValue": "Association Staff"
    },
    {
        "LookupKey": "b432dd184fc19d06952f0af4ee816f2517a7c4308ab34782c42f9d1c64336824",
        "LookupName": "MemberType",
        "LookupValue": "DesignatedRealtorAppraiser",
        "StandardLookupValue": "DesignatedRealtorAppraiser",
        "LegacyOdataValue": "Designated REALTOR Appraiser"
    },
    {
        "LookupKey": "5ddef576dbb552edfa693a1094aab02fbab75ec3049adb99de126f6eead42aa3",
        "LookupName": "MemberType",
        "LookupValue": "DesignatedRealtorParticipant",
        "StandardLookupValue": "DesignatedRealtorParticipant",
        "LegacyOdataValue": "Designated REALTOR Participant"
    },
    {
        "LookupKey": "08cbad606c9763e20f90b062a3b77dee67697f2afe31e37be6ddc9615d583820",
        "LookupName": "MemberType",
        "LookupValue": "LicensedAssistant",
        "StandardLookupValue": "LicensedAssistant",
        "LegacyOdataValue": "Licensed Assistant"
    },
    {
        "LookupKey": "e2ce5de0131890c37296c0687a98970187aaa43794d520908deb7b9c72a3dbb6",
        "LookupName": "MemberType",
        "LookupValue": "MlsOnlyAppraiser",
        "StandardLookupValue": "MlsOnlyAppraiser",
        "LegacyOdataValue": "MLS Only Appraiser"
    },
    {
        "LookupKey": "d3b85bf1c21f6f204a116e72da102742bcb117e713ee44f54b07c4075707693f",
        "LookupName": "MemberType",
        "LookupValue": "MlsOnlyBroker",
        "StandardLookupValue": "MlsOnlyBroker",
        "LegacyOdataValue": "MLS Only Broker"
    },
    {
        "LookupKey": "0c3400ac1e6307b1bca6a2c04af48951f4b74db6efbbc714ddd51fe746fc8961",
        "LookupName": "MemberType",
        "LookupValue": "MlsOnlySalesperson",
        "StandardLookupValue": "MlsOnlySalesperson",
        "LegacyOdataValue": "MLS Only Salesperson"
    },
    {
        "LookupKey": "4c2dd5ec750006ceba24acd3bf27e4a936d32a425c7a1a2a0e11fd2c38f95191",
        "LookupName": "MemberType",
        "LookupValue": "MlsStaff",
        "StandardLookupValue": "MlsStaff",
        "LegacyOdataValue": "MLS Staff"
    },
    {
        "LookupKey": "1e3c537eee7d47963dbc81c7b6e3be56edd2ca526acfbab015be8fb3f2f7a0c1",
        "LookupName": "MemberType",
        "LookupValue": "NonMemberVendor",
        "StandardLookupValue": "NonMemberVendor",
        "LegacyOdataValue": "Non Member/Vendor"
    },
    {
        "LookupKey": "605c28ec61b5fa8eb9c412161f115681507b2419cfc4f2e91ed50843f17c55de",
        "LookupName": "MemberType",
        "LookupValue": "OfficeManager",
        "StandardLookupValue": "OfficeManager",
        "LegacyOdataValue": "Office Manager"
    },
    {
        "LookupKey": "e1d77b25483531660a65bba72a392b04362d6fccb34592316349aeb0c890be18",
        "LookupName": "MemberType",
        "LookupValue": "RealtorAppraiser",
        "StandardLookupValue": "RealtorAppraiser",
        "LegacyOdataValue": "REALTOR Appraiser"
    },
    {
        "LookupKey": "c00992a72738d43588aa0266c67cd7db984f2b0ffcf219c3e5dd4bb883441bbc",
        "LookupName": "MemberType",
        "LookupValue": "RealtorSalesperson",
        "StandardLookupValue": "RealtorSalesperson",
        "LegacyOdataValue": "REALTOR Salesperson"
    },
    {
        "LookupKey": "2b77dfac548d136e6b2d265c1525c1c76f60fb9b39b74a65ccea3374d7ab9778",
        "LookupName": "MemberType",
        "LookupValue": "UnlicensedAssistant",
        "StandardLookupValue": "UnlicensedAssistant",
        "LegacyOdataValue": "Unlicensed Assistant"
    },
    {
        "LookupKey": "7d28b3628d9882d20e2c955b5c408ed5b5d3a6961cd2e0de1af19310fa1e5580",
        "LookupName": "SocialMediaType",
        "LookupValue": "Blog",
        "StandardLookupValue": "Blog",
        "LegacyOdataValue": "Blog"
    },
    {
        "LookupKey": "aa088c6581d75d7ec6c3b883101dea0c65bfbf47340d3af4ea75c0e0419fd211",
        "LookupName": "SocialMediaType",
        "LookupValue": "Digg",
        "StandardLookupValue": "Digg",
        "LegacyOdataValue": "Digg"
    },
    {
        "LookupKey": "2d3a147aa102254c16cbf1bcc7885e42f25ebad2c98593de5dc2d582d35a1025",
        "LookupName": "SocialMediaType",
        "LookupValue": "Facebook",
        "StandardLookupValue": "Facebook",
        "LegacyOdataValue": "Facebook"
    },
    {
        "LookupKey": "56bac2018de29ca28965ce6c765694ac55141e2fa34aa9b7a6a0c7915b7b3a19",
        "LookupName": "SocialMediaType",
        "LookupValue": "FacebookMessenger",
        "StandardLookupValue": "FacebookMessenger",
        "LegacyOdataValue": "Facebook Messenger"
    },
    {
        "LookupKey": "0488cdadd605d2542feb7ffc09e14172464c5112e9b584105ad963c0a9071a42",
        "LookupName": "SocialMediaType",
        "LookupValue": "Googleplus",
        "StandardLookupValue": "Googleplus",
        "LegacyOdataValue": "GooglePlus"
    },
    {
        "LookupKey": "4b2e6e2ca859bec2b85319b702f8425d7d2caaf7f9b3b278b683a8ec9ff3af35",
        "LookupName": "SocialMediaType",
        "LookupValue": "iMessage",
        "StandardLookupValue": "iMessage",
        "LegacyOdataValue": "iMessage"
    },
    {
        "LookupKey": "8379290de25d2100655bbc4c9e46281617521849b31409f13c3221f49816f9eb",
        "LookupName": "SocialMediaType",
        "LookupValue": "Instagram",
        "StandardLookupValue": "Instagram",
        "LegacyOdataValue": "Instagram"
    },
    {
        "LookupKey": "914d1b1b1ae47bddc8be30257413c3bb1b4ab8a8a4ee1c63aeeb7b9832691834",
        "LookupName": "SocialMediaType",
        "LookupValue": "Linkedin",
        "StandardLookupValue": "Linkedin",
        "LegacyOdataValue": "LinkedIn"
    },
    {
        "LookupKey": "330943d163aeed1fdf52c77f4c23370e6119e534994f35456835bd22e5c2de9f",
        "LookupName": "SocialMediaType",
        "LookupValue": "Pinterest",
        "StandardLookupValue": "Pinterest",
        "LegacyOdataValue": "Pinterest"
    },
    {
        "LookupKey": "f9a2331f355bb83bb6450847b598ef707b37cdd1e3ef859d14c08e8e798f287c",
        "LookupName": "SocialMediaType",
        "LookupValue": "Reddit",
        "StandardLookupValue": "Reddit",
        "LegacyOdataValue": "Reddit"
    },
    {
        "LookupKey": "54e796a500eced70ccae71a26fde4cf6b372ba956927f3b4d4991344e34b0f2f",
        "LookupName": "SocialMediaType",
        "LookupValue": "Slack",
        "StandardLookupValue": "Slack",
        "LegacyOdataValue": "Slack"
    },
    {
        "LookupKey": "df4dc422765a97b849ed777cdb52ddae3c7d6534e8548b76cf05b0d16a15aeb2",
        "LookupName": "SocialMediaType",
        "LookupValue": "Snapchat",
        "StandardLookupValue": "Snapchat",
        "LegacyOdataValue": "Snapchat"
    },
    {
        "LookupKey": "612bdc1e90065dd58421715b80be3e9d266a326b058233fce6a8a668b068f603",
        "LookupName": "SocialMediaType",
        "LookupValue": "Stumbleupon",
        "StandardLookupValue": "Stumbleupon",
        "LegacyOdataValue": "StumbleUpon"
    },
    {
        "LookupKey": "cc585a87cea111d1e0a80282dae39730e1c7e5b08e96911300f4db179bbaa75a",
        "LookupName": "SocialMediaType",
        "LookupValue": "Tumblr",
        "StandardLookupValue": "Tumblr",
        "LegacyOdataValue": "Tumblr"
    },
    {
        "LookupKey": "c5c07e112d76c4b692c283b35ef48e52227c0011507ce10c11e7d411eb40851d",
        "LookupName": "SocialMediaType",
        "LookupValue": "Twitter",
        "StandardLookupValue": "Twitter",
        "LegacyOdataValue": "Twitter"
    },
    {
        "LookupKey": "1b390c242dcb54475c15d042b41b4d0537229066da4634ec983a439976260d58",
        "LookupName": "SocialMediaType",
        "LookupValue": "Website",
        "StandardLookupValue": "Website",
        "LegacyOdataValue": "Website"
    },
    {
        "LookupKey": "59fd0f7e95d022dc3cc2a29e4a22619ff180d522ab1e171462087ecb8ed23d53",
        "LookupName": "SocialMediaType",
        "LookupValue": "Youtube",
        "StandardLookupValue": "Youtube",
        "LegacyOdataValue": "YouTube"
    },
    {
        "LookupKey": "0f6fa0185bfd896bd49221f21a2236c38dfd376bc06490eff2a3a07f115c1839",
        "LookupName": "OfficeBranchType",
        "LookupValue": "Branch",
        "StandardLookupValue": "Branch",
        "LegacyOdataValue": "Branch"
    },
    {
        "LookupKey": "1bbe569ed816427c3e171af81c300b731ae4c4500b06862234dc367ca9a21139",
        "LookupName": "OfficeBranchType",
        "LookupValue": "Main",
        "StandardLookupValue": "Main",
        "LegacyOdataValue": "Main"
    },
    {
        "LookupKey": "20ab2a91b0b777ebf35ebd65c01fd2d582b0911419aa5da152526a99bf740db9",
        "LookupName": "OfficeBranchType",
        "LookupValue": "StandAlone",
        "StandardLookupValue": "StandAlone",
        "LegacyOdataValue": "Stand Alone"
    },
    {
        "LookupKey": "a3280e6ed56b2782ce467bde0e386a1bff9416778a436380067a778226bf3e4f",
        "LookupName": "OfficeStatus",
        "LookupValue": "Active",
        "StandardLookupValue": "Active",
        "LegacyOdataValue": "Active"
    },
    {
        "LookupKey": "0bf5dc6507696a8d2521a19e2785058db9e9728c40ec9a6e113fd500a6587c2c",
        "LookupName": "OfficeStatus",
        "LookupValue": "Inactive",
        "StandardLookupValue": "Inactive",
        "LegacyOdataValue": "Inactive"
    },
    {
        "LookupKey": "428084f94b48d631a9444ba7f047b06fab25dcae1b438ab7fb7b5ac4de8e2421",
        "LookupName": "OfficeType",
        "LookupValue": "Affiliate",
        "StandardLookupValue": "Affiliate",
        "LegacyOdataValue": "Affiliate"
    },
    {
        "LookupKey": "1a7faccb8eca86b2e8a41151cb8bc20cc5219002e9fb2f0fc9dd12e57b89da85",
        "LookupName": "OfficeType",
        "LookupValue": "Appraiser",
        "StandardLookupValue": "Appraiser",
        "LegacyOdataValue": "Appraiser"
    },
    {
        "LookupKey": "65853b0311185b56958ca8c3a4ac317e0301b07139c8fca0ae9c20cdc017448e",
        "LookupName": "OfficeType",
        "LookupValue": "Association",
        "StandardLookupValue": "Association",
        "LegacyOdataValue": "Association"
    },
    {
        "LookupKey": "7a8b96fa89b1c2597f3f57937403631e0a1b696184c003bd3b63aa2d5318faa7",
        "LookupName": "OfficeType",
        "LookupValue": "Mls",
        "StandardLookupValue": "Mls",
        "LegacyOdataValue": "MLS"
    },
    {
        "LookupKey": "9beead52d46cacae6047820551d59e128496faa0e2709e766eae8835905d0e97",
        "LookupName": "OfficeType",
        "LookupValue": "MlsOnlyBranch",
        "StandardLookupValue": "MlsOnlyBranch",
        "LegacyOdataValue": "MLS Only Branch"
    },
    {
        "LookupKey": "aa576db16249f3d11e6b6d70761769de0be39c90c11344ddc798226f09cd1ecd",
        "LookupName": "OfficeType",
        "LookupValue": "MlsOnlyFirm",
        "StandardLookupValue": "MlsOnlyFirm",
        "LegacyOdataValue": "MLS Only Firm"
    },
    {
        "LookupKey": "41bd0c02a81fb923afff50c85ed02b1defbc432bcc7a776ba92b18bb0740eebb",
        "LookupName": "OfficeType",
        "LookupValue": "MlsOnlyOffice",
        "StandardLookupValue": "MlsOnlyOffice",
        "LegacyOdataValue": "MLS Only Office"
    },
    {
        "LookupKey": "3ee56feda6ca12fdfebfd78d43e70edef2356bd973f6ad07a7b471565ffddec1",
        "LookupName": "OfficeType",
        "LookupValue": "NonMemberVendor",
        "StandardLookupValue": "NonMemberVendor",
        "LegacyOdataValue": "Non Member/Vendor"
    },
    {
        "LookupKey": "71631f2aa64af3858a944a68dcbfe33e03a2174b6c8aba4572cd30f752caec83",
        "LookupName": "OfficeType",
        "LookupValue": "RealtorBranchOffice",
        "StandardLookupValue": "RealtorBranchOffice",
        "LegacyOdataValue": "Realtor Branch Office"
    },
    {
        "LookupKey": "9942dbf1bd2a6fff351d468dbb8562925c0e2c73684a15e1c946962e060f4dcc",
        "LookupName": "OfficeType",
        "LookupValue": "RealtorFirm",
        "StandardLookupValue": "RealtorFirm",
        "LegacyOdataValue": "Realtor Firm"
    },
    {
        "LookupKey": "84290771d2b038e69b44b6def1afbfe444f7f46bcf24a8ab5888bf98190a6b8c",
        "LookupName": "OfficeType",
        "LookupValue": "RealtorOffice",
        "StandardLookupValue": "RealtorOffice",
        "LegacyOdataValue": "Realtor Office"
    },
    {
        "LookupKey": "51c7dc46edb9174489d6523ec3a5120acd3bb522edf2d932f38eb4656d6cbfb4",
        "LookupName": "ContactStatus",
        "LookupValue": "Active",
        "StandardLookupValue": "Active",
        "LegacyOdataValue": "Active"
    },
    {
        "LookupKey": "d3df0258b0f88875078d8781bf55e903b6e13b671b985e9afbc9a43d038852aa",
        "LookupName": "ContactStatus",
        "LookupValue": "Deleted",
        "StandardLookupValue": "Deleted",
        "LegacyOdataValue": "Deleted"
    },
    {
        "LookupKey": "64f91a7f93ff85e4106919d8b1a71b8ff563c3314defe0888d449730ba50070e",
        "LookupName": "ContactStatus",
        "LookupValue": "Inactive",
        "StandardLookupValue": "Inactive",
        "LegacyOdataValue": "Inactive"
    },
    {
        "LookupKey": "95a0d11b90abd6df499ea034476fe5ec2e83629b8ca4243661aa33bf0f1ed3bd",
        "LookupName": "ContactStatus",
        "LookupValue": "OnVacation",
        "StandardLookupValue": "OnVacation",
        "LegacyOdataValue": "On Vacation"
    },
    {
        "LookupKey": "7b8a7a260de408b6e61a54dea443afb3c3842d6d2cf50ebe2bc4e17b2fe8a436",
        "LookupName": "ContactType",
        "LookupValue": "Business",
        "StandardLookupValue": "Business",
        "LegacyOdataValue": "Business"
    },
    {
        "LookupKey": "6d38e6e18f5e59a7cea1cb3fb2dbab4ca967f25fe604d753fa2a43a563611ede",
        "LookupName": "ContactType",
        "LookupValue": "Family",
        "StandardLookupValue": "Family",
        "LegacyOdataValue": "Family"
    },
    {
        "LookupKey": "cf2ed9b841fb11d2356f22090611f9db4523a1af31c30fe48f8c402a6d0432da",
        "LookupName": "ContactType",
        "LookupValue": "Friend",
        "StandardLookupValue": "Friend",
        "LegacyOdataValue": "Friend"
    },
    {
        "LookupKey": "49c9f3bcf4555ceab0c50f7c60076c9b5e9c76504b2280fcc2961d8061b7d059",
        "LookupName": "ContactType",
        "LookupValue": "Lead",
        "StandardLookupValue": "Lead",
        "LegacyOdataValue": "Lead"
    },
    {
        "LookupKey": "090c38f0deb1dfa40d2e72909f1a623383edb5a2fea1850d1ac5338116f9bd71",
        "LookupName": "ContactType",
        "LookupValue": "Prospect",
        "StandardLookupValue": "Prospect",
        "LegacyOdataValue": "Prospect"
    },
    {
        "LookupKey": "53b67e4177eee63234af7834820ff1137af4978a2236b7669ff740cf27cbdaa1",
        "LookupName": "ContactType",
        "LookupValue": "ReadyToBuy",
        "StandardLookupValue": "ReadyToBuy",
        "LegacyOdataValue": "Ready to Buy"
    },
    {
        "LookupKey": "3b0950a25fd0a8b81df9b91c1779316317878b3f07e6f29340e5e6e2c8d50e6d",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Direct",
        "StandardLookupValue": "Direct",
        "LegacyOdataValue": "Direct"
    },
    {
        "LookupKey": "315a2d1de35b7fa82e5c78c1c484881e16ab1d633f02820ec418fe7d4ca2615f",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Fax",
        "StandardLookupValue": "Fax",
        "LegacyOdataValue": "Fax"
    },
    {
        "LookupKey": "8e8580b0c0c3a794e9e263b732370956b1915155228b99ba72936b3aaca8c9ac",
        "LookupName": "OtherPhoneType",
        "LookupValue": "First",
        "StandardLookupValue": "First",
        "LegacyOdataValue": "First"
    },
    {
        "LookupKey": "271ac70f801da32a47699cd6cc79c50098c2315e17a760a7dc4cfe8107adecb4",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Home",
        "StandardLookupValue": "Home",
        "LegacyOdataValue": "Home"
    },
    {
        "LookupKey": "972144288d540c28d908772f239bfef821c096304d6e5725a2024a4df30f0a07",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Mobile",
        "StandardLookupValue": "Mobile",
        "LegacyOdataValue": "Mobile"
    },
    {
        "LookupKey": "959c65cc7e8feeb9048c1c49bd5754a42d4374c5637bd275a529bb2bb9cc09df",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Modem",
        "StandardLookupValue": "Modem",
        "LegacyOdataValue": "Modem"
    },
    {
        "LookupKey": "caff3f5b4bc8810a2e66de2e08789b9afa6326f16a24401ab072dabe771b286f",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "ddf7167af1d3f2ff15ead5ab7ca78e98c51beff040579d88167549c881bf27e7",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Pager",
        "StandardLookupValue": "Pager",
        "LegacyOdataValue": "Pager"
    },
    {
        "LookupKey": "6c52aeb92b343e52bb9ea423b215698242cb0b9fdcbcdfc505670aec5351ac16",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Preferred",
        "StandardLookupValue": "Preferred",
        "LegacyOdataValue": "Preferred"
    },
    {
        "LookupKey": "3d1a450d10e35c273e95bfbd55bb0524eff5be895b421e4ba0d53c7b0128f987",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Second",
        "StandardLookupValue": "Second",
        "LegacyOdataValue": "Second"
    },
    {
        "LookupKey": "8bd469f7dc656b10000c22ed261d8be1ba80d50d230992db6f2a84a6d3b50f50",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Sms",
        "StandardLookupValue": "Sms",
        "LegacyOdataValue": "SMS"
    },
    {
        "LookupKey": "ee9785fad01d4843b2a34afbfdda48ab4462e75974d41b5f363abe569c9af23f",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Third",
        "StandardLookupValue": "Third",
        "LegacyOdataValue": "Third"
    },
    {
        "LookupKey": "2689128f7744a8e0104b3be6d2bc8b029b0f3ca80a8fb25ba3bce1eb4acf5b1b",
        "LookupName": "OtherPhoneType",
        "LookupValue": "TollFree",
        "StandardLookupValue": "TollFree",
        "LegacyOdataValue": "Toll Free"
    },
    {
        "LookupKey": "88f63330bc5af3f02e7503daebbe9831778dcb7f1e5d272eb789607c097322f6",
        "LookupName": "OtherPhoneType",
        "LookupValue": "Voicemail",
        "StandardLookupValue": "Voicemail",
        "LegacyOdataValue": "Voicemail"
    },
    {
        "LookupKey": "be688cf6d694f5e1f21ca7a089dfcda5ddcefbbce01f1224c254ff012cc7e820",
        "LookupName": "PreferredAddress",
        "LookupValue": "Home",
        "StandardLookupValue": "Home",
        "LegacyOdataValue": "Home"
    },
    {
        "LookupKey": "7ca372ea47b7c998bd1e0544a5a5229d1f5c217368b1ce21cbd0beae8a78a309",
        "LookupName": "PreferredAddress",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "2ca9ba6fe258e27beda6f846d627c3657bfb0cc7c6d36f95d1be2b08df3b82f6",
        "LookupName": "PreferredAddress",
        "LookupValue": "Work",
        "StandardLookupValue": "Work",
        "LegacyOdataValue": "Work"
    },
    {
        "LookupKey": "5d2348580538cfb0c5b63a5e052e61d2f6510bdba0182233d35e3fba9f071cee",
        "LookupName": "PreferredPhone",
        "LookupValue": "Direct",
        "StandardLookupValue": "Direct",
        "LegacyOdataValue": "Direct"
    },
    {
        "LookupKey": "1b51490759fca2c9bc1ea6dfc6751703dc85531e4c9364909e8b01f80f79eef9",
        "LookupName": "PreferredPhone",
        "LookupValue": "Home",
        "StandardLookupValue": "Home",
        "LegacyOdataValue": "Home"
    },
    {
        "LookupKey": "78f80c736051b7cfc9d10ac1413f6d7da0f91de7c2d4e2ce2f98f5d016d1b665",
        "LookupName": "PreferredPhone",
        "LookupValue": "Mobile",
        "StandardLookupValue": "Mobile",
        "LegacyOdataValue": "Mobile"
    },
    {
        "LookupKey": "3796ab4c5fb07c95eaf510af7cb478ee072e63cd589fbfcef942dd879bd5028e",
        "LookupName": "PreferredPhone",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "310078c8fc9df23bbbb56acfdfa5a481ddb5606179f518e78a8971291eda15ef",
        "LookupName": "PreferredPhone",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "707f72ed00c24ecca5fa3dd5ec81fe73ee1e2afb8eb38ee9bcf3836193d876ef",
        "LookupName": "PreferredPhone",
        "LookupValue": "TollFree",
        "StandardLookupValue": "TollFree",
        "LegacyOdataValue": "Toll Free"
    },
    {
        "LookupKey": "91718a1201a031ae7ac1866296f6089debb5674731d2465a072f2a4cabae4531",
        "LookupName": "PreferredPhone",
        "LookupValue": "Voicemail",
        "StandardLookupValue": "Voicemail",
        "LegacyOdataValue": "Voicemail"
    },
    {
        "LookupKey": "df176607b96fdd14be0c9a0db63a87ab711e8d7577d422a3a7ff0bb3b543ca89",
        "LookupName": "ClassName",
        "LookupValue": "BusinessOpportunity",
        "StandardLookupValue": "BusinessOpportunity",
        "LegacyOdataValue": "Business Opportunity"
    },
    {
        "LookupKey": "0f3c087e9df8a3e1058a99fcdf873bd9b6acd55a8fa6121109ee02fc358a5b4d",
        "LookupName": "ClassName",
        "LookupValue": "CommercialLease",
        "StandardLookupValue": "CommercialLease",
        "LegacyOdataValue": "Commercial Lease"
    },
    {
        "LookupKey": "5e2e78810eedc5101a2e7eb955256f5d8b8cffb2531c8c9699f1d52d50beda59",
        "LookupName": "ClassName",
        "LookupValue": "CommercialSale",
        "StandardLookupValue": "CommercialSale",
        "LegacyOdataValue": "Commercial Sale"
    },
    {
        "LookupKey": "2956c0807e764a0bd525a669ed6c3226acb9dceee7f24fe1ddc948d7e82d9002",
        "LookupName": "ClassName",
        "LookupValue": "Contacts",
        "StandardLookupValue": "Contacts",
        "LegacyOdataValue": "Contacts"
    },
    {
        "LookupKey": "9590499518cedef0c9c62d6c104b267bfc16936c1d5f41b93d6f8c96b81aac98",
        "LookupName": "ClassName",
        "LookupValue": "CrossProperty",
        "StandardLookupValue": "CrossProperty",
        "LegacyOdataValue": "Cross Property"
    },
    {
        "LookupKey": "267c2d4051823b9b0fb9b29436ef49aed5feb60393de209bd3adddab72e2852f",
        "LookupName": "ClassName",
        "LookupValue": "Farm",
        "StandardLookupValue": "Farm",
        "LegacyOdataValue": "Farm"
    },
    {
        "LookupKey": "e8c01e95f6b4f127de3a7c68c5081ff562fcab6751a1d5c82cbbcb546053d22f",
        "LookupName": "ClassName",
        "LookupValue": "HistoryTransactional",
        "StandardLookupValue": "HistoryTransactional",
        "LegacyOdataValue": "History Transactional"
    },
    {
        "LookupKey": "06eac6917896dec758d7d88559bc4e19ab4a788357acf38009a473a5e5d477fe",
        "LookupName": "ClassName",
        "LookupValue": "Land",
        "StandardLookupValue": "Land",
        "LegacyOdataValue": "Land"
    },
    {
        "LookupKey": "e2b7823d6f0efc43b094b031ee89cc982ea6d52d303c03b21c812a0b8d869ad8",
        "LookupName": "ClassName",
        "LookupValue": "ManufacturedInPark",
        "StandardLookupValue": "ManufacturedInPark",
        "LegacyOdataValue": "Manufactured In Park"
    },
    {
        "LookupKey": "dcb370caa0e96e8b5830ae471f847fc1a3a689b3a3119e1f19821c8bd5c9f70a",
        "LookupName": "ClassName",
        "LookupValue": "Media",
        "StandardLookupValue": "Media",
        "LegacyOdataValue": "Media"
    },
    {
        "LookupKey": "17e1bcd639d2ee74074d80a18c2e0cf5cd981d248adb3a9f1676266704462e46",
        "LookupName": "ClassName",
        "LookupValue": "Member",
        "StandardLookupValue": "Member",
        "LegacyOdataValue": "Member"
    },
    {
        "LookupKey": "faf1c6b8c98c1b641aa5e773aeaf8f8645f1eb420ba58cb856a644bb6f911990",
        "LookupName": "ClassName",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "75238f7243e155b80a88c0e4672599073637418f0839a0bbcbdfa66b828c107a",
        "LookupName": "ClassName",
        "LookupValue": "OpenHouse",
        "StandardLookupValue": "OpenHouse",
        "LegacyOdataValue": "Open House"
    },
    {
        "LookupKey": "fd4fe102427387721d7d335e4e07af7212a7f576af7d026dc8c53b3e6e5397e8",
        "LookupName": "ClassName",
        "LookupValue": "Residential",
        "StandardLookupValue": "Residential",
        "LegacyOdataValue": "Residential"
    },
    {
        "LookupKey": "d928d596d20bad0e617e8f6416c65638ed3749dee620ecffa5d8e307fbaf1b9a",
        "LookupName": "ClassName",
        "LookupValue": "ResidentialIncome",
        "StandardLookupValue": "ResidentialIncome",
        "LegacyOdataValue": "Residential Income"
    },
    {
        "LookupKey": "2b3bf534d6b85a08d86b5a3543558d2cf82dcb5d8637cab75b933cff93385544",
        "LookupName": "ClassName",
        "LookupValue": "ResidentialLease",
        "StandardLookupValue": "ResidentialLease",
        "LegacyOdataValue": "Residential Lease"
    },
    {
        "LookupKey": "9379a9510b6543ee107469d7e27eb1597a4a8a3a5fa59c6eb72f8c53b3514d53",
        "LookupName": "ClassName",
        "LookupValue": "SavedSearch",
        "StandardLookupValue": "SavedSearch",
        "LegacyOdataValue": "Saved Search"
    },
    {
        "LookupKey": "4ad45f8a6cbf650fc3b2219349e1ac679ab83f6d9c441d6f771f0cca7d75df16",
        "LookupName": "ImageOf",
        "LookupValue": "AerialView",
        "StandardLookupValue": "AerialView",
        "LegacyOdataValue": "Aerial View"
    },
    {
        "LookupKey": "556cea273e26b4e0da3f53a029118f99fe51a2e8418c428d4f37d78c3e4ab444",
        "LookupName": "ImageOf",
        "LookupValue": "Atrium",
        "StandardLookupValue": "Atrium",
        "LegacyOdataValue": "Atrium"
    },
    {
        "LookupKey": "dea42a08c5c5495a30059ed9dec1be7a407130b5a1f5a1a89d1a3612f0125e92",
        "LookupName": "ImageOf",
        "LookupValue": "Attic",
        "StandardLookupValue": "Attic",
        "LegacyOdataValue": "Attic"
    },
    {
        "LookupKey": "5974a8f0323c7bd042d1402111dc31c38ec9b75c8040d800b7bed3ea622786c1",
        "LookupName": "ImageOf",
        "LookupValue": "BackOfStructure",
        "StandardLookupValue": "BackOfStructure",
        "LegacyOdataValue": "Back of Structure"
    },
    {
        "LookupKey": "1e726ae91f1c862d37f11d6f38efc55669a9c14588267c555e8ac30b5ea9292f",
        "LookupName": "ImageOf",
        "LookupValue": "Balcony",
        "StandardLookupValue": "Balcony",
        "LegacyOdataValue": "Balcony"
    },
    {
        "LookupKey": "ded4378effa186ab3eeac6b8e825f42975e7acc911f338f4b5972f4e1e9f72b5",
        "LookupName": "ImageOf",
        "LookupValue": "Bar",
        "StandardLookupValue": "Bar",
        "LegacyOdataValue": "Bar"
    },
    {
        "LookupKey": "227a6ba965236e43ca6f40627e35abcc595a4aecfbd18105660b643df1ee100a",
        "LookupName": "ImageOf",
        "LookupValue": "Barn",
        "StandardLookupValue": "Barn",
        "LegacyOdataValue": "Barn"
    },
    {
        "LookupKey": "69858fe7d6968e541422c18bacba064a8a7fda82dc8110ed72caad2e493403a9",
        "LookupName": "ImageOf",
        "LookupValue": "Basement",
        "StandardLookupValue": "Basement",
        "LegacyOdataValue": "Basement"
    },
    {
        "LookupKey": "307195221784ae88d0a0e89972b3820a416b28026527fca5a30fbf6da2b5083c",
        "LookupName": "ImageOf",
        "LookupValue": "Bathroom",
        "StandardLookupValue": "Bathroom",
        "LegacyOdataValue": "Bathroom"
    },
    {
        "LookupKey": "a9e4477a4b6f24f809dab0b06e1609e4fa3cc7a84e8597ea89316208924b9b86",
        "LookupName": "ImageOf",
        "LookupValue": "Bedroom",
        "StandardLookupValue": "Bedroom",
        "LegacyOdataValue": "Bedroom"
    },
    {
        "LookupKey": "0a57e457c597561a597293b0f9383b3dcc8b3726a515d3732ba12160c26a89ef",
        "LookupName": "ImageOf",
        "LookupValue": "BonusRoom",
        "StandardLookupValue": "BonusRoom",
        "LegacyOdataValue": "Bonus Room"
    },
    {
        "LookupKey": "8d0960a3bebfa54e7a5b75129ae70af4f0583f8f6eda4ea808be4a9c5ca45074",
        "LookupName": "ImageOf",
        "LookupValue": "BreakfastArea",
        "StandardLookupValue": "BreakfastArea",
        "LegacyOdataValue": "Breakfast Area"
    },
    {
        "LookupKey": "713d29687d573b4ad335f87a8123170ec56d821dbd4e813bbc06d2fbbf4e8f67",
        "LookupName": "ImageOf",
        "LookupValue": "Closet",
        "StandardLookupValue": "Closet",
        "LegacyOdataValue": "Closet"
    },
    {
        "LookupKey": "15b58eca4a948ca4675743366b75375d889481686d128ee98bec363abd189afe",
        "LookupName": "ImageOf",
        "LookupValue": "Community",
        "StandardLookupValue": "Community",
        "LegacyOdataValue": "Community"
    },
    {
        "LookupKey": "e878ea1ad800a2687c471334dfe3aecde5cfbf60c31e54276eb55c4764a1a30e",
        "LookupName": "ImageOf",
        "LookupValue": "Courtyard",
        "StandardLookupValue": "Courtyard",
        "LegacyOdataValue": "Courtyard"
    },
    {
        "LookupKey": "f04ed241b03ea373ad6b5170216fd42ff7a32560f783500ac84541ad7e215071",
        "LookupName": "ImageOf",
        "LookupValue": "Deck",
        "StandardLookupValue": "Deck",
        "LegacyOdataValue": "Deck"
    },
    {
        "LookupKey": "daf7143a9a7141bbf2ee89eacc761f058d0380d3930bdabef98dae074706cb3a",
        "LookupName": "ImageOf",
        "LookupValue": "Den",
        "StandardLookupValue": "Den",
        "LegacyOdataValue": "Den"
    },
    {
        "LookupKey": "7061427d0d4ef280dc2148cb11f581bf941c6433c6df392a8cd9d2332fa5046e",
        "LookupName": "ImageOf",
        "LookupValue": "DiningArea",
        "StandardLookupValue": "DiningArea",
        "LegacyOdataValue": "Dining Area"
    },
    {
        "LookupKey": "d5d75710054018af5ae935c2f94d7e0cef98f4acfebeabc22051e38279a5e683",
        "LookupName": "ImageOf",
        "LookupValue": "DiningRoom",
        "StandardLookupValue": "DiningRoom",
        "LegacyOdataValue": "Dining Room"
    },
    {
        "LookupKey": "dff8153d131510f3a751db0c41cc7baed36fde5cd9b71d23f2fec457e76d04b8",
        "LookupName": "ImageOf",
        "LookupValue": "Dock",
        "StandardLookupValue": "Dock",
        "LegacyOdataValue": "Dock"
    },
    {
        "LookupKey": "bad4cdd9cf010afc3e14fe87f57580df58b1b5a51272182a53ec013b7e9bbd59",
        "LookupName": "ImageOf",
        "LookupValue": "Entry",
        "StandardLookupValue": "Entry",
        "LegacyOdataValue": "Entry"
    },
    {
        "LookupKey": "acbb172621121a1647f0b41b3989aea9a599c572fb8ff258acb0657a946be61f",
        "LookupName": "ImageOf",
        "LookupValue": "ExerciseRoom",
        "StandardLookupValue": "ExerciseRoom",
        "LegacyOdataValue": "Exercise Room"
    },
    {
        "LookupKey": "0cca3344e2c6d49ec65801889e76bd72f94f48639bbf7eb7ad3c925e8a5d8137",
        "LookupName": "ImageOf",
        "LookupValue": "FamilyRoom",
        "StandardLookupValue": "FamilyRoom",
        "LegacyOdataValue": "Family Room"
    },
    {
        "LookupKey": "3b22c6d21436a433496009ae9b24b70626f5a61c2ea3e7faefed15ade73817bb",
        "LookupName": "ImageOf",
        "LookupValue": "Fence",
        "StandardLookupValue": "Fence",
        "LegacyOdataValue": "Fence"
    },
    {
        "LookupKey": "5cb8dd9acd8da9313e9047c36d5ae293c13d203d88394b4a241ccc0e85ce2b34",
        "LookupName": "ImageOf",
        "LookupValue": "Fireplace",
        "StandardLookupValue": "Fireplace",
        "LegacyOdataValue": "Fireplace"
    },
    {
        "LookupKey": "11f7dd40b771f599837258338d602ace8f8657f91fe8628d03d3eca161498df4",
        "LookupName": "ImageOf",
        "LookupValue": "FloorPlan",
        "StandardLookupValue": "FloorPlan",
        "LegacyOdataValue": "Floor Plan"
    },
    {
        "LookupKey": "c1557dc46f9205811d92d6b2ab168d08c27273cf0604040c126f3316bd015d6c",
        "LookupName": "ImageOf",
        "LookupValue": "FrontOfStructure",
        "StandardLookupValue": "FrontOfStructure",
        "LegacyOdataValue": "Front of Structure"
    },
    {
        "LookupKey": "3357925e043994b5263fd13021eaf9283efb446059f7e0f19ebaa8f24d2b0d5b",
        "LookupName": "ImageOf",
        "LookupValue": "GameRoom",
        "StandardLookupValue": "GameRoom",
        "LegacyOdataValue": "Game Room"
    },
    {
        "LookupKey": "5d925c8537df242ba7613e7e31c36cf862c1c7495f825f4845b43247cbc9be6f",
        "LookupName": "ImageOf",
        "LookupValue": "Garage",
        "StandardLookupValue": "Garage",
        "LegacyOdataValue": "Garage"
    },
    {
        "LookupKey": "934882c1dcbfcffddc7e7b461c638d7ee9c3a5a22bb6c0c7ebbd991743e88440",
        "LookupName": "ImageOf",
        "LookupValue": "Garden",
        "StandardLookupValue": "Garden",
        "LegacyOdataValue": "Garden"
    },
    {
        "LookupKey": "3e704d363eb0e8e88ede30d83dfecedfc25c158407202f48899c1ed190014f35",
        "LookupName": "ImageOf",
        "LookupValue": "GolfCourse",
        "StandardLookupValue": "GolfCourse",
        "LegacyOdataValue": "Golf Course"
    },
    {
        "LookupKey": "5fc8c1146282aa19c26105a12cd2333c8284be7a2332378483c9c4c0d14701bd",
        "LookupName": "ImageOf",
        "LookupValue": "GreatRoom",
        "StandardLookupValue": "GreatRoom",
        "LegacyOdataValue": "Great Room"
    },
    {
        "LookupKey": "0c56e6d637d4ebb7b67585711804d2838b77767ff1fe762644394d7cdb51bcfd",
        "LookupName": "ImageOf",
        "LookupValue": "GuestQuarters",
        "StandardLookupValue": "GuestQuarters",
        "LegacyOdataValue": "Guest Quarters"
    },
    {
        "LookupKey": "08503ba0ad32690f662b32d8ca1b02cc2e497e6c15bebc0f550bf4bcefa1634a",
        "LookupName": "ImageOf",
        "LookupValue": "Gym",
        "StandardLookupValue": "Gym",
        "LegacyOdataValue": "Gym"
    },
    {
        "LookupKey": "bdc75a0e581f050e2f450f1822df24c1d3356c001198a714c794bcb001457165",
        "LookupName": "ImageOf",
        "LookupValue": "HobbyRoom",
        "StandardLookupValue": "HobbyRoom",
        "LegacyOdataValue": "Hobby Room"
    },
    {
        "LookupKey": "502155c4b0bdcf03024795e2bffecf0c0b647d089d081edfdc939501613a62df",
        "LookupName": "ImageOf",
        "LookupValue": "Inlaw",
        "StandardLookupValue": "Inlaw",
        "LegacyOdataValue": "Inlaw"
    },
    {
        "LookupKey": "7b3628f0f9056ecff177405f84fbf5d71991ddbe252ecdbf04c7265d037536e0",
        "LookupName": "ImageOf",
        "LookupValue": "Kitchen",
        "StandardLookupValue": "Kitchen",
        "LegacyOdataValue": "Kitchen"
    },
    {
        "LookupKey": "7aaf0cb50a072f99922819a876fbec7f8c65ca17ca4d5bfb43680757d00a4b0d",
        "LookupName": "ImageOf",
        "LookupValue": "Lake",
        "StandardLookupValue": "Lake",
        "LegacyOdataValue": "Lake"
    },
    {
        "LookupKey": "0338e2a88baba0547f953bf6dcb8ef649549ef8a9913cf73411c761b6ca76ab3",
        "LookupName": "ImageOf",
        "LookupValue": "Laundry",
        "StandardLookupValue": "Laundry",
        "LegacyOdataValue": "Laundry"
    },
    {
        "LookupKey": "edb4fc0db155bbe8342517a2c11f8df1313b0c6b401898b98bff6640fbeab6d4",
        "LookupName": "ImageOf",
        "LookupValue": "Library",
        "StandardLookupValue": "Library",
        "LegacyOdataValue": "Library"
    },
    {
        "LookupKey": "bd7e32b8008ea00edcccf56ce537c0938627b33ffc053b819261b8d88e549775",
        "LookupName": "ImageOf",
        "LookupValue": "LivingRoom",
        "StandardLookupValue": "LivingRoom",
        "LegacyOdataValue": "Living Room"
    },
    {
        "LookupKey": "7912c505a394de1fef8df6dc3279783e33d06bf18e8b1184ef33400fa3f4f82b",
        "LookupName": "ImageOf",
        "LookupValue": "LoadingDock",
        "StandardLookupValue": "LoadingDock",
        "LegacyOdataValue": "Loading Dock"
    },
    {
        "LookupKey": "3911b1ecbf23d5815b9afd80442b4aca0cb564cf4057d17efa5e6038f0100b6f",
        "LookupName": "ImageOf",
        "LookupValue": "Lobby",
        "StandardLookupValue": "Lobby",
        "LegacyOdataValue": "Lobby"
    },
    {
        "LookupKey": "5ca9a1ee2275bf45d3091fe5c1a78f3f22ce30d951d279e828ebce3dc0334a2c",
        "LookupName": "ImageOf",
        "LookupValue": "Loft",
        "StandardLookupValue": "Loft",
        "LegacyOdataValue": "Loft"
    },
    {
        "LookupKey": "0eb3fa2c1c3182003564b9208d6cab8797043cb4c81dd60a49541afd1666f9a6",
        "LookupName": "ImageOf",
        "LookupValue": "Lot",
        "StandardLookupValue": "Lot",
        "LegacyOdataValue": "Lot"
    },
    {
        "LookupKey": "678166d566962f243d895d6b7ef01b6fb0c56e747ca8dda117b41c2fd2e9e175",
        "LookupName": "ImageOf",
        "LookupValue": "MasterBathroom",
        "StandardLookupValue": "MasterBathroom",
        "LegacyOdataValue": "Master Bathroom"
    },
    {
        "LookupKey": "6eb9d3559262d392647e09888b173435b58f1fd259407b3e29fc72543f05f24c",
        "LookupName": "ImageOf",
        "LookupValue": "MasterBedroom",
        "StandardLookupValue": "MasterBedroom",
        "LegacyOdataValue": "Master Bedroom"
    },
    {
        "LookupKey": "1c7b342774a842efdc896ef0276235a0fbb9533df7c31dcc227f2a4d591499af",
        "LookupName": "ImageOf",
        "LookupValue": "MediaRoom",
        "StandardLookupValue": "MediaRoom",
        "LegacyOdataValue": "Media Room"
    },
    {
        "LookupKey": "b075d6180d2d835e95943c8cdec4ed4a02c94215973d10b6e8f860ad42000ce4",
        "LookupName": "ImageOf",
        "LookupValue": "MudRoom",
        "StandardLookupValue": "MudRoom",
        "LegacyOdataValue": "Mud Room"
    },
    {
        "LookupKey": "923105d4cfda5006768e70e40f0b1d9bb2042b01036ee319c5e0c7ae9037de21",
        "LookupName": "ImageOf",
        "LookupValue": "Nursery",
        "StandardLookupValue": "Nursery",
        "LegacyOdataValue": "Nursery"
    },
    {
        "LookupKey": "509b097fe8f8af961e5c41dd3c4eef0f954a77040f7cd65145cd84f5b25378a4",
        "LookupName": "ImageOf",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "fa8c2764e652ebfb172c665df06d3dc7b9d8d1f9334c42c840c9cfefec10bef0",
        "LookupName": "ImageOf",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "71f3c632642c320cbd41c209fa768fa60d3b666cec1c7b0a48a0eca3a1475c8e",
        "LookupName": "ImageOf",
        "LookupValue": "OutBuildings",
        "StandardLookupValue": "OutBuildings",
        "LegacyOdataValue": "Out Buildings"
    },
    {
        "LookupKey": "2d1106c51f3d69a72552c6a22e3974a5002dfabea5b309d3d06cab45e3ceef84",
        "LookupName": "ImageOf",
        "LookupValue": "Pantry",
        "StandardLookupValue": "Pantry",
        "LegacyOdataValue": "Pantry"
    },
    {
        "LookupKey": "661099d1cb965e24a83939f45651de3a8a29ad7414410ebcc273a2344e8dc6b4",
        "LookupName": "ImageOf",
        "LookupValue": "Parking",
        "StandardLookupValue": "Parking",
        "LegacyOdataValue": "Parking"
    },
    {
        "LookupKey": "ff42adb5c5c47b4694825fcb9f720af3935f3f49bc726d90090e96880d034500",
        "LookupName": "ImageOf",
        "LookupValue": "Patio",
        "StandardLookupValue": "Patio",
        "LegacyOdataValue": "Patio"
    },
    {
        "LookupKey": "6a9d45279283494c53b9384bc70e9166a93a3b41b8a824ddccfe50521183934b",
        "LookupName": "ImageOf",
        "LookupValue": "Pier",
        "StandardLookupValue": "Pier",
        "LegacyOdataValue": "Pier"
    },
    {
        "LookupKey": "32484e5f40604696090e36e40f347513f737400fde5f5e4123a9109e6b70078b",
        "LookupName": "ImageOf",
        "LookupValue": "PlatMap",
        "StandardLookupValue": "PlatMap",
        "LegacyOdataValue": "Plat Map"
    },
    {
        "LookupKey": "870550c93a56fdeb381a15a2ad6a0e69a2fdcb2ba635b7467f4811531d84bfa3",
        "LookupName": "ImageOf",
        "LookupValue": "Pond",
        "StandardLookupValue": "Pond",
        "LegacyOdataValue": "Pond"
    },
    {
        "LookupKey": "9497bd82c282345cfe9e70c7f5f36b3822320509645907776cf7256aa11770f0",
        "LookupName": "ImageOf",
        "LookupValue": "Pool",
        "StandardLookupValue": "Pool",
        "LegacyOdataValue": "Pool"
    },
    {
        "LookupKey": "2a209e3f287de6e90e418087a096172ca5f6bb066dc08cc6651e932fb5f3230f",
        "LookupName": "ImageOf",
        "LookupValue": "Reception",
        "StandardLookupValue": "Reception",
        "LegacyOdataValue": "Reception"
    },
    {
        "LookupKey": "1c6408a69f4757715deb42341ea4cbaab61a7db54ffb0f6ef69e38cdc16c1034",
        "LookupName": "ImageOf",
        "LookupValue": "RecreationRoom",
        "StandardLookupValue": "RecreationRoom",
        "LegacyOdataValue": "Recreation Room"
    },
    {
        "LookupKey": "71b850510a5438492cc3481a0e3ef117df65275dca710d5ff8b29d1e3c562dad",
        "LookupName": "ImageOf",
        "LookupValue": "Sauna",
        "StandardLookupValue": "Sauna",
        "LegacyOdataValue": "Sauna"
    },
    {
        "LookupKey": "4a0b31006fbfe319cb2d3701ba7a06034ff9c39a908213f1b68c9db62cf94f97",
        "LookupName": "ImageOf",
        "LookupValue": "Showroom",
        "StandardLookupValue": "Showroom",
        "LegacyOdataValue": "Showroom"
    },
    {
        "LookupKey": "41ba667c8a275c4d45ef81cd520c68fcd2745e73ee0bc1239fe294bd0dafc0c5",
        "LookupName": "ImageOf",
        "LookupValue": "SideOfStructure",
        "StandardLookupValue": "SideOfStructure",
        "LegacyOdataValue": "Side of Structure"
    },
    {
        "LookupKey": "b9af7339edaf66a3f35866ef6e3e98404735cbc18026ec5dc015996ecbdce245",
        "LookupName": "ImageOf",
        "LookupValue": "SittingRoom",
        "StandardLookupValue": "SittingRoom",
        "LegacyOdataValue": "Sitting Room"
    },
    {
        "LookupKey": "0fe77e1f178dc35335635cc07d5d61f9b42816dc24f4339d9b6a4e161dfabed8",
        "LookupName": "ImageOf",
        "LookupValue": "Spa",
        "StandardLookupValue": "Spa",
        "LegacyOdataValue": "Spa"
    },
    {
        "LookupKey": "b07def9acd8393b813f5b4b55fcdabebde988aa49d80e1e17d18aeb104ab9d5e",
        "LookupName": "ImageOf",
        "LookupValue": "Stable",
        "StandardLookupValue": "Stable",
        "LegacyOdataValue": "Stable"
    },
    {
        "LookupKey": "e2ddc4ca4653f0d30e3e0852e3c9ff561af9004b1188d2860fdfe4c47c616981",
        "LookupName": "ImageOf",
        "LookupValue": "Storage",
        "StandardLookupValue": "Storage",
        "LegacyOdataValue": "Storage"
    },
    {
        "LookupKey": "70bac424643ec27ebbd09b073ccf77aa7196b8ab2187123e01d209b354ea0197",
        "LookupName": "ImageOf",
        "LookupValue": "Studio",
        "StandardLookupValue": "Studio",
        "LegacyOdataValue": "Studio"
    },
    {
        "LookupKey": "b35e3f5090ab2b6f9e193fc58ccddb1d98c789cac45915eb66d5e84e49b91df3",
        "LookupName": "ImageOf",
        "LookupValue": "Study",
        "StandardLookupValue": "Study",
        "LegacyOdataValue": "Study"
    },
    {
        "LookupKey": "61fe9d22df399598060fd4fbf762b25d1876bd8a03fd7c644db27fd76e594605",
        "LookupName": "ImageOf",
        "LookupValue": "SunRoom",
        "StandardLookupValue": "SunRoom",
        "LegacyOdataValue": "Sun Room"
    },
    {
        "LookupKey": "121019b4cfa5d8589c76e576f646990886939f1cb7c97d2fbe67dc2959ffaaa2",
        "LookupName": "ImageOf",
        "LookupValue": "View",
        "StandardLookupValue": "View",
        "LegacyOdataValue": "View"
    },
    {
        "LookupKey": "050d7aca14b9edd0fb31cdf89526538da558e4a5504ad3f8878ce25646a5ea94",
        "LookupName": "ImageOf",
        "LookupValue": "Waterfront",
        "StandardLookupValue": "Waterfront",
        "LegacyOdataValue": "Waterfront"
    },
    {
        "LookupKey": "80c584199b256460a59eefd221b8322d9d90387a9f52e523169daac3e587f183",
        "LookupName": "ImageOf",
        "LookupValue": "WineCellar",
        "StandardLookupValue": "WineCellar",
        "LegacyOdataValue": "Wine Cellar"
    },
    {
        "LookupKey": "8d4fe8077bf3f1cbc88a40b6d2878156ee3493f193049b5a91016a75a18481e6",
        "LookupName": "ImageOf",
        "LookupValue": "Workshop",
        "StandardLookupValue": "Workshop",
        "LegacyOdataValue": "Workshop"
    },
    {
        "LookupKey": "511e3cb92064351e0cc82c402d272355f7ed99381f7fdaecc64f0a7c877695cc",
        "LookupName": "ImageOf",
        "LookupValue": "Yard",
        "StandardLookupValue": "Yard",
        "LegacyOdataValue": "Yard"
    },
    {
        "LookupKey": "bf13b53b61b12e96dd10c68d67641730df2f93d61d155afcfee25f0612f071e5",
        "LookupName": "MediaCategory",
        "LookupValue": "AgentPhoto",
        "StandardLookupValue": "AgentPhoto",
        "LegacyOdataValue": "Agent Photo"
    },
    {
        "LookupKey": "390e969f870f167ab99faef9ac0e12897058379e040ab44b9f5d257b33264e00",
        "LookupName": "MediaCategory",
        "LookupValue": "BrandedVirtualTour",
        "StandardLookupValue": "BrandedVirtualTour",
        "LegacyOdataValue": "Branded Virtual Tour"
    },
    {
        "LookupKey": "296d4932a5e082bf7d7893684859740819909dd9a07aac4a066cab66186f8a22",
        "LookupName": "MediaCategory",
        "LookupValue": "Document",
        "StandardLookupValue": "Document",
        "LegacyOdataValue": "Document"
    },
    {
        "LookupKey": "1dfcf5b63a2240c75c2462df96adcb6c1ad12056b8d968c42bf5c0fcfa7548e8",
        "LookupName": "MediaCategory",
        "LookupValue": "FloorPlan",
        "StandardLookupValue": "FloorPlan",
        "LegacyOdataValue": "Floor Plan"
    },
    {
        "LookupKey": "68c3f67f026bcc532611535a956f40c105627f74efa151a0b7ae8695790ac925",
        "LookupName": "MediaCategory",
        "LookupValue": "OfficeLogo",
        "StandardLookupValue": "OfficeLogo",
        "LegacyOdataValue": "Office Logo"
    },
    {
        "LookupKey": "4d7ce05053032b3e71305a560389703a8561682bbbcf11d51fe91ac17dbd19d5",
        "LookupName": "MediaCategory",
        "LookupValue": "OfficePhoto",
        "StandardLookupValue": "OfficePhoto",
        "LegacyOdataValue": "Office Photo"
    },
    {
        "LookupKey": "6b9c9a9abcb69a45b24fa375aa683b47b13eed633f350ad0efe2ea964bbbcf20",
        "LookupName": "MediaCategory",
        "LookupValue": "Photo",
        "StandardLookupValue": "Photo",
        "LegacyOdataValue": "Photo"
    },
    {
        "LookupKey": "87e19e8e909456a10873e940b7ae94da3bb0f88aa2f75e4785ffdc77cd288d1b",
        "LookupName": "MediaCategory",
        "LookupValue": "UnbrandedVirtualTour",
        "StandardLookupValue": "UnbrandedVirtualTour",
        "LegacyOdataValue": "Unbranded Virtual Tour"
    },
    {
        "LookupKey": "bcfb657230ed0109e21e6f3cccad357bb878522459206ec2a930fb1cc28e34c9",
        "LookupName": "MediaCategory",
        "LookupValue": "Video",
        "StandardLookupValue": "Video",
        "LegacyOdataValue": "Video"
    },
    {
        "LookupKey": "1d4b8402d74fae0616b85d42b34ae3eddead8062c68338dee0aec5b2452baf43",
        "LookupName": "MediaType",
        "LookupValue": "Doc",
        "StandardLookupValue": "Doc",
        "LegacyOdataValue": "doc"
    },
    {
        "LookupKey": "59326ea0a49bd24895f43092162133193a2e151516c9afe2a996a536238cb290",
        "LookupName": "MediaType",
        "LookupValue": "Docx",
        "StandardLookupValue": "Docx",
        "LegacyOdataValue": "docx"
    },
    {
        "LookupKey": "b9d32406da56b58852bfc6c291b432f8596f2a5d7785611740074d32633dd13b",
        "LookupName": "MediaType",
        "LookupValue": "Gif",
        "StandardLookupValue": "Gif",
        "LegacyOdataValue": "gif"
    },
    {
        "LookupKey": "196165fc0a1c8ea6229e53b420cbea06e4016c89b7d45fca409ebb862f67d6b9",
        "LookupName": "MediaType",
        "LookupValue": "Jpeg",
        "StandardLookupValue": "Jpeg",
        "LegacyOdataValue": "jpeg"
    },
    {
        "LookupKey": "0435932d898ff1e85a53d84ab28c34119b9c4a3a12bd41b76173f5539f077821",
        "LookupName": "MediaType",
        "LookupValue": "Mov",
        "StandardLookupValue": "Mov",
        "LegacyOdataValue": "mov"
    },
    {
        "LookupKey": "6a2e2d4307a9aaa0b031c5a99ba890666c185a0cb551100c215f2f29eb01792c",
        "LookupName": "MediaType",
        "LookupValue": "Mp4",
        "StandardLookupValue": "Mp4",
        "LegacyOdataValue": "mp4"
    },
    {
        "LookupKey": "a1fba2d412c4c99afe9910fc2787f7c9fff42f008af09631712e29608114fb71",
        "LookupName": "MediaType",
        "LookupValue": "Mpeg",
        "StandardLookupValue": "Mpeg",
        "LegacyOdataValue": "mpeg"
    },
    {
        "LookupKey": "0bfc19f23af0a85c1e42a221193743d1047cf7ce576682c1f200dec53c67ade6",
        "LookupName": "MediaType",
        "LookupValue": "Pdf",
        "StandardLookupValue": "Pdf",
        "LegacyOdataValue": "pdf"
    },
    {
        "LookupKey": "c28fc83e2bfb52f31d278f75be21dbd2facc42937dded09110cad0b459a40b6c",
        "LookupName": "MediaType",
        "LookupValue": "Png",
        "StandardLookupValue": "Png",
        "LegacyOdataValue": "png"
    },
    {
        "LookupKey": "1a0d8cdb7dc65c01de5adfcdad6678333c7e7a345ce8607e44f9c60d044ec171",
        "LookupName": "MediaType",
        "LookupValue": "Quicktime",
        "StandardLookupValue": "Quicktime",
        "LegacyOdataValue": "quicktime"
    },
    {
        "LookupKey": "8242a31a94f8476ead382bb70f29e97ef6c935e902c10791e3d56f7cbf58f3f6",
        "LookupName": "MediaType",
        "LookupValue": "Rtf",
        "StandardLookupValue": "Rtf",
        "LegacyOdataValue": "rtf"
    },
    {
        "LookupKey": "5ae044c58d421fc7c0accedaf37e6091e11e4a50fa2aec15a9ab2e4989cdf812",
        "LookupName": "MediaType",
        "LookupValue": "Tiff",
        "StandardLookupValue": "Tiff",
        "LegacyOdataValue": "tiff"
    },
    {
        "LookupKey": "ac60e132e421583a6622390cb8868dbe9d4de2c55d8b0bd2d75bc0c266f61c26",
        "LookupName": "MediaType",
        "LookupValue": "Txt",
        "StandardLookupValue": "Txt",
        "LegacyOdataValue": "txt"
    },
    {
        "LookupKey": "8b270a17939629dbfbdefd97d85944bd46ce8d1d957f1042a11dde097c6c7c04",
        "LookupName": "MediaType",
        "LookupValue": "Wmv",
        "StandardLookupValue": "Wmv",
        "LegacyOdataValue": "wmv"
    },
    {
        "LookupKey": "55167edd824944e9ba2ae20fcb8ef8faf625604f46ca82acf84a0ce21c502be4",
        "LookupName": "MediaType",
        "LookupValue": "Xls",
        "StandardLookupValue": "Xls",
        "LegacyOdataValue": "xls"
    },
    {
        "LookupKey": "6e7e1e091eff8e61cb564233f158a77c6209aa58c0764153472ca1fd82513761",
        "LookupName": "MediaType",
        "LookupValue": "Xlsx",
        "StandardLookupValue": "Xlsx",
        "LegacyOdataValue": "xlsx"
    },
    {
        "LookupKey": "1d19819829bf4faeba02148edfe8ee1206c5cfad498f47aef5b88b304186eba7",
        "LookupName": "Permission",
        "LookupValue": "AgentOnly",
        "StandardLookupValue": "AgentOnly",
        "LegacyOdataValue": "Agent Only"
    },
    {
        "LookupKey": "b8d8606da3bb88ea1715982cf5f5d578a4ab3ebe53a419d78d5baba8139d6565",
        "LookupName": "Permission",
        "LookupValue": "FirmOnly",
        "StandardLookupValue": "FirmOnly",
        "LegacyOdataValue": "Firm Only"
    },
    {
        "LookupKey": "8db9a84395f02e269d5421a3db4b3ab1bd4e4169751f0f8ac82275b1bd521ee8",
        "LookupName": "Permission",
        "LookupValue": "Idx",
        "StandardLookupValue": "Idx",
        "LegacyOdataValue": "IDX"
    },
    {
        "LookupKey": "f394004fb4bd11136e5c3a40b16fc2c15984147cc2aff1188d0fbb36fcfb5015",
        "LookupName": "Permission",
        "LookupValue": "OfficeOnly",
        "StandardLookupValue": "OfficeOnly",
        "LegacyOdataValue": "Office Only"
    },
    {
        "LookupKey": "063c5e05985b7aba35605ad0bbf786cdc7254772ac9a057a898b769958929c03",
        "LookupName": "Permission",
        "LookupValue": "Private",
        "StandardLookupValue": "Private",
        "LegacyOdataValue": "Private"
    },
    {
        "LookupKey": "2a25313abd1df635edf4a11dbb67e58d72552c05b910661f54415d5def687db2",
        "LookupName": "Permission",
        "LookupValue": "Public",
        "StandardLookupValue": "Public",
        "LegacyOdataValue": "Public"
    },
    {
        "LookupKey": "284a29a93acd27c49b2be7338eb8a8672e872324084675f688653efb1b1b6a36",
        "LookupName": "Permission",
        "LookupValue": "Vow",
        "StandardLookupValue": "Vow",
        "LegacyOdataValue": "VOW"
    },
    {
        "LookupKey": "d29969ba182ba7ff64bcd10dff80afc7f8373d25bfd567834f6d7746d75be653",
        "LookupName": "ResourceName",
        "LookupValue": "Contacts",
        "StandardLookupValue": "Contacts",
        "LegacyOdataValue": "Contacts"
    },
    {
        "LookupKey": "22f65f07ce0ba40d99dc7b91f7a8815418308d042cc944cfee4bd9663cb70d98",
        "LookupName": "ResourceName",
        "LookupValue": "Member",
        "StandardLookupValue": "Member",
        "LegacyOdataValue": "Member"
    },
    {
        "LookupKey": "ddd754c79457b28e9ef5dd29c9f9c394aba3a9f7ed7079b909e069726cf14325",
        "LookupName": "ResourceName",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "640dd0d8018906c3c2f7aed75dd14acab7baa1dbe389c980f017214163aa34ec",
        "LookupName": "ResourceName",
        "LookupValue": "Property",
        "StandardLookupValue": "Property",
        "LegacyOdataValue": "Property"
    },
    {
        "LookupKey": "07a154dd1676bd5953e1462b9736e851849348f2459d3075ffc9015fb8b7c1ad",
        "LookupName": "ContactListingPreference",
        "LookupValue": "Discard",
        "StandardLookupValue": "Discard",
        "LegacyOdataValue": "Discard"
    },
    {
        "LookupKey": "b68a5f23076387f96f25ff8eacb9e93909a0b9619f6649a0b3747cb72f6c868e",
        "LookupName": "ContactListingPreference",
        "LookupValue": "Favorite",
        "StandardLookupValue": "Favorite",
        "LegacyOdataValue": "Favorite"
    },
    {
        "LookupKey": "39f67c40a85967959cf21ae8ff44b4c840bc54af5ca060ba71a05ba2908a2e82",
        "LookupName": "ContactListingPreference",
        "LookupValue": "Possibility",
        "StandardLookupValue": "Possibility",
        "LegacyOdataValue": "Possibility"
    },
    {
        "LookupKey": "3903b666422c116e19144c5af119b2fcdde47d574b6e2d0dd5216eaa9dde1060",
        "LookupName": "ActorType",
        "LookupValue": "Agent",
        "StandardLookupValue": "Agent",
        "LegacyOdataValue": "Agent"
    },
    {
        "LookupKey": "e23ac13ad8fbdbea9e3bea72881102e6845a65f5defeccc7517dbdd4f3b2fe06",
        "LookupName": "ActorType",
        "LookupValue": "Bot",
        "StandardLookupValue": "Bot",
        "LegacyOdataValue": "Bot"
    },
    {
        "LookupKey": "dc06946105ea32226bcbe37d3e3ada664b67fffd5ad561f2dc4bd08a2df45466",
        "LookupName": "ActorType",
        "LookupValue": "Client",
        "StandardLookupValue": "Client",
        "LegacyOdataValue": "Client"
    },
    {
        "LookupKey": "dfa8f3a1766497572cd41729c21a397214fa14c63c877402639db615c8d49734",
        "LookupName": "ActorType",
        "LookupValue": "Consumer",
        "StandardLookupValue": "Consumer",
        "LegacyOdataValue": "Consumer"
    },
    {
        "LookupKey": "fb8532cef758854bde69b409918465315b096e156ce6aff8b28679b4c0a3405a",
        "LookupName": "ActorType",
        "LookupValue": "Unknown",
        "StandardLookupValue": "Unknown",
        "LegacyOdataValue": "Unknown"
    },
    {
        "LookupKey": "bdac613eb10a3f509a680b20b624a5d72e3c217826cc933fd93d0eb7cdab77cb",
        "LookupName": "DeviceType",
        "LookupValue": "Desktop",
        "StandardLookupValue": "Desktop",
        "LegacyOdataValue": "Desktop"
    },
    {
        "LookupKey": "ce2761eaec83a7e0943b24561adfe6abc1767fe764a8957486e7dbbac00b861d",
        "LookupName": "DeviceType",
        "LookupValue": "Mobile",
        "StandardLookupValue": "Mobile",
        "LegacyOdataValue": "Mobile"
    },
    {
        "LookupKey": "080f5b0778dbc27f1cf1d6cf1360455c7a71eec8627df04eba3102ff5b351b5b",
        "LookupName": "DeviceType",
        "LookupValue": "Tablet",
        "StandardLookupValue": "Tablet",
        "LegacyOdataValue": "Tablet"
    },
    {
        "LookupKey": "ead1c12fe80d5239e4554352462d2919020e07b1201a24e91abdc9ab5ebe6c12",
        "LookupName": "DeviceType",
        "LookupValue": "Unknown",
        "StandardLookupValue": "Unknown",
        "LegacyOdataValue": "Unknown"
    },
    {
        "LookupKey": "505c7945556d055fb0827bc8a4db3f3cb4b23a6421d206569d9488c33c2e6480",
        "LookupName": "DeviceType",
        "LookupValue": "Wearable",
        "StandardLookupValue": "Wearable",
        "LegacyOdataValue": "Wearable"
    },
    {
        "LookupKey": "5306f3d4e42cbc74e26482319d210bdedb37845e1fbc6ea64d84e6ef901885cb",
        "LookupName": "EventTarget",
        "LookupValue": "Agent",
        "StandardLookupValue": "Agent",
        "LegacyOdataValue": "Agent"
    },
    {
        "LookupKey": "b03d53f6caae5a92112e2ccec5e0067d546de18df2c4ab67168578b1485dde0f",
        "LookupName": "EventTarget",
        "LookupValue": "Broker",
        "StandardLookupValue": "Broker",
        "LegacyOdataValue": "Broker"
    },
    {
        "LookupKey": "a597c7bc02462d6acfc1baa1db977da78d7557e6bc701b2808d0a050cd53a402",
        "LookupName": "EventTarget",
        "LookupValue": "Digg",
        "StandardLookupValue": "Digg",
        "LegacyOdataValue": "Digg"
    },
    {
        "LookupKey": "8cc8ef1568591415da8d09f58353f6806c195dee924c954133df1e11c3868be2",
        "LookupName": "EventTarget",
        "LookupValue": "Email",
        "StandardLookupValue": "Email",
        "LegacyOdataValue": "Email"
    },
    {
        "LookupKey": "a5a312c5d94ebfcbe65ff9b79177f5ede946d966bb7c91476463122e9558ddab",
        "LookupName": "EventTarget",
        "LookupValue": "Facebook",
        "StandardLookupValue": "Facebook",
        "LegacyOdataValue": "Facebook"
    },
    {
        "LookupKey": "8887e07e66550f3baa593d1fdc568f951ec98be6010850a721d053ff75a37608",
        "LookupName": "EventTarget",
        "LookupValue": "FacebookMessenger",
        "StandardLookupValue": "FacebookMessenger",
        "LegacyOdataValue": "Facebook Messenger"
    },
    {
        "LookupKey": "9905c384c6b997a2305e721d28a53d3256a15027216736b146b76610b2116d1f",
        "LookupName": "EventTarget",
        "LookupValue": "Googleplus",
        "StandardLookupValue": "Googleplus",
        "LegacyOdataValue": "GooglePlus"
    },
    {
        "LookupKey": "41a27ace08d79e9ba488cc95e8820b621ff00eec8bf2f493fd6b777dcb218675",
        "LookupName": "EventTarget",
        "LookupValue": "Imessage",
        "StandardLookupValue": "Imessage",
        "LegacyOdataValue": "iMessage"
    },
    {
        "LookupKey": "75ad360fdbe498abe018f54c6bd2f898bb745079d3bcd6fd833d7fd4059c73d1",
        "LookupName": "EventTarget",
        "LookupValue": "Instagram",
        "StandardLookupValue": "Instagram",
        "LegacyOdataValue": "Instagram"
    },
    {
        "LookupKey": "d9e0e7fb7d5c6ca998f185fd5f127e5ee8270c2639ea19d929ca571b36485250",
        "LookupName": "EventTarget",
        "LookupValue": "Linkedin",
        "StandardLookupValue": "Linkedin",
        "LegacyOdataValue": "LinkedIn"
    },
    {
        "LookupKey": "4afd3c8925b03d5e082385f9459a2bdb7d4db89b0d81b4607fe4ae28582a90ed",
        "LookupName": "EventTarget",
        "LookupValue": "Pinterest",
        "StandardLookupValue": "Pinterest",
        "LegacyOdataValue": "Pinterest"
    },
    {
        "LookupKey": "aa3a2cba691a205a799021dbd5c5b90f6703a344b869b58bc910be59c815cd6b",
        "LookupName": "EventTarget",
        "LookupValue": "Reddit",
        "StandardLookupValue": "Reddit",
        "LegacyOdataValue": "Reddit"
    },
    {
        "LookupKey": "c5b472d0904f55cecde5bb460647e24cf91102e34638c6182ede8d8a3755d5ca",
        "LookupName": "EventTarget",
        "LookupValue": "Slack",
        "StandardLookupValue": "Slack",
        "LegacyOdataValue": "Slack"
    },
    {
        "LookupKey": "3080ca965b1cd016f3e52fd7c873780c7abb2981b7508d4902e7efa190d094a2",
        "LookupName": "EventTarget",
        "LookupValue": "Sms",
        "StandardLookupValue": "Sms",
        "LegacyOdataValue": "SMS"
    },
    {
        "LookupKey": "9e73bc96df14e7ff407440179cff6dc2f6be90b98df83453da0abd207c39870c",
        "LookupName": "EventTarget",
        "LookupValue": "Snapchat",
        "StandardLookupValue": "Snapchat",
        "LegacyOdataValue": "Snapchat"
    },
    {
        "LookupKey": "848d2c1cc99bdc89027a520ffa3e53f2d437131909aa0f105859893a94beaa4d",
        "LookupName": "EventTarget",
        "LookupValue": "Stumbleupon",
        "StandardLookupValue": "Stumbleupon",
        "LegacyOdataValue": "StumbleUpon"
    },
    {
        "LookupKey": "d58d5a4a199010b2c3397587b9bf140260afb5497ea7ab2f04732ba7032ab2ed",
        "LookupName": "EventTarget",
        "LookupValue": "Tumblr",
        "StandardLookupValue": "Tumblr",
        "LegacyOdataValue": "Tumblr"
    },
    {
        "LookupKey": "665c62e589f15c4d39ae1330415e664b073f588556160cbf21d23833aa289a17",
        "LookupName": "EventTarget",
        "LookupValue": "Twitter",
        "StandardLookupValue": "Twitter",
        "LegacyOdataValue": "Twitter"
    },
    {
        "LookupKey": "9da331296bb99193a1dde1cc289efe3b4472702f36342547b04c4adef8359f51",
        "LookupName": "EventTarget",
        "LookupValue": "Youtube",
        "StandardLookupValue": "Youtube",
        "LegacyOdataValue": "YouTube"
    },
    {
        "LookupKey": "31286360e1579b4f35c88ec559dc51584b077d05c81d9cb555eb6b00fad65aae",
        "LookupName": "EventType",
        "LookupValue": "ClickedOnEmailAddress",
        "StandardLookupValue": "ClickedOnEmailAddress",
        "LegacyOdataValue": "Clicked on Email Address"
    },
    {
        "LookupKey": "cdabed4f3a07c61d77771def89ef4d5cba762e046cf97b3d8add5c6f04b811d1",
        "LookupName": "EventType",
        "LookupValue": "ClickedOnPhoneNumber",
        "StandardLookupValue": "ClickedOnPhoneNumber",
        "LegacyOdataValue": "Clicked on Phone Number"
    },
    {
        "LookupKey": "6095e248c765c6b8414efba18ddbd1e3e4dfc74185630e7cdb26146e47c4a71c",
        "LookupName": "EventType",
        "LookupValue": "ClickToPrimaryHostedSite",
        "StandardLookupValue": "ClickToPrimaryHostedSite",
        "LegacyOdataValue": "Click to Primary Hosted Site"
    },
    {
        "LookupKey": "0b79da5413f74589addcb1c3331367a88f0c40414bfe4eb6fdfeac7a894fe850",
        "LookupName": "EventType",
        "LookupValue": "Comments",
        "StandardLookupValue": "Comments",
        "LegacyOdataValue": "Comments"
    },
    {
        "LookupKey": "9bad868ea60f6521684288695e23bdf699f5f05dbff11c078e0a80faa1e64c66",
        "LookupName": "EventType",
        "LookupValue": "DetailedView",
        "StandardLookupValue": "DetailedView",
        "LegacyOdataValue": "Detailed View"
    },
    {
        "LookupKey": "dc1dc8c37c923714be1d79ce3f7c5bf4dd1e659b80361993458628c692c19ba6",
        "LookupName": "EventType",
        "LookupValue": "Discard",
        "StandardLookupValue": "Discard",
        "LegacyOdataValue": "Discard"
    },
    {
        "LookupKey": "45a7a55c1cfb002d43c302347208a080b8e3ccaebcc49e6f1f60db084aa04dca",
        "LookupName": "EventType",
        "LookupValue": "DrivingDirections",
        "StandardLookupValue": "DrivingDirections",
        "LegacyOdataValue": "Driving Directions"
    },
    {
        "LookupKey": "aa81ae38ad926564c243d29a7ef30054c5296f18dbbb92e13dc2734c81a7aa6f",
        "LookupName": "EventType",
        "LookupValue": "ExitDetailedView",
        "StandardLookupValue": "ExitDetailedView",
        "LegacyOdataValue": "Exit Detailed View"
    },
    {
        "LookupKey": "02c8af3bd1b03f7bfda702976415135d7432e9c987c2c10e6faf60694b38dc9b",
        "LookupName": "EventType",
        "LookupValue": "Favorited",
        "StandardLookupValue": "Favorited",
        "LegacyOdataValue": "Favorited"
    },
    {
        "LookupKey": "0958c8fb086876906e721cc21ba0d118cf966ac194e3b1b0dbfe140c1fd56f23",
        "LookupName": "EventType",
        "LookupValue": "Maybe",
        "StandardLookupValue": "Maybe",
        "LegacyOdataValue": "Maybe"
    },
    {
        "LookupKey": "9490e83e3e89725d0bd89403854e41ab36f0cf4b59f068d65ec386ea9aa9b2aa",
        "LookupName": "EventType",
        "LookupValue": "NonDetailedView",
        "StandardLookupValue": "NonDetailedView",
        "LegacyOdataValue": "Non-Detailed View"
    },
    {
        "LookupKey": "0767a1d15b55e48a6e58918de34df177ad2d43648f6ebc1b4dbb3781bd77bfb6",
        "LookupName": "EventType",
        "LookupValue": "ObjectModified",
        "StandardLookupValue": "ObjectModified",
        "LegacyOdataValue": "Object Modified"
    },
    {
        "LookupKey": "341e07854daa24d27c82228236c791c7b2d8cf136673352d24caee1c27e72a41",
        "LookupName": "EventType",
        "LookupValue": "PhotoGallery",
        "StandardLookupValue": "PhotoGallery",
        "LegacyOdataValue": "Photo Gallery"
    },
    {
        "LookupKey": "e7db5766c66a9dda600e2fa42a7014e3aed51461cc56f1bb6265b53410dbcf9d",
        "LookupName": "EventType",
        "LookupValue": "Printed",
        "StandardLookupValue": "Printed",
        "LegacyOdataValue": "Printed"
    },
    {
        "LookupKey": "d6ebe85744ad85424926c8951ef386a77b1f5850992124964832eff02ddfe034",
        "LookupName": "EventType",
        "LookupValue": "PropertyVideos",
        "StandardLookupValue": "PropertyVideos",
        "LegacyOdataValue": "Property Videos"
    },
    {
        "LookupKey": "7927677756ba2f8cb13fb66017403591dc85b5e995c26ff046cf56d8add06471",
        "LookupName": "EventType",
        "LookupValue": "Search",
        "StandardLookupValue": "Search",
        "LegacyOdataValue": "Search"
    },
    {
        "LookupKey": "018affab6c24ea2a2a2c75f3d193f017a781cbd6dde26617a010ae19f28e742e",
        "LookupName": "EventType",
        "LookupValue": "Share",
        "StandardLookupValue": "Share",
        "LegacyOdataValue": "Share"
    },
    {
        "LookupKey": "ee53734309d3e3f9cc412ace677163a7549e80446338b8dd3d46274f5ef7df33",
        "LookupName": "EventType",
        "LookupValue": "SubmissionOfLeadForm",
        "StandardLookupValue": "SubmissionOfLeadForm",
        "LegacyOdataValue": "Submission of Lead Form"
    },
    {
        "LookupKey": "15471eb10a1f2314d8e43055adceeee31f238d22d142bc12c9c7e52988e5044b",
        "LookupName": "EventType",
        "LookupValue": "VirtualTour",
        "StandardLookupValue": "VirtualTour",
        "LegacyOdataValue": "Virtual Tour"
    },
    {
        "LookupKey": "6f1962fb6b6c900d66412d772957aab5082d0a3116aaa12913b2b3c17e4c4595",
        "LookupName": "ObjectIdType",
        "LookupValue": "Listingid",
        "StandardLookupValue": "Listingid",
        "LegacyOdataValue": "ListingId"
    },
    {
        "LookupKey": "840aafa95db6387567d852ba78303b69cb1273859758de5511179d9324724708",
        "LookupName": "ObjectIdType",
        "LookupValue": "Listingkey",
        "StandardLookupValue": "Listingkey",
        "LegacyOdataValue": "ListingKey"
    },
    {
        "LookupKey": "bcf867e753b4a7d61db84cc2e87ce4d96f7c99677e6c0b6956bdc86a3209585c",
        "LookupName": "ObjectIdType",
        "LookupValue": "Listingkeynumeric",
        "StandardLookupValue": "Listingkeynumeric",
        "LegacyOdataValue": "ListingKeyNumeric"
    },
    {
        "LookupKey": "237eae6a91fde8dd46e4b7d90537f7dc4c7ad9750817acef4d193f653e69e3fe",
        "LookupName": "ObjectIdType",
        "LookupValue": "Openhouseid",
        "StandardLookupValue": "Openhouseid",
        "LegacyOdataValue": "OpenHouseId"
    },
    {
        "LookupKey": "8322d938f320e46a639f89c4b4af3ec2722f0b0831b54c58f21b595e4c9b7831",
        "LookupName": "ObjectIdType",
        "LookupValue": "Openhousekey",
        "StandardLookupValue": "Openhousekey",
        "LegacyOdataValue": "OpenHouseKey"
    },
    {
        "LookupKey": "c9956ccd86390cc5c4a54ba90d5b46ef4af4ee12f46eeae56a74e3a2e279b524",
        "LookupName": "ObjectIdType",
        "LookupValue": "Openhousekeynumeric",
        "StandardLookupValue": "Openhousekeynumeric",
        "LegacyOdataValue": "OpenHouseKeyNumeric"
    },
    {
        "LookupKey": "c3caeb0744703273b8edf731cc3a71bbd184f12d9049237d4bda7f4a00aaf098",
        "LookupName": "ObjectIdType",
        "LookupValue": "Parcelnumber",
        "StandardLookupValue": "Parcelnumber",
        "LegacyOdataValue": "ParcelNumber"
    },
    {
        "LookupKey": "8f6a2d981ad0d7bdc0ac22aa01495b62b3ac95a8c575ce7168d7c17d6b8dbee8",
        "LookupName": "ObjectIdType",
        "LookupValue": "Puid",
        "StandardLookupValue": "Puid",
        "LegacyOdataValue": "PUID"
    },
    {
        "LookupKey": "b527e5cd25a5a63594f09d3dca061f803276930109d3a84f29097866cc7de1f9",
        "LookupName": "ObjectIdType",
        "LookupValue": "Savedsearchkey",
        "StandardLookupValue": "Savedsearchkey",
        "LegacyOdataValue": "SavedSearchKey"
    },
    {
        "LookupKey": "21ce0b470c9c55123bb4f4e0aebf1b63666562afac0dc532e21a353a61aee425",
        "LookupName": "ObjectIdType",
        "LookupValue": "Savedsearchkeynumeric",
        "StandardLookupValue": "Savedsearchkeynumeric",
        "LegacyOdataValue": "SavedSearchKeyNumeric"
    },
    {
        "LookupKey": "8270d46090965c06b4e68cbc63986f94b4a562feb70ca1a123564f05a45a23c3",
        "LookupName": "ObjectIdType",
        "LookupValue": "Unique",
        "StandardLookupValue": "Unique",
        "LegacyOdataValue": "Unique"
    },
    {
        "LookupKey": "929f43c842e30e46a7ad66f8a2b27df924bae775374e3cb6871510d88fea8a2a",
        "LookupName": "ObjectType",
        "LookupValue": "Document",
        "StandardLookupValue": "Document",
        "LegacyOdataValue": "Document"
    },
    {
        "LookupKey": "d2cd1bc24063a10cde5af13428737bbaf9af87bd32952e01d74d318741660389",
        "LookupName": "ObjectType",
        "LookupValue": "Listing",
        "StandardLookupValue": "Listing",
        "LegacyOdataValue": "Listing"
    },
    {
        "LookupKey": "ccef31787bd2399ef76daf37400b6bb7a256575f9a8c3d541323188b8ba06d1c",
        "LookupName": "ObjectType",
        "LookupValue": "OpenHouse",
        "StandardLookupValue": "OpenHouse",
        "LegacyOdataValue": "Open House"
    },
    {
        "LookupKey": "c839d6f3f419361307ad6f533d6a5355aa62bd779be63e5e01e0ae61fd4aea51",
        "LookupName": "ObjectType",
        "LookupValue": "Photo",
        "StandardLookupValue": "Photo",
        "LegacyOdataValue": "Photo"
    },
    {
        "LookupKey": "a99059487f7af3ac30fba771fb919c7201de42ad26dd6f0922af8ff38f275f7e",
        "LookupName": "ObjectType",
        "LookupValue": "Property",
        "StandardLookupValue": "Property",
        "LegacyOdataValue": "Property"
    },
    {
        "LookupKey": "2d0773ef492021ba165e50a80321f50e2f4eb36aad7936176255549d93ca0cd2",
        "LookupName": "ObjectType",
        "LookupValue": "SavedSearch",
        "StandardLookupValue": "SavedSearch",
        "LegacyOdataValue": "Saved Search"
    },
    {
        "LookupKey": "0f7296c902eaf06ee8db64b67d428e684b31cb09ebe1714a35147e1ff55dc7aa",
        "LookupName": "ObjectType",
        "LookupValue": "VirtualTour",
        "StandardLookupValue": "VirtualTour",
        "LegacyOdataValue": "Virtual Tour"
    },
    {
        "LookupKey": "cd218c9f29b8bc6e0852f67dbf70dfe4bc852ad9fb64cf6edcfc86ea4537f111",
        "LookupName": "SearchQueryType",
        "LookupValue": "DMQL2",
        "StandardLookupValue": "DMQL2",
        "LegacyOdataValue": "DMQL2"
    },
    {
        "LookupKey": "a6c4f0c2b7e8356b3701c39b33fd2565174683c66c4a44d621089d78b7b118d2",
        "LookupName": "SearchQueryType",
        "LookupValue": "OdataFilter",
        "StandardLookupValue": "OdataFilter",
        "LegacyOdataValue": "$filter"
    },
    {
        "LookupKey": "3a95f4b1e06c4dc0827a02d664fb0c719246cb213425dd1292e769b11d2a62e7",
        "LookupName": "Attended",
        "LookupValue": "Agent",
        "StandardLookupValue": "Agent",
        "LegacyOdataValue": "Agent"
    },
    {
        "LookupKey": "ebeaf1ae99a87819fc9f84ff863b222f88c7b85e925664a657608f26b9aab9a7",
        "LookupName": "Attended",
        "LookupValue": "Seller",
        "StandardLookupValue": "Seller",
        "LegacyOdataValue": "Seller"
    },
    {
        "LookupKey": "492e2da83f4d6c16de47f256489f33a5ab48d8573703d443afa379f41da58773",
        "LookupName": "Attended",
        "LookupValue": "Unattended",
        "StandardLookupValue": "Unattended",
        "LegacyOdataValue": "Unattended"
    },
    {
        "LookupKey": "2012552107d934f029b15f3276cc0f2a0746ac9e25ff3da10bdb2b814026155a",
        "LookupName": "OpenHouseStatus",
        "LookupValue": "Active",
        "StandardLookupValue": "Active",
        "LegacyOdataValue": "Active"
    },
    {
        "LookupKey": "0c7bff02f4206deeb0ff2fdbbd25c244e4148d028611a746b9dae989bcacd73d",
        "LookupName": "OpenHouseStatus",
        "LookupValue": "Canceled",
        "StandardLookupValue": "Canceled",
        "LegacyOdataValue": "Canceled"
    },
    {
        "LookupKey": "cede502f600ff100048e004bd1dddbb0d87551a1ead1cccbb99f27abe6e04305",
        "LookupName": "OpenHouseStatus",
        "LookupValue": "Ended",
        "StandardLookupValue": "Ended",
        "LegacyOdataValue": "Ended"
    },
    {
        "LookupKey": "2ce828f2ca11b4f682c2081bc0a767f44877d73a0f30cd93031b41037df292b9",
        "LookupName": "OpenHouseType",
        "LookupValue": "Broker",
        "StandardLookupValue": "Broker",
        "LegacyOdataValue": "Broker"
    },
    {
        "LookupKey": "f26c1468faeff510bd781002ae23854a02fc154b110ba2aad593672dcd2faea6",
        "LookupName": "OpenHouseType",
        "LookupValue": "Office",
        "StandardLookupValue": "Office",
        "LegacyOdataValue": "Office"
    },
    {
        "LookupKey": "c1ab1923963c1b7075e58d079666ade1578e1c9877af8dd5e001981e4132ed60",
        "LookupName": "OpenHouseType",
        "LookupValue": "Public",
        "StandardLookupValue": "Public",
        "LegacyOdataValue": "Public"
    },
    {
        "LookupKey": "dd3385de45f5d1649ac700d657294c36d3d7fea98b1d984f8158a8f67fd4a5d8",
        "LookupName": "DailySchedule",
        "LookupValue": "FridayAM",
        "StandardLookupValue": "FridayAM",
        "LegacyOdataValue": "Friday AM"
    },
    {
        "LookupKey": "cd3dfb1036f26289368828c3252698a95338d3d93d78cb72de65258092a396d4",
        "LookupName": "DailySchedule",
        "LookupValue": "FridayPM",
        "StandardLookupValue": "FridayPM",
        "LegacyOdataValue": "Friday PM"
    },
    {
        "LookupKey": "615ac0715543e620d71e01c3f7fa52aa4bb8eedf1549b4dc90a1bc2505277588",
        "LookupName": "DailySchedule",
        "LookupValue": "MondayAM",
        "StandardLookupValue": "MondayAM",
        "LegacyOdataValue": "Monday AM"
    },
    {
        "LookupKey": "36a7a553eb3f1442152c388d6a8a48233dfcd10b98f7b9c0eecdd1662812821c",
        "LookupName": "DailySchedule",
        "LookupValue": "MondayPM",
        "StandardLookupValue": "MondayPM",
        "LegacyOdataValue": "Monday PM"
    },
    {
        "LookupKey": "b2b777f363556be54730af4230a5614023bb075f227c77daa7b89fb5fe5e2d2c",
        "LookupName": "DailySchedule",
        "LookupValue": "None",
        "StandardLookupValue": "None",
        "LegacyOdataValue": "None"
    },
    {
        "LookupKey": "b3c366982a625622868aea58694a17722aeddd05b095222ff0f1434fe62f3a73",
        "LookupName": "DailySchedule",
        "LookupValue": "SaturdayAM",
        "StandardLookupValue": "SaturdayAM",
        "LegacyOdataValue": "Saturday AM"
    },
    {
        "LookupKey": "035200623eef838c627c414e9cf050ae6be57fd9cd727907fe8a6c4461f046f8",
        "LookupName": "DailySchedule",
        "LookupValue": "SaturdayPM",
        "StandardLookupValue": "SaturdayPM",
        "LegacyOdataValue": "Saturday PM"
    },
    {
        "LookupKey": "471f525cbc59a092074833cab289b9da78c896dc05b484b43eed2c2210ec6e36",
        "LookupName": "DailySchedule",
        "LookupValue": "SundayAM",
        "StandardLookupValue": "SundayAM",
        "LegacyOdataValue": "Sunday AM"
    },
    {
        "LookupKey": "96cf55fde0f137a5068fc28b584281189071438998cda20620f463812495ef14",
        "LookupName": "DailySchedule",
        "LookupValue": "SundayPM",
        "StandardLookupValue": "SundayPM",
        "LegacyOdataValue": "Sunday PM"
    },
    {
        "LookupKey": "bb3169754156bad438422ba30bc5e1c2886996ef8d8ebc82f9102f9ad8df4de7",
        "LookupName": "DailySchedule",
        "LookupValue": "ThursdayAM",
        "StandardLookupValue": "ThursdayAM",
        "LegacyOdataValue": "Thursday AM"
    },
    {
        "LookupKey": "9ca98e8469dfa96331f8234279418bc2393fde0f614caec714bebd3fd363dccd",
        "LookupName": "DailySchedule",
        "LookupValue": "ThursdayPM",
        "StandardLookupValue": "ThursdayPM",
        "LegacyOdataValue": "Thursday PM"
    },
    {
        "LookupKey": "9d42c463b93338f61362d22dc89c7d472267d8a497584a1c0ad61f2241b1019b",
        "LookupName": "DailySchedule",
        "LookupValue": "TuesdayAM",
        "StandardLookupValue": "TuesdayAM",
        "LegacyOdataValue": "Tuesday AM"
    },
    {
        "LookupKey": "7769d5c9377fcca2445663392f437c49307fcb98e1b1dfffff85f45f606ae075",
        "LookupName": "DailySchedule",
        "LookupValue": "TuesdayPM",
        "StandardLookupValue": "TuesdayPM",
        "LegacyOdataValue": "Tuesday PM"
    },
    {
        "LookupKey": "ae95664bc47431582491c07ba651f24d115f5e1b4e87c0b23ca303845dcc568e",
        "LookupName": "DailySchedule",
        "LookupValue": "WednesdayAM",
        "StandardLookupValue": "WednesdayAM",
        "LegacyOdataValue": "Wednesday AM"
    },
    {
        "LookupKey": "5fa5514f2453607c22288cfffe782b3e3276f151000d412ce0a60178dd212cf5",
        "LookupName": "DailySchedule",
        "LookupValue": "WednesdayPM",
        "StandardLookupValue": "WednesdayPM",
        "LegacyOdataValue": "Wednesday PM"
    },
    {
        "LookupKey": "2e2a9aa0c9f0bbaf59a09ad61deaf9109e3f16a7010c73e5336aa44d06138417",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "AgentDisabled",
        "StandardLookupValue": "AgentDisabled",
        "LegacyOdataValue": "Agent Disabled"
    },
    {
        "LookupKey": "3a3edb99576bb0e8aaae2c416ef69d4c10c9d2d2dafd6e308a1979318b872419",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "ClientDisabled",
        "StandardLookupValue": "ClientDisabled",
        "LegacyOdataValue": "Client Disabled"
    },
    {
        "LookupKey": "cc2f02292c933e4355369f945a38e2e3484e8eb788cce615d6a4af34ef45d5f4",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "ConciergeNotification",
        "StandardLookupValue": "ConciergeNotification",
        "LegacyOdataValue": "Concierge Notification"
    },
    {
        "LookupKey": "fabf8ff56c41f421107386a1309e0b06279f5151466d2d6eaffe404c44d68622",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "FinalIgnoredWarning",
        "StandardLookupValue": "FinalIgnoredWarning",
        "LegacyOdataValue": "Final Ignored Warning"
    },
    {
        "LookupKey": "ca05ab737c9afb5bbce5800aad6be80aa468511e69418ca4c4b7b00d8b91a5de",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "Ignored",
        "StandardLookupValue": "Ignored",
        "LegacyOdataValue": "Ignored"
    },
    {
        "LookupKey": "f2e373add4692147d321f4c03b244040d36dd6611d808d2100932d627dc51a4b",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "InitialIgnoredWarning",
        "StandardLookupValue": "InitialIgnoredWarning",
        "LegacyOdataValue": "Initial Ignored Warning"
    },
    {
        "LookupKey": "99e1c48a76bd0703c4fa50e6bbc3f161d7ed5e83512dbb8a662a8b4bd392a8e3",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "Invalid",
        "StandardLookupValue": "Invalid",
        "LegacyOdataValue": "Invalid"
    },
    {
        "LookupKey": "419643b59b2cb2a4c97f86809ab2e2142480c3cabb41b656aa29382a9c146f32",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "NoListingsFound",
        "StandardLookupValue": "NoListingsFound",
        "LegacyOdataValue": "No Listings Found"
    },
    {
        "LookupKey": "16b229cabd7384070f9f9291a9a000bb5bea9681a51978bbe4b0b2588dabee4a",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "NoListingsFoundWarning",
        "StandardLookupValue": "NoListingsFoundWarning",
        "LegacyOdataValue": "No Listings Found Warning"
    },
    {
        "LookupKey": "b1bd42a631cc57f08430714e3f7cc74249a5ebb0489c627e63a52e7266ce7c23",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "NoOneToSendTo",
        "StandardLookupValue": "NoOneToSendTo",
        "LegacyOdataValue": "No One To Send To"
    },
    {
        "LookupKey": "827975a12bc48e6c76c5f918eb1e3a9880f180bfe06c44776f56ff5c3a2dd01c",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "OverLimit",
        "StandardLookupValue": "OverLimit",
        "LegacyOdataValue": "Over Limit"
    },
    {
        "LookupKey": "b9ecfa5217015d6b17b0f71667ffa3469a9e0da0c6167858490cabe3dc1b080d",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "ReActivated",
        "StandardLookupValue": "ReActivated",
        "LegacyOdataValue": "Re-Activated"
    },
    {
        "LookupKey": "a2b893a02f08b94e60ca9b77e251aae0d88daab648e6a1385552dac95645ae83",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "Revised",
        "StandardLookupValue": "Revised",
        "LegacyOdataValue": "Revised"
    },
    {
        "LookupKey": "58ab3b418df58775f3555c2790b4189ec23f8902cd4aef4fd19b2ddba8b1063b",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "SearchFailing",
        "StandardLookupValue": "SearchFailing",
        "LegacyOdataValue": "Search Failing"
    },
    {
        "LookupKey": "04dc3b7654117d9e44a218cfcf755efa0ba2380b33f6f617c5ce6d0a1e957b3d",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "WelcomeEmailIgnored",
        "StandardLookupValue": "WelcomeEmailIgnored",
        "LegacyOdataValue": "Welcome Email Ignored"
    },
    {
        "LookupKey": "2c64c5ab33a2cd0083c21382ec77e42ca08aeca6e1461330d2fe9b046df9f983",
        "LookupName": "ReasonActiveOrDisabled",
        "LookupValue": "WelcomeEmailIgnoredWarning",
        "StandardLookupValue": "WelcomeEmailIgnoredWarning",
        "LegacyOdataValue": "Welcome Email Ignored Warning"
    },
    {
        "LookupKey": "0b08af978a437cad8936091ec51d670fe3599f0acd675c6b20c6e7b7d3875d77",
        "LookupName": "ScheduleType",
        "LookupValue": "ASAP",
        "StandardLookupValue": "ASAP",
        "LegacyOdataValue": "ASAP"
    },
    {
        "LookupKey": "5b0c84f55df1964cd701fe6dfca65e96ed2002bafc1cdcde5f93d6b99e3f20b5",
        "LookupName": "ScheduleType",
        "LookupValue": "Daily",
        "StandardLookupValue": "Daily",
        "LegacyOdataValue": "Daily"
    },
    {
        "LookupKey": "f312182d67444f3be243078407aa70bef309b94ce70f3b296599b6397c2c01f8",
        "LookupName": "ScheduleType",
        "LookupValue": "Monthly",
        "StandardLookupValue": "Monthly",
        "LegacyOdataValue": "Monthly"
    },
    {
        "LookupKey": "82856e3350691fbf3be472b331420b54097482f2a7a28b3d268c0ec15dd16a7d",
        "LookupName": "QueueTransactionType",
        "LookupValue": "Add",
        "StandardLookupValue": "Add",
        "LegacyOdataValue": "Add"
    },
    {
        "LookupKey": "b176fd064205a0ca6dde7d7285efd2bdab33da77caff29c5b8f298f7365d22e0",
        "LookupName": "QueueTransactionType",
        "LookupValue": "Change",
        "StandardLookupValue": "Change",
        "LegacyOdataValue": "Change"
    },
    {
        "LookupKey": "0e63cd3ebda04e094f0921bbc93a9c24748d23cb57edd6bb3ebed496958ff2ef",
        "LookupName": "QueueTransactionType",
        "LookupValue": "Delete",
        "StandardLookupValue": "Delete",
        "LegacyOdataValue": "Delete"
    },
    {
        "LookupKey": "e2e162ca01dad99497bcf454a353c006636b2dd821cc503b51eff24a59a46dbb",
        "LookupName": "RuleFormat",
        "LookupValue": "Javascript",
        "StandardLookupValue": "Javascript",
        "LegacyOdataValue": "JavaScript"
    },
    {
        "LookupKey": "8cfbeb9bd936e4649d19bec9b435836015ec22f3b30cc8c96f50f8008b59d39b",
        "LookupName": "RuleFormat",
        "LookupValue": "OdataFilter",
        "StandardLookupValue": "OdataFilter",
        "LegacyOdataValue": "$filter"
    },
    {
        "LookupKey": "b513a032158e28c5d40d72f3859cdd35f8f55b0c82ecb5f2c3e2bafa603a216b",
        "LookupName": "RuleFormat",
        "LookupValue": "REBR",
        "StandardLookupValue": "REBR",
        "LegacyOdataValue": "REBR"
    },
    {
        "LookupKey": "5c1d88d7b3707eedf234da48bce32c327889d13f14b15f61b9325d8a02e4816a",
        "LookupName": "RuleFormat",
        "LookupValue": "RetsValidation",
        "StandardLookupValue": "RetsValidation",
        "LegacyOdataValue": "RetsValidation"
    },
    {
        "LookupKey": "1efc9d78b84caccd417368797a143a219de59bf54d92ec4ccc606d5846376a98",
        "LookupName": "TeamStatus",
        "LookupValue": "Active",
        "StandardLookupValue": "Active",
        "LegacyOdataValue": "Active"
    },
    {
        "LookupKey": "afd9391113abe96767ceee868c8575234a670be7823679bcb61761c374573dda",
        "LookupName": "TeamStatus",
        "LookupValue": "Inactive",
        "StandardLookupValue": "Inactive",
        "LegacyOdataValue": "Inactive"
    },
    {
        "LookupKey": "a5882adcfa3a34d47f2d73b3b42c91f2c583bf744637fb1a4b443765cbb5b22f",
        "LookupName": "TeamMemberType",
        "LookupValue": "AdministrationAssistant",
        "StandardLookupValue": "AdministrationAssistant",
        "LegacyOdataValue": "Administration Assistant"
    },
    {
        "LookupKey": "1dcaa88e199b5df2b3728c93f8d3243a750c30084a2633540be6dd2e631b845b",
        "LookupName": "TeamMemberType",
        "LookupValue": "BuyerAgent",
        "StandardLookupValue": "BuyerAgent",
        "LegacyOdataValue": "Buyer Agent"
    },
    {
        "LookupKey": "46899a0626013ffd126b281da609e1845fd18df1bc3a846a85927e13b448738a",
        "LookupName": "TeamMemberType",
        "LookupValue": "ShowingAgent",
        "StandardLookupValue": "ShowingAgent",
        "LegacyOdataValue": "Showing Agent"
    },
    {
        "LookupKey": "95620ae698c965115f39815abf45840f7e8ccc5ce4e6159b74b874edd78c76ff",
        "LookupName": "TeamMemberType",
        "LookupValue": "LeadManager",
        "StandardLookupValue": "LeadManager",
        "LegacyOdataValue": "Lead Manager"
    },
    {
        "LookupKey": "d6e8d3ac65cee31cc36f62d94e546428e7b0fa20f25cfe2a9f2878af801998b7",
        "LookupName": "TeamMemberType",
        "LookupValue": "ListingAgent",
        "StandardLookupValue": "ListingAgent",
        "LegacyOdataValue": "Listing Agent"
    },
    {
        "LookupKey": "adfef7815c9e7049004ffd02ab5e27ae309ab1f24dcbcff16de16b3b1bfb5464",
        "LookupName": "TeamMemberType",
        "LookupValue": "MarketingAssistant",
        "StandardLookupValue": "MarketingAssistant",
        "LegacyOdataValue": "Marketing Assistant"
    },
    {
        "LookupKey": "84fb116be95fe83cb1aa41947222cbccbcd6a2f524ff5b41035e7190af7267cf",
        "LookupName": "TeamMemberType",
        "LookupValue": "OperationsManager",
        "StandardLookupValue": "OperationsManager",
        "LegacyOdataValue": "Operations Manager"
    },
    {
        "LookupKey": "94af93f56036652c0aa4f28a727d2f8a42e7eac00bfe401244dc45772535533d",
        "LookupName": "TeamMemberType",
        "LookupValue": "TeamLead",
        "StandardLookupValue": "TeamLead",
        "LegacyOdataValue": "Team Lead"
    },
    {
        "LookupKey": "2088eb9a9d062e41bf0398e2980e35a952015e23b0cd022a5f951f10c12d769c",
        "LookupName": "TeamMemberType",
        "LookupValue": "TeamMember",
        "StandardLookupValue": "TeamMember",
        "LegacyOdataValue": "Team Member"
    },
    {
        "LookupKey": "1e5947e934b4cf292c6a3d2be1cd3ef7a00d9ea580b28303d7e3e8c0e6c9579a",
        "LookupName": "TeamMemberType",
        "LookupValue": "TransactionCoordinator",
        "StandardLookupValue": "TransactionCoordinator",
        "LegacyOdataValue": "Transaction Coordinator"
    },
    {
        "LookupKey": "f1ac85cb21f1af87e062d1b63c0c90cc4e2861c6b9916a956e4bbe1d21024164",
        "LookupName": "NotedBy",
        "LookupValue": "Agent",
        "StandardLookupValue": "Agent",
        "LegacyOdataValue": "Agent"
    },
    {
        "LookupKey": "9f92e58e541d23b243cdd91c59675460ce06ce572c17c5c96b678c2dc304b85a",
        "LookupName": "NotedBy",
        "LookupValue": "Contact",
        "StandardLookupValue": "Contact",
        "LegacyOdataValue": "Contact"
    },
    {
        "LookupKey": "688d1f35f5b3ea2efc1fc8914b7e3efbe780fceadabeddfe47b4ae34332ed05a",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "Administrator",
        "StandardLookupValue": "Administrator",
        "LegacyOdataValue": "Administrator"
    },
    {
        "LookupKey": "258209361a59626f24f769d837625586ad09b8b31b78a60d594c9712fe0fdf3b",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "Assessor",
        "StandardLookupValue": "Assessor",
        "LegacyOdataValue": "Assessor"
    },
    {
        "LookupKey": "0177ae869dc274730efef16b14045a3b5c9fc2dd4b4339733d49fb8eb79dc233",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "Builder",
        "StandardLookupValue": "Builder",
        "LegacyOdataValue": "Builder"
    },
    {
        "LookupKey": "4434f69ecabe02413bed92fe62c3caf8f1f745c8489bc9b4c448783fbb568931",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "ContractorOrInstaller",
        "StandardLookupValue": "ContractorOrInstaller",
        "LegacyOdataValue": "Contractor or Installer"
    },
    {
        "LookupKey": "c9a73294871b57ccd7e8637a8623f50f8c87b0c289ceea17b2300566d20dbe07",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "Other",
        "StandardLookupValue": "Other",
        "LegacyOdataValue": "Other"
    },
    {
        "LookupKey": "ba3fe3ea4463ddd42fa739987a7054b1380716937f07253460d7927d99f09c5c",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "Owner",
        "StandardLookupValue": "Owner",
        "LegacyOdataValue": "Owner"
    },
    {
        "LookupKey": "41b5676b14ad43ef67e990366c867cdee054ec04c2030e9a92bd1e8e1d5a4484",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "ProgramSponsor",
        "StandardLookupValue": "ProgramSponsor",
        "LegacyOdataValue": "Program Sponsor"
    },
    {
        "LookupKey": "7c94ad08b6ee2ac421394a20591f699eeb6f2d06aaf4df5bea48448db402559c",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "ProgramVerifier",
        "StandardLookupValue": "ProgramVerifier",
        "LegacyOdataValue": "Program Verifier"
    },
    {
        "LookupKey": "e3b9e1ef57123a8eded0589ec51dcc20475dec0a7cab78650f8f11f298a51f8f",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "PublicRecords",
        "StandardLookupValue": "PublicRecords",
        "LegacyOdataValue": "Public Records"
    },
    {
        "LookupKey": "c3e07df04bd40e70394e33ff1778cfc14033c26461562f01110cd89d89136058",
        "LookupName": "GreenVerificationSource",
        "LookupValue": "SeeRemarks",
        "StandardLookupValue": "SeeRemarks",
        "LegacyOdataValue": "See Remarks"
    },
    {
        "LookupKey": "e9edc55cf2fea3375f4933c610f426bf608eef1a604cf7079fb8e966fc988071",
        "LookupName": "GreenVerificationStatus",
        "LookupValue": "Complete",
        "StandardLookupValue": "Complete",
        "LegacyOdataValue": "Complete"
    },
    {
        "LookupKey": "8849fc00710bc8cd02a4731873858238387dafd30b084fbe4bd4267d931bcfa3",
        "LookupName": "GreenVerificationStatus",
        "LookupValue": "InProcess",
        "StandardLookupValue": "InProcess",
        "LegacyOdataValue": "In Process"
    },
    {
        "LookupKey": "dab12c1aa41833e8dd2e9ff7863d10a6f53f9baf4e08dcf6ff1bdb6184afb480",
        "LookupName": "PowerProductionAnnualStatus",
        "LookupValue": "Actual",
        "StandardLookupValue": "Actual",
        "LegacyOdataValue": "Actual"
    },
    {
        "LookupKey": "01383a6ba5e4445b101f3e28aebed560638d3247e9e11d98966cf1f1f181f2de",
        "LookupName": "PowerProductionAnnualStatus",
        "LookupValue": "Estimated",
        "StandardLookupValue": "Estimated",
        "LegacyOdataValue": "Estimated"
    },
    {
        "LookupKey": "c30ef71eecc26f85550215f2d7226b716ab7463d5f66b94af5ec1d1533c9d3cc",
        "LookupName": "PowerProductionAnnualStatus",
        "LookupValue": "PartiallyEstimated",
        "StandardLookupValue": "PartiallyEstimated",
        "LegacyOdataValue": "Partially Estimated"
    }
]);