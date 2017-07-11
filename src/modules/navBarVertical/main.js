'use strict'
var angular = require('angular');

  module.exports = angular.module('app.navbarVertical',[
    'ui.router',
    require('angular-sanitize'),
    require('angular-translate')
]).config(['$stateProvider', '$translateProvider','localeProvider', function($stateProvider, $translateProvider,localeProvider) {

    /***** i18n Configuration *****/
    localeProvider.init(require.context('./i18n/', false, /.js$/));
    /***** i18n Configuration *****/
}]);

var loadFiles = require.context('./js', true, /.js$/);
for (var i = 0; i < loadFiles.keys().length; i++) {
    loadFiles(loadFiles.keys()[i]);
}
require("./css/main.less");