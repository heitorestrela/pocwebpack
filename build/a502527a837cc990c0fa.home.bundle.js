webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = "<h1>{{ home.title }}</h1>\r\n\r\n<a ui-sref=\"contact\">Contato</a>\r\n"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (angular) {
	  var homeModule = angular.module('home', []);
	  __webpack_require__(9)(homeModule);
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function (angularModule) {
	  homeConstructor.$inject = ['$scope'];

	  function homeConstructor ($scope) {
	    var vm = this;

	    vm.title = 'Home';
	  }

	  angularModule.controller('homeController', homeConstructor);
	};


/***/ }
]);