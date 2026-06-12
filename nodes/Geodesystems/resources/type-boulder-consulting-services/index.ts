import type { INodeProperties } from 'n8n-workflow';

export const typeBoulderConsultingServicesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					]
				}
			},
			"options": [
				{
					"name": "Search Boulder Consulting Services",
					"value": "Search Boulder Consulting Services",
					"action": "Search API for 'Boulder Consulting Services Database' entry type",
					"description": "API to search for entries of type Boulder Consulting Services Database",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/boulder_consulting_services"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/boulder_consulting_services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
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
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Fund",
			"name": "search-db_boulder_consulting_services-fund",
			"description": "Fund",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.fund",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Department",
			"name": "search-db_boulder_consulting_services-department",
			"description": "Department",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.department",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Organization",
			"name": "search-db_boulder_consulting_services-organization",
			"description": "Organization",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.organization",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Object",
			"name": "search-db_boulder_consulting_services-object",
			"description": "Object",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.object",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Project",
			"name": "search-db_boulder_consulting_services-project",
			"description": "Project",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.project",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Account Description",
			"name": "search-db_boulder_consulting_services-account_description",
			"description": "Account Description",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.account_description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Date",
			"name": "search-db_boulder_consulting_services-date",
			"description": "Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Amount",
			"name": "search-db_boulder_consulting_services-amount",
			"description": "Amount",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Purchase Order",
			"name": "search-db_boulder_consulting_services-purchase_order",
			"description": "Purchase Order",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.purchase_order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Vendor Name",
			"name": "search-db_boulder_consulting_services-vendor_name",
			"description": "Vendor Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.vendor_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Consulting Services Comment",
			"name": "search-db_boulder_consulting_services-comment",
			"description": "Comment",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_consulting_services.comment",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Consulting Services"
					],
					"operation": [
						"Search Boulder Consulting Services"
					]
				}
			}
		},
];
