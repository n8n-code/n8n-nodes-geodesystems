import type { INodeProperties } from 'n8n-workflow';

export const typeProjectSoftwarepackageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Softwarepackage"
					]
				}
			},
			"options": [
				{
					"name": "Search Project Softwarepackage",
					"value": "Search Project Softwarepackage",
					"action": "Search API for 'Software Tool' entry type",
					"description": "API to search for entries of type Software Tool",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/project_softwarepackage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/project_softwarepackage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
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
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
					]
				}
			}
		},
		{
			"displayName": "Search Project Softwarepackage Software Use",
			"name": "search-project_softwarepackage-software_use",
			"description": "Software Use",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_softwarepackage.software_use",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
					]
				}
			}
		},
		{
			"displayName": "Search Project Softwarepackage Software Type",
			"name": "search-project_softwarepackage-software_type",
			"description": "Software Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_softwarepackage.software_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
					]
				}
			}
		},
		{
			"displayName": "Search Project Softwarepackage Domain",
			"name": "search-project_softwarepackage-domain",
			"description": "Science Domain",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_softwarepackage.domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
					]
				}
			}
		},
		{
			"displayName": "Search Project Softwarepackage Platform",
			"name": "search-project_softwarepackage-platform",
			"description": "Platform",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_softwarepackage.platform",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
					]
				}
			}
		},
		{
			"displayName": "Search Project Softwarepackage License",
			"name": "search-project_softwarepackage-license",
			"description": "License",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_softwarepackage.license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
					]
				}
			}
		},
		{
			"displayName": "Search Project Softwarepackage Status",
			"name": "search-project_softwarepackage-status",
			"description": "Development Status",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_softwarepackage.status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
					]
				}
			}
		},
		{
			"displayName": "Search Project Softwarepackage Capabilities",
			"name": "search-project_softwarepackage-capabilities",
			"description": "Capabilities",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_softwarepackage.capabilities",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Softwarepackage"
					],
					"operation": [
						"Search Project Softwarepackage"
					]
				}
			}
		},
];
