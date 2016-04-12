module.exports = function (angularModule) {
  function contactConstructor ($scope) {
    var vm = this;

    vm.title = 'Contact';
  }

  angularModule.controller('contactController', contactConstructor);
};
