'use strict';

export default (angular, angularModule) => {

  function configConstructor($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeController',
        controllerAs: 'home',
        templateProvider: ($q) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let template = require('./institutional/home/home.template.html');
              resolve(template);
            }, 'home');
          });
        },
        resolve: {
          load: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure([], () => {
                let homeModule = require('./institutional/home/home.module').default(angular);
                $ocLazyLoad.load({
                  name: 'home'
                });
                resolve(homeModule);
              }, 'home');
            });
          }
        }
      })
      .state('contact', {
        url: '/contact',
        controller: 'contactController',
        controllerAs: 'contact',
        templateProvider: ($q) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let template = require('./institutional/contact/contact.template.html');
              resolve(template);
            }, 'contact');
          });
        },
        resolve: {
          load: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure([], () => {
                let contactModule = require('./institutional/contact/contact.module').default(angular);
                $ocLazyLoad.load({
                  name: 'contact'
                });
                resolve(contactModule);
              }, 'contact');
            });
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  }

  angularModule.config(configConstructor);
}
