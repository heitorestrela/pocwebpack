'use strict';

class ContactController {
  constructor() {
    this.title = 'Contact';
  }
}

export default angularModule => {
  angularModule.controller('contactController', ContactController);
}
