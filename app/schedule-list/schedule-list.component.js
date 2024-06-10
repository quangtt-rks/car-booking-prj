'use strict';

angular.
  module('scheduleList').
  component('scheduleList', {
    templateUrl: 'schedule-list/schedule-list.template.html',
    controller: ['Schedule',
      function ScheduleListController(Schedule) {
        var vm = this;

        console.log(vm)

        var pageSize = 10;
        vm.currentPage = 1;
        vm.orderProp = 'line';
        vm.totalPages = 0;
        vm.searchKeyword = '';

        function fetchPageData() {
          var filteredSchedules = vm.schedules.filter(function(schedule) {
              return schedule.line.toLowerCase().includes(vm.searchKeyword.toLowerCase());
          });
      
          var startIndex = (vm.currentPage - 1) * pageSize;
          var endIndex = startIndex + pageSize;
          vm.currentPageSchedules = filteredSchedules.slice(startIndex, endIndex);
        }

        vm.search = function() {
          fetchPageData();
        };

        // Subscribe to the schedule data stream
        var scheduleSubscription = Schedule.schedules$.subscribe(function(schedules) {
          vm.schedules = schedules;
          vm.totalPages = Math.ceil(vm.schedules.length / pageSize);
          fetchPageData();
        });

        vm.nextPage = function() {
          if (vm.currentPage < vm.totalPages) {
            vm.currentPage++;
            fetchPageData();
          }
        };

        vm.previousPage = function() {
          if (vm.currentPage > 1) {
            vm.currentPage--;
            fetchPageData();
          }
        };

        vm.$onDestroy = function() {
          scheduleSubscription.unsubscribe();
        };
      }
    ]
  }
);
