import type { INodeProperties } from 'n8n-workflow';

export const typeTypePointAmrcFreewaveDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Amrc Freewave"
					]
				}
			},
			"options": [
				{
					"name": "Search Type Point Amrc Freewave",
					"value": "Search Type Point Amrc Freewave",
					"action": "Search API for 'AMRC Freewave  Data' entry type",
					"description": "API to search for entries of type AMRC Freewave  Data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/type_point_amrc_freewave"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/type_point_amrc_freewave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
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
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Amrc Freewave Station Name",
			"name": "search-type_point_amrc_freewave-station_name",
			"description": "Station Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_amrc_freewave.station_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Amrc Freewave Format",
			"name": "search-type_point_amrc_freewave-format",
			"description": "File Format",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_amrc_freewave.format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Amrc Freewave Datalogger Model",
			"name": "search-type_point_amrc_freewave-datalogger_model",
			"description": "Data Logger Model",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_amrc_freewave.datalogger_model",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Amrc Freewave Datalogger Serial",
			"name": "search-type_point_amrc_freewave-datalogger_serial",
			"description": "Data Logger Serial",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_amrc_freewave.datalogger_serial",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Amrc Freewave"
					],
					"operation": [
						"Search Type Point Amrc Freewave"
					]
				}
			}
		},
];
