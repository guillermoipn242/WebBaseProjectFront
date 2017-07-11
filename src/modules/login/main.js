var angular = require('angular');
var router = require('angular-ui-router');

/**
 * @ngdoc overview
 * @name app.login
 * @requires angular-route
 * @requires angular-sanitize
 * @requires angular-translate
 * @description
 * This is the aplication's main module login.
 * In here do require the i18n files and they handle the routes of the application.
 */


module.exports = angular.module('app.login', [
    require('angular-sanitize'),
    require('angular-translate'),
    router.default
]).config(['$stateProvider', '$translateProvider', 'localeProvider', function($stateProvider, $translateProvider, localeProvider) {

    /***** i18n Configuration *****/
    localeProvider.init(require.context('./i18n/', false, /.js$/));
    /***** i18n Configuration *****/

    $stateProvider.state("login", {
        url: "/login",
        template: require("./views/login.html"),
        controller: "loginCtrl"
    });
}]);


var loadFiles = require.context('./js', true, /.js$/);
for (var i = 0; i < loadFiles.keys().length; i++) {
    loadFiles(loadFiles.keys()[i]);
}
require('./css/index.less');