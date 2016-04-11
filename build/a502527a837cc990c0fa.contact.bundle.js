webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
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
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = "<h1>{{ contact.title }}</h1>\r\n\r\n<a ui-sref=\"home\">Contato</a>\r\n"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (angular) {
	  var contactModule = angular.module('contact', []);
	  __webpack_require__(12)(contactModule);
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function (angularModule) {
	  contactConstructor.$inject = ['$scope'];

	  function contactConstructor ($scope) {
	    var vm = this;

	    vm.title = 'Contact';
	  }

	  angularModule.controller('contactController', contactConstructor);
	};


/***/ }
]);