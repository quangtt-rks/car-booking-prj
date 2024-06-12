'use strict';

angular.
    module('core.userLogin').
    factory('userLogin', ['$http', function($http) {
      const USERNAME = 'thinhledz';
      const PASS = '939';
      // const change$ = new rxjs.Subject();
      // const currentLogin$ = change$.asObservable();
      const strings$ = new rxjs.BehaviorSubject([]);
      // tạo ra một Observable bằng cách sử dụng các phương thức có sẵn trong RxJS. 
      //BehaviorSubject luôn lưu trữ giá trị cuối cùng mà nó phát ra, và sẽ phát lại giá trị này cho bất kỳ Observer mới nào đăng ký lắng nghe sau đó.

      let isAuthenticated = false;
      console.log(isAuthenticated)
      // $http.get('user-login/user.json').then(response => {
      //   strings$.next(response.data.text);
      // });

      return {
        login(username, password) {
          isAuthenticated = username === USERNAME && password === PASS;
          console.log('zo', isAuthenticated)
          return isAuthenticated;
        },
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
