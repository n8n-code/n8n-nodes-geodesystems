import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { serviceMediaTabularExtractsheetDescription } from './resources/service-media-tabular-extractsheet';
import { type2017BoulderElectionExpendituresDescription } from './resources/type-2017-boulder-election-expenditures';
import { typeAnyDescription } from './resources/type-any';
import { typeBeforeafterDescription } from './resources/type-beforeafter';
import { typeBiblioDescription } from './resources/type-biblio';
import { typeBioDicomDescription } from './resources/type-bio-dicom';
import { typeBioDicomTestDescription } from './resources/type-bio-dicom-test';
import { typeBioFastaDescription } from './resources/type-bio-fasta';
import { typeBioFastqDescription } from './resources/type-bio-fastq';
import { typeBioHmmerIndexDescription } from './resources/type-bio-hmmer-index';
import { typeBioOmeTiffDescription } from './resources/type-bio-ome-tiff';
import { typeBioOntologyAssayDescription } from './resources/type-bio-ontology-assay';
import { typeBioOntologyCohortDescription } from './resources/type-bio-ontology-cohort';
import { typeBioOntologyPersonDescription } from './resources/type-bio-ontology-person';
import { typeBioOntologySampleDescription } from './resources/type-bio-ontology-sample';
import { typeBioOntologySeriesDescription } from './resources/type-bio-ontology-series';
import { typeBioOntologyStudyDescription } from './resources/type-bio-ontology-study';
import { typeBioSamDescription } from './resources/type-bio-sam';
import { typeBioSfPdbDescription } from './resources/type-bio-sf-pdb';
import { typeBioSraDescription } from './resources/type-bio-sra';
import { typeBioStockholmDescription } from './resources/type-bio-stockholm';
import { typeBioTaxonomyDescription } from './resources/type-bio-taxonomy';
import { typeBlogentryDescription } from './resources/type-blogentry';
import { typeBolderRentalHousingDescription } from './resources/type-bolder-rental-housing';
import { typeBookmarksDescription } from './resources/type-bookmarks';
import { typeBostonCrimeDescription } from './resources/type-boston-crime';
import { typeBoulder2017ElectionContributionsDescription } from './resources/type-boulder-2017-election-contributions';
import { typeBoulderCampaignContributionsDescription } from './resources/type-boulder-campaign-contributions';
import { typeBoulderConsultingServicesDescription } from './resources/type-boulder-consulting-services';
import { typeBoulderCountyVoterDetailsDescription } from './resources/type-boulder-county-voter-details';
import { typeBoulderCrimesDescription } from './resources/type-boulder-crimes';
import { typeBoulderEmailsDescription } from './resources/type-boulder-emails';
import { typeBoulderEmployeeSalariesDescription } from './resources/type-boulder-employee-salaries';
import { typeCalendarDescription } from './resources/type-calendar';
import { typeCampaignDonorsDescription } from './resources/type-campaign-donors';
import { typeCampaignExpendituresDescription } from './resources/type-campaign-expenditures';
import { typeCataloglinkDescription } from './resources/type-cataloglink';
import { typeCdmGridDescription } from './resources/type-cdm-grid';
import { typeChatroomDescription } from './resources/type-chatroom';
import { typeColoradoWaterRightsDescription } from './resources/type-colorado-water-rights';
import { typeCommitteeDonationsDescription } from './resources/type-committee-donations';
import { typeCommunityDatahubDescription } from './resources/type-community-datahub';
import { typeCommunityResourceDescription } from './resources/type-community-resource';
import { typeConstructionPermitsDescription } from './resources/type-construction-permits';
import { typeContactDescription } from './resources/type-contact';
import { typeDbCoIndicatorsDescription } from './resources/type-db-co-indicators';
import { typeEarthSatelliteLandsatDescription } from './resources/type-earth-satellite-landsat';
import { typeFaqDescription } from './resources/type-faq';
import { typeFecPacsDescription } from './resources/type-fec-pacs';
import { typeFeccandidatesDescription } from './resources/type-feccandidates';
import { typeFeedDescription } from './resources/type-feed';
import { typeFileDescription } from './resources/type-file';
import { typeFitsDataDescription } from './resources/type-fits-data';
import { typeFtpDescription } from './resources/type-ftp';
import { typeGadgetsCountdownDescription } from './resources/type-gadgets-countdown';
import { typeGadgetsStockDescription } from './resources/type-gadgets-stock';
import { typeGadgetsWeatherDescription } from './resources/type-gadgets-weather';
import { typeGazeteerCensusTractsDescription } from './resources/type-gazeteer-census-tracts';
import { typeGazeteerCountiesDescription } from './resources/type-gazeteer-counties';
import { typeGeoGeDescription } from './resources/type-geo-ge';
import { typeGeoGeotiffDescription } from './resources/type-geo-geotiff';
import { typeGeoGpxDescription } from './resources/type-geo-gpx';
import { typeGeoHdf5Description } from './resources/type-geo-hdf-5';
import { typeGeoKmlDescription } from './resources/type-geo-kml';
import { typeGeoShapefileDescription } from './resources/type-geo-shapefile';
import { typeGeoShapefileFipsDescription } from './resources/type-geo-shapefile-fips';
import { typeGlossaryDescription } from './resources/type-glossary';
import { typeGridaggregationDescription } from './resources/type-gridaggregation';
import { typeGroupDescription } from './resources/type-group';
import { typeHipchatGroupDescription } from './resources/type-hipchat-group';
import { typeHomepageDescription } from './resources/type-homepage';
import { typeIncidentDescription } from './resources/type-incident';
import { typeJeopardyDescription } from './resources/type-jeopardy';
import { typeLatlonimageDescription } from './resources/type-latlonimage';
import { typeLidarCollectionDescription } from './resources/type-lidar-collection';
import { typeLidarLasDescription } from './resources/type-lidar-las';
import { typeLidarLvisDescription } from './resources/type-lidar-lvis';
import { typeLinkDescription } from './resources/type-link';
import { typeLocalfilesDescription } from './resources/type-localfiles';
import { typeLocationsDescription } from './resources/type-locations';
import { typeMapGooglemapDescription } from './resources/type-map-googlemap';
import { typeMediaAudiofileDescription } from './resources/type-media-audiofile';
import { typeMediaImageloopDescription } from './resources/type-media-imageloop';
import { typeMediaPhotoalbumDescription } from './resources/type-media-photoalbum';
import { typeMediaVideoChannelDescription } from './resources/type-media-video-channel';
import { typeMediaVideoQuicktimeDescription } from './resources/type-media-video-quicktime';
import { typeMediaYoutubevideoDescription } from './resources/type-media-youtubevideo';
import { typeNotesDescription } from './resources/type-notes';
import { typeNotesJsonfileDescription } from './resources/type-notes-jsonfile';
import { typeNotesNoteDescription } from './resources/type-notes-note';
import { typeNotesNotebookDescription } from './resources/type-notes-notebook';
import { typeNwsfeedDescription } from './resources/type-nwsfeed';
import { typeOpendaplinkDescription } from './resources/type-opendaplink';
import { typeOwlClassDescription } from './resources/type-owl-class';
import { typeOwlOntologyDescription } from './resources/type-owl-ontology';
import { typePasteitentryDescription } from './resources/type-pasteitentry';
import { typePointTextDescription } from './resources/type-point-text';
import { typePoliceStopDataDescription } from './resources/type-police-stop-data';
import { typePollDescription } from './resources/type-poll';
import { typeProjectCampaignDescription } from './resources/type-project-campaign';
import { typeProjectCasestudyDescription } from './resources/type-project-casestudy';
import { typeProjectContributionDescription } from './resources/type-project-contribution';
import { typeProjectDataformatDescription } from './resources/type-project-dataformat';
import { typeProjectDatasetDescription } from './resources/type-project-dataset';
import { typeProjectDeploymentDescription } from './resources/type-project-deployment';
import { typeProjectExperimentDescription } from './resources/type-project-experiment';
import { typeProjectFieldnoteDescription } from './resources/type-project-fieldnote';
import { typeProjectGpsControlpointsDescription } from './resources/type-project-gps-controlpoints';
import { typeProjectGpsRawDescription } from './resources/type-project-gps-raw';
import { typeProjectGpsRinexDescription } from './resources/type-project-gps-rinex';
import { typeProjectInstrumentDescription } from './resources/type-project-instrument';
import { typeProjectLearningResourceDescription } from './resources/type-project-learning-resource';
import { typeProjectMeetingDescription } from './resources/type-project-meeting';
import { typeProjectOrganizationDescription } from './resources/type-project-organization';
import { typeProjectProgramDescription } from './resources/type-project-program';
import { typeProjectProjectDescription } from './resources/type-project-project';
import { typeProjectServiceDescription } from './resources/type-project-service';
import { typeProjectSiteDescription } from './resources/type-project-site';
import { typeProjectSoftwarepackageDescription } from './resources/type-project-softwarepackage';
import { typeProjectStandardNameDescription } from './resources/type-project-standard-name';
import { typeProjectSurveylocationDescription } from './resources/type-project-surveylocation';
import { typeProjectTermDescription } from './resources/type-project-term';
import { typeProjectVisitDescription } from './resources/type-project-visit';
import { typeProjectVocabularyDescription } from './resources/type-project-vocabulary';
import { typePropertySalesDescription } from './resources/type-property-sales';
import { typePropertydbDescription } from './resources/type-propertydb';
import { typePythonNotebookDescription } from './resources/type-python-notebook';
import { typeSlackTeamDescription } from './resources/type-slack-team';
import { typeStatusboardDescription } from './resources/type-statusboard';
import { typeSunrisesunsetDescription } from './resources/type-sunrisesunset';
import { typeTasksDescription } from './resources/type-tasks';
import { typeTmdbmoviesDescription } from './resources/type-tmdbmovies';
import { typeTodoDescription } from './resources/type-todo';
import { typeTripEventDescription } from './resources/type-trip-event';
import { typeTripFlightDescription } from './resources/type-trip-flight';
import { typeTripHotelDescription } from './resources/type-trip-hotel';
import { typeTripReportDescription } from './resources/type-trip-report';
import { typeTripTripDescription } from './resources/type-trip-trip';
import { typeTypeAwcMetarDescription } from './resources/type-type-awc-metar';
import { typeTypeBizStockseriesDescription } from './resources/type-type-biz-stockseries';
import { typeTypeBlsSeriesDescription } from './resources/type-type-bls-series';
import { typeTypeBlsSurveyDescription } from './resources/type-type-bls-survey';
import { typeTypeCensusAcsDescription } from './resources/type-type-census-acs';
import { typeTypeDaymetDescription } from './resources/type-type-daymet';
import { typeTypeDbTableDescription } from './resources/type-type-db-table';
import { typeTypeDocumentCsvDescription } from './resources/type-type-document-csv';
import { typeTypeDocumentDocDescription } from './resources/type-type-document-doc';
import { typeTypeDocumentHtmlDescription } from './resources/type-type-document-html';
import { typeTypeDocumentPdfDescription } from './resources/type-type-document-pdf';
import { typeTypeDocumentPptDescription } from './resources/type-type-document-ppt';
import { typeTypeDocumentXlsDescription } from './resources/type-type-document-xls';
import { typeTypeDrilsdownCasestudyDescription } from './resources/type-type-drilsdown-casestudy';
import { typeTypeEdgarFilingDescription } from './resources/type-type-edgar-filing';
import { typeTypeEiaCategoryDescription } from './resources/type-type-eia-category';
import { typeTypeEiaSeriesDescription } from './resources/type-type-eia-series';
import { typeTypeEsriFeatureserverDescription } from './resources/type-type-esri-featureserver';
import { typeTypeEsriGeometryserverDescription } from './resources/type-type-esri-geometryserver';
import { typeTypeEsriGpserverDescription } from './resources/type-type-esri-gpserver';
import { typeTypeEsriImageserverDescription } from './resources/type-type-esri-imageserver';
import { typeTypeEsriLayerDescription } from './resources/type-type-esri-layer';
import { typeTypeEsriMapserverDescription } from './resources/type-type-esri-mapserver';
import { typeTypeEsriRestfolderDescription } from './resources/type-type-esri-restfolder';
import { typeTypeEsriRestserverDescription } from './resources/type-type-esri-restserver';
import { typeTypeEsriRestserviceDescription } from './resources/type-type-esri-restservice';
import { typeTypeExtremesDescription } from './resources/type-type-extremes';
import { typeTypeFredCategoryDescription } from './resources/type-type-fred-category';
import { typeTypeFredSeriesDescription } from './resources/type-type-fred-series';
import { typeTypeGtfsAgencyDescription } from './resources/type-type-gtfs-agency';
import { typeTypeGtfsRouteDescription } from './resources/type-type-gtfs-route';
import { typeTypeGtfsRoutesDescription } from './resources/type-type-gtfs-routes';
import { typeTypeGtfsStopDescription } from './resources/type-type-gtfs-stop';
import { typeTypeGtfsStopsDescription } from './resources/type-type-gtfs-stops';
import { typeTypeGtfsTripDescription } from './resources/type-type-gtfs-trip';
import { typeTypeHazarddataDescription } from './resources/type-type-hazarddata';
import { typeTypeHydroColoradoDescription } from './resources/type-type-hydro-colorado';
import { typeTypeIdvBundleDescription } from './resources/type-type-idv-bundle';
import { typeTypeImageDescription } from './resources/type-type-image';
import { typeTypeImageAirportDescription } from './resources/type-type-image-airport';
import { typeTypeImageWebcamDescription } from './resources/type-type-image-webcam';
import { typeTypeMbDescription } from './resources/type-type-mb';
import { typeTypeMbCollectionDescription } from './resources/type-type-mb-collection';
import { typeTypeMbPointBasicDescription } from './resources/type-type-mb-point-basic';
import { typeTypeMetametaDictionaryDescription } from './resources/type-type-metameta-dictionary';
import { typeTypeMetametaFieldDescription } from './resources/type-type-metameta-field';
import { typeTypeNasaamesDescription } from './resources/type-type-nasaames';
import { typeTypeNcssDescription } from './resources/type-type-ncss';
import { typeTypeNitfDescription } from './resources/type-type-nitf';
import { typeTypePointAmerifluxLevel2Description } from './resources/type-type-point-ameriflux-level-2';
import { typeTypePointAmrcFinalDescription } from './resources/type-type-point-amrc-final';
import { typeTypePointAmrcFreewaveDescription } from './resources/type-type-point-amrc-freewave';
import { typeTypePointCzoDescription } from './resources/type-type-point-czo';
import { typeTypePointGcnetDescription } from './resources/type-type-point-gcnet';
import { typeTypePointGeomagIaga2002Description } from './resources/type-type-point-geomag-iaga-2002';
import { typeTypePointHydroWatermlDescription } from './resources/type-type-point-hydro-waterml';
import { typeTypePointIcebridgeAtmIcessnDescription } from './resources/type-type-point-icebridge-atm-icessn';
import { typeTypePointIcebridgeAtmQfitDescription } from './resources/type-type-point-icebridge-atm-qfit';
import { typeTypePointIcebridgeMccordsIrmcr2Description } from './resources/type-type-point-icebridge-mccords-irmcr-2';
import { typeTypePointIcebridgeMccordsIrmcr3Description } from './resources/type-type-point-icebridge-mccords-irmcr-3';
import { typeTypePointIcebridgeParisDescription } from './resources/type-type-point-icebridge-paris';
import { typeTypePointIdvDescription } from './resources/type-type-point-idv';
import { typeTypePointInlineDescription } from './resources/type-type-point-inline';
import { typeTypePointNcdcClimateDescription } from './resources/type-type-point-ncdc-climate';
import { typeTypePointNetcdfDescription } from './resources/type-type-point-netcdf';
import { typeTypePointNoaaCarbonDescription } from './resources/type-type-point-noaa-carbon';
import { typeTypePointNoaaFlaskEventDescription } from './resources/type-type-point-noaa-flask-event';
import { typeTypePointNoaaFlaskMonthDescription } from './resources/type-type-point-noaa-flask-month';
import { typeTypePointNoaaMadisDescription } from './resources/type-type-point-noaa-madis';
import { typeTypePointNoaaTowerDescription } from './resources/type-type-point-noaa-tower';
import { typeTypePointOceanCnvDescription } from './resources/type-type-point-ocean-cnv';
import { typeTypePointOceanCsvSadoTtsDescription } from './resources/type-type-point-ocean-csv-sado-tts';
import { typeTypePointOceanCsvSadoMeteoDescription } from './resources/type-type-point-ocean-csv-sado-meteo';
import { typeTypePointOceanCsvSadoPositionDescription } from './resources/type-type-point-ocean-csv-sado-position';
import { typeTypePointOceanNetcdfGliderDescription } from './resources/type-type-point-ocean-netcdf-glider';
import { typeTypePointOceanNetcdfTrackDescription } from './resources/type-type-point-ocean-netcdf-track';
import { typeTypePointOceanOoiDmgxDescription } from './resources/type-type-point-ocean-ooi-dmgx';
import { typeTypePointOpenaqDescription } from './resources/type-type-point-openaq';
import { typeTypePointPboPositionTimeSeriesDescription } from './resources/type-type-point-pbo-position-time-series';
import { typeTypePointSimpleRecordsDescription } from './resources/type-type-point-simple-records';
import { typeTypePointSnotelDescription } from './resources/type-type-point-snotel';
import { typeTypePointTextDescription } from './resources/type-type-point-text';
import { typeTypePointWsbbGgpDescription } from './resources/type-type-point-wsbb-ggp';
import { typeTypePsdMonthlyClimateIndexDescription } from './resources/type-type-psd-monthly-climate-index';
import { typeTypeQuandlSeriesDescription } from './resources/type-type-quandl-series';
import { typeTypeServiceGroupDescription } from './resources/type-type-service-group';
import { typeTypeServiceLinkDescription } from './resources/type-type-service-link';
import { typeTypeSocrataSeriesDescription } from './resources/type-type-socrata-series';
import { typeTypeSoundingCodDescription } from './resources/type-type-sounding-cod';
import { typeTypeSoundingFrdDescription } from './resources/type-type-sounding-frd';
import { typeTypeSoundingGsdDescription } from './resources/type-type-sounding-gsd';
import { typeTypeSoundingWyomingDescription } from './resources/type-type-sounding-wyoming';
import { typeTypeTmyDescription } from './resources/type-type-tmy';
import { typeTypeTweetDescription } from './resources/type-type-tweet';
import { typeTypeUsgsGaugeDescription } from './resources/type-type-usgs-gauge';
import { typeTypeVirtualDescription } from './resources/type-type-virtual';
import { typeTypeWmsCapabilitiesDescription } from './resources/type-type-wms-capabilities';
import { typeTypeWmsLayerDescription } from './resources/type-type-wms-layer';
import { typeUfoSightingsDescription } from './resources/type-ufo-sightings';
import { typeUsPlacesDescription } from './resources/type-us-places';
import { typeVoteYesnoDescription } from './resources/type-vote-yesno';
import { typeWeblogDescription } from './resources/type-weblog';
import { typeWikipageDescription } from './resources/type-wikipage';

export class Geodesystems implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Geodesystems',
                name: 'N8nDevGeodesystems',
                icon: { light: 'file:./geodesystems.png', dark: 'file:./geodesystems.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Search data across sources; manage documents, photos, knowledge; collaborate via blogs, wikis, dashboards.',
                defaults: { name: 'Geodesystems' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevGeodesystemsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Service Media Tabular Extractsheet",
					"value": "Service Media Tabular Extractsheet",
					"description": " API for Extract sheets"
				},
				{
					"name": "Type 2017 Boulder Election Expenditures",
					"value": "Type 2017 Boulder Election Expenditures",
					"description": "Search API for '2017 Boulder Election Expenditures' entry type"
				},
				{
					"name": "Type Any",
					"value": "Type Any",
					"description": "Search API for 'Any file type' entry type"
				},
				{
					"name": "Type Beforeafter",
					"value": "Type Beforeafter",
					"description": "Search API for 'Before and After Images' entry type"
				},
				{
					"name": "Type Biblio",
					"value": "Type Biblio",
					"description": "Search API for 'Bibliographic Entry' entry type"
				},
				{
					"name": "Type Bio Dicom",
					"value": "Type Bio Dicom",
					"description": "Search API for 'DICOM File' entry type"
				},
				{
					"name": "Type Bio Dicom Test",
					"value": "Type Bio Dicom Test",
					"description": "Search API for 'DICOM Test File' entry type"
				},
				{
					"name": "Type Bio Fasta",
					"value": "Type Bio Fasta",
					"description": "Search API for 'FASTA File' entry type"
				},
				{
					"name": "Type Bio Fastq",
					"value": "Type Bio Fastq",
					"description": "Search API for 'FASTQ File' entry type"
				},
				{
					"name": "Type Bio Hmmer Index",
					"value": "Type Bio Hmmer Index",
					"description": "Search API for 'HMMER Index File' entry type"
				},
				{
					"name": "Type Bio Ome Tiff",
					"value": "Type Bio Ome Tiff",
					"description": "Search API for 'OME TIFF File' entry type"
				},
				{
					"name": "Type Bio Ontology Assay",
					"value": "Type Bio Ontology Assay",
					"description": "Search API for 'Assay' entry type"
				},
				{
					"name": "Type Bio Ontology Cohort",
					"value": "Type Bio Ontology Cohort",
					"description": "Search API for 'Cohort' entry type"
				},
				{
					"name": "Type Bio Ontology Person",
					"value": "Type Bio Ontology Person",
					"description": "Search API for 'Person' entry type"
				},
				{
					"name": "Type Bio Ontology Sample",
					"value": "Type Bio Ontology Sample",
					"description": "Search API for 'Sample' entry type"
				},
				{
					"name": "Type Bio Ontology Series",
					"value": "Type Bio Ontology Series",
					"description": "Search API for 'Series' entry type"
				},
				{
					"name": "Type Bio Ontology Study",
					"value": "Type Bio Ontology Study",
					"description": "Search API for 'Study' entry type"
				},
				{
					"name": "Type Bio Sam",
					"value": "Type Bio Sam",
					"description": "Search API for 'SAM Data' entry type"
				},
				{
					"name": "Type Bio Sf Pdb",
					"value": "Type Bio Sf Pdb",
					"description": "Search API for 'PDB Protein File' entry type"
				},
				{
					"name": "Type Bio Sra",
					"value": "Type Bio Sra",
					"description": "Search API for 'Sequence Read Archive' entry type"
				},
				{
					"name": "Type Bio Stockholm",
					"value": "Type Bio Stockholm",
					"description": "Search API for 'Stockholm File' entry type"
				},
				{
					"name": "Type Bio Taxonomy",
					"value": "Type Bio Taxonomy",
					"description": "Search API for 'Taxonomic Entry' entry type"
				},
				{
					"name": "Type Blogentry",
					"value": "Type Blogentry",
					"description": "Search API for 'Weblog Entry' entry type"
				},
				{
					"name": "Type Bolder Rental Housing",
					"value": "Type Bolder Rental Housing",
					"description": "Search API for 'Boulder Rental Housing' entry type"
				},
				{
					"name": "Type Bookmarks",
					"value": "Type Bookmarks",
					"description": "Search API for 'Bookmarks' entry type"
				},
				{
					"name": "Type Boston Crime",
					"value": "Type Boston Crime",
					"description": "Search API for 'Boston Crime' entry type"
				},
				{
					"name": "Type Boulder 2017 Election Contributions",
					"value": "Type Boulder 2017 Election Contributions",
					"description": "Search API for 'Boulder 2017 Election Contributions' entry type"
				},
				{
					"name": "Type Boulder Campaign Contributions",
					"value": "Type Boulder Campaign Contributions",
					"description": "Search API for 'Boulder Campaign Contributions' entry type"
				},
				{
					"name": "Type Boulder Consulting Services",
					"value": "Type Boulder Consulting Services",
					"description": "Search API for 'Boulder Consulting Services Database' entry type"
				},
				{
					"name": "Type Boulder County Voter Details",
					"value": "Type Boulder County Voter Details",
					"description": "Search API for 'Boulder County Voter Details' entry type"
				},
				{
					"name": "Type Boulder Crimes",
					"value": "Type Boulder Crimes",
					"description": "Search API for 'Boulder Crime Reports' entry type"
				},
				{
					"name": "Type Boulder Emails",
					"value": "Type Boulder Emails",
					"description": "Search API for 'Boulder Council Emails' entry type"
				},
				{
					"name": "Type Boulder Employee Salaries",
					"value": "Type Boulder Employee Salaries",
					"description": "Search API for 'Boulder Employee Salaries' entry type"
				},
				{
					"name": "Type Calendar",
					"value": "Type Calendar",
					"description": "Search API for 'Calendar' entry type"
				},
				{
					"name": "Type Campaign Donors",
					"value": "Type Campaign Donors",
					"description": "Search API for 'Campaign Donors' entry type"
				},
				{
					"name": "Type Campaign Expenditures",
					"value": "Type Campaign Expenditures",
					"description": "Search API for 'Campaign Expenditures' entry type"
				},
				{
					"name": "Type Cataloglink",
					"value": "Type Cataloglink",
					"description": "Search API for 'Catalog Link' entry type"
				},
				{
					"name": "Type Cdm Grid",
					"value": "Type Cdm Grid",
					"description": "Search API for 'Gridded Data File' entry type"
				},
				{
					"name": "Type Chatroom",
					"value": "Type Chatroom",
					"description": "Search API for 'Chat Room' entry type"
				},
				{
					"name": "Type Colorado Water Rights",
					"value": "Type Colorado Water Rights",
					"description": "Search API for 'Colorado Water Rights' entry type"
				},
				{
					"name": "Type Committee Donations",
					"value": "Type Committee Donations",
					"description": "Search API for 'Committee Donations' entry type"
				},
				{
					"name": "Type Community Datahub",
					"value": "Type Community Datahub",
					"description": "Search API for 'Data Hub' entry type"
				},
				{
					"name": "Type Community Resource",
					"value": "Type Community Resource",
					"description": "Search API for 'Facility' entry type"
				},
				{
					"name": "Type Construction Permits",
					"value": "Type Construction Permits",
					"description": "Search API for 'Construction Permits' entry type"
				},
				{
					"name": "Type Contact",
					"value": "Type Contact",
					"description": "Search API for 'Contact List' entry type"
				},
				{
					"name": "Type DB Co Indicators",
					"value": "Type DB Co Indicators",
					"description": "Search API for 'Colorado Health Indicators' entry type"
				},
				{
					"name": "Type Earth Satellite Landsat",
					"value": "Type Earth Satellite Landsat",
					"description": "Search API for 'Landsat Satellite Data' entry type"
				},
				{
					"name": "Type Faq",
					"value": "Type Faq",
					"description": "Search API for 'FAQ' entry type"
				},
				{
					"name": "Type Fec Pacs",
					"value": "Type Fec Pacs",
					"description": "Search API for 'FEC PACs' entry type"
				},
				{
					"name": "Type Feccandidates",
					"value": "Type Feccandidates",
					"description": "Search API for 'Candidates' entry type"
				},
				{
					"name": "Type Feed",
					"value": "Type Feed",
					"description": "Search API for 'RSS/ATOM Feed' entry type"
				},
				{
					"name": "Type File",
					"value": "Type File",
					"description": "Search API for 'File' entry type"
				},
				{
					"name": "Type Fits Data",
					"value": "Type Fits Data",
					"description": "Search API for 'FITS Data File' entry type"
				},
				{
					"name": "Type FTP",
					"value": "Type FTP",
					"description": "Search API for 'Remote FTP File View' entry type"
				},
				{
					"name": "Type Gadgets Countdown",
					"value": "Type Gadgets Countdown",
					"description": "Search API for 'Countdown' entry type"
				},
				{
					"name": "Type Gadgets Stock",
					"value": "Type Gadgets Stock",
					"description": "Search API for 'Stock Ticker' entry type"
				},
				{
					"name": "Type Gadgets Weather",
					"value": "Type Gadgets Weather",
					"description": "Search API for 'Weather' entry type"
				},
				{
					"name": "Type Gazeteer Census Tracts",
					"value": "Type Gazeteer Census Tracts",
					"description": "Search API for 'Census Tracts' entry type"
				},
				{
					"name": "Type Gazeteer Counties",
					"value": "Type Gazeteer Counties",
					"description": "Search API for 'Census Gazeteer Counties' entry type"
				},
				{
					"name": "Type Geo Ge",
					"value": "Type Geo Ge",
					"description": "Search API for 'GeoJson File' entry type"
				},
				{
					"name": "Type Geo Geotiff",
					"value": "Type Geo Geotiff",
					"description": "Search API for 'GeoTIFF' entry type"
				},
				{
					"name": "Type Geo Gpx",
					"value": "Type Geo Gpx",
					"description": "Search API for 'GPX GPS File' entry type"
				},
				{
					"name": "Type Geo Hdf 5",
					"value": "Type Geo Hdf 5",
					"description": "Search API for 'HDF5 File' entry type"
				},
				{
					"name": "Type Geo Kml",
					"value": "Type Geo Kml",
					"description": "Search API for 'KML/KMZ File' entry type"
				},
				{
					"name": "Type Geo Shapefile",
					"value": "Type Geo Shapefile",
					"description": "Search API for 'Shapefile' entry type"
				},
				{
					"name": "Type Geo Shapefile Fips",
					"value": "Type Geo Shapefile Fips",
					"description": "Search API for 'Shapefile with FIPS Code' entry type"
				},
				{
					"name": "Type Glossary",
					"value": "Type Glossary",
					"description": "Search API for 'Glossary' entry type"
				},
				{
					"name": "Type Gridaggregation",
					"value": "Type Gridaggregation",
					"description": "Search API for 'Grid Aggregation' entry type"
				},
				{
					"name": "Type Group",
					"value": "Type Group",
					"description": "Search API for 'Folder' entry type"
				},
				{
					"name": "Type Hipchat Group",
					"value": "Type Hipchat Group",
					"description": "Search API for 'HipChat Group' entry type"
				},
				{
					"name": "Type Homepage",
					"value": "Type Homepage",
					"description": "Search API for 'Home Page' entry type"
				},
				{
					"name": "Type Incident",
					"value": "Type Incident",
					"description": "Search API for 'Incident' entry type"
				},
				{
					"name": "Type Jeopardy",
					"value": "Type Jeopardy",
					"description": "Search API for 'Jeopardy' entry type"
				},
				{
					"name": "Type Latlonimage",
					"value": "Type Latlonimage",
					"description": "Search API for 'Lat-Lon Image' entry type"
				},
				{
					"name": "Type Lidar Collection",
					"value": "Type Lidar Collection",
					"description": "Search API for 'LiDAR Collection' entry type"
				},
				{
					"name": "Type Lidar Las",
					"value": "Type Lidar Las",
					"description": "Search API for 'LAS Lidar Data' entry type"
				},
				{
					"name": "Type Lidar Lvis",
					"value": "Type Lidar Lvis",
					"description": "Search API for 'LVIS Lidar Data' entry type"
				},
				{
					"name": "Type Link",
					"value": "Type Link",
					"description": "Search API for 'Link' entry type"
				},
				{
					"name": "Type Localfiles",
					"value": "Type Localfiles",
					"description": "Search API for 'Server Side Files' entry type"
				},
				{
					"name": "Type Locations",
					"value": "Type Locations",
					"description": "Search API for 'Locations' entry type"
				},
				{
					"name": "Type Map Googlemap",
					"value": "Type Map Googlemap",
					"description": "Search API for 'Google Map URL' entry type"
				},
				{
					"name": "Type Media Audiofile",
					"value": "Type Media Audiofile",
					"description": "Search API for 'Audio File' entry type"
				},
				{
					"name": "Type Media Imageloop",
					"value": "Type Media Imageloop",
					"description": "Search API for 'Image Loop' entry type"
				},
				{
					"name": "Type Media Photoalbum",
					"value": "Type Media Photoalbum",
					"description": "Search API for 'Photo Album' entry type"
				},
				{
					"name": "Type Media Video Channel",
					"value": "Type Media Video Channel",
					"description": "Search API for 'Video Channel' entry type"
				},
				{
					"name": "Type Media Video Quicktime",
					"value": "Type Media Video Quicktime",
					"description": "Search API for 'Quicktime Video' entry type"
				},
				{
					"name": "Type Media Youtubevideo",
					"value": "Type Media Youtubevideo",
					"description": "Search API for 'YouTube Video' entry type"
				},
				{
					"name": "Type Notes",
					"value": "Type Notes",
					"description": "Search API for 'Notes' entry type"
				},
				{
					"name": "Type Notes Jsonfile",
					"value": "Type Notes Jsonfile",
					"description": "Search API for 'Json File' entry type"
				},
				{
					"name": "Type Notes Note",
					"value": "Type Notes Note",
					"description": "Search API for 'Note' entry type"
				},
				{
					"name": "Type Notes Notebook",
					"value": "Type Notes Notebook",
					"description": "Search API for 'Notebook' entry type"
				},
				{
					"name": "Type Nwsfeed",
					"value": "Type Nwsfeed",
					"description": "Search API for 'NWS Forecast Feed' entry type"
				},
				{
					"name": "Type Opendaplink",
					"value": "Type Opendaplink",
					"description": "Search API for 'OPeNDAP Link' entry type"
				},
				{
					"name": "Type Owl Class",
					"value": "Type Owl Class",
					"description": "Search API for 'OWL Class' entry type"
				},
				{
					"name": "Type Owl Ontology",
					"value": "Type Owl Ontology",
					"description": "Search API for 'OWL Ontology' entry type"
				},
				{
					"name": "Type Pasteitentry",
					"value": "Type Pasteitentry",
					"description": "Search API for 'Paste Text Entry' entry type"
				},
				{
					"name": "Type Point Text",
					"value": "Type Point Text",
					"description": "Search API for 'Text Point Data' entry type"
				},
				{
					"name": "Type Police Stop Data",
					"value": "Type Police Stop Data",
					"description": "Search API for 'Police Stop Data' entry type"
				},
				{
					"name": "Type Poll",
					"value": "Type Poll",
					"description": "Search API for 'Poll' entry type"
				},
				{
					"name": "Type Project Campaign",
					"value": "Type Project Campaign",
					"description": "Search API for 'Campaign' entry type"
				},
				{
					"name": "Type Project Casestudy",
					"value": "Type Project Casestudy",
					"description": "Search API for 'Case Study' entry type"
				},
				{
					"name": "Type Project Contribution",
					"value": "Type Project Contribution",
					"description": "Search API for 'Research Contribution' entry type"
				},
				{
					"name": "Type Project Dataformat",
					"value": "Type Project Dataformat",
					"description": "Search API for 'Data Format' entry type"
				},
				{
					"name": "Type Project Dataset",
					"value": "Type Project Dataset",
					"description": "Search API for 'Dataset' entry type"
				},
				{
					"name": "Type Project Deployment",
					"value": "Type Project Deployment",
					"description": "Search API for 'Deployment' entry type"
				},
				{
					"name": "Type Project Experiment",
					"value": "Type Project Experiment",
					"description": "Search API for 'Experiment' entry type"
				},
				{
					"name": "Type Project Fieldnote",
					"value": "Type Project Fieldnote",
					"description": "Search API for 'Field Note' entry type"
				},
				{
					"name": "Type Project Gps Controlpoints",
					"value": "Type Project Gps Controlpoints",
					"description": "Search API for 'Control Points File' entry type"
				},
				{
					"name": "Type Project Gps Raw",
					"value": "Type Project Gps Raw",
					"description": "Search API for 'Raw GPS File' entry type"
				},
				{
					"name": "Type Project Gps Rinex",
					"value": "Type Project Gps Rinex",
					"description": "Search API for 'RINEX File' entry type"
				},
				{
					"name": "Type Project Instrument",
					"value": "Type Project Instrument",
					"description": "Search API for 'Instrument Data Collection' entry type"
				},
				{
					"name": "Type Project Learning Resource",
					"value": "Type Project Learning Resource",
					"description": "Search API for 'Teaching Resource' entry type"
				},
				{
					"name": "Type Project Meeting",
					"value": "Type Project Meeting",
					"description": "Search API for 'Meeting' entry type"
				},
				{
					"name": "Type Project Organization",
					"value": "Type Project Organization",
					"description": "Search API for 'Organization' entry type"
				},
				{
					"name": "Type Project Program",
					"value": "Type Project Program",
					"description": "Search API for 'Program' entry type"
				},
				{
					"name": "Type Project Project",
					"value": "Type Project Project",
					"description": "Search API for 'Project' entry type"
				},
				{
					"name": "Type Project Service",
					"value": "Type Project Service",
					"description": "Search API for 'Data Access Service' entry type"
				},
				{
					"name": "Type Project Site",
					"value": "Type Project Site",
					"description": "Search API for 'Site' entry type"
				},
				{
					"name": "Type Project Softwarepackage",
					"value": "Type Project Softwarepackage",
					"description": "Search API for 'Software Tool' entry type"
				},
				{
					"name": "Type Project Standard Name",
					"value": "Type Project Standard Name",
					"description": "Search API for 'Standard Parameter Name' entry type"
				},
				{
					"name": "Type Project Surveylocation",
					"value": "Type Project Surveylocation",
					"description": "Search API for 'Survey Location' entry type"
				},
				{
					"name": "Type Project Term",
					"value": "Type Project Term",
					"description": "Search API for 'Vocabulary Term' entry type"
				},
				{
					"name": "Type Project Visit",
					"value": "Type Project Visit",
					"description": "Search API for 'Site Visit' entry type"
				},
				{
					"name": "Type Project Vocabulary",
					"value": "Type Project Vocabulary",
					"description": "Search API for 'Vocabulary' entry type"
				},
				{
					"name": "Type Property Sales",
					"value": "Type Property Sales",
					"description": "Search API for 'Property Sales' entry type"
				},
				{
					"name": "Type Propertydb",
					"value": "Type Propertydb",
					"description": "Search API for 'Property Database' entry type"
				},
				{
					"name": "Type Python Notebook",
					"value": "Type Python Notebook",
					"description": "Search API for 'IPython Notebook file' entry type"
				},
				{
					"name": "Type Slack Team",
					"value": "Type Slack Team",
					"description": "Search API for 'Slack Team' entry type"
				},
				{
					"name": "Type Statusboard",
					"value": "Type Statusboard",
					"description": "Search API for 'Status Board' entry type"
				},
				{
					"name": "Type Sunrisesunset",
					"value": "Type Sunrisesunset",
					"description": "Search API for 'Sunrise/Sunset Display' entry type"
				},
				{
					"name": "Type Tasks",
					"value": "Type Tasks",
					"description": "Search API for 'Tasks' entry type"
				},
				{
					"name": "Type Tmdbmovies",
					"value": "Type Tmdbmovies",
					"description": "Search API for 'Tmdb Movies' entry type"
				},
				{
					"name": "Type Todo",
					"value": "Type Todo",
					"description": "Search API for 'Todo' entry type"
				},
				{
					"name": "Type Trip Event",
					"value": "Type Trip Event",
					"description": "Search API for 'Event' entry type"
				},
				{
					"name": "Type Trip Flight",
					"value": "Type Trip Flight",
					"description": "Search API for 'Flight Leg' entry type"
				},
				{
					"name": "Type Trip Hotel",
					"value": "Type Trip Hotel",
					"description": "Search API for 'Lodging' entry type"
				},
				{
					"name": "Type Trip Report",
					"value": "Type Trip Report",
					"description": "Search API for 'Trip Report' entry type"
				},
				{
					"name": "Type Trip Trip",
					"value": "Type Trip Trip",
					"description": "Search API for 'Trip' entry type"
				},
				{
					"name": "Type Type Awc Metar",
					"value": "Type Type Awc Metar",
					"description": "Search API for 'AWC Weather Observations' entry type"
				},
				{
					"name": "Type Type Biz Stockseries",
					"value": "Type Type Biz Stockseries",
					"description": "Search API for 'Stock Ticker Data' entry type"
				},
				{
					"name": "Type Type Bls Series",
					"value": "Type Type Bls Series",
					"description": "Search API for 'BLS Series' entry type"
				},
				{
					"name": "Type Type Bls Survey",
					"value": "Type Type Bls Survey",
					"description": "Search API for 'BLS Survey' entry type"
				},
				{
					"name": "Type Type Census Acs",
					"value": "Type Type Census Acs",
					"description": "Search API for 'US Census ACS Data' entry type"
				},
				{
					"name": "Type Type Daymet",
					"value": "Type Type Daymet",
					"description": "Search API for 'Daymet Daily Weather' entry type"
				},
				{
					"name": "Type Type DB Table",
					"value": "Type Type DB Table",
					"description": "Search API for 'Database Table' entry type"
				},
				{
					"name": "Type Type Document CSV",
					"value": "Type Type Document CSV",
					"description": "Search API for 'CSV File' entry type"
				},
				{
					"name": "Type Type Document Doc",
					"value": "Type Type Document Doc",
					"description": "Search API for 'Word File' entry type"
				},
				{
					"name": "Type Type Document HTML",
					"value": "Type Type Document HTML",
					"description": "Search API for 'HTML File' entry type"
				},
				{
					"name": "Type Type Document PDF",
					"value": "Type Type Document PDF",
					"description": "Search API for 'PDF File' entry type"
				},
				{
					"name": "Type Type Document Ppt",
					"value": "Type Type Document Ppt",
					"description": "Search API for 'Powerpoint File' entry type"
				},
				{
					"name": "Type Type Document Xls",
					"value": "Type Type Document Xls",
					"description": "Search API for 'Excel File' entry type"
				},
				{
					"name": "Type Type Drilsdown Casestudy",
					"value": "Type Type Drilsdown Casestudy",
					"description": "Search API for 'Drilsdown Case Study' entry type"
				},
				{
					"name": "Type Type Edgar Filing",
					"value": "Type Type Edgar Filing",
					"description": "Search API for 'SEC EDGAR Filing' entry type"
				},
				{
					"name": "Type Type Eia Category",
					"value": "Type Type Eia Category",
					"description": "Search API for 'EIA Category' entry type"
				},
				{
					"name": "Type Type Eia Series",
					"value": "Type Type Eia Series",
					"description": "Search API for 'EIA Series' entry type"
				},
				{
					"name": "Type Type Esri Featureserver",
					"value": "Type Type Esri Featureserver",
					"description": "Search API for 'ESRI Feature Server' entry type"
				},
				{
					"name": "Type Type Esri Geometryserver",
					"value": "Type Type Esri Geometryserver",
					"description": "Search API for 'ESRI Geometry Server' entry type"
				},
				{
					"name": "Type Type Esri Gpserver",
					"value": "Type Type Esri Gpserver",
					"description": "Search API for 'ESRI GP Server' entry type"
				},
				{
					"name": "Type Type Esri Imageserver",
					"value": "Type Type Esri Imageserver",
					"description": "Search API for 'ESRI Image Server' entry type"
				},
				{
					"name": "Type Type Esri Layer",
					"value": "Type Type Esri Layer",
					"description": "Search API for 'ESRI Layer' entry type"
				},
				{
					"name": "Type Type Esri Mapserver",
					"value": "Type Type Esri Mapserver",
					"description": "Search API for 'ESRI Map Server' entry type"
				},
				{
					"name": "Type Type Esri Restfolder",
					"value": "Type Type Esri Restfolder",
					"description": "Search API for 'ESRI Services Folder' entry type"
				},
				{
					"name": "Type Type Esri Restserver",
					"value": "Type Type Esri Restserver",
					"description": "Search API for 'ESRI Web Server' entry type"
				},
				{
					"name": "Type Type Esri Restservice",
					"value": "Type Type Esri Restservice",
					"description": "Search API for 'ESRI Rest Service' entry type"
				},
				{
					"name": "Type Type Extremes",
					"value": "Type Type Extremes",
					"description": "Search API for 'NOAA Extremes Data' entry type"
				},
				{
					"name": "Type Type Fred Category",
					"value": "Type Type Fred Category",
					"description": "Search API for 'FRED Category' entry type"
				},
				{
					"name": "Type Type Fred Series",
					"value": "Type Type Fred Series",
					"description": "Search API for 'FRED Series' entry type"
				},
				{
					"name": "Type Type Gtfs Agency",
					"value": "Type Type Gtfs Agency",
					"description": "Search API for 'Transit Agency' entry type"
				},
				{
					"name": "Type Type Gtfs Route",
					"value": "Type Type Gtfs Route",
					"description": "Search API for 'Transit Route' entry type"
				},
				{
					"name": "Type Type Gtfs Routes",
					"value": "Type Type Gtfs Routes",
					"description": "Search API for 'Transit Route Collection' entry type"
				},
				{
					"name": "Type Type Gtfs Stop",
					"value": "Type Type Gtfs Stop",
					"description": "Search API for 'Transit Stop' entry type"
				},
				{
					"name": "Type Type Gtfs Stops",
					"value": "Type Type Gtfs Stops",
					"description": "Search API for 'Transit Stop Collection' entry type"
				},
				{
					"name": "Type Type Gtfs Trip",
					"value": "Type Type Gtfs Trip",
					"description": "Search API for 'Transit Trip' entry type"
				},
				{
					"name": "Type Type Hazarddata",
					"value": "Type Type Hazarddata",
					"description": "Search API for 'Hazard Data' entry type"
				},
				{
					"name": "Type Type Hydro Colorado",
					"value": "Type Type Hydro Colorado",
					"description": "Search API for 'Colorado DNR Stream Gage' entry type"
				},
				{
					"name": "Type Type Idv Bundle",
					"value": "Type Type Idv Bundle",
					"description": "Search API for 'IDV Bundle' entry type"
				},
				{
					"name": "Type Type Image",
					"value": "Type Type Image",
					"description": "Search API for 'Image' entry type"
				},
				{
					"name": "Type Type Image Airport",
					"value": "Type Type Image Airport",
					"description": "Search API for 'Airport Image' entry type"
				},
				{
					"name": "Type Type Image Webcam",
					"value": "Type Type Image Webcam",
					"description": "Search API for 'Webcam' entry type"
				},
				{
					"name": "Type Type Mb",
					"value": "Type Type Mb",
					"description": "Search API for 'MB Bathymetry' entry type"
				},
				{
					"name": "Type Type Mb Collection",
					"value": "Type Type Mb Collection",
					"description": "Search API for 'Bathymetry Collection' entry type"
				},
				{
					"name": "Type Type Mb Point Basic",
					"value": "Type Type Mb Point Basic",
					"description": "Search API for 'Basic MB point file' entry type"
				},
				{
					"name": "Type Type Metameta Dictionary",
					"value": "Type Type Metameta Dictionary",
					"description": "Search API for 'Metadata Dictionary' entry type"
				},
				{
					"name": "Type Type Metameta Field",
					"value": "Type Type Metameta Field",
					"description": "Search API for 'Metadata Field' entry type"
				},
				{
					"name": "Type Type Nasaames",
					"value": "Type Type Nasaames",
					"description": "Search API for 'NASA AMES File' entry type"
				},
				{
					"name": "Type Type Ncss",
					"value": "Type Type Ncss",
					"description": "Search API for 'NetCDF Point Subset' entry type"
				},
				{
					"name": "Type Type Nitf",
					"value": "Type Type Nitf",
					"description": "Search API for 'NITF File' entry type"
				},
				{
					"name": "Type Type Point Ameriflux Level 2",
					"value": "Type Type Point Ameriflux Level 2",
					"description": "Search API for 'Ameriflux Level 2 CSV File' entry type"
				},
				{
					"name": "Type Type Point Amrc Final",
					"value": "Type Type Point Amrc Final",
					"description": "Search API for 'AMRC Final QC Data' entry type"
				},
				{
					"name": "Type Type Point Amrc Freewave",
					"value": "Type Type Point Amrc Freewave",
					"description": "Search API for 'AMRC Freewave  Data' entry type"
				},
				{
					"name": "Type Type Point Czo",
					"value": "Type Type Point Czo",
					"description": "Search API for 'CZO Display File Format' entry type"
				},
				{
					"name": "Type Type Point Gcnet",
					"value": "Type Type Point Gcnet",
					"description": "Search API for 'GC-Net Point Data' entry type"
				},
				{
					"name": "Type Type Point Geomag Iaga 2002",
					"value": "Type Type Point Geomag Iaga 2002",
					"description": "Search API for 'IAGA 2002 Geomagnetism Data' entry type"
				},
				{
					"name": "Type Type Point Hydro Waterml",
					"value": "Type Type Point Hydro Waterml",
					"description": "Search API for 'WaterML' entry type"
				},
				{
					"name": "Type Type Point Icebridge Atm Icessn",
					"value": "Type Type Point Icebridge Atm Icessn",
					"description": "Search API for 'ATM Ice SSN Data' entry type"
				},
				{
					"name": "Type Type Point Icebridge Atm Qfit",
					"value": "Type Type Point Icebridge Atm Qfit",
					"description": "Search API for 'ATM QFIT Data' entry type"
				},
				{
					"name": "Type Type Point Icebridge Mccords Irmcr 2",
					"value": "Type Type Point Icebridge Mccords Irmcr 2",
					"description": "Search API for 'McCords Irmcr2 Data' entry type"
				},
				{
					"name": "Type Type Point Icebridge Mccords Irmcr 3",
					"value": "Type Type Point Icebridge Mccords Irmcr 3",
					"description": "Search API for 'McCords Irmcr3 Data' entry type"
				},
				{
					"name": "Type Type Point Icebridge Paris",
					"value": "Type Type Point Icebridge Paris",
					"description": "Search API for 'Paris Data' entry type"
				},
				{
					"name": "Type Type Point Idv",
					"value": "Type Type Point Idv",
					"description": "Search API for 'IDV Point File' entry type"
				},
				{
					"name": "Type Type Point Inline",
					"value": "Type Type Point Inline",
					"description": "Search API for 'Inline Point File' entry type"
				},
				{
					"name": "Type Type Point Ncdc Climate",
					"value": "Type Type Point Ncdc Climate",
					"description": "Search API for 'NC  DC Climate Data' entry type"
				},
				{
					"name": "Type Type Point Netcdf",
					"value": "Type Type Point Netcdf",
					"description": "Search API for 'NetCDF Point File' entry type"
				},
				{
					"name": "Type Type Point Noaa Carbon",
					"value": "Type Type Point Noaa Carbon",
					"description": "Search API for 'NOAA Carbon Measurements' entry type"
				},
				{
					"name": "Type Type Point Noaa Flask Event",
					"value": "Type Type Point Noaa Flask Event",
					"description": "Search API for 'NOAA Flask Event Measurements' entry type"
				},
				{
					"name": "Type Type Point Noaa Flask Month",
					"value": "Type Type Point Noaa Flask Month",
					"description": "Search API for 'NOAA Flask Month Measurements' entry type"
				},
				{
					"name": "Type Type Point Noaa Madis",
					"value": "Type Type Point Noaa Madis",
					"description": "Search API for 'NOAA MADIS Point Data' entry type"
				},
				{
					"name": "Type Type Point Noaa Tower",
					"value": "Type Type Point Noaa Tower",
					"description": "Search API for 'NOAA Tower Network' entry type"
				},
				{
					"name": "Type Type Point Ocean Cnv",
					"value": "Type Type Point Ocean Cnv",
					"description": "Search API for 'SeaBird CNV Data' entry type"
				},
				{
					"name": "Type Type Point Ocean CSV Sado TTS",
					"value": "Type Type Point Ocean CSV Sado TTS",
					"description": "Search API for 'SADO TTS Data' entry type"
				},
				{
					"name": "Type Type Point Ocean CSV Sado Meteo",
					"value": "Type Type Point Ocean CSV Sado Meteo",
					"description": "Search API for 'SADO Meteo Data' entry type"
				},
				{
					"name": "Type Type Point Ocean CSV Sado Position",
					"value": "Type Type Point Ocean CSV Sado Position",
					"description": "Search API for 'SADO Position Data' entry type"
				},
				{
					"name": "Type Type Point Ocean Netcdf Glider",
					"value": "Type Type Point Ocean Netcdf Glider",
					"description": "Search API for 'NetCDF Glider Data' entry type"
				},
				{
					"name": "Type Type Point Ocean Netcdf Track",
					"value": "Type Type Point Ocean Netcdf Track",
					"description": "Search API for 'NetCDF Track Data' entry type"
				},
				{
					"name": "Type Type Point Ocean Ooi Dmgx",
					"value": "Type Type Point Ocean Ooi Dmgx",
					"description": "Search API for 'OOI Data' entry type"
				},
				{
					"name": "Type Type Point Openaq",
					"value": "Type Type Point Openaq",
					"description": "Search API for 'Open AQ Air Quality' entry type"
				},
				{
					"name": "Type Type Point Pbo Position Time Series",
					"value": "Type Type Point Pbo Position Time Series",
					"description": "Search API for 'PBO Position Time Series' entry type"
				},
				{
					"name": "Type Type Point Simple Records",
					"value": "Type Type Point Simple Records",
					"description": "Search API for 'Simple Records' entry type"
				},
				{
					"name": "Type Type Point Snotel",
					"value": "Type Type Point Snotel",
					"description": "Search API for 'SNOTEL Snow Data' entry type"
				},
				{
					"name": "Type Type Point Text",
					"value": "Type Type Point Text",
					"description": "Search API for 'Record Text File' entry type"
				},
				{
					"name": "Type Type Point Wsbb Ggp",
					"value": "Type Type Point Wsbb Ggp",
					"description": "Search API for 'Global Geodynamics GGP Format' entry type"
				},
				{
					"name": "Type Type Psd Monthly Climate Index",
					"value": "Type Type Psd Monthly Climate Index",
					"description": "Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type"
				},
				{
					"name": "Type Type Quandl Series",
					"value": "Type Type Quandl Series",
					"description": "Search API for 'QUANDL Series' entry type"
				},
				{
					"name": "Type Type Service Group",
					"value": "Type Type Service Group",
					"description": "Search API for 'Service Group' entry type"
				},
				{
					"name": "Type Type Service Link",
					"value": "Type Type Service Link",
					"description": "Search API for 'Service Link' entry type"
				},
				{
					"name": "Type Type Socrata Series",
					"value": "Type Type Socrata Series",
					"description": "Search API for 'SOCRATA Series' entry type"
				},
				{
					"name": "Type Type Sounding Cod",
					"value": "Type Type Sounding Cod",
					"description": "Search API for 'COD Sounding' entry type"
				},
				{
					"name": "Type Type Sounding Frd",
					"value": "Type Type Sounding Frd",
					"description": "Search API for 'FRD Sounding' entry type"
				},
				{
					"name": "Type Type Sounding Gsd",
					"value": "Type Type Sounding Gsd",
					"description": "Search API for 'GSD Sounding' entry type"
				},
				{
					"name": "Type Type Sounding Wyoming",
					"value": "Type Type Sounding Wyoming",
					"description": "Search API for 'UW Sounding' entry type"
				},
				{
					"name": "Type Type Tmy",
					"value": "Type Type Tmy",
					"description": "Search API for 'NREL TMY Data' entry type"
				},
				{
					"name": "Type Type Tweet",
					"value": "Type Type Tweet",
					"description": "Search API for 'Tweet' entry type"
				},
				{
					"name": "Type Type Usgs Gauge",
					"value": "Type Type Usgs Gauge",
					"description": "Search API for 'USGS Stream Gauge' entry type"
				},
				{
					"name": "Type Type Virtual",
					"value": "Type Type Virtual",
					"description": "Search API for 'Virtual Group' entry type"
				},
				{
					"name": "Type Type Wms Capabilities",
					"value": "Type Type Wms Capabilities",
					"description": "Search API for 'WMS Capabilities' entry type"
				},
				{
					"name": "Type Type Wms Layer",
					"value": "Type Type Wms Layer",
					"description": "Search API for 'WMS Layer' entry type"
				},
				{
					"name": "Type Ufo Sightings",
					"value": "Type Ufo Sightings",
					"description": "Search API for 'Ufo Sightings' entry type"
				},
				{
					"name": "Type Us Places",
					"value": "Type Us Places",
					"description": "Search API for 'US Places' entry type"
				},
				{
					"name": "Type Vote Yesno",
					"value": "Type Vote Yesno",
					"description": "Search API for 'Simple Yes-No Vote' entry type"
				},
				{
					"name": "Type Weblog",
					"value": "Type Weblog",
					"description": "Search API for 'Weblog' entry type"
				},
				{
					"name": "Type Wikipage",
					"value": "Type Wikipage",
					"description": "Search API for 'Wiki Page' entry type"
				}
			],
			"default": ""
		},
		...serviceMediaTabularExtractsheetDescription,
		...type2017BoulderElectionExpendituresDescription,
		...typeAnyDescription,
		...typeBeforeafterDescription,
		...typeBiblioDescription,
		...typeBioDicomDescription,
		...typeBioDicomTestDescription,
		...typeBioFastaDescription,
		...typeBioFastqDescription,
		...typeBioHmmerIndexDescription,
		...typeBioOmeTiffDescription,
		...typeBioOntologyAssayDescription,
		...typeBioOntologyCohortDescription,
		...typeBioOntologyPersonDescription,
		...typeBioOntologySampleDescription,
		...typeBioOntologySeriesDescription,
		...typeBioOntologyStudyDescription,
		...typeBioSamDescription,
		...typeBioSfPdbDescription,
		...typeBioSraDescription,
		...typeBioStockholmDescription,
		...typeBioTaxonomyDescription,
		...typeBlogentryDescription,
		...typeBolderRentalHousingDescription,
		...typeBookmarksDescription,
		...typeBostonCrimeDescription,
		...typeBoulder2017ElectionContributionsDescription,
		...typeBoulderCampaignContributionsDescription,
		...typeBoulderConsultingServicesDescription,
		...typeBoulderCountyVoterDetailsDescription,
		...typeBoulderCrimesDescription,
		...typeBoulderEmailsDescription,
		...typeBoulderEmployeeSalariesDescription,
		...typeCalendarDescription,
		...typeCampaignDonorsDescription,
		...typeCampaignExpendituresDescription,
		...typeCataloglinkDescription,
		...typeCdmGridDescription,
		...typeChatroomDescription,
		...typeColoradoWaterRightsDescription,
		...typeCommitteeDonationsDescription,
		...typeCommunityDatahubDescription,
		...typeCommunityResourceDescription,
		...typeConstructionPermitsDescription,
		...typeContactDescription,
		...typeDbCoIndicatorsDescription,
		...typeEarthSatelliteLandsatDescription,
		...typeFaqDescription,
		...typeFecPacsDescription,
		...typeFeccandidatesDescription,
		...typeFeedDescription,
		...typeFileDescription,
		...typeFitsDataDescription,
		...typeFtpDescription,
		...typeGadgetsCountdownDescription,
		...typeGadgetsStockDescription,
		...typeGadgetsWeatherDescription,
		...typeGazeteerCensusTractsDescription,
		...typeGazeteerCountiesDescription,
		...typeGeoGeDescription,
		...typeGeoGeotiffDescription,
		...typeGeoGpxDescription,
		...typeGeoHdf5Description,
		...typeGeoKmlDescription,
		...typeGeoShapefileDescription,
		...typeGeoShapefileFipsDescription,
		...typeGlossaryDescription,
		...typeGridaggregationDescription,
		...typeGroupDescription,
		...typeHipchatGroupDescription,
		...typeHomepageDescription,
		...typeIncidentDescription,
		...typeJeopardyDescription,
		...typeLatlonimageDescription,
		...typeLidarCollectionDescription,
		...typeLidarLasDescription,
		...typeLidarLvisDescription,
		...typeLinkDescription,
		...typeLocalfilesDescription,
		...typeLocationsDescription,
		...typeMapGooglemapDescription,
		...typeMediaAudiofileDescription,
		...typeMediaImageloopDescription,
		...typeMediaPhotoalbumDescription,
		...typeMediaVideoChannelDescription,
		...typeMediaVideoQuicktimeDescription,
		...typeMediaYoutubevideoDescription,
		...typeNotesDescription,
		...typeNotesJsonfileDescription,
		...typeNotesNoteDescription,
		...typeNotesNotebookDescription,
		...typeNwsfeedDescription,
		...typeOpendaplinkDescription,
		...typeOwlClassDescription,
		...typeOwlOntologyDescription,
		...typePasteitentryDescription,
		...typePointTextDescription,
		...typePoliceStopDataDescription,
		...typePollDescription,
		...typeProjectCampaignDescription,
		...typeProjectCasestudyDescription,
		...typeProjectContributionDescription,
		...typeProjectDataformatDescription,
		...typeProjectDatasetDescription,
		...typeProjectDeploymentDescription,
		...typeProjectExperimentDescription,
		...typeProjectFieldnoteDescription,
		...typeProjectGpsControlpointsDescription,
		...typeProjectGpsRawDescription,
		...typeProjectGpsRinexDescription,
		...typeProjectInstrumentDescription,
		...typeProjectLearningResourceDescription,
		...typeProjectMeetingDescription,
		...typeProjectOrganizationDescription,
		...typeProjectProgramDescription,
		...typeProjectProjectDescription,
		...typeProjectServiceDescription,
		...typeProjectSiteDescription,
		...typeProjectSoftwarepackageDescription,
		...typeProjectStandardNameDescription,
		...typeProjectSurveylocationDescription,
		...typeProjectTermDescription,
		...typeProjectVisitDescription,
		...typeProjectVocabularyDescription,
		...typePropertySalesDescription,
		...typePropertydbDescription,
		...typePythonNotebookDescription,
		...typeSlackTeamDescription,
		...typeStatusboardDescription,
		...typeSunrisesunsetDescription,
		...typeTasksDescription,
		...typeTmdbmoviesDescription,
		...typeTodoDescription,
		...typeTripEventDescription,
		...typeTripFlightDescription,
		...typeTripHotelDescription,
		...typeTripReportDescription,
		...typeTripTripDescription,
		...typeTypeAwcMetarDescription,
		...typeTypeBizStockseriesDescription,
		...typeTypeBlsSeriesDescription,
		...typeTypeBlsSurveyDescription,
		...typeTypeCensusAcsDescription,
		...typeTypeDaymetDescription,
		...typeTypeDbTableDescription,
		...typeTypeDocumentCsvDescription,
		...typeTypeDocumentDocDescription,
		...typeTypeDocumentHtmlDescription,
		...typeTypeDocumentPdfDescription,
		...typeTypeDocumentPptDescription,
		...typeTypeDocumentXlsDescription,
		...typeTypeDrilsdownCasestudyDescription,
		...typeTypeEdgarFilingDescription,
		...typeTypeEiaCategoryDescription,
		...typeTypeEiaSeriesDescription,
		...typeTypeEsriFeatureserverDescription,
		...typeTypeEsriGeometryserverDescription,
		...typeTypeEsriGpserverDescription,
		...typeTypeEsriImageserverDescription,
		...typeTypeEsriLayerDescription,
		...typeTypeEsriMapserverDescription,
		...typeTypeEsriRestfolderDescription,
		...typeTypeEsriRestserverDescription,
		...typeTypeEsriRestserviceDescription,
		...typeTypeExtremesDescription,
		...typeTypeFredCategoryDescription,
		...typeTypeFredSeriesDescription,
		...typeTypeGtfsAgencyDescription,
		...typeTypeGtfsRouteDescription,
		...typeTypeGtfsRoutesDescription,
		...typeTypeGtfsStopDescription,
		...typeTypeGtfsStopsDescription,
		...typeTypeGtfsTripDescription,
		...typeTypeHazarddataDescription,
		...typeTypeHydroColoradoDescription,
		...typeTypeIdvBundleDescription,
		...typeTypeImageDescription,
		...typeTypeImageAirportDescription,
		...typeTypeImageWebcamDescription,
		...typeTypeMbDescription,
		...typeTypeMbCollectionDescription,
		...typeTypeMbPointBasicDescription,
		...typeTypeMetametaDictionaryDescription,
		...typeTypeMetametaFieldDescription,
		...typeTypeNasaamesDescription,
		...typeTypeNcssDescription,
		...typeTypeNitfDescription,
		...typeTypePointAmerifluxLevel2Description,
		...typeTypePointAmrcFinalDescription,
		...typeTypePointAmrcFreewaveDescription,
		...typeTypePointCzoDescription,
		...typeTypePointGcnetDescription,
		...typeTypePointGeomagIaga2002Description,
		...typeTypePointHydroWatermlDescription,
		...typeTypePointIcebridgeAtmIcessnDescription,
		...typeTypePointIcebridgeAtmQfitDescription,
		...typeTypePointIcebridgeMccordsIrmcr2Description,
		...typeTypePointIcebridgeMccordsIrmcr3Description,
		...typeTypePointIcebridgeParisDescription,
		...typeTypePointIdvDescription,
		...typeTypePointInlineDescription,
		...typeTypePointNcdcClimateDescription,
		...typeTypePointNetcdfDescription,
		...typeTypePointNoaaCarbonDescription,
		...typeTypePointNoaaFlaskEventDescription,
		...typeTypePointNoaaFlaskMonthDescription,
		...typeTypePointNoaaMadisDescription,
		...typeTypePointNoaaTowerDescription,
		...typeTypePointOceanCnvDescription,
		...typeTypePointOceanCsvSadoTtsDescription,
		...typeTypePointOceanCsvSadoMeteoDescription,
		...typeTypePointOceanCsvSadoPositionDescription,
		...typeTypePointOceanNetcdfGliderDescription,
		...typeTypePointOceanNetcdfTrackDescription,
		...typeTypePointOceanOoiDmgxDescription,
		...typeTypePointOpenaqDescription,
		...typeTypePointPboPositionTimeSeriesDescription,
		...typeTypePointSimpleRecordsDescription,
		...typeTypePointSnotelDescription,
		...typeTypePointTextDescription,
		...typeTypePointWsbbGgpDescription,
		...typeTypePsdMonthlyClimateIndexDescription,
		...typeTypeQuandlSeriesDescription,
		...typeTypeServiceGroupDescription,
		...typeTypeServiceLinkDescription,
		...typeTypeSocrataSeriesDescription,
		...typeTypeSoundingCodDescription,
		...typeTypeSoundingFrdDescription,
		...typeTypeSoundingGsdDescription,
		...typeTypeSoundingWyomingDescription,
		...typeTypeTmyDescription,
		...typeTypeTweetDescription,
		...typeTypeUsgsGaugeDescription,
		...typeTypeVirtualDescription,
		...typeTypeWmsCapabilitiesDescription,
		...typeTypeWmsLayerDescription,
		...typeUfoSightingsDescription,
		...typeUsPlacesDescription,
		...typeVoteYesnoDescription,
		...typeWeblogDescription,
		...typeWikipageDescription
                ],
        };
}
