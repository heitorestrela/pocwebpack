module.exports = function (angularModule) {
  contactConstructor.$inject = ['$scope'];

  function contactConstructor ($scope) {
    var vm = this;

    vm.title = 'Contact';
  }

  angularModule.controller('contactController', contactConstructor);
};
