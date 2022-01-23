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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"datasets\": () => (/* binding */ datasets)\n/* harmony export */ });\n\r\n\r\nconst datasets = [\r\n    {1:[\"貧血\",\"anemia\"]},\r\n    {2:[\"食思不振\",\"anorexia\"]},\r\n    {3:[\"緑内障\",\"glaucoma\"]}\r\n];\n\n//# sourceURL=webpack://typing/./src/datasets.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"questionNumber\": () => (/* binding */ questionNumber),\n/* harmony export */   \"increase\": () => (/* binding */ increase),\n/* harmony export */   \"remainingQuestionNumber\": () => (/* binding */ remainingQuestionNumber),\n/* harmony export */   \"typingArea\": () => (/* binding */ typingArea),\n/* harmony export */   \"questionNumberArea\": () => (/* binding */ questionNumberArea),\n/* harmony export */   \"settingSaveButton\": () => (/* binding */ settingSaveButton),\n/* harmony export */   \"eToJButton\": () => (/* binding */ eToJButton),\n/* harmony export */   \"jToEButton\": () => (/* binding */ jToEButton),\n/* harmony export */   \"closeButton\": () => (/* binding */ closeButton),\n/* harmony export */   \"plusIncreaseButton\": () => (/* binding */ plusIncreaseButton),\n/* harmony export */   \"minusIncreaseButton\": () => (/* binding */ minusIncreaseButton),\n/* harmony export */   \"minusButton\": () => (/* binding */ minusButton),\n/* harmony export */   \"plusButton\": () => (/* binding */ plusButton),\n/* harmony export */   \"numberText\": () => (/* binding */ numberText),\n/* harmony export */   \"increasingNumberText\": () => (/* binding */ increasingNumberText),\n/* harmony export */   \"questionSentence\": () => (/* binding */ questionSentence),\n/* harmony export */   \"questionId\": () => (/* binding */ questionId),\n/* harmony export */   \"mode\": () => (/* binding */ mode)\n/* harmony export */ });\n/* harmony import */ var _datasets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasets.js */ \"./src/datasets.js\");\n\r\n\r\n/** \r\n * 問題数を選択する\r\n * 間違えた問題を表示する\r\n * 点数を計算する\r\n * 割合を計算する\r\n * Tweet機能\r\n * 報告する機能\r\n * リロードする機能する\r\n * ランダムに問題数を選択する\r\n * 正解かどうかを判断する\r\n *和英設定\r\n*/\r\n\r\nlet questionNumber = 10; //デフォルト値\r\nlet increase = 5; //デフォルト値\r\nlet remainingQuestionNumber = 10; //残りの問題数\r\nconst typingArea = document.getElementById(\"typingArea\");\r\nconst questionNumberArea = document.getElementById(\"questionNumberArea\");\r\nconst settingSaveButton = document.getElementById(\"settingSaveButton\");\r\nconst eToJButton = document.getElementById(\"eToJButton\");\r\nconst jToEButton = document.getElementById(\"jToEButton\");\r\nconst closeButton = document.getElementById(\"closeButton\");\r\nconst plusIncreaseButton = document.getElementById(\"plusIncreaseButton\");\r\nconst minusIncreaseButton = document.getElementById(\"minusIncreaseButton\");\r\nconst minusButton = document.getElementById(\"minusButton\");\r\nconst plusButton = document.getElementById(\"plusButton\");\r\nconst numberText = document.getElementById(\"numberText\");\r\nconst increasingNumberText = document.getElementById(\"increasingNumberText\");\r\nconst questionSentence = document.getElementById(\"questionSentence\");\r\nconst questionId = document.getElementById(\"questionId\");\r\nlet mode = \"EtoJ\";\r\n\r\n\r\nMicroModal.init({\r\n  awaitOpenAnimation: true,\r\n  disableScroll:true\r\n});\r\n\r\nplusButton.addEventListener(\"click\",() => {\r\n  questionNumber+=increase;\r\n  console.log(questionNumber);\r\n  numberText.textContent = questionNumber;\r\n});\r\n\r\nplusIncreaseButton.addEventListener(\"click\",() => {\r\n  increase++;\r\n  console.log(increase+\"増減値\");\r\n  increasingNumberText.textContent = increase;\r\n});\r\n\r\nminusButton.addEventListener(\"click\",() => {\r\n  questionNumber-=increase;\r\n  if(questionNumber < 0){\r\n    alert(\"これ以上マイナスボタンは押せません\");\r\n    questionNumber+=increase;\r\n    return;\r\n  }\r\n  console.log(questionNumber);\r\n  numberText.textContent = questionNumber;\r\n});\r\n\r\nminusIncreaseButton.addEventListener(\"click\",() => {\r\n  increase--;\r\n  if(increase< 0){\r\n    alert(\"これ以上マイナスボタンは押せません\");\r\n    increase++;\r\n    return;\r\n  }\r\n  console.log(increase+\"増減値\");\r\n  increasingNumberText.textContent = increase;\r\n});\r\n\r\neToJButton.addEventListener(\"click\",() => {\r\n  eToJButton.classList.add(\"selectedButton\");\r\n  jToEButton.classList.remove(\"selectedButton\");\r\n\r\n});\r\njToEButton.addEventListener(\"click\",() => {\r\n  jToEButton.classList.add(\"selectedButton\");\r\n  eToJButton.classList.remove(\"selectedButton\");\r\n});\r\n\r\nconst startTyping = () => {\r\n  //問題数を設定\r\n  if(document.getElementsByClassName(\"selectedButton\").item(0).id == \"eToJButton\"){\r\n    mode = \"EtoJ\";\r\n    console.log(\"EtoJ\");\r\n  }else{\r\n    mode = \"JtoE\";\r\n    console.log(\"JtoE\");\r\n\r\n  }\r\n  console.log(document.getElementsByClassName(\"selectedButton\").item(0).id);\r\n  questionSentence.textContent = _datasets_js__WEBPACK_IMPORTED_MODULE_0__.datasets[0][1][0];\r\n  questionId.textContent = _datasets_js__WEBPACK_IMPORTED_MODULE_0__.datasets[0];\r\n  console.log(questionNumber);\r\n}\r\n\r\nsettingSaveButton.addEventListener(\"click\",startTyping);\r\n\r\n\r\n\r\n\r\ntypingArea.addEventListener(\"keypress\",(e) => {\r\n  if(e.key == \"Enter\"){\r\n    //数値以外が入力されていないかどうか\r\n    console.log(\"Enterされました\");\r\n    typingArea.value == \"\";\r\n    // questionSentence;\r\n \r\n    //数値以外\r\n\r\n    //\r\n\r\n\r\n\r\n\r\n  }\r\n})\n\n//# sourceURL=webpack://typing/./src/index.js?");

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