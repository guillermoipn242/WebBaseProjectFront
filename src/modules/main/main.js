var angular = require('angular');

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


module.exports = angular.module('app.main', [
    'ui.router',
    require('angular-sanitize'),
    require('angular-translate')
]).config(['$stateProvider', '$translateProvider','localeProvider', function($stateProvider, $translateProvider,localeProvider) {

    /***** i18n Configuration *****/
    localeProvider.init(require.context('./i18n/', false, /.js$/));
    /***** i18n Configuration *****/

    $stateProvider.state("main", {
        url: "/main",
        views: {
            '':{
                template: require("./views/main.html"),
                controller: 'mainCtrl'
            },
            'navbar@main':{
                template: require("./views/navbarVertical.html"),
                controller: 'mainCtrl'
            },
            'body@main':{
                template: require("./views/body.html"),
                controller: 'mainCtrl'
            }
        }
    });

    $stateProvider.state("main.change", {
        url: "/change",
        template: require("./views/test.html"),
        controller: 'mainCtrl'
    });
    /*$stateProvider.state("main", {
        url: '/main',
        views: {
            '':{
                template: require("./views/main.html"),
                controller: 'mainCtrl'
            },
            'change@main':{
                template: require("./views/test.html"),
                controller: 'mainCtrl'
            }
        }
});*/
}]);


var loadFiles = require.context('./js', true, /.js$/);
for (var i = 0; i < loadFiles.keys().length; i++) {
    loadFiles(loadFiles.keys()[i]);
}
require('./css/index.less');