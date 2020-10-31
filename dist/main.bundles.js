/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _src_ObjectWalker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ObjectWalker */ \"./src/ObjectWalker.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_ObjectWalker__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://object-dot-walk/./index.js?");

/***/ }),

/***/ "./src/ObjectWalker.js":
/*!*****************************!*\
  !*** ./src/ObjectWalker.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/**\n * @status - Beta\n * @description - This is a little package that seems needed in a project am working on\n * it can be used by anyone. Note it is not Tested to any level an can have bugs.\n */\n\nclass ObjectWalker {\n  constructor(items, cb, excludes) {\n    this.items = items;\n    this.cb = cb;\n    this.excludes = excludes ?? [];\n    this._perfomLoop = this._perfomLoop.bind(this);\n  }\n\n  // callback has to return original item if excludes is passed\n  // if excludes is passed: callback should return param.original || modified param\n  static walk(items, cb, excludes = []) {\n    const singleton = new this(items, cb, excludes);\n    //\n    return singleton._walk();\n  }\n\n  _walk() {\n    if (typeof this.items === \"object\" && this.items !== null) {\n      // item is an array with object\n      // Perform walk\n      return this._perfomLoop(this.items);\n    } else {\n      this.items = [];\n    }\n  }\n\n  _perfomLoop(items) {\n    //\n    if (!this.cb) return items;\n    for (const key in items) {\n      // Item key is excluded\n      if (this.excludes.includes(key)) {\n        items = { ...items, [key]: items[key] };\n      } else {\n        // Return both the key value object and current item\n        // let { value } = editedObject;\n        const { value } = this.cb(\n          {\n            key,\n            value: items[key],\n          },\n          { [key]: items[key] }\n        );\n        items = {\n          ...items,\n          [key]: value,\n        };\n      }\n    }\n\n    return items;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObjectWalker);\n\n\n//# sourceURL=webpack://object-dot-walk/./src/ObjectWalker.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./index.js\");\n/* harmony import */ var _test_testFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/testFile */ \"./src/test/testFile.js\");\n\n\n\nlet obj = _test_testFile__WEBPACK_IMPORTED_MODULE_1__.default;\nfunction convertToNumber(editedObj, realObject) {\n  editedObj.value = Number(editedObj.value);\n  return editedObj\n}\n//   lo\n\nconsole.log(_index__WEBPACK_IMPORTED_MODULE_0__.default.walk(obj[0], convertToNumber, ['name', 'tall']));\n\n\n//# sourceURL=webpack://object-dot-walk/./src/index.js?");

/***/ }),

/***/ "./src/test/testFile.js":
/*!******************************!*\
  !*** ./src/test/testFile.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet testObject = [\n  {\n    name: \"Stanley\",\n    age: \"24\",\n    coding: \"1\",\n    working: \"0\",\n    tall: \"true\",\n  },\n  {\n    name: \"Godwin\",\n    age: \"26\",\n    coding: \"1\",\n    working: \"1\",\n    tall: 1,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testObject);\n\n//# sourceURL=webpack://object-dot-walk/./src/test/testFile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;