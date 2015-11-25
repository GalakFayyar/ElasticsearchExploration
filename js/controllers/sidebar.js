// Sidebar Controller
'use strict'

app.controller('SidebarCtrl', ['$scope', 
	function ($scope) {
		$scope.day = {value: moment().locale('fr')};

		$scope.$watch('day.value', function () {
			$scope.ejs.MatchQuery('date_modification', $scope.day.value.format('YYYY-MM-DD'));
		});
	}
]);