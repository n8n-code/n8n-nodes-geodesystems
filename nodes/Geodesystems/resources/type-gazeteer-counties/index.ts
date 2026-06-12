import type { INodeProperties } from 'n8n-workflow';

export const typeGazeteerCountiesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					]
				}
			},
			"options": [
				{
					"name": "Search Gazeteer Counties",
					"value": "Search Gazeteer Counties",
					"action": "Search API for 'Census Gazeteer Counties' entry type",
					"description": "API to search for entries of type Census Gazeteer Counties",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/gazeteer_counties"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/gazeteer_counties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
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
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Counties State Abbreviation",
			"name": "search-db_gazeteer_counties-state_abbreviation",
			"description": "State Abbreviation",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_counties.state_abbreviation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Counties State Fips",
			"name": "search-db_gazeteer_counties-state_fips",
			"description": "State Fips",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_counties.state_fips",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Counties County Fips",
			"name": "search-db_gazeteer_counties-county_fips",
			"description": "County Fips",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_counties.county_fips",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Counties Full County Fips",
			"name": "search-db_gazeteer_counties-full_county_fips",
			"description": "Full County Fips",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_counties.full_county_fips",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Counties County Name",
			"name": "search-db_gazeteer_counties-county_name",
			"description": "County Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_counties.county_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Counties Area Land",
			"name": "search-db_gazeteer_counties-area_land",
			"description": "Area Land",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_counties.area_land",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Counties Area Water",
			"name": "search-db_gazeteer_counties-area_water",
			"description": "Area Water",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_counties.area_water",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
					]
				}
			}
		},
		{
			"displayName": "Search DB Gazeteer Counties Location",
			"name": "search-db_gazeteer_counties-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_gazeteer_counties.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Gazeteer Counties"
					],
					"operation": [
						"Search Gazeteer Counties"
					]
				}
			}
		},
];
