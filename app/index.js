'use strict';

import angular from 'angular';
import oclazyload from 'oclazyload';
import uirouter from 'angular-ui-router';
import routes from './routes';
import uibootstrap from 'angular-ui-bootstrap';

var angularModule = angular.module('heitorpack', [
  uirouter,
  'oc.lazyLoad',
  uibootstrap
]);

routes(angular, angularModule);

angular.bootstrap(document, [angularModule.name], {
  strictDi: true
});
