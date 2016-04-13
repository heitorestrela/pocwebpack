'use strict';

var angular = require('angular');

require('oclazyload');

var angularModule = angular.module('heitorpack', [
  require('angular-ui-router'),
  'oc.lazyLoad'
]);

require('./routes').default(angular, angularModule);

angular.bootstrap(document, [angularModule.name], { strictDi: true });
