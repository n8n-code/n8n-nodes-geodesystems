import type { INodeProperties } from 'n8n-workflow';

export const typeTypePointNoaaCarbonDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Noaa Carbon"
					]
				}
			},
			"options": [
				{
					"name": "Search Type Point Noaa Carbon",
					"value": "Search Type Point Noaa Carbon",
					"action": "Search API for 'NOAA Carbon Measurements' entry type",
					"description": "API to search for entries of type NOAA Carbon Measurements",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/type_point_noaa_carbon"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/type_point_noaa_carbon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
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
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Noaa Carbon Site ID",
			"name": "search-type_point_noaa_carbon-site_id",
			"description": "Site ID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_noaa_carbon.site_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Noaa Carbon Parameter",
			"name": "search-type_point_noaa_carbon-parameter",
			"description": "Parameter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_noaa_carbon.parameter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Noaa Carbon Project",
			"name": "search-type_point_noaa_carbon-project",
			"description": "Project",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_noaa_carbon.project",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Noaa Carbon Lab ID Number",
			"name": "search-type_point_noaa_carbon-lab_id_number",
			"description": "Lab ID Number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_noaa_carbon.lab_id_number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
					]
				}
			}
		},
		{
			"displayName": "Search Type Point Noaa Carbon Measurement Group",
			"name": "search-type_point_noaa_carbon-measurement_group",
			"description": "Measurement Group",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_point_noaa_carbon.measurement_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Point Noaa Carbon"
					],
					"operation": [
						"Search Type Point Noaa Carbon"
					]
				}
			}
		},
];
