angular.module('myApp').factory('LoginService', [
  'rxjsFactory',
  function LoginService() {
    const USERNAME = 'tung';
    const PASS = 'password';
    let isAuthenticated = false;

    const change$ = new rxjs.Subject();
    const currentLogin$ = change$.asObservable()

    return {
      login(username, password) {
        isAuthenticated = username === USERNAME && password === PASS;

        return isAuthenticated;
      },
      isAuthenticated() {
        return isAuthenticated;
      },
      getValue() {
        change$.next(isAuthenticated)
      },
      currentLogin$
    };
  }
]);
