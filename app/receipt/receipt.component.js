'use strict';

// Register `receipt` component, along with its associated controller and template
angular.
  module('receipt').
  component('receipt', {
    templateUrl: 'receipt/receipt.template.html',
    controller: [
      function ReceiptController() {
        var self = this;
        self.passengerName = window.localStorage.getItem('phonecatApp.passengerName');
        self.passengerName = window.localStorage.getItem('phonecatApp.passengerName');
        self.passengerPhone = window.localStorage.getItem('phonecatApp.passengerPhone');
        self.passengerRoute = window.localStorage.getItem('phonecatApp.passengerRoute');
        self.passengerPickupTime = window.localStorage.getItem('phonecatApp.passengerPickupTime');
        self.passengerTimeSlot = window.localStorage.getItem('phonecatApp.passengerTimeSlot');
        self.passengerPickupPlace = window.localStorage.getItem('phonecatApp.passengerPickupPlace');
        self.passengerDropPlace = window.localStorage.getItem('phonecatApp.passengerDropPlace');
        self.qrcode = 'img/receipt/qr.png'
      }
    ]
  });
