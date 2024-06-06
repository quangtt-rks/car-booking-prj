'use strict';

angular.
  module('userLogin').
  component('userLogin', {
    templateUrl: 'user-login/user-login.template.html',
    controller: ['$scope', '$location',
      function UserLoginController($scope, $location) {
        $scope.userName = ''
        $scope.phoneNumer = ''
        // save data on localsotrage
        $scope.myFunc = function () {
          localStorage.setItem('phonecatApp.passengerName', $scope.userName);
          localStorage.setItem('phonecatApp.passengerPhone', $scope.phoneNumber);
          $location.path('/passenger');
        }
      }
    ]
});