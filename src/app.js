var angular = require('angular');

/* Modules for bootstrap */
require('bootstrap-webpack!../conf/bootstrap.config.js');
var $ = require('jquery');

/*$(function() {
    var $header = $('#header');
    $('#nav').affix({
        offset: {
            top: function() {
                return $header.offset().top + $header.outerHeight(true);
            }
        }
    });
});*/


/**
 * @ngdoc overview
 * @name app
 * @requires angular-route
 * @requires angular-sanitize
 * @requires angular-translate
 * @description
 * This is the aplication's main module.
 * Additionally this module depens from the all modules contained in the /src/modules path.
 */

var app = angular.module('app', [
    require('angular-material'),
    require('angular-translate'),
    require('angular-sanitize'),
    require('angular-ui-router').default
].concat(getModuleDependencies()));

app.config(['$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    'localeProvider',
    function(
        $stateProvider,
        $locationProvider,
        $urlRouterProvider,
        localeProvider
    ) {

        /***** i18n Configuration *****/
        localeProvider.init(require.context('./i18n/', false, /.js$/));
        /***** i18n Configuration *****/

        /***** routes Configuration *****/
        //$locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/login');
    }
]);

/**
 * @ngdoc function
 * @name app.function:getModuleDependencies
 * @description
 * Descripción del metodo
 * @param {undefined} This function does not get parameters.
 * @returns {undefined} It doesn't return
 */

function getModuleDependencies() {
    var moduleDependency = [];
    var loadModules = require.context('./modules/', true, /main.js$/);
    for (var i = 0; i < loadModules.keys().length; i++) {
        moduleDependency.push(loadModules(loadModules.keys()[i]).name);
        console.log((loadModules.keys()[i]).name);
    }
    return moduleDependency;
}

//require('./css/index.scss');

/**
 * @ngdoc overview
 * @name angular-translate
 * @description 
 * Description
 * * For more information - {@link https://angular-translate.github.io/ angular-transalte}
 */

/**
 * @ngdoc overview
 * @name angular-sanitize
 * @description 
 * Description
 * * For more information - {@link https://docs.angularjs.org/api/ngSanitize angular-sanitize}
 */

/**
 * @ngdoc overview
 * @name angular-route
 * @description 
 * Description
 * * For more information - {@link https://docs.angularjs.org/api/ngRoute angular-route}
 */