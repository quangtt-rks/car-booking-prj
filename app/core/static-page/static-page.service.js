'use strict';

angular.module('core.staticPage', [])
  .factory('staticPageService', [function() {
    const phoneArr = new rxjs.BehaviorSubject([]);

    return {
      phoneArr
    }
  }]);
