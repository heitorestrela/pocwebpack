'use strict';

export default Angular => {
  let contactModule = Angular.module('contact', []);
  require('./contact.controller').default(contactModule);
}
