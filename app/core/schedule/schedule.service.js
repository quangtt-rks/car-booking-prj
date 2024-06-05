'use strict';

angular.
  module('core.schedule').
  factory('Schedule', ['$resource',
    function($resource) {
      return $resource('schedules/schedules.json', {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]
);
