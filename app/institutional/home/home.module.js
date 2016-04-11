module.exports = function (angular) {
  var homeModule = angular.module('home', []);
  require('./home.controller')(homeModule);
};
