import type { INodeProperties } from 'n8n-workflow';

export const typePropertydbDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					]
				}
			},
			"options": [
				{
					"name": "Search Propertydb",
					"value": "Search Propertydb",
					"action": "Search API for 'Property Database' entry type",
					"description": "API to search for entries of type Property Database",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/propertydb"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/propertydb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
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
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb Property ID",
			"name": "search-db_propertydb-property_id",
			"description": "Property ID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.property_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb Owner",
			"name": "search-db_propertydb-owner",
			"description": "Owner",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb Address",
			"name": "search-db_propertydb-address",
			"description": "Address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb City",
			"name": "search-db_propertydb-city",
			"description": "City",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb State",
			"name": "search-db_propertydb-state",
			"description": "State",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb Value",
			"name": "search-db_propertydb-value",
			"description": "Property Value",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.value",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb Building Type",
			"name": "search-db_propertydb-building_type",
			"description": "Building Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.building_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb House Size",
			"name": "search-db_propertydb-house_size",
			"description": "Building Sq Ft",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.house_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb Lot Sqft",
			"name": "search-db_propertydb-lot_sqft",
			"description": "Lot Size Sq Ft",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.lot_sqft",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb Lot Acres",
			"name": "search-db_propertydb-lot_acres",
			"description": "Lot Size Acres",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.lot_acres",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb Price Sqft",
			"name": "search-db_propertydb-price_sqft",
			"description": "$-sqft",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.price_sqft",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
		{
			"displayName": "Search DB Propertydb Location",
			"name": "search-db_propertydb-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_propertydb.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Propertydb"
					],
					"operation": [
						"Search Propertydb"
					]
				}
			}
		},
];
