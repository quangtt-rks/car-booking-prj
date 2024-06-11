'use strict';

angular.
  module('userLogin').
  component('userLogin', {
    templateUrl: 'user-login/user-login.template.html',
    controller: ['$scope', '$location', 'userLogin',
      function UserLoginController($scope, $location, userLogin) {
        $scope.userName = '';
        $scope.phoneNumber = '';

        // userLogin.currentLogin$.subscribe((isAuthenticated) => {
        //   if (isAuthenticated) {
        //     console.log('hahah')
        //   }
        //   console.log('hihiihi')
        // })

        $scope.myFunc = function() {
          userLogin.login($scope.userName, $scope.phoneNumber)
          localStorage.setItem('phonecatApp.passengerName', $scope.userName);
          localStorage.setItem('phonecatApp.passengerPhone', $scope.phoneNumber);
          $location.path('/users/index');
        };
      }
    ]
  });
