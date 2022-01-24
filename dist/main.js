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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"datasets\": () => (/* binding */ datasets)\n/* harmony export */ });\n\r\n\r\nconst datasets = [\r\n    {\"01\":[\"貧血\",\"anemia\"]},\r\n    {\"02\":[\"食思不振\",\"anorexia\"]},\r\n    {\"03\":[\"緑内障\",\"glaucoma\"]},\r\n    {\"04\":[\"機能不全\",\"malfunction\"]},\r\n    {\"05\":[\"骨盤\",\"pelvis\"]},\r\n    {\"06\":[\"唾液\",\"saliva\"]},\r\n    {\"07\":[\"安楽死\",\"euthanasia\"]},\r\n    {\"08\":[\"関節炎\",\"arthritis\"]},\r\n    {\"09\":[\"頭蓋咽頭腫\",\"craniopharyngioma\"]},\r\n    {\"10\":[\"脳動脈瘤\",\"cerebral aneurysm\"]},\r\n];\n\n//# sourceURL=webpack://typing/./src/datasets.js?");

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle),\n/* harmony export */   \"createDom\": () => (/* binding */ createDom),\n/* harmony export */   \"removeAll\": () => (/* binding */ removeAll)\n/* harmony export */ });\n/* harmony import */ var _datasets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasets.js */ \"./src/datasets.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/** \r\n * 問題数を選択する\r\n * 間違えた問題を表示する\r\n * 点数を計算する\r\n * 割合を計算する\r\n * Tweet機能\r\n * ランダムに問題数を選択する\r\n * 正解かどうかを判断する\r\n*/\r\n\r\n\r\n\r\nconst shuffle = (array) => {\r\n  array.sort(() => Math.random() - 0.5);\r\n  return array;\r\n}\r\n\r\nconst createDom = (tag) => {\r\n  return document.createElement(tag);\r\n}\r\n\r\nconst removeAll = () => {\r\n\r\n}\r\n\r\nconst includeNotANumber = (target) => {\r\n  \r\n}\r\n\r\nconst judgeIsNumber = (target) => {\r\n  console.log(target);\r\n  if(!Number.isNaN(parseInt(target))){\r\n    return true;\r\n  }else{\r\n    return false;\r\n  }\r\n}\r\n\r\nconst judgeCorrect = () => {\r\n\r\n}\r\n\r\nconst calculateRate = () => {\r\n\r\n}\r\n\r\nconst calculateScore = () => {\r\n\r\n}\r\n\r\nconst doReload = () => {\r\n  window.location.reload();\r\n}\r\n\r\nconst selectQuestion = () => {\r\n  _datasets_js__WEBPACK_IMPORTED_MODULE_0__.datasets\r\n}\r\n\r\nconst storeWrongQuestion = () => {\r\n\r\n}\n\n//# sourceURL=webpack://typing/./src/function.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"questionNumber\": () => (/* binding */ questionNumber),\n/* harmony export */   \"increase\": () => (/* binding */ increase),\n/* harmony export */   \"remainingQuestionNumber\": () => (/* binding */ remainingQuestionNumber),\n/* harmony export */   \"typingArea\": () => (/* binding */ typingArea),\n/* harmony export */   \"questionNumberArea\": () => (/* binding */ questionNumberArea),\n/* harmony export */   \"settingSaveButton\": () => (/* binding */ settingSaveButton),\n/* harmony export */   \"eToJButton\": () => (/* binding */ eToJButton),\n/* harmony export */   \"jToEButton\": () => (/* binding */ jToEButton),\n/* harmony export */   \"closeButton\": () => (/* binding */ closeButton),\n/* harmony export */   \"plusIncreaseButton\": () => (/* binding */ plusIncreaseButton),\n/* harmony export */   \"minusIncreaseButton\": () => (/* binding */ minusIncreaseButton),\n/* harmony export */   \"minusButton\": () => (/* binding */ minusButton),\n/* harmony export */   \"plusButton\": () => (/* binding */ plusButton),\n/* harmony export */   \"numberText\": () => (/* binding */ numberText),\n/* harmony export */   \"increasingNumberText\": () => (/* binding */ increasingNumberText),\n/* harmony export */   \"questionSentence\": () => (/* binding */ questionSentence),\n/* harmony export */   \"questionId\": () => (/* binding */ questionId),\n/* harmony export */   \"mode\": () => (/* binding */ mode),\n/* harmony export */   \"wrongAnswers\": () => (/* binding */ wrongAnswers)\n/* harmony export */ });\n/* harmony import */ var _datasets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasets.js */ \"./src/datasets.js\");\n/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function.js */ \"./src/function.js\");\n\r\n/** \r\n * 間違えた問題を表示する\r\n * 点数を計算する\r\n * 割合を計算する\r\n * Tweet機能\r\n * 報告する機能\r\n * リロードする機能する\r\n * ランダムに問題数を選択する\r\n * 正解かどうかを判断する\r\n *和英設定\r\n*/\r\n\r\n\r\nlet questionNumber = 10; //デフォルト値\r\nlet increase = 5; //デフォルト値\r\nlet remainingQuestionNumber = 10; //残りの問題数\r\nconst typingArea = document.getElementById(\"typingArea\");\r\nconst questionNumberArea = document.getElementById(\"questionNumberArea\");\r\nconst settingSaveButton = document.getElementById(\"settingSaveButton\");\r\nconst eToJButton = document.getElementById(\"eToJButton\");\r\nconst jToEButton = document.getElementById(\"jToEButton\");\r\nconst closeButton = document.getElementById(\"closeButton\");\r\nconst plusIncreaseButton = document.getElementById(\"plusIncreaseButton\");\r\nconst minusIncreaseButton = document.getElementById(\"minusIncreaseButton\");\r\nconst minusButton = document.getElementById(\"minusButton\");\r\nconst plusButton = document.getElementById(\"plusButton\");\r\nconst numberText = document.getElementById(\"numberText\");\r\nconst increasingNumberText = document.getElementById(\"increasingNumberText\");\r\nconst questionSentence = document.getElementById(\"questionSentence\");\r\nconst questionId = document.getElementById(\"questionId\");\r\nlet mode = \"EtoJ\";\r\nlet wrongAnswers = [];\r\n\r\nMicroModal.init({\r\n  awaitOpenAnimation: true,\r\n  disableScroll:true\r\n});\r\n\r\nplusButton.addEventListener(\"click\",() => {\r\n  questionNumber+=increase;\r\n  numberText.textContent = questionNumber;\r\n});\r\n\r\nplusIncreaseButton.addEventListener(\"click\",() => {\r\n  increase++;\r\n  increasingNumberText.textContent = increase;\r\n});\r\n\r\nminusButton.addEventListener(\"click\",() => {\r\n  questionNumber-=increase;\r\n  if(questionNumber < 0){\r\n    alert(\"これ以上マイナスボタンは押せません\");\r\n    questionNumber+=increase;\r\n    return;\r\n  }\r\n  numberText.textContent = questionNumber;\r\n});\r\n\r\nminusIncreaseButton.addEventListener(\"click\",() => {\r\n  increase--;\r\n  if(increase< 0){\r\n    alert(\"これ以上マイナスボタンは押せません\");\r\n    increase++;\r\n    return;\r\n  }\r\n  increasingNumberText.textContent = increase;\r\n});\r\n\r\neToJButton.addEventListener(\"click\",() => {\r\n  eToJButton.classList.add(\"selectedButton\");\r\n  jToEButton.classList.remove(\"selectedButton\");\r\n});\r\n\r\njToEButton.addEventListener(\"click\",() => {\r\n  jToEButton.classList.add(\"selectedButton\");\r\n  eToJButton.classList.remove(\"selectedButton\");\r\n});\r\n\r\n\r\n\r\nconst selectingQuestion = (arr) => {\r\n  arr = (0,_function_js__WEBPACK_IMPORTED_MODULE_1__.shuffle)(arr);\r\n  for(let i=0;i < questionNumber ;i++){\r\n    questionSentence.textContent = Object.values(arr[i])[0][0];\r\n    questionId.textContent = Object.keys(arr[i]);\r\n  }\r\n}\r\nconst startTyping = () => {\r\n  //問題数を設定\r\n  if(document.getElementsByClassName(\"selectedButton\").item(0).id == \"eToJButton\"){\r\n    mode = \"EtoJ\";\r\n    console.log(\"EtoJ\");\r\n  }else{\r\n    mode = \"JtoE\";\r\n    console.log(\"JtoE\");\r\n  }\r\n  selectingQuestion(_datasets_js__WEBPACK_IMPORTED_MODULE_0__.datasets);\r\n\r\n  console.log(document.getElementsByClassName(\"selectedButton\").item(0).id);\r\n}\r\n\r\nsettingSaveButton.addEventListener(\"click\",startTyping);\r\n\r\n\r\n\r\n\r\n// typingArea.addEventListener(\"keypress\",(e) => {\r\n//   if(e.key == \"Enter\"){\r\n//     //数値以外が入力されていないかどうか\r\n//     console.log(\"Enterされました\");\r\n//     typingArea.value == \"\";\r\n//     // questionSentence;\r\n \r\n//     //数値以外\r\n\r\n//     //\r\n\r\n//   }\r\n// })\n\n//# sourceURL=webpack://typing/./src/index.js?");

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