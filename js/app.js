// Main App Angular Module
var app = angular.module('appModule', [
	'elasticui',
	'ngJsonExplorer',
	'ui.bootstrap',
	'toggle-switch',
	'ui.grid',
	'ui.grid.resizeColumns',
	'ui.grid.cellNav',
	'ui.grid.autoResize',
	'ui.grid.pagination',
	'ui.grid.edit',
	'ui.grid.rowEdit',
	'ui.grid.selection',
	'ui.grid.grouping',
	'ui.grid.exporter',
	'ui.grid.pinning']).constant('euiHost', 'http://localhost:9200');