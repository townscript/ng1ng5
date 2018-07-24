'use strict';

var SearchModule = angular.module('myApp.search', ['ngRoute', 'api']);

SearchModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/search', {
        templateUrl: '/search/search.html',
        controller: 'searchCtrl',
        controllerAs: 'searchVM'
    });
}]);

SearchModule.controller('searchCtrl', ['ApiService', function(ApiService) {

    var vm = this;
    vm.event = undefined;
    vm.showEvent = showEvent;

    //////////////////////////////////

    function showEvent() {
        vm.event = ApiService.loadEvent(vm.eventId);
    }
}]);

require('../services/api.service');
