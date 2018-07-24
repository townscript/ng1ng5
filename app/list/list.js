'use strict';

var ListModule = angular.module('myApp.list', ['ngRoute', 'api']);

ListModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: '/list/list.html',
        controller: 'listCtrl',
        controllerAs: 'listVM'
    });
}]);

ListModule.controller('listCtrl', ['ApiService', function(ApiService) {

    var vm = this;
    vm.eventList = [];

    vm.eventList = ApiService.loadAllEvents();
}]);

require('../services/api.service');
