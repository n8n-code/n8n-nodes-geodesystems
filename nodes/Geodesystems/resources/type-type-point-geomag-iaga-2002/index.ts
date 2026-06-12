import type { INodeProperties } from 'n8n-workflow';

export const typeTypePointGeomagIaga2002Description: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Geomag Iaga 2002"
					]
				}
			},
			"options": [
				{
					"name": "Search Type Point Geomag Iaga 2002",
					"value": "Search Type Point Geomag Iaga 2002",
					"action": "Search API for 'IAGA 2002 Geomagnetism Data' entry type",
					"description": "API to search for entries of type IAGA 2002 Geomagnetism Data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/type_point_geomag_iaga2002"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/type_point_geomag_iaga2002",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
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
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Geomag Iaga 2002 Iaga Code",
			"name": "search-type_point_geomag_iaga2002-iaga_code",
			"description": "IAGA Code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_geomag_iaga2002.iaga_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Geomag Iaga 2002 Station Name",
			"name": "search-type_point_geomag_iaga2002-station_name",
			"description": "Station Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_geomag_iaga2002.station_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Geomag Iaga 2002 Source Of Data",
			"name": "search-type_point_geomag_iaga2002-source_of_data",
			"description": "Source of data",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_geomag_iaga2002.source_of_data",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Geomag Iaga 2002 Digital Sampling",
			"name": "search-type_point_geomag_iaga2002-digital_sampling",
			"description": "Digital Sampling",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_geomag_iaga2002.digital_sampling",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Geomag Iaga 2002 Data Interval",
			"name": "search-type_point_geomag_iaga2002-data_interval",
			"description": "Data Interval",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_geomag_iaga2002.data_interval",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Geomag Iaga 2002 Data Type",
			"name": "search-type_point_geomag_iaga2002-data_type",
			"description": "Data Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_geomag_iaga2002.data_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Geomag Iaga 2002"
					],
					"operation": [
						"Search Type Point Geomag Iaga 2002"
					]
				}
			}
		},
];
