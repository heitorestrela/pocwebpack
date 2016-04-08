var angular = require('angular');

//require('oclazyload');

var angularModule = angular.module('heitorpack', [
  require('angular-ui-router')
]);

require('./routes')(angularModule);

require('./controllers/home.controller')(angularModule);
