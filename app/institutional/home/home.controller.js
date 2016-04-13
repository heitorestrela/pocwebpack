'use strict';

class HomeController {
  constructor() {
    this.title = 'Home';
  }
}

export default angularModule => {
  angularModule.controller('homeController', HomeController);
}
