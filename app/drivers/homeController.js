angular.module('myApp').controller('HomeController',[
  '$scope', '$rootScope', 'LoginService', function HomeController($scope, $rootScope, LoginService) {
    $scope.user = $rootScope.userName;
    LoginService.currentLogin$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        $scope.ping = "subscribed"
      }
    })
    $scope.getAuth = function(){
      LoginService.getValue()
    }
  }
]);