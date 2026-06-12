import type { INodeProperties } from 'n8n-workflow';

export const typeBostonCrimeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					]
				}
			},
			"options": [
				{
					"name": "Search Boston Crime",
					"value": "Search Boston Crime",
					"action": "Search API for 'Boston Crime' entry type",
					"description": "API to search for entries of type Boston Crime",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/boston_crime"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/boston_crime",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
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
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Offense",
			"name": "search-db_boston_crime-offense",
			"description": "Offense",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.offense",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Offense Code Group",
			"name": "search-db_boston_crime-offense_code_group",
			"description": "Offense Code Group",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.offense_code_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Offense Description",
			"name": "search-db_boston_crime-offense_description",
			"description": "Offense Description",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.offense_description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime District",
			"name": "search-db_boston_crime-district",
			"description": "District",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.district",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Reporting Area",
			"name": "search-db_boston_crime-reporting_area",
			"description": "Reporting Area",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.reporting_area",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Shooting",
			"name": "search-db_boston_crime-shooting",
			"description": "Shooting",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.shooting",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Year",
			"name": "search-db_boston_crime-year",
			"description": "Year",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.year",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Month",
			"name": "search-db_boston_crime-month",
			"description": "Month",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.month",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Day Of Week",
			"name": "search-db_boston_crime-day_of_week",
			"description": "Day Of Week",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.day_of_week",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Hour",
			"name": "search-db_boston_crime-hour",
			"description": "Hour",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.hour",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Street",
			"name": "search-db_boston_crime-street",
			"description": "Street",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.street",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boston Crime Location",
			"name": "search-db_boston_crime-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boston_crime.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boston Crime"
					],
					"operation": [
						"Search Boston Crime"
					]
				}
			}
		},
];
