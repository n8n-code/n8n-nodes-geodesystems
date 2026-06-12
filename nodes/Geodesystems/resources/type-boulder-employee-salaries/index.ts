import type { INodeProperties } from 'n8n-workflow';

export const typeBoulderEmployeeSalariesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					]
				}
			},
			"options": [
				{
					"name": "Search Boulder Employee Salaries",
					"value": "Search Boulder Employee Salaries",
					"action": "Search API for 'Boulder Employee Salaries' entry type",
					"description": "API to search for entries of type Boulder Employee Salaries",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/boulder_employee_salaries"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/boulder_employee_salaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
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
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Employee Salaries Position Description",
			"name": "search-db_boulder_employee_salaries-position_description",
			"description": "Position Description",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_employee_salaries.position_description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Employee Salaries Department",
			"name": "search-db_boulder_employee_salaries-department",
			"description": "Department",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_employee_salaries.department",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Employee Salaries Employee Flsa Exempt Y N",
			"name": "search-db_boulder_employee_salaries-employee_flsa_exempt_y_n",
			"description": "Employee Flsa Exempt Y N",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_employee_salaries.employee_flsa_exempt_y_n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Employee Salaries Pay Range Min",
			"name": "search-db_boulder_employee_salaries-pay_range_min",
			"description": "Pay Range Min",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_employee_salaries.pay_range_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Employee Salaries Pay Range Max",
			"name": "search-db_boulder_employee_salaries-pay_range_max",
			"description": "Pay Range Max",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_employee_salaries.pay_range_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Employee Salaries Employee Hourly Pay Rate",
			"name": "search-db_boulder_employee_salaries-employee_hourly_pay_rate",
			"description": "Employee Hourly Pay Rate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_employee_salaries.employee_hourly_pay_rate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Employee Salaries Employee Fte In This Position",
			"name": "search-db_boulder_employee_salaries-employee_fte_in_this_position",
			"description": "Employee Fte In This Position",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_employee_salaries.employee_fte_in_this_position",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
					]
				}
			}
		},
		{
			"displayName": "Search DB Boulder Employee Salaries Employee Annual Base Salary",
			"name": "search-db_boulder_employee_salaries-employee_annual_base_salary",
			"description": "Employee Annual Base Salary",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_boulder_employee_salaries.employee_annual_base_salary",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Boulder Employee Salaries"
					],
					"operation": [
						"Search Boulder Employee Salaries"
					]
				}
			}
		},
];
