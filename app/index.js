var angular = require('angular');

require('oclazyload');

var angularModule = angular.module('heitorpack', [
  require('angular-ui-router'),
  'oc.lazyLoad'
]);

require('./routes')(angular, angularModule);
