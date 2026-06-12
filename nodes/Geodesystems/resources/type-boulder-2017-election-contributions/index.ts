import type { INodeProperties } from 'n8n-workflow';

export const typeBoulder2017ElectionContributionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					]
				}
			},
			"options": [
				{
					"name": "Search Boulder 2017 Election Contributions",
					"value": "Search Boulder 2017 Election Contributions",
					"action": "Search API for 'Boulder 2017 Election Contributions' entry type",
					"description": "API to search for entries of type Boulder 2017 Election Contributions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/boulder_2017_election_contributions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/boulder_2017_election_contributions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
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
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Committee",
			"name": "search-db_boulder_2017_election_contributions-committee",
			"description": "Committee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.committee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Last Name",
			"name": "search-db_boulder_2017_election_contributions-last_name",
			"description": "Last Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.last_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions First Name",
			"name": "search-db_boulder_2017_election_contributions-first_name",
			"description": "First Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.first_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Street",
			"name": "search-db_boulder_2017_election_contributions-street",
			"description": "Street",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.street",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions City",
			"name": "search-db_boulder_2017_election_contributions-city",
			"description": "City",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions State",
			"name": "search-db_boulder_2017_election_contributions-state",
			"description": "State",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Zip",
			"name": "search-db_boulder_2017_election_contributions-zip",
			"description": "Zip",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.zip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Contribution Type",
			"name": "search-db_boulder_2017_election_contributions-contribution_type",
			"description": "Contribution Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.contribution_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions From Candidate",
			"name": "search-db_boulder_2017_election_contributions-from_candidate",
			"description": "From Candidate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.from_candidate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Date",
			"name": "search-db_boulder_2017_election_contributions-date",
			"description": "Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Amount",
			"name": "search-db_boulder_2017_election_contributions-amount",
			"description": "Amount",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Match Amount",
			"name": "search-db_boulder_2017_election_contributions-match_amount",
			"description": "Match Amount",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.match_amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Ytd Amount",
			"name": "search-db_boulder_2017_election_contributions-ytd_amount",
			"description": "Ytd Amount",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.ytd_amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder 2017 Election Contributions Location",
			"name": "search-db_boulder_2017_election_contributions-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_2017_election_contributions.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder 2017 Election Contributions"
					],
					"operation": [
						"Search Boulder 2017 Election Contributions"
					]
				}
			}
		},
];
