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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"questionNumber\": () => (/* binding */ questionNumber),\n/* harmony export */   \"remainingQuestionNumber\": () => (/* binding */ remainingQuestionNumber),\n/* harmony export */   \"typingArea\": () => (/* binding */ typingArea),\n/* harmony export */   \"questionNumberArea\": () => (/* binding */ questionNumberArea),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal)\n/* harmony export */ });\n/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting */ \"./src/setting.js\");\n\r\n\r\n/** \r\n * 問題数を選択する\r\n * 間違えた問題を表示する\r\n * 点数を計算する\r\n * 割合を計算する\r\n * Tweet機能\r\n * 報告する機能\r\n * リロードする機能する\r\n * ランダムに問題数を選択する\r\n * 正解かどうかを判断する\r\n*/\r\n\r\nlet questionNumber = 10; //デフォルト値\r\nlet remainingQuestionNumber = 10; //残りの問題数\r\nconst typingArea = document.getElementById(\"typingArea\");\r\nconst questionNumberArea = document.getElementById(\"questionNumberArea\");\r\n\r\nconst openModal = () => {\r\n  console.log(\"クリックされました\");\r\n  _setting__WEBPACK_IMPORTED_MODULE_0__.modal.classList.remove(\"hidden\");\r\n  _setting__WEBPACK_IMPORTED_MODULE_0__.overlay.classList.remove(\"hidden\");\r\n};\r\n\r\n//modalとoverlayのhiddenクラスを追加する（modalとoverlayが見えないようにする）処理\r\nconst closeModal = () => {\r\n  _setting__WEBPACK_IMPORTED_MODULE_0__.modal.classList.add(\"hidden\");\r\n  _setting__WEBPACK_IMPORTED_MODULE_0__.overlay.classList.add(\"hidden\");\r\n};\r\n\r\n//modalの開くボタンと閉じるボタンをクリックした時の処理\r\n_setting__WEBPACK_IMPORTED_MODULE_0__.settingButton.addEventListener(\"click\", openModal);\r\n_setting__WEBPACK_IMPORTED_MODULE_0__.settingCloseButton.addEventListener(\"click\", closeModal);\r\n\r\ntypingArea.addEventListener(\"keypress\",(e) => {\r\n  if(e.key == \"Enter\"){\r\n    //数値以外が入力されていないかどうか\r\n    console.log(\"Enterされました\")\r\n\r\n \r\n    //数値以外\r\n\r\n    //\r\n\r\n\r\n\r\n\r\n  }\r\n})\n\n//# sourceURL=webpack://typing/./src/index.js?");

/***/ }),

/***/ "./src/setting.js":
/*!************************!*\
  !*** ./src/setting.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"overlay\": () => (/* binding */ overlay),\n/* harmony export */   \"settingButton\": () => (/* binding */ settingButton),\n/* harmony export */   \"settingCloseButton\": () => (/* binding */ settingCloseButton),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal)\n/* harmony export */ });\n\r\n\r\nconst modal = document.getElementById(\"modal\"); //modalを指定\r\nconst overlay = document.getElementById(\"overlay\"); //overlayを指定\r\nconst settingButton = document.getElementById(\"settingButton\"); //modalを開くボタンを指定\r\nconst settingCloseButton = document.getElementById(\"settingCloseButton\"); //modalを開くボタンを指定\r\n\r\n\r\n//modalとoverlayのhiddenクラスを消す（modalとoverlayが見えるようにする）処理\r\nconst openModal = () => {\r\n  console.log(\"クリックされました\");\r\n  modal.classList.remove(\"hidden\");\r\n  overlay.classList.remove(\"hidden\");\r\n};\r\n\r\n//modalとoverlayのhiddenクラスを追加する（modalとoverlayが見えないようにする）処理\r\nconst closeModal = () => {\r\n  modal.classList.add(\"hidden\");\r\n  overlay.classList.add(\"hidden\");\r\n};\r\n\r\n//modalの開くボタンと閉じるボタンをクリックした時の処理\r\nsettingButton.addEventListener(\"click\", openModal);\r\nsettingCloseButton.addEventListener(\"click\", closeModal);\n\n//# sourceURL=webpack://typing/./src/setting.js?");

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