import type { INodeProperties } from 'n8n-workflow';

export const typeFecPacsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					]
				}
			},
			"options": [
				{
					"name": "Search Fec Pacs",
					"value": "Search Fec Pacs",
					"action": "Search API for 'FEC PACs' entry type",
					"description": "API to search for entries of type FEC PACs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/fec_pacs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/fec_pacs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
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
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Committee",
			"name": "search-db_fec_pacs-committee",
			"description": "Committee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.committee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Total Receipts",
			"name": "search-db_fec_pacs-total_receipts",
			"description": "Total Receipts",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.total_receipts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Beginning Cash",
			"name": "search-db_fec_pacs-beginning_cash",
			"description": "Beginning Cash",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.beginning_cash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Ending Cash",
			"name": "search-db_fec_pacs-ending_cash",
			"description": "Ending Cash",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.ending_cash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Contributions From Individuals",
			"name": "search-db_fec_pacs-contributions_from_individuals",
			"description": "Contributions From Individuals",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.contributions_from_individuals",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Contributions From Other Committees",
			"name": "search-db_fec_pacs-contributions_from_other_committees",
			"description": "Contributions From Other Committees",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.contributions_from_other_committees",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Trans From Affiliates",
			"name": "search-db_fec_pacs-trans_from_affiliates",
			"description": "Trans From Affiliates",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.trans_from_affiliates",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Contributions To Other Committee",
			"name": "search-db_fec_pacs-contributions_to_other_committee",
			"description": "Contributions To Other Committee",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.contributions_to_other_committee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Contributions From Candidate",
			"name": "search-db_fec_pacs-contributions_from_candidate",
			"description": "Contributions From Candidate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.contributions_from_candidate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Loans From Candidate",
			"name": "search-db_fec_pacs-loans_from_candidate",
			"description": "Loans From Candidate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.loans_from_candidate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Total Loans Received",
			"name": "search-db_fec_pacs-total_loans_received",
			"description": "Total Loans Received",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.total_loans_received",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Total Distributions",
			"name": "search-db_fec_pacs-total_distributions",
			"description": "Total Distributions",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.total_distributions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Transfers To Affiliates",
			"name": "search-db_fec_pacs-transfers_to_affiliates",
			"description": "Transfers To Affiliates",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.transfers_to_affiliates",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Refunds To Individuals",
			"name": "search-db_fec_pacs-refunds_to_individuals",
			"description": "Refunds To Individuals",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.refunds_to_individuals",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Refends To Othercommittees",
			"name": "search-db_fec_pacs-refends_to_othercommittees",
			"description": "Refends To Othercommittees",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.refends_to_othercommittees",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Candidate Loan Repayments",
			"name": "search-db_fec_pacs-candidate_loan_repayments",
			"description": "Candidate Loan Repayments",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.candidate_loan_repayments",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
		{
			"displayName": "Search DB Fec Pacs Loan Repayments",
			"name": "search-db_fec_pacs-loan_repayments",
			"description": "Loan Repayments",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_fec_pacs.loan_repayments",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Fec Pacs"
					],
					"operation": [
						"Search Fec Pacs"
					]
				}
			}
		},
];
