angular.module('myApp').controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login Sample";
    $scope.username = '';
    $scope.password = '';
    
    $scope.formSubmit = function() {
      
      if(LoginService.login($scope.username, $scope.password)) {
        $rootScope.userName = $scope.username;
        $scope.error = '';
        $state.transitionTo('home');
        var loginInfo = {
          username: $scope.username,
          password: $scope.password
        };
        localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };

  });