'use strict';

// Register `passengerForm` component, along with its associated controller and template
angular.
  module('passengerForm').
  component('passengerForm', {
    templateUrl: 'passenger-form/passenger-form.template.html',
    controller: ['BusData',
      function PassengerFormController(BusData) {
        var self = this;
        self.busData = BusData.get();
        self.isOrdered = BusData.fetchDump();
        self.passengerName = window.localStorage.getItem('phonecatApp.passengerName');
        self.passengerPhone = window.localStorage.getItem('phonecatApp.passengerPhone');
        
        var subscription = BusData.subscribe(function onNext(d) {
            self.isOrdered = d;
            console.log(self.isOrdered)
            if (self.isOrdered) {
              modal.style.display = "block";
              self.isOrdered = !d;
              self.qrcode = 'img/receipt/qr.png';
            }
            console.log(self.isOrdered)
        });
      
        this.$onDestroy = function() {
            subscription.dispose();
        };

        // Handle submitted form data
        self.book = function () {
          window.localStorage.setItem('phonecatApp.passengerRoute', self.route);
          window.localStorage.setItem('phonecatApp.passengerPickupTime', self.pickupTime);
          window.localStorage.setItem('phonecatApp.passengerTimeSlot', self.timeSlot);
          window.localStorage.setItem('phonecatApp.passengerPickupPlace', self.pickupPlace);
          window.localStorage.setItem('phonecatApp.passengerDropPlace', self.dropPlace);

          var isStored = window.localStorage.getItem('phonecatApp.passengerRoute') != 'undefined' &&
          window.localStorage.getItem('phonecatApp.passengerPickupTime') != 'undefined' &&
          window.localStorage.getItem('phonecatApp.passengerTimeSlot') != 'undefined' &&
          window.localStorage.getItem('phonecatApp.passengerPickupPlace') != 'undefined' &&
          window.localStorage.getItem('phonecatApp.passengerDropPlace') != 'undefined';

          BusData.set(isStored)
        }
      }
    ]
  });
