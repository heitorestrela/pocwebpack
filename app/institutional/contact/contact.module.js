module.exports = function (angular) {
  var contactModule = angular.module('contact', []);
  require('./contact.controller')(contactModule);
};
