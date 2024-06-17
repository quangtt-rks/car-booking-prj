'use strict';

angular.module('userSignIn').component('userSignIn', {
  templateUrl: 'user-sign-in/user-sign-in.template.html',
  controller: ['$location', class UserSignInController {
    constructor($location) {
      this.$location = $location;

      this.username = '';
      this.password = '';
    }

    submit() {
      // Hard code credentials for testing purpose
      const driverCredentials = {
        username: 'driver',
        password: 'driver',
      };
      const passengerCredentials = {
        username: 'passenger',
        password: 'passenger'
      };
      const userSignInCredentials = {
        username: this.username,
        password: this.password
      };

      if (_.isEqual(driverCredentials, userSignInCredentials)) {
        userSignInCredentials.userType = 'driver';
      } else if (_.isEqual(passengerCredentials, userSignInCredentials)) {
        userSignInCredentials.userType = 'passenger';
      } else {
        alert('Invalid credentials');
        return;
      }

      for (const [key, value] of Object.entries(userSignInCredentials)) {
        localStorage.setItem(key, value);
      }

      this.$location.path('/passenger');
    }
  }]
});
