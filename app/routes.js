module.exports = function(angular, angularModule) {

  function configConstructor($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeController',
        controllerAs: 'home',
        templateProvider: function($q) {
          var deferred = $q.defer();

          require.ensure([], function() {
            var template = require('./institutional/home/home.template.html');
            deferred.resolve(template);
          }, 'home');

          return deferred.promise;
        },
        resolve: {
          load: function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function() {
              var contactModule = require('./institutional/home/home.module')(angular);
              $ocLazyLoad.load({
                name: 'home'
              });
              deferred.resolve(module);
            }, 'home');

            return deferred.promise;
          }
        }
      })
      .state('contact', {
        url: '/contact',
        controller: 'contactController',
        controllerAs: 'contact',
        templateProvider: function($q) {
          var deferred = $q.defer();

          require.ensure([], function() {
            var template = require('./institutional/contact/contact.template.html');
            deferred.resolve(template);
          }, 'contact');

          return deferred.promise;
        },
        resolve: {
          load: function($q, $ocLazyLoad) {
            var deferred = $q.defer();

            require.ensure([], function() {
              var contactModule = require('./institutional/contact/contact.module')(angular);
              $ocLazyLoad.load({
                name: 'contact'
              });
              deferred.resolve(module);
            }, 'contact');

            return deferred.promise;
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  }

  angularModule.config(configConstructor);
};
