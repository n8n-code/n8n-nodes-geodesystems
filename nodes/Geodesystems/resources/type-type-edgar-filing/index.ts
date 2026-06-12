import type { INodeProperties } from 'n8n-workflow';

export const typeTypeEdgarFilingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Edgar Filing"
					]
				}
			},
			"options": [
				{
					"name": "Search Type Edgar Filing",
					"value": "Search Type Edgar Filing",
					"action": "Search API for 'SEC EDGAR Filing' entry type",
					"description": "API to search for entries of type SEC EDGAR Filing",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/type_edgar_filing"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/type_edgar_filing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
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
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
					]
				}
			}
		},
		{
			"displayName": "Search Type Edgar Filing Form Type",
			"name": "search-type_edgar_filing-form_type",
			"description": "Form Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_edgar_filing.form_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
					]
				}
			}
		},
		{
			"displayName": "Search Type Edgar Filing Company Name",
			"name": "search-type_edgar_filing-company_name",
			"description": "Company Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_edgar_filing.company_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
					]
				}
			}
		},
		{
			"displayName": "Search Type Edgar Filing Cik Number",
			"name": "search-type_edgar_filing-cik_number",
			"description": "CIK Number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_edgar_filing.cik_number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
					]
				}
			}
		},
		{
			"displayName": "Search Type Edgar Filing Standard Industrial Classification",
			"name": "search-type_edgar_filing-standard_industrial_classification",
			"description": "Standard Industrial Classification",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_edgar_filing.standard_industrial_classification",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
					]
				}
			}
		},
		{
			"displayName": "Search Type Edgar Filing Irs Number",
			"name": "search-type_edgar_filing-irs_number",
			"description": "IRS Number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_edgar_filing.irs_number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
					]
				}
			}
		},
		{
			"displayName": "Search Type Edgar Filing State",
			"name": "search-type_edgar_filing-state",
			"description": "State of Incorporation",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_edgar_filing.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Edgar Filing"
					],
					"operation": [
						"Search Type Edgar Filing"
					]
				}
			}
		},
];
