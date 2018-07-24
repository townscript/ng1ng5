'use strict';

var ApiService = angular.module('api', []);
ApiService.service('ApiService', ApiServiceFn);

ApiServiceFn.$inject = [];

function ApiServiceFn() {

    var events = [
        {
            id: 1,
            name: 'Event 1',
            desc: 'This is description for Event 1'
        },
        {
            id: 2,
            name: 'Event 2',
            desc: 'This is description for Event 2'
        },
        {
            id: 3,
            name: 'Event 3',
            desc: 'This is description for Event 3'
        },
        {
            id: 4,
            name: 'Event 4',
            desc: 'This is description for Event 4'
        }
    ];

    this.loadAllEvents = function () {
        return events;
    };

    this.loadEvent = function(id) {
        return _.filter(events, function(event) {
            return event.id === id;
        })[0];
    }
}

require('../bower_components/lodash/lodash');
