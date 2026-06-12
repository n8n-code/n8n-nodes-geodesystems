import type { INodeProperties } from 'n8n-workflow';

export const typeColoradoWaterRightsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					]
				}
			},
			"options": [
				{
					"name": "Search Colorado Water Rights",
					"value": "Search Colorado Water Rights",
					"action": "Search API for 'Colorado Water Rights' entry type",
					"description": "API to search for entries of type Colorado Water Rights",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/colorado_water_rights"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/colorado_water_rights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
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
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Structure Name",
			"name": "search-db_colorado_water_rights-structure_name",
			"description": "Structure Name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.structure_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Structure Type",
			"name": "search-db_colorado_water_rights-structure_type",
			"description": "Structure Type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.structure_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Water Source",
			"name": "search-db_colorado_water_rights-water_source",
			"description": "Water Source",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.water_source",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights County",
			"name": "search-db_colorado_water_rights-county",
			"description": "County",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.county",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Adjudication Date",
			"name": "search-db_colorado_water_rights-adjudication_date",
			"description": "Adjudication Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.adjudication_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Appropriation Date",
			"name": "search-db_colorado_water_rights-appropriation_date",
			"description": "Appropriation Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.appropriation_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Priority No",
			"name": "search-db_colorado_water_rights-priority_no",
			"description": "Priority No",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.priority_no",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Decreed Uses",
			"name": "search-db_colorado_water_rights-decreed_uses",
			"description": "Decreed Uses",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.decreed_uses",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Net Absolute",
			"name": "search-db_colorado_water_rights-net_absolute",
			"description": "Net Absolute",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.net_absolute",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Net Conditional",
			"name": "search-db_colorado_water_rights-net_conditional",
			"description": "Net Conditional",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.net_conditional",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Net Apex Absolute",
			"name": "search-db_colorado_water_rights-net_apex_absolute",
			"description": "Net Apex Absolute",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.net_apex_absolute",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Net Apex Conditional",
			"name": "search-db_colorado_water_rights-net_apex_conditional",
			"description": "Net Apex Conditional",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.net_apex_conditional",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Decreed Units",
			"name": "search-db_colorado_water_rights-decreed_units",
			"description": "Decreed Units",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.decreed_units",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Seasonal Limits",
			"name": "search-db_colorado_water_rights-seasonal_limits",
			"description": "Seasonal Limits",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.seasonal_limits",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Comments",
			"name": "search-db_colorado_water_rights-comments",
			"description": "Comments",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.comments",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights More Information",
			"name": "search-db_colorado_water_rights-more_information",
			"description": "More Information",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.more_information",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
		{
			"displayName": "Search DB Colorado Water Rights Location",
			"name": "search-db_colorado_water_rights-location",
			"description": "Location",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_colorado_water_rights.location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Colorado Water Rights"
					],
					"operation": [
						"Search Colorado Water Rights"
					]
				}
			}
		},
];
