'use strict';

angular.
  module('scheduleList').
  component('scheduleList', {
    templateUrl: 'schedule-list/schedule-list.template.html',
    controller: ['Schedule',
      function ScheduleListController(Schedule) {
        var vm = this;

        var pageSize = 10;
        vm.currentPage = 1;
        vm.orderProp = 'line';

        Schedule.query(function(data) {
          vm.schedules = data;
        });

        vm.numberOfPages = function() {
          return Math.ceil(vm.schedules.length / pageSize);
        };

        vm.getCurrentPageSchedules = function() {
          var startIndex = (vm.currentPage - 1) * pageSize;
          var endIndex = startIndex + pageSize;
          return vm.schedules.slice(startIndex, endIndex);
        };

        vm.nextPage = function() {
          if (vm.currentPage < vm.numberOfPages()) {
            vm.currentPage++;
          }
        };

        vm.previousPage = function() {
          if (vm.currentPage > 1) {
            vm.currentPage--;
          }
        };
      }
    ]
  }
);
