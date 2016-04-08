module.exports = function (angularModule) {
  homeConstructor.$inject = ['$scope'];

  function homeConstructor ($scope) {
    $scope.titulo = 'Teste de live reload';
  }

  angularModule.controller('homeController', homeConstructor);
};
