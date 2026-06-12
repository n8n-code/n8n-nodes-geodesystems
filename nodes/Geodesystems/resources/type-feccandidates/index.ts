import type { INodeProperties } from 'n8n-workflow';

export const typeFeccandidatesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					]
				}
			},
			"options": [
				{
					"name": "Search Feccandidates",
					"value": "Search Feccandidates",
					"action": "Search API for 'Candidates' entry type",
					"description": "API to search for entries of type Candidates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/feccandidates"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/feccandidates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
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
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Name",
			"name": "search-db_feccandidates-name",
			"description": "Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Party",
			"name": "search-db_feccandidates-party",
			"description": "Party",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.party",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates State",
			"name": "search-db_feccandidates-state",
			"description": "State",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates District",
			"name": "search-db_feccandidates-district",
			"description": "District",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.district",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Gender",
			"name": "search-db_feccandidates-gender",
			"description": "Gender",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.gender",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Beginning Cash",
			"name": "search-db_feccandidates-beginning_cash",
			"description": "Beginning Cash",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.beginning_cash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Ending Cash",
			"name": "search-db_feccandidates-ending_cash",
			"description": "Ending Cash",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.ending_cash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Total Receipts",
			"name": "search-db_feccandidates-total_receipts",
			"description": "Total Receipts",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.total_receipts",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Total Indivual Contributions",
			"name": "search-db_feccandidates-total_indivual_contributions",
			"description": "Total Indivual Contributions",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.total_indivual_contributions",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Transfers From Committees",
			"name": "search-db_feccandidates-transfers_from_committees",
			"description": "Transfers From Committees",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.transfers_from_committees",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Transfers To Committees",
			"name": "search-db_feccandidates-transfers_to_committees",
			"description": "Transfers To Committees",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.transfers_to_committees",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Total Disbursements",
			"name": "search-db_feccandidates-total_disbursements",
			"description": "Total Disbursements",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.total_disbursements",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Contributions From Candidate",
			"name": "search-db_feccandidates-contributions_from_candidate",
			"description": "Contributions From Candidate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.contributions_from_candidate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Loans From Candidates",
			"name": "search-db_feccandidates-loans_from_candidates",
			"description": "Loans From Candidates",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.loans_from_candidates",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Other Loans",
			"name": "search-db_feccandidates-other_loans",
			"description": "Other Loans",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.other_loans",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Candidate Loan Repayments",
			"name": "search-db_feccandidates-candidate_loan_repayments",
			"description": "Candidate Loan Repayments",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.candidate_loan_repayments",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Other Loan Repayments",
			"name": "search-db_feccandidates-other_loan_repayments",
			"description": "Other Loan Repayments",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.other_loan_repayments",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Debts Owed By",
			"name": "search-db_feccandidates-debts_owed_by",
			"description": "Debts Owed By",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.debts_owed_by",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Contributions From Other Committees",
			"name": "search-db_feccandidates-contributions_from_other_committees",
			"description": "Contributions From Other Committees",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.contributions_from_other_committees",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Contributions From Party Committees",
			"name": "search-db_feccandidates-contributions_from_party_committees",
			"description": "Contributions From Party Committees",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.contributions_from_party_committees",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Coverage End Date",
			"name": "search-db_feccandidates-coverage_end_date",
			"description": "Coverage End Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.coverage_end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Individual Refunds",
			"name": "search-db_feccandidates-individual_refunds",
			"description": "Individual Refunds",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.individual_refunds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
		{
			"displayName": "Search DB Feccandidates Committee Refunds",
			"name": "search-db_feccandidates-committee_refunds",
			"description": "Committee Refunds",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_feccandidates.committee_refunds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Feccandidates"
					],
					"operation": [
						"Search Feccandidates"
					]
				}
			}
		},
];
