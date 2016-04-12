module.exports = function (angularModule) {
  function homeConstructor ($scope) {
    var vm = this;

    vm.title = 'Home';
  }

  angularModule.controller('homeController', homeConstructor);
};
