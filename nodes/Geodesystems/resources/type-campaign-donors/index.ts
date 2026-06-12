import type { INodeProperties } from 'n8n-workflow';

export const typeCampaignDonorsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					]
				}
			},
			"options": [
				{
					"name": "Search Campaign Donors",
					"value": "Search Campaign Donors",
					"action": "Search API for 'Campaign Donors' entry type",
					"description": "API to search for entries of type Campaign Donors",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/campaign_donors"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/campaign_donors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
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
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Committee",
			"name": "search-db_campaign_donors-committee",
			"description": "Committee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.committee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Amount",
			"name": "search-db_campaign_donors-amount",
			"description": "Amount",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Party",
			"name": "search-db_campaign_donors-party",
			"description": "Party",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.party",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Donor",
			"name": "search-db_campaign_donors-donor",
			"description": "Donor",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.donor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Gender",
			"name": "search-db_campaign_donors-gender",
			"description": "Gender",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.gender",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors City",
			"name": "search-db_campaign_donors-city",
			"description": "City",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.city",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors State",
			"name": "search-db_campaign_donors-state",
			"description": "State",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Zip Code",
			"name": "search-db_campaign_donors-zip_code",
			"description": "Zip Code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.zip_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Employer",
			"name": "search-db_campaign_donors-employer",
			"description": "Employer",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.employer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Occupation",
			"name": "search-db_campaign_donors-occupation",
			"description": "Occupation",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.occupation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Date",
			"name": "search-db_campaign_donors-date",
			"description": "Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
		{
			"displayName": "Search DB Campaign Donors Location",
			"name": "search-db_campaign_donors-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_campaign_donors.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Campaign Donors"
					],
					"operation": [
						"Search Campaign Donors"
					]
				}
			}
		},
];
