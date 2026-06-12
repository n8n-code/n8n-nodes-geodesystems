import type { INodeProperties } from 'n8n-workflow';

export const typeCampaignExpendituresDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					]
				}
			},
			"options": [
				{
					"name": "Search Campaign Expenditures",
					"value": "Search Campaign Expenditures",
					"action": "Search API for 'Campaign Expenditures' entry type",
					"description": "API to search for entries of type Campaign Expenditures",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/campaign_expenditures"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/campaign_expenditures",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
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
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures Committee",
			"name": "search-db_campaign_expenditures-committee",
			"description": "Committee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.committee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures Amount",
			"name": "search-db_campaign_expenditures-amount",
			"description": "Amount",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures Party",
			"name": "search-db_campaign_expenditures-party",
			"description": "Party",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.party",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures Recipient",
			"name": "search-db_campaign_expenditures-recipient",
			"description": "Recipient",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.recipient",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures City",
			"name": "search-db_campaign_expenditures-city",
			"description": "City",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures State",
			"name": "search-db_campaign_expenditures-state",
			"description": "State",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures Zip Code",
			"name": "search-db_campaign_expenditures-zip_code",
			"description": "Zip Code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.zip_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures Transaction Date",
			"name": "search-db_campaign_expenditures-transaction_date",
			"description": "Transaction Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.transaction_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures Purpose",
			"name": "search-db_campaign_expenditures-purpose",
			"description": "Purpose",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.purpose",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures Memo Text",
			"name": "search-db_campaign_expenditures-memo_text",
			"description": "Memo Text",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.memo_text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Expenditures Location",
			"name": "search-db_campaign_expenditures-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_expenditures.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Expenditures"
					],
					"operation": [
						"Search Campaign Expenditures"
					]
				}
			}
		},
];
