/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/datasets.js":
/*!*************************!*\
  !*** ./src/datasets.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"datasets\": () => (/* binding */ datasets)\n/* harmony export */ });\nconst datasets = {\r\n    \"貧血\":\"anemia\",\r\n    \"下痢\":\"diarrhea\",\r\n    \"緑内障\":\"glaucoma\"\r\n}\r\n\n\n//# sourceURL=webpack://typing/./src/datasets.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typingInput\": () => (/* binding */ typingInput),\n/* harmony export */   \"question\": () => (/* binding */ question),\n/* harmony export */   \"typingInputKeyPress\": () => (/* binding */ typingInputKeyPress)\n/* harmony export */ });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/**\r\n * リロードする\r\n * 次の問題へ行く\r\n * 配列に補完された間違えた問題と答えを最後に表示する\r\n * \r\n * \r\n */\r\n\r\n\r\n//const typing\r\n\r\nconst typingInput = document.getElementById(\"typing-input\");\r\nconst question = document.getElementById(\"question\");\r\n\r\nconst tapOrKeyPress = () => {\r\n  if((0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.isSmartPhone)()){\r\n    question.textContent = \"これはスマホです\"\r\n  }else{\r\n    question.textContent = \"これはPCです\"\r\n  }\r\n}\r\n\r\nconst typingInputKeyPress = (e) => {\r\n  if(e.key == 'Enter'){\r\n    const typingInputValue = typingInput.value\r\n    console.log(_logic_js__WEBPACK_IMPORTED_MODULE_0__.wrongAnswer[0]);\r\n    console.log(typingInputValue);\r\n  }\r\n}\r\n\r\ntapOrKeyPress();\r\n\r\ntypingInput.addEventListener('keypress',typingInputKeyPress);\r\n\n\n//# sourceURL=webpack://typing/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isSmartPhone\": () => (/* binding */ isSmartPhone),\n/* harmony export */   \"wrongAnswer\": () => (/* binding */ wrongAnswer)\n/* harmony export */ });\n/* harmony import */ var _datasets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasets.js */ \"./src/datasets.js\");\n/*\r\n*スマホかどうかを判断する\r\n1.ランダムに問題を選ぶ\r\n2.選ばれた問題が正解かどうかを判断する\r\n3.間違えた問題を配列に挿入する\r\n*/\r\n\r\n\r\nconst isSmartPhone = () => {\r\n  // UserAgentからのスマホ判定\r\n  const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;\r\n  return (window.navigator.userAgent.search(regexp) !== -1);\r\n}\r\n\r\n\r\nconst wrongAnswer = [\"aaa\",\"saa\"];\r\n\n\n//# sourceURL=webpack://typing/./src/logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;