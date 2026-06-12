import type { INodeProperties } from 'n8n-workflow';

export const typeTypeMetametaDictionaryDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					]
				}
			},
			"options": [
				{
					"name": "Search Type Metameta Dictionary",
					"value": "Search Type Metameta Dictionary",
					"action": "Search API for 'Metadata Dictionary' entry type",
					"description": "API to search for entries of type Metadata Dictionary",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/type_metameta_dictionary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/type_metameta_dictionary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
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
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
					]
				}
			}
		},
		{
			"displayName": "Search Type Metameta Dictionary Field Index",
			"name": "search-type_metameta_dictionary-field_index",
			"description": "Index",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_metameta_dictionary.field_index",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
					]
				}
			}
		},
		{
			"displayName": "Search Type Metameta Dictionary Dictionary Type",
			"name": "search-type_metameta_dictionary-dictionary_type",
			"description": "Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_metameta_dictionary.dictionary_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
					]
				}
			}
		},
		{
			"displayName": "Search Type Metameta Dictionary Short Name",
			"name": "search-type_metameta_dictionary-short_name",
			"description": "Short Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_metameta_dictionary.short_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
					]
				}
			}
		},
		{
			"displayName": "Search Type Metameta Dictionary Super Type",
			"name": "search-type_metameta_dictionary-super_type",
			"description": "Super Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_metameta_dictionary.super_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
					]
				}
			}
		},
		{
			"displayName": "Search Type Metameta Dictionary Isgroup",
			"name": "search-type_metameta_dictionary-isgroup",
			"description": "Is Group",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_metameta_dictionary.isgroup",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
					]
				}
			}
		},
		{
			"displayName": "Search Type Metameta Dictionary Handler Class",
			"name": "search-type_metameta_dictionary-handler_class",
			"description": "Handler Class",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_metameta_dictionary.handler_class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
					]
				}
			}
		},
		{
			"displayName": "Search Type Metameta Dictionary Properties",
			"name": "search-type_metameta_dictionary-properties",
			"description": "Properties",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_metameta_dictionary.properties",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
					]
				}
			}
		},
		{
			"displayName": "Search Type Metameta Dictionary Wiki Text",
			"name": "search-type_metameta_dictionary-wiki_text",
			"description": "Wiki Text",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.type_metameta_dictionary.wiki_text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Type Metameta Dictionary"
					],
					"operation": [
						"Search Type Metameta Dictionary"
					]
				}
			}
		},
];
