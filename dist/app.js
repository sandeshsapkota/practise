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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

console.clear(); //-------------------------------------------------------
// variables
//-------------------------------------------------------

var cursorFollower = document.querySelector(".cursorfollower"),
    btnProject = document.querySelector(".project__btn"),
    textOfBtnProject = document.querySelector(".project__btn-text"),
    textOfBtnProjectValue = textOfBtnProject.textContent,
    burgerIcon = document.querySelector(".burger"); //-------------------------------------------------------
// helper functions
//-------------------------------------------------------

function findUpParentNode(el, parentClassName) {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.tagName === undefined) return; // while looping through parentNode, html parentNode document's tagName is undefined

    if (el.classList.contains(parentClassName)) return el;
  }

  return false;
}

function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return _toConsumableArray(elements);
} //-------------------------------------------------------
//-------------------------------------------------------
// event handler
//-------------------------------------------------------
// cursor follower


window.addEventListener("mousemove", function (e) {
  var isBurgerIcon = findUpParentNode(e.target, "burger");
  var isClickable = e.target.classList.contains("clickable") || findUpParentNode(e.target, "clickable");
  cursorFollower.classList[isClickable ? "add" : "remove"]("cursorfollower--large");

  if (isBurgerIcon) {
    cursorFollower.style.top = "".concat(burgerIcon.offsetTop, "px");
    cursorFollower.style.left = "".concat(burgerIcon.offsetLeft, "px");
    cursorFollower.style.transform = "none";
  } else {
    cursorFollower.style.top = "".concat(e.y, "px");
    cursorFollower.style.left = "".concat(e.x, "px");
  }
});
var markup = textOfBtnProjectValue.split(" ").map(function (item) {
  var eachLetterMarkUp = item.split("").map(function (item, index) {
    return "<span class=\"".concat(index === 0 ? "spacing" : "", "\"> ").concat(item, " </span> ");
  }).join("");
  return eachLetterMarkUp;
}).join("");
textOfBtnProject.innerHTML = markup; //-------------------------------------------------------

var prevBtn = document.querySelector(".slide__arrow-prev");
var nextBtn = document.querySelector(".slide__arrow-next");
var slide = document.querySelector(".slide");
var slideList = document.querySelector(".slide__list");
var slideItems = document.querySelectorAll(".slide__item");
var slideDesc = {
  items: 3,
  margin: 16,
  transitionDuration: "0.3"
};
var slideWidth = slide.offsetWidth;
var slideItemWidth = (slideWidth - slideDesc.margin * (slideDesc.items - 1)) / slideDesc.items;
slideItems.forEach(function (cur) {
  cur.style.width = "".concat(slideItemWidth, "px");
  cur.style.marginRight = "".concat(slideDesc.margin, "px");
});
var distanceToTranslate = 0;

function translateSlide(str) {
  var distance = str === "prev" ? slideItemWidth + 16 : -slideItemWidth - 16;
  distanceToTranslate = distanceToTranslate + distance;
  slideList.style.transform = "translateX(".concat(distanceToTranslate, "px)");
}

prevBtn.addEventListener("click", function () {
  translateSlide("prev");
});
nextBtn.addEventListener("click", function () {
  translateSlide("next");
});

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\practise\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! E:\practise\src\sass\app.scss */"./src/sass/app.scss");


/***/ })

/******/ });