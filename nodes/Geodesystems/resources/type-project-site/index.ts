import type { INodeProperties } from 'n8n-workflow';

export const typeProjectSiteDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Site"
					]
				}
			},
			"options": [
				{
					"name": "Search Project Site",
					"value": "Search Project Site",
					"action": "Search API for 'Site' entry type",
					"description": "API to search for entries of type Site",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/project_site"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/project_site",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
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
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
					]
				}
			}
		},
		{
			"displayName": "Search Project Site Short Name",
			"name": "search-project_site-short_name",
			"description": "Short Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_site.short_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
					]
				}
			}
		},
		{
			"displayName": "Search Project Site Site Type",
			"name": "search-project_site-site_type",
			"description": "Site Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_site.site_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
					]
				}
			}
		},
		{
			"displayName": "Search Project Site Status",
			"name": "search-project_site-status",
			"description": "Status",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_site.status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
					]
				}
			}
		},
		{
			"displayName": "Search Project Site Network",
			"name": "search-project_site-network",
			"description": "Network",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_site.network",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
					]
				}
			}
		},
		{
			"displayName": "Search Project Site Country",
			"name": "search-project_site-country",
			"description": "Country",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_site.country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
					]
				}
			}
		},
		{
			"displayName": "Search Project Site State",
			"name": "search-project_site-state",
			"description": "State/Province",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_site.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
					]
				}
			}
		},
		{
			"displayName": "Search Project Site County",
			"name": "search-project_site-county",
			"description": "County",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.project_site.county",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Project Site"
					],
					"operation": [
						"Search Project Site"
					]
				}
			}
		},
];
