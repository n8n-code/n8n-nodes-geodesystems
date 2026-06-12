import type { INodeProperties } from 'n8n-workflow';

export const typeUfoSightingsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					]
				}
			},
			"options": [
				{
					"name": "Search Ufo Sightings",
					"value": "Search Ufo Sightings",
					"action": "Search API for 'Ufo Sightings' entry type",
					"description": "API to search for entries of type Ufo Sightings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/ufo_sightings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/ufo_sightings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
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
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings Datetime",
			"name": "search-db_ufo_sightings-datetime",
			"description": "Datetime",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.datetime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings City",
			"name": "search-db_ufo_sightings-city",
			"description": "City",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings State",
			"name": "search-db_ufo_sightings-state",
			"description": "State",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings Country",
			"name": "search-db_ufo_sightings-country",
			"description": "Country",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings Shape",
			"name": "search-db_ufo_sightings-shape",
			"description": "Shape",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.shape",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings Duration Seconds",
			"name": "search-db_ufo_sightings-duration_seconds",
			"description": "Duration (seconds)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.duration_seconds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings Duration Hours Min",
			"name": "search-db_ufo_sightings-duration_hours_min",
			"description": "Duration (hours/min)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.duration_hours_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings Comments",
			"name": "search-db_ufo_sightings-comments",
			"description": "Comments",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.comments",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings Date Posted",
			"name": "search-db_ufo_sightings-date_posted",
			"description": "Date Posted",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.date_posted",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings Latitude",
			"name": "search-db_ufo_sightings-latitude",
			"description": "Latitude",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
		{
			"displayName": "Search DB Ufo Sightings Longitude",
			"name": "search-db_ufo_sightings-longitude",
			"description": "Longitude",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_ufo_sightings.longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Ufo Sightings"
					],
					"operation": [
						"Search Ufo Sightings"
					]
				}
			}
		},
];
