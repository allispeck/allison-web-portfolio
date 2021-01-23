/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

// Filter Buttons
(function () {
  // Grab each button and project card
  var buttons = document.querySelectorAll('.filter-btn');
  var storeItems = document.querySelectorAll('.store-item');
  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      var filter = e.target.dataset.filter;
      storeItems.forEach(function (item) {
        if (filter === 'all') {
          item.style.display = 'block';
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
})(); //wire up filter search box


(function () {
  var searchBox = document.querySelector('#search-item');
  var storeItems = document.querySelectorAll('.store-item'); //storeItems.forEach(item=>{console.log(item.textContent)});

  searchBox.addEventListener('keyup', function (e) {
    var searchFilter = e.target.value.toLowerCase().trim(); //display only items that contain filter input

    console.log(searchFilter);
    storeItems.forEach(function (item) {
      if (item.textContent.toLowerCase().trim().includes(searchFilter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
})(); // toasty message


$(document).ready(function () {
  var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: "#090613",
    onOpen: function onOpen(toast) {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
  var url = new URL(window.location.href);

  if (url.searchParams.get('email-sent')) {
    Toast.fire({
      icon: 'success',
      title: 'Message Sent!',
      background: "#a2a4b1",
      fontColor: "white"
    });
  }
}); // navbar collapse

$(document).ready(function () {
  "use strict";

  var myNav = {
    init: function init() {
      this.cacheDOM();
      this.browserWidth();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.navBars = $(".navBars");
      this.xBxHack = $("#xBxHack");
      this.navMenu = $("#menu");
    },
    browserWidth: function browserWidth() {
      $(window).resize(this.bindEvents.bind(this));
    },
    bindEvents: function bindEvents() {
      var width = window.innerWidth;

      if (width < 600) {
        this.navBars.click(this.animate.bind(this));
        this.navMenu.hide();
        this.xBxHack[0].checked = false;
      } else {
        this.resetNav();
      }
    },
    animate: function animate(e) {
      var checkbox = this.xBxHack[0];
      !checkbox.checked ? this.navMenu.slideDown() : this.navMenu.slideUp();
    },
    resetNav: function resetNav() {
      this.navMenu.show();
    }
  };
  myNav.init();
});

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./js/app.js ./style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/allisonspeck/Projects/allison-web-portfolio/js/app.js */"./js/app.js");
module.exports = __webpack_require__(/*! /Users/allisonspeck/Projects/allison-web-portfolio/style.scss */"./style.scss");


/***/ })

/******/ });