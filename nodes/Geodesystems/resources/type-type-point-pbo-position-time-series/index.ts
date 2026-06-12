import type { INodeProperties } from 'n8n-workflow';

export const typeTypePointPboPositionTimeSeriesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Pbo Position Time Series"
					]
				}
			},
			"options": [
				{
					"name": "Search Type Point Pbo Position Time Series",
					"value": "Search Type Point Pbo Position Time Series",
					"action": "Search API for 'PBO Position Time Series' entry type",
					"description": "API to search for entries of type PBO Position Time Series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/type_point_pbo_position_time_series"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/type_point_pbo_position_time_series",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
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
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Pbo Position Time Series Four Char ID",
			"name": "search-type_point_pbo_position_time_series-four_char_id",
			"description": "Four Char ID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_pbo_position_time_series.four_char_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Pbo Position Time Series Station Name",
			"name": "search-type_point_pbo_position_time_series-station_name",
			"description": "Station Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_pbo_position_time_series.station_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Pbo Position Time Series Reference Frame",
			"name": "search-type_point_pbo_position_time_series-reference_frame",
			"description": "Reference Frame",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_pbo_position_time_series.reference_frame",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Pbo Position Time Series Format Version",
			"name": "search-type_point_pbo_position_time_series-format_version",
			"description": "Format Version",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_pbo_position_time_series.format_version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Pbo Position Time Series Processing Center",
			"name": "search-type_point_pbo_position_time_series-processing_center",
			"description": "Processing Center",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_pbo_position_time_series.processing_center",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Pbo Position Time Series"
					],
					"operation": [
						"Search Type Point Pbo Position Time Series"
					]
				}
			}
		},
];
