// Main Controller
'use strict'

app.controller('MainCtrl', ['$scope','elasticClient','elasticFunc','uiGridConstants',function ($scope, elasticClient, elasticFunc, uiGridConstants) {
	var mappingObj = {
			info: {
				mappingsList: undefined,
				currentMapping: undefined,
				selectedMapping: undefined,
				currentIndex: 'rubrique_metier_dev'
			}
		},
		list_fields_to_columns = [],
		getMappingCallback = function (error, resp) {
			list_fields_to_columns = $.map(resp[mappingObj.info.currentIndex].mappings, function (value, index) {
				// return [{id: index, name: index, field: index}];
				return [{
					name: index,
					displayName: index,
					enableFiltering: true,
					enableSorting: true,
					type: 'string',
					width: '175'
				}];
			});
			$scope.rubriquesGrid.columnDefs = list_fields_to_columns;
		},
		client = elasticClient.getClient('http://localhost:9200'),
		columns = [];
	
	elasticFunc.getMapping(client, mappingObj.info.currentIndex, getMappingCallback);

	$scope.toggle = {
		rubriques: false,
		users: false,
		thematiques_bp: false
	};

	$scope.toggleRubriques = function () {
		$scope.toggle.rubriques = !$scope.toggle.rubriques;
	};

	$scope.toggleUsers = function () {
		$scope.toggle.users = !$scope.toggle.users;	
	};

	$scope.toggleThematiquesBP = function () {
		$scope.toggle.thematiques_bp = !$scope.toggle.thematiques_bp;
	};

	$scope.rubriquesGrid = {
		enablePinning: true,
		enableSelectAll: true,

		paginationPageSizes: [25, 50, 100],
		paginationPageSize: 25,
		enableGridMenu: true,
		enableFiltering: true,
		useExternalFiltering: false,
		rowEditWaitInterval: -1,
		enableCellEdit: false,
		enableCellEditOnFocus: false,
		exporterMenuPdf: false,

		//columnDefs: list_fields_to_columns,

		onRegisterApi: function (gridApi) {
			$scope.boErRubriquesGridApi = gridApi;
		}
	};

	$scope.filter = { enabled: false };
	$scope.$watchCollection('indexVM.results.hits.hits', function () {
		if ($scope.indexVM && $scope.indexVM.results && $scope.indexVM.results.hits) {
			$scope.indexVM.results.hits.hits.forEach(function (element) {
				$scope.rubriquesGrid.data.push(element._source);
			});
		}
	});
}]);