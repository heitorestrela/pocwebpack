'use strict';

export default Angular => {
  let homeModule = Angular.module('home', []);
  require('./home.controller').default(homeModule);
}
