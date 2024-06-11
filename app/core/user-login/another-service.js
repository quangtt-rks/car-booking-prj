'use strict';

angular.module('core.anotherService', [])
  .factory('anotherService', ['userLogin', function(userLogin) {
    return {
      next: function(index) {
        // Phát chuỗi mới từ userLogin.strings$
        console.log('next')
        userLogin.strings$.next(`String ${index + 1}`);
      }
    };
  }]);
