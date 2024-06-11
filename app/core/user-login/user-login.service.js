'use strict';

angular.
    module('core.userLogin').
    factory('userLogin', ['$http', function($http) {
      const USERNAME = 'thinhledz';
      const PASS = '939';
      const change$ = new rxjs.Subject();
      // const currentLogin$ = change$.asObservable();
      const strings$ = new rxjs.BehaviorSubject([]);

      let isAuthenticated = false;
      console.log(isAuthenticated)
      $http.get('user-login/user.json').then(response => {
        strings$.next(response.data.text);
      });

      return {
        // login(username, password) {
        //   isAuthenticated = username === USERNAME && password === PASS;
        //   console.log('zo', isAuthenticated)
        //   return isAuthenticated;
        // },
        // isAuthenticated() {
        //   return isAuthenticated;
        // },
        // getValue() {
        //   change$.next(isAuthenticated)
        // },
        // currentLogin$,
        strings$
      };
      

}]);
