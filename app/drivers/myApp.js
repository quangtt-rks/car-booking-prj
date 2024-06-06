const myApp = angular.module('myApp', ['ui.router']);

myApp.factory('rxjsFactory', function() {
  return rxjs; // Expose RxJS library
});

myApp.run(function($rootScope, $location, $state, LoginService) { // TODO: add LoginService
    console.clear();
    console.log('running');
  if(!LoginService.isAuthenticated()) {
      $state.transitionTo('login');
    }
});

myApp.config(['$stateProvider', '$urlRouterProvider', 
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url : '/login',
      templateUrl : 'login.html',
      controller : 'LoginController'
    })
    .state('home', {
      url : '/home',
      templateUrl : 'home.html',
      controller : 'HomeController'
    });
    
      $urlRouterProvider.otherwise('/login');
}]);


export default myApp