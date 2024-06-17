'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        // when('/phones', {
        //   template: '<phone-list></phone-list>'
        // }).
        // when('/phones/:phoneId', {
        //   template: '<phone-detail></phone-detail>'
        // }).
        when('/schedules', {
          template: '<schedule-list></schedule-list>'
        }).
        when('/passenger', {
          template: '<passenger-form></passenger-form>'
        }).
        when('/users/sign_in', {
          template: '<user-sign-in></user-sign-in>'
        }).
        otherwise('/users/sign_in');
    }
  ]);
