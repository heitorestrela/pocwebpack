module.exports = function(angularModule) {

  configConstructor.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

  function configConstructor($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeController',
        controllerAs: 'home',
        template: require('./templates/home.template.html')
      });
      // .state('page4', {
      //   url: '/page4',
      //   templateProvider: ['$q', function($q) {
      //     let deferred = $q.defer();
      //     require.ensure(['./page4/page4.html'], function() {
      //       let template = require('./page4/page4.html');
      //       deferred.resolve(template);
      //     });
      //     return deferred.promise;
      //   }],
      //   controller: 'Page4Controller',
      //   controllerAs: 'test',
      //   resolve: {
      //     foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
      //       let deferred = $q.defer();
      //       require.ensure([], function() {
      //         let module = require('./page4/page4Module.js')(Angular);
      //         $ocLazyLoad.load({
      //           name: 'page4App'
      //         });
      //         deferred.resolve(module);
      //       });
      //
      //       return deferred.promise;
      //     }]
      //   }
      // });

      $urlRouterProvider.otherwise('/home');
  }

  angularModule.config(configConstructor);
};
