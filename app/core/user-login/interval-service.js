'use strict';

angular.module('core.intervalService', [])
  .factory('intervalService', ['$interval','anotherService', function($interval, anotherService) {
    let intervalId;
    console.log('invo interval sv', anotherService)

    return {
      start: function(anotherService) {
        let index = 0;
        intervalId = $interval(() => {
          anotherService.next(index);
          index++;
        }, 1000);
      },
      stop: function() {
        if (intervalId) {
          $interval.cancel(intervalId);
        }
      }
    };
  }]);
