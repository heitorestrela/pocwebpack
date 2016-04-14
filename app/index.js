'use strict';

import angular from 'angular';
import oclazyload from 'oclazyload';
import uirouter from 'angular-ui-router';
import routes from './routes';

var angularModule = angular.module('heitorpack', [
  uirouter,
  'oc.lazyLoad'
]);

routes(angular, angularModule);

angular.bootstrap(document, [angularModule.name], {
  strictDi: true
});
