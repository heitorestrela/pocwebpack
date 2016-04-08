module.exports = function (angularModule) {
  homeConstructor.$inject = ['$scope'];

  function homeConstructor ($scope) {
    var vm = this;
    
    vm.titulo = 'Teste de live reload';
  }

  angularModule.controller('homeController', homeConstructor);
};
