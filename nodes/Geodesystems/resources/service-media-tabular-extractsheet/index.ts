import type { INodeProperties } from 'n8n-workflow';

export const serviceMediaTabularExtractsheetDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Service Media Tabular Extractsheet"
					]
				}
			},
			"options": [
				{
					"name": "Media Tabular Extractsheet",
					"value": "Media Tabular Extractsheet",
					"action": "API for Extract sheets",
					"description": "API to call: Extract sheets",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/entry/show"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/entry/show",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Media Tabular Extractsheet"
					],
					"operation": [
						"Media Tabular Extractsheet"
					]
				}
			}
		},
		{
			"displayName": "Output",
			"name": "output",
			"required": true,
			"description": "Output type  -don't change",
			"default": "media_tabular_extractsheet",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "output",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Media Tabular Extractsheet"
					],
					"operation": [
						"Media Tabular Extractsheet"
					]
				}
			}
		},
		{
			"displayName": "Entryid",
			"name": "entryid",
			"required": true,
			"description": "Entry ID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "entryid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Media Tabular Extractsheet"
					],
					"operation": [
						"Media Tabular Extractsheet"
					]
				}
			}
		},
		{
			"displayName": "Arg 1",
			"name": "arg1",
			"description": "Sheets",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "arg1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Media Tabular Extractsheet"
					],
					"operation": [
						"Media Tabular Extractsheet"
					]
				}
			}
		},
];
