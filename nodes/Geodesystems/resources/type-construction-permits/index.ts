import type { INodeProperties } from 'n8n-workflow';

export const typeConstructionPermitsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					]
				}
			},
			"options": [
				{
					"name": "Search Construction Permits",
					"value": "Search Construction Permits",
					"action": "Search API for 'Construction Permits' entry type",
					"description": "API to search for entries of type Construction Permits",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/construction_permits"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/construction_permits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
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
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Address",
			"name": "search-db_construction_permits-address",
			"description": "Address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Case Status",
			"name": "search-db_construction_permits-case_status",
			"description": "Case Status",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.case_status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Category",
			"name": "search-db_construction_permits-category",
			"description": "Category",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.category",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Building Uses And Work Scopes",
			"name": "search-db_construction_permits-building_uses_and_work_scopes",
			"description": "Building Uses And Work Scopes",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.building_uses_and_work_scopes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Permit Types",
			"name": "search-db_construction_permits-permit_types",
			"description": "Permit Types",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.permit_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Total Project Value",
			"name": "search-db_construction_permits-total_project_value",
			"description": "Total Project Value",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.total_project_value",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Total Subpermit Value",
			"name": "search-db_construction_permits-total_subpermit_value",
			"description": "Total Subpermit Value",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.total_subpermit_value",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Applied",
			"name": "search-db_construction_permits-applied",
			"description": "Applied",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.applied",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Approved",
			"name": "search-db_construction_permits-approved",
			"description": "Approved",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.approved",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Issued",
			"name": "search-db_construction_permits-issued",
			"description": "Issued",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.issued",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Co Date",
			"name": "search-db_construction_permits-co_date",
			"description": "Co Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.co_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Completion Date",
			"name": "search-db_construction_permits-completion_date",
			"description": "Completion Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.completion_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits New Res Unit",
			"name": "search-db_construction_permits-new_res_unit",
			"description": "New Res Unit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.new_res_unit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Existing Res Unit",
			"name": "search-db_construction_permits-existing_res_unit",
			"description": "Existing Res Unit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.existing_res_unit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Affordable Hsg Unit",
			"name": "search-db_construction_permits-affordable_hsg_unit",
			"description": "Affordable Hsg Unit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.affordable_hsg_unit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits New Sf",
			"name": "search-db_construction_permits-new_sf",
			"description": "New Sf",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.new_sf",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Remodel Sf",
			"name": "search-db_construction_permits-remodel_sf",
			"description": "Remodel Sf",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.remodel_sf",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Narrative Description",
			"name": "search-db_construction_permits-narrative_description",
			"description": "Narrative Description",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.narrative_description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Primary First Name",
			"name": "search-db_construction_permits-primary_first_name",
			"description": "Primary First Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.primary_first_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Primary Last Name",
			"name": "search-db_construction_permits-primary_last_name",
			"description": "Primary Last Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.primary_last_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Primary Company",
			"name": "search-db_construction_permits-primary_company",
			"description": "Primary Company",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.primary_company",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Contractor First Name",
			"name": "search-db_construction_permits-contractor_first_name",
			"description": "Contractor First Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.contractor_first_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Contractor Last Name",
			"name": "search-db_construction_permits-contractor_last_name",
			"description": "Contractor Last Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.contractor_last_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Contractor Company",
			"name": "search-db_construction_permits-contractor_company",
			"description": "Contractor Company",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.contractor_company",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Owner 1 First Name",
			"name": "search-db_construction_permits-owner1_first_name",
			"description": "Owner1 First Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.owner1_first_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Owner 1 Last Name",
			"name": "search-db_construction_permits-owner1_last_name",
			"description": "Owner1 Last Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.owner1_last_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Owner 1 Company",
			"name": "search-db_construction_permits-owner1_company",
			"description": "Owner1 Company",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.owner1_company",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Owner 2 First Name",
			"name": "search-db_construction_permits-owner2_first_name",
			"description": "Owner2 First Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.owner2_first_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Owner 2 Last Name",
			"name": "search-db_construction_permits-owner2_last_name",
			"description": "Owner2 Last Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.owner2_last_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
		{
			"displayName": "Search DB Construction Permits Owner 2 Company",
			"name": "search-db_construction_permits-owner2_company",
			"description": "Owner2 Company",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_construction_permits.owner2_company",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Construction Permits"
					],
					"operation": [
						"Search Construction Permits"
					]
				}
			}
		},
];
