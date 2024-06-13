'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('staticPage').
  component('staticPage', {
    templateUrl: 'static/static-page.template.html',
    controller: ['$scope', '$location', 'staticPageService', 'intervalService', 'anotherService', 'userLogin',
      function staticPageController($scope, $location,  staticPageService, intervalService, anotherService, userLogin) {
        
        $scope.ping = ''
        userLogin.currentLogin$.subscribe((isAuthenticated) => {
          console.log('login login here')
          if (isAuthenticated) {
            $location.path('/passenger');
            window.alert("Hello A Thinhdzz")
          } else {
            $location.path('/passenger')
            window.alert("Hello bro hehehehehe");
          }
        })

        $scope.getAuth = function(){
          userLogin.getValue()
        }
        
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
        $scope.displayedStrings = [];
        //subscribe là một phương thức dùng để đăng ký (hoặc lắng nghe) các sự kiện hoặc dữ liệu được phát ra từ một Observable
        staticPageService.phoneArr.subscribe(phone => {
          console.log('call sv static p')
          if(phone.length > 0) {
            $scope.displayedStrings.push(phone);
          }
        });

        // khi bấm vào start trên màn hình sẽ gọi đến function startInterval ở intervalService
        $scope.startInterval = function() {
          console.log('click start interval service')
          intervalService.start(anotherService);
        }

        $scope.stopInterval = function() {
          console.log('click stop interval service')
          intervalService.stop(anotherService);
        }

      }
    ]
  });
