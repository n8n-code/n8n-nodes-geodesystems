import type { INodeProperties } from 'n8n-workflow';

export const typeTypeNcssDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Ncss"
					]
				}
			},
			"options": [
				{
					"name": "Search Type Ncss",
					"value": "Search Type Ncss",
					"action": "Search API for 'NetCDF Point Subset' entry type",
					"description": "API to search for entries of type NetCDF Point Subset",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/type_ncss"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/type_ncss",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
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
						"Type Type Ncss"
					],
					"operation": [
						"Search Type Ncss"
					]
				}
			}
		},
];
