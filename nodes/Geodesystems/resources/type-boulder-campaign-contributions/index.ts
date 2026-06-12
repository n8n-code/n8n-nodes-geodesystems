import type { INodeProperties } from 'n8n-workflow';

export const typeBoulderCampaignContributionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					]
				}
			},
			"options": [
				{
					"name": "Search Boulder Campaign Contributions",
					"value": "Search Boulder Campaign Contributions",
					"action": "Search API for 'Boulder Campaign Contributions' entry type",
					"description": "API to search for entries of type Boulder Campaign Contributions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/boulder_campaign_contributions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/boulder_campaign_contributions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
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
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Committee",
			"name": "search-db_boulder_campaign_contributions-committee",
			"description": "Committee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.committee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Type",
			"name": "search-db_boulder_campaign_contributions-type",
			"description": "Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Committee Num",
			"name": "search-db_boulder_campaign_contributions-committee_num",
			"description": "Committee Num",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.committee_num",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Candidate",
			"name": "search-db_boulder_campaign_contributions-candidate",
			"description": "Candidate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.candidate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Filing Date",
			"name": "search-db_boulder_campaign_contributions-filing_date",
			"description": "Filing Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.filing_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Amended Date",
			"name": "search-db_boulder_campaign_contributions-amended_date",
			"description": "Amended Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.amended_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Official Filing",
			"name": "search-db_boulder_campaign_contributions-official_filing",
			"description": "Official Filing",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.official_filing",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Transaction Date",
			"name": "search-db_boulder_campaign_contributions-transaction_date",
			"description": "Transaction Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.transaction_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Last Name",
			"name": "search-db_boulder_campaign_contributions-last_name",
			"description": "Last Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.last_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions First Name",
			"name": "search-db_boulder_campaign_contributions-first_name",
			"description": "First Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.first_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Street",
			"name": "search-db_boulder_campaign_contributions-street",
			"description": "Street",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.street",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions City",
			"name": "search-db_boulder_campaign_contributions-city",
			"description": "City",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions State",
			"name": "search-db_boulder_campaign_contributions-state",
			"description": "State",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Zip",
			"name": "search-db_boulder_campaign_contributions-zip",
			"description": "Zip",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.zip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Contribution",
			"name": "search-db_boulder_campaign_contributions-contribution",
			"description": "Contribution",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.contribution",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Contribution Type",
			"name": "search-db_boulder_campaign_contributions-contribution_type",
			"description": "Contribution Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.contribution_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Anonymous",
			"name": "search-db_boulder_campaign_contributions-anonymous",
			"description": "Anonymous",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.anonymous",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions From Candidate",
			"name": "search-db_boulder_campaign_contributions-from_candidate",
			"description": "From Candidate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.from_candidate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Campaign Contributions Match",
			"name": "search-db_boulder_campaign_contributions-match",
			"description": "Match",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_campaign_contributions.match",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Campaign Contributions"
					],
					"operation": [
						"Search Boulder Campaign Contributions"
					]
				}
			}
		},
];
