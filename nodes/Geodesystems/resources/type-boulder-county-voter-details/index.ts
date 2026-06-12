import type { INodeProperties } from 'n8n-workflow';

export const typeBoulderCountyVoterDetailsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					]
				}
			},
			"options": [
				{
					"name": "Search Boulder County Voter Details",
					"value": "Search Boulder County Voter Details",
					"action": "Search API for 'Boulder County Voter Details' entry type",
					"description": "API to search for entries of type Boulder County Voter Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/boulder_county_voter_details"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/boulder_county_voter_details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"description": "Search text",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Search name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"description": "Search description",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Fromdate",
			"name": "fromdate",
			"description": "From date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromdate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Todate",
			"name": "todate",
			"description": "To date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "todate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Createdate From",
			"name": "createdate-from",
			"description": "Archive create date from",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdate.from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Createdate To",
			"name": "createdate-to",
			"description": "Archive create date to",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdate.to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Changedate From",
			"name": "changedate-from",
			"description": "Archive change date from",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changedate.from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Changedate To",
			"name": "changedate-to",
			"description": "Archive change date to",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changedate.to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"description": "Parent entry",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Filesuffix",
			"name": "filesuffix",
			"description": "File suffix",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filesuffix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Maxlatitude",
			"name": "maxlatitude",
			"description": "Northern bounds of search",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxlatitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Minlongitude",
			"name": "minlongitude",
			"description": "Western bounds of search",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "minlongitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Minlatitude",
			"name": "minlatitude",
			"description": "Southern bounds of search",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "minlatitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Maxlongitude",
			"name": "maxlongitude",
			"description": "Eastern bounds of search",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxlongitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Max",
			"name": "max",
			"description": "Max number of results",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "Number to skip",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details First Name",
			"name": "search-db_boulder_county_voter_details-first_name",
			"description": "First Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.first_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Last Name",
			"name": "search-db_boulder_county_voter_details-last_name",
			"description": "Last Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.last_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Registration Date",
			"name": "search-db_boulder_county_voter_details-registration_date",
			"description": "Registration Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.registration_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Last Updated Date",
			"name": "search-db_boulder_county_voter_details-last_updated_date",
			"description": "Last Updated Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.last_updated_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Residential Address",
			"name": "search-db_boulder_county_voter_details-residential_address",
			"description": "Residential Address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.residential_address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Residential City",
			"name": "search-db_boulder_county_voter_details-residential_city",
			"description": "Residential City",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.residential_city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Mailing Zip Code",
			"name": "search-db_boulder_county_voter_details-mailing_zip_code",
			"description": "Mailing Zip Code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.mailing_zip_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Voter Status",
			"name": "search-db_boulder_county_voter_details-voter_status",
			"description": "Voter Status",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.voter_status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Party",
			"name": "search-db_boulder_county_voter_details-party",
			"description": "Party",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.party",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Gender",
			"name": "search-db_boulder_county_voter_details-gender",
			"description": "Gender",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.gender",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Birth Year",
			"name": "search-db_boulder_county_voter_details-birth_year",
			"description": "Birth Year",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.birth_year",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Precinct Code",
			"name": "search-db_boulder_county_voter_details-precinct_code",
			"description": "Precinct Code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.precinct_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Congressional",
			"name": "search-db_boulder_county_voter_details-congressional",
			"description": "Congressional",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.congressional",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details State Senate",
			"name": "search-db_boulder_county_voter_details-state_senate",
			"description": "State Senate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.state_senate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details State House",
			"name": "search-db_boulder_county_voter_details-state_house",
			"description": "State House",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.state_house",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Municipality",
			"name": "search-db_boulder_county_voter_details-municipality",
			"description": "Municipality",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.municipality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details City Ward District",
			"name": "search-db_boulder_county_voter_details-city_ward_district",
			"description": "City Ward/district",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.city_ward_district",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details School District",
			"name": "search-db_boulder_county_voter_details-school_district",
			"description": "School District",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.school_district",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder County Voter Details Location",
			"name": "search-db_boulder_county_voter_details-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_county_voter_details.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder County Voter Details"
					],
					"operation": [
						"Search Boulder County Voter Details"
					]
				}
			}
		},
];
