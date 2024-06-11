'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/schedules', {
          template: '<schedule-list></schedule-list>'
        }).
        when('/passenger', {
          template: '<passenger-form></passenger-form>'
        }).
        when('/users', {
          template: '<user-login></user-login>'
        }).
        when('/users/index', {
          template: '<static-page></static-page>'
        })
        // otherwise('/phones');
    }
  ]);
