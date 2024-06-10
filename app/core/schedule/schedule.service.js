'use strict';

angular.
  module('core.schedule').
  factory('Schedule', ['$http',
    function($http) {
      var scheduleSubject = new rxjs.BehaviorSubject([]);

      function fetchData() {
        $http.get('schedules/schedules.json').then(function(response) {
          scheduleSubject.next(response.data);
        });
      }

      fetchData(); // call fetchData when service init.

      return {
        schedules$: scheduleSubject.asObservable(),

        fetchNextPage: function() {
          fetchData(); // call fetchData when next page.
        }
      };
    }
  ]
);
