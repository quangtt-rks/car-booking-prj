'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('staticPage').
  component('staticPage', {
    templateUrl: 'static/static-page.template.html',
    controller: ['$scope', 'userLogin', '$location',
      function staticPageController($scope,  userLogin, $location) {
        
        // $scope.ping = ''
        // userLogin.currentLogin$.subscribe((isAuthenticated) => {
        //   if (isAuthenticated) {
        //     window.alert("Hello A Thinhdzz")
        //     $location.path('/passenger');
        //   } else {
        //     $location.path('/passenger')
        //     window.alert("Hello bro hehehehehe");
        //   }
        // })
        
        /**
         * Given a JSON file
         * {
         *   text: [
         *     // 50 random string
         *   ]
         * }
         * 
         * After login, at every second, display strings 0..N-1 to the view.
         * Target: 16:00
         */
        // $scope.getAuth = function(){
        //   userLogin.getValue()
        // }
        /**
         * A service called IntervalService
         * when call IntervalService.start(anotherService) it will trigger anotherService.next() every 1 seconds
         * 
         * UI: 1 button Start, which trigger intervalService.start(anotherService)
         */

        // $scope.displayedStrings = [];
        // userLogin.strings$.subscribe(strings => {
        //   $scope.displayedStrings = strings
        //   console.log(strings); // Log the received strings
        //   let index = 0;

        //   const intervalId = setInterval(() => {
        //       if (index < strings.length) {
        //           $scope.$apply(() => {
        //               $scope.displayedStrings.push(strings[index]);
        //               console.log('push', strings[index])
        //               index++;
        //           });
        //       } else {
        //           clearInterval(intervalId); 
        //       }
        //   }, 1000);
        // });

      }
    ]
  });
