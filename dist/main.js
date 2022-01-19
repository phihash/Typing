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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"datasets\": () => (/* binding */ datasets)\n/* harmony export */ });\nconst datasets = {\r\n    1:[\"貧血\",\"anemia\"],\r\n    2:[\"下痢\",\"diarrhea\"],\r\n    3:[\"緑内障\",\"glaucoma\"]\r\n}\r\n\n\n//# sourceURL=webpack://typing/./src/datasets.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typingInput\": () => (/* binding */ typingInput),\n/* harmony export */   \"question\": () => (/* binding */ question),\n/* harmony export */   \"showQuestionNum\": () => (/* binding */ showQuestionNum),\n/* harmony export */   \"showQuestionNumInDisplay\": () => (/* binding */ showQuestionNumInDisplay)\n/* harmony export */ });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\r\n\r\n//const typing\r\n\r\nconst typingInput = document.getElementById(\"typing-input\");\r\nconst question = document.getElementById(\"question\");\r\nconst showQuestionNum = document.getElementById(\"showQuestionNum\");\r\n\r\n\r\n/**\r\n * リロードする\r\n */\r\n\r\nconst startFlag = false; //start \r\n\r\nconst doReload = () => {\r\n  window.location.reload();\r\n}\r\n\r\n/**\r\n * 配列に補完された間違えた問題と答えを最後に表示する\r\n */\r\nconst showWrongWords = () =>{\r\n\r\n}\r\n\r\n\r\n/**\r\n * 次の問題へ進む\r\n */\r\n\r\n\r\nconst nextTyping = () => {\r\n  if(startFlag){\r\n\r\n  }\r\n}\r\n\r\n\r\n\r\ntypingInput.addEventListener('keypress',_logic_js__WEBPACK_IMPORTED_MODULE_0__.typingInputKeyPress);\r\n\r\n/**\r\n * 選ばれた問題数を反映させる\r\n * \r\n */\r\nconst showQuestionNumInDisplay = () => {\r\n  if(Number(typingInputValue) && numberMode){\r\n    questionNum = Number(typingInputValue);\r\n    showQuestionNum.textContent = questionNum;\r\n    numberMode = false;\r\n    typingMode = true;\r\n  }else if(typingMode == false){\r\n    alert(\"半角数字を入力してください\");\r\n  }\r\n}\n\n//# sourceURL=webpack://typing/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"questionNum\": () => (/* binding */ questionNum),\n/* harmony export */   \"numberMode\": () => (/* binding */ numberMode),\n/* harmony export */   \"typingMode\": () => (/* binding */ typingMode),\n/* harmony export */   \"getScore\": () => (/* binding */ getScore),\n/* harmony export */   \"presentQuestionNumber\": () => (/* binding */ presentQuestionNumber),\n/* harmony export */   \"isSmartPhone\": () => (/* binding */ isSmartPhone),\n/* harmony export */   \"typingInputKeyPress\": () => (/* binding */ typingInputKeyPress),\n/* harmony export */   \"wrongWords\": () => (/* binding */ wrongWords)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _datasets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasets.js */ \"./src/datasets.js\");\n/*\r\n1.ランダムに問題を選ぶ\r\n2.選ばれた問題が正解かどうかを判断する\r\n3.間違えた問題を配列に挿入する\r\n4.アルファベットのみが入力されているかどうか\r\n5.選択された問題の数だけ繰り返す\r\n6.点数を数える\r\n7.問題の報告をしたいときに、問題番号を覚えておく\r\n8. サニタイズする\r\n*/\r\n\r\n\r\n\r\nlet questionNum = 0; //問題数を保持\r\nlet numberMode = true; //\r\nlet typingMode = false; //\r\nlet getScore = 0;\r\nlet presentQuestionNumber = 0;\r\n\r\nconst isSmartPhone = () => {\r\n  // UserAgentからのスマホ判定\r\n  const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;\r\n  return (window.navigator.userAgent.search(regexp) !== -1);\r\n}\r\n\r\nconst typingInputKeyPress = (e) => {\r\n  if(e.key == 'Enter'){\r\n    const typingInputValue = _index_js__WEBPACK_IMPORTED_MODULE_0__.typingInput.value;\r\n\r\n    //問題数を保持しておく\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.showQuestionNumInDisplay)();\r\n    console.log(questionNum);\r\n  }\r\n}\r\n\r\n\r\nconst wrongWords = [\"aaa\",\"saa\"];\r\n\n\n//# sourceURL=webpack://typing/./src/logic.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;