import type { INodeProperties } from 'n8n-workflow';

export const typeGazeteerCensusTractsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					]
				}
			},
			"options": [
				{
					"name": "Search Gazeteer Census Tracts",
					"value": "Search Gazeteer Census Tracts",
					"action": "Search API for 'Census Tracts' entry type",
					"description": "API to search for entries of type Census Tracts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/gazeteer_census_tracts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/gazeteer_census_tracts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
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
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Census Tracts State",
			"name": "search-db_gazeteer_census_tracts-state",
			"description": "State",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_census_tracts.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Census Tracts State Fips",
			"name": "search-db_gazeteer_census_tracts-state_fips",
			"description": "State Fips",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_census_tracts.state_fips",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Census Tracts County Name",
			"name": "search-db_gazeteer_census_tracts-county_name",
			"description": "County Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_census_tracts.county_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Census Tracts County Fips",
			"name": "search-db_gazeteer_census_tracts-county_fips",
			"description": "County Fips",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_census_tracts.county_fips",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Census Tracts Census Tract ID",
			"name": "search-db_gazeteer_census_tracts-census_tract_id",
			"description": "Census Tract Id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_census_tracts.census_tract_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Census Tracts Full Census Tract ID",
			"name": "search-db_gazeteer_census_tracts-full_census_tract_id",
			"description": "Full Census Tract Id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_census_tracts.full_census_tract_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Census Tracts Land Area",
			"name": "search-db_gazeteer_census_tracts-land_area",
			"description": "Land Area",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_census_tracts.land_area",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Census Tracts Water Area",
			"name": "search-db_gazeteer_census_tracts-water_area",
			"description": "Water Area",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_census_tracts.water_area",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Census Tracts Location",
			"name": "search-db_gazeteer_census_tracts-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_census_tracts.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Census Tracts"
					],
					"operation": [
						"Search Gazeteer Census Tracts"
					]
				}
			}
		},
];
