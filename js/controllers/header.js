// Header Controller
'use strict'

app.controller('HeaderCtrl', ['$scope', 
	function ($scope) {
		$scope.switchDisplayContent = {
			status: true
		};

		$scope.displayContent = function () {
			$("div.panel-body").each(function () {
				if ($scope.switchDisplayContent.status) {
					$(this).slideDown();
				} else {
					$(this).slideUp();
				}
			});
		};
	}
]);