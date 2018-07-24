var Ng1AppModule = angular.module('myApp', [
    'ngRoute', 'myApp.search', 'myApp.list'
]);
Ng1AppModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: '/search'});
    $locationProvider.html5Mode(true);
}]);

require('./bower_components/bootstrap/dist/css/bootstrap.css');
require('./search/search');
require('./list/list');
