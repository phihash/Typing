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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"questionNumber\": () => (/* binding */ questionNumber),\n/* harmony export */   \"remainingQuestionNumber\": () => (/* binding */ remainingQuestionNumber),\n/* harmony export */   \"typingArea\": () => (/* binding */ typingArea),\n/* harmony export */   \"questionNumberArea\": () => (/* binding */ questionNumberArea)\n/* harmony export */ });\n\r\n\r\n/** \r\n * 問題数を選択する\r\n * 間違えた問題を表示する\r\n * 点数を計算する\r\n * 割合を計算する\r\n * Tweet機能\r\n * 報告する機能\r\n * リロードする機能する\r\n * ランダムに問題数を選択する\r\n * 正解かどうかを判断する\r\n*/\r\nlet questionNumber = 10; //デフォルト値\r\nlet remainingQuestionNumber = 10; //残りの問題数\r\nconst typingArea = document.getElementById(\"typingArea\");\r\nconst questionNumberArea = document.getElementById(\"questionNumberArea\");\r\n\r\n\r\nMicroModal.init();\r\ntypingArea.addEventListener(\"keypress\",(e) => {\r\n  if(e.key == \"Enter\"){\r\n    //数値以外が入力されていないかどうか\r\n    console.log(\"Enterされました\")\r\n    \r\n \r\n    //数値以外\r\n\r\n    //\r\n\r\n\r\n\r\n\r\n  }\r\n})\n\n//# sourceURL=webpack://typing/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;