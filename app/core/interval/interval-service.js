'use strict';

angular.module('core.interval', [])
  .factory('intervalService', ['$http','$interval','anotherService', function($http, $interval, anotherService) {
    let intervalId;
    console.log('invo interval sv', anotherService)
    let data = []

    $http.get('phones/phones.json').then(response => {
      data = response.data;
    });
    return {
      // sau mỗi giây sẽ gọi đến function next  ở  anotherService với params là index ++, 
      start: function(anotherService) {
        let index = 0;
        intervalId = $interval(() => {
          if(typeof data[index] !== 'undefined' ) {
            console.log('hahhahaha', data[index])
            anotherService.next(data[index].id);
          } else {
            $interval.cancel(intervalId);
          }
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
