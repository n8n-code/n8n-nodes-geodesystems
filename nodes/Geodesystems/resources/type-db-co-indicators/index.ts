import type { INodeProperties } from 'n8n-workflow';

export const typeDbCoIndicatorsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type DB Co Indicators"
					]
				}
			},
			"options": [
				{
					"name": "Search DB Co Indicators",
					"value": "Search DB Co Indicators",
					"action": "Search API for 'Colorado Health Indicators' entry type",
					"description": "API to search for entries of type Colorado Health Indicators",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/db_co_indicators"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/db_co_indicators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
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
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
					]
				}
			}
		},
		{
			"displayName": "Search DB DB Co Indicators Geo Name",
			"name": "search-db_db_co_indicators-geo_name",
			"description": "County",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_db_co_indicators.geo_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
					]
				}
			}
		},
		{
			"displayName": "Search DB DB Co Indicators Domain",
			"name": "search-db_db_co_indicators-domain",
			"description": "Domain",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_db_co_indicators.domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
					]
				}
			}
		},
		{
			"displayName": "Search DB DB Co Indicators Subdomain",
			"name": "search-db_db_co_indicators-subdomain",
			"description": "Subdomain",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_db_co_indicators.subdomain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
					]
				}
			}
		},
		{
			"displayName": "Search DB DB Co Indicators Indicator Name",
			"name": "search-db_db_co_indicators-indicatorName",
			"description": "Indicator",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_db_co_indicators.indicatorName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
					]
				}
			}
		},
		{
			"displayName": "Search DB DB Co Indicators Description",
			"name": "search-db_db_co_indicators-description",
			"description": "Description",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_db_co_indicators.description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
					]
				}
			}
		},
		{
			"displayName": "Search DB DB Co Indicators Measure",
			"name": "search-db_db_co_indicators-measure",
			"description": "Measure",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_db_co_indicators.measure",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
					]
				}
			}
		},
		{
			"displayName": "Search DB DB Co Indicators Location",
			"name": "search-db_db_co_indicators-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_db_co_indicators.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type DB Co Indicators"
					],
					"operation": [
						"Search DB Co Indicators"
					]
				}
			}
		},
];
