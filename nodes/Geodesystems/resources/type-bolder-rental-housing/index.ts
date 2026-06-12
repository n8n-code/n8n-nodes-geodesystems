import type { INodeProperties } from 'n8n-workflow';

export const typeBolderRentalHousingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					]
				}
			},
			"options": [
				{
					"name": "Search Bolder Rental Housing",
					"value": "Search Bolder Rental Housing",
					"action": "Search API for 'Boulder Rental Housing' entry type",
					"description": "API to search for entries of type Boulder Rental Housing",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/bolder_rental_housing"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/bolder_rental_housing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
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
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Propaddr 1",
			"name": "search-db_bolder_rental_housing-propaddr1",
			"description": "Property Address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.propaddr1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Rentaltype",
			"name": "search-db_bolder_rental_housing-rentaltype",
			"description": "Rental Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.rentaltype",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Bldgtype",
			"name": "search-db_bolder_rental_housing-bldgtype",
			"description": "Building Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.bldgtype",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Dwellunits",
			"name": "search-db_bolder_rental_housing-dwellunits",
			"description": "Dwelling Units",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.dwellunits",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Roomunits",
			"name": "search-db_bolder_rental_housing-roomunits",
			"description": "Room Units",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.roomunits",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Neighbrhd",
			"name": "search-db_bolder_rental_housing-neighbrhd",
			"description": "Neighborhood",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.neighbrhd",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Complexnm",
			"name": "search-db_bolder_rental_housing-complexnm",
			"description": "Complex Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.complexnm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Name",
			"name": "search-db_bolder_rental_housing-name",
			"description": "Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Persontype",
			"name": "search-db_bolder_rental_housing-persontype",
			"description": "Person Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.persontype",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Company",
			"name": "search-db_bolder_rental_housing-company",
			"description": "Company",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.company",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Engcompl",
			"name": "search-db_bolder_rental_housing-engcompl",
			"description": "Engcompl",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.engcompl",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Licenseexp",
			"name": "search-db_bolder_rental_housing-licenseexp",
			"description": "Expiration Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.licenseexp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Licensenum",
			"name": "search-db_bolder_rental_housing-licensenum",
			"description": "Licensenum",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.licensenum",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Ppl 1 Coname",
			"name": "search-db_bolder_rental_housing-ppl1_coname",
			"description": "Ppl1 Coname",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.ppl1_coname",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Person 1",
			"name": "search-db_bolder_rental_housing-person_1",
			"description": "Person 1",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.person_1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Ppl 1 Role",
			"name": "search-db_bolder_rental_housing-ppl1_role",
			"description": "Ppl1 Role",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.ppl1_role",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Ppl 2 Coname",
			"name": "search-db_bolder_rental_housing-ppl2_coname",
			"description": "Ppl2 Coname",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.ppl2_coname",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Person 2",
			"name": "search-db_bolder_rental_housing-person_2",
			"description": "Person 2",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.person_2",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Ppl 2 Role",
			"name": "search-db_bolder_rental_housing-ppl2_role",
			"description": "Ppl2 Role",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.ppl2_role",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
		{
			"displayName": "Search DB Bolder Rental Housing Location",
			"name": "search-db_bolder_rental_housing-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_bolder_rental_housing.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Bolder Rental Housing"
					],
					"operation": [
						"Search Bolder Rental Housing"
					]
				}
			}
		},
];
