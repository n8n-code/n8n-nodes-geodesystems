import type { INodeProperties } from 'n8n-workflow';

export const typeTmdbmoviesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					]
				}
			},
			"options": [
				{
					"name": "Search Tmdbmovies",
					"value": "Search Tmdbmovies",
					"action": "Search API for 'Tmdb Movies' entry type",
					"description": "API to search for entries of type Tmdb Movies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/repository/search/type/tmdbmovies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /repository/search/type/tmdbmovies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
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
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Original Title",
			"name": "search-db_tmdbmovies-original_title",
			"description": "Original Title",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.original_title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Overview",
			"name": "search-db_tmdbmovies-overview",
			"description": "Overview",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.overview",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Budget",
			"name": "search-db_tmdbmovies-budget",
			"description": "Budget",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.budget",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Genres",
			"name": "search-db_tmdbmovies-genres",
			"description": "Genres",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.genres",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Homepage",
			"name": "search-db_tmdbmovies-homepage",
			"description": "Homepage",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.homepage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Movie ID",
			"name": "search-db_tmdbmovies-movie_id",
			"description": "Id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.movie_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Keywords",
			"name": "search-db_tmdbmovies-keywords",
			"description": "Keywords",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.keywords",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Original Language",
			"name": "search-db_tmdbmovies-original_language",
			"description": "Original Language",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.original_language",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Popularity",
			"name": "search-db_tmdbmovies-popularity",
			"description": "Popularity",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.popularity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Production Companies",
			"name": "search-db_tmdbmovies-production_companies",
			"description": "Production Companies",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.production_companies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Production Countries",
			"name": "search-db_tmdbmovies-production_countries",
			"description": "Production Countries",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.production_countries",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Release Date",
			"name": "search-db_tmdbmovies-release_date",
			"description": "Release Date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.release_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Revenue",
			"name": "search-db_tmdbmovies-revenue",
			"description": "Revenue",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.revenue",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Runtime",
			"name": "search-db_tmdbmovies-runtime",
			"description": "Runtime",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.runtime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Spoken Languages",
			"name": "search-db_tmdbmovies-spoken_languages",
			"description": "Spoken Languages",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.spoken_languages",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Status",
			"name": "search-db_tmdbmovies-status",
			"description": "Status",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Tagline",
			"name": "search-db_tmdbmovies-tagline",
			"description": "Tagline",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.tagline",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Title",
			"name": "search-db_tmdbmovies-title",
			"description": "Title",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Vote Average",
			"name": "search-db_tmdbmovies-vote_average",
			"description": "Vote Average",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.vote_average",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
		{
			"displayName": "Search DB Tmdbmovies Vote Count",
			"name": "search-db_tmdbmovies-vote_count",
			"description": "Vote Count",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "search.db_tmdbmovies.vote_count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Type Tmdbmovies"
					],
					"operation": [
						"Search Tmdbmovies"
					]
				}
			}
		},
];
