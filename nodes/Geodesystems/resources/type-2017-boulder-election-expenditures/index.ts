import type { INodeProperties } from 'n8n-workflow';

export const type2017BoulderElectionExpendituresDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					]
				}
			},
			"options": [
				{
					"name": "Search 2017 Boulder Election Expenditures",
					"value": "Search 2017 Boulder Election Expenditures",
					"action": "Search API for '2017 Boulder Election Expenditures' entry type",
					"description": "API to search for entries of type 2017 Boulder Election Expenditures",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/2017_boulder_election_expenditures"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/2017_boulder_election_expenditures",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
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
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB 2017 Boulder Election Expenditures Committee",
			"name": "search-db_2017_boulder_election_expenditures-committee",
			"description": "Committee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_2017_boulder_election_expenditures.committee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB 2017 Boulder Election Expenditures Transaction Date",
			"name": "search-db_2017_boulder_election_expenditures-transaction_date",
			"description": "Transaction Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_2017_boulder_election_expenditures.transaction_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB 2017 Boulder Election Expenditures Name",
			"name": "search-db_2017_boulder_election_expenditures-name",
			"description": "Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_2017_boulder_election_expenditures.name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB 2017 Boulder Election Expenditures Street",
			"name": "search-db_2017_boulder_election_expenditures-street",
			"description": "Street",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_2017_boulder_election_expenditures.street",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB 2017 Boulder Election Expenditures City",
			"name": "search-db_2017_boulder_election_expenditures-city",
			"description": "City",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_2017_boulder_election_expenditures.city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB 2017 Boulder Election Expenditures State",
			"name": "search-db_2017_boulder_election_expenditures-state",
			"description": "State",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_2017_boulder_election_expenditures.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB 2017 Boulder Election Expenditures Zip",
			"name": "search-db_2017_boulder_election_expenditures-zip",
			"description": "Zip",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_2017_boulder_election_expenditures.zip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB 2017 Boulder Election Expenditures Expenditure",
			"name": "search-db_2017_boulder_election_expenditures-expenditure",
			"description": "Expenditure",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_2017_boulder_election_expenditures.expenditure",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
		{
			"displayName": "Search DB 2017 Boulder Election Expenditures Purpose",
			"name": "search-db_2017_boulder_election_expenditures-purpose",
			"description": "Purpose",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_2017_boulder_election_expenditures.purpose",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type 2017 Boulder Election Expenditures"
					],
					"operation": [
						"Search 2017 Boulder Election Expenditures"
					]
				}
			}
		},
];
