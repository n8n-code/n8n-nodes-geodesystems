import type { INodeProperties } from 'n8n-workflow';

export const typeEarthSatelliteLandsatDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Earth Satellite Landsat"
					]
				}
			},
			"options": [
				{
					"name": "Search Earth Satellite Landsat",
					"value": "Search Earth Satellite Landsat",
					"action": "Search API for 'Landsat Satellite Data' entry type",
					"description": "API to search for entries of type Landsat Satellite Data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/earth_satellite_landsat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/earth_satellite_landsat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
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
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
					]
				}
			}
		},
		{
			"displayName": "Search Earth Satellite Landsat Sensor",
			"name": "search-earth_satellite_landsat-sensor",
			"description": "Sensor",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.earth_satellite_landsat.sensor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
					]
				}
			}
		},
		{
			"displayName": "Search Earth Satellite Landsat Satellite",
			"name": "search-earth_satellite_landsat-satellite",
			"description": "Satellite",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.earth_satellite_landsat.satellite",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
					]
				}
			}
		},
		{
			"displayName": "Search Earth Satellite Landsat Wrs Path Number",
			"name": "search-earth_satellite_landsat-wrs_path_number",
			"description": "WRS Path",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.earth_satellite_landsat.wrs_path_number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
					]
				}
			}
		},
		{
			"displayName": "Search Earth Satellite Landsat Wrs Row Number",
			"name": "search-earth_satellite_landsat-wrs_row_number",
			"description": "WRS Row",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.earth_satellite_landsat.wrs_row_number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
					]
				}
			}
		},
		{
			"displayName": "Search Earth Satellite Landsat Ground Station",
			"name": "search-earth_satellite_landsat-ground_station",
			"description": "Ground Station",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.earth_satellite_landsat.ground_station",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
					]
				}
			}
		},
		{
			"displayName": "Search Earth Satellite Landsat Archive Version Number",
			"name": "search-earth_satellite_landsat-archive_version_number",
			"description": "Archive Version Number",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.earth_satellite_landsat.archive_version_number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Earth Satellite Landsat"
					],
					"operation": [
						"Search Earth Satellite Landsat"
					]
				}
			}
		},
];
