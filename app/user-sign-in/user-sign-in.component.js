'use strict';

angular.
  module('userSignIn').
  component('userSignIn', {
    templateUrl: 'user-sign-in/user-sign-in.template.html',
    controller: ['$scope', '$location',
      function UserSignInController($scope, $location) {
        $scope.userName = '';
        $scope.phoneNumer = '';
        // Save data on Local Storage
        $scope.myFunc = function () {
          localStorage.setItem('phonecatApp.passengerName', $scope.userName);
          localStorage.setItem('phonecatApp.passengerPhone', $scope.phoneNumber);
          $location.path('/passenger');
        };
      }
    ]
});
