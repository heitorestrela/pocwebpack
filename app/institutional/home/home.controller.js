module.exports = function (angularModule) {
  homeConstructor.$inject = ['$scope'];

  function homeConstructor ($scope) {
    var vm = this;

    vm.title = 'Home';
  }

  angularModule.controller('homeController', homeConstructor);
};
