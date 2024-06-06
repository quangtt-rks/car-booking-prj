'use strict';

angular.
    module('core.busData').
    factory('BusData', ['$resource', 'rx',
        function($resource, rx) {
            var subject = new rx.Subject(); 
            var isOrdered = false;

            var busDataResource = $resource('buses/data.json', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });

            busDataResource.fetchDump = function () {
                return isOrdered;
            }

            busDataResource.set = function (d) {
                isOrdered = d;
                subject.onNext(d);
            }

            busDataResource.subscribe = function (o) {
                return subject.subscribe(o);
            }

            return busDataResource;
        }]);
