'use strict';

angular.module('core.anotherService', [])
  .factory('anotherService', ['userLogin', function(userLogin) {
    return {
      next: function(phoneID) {
        // bắn tín hiệu với giá trị là in phone id trong phone.js
        userLogin.strings$.next(phoneID);
        //userLogin.strings$ BehaviorSubject đã được khởi tạo trước đó trong ứng dụng của bạn.
        // next được sử dụng để phát ra giá trị mới từ một BehaviorSubject thay đổi.
      }
    };
  }]);
