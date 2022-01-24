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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"datasets\": () => (/* binding */ datasets)\n/* harmony export */ });\n\r\n\r\nconst datasets = [\r\n    {\"01\":[\"貧血\",\"anemia\"]},\r\n    {\"02\":[\"食思不振\",\"anorexia\"]},\r\n    {\"03\":[\"緑内障\",\"glaucoma\"]},\r\n    {\"04\":[\"機能不全\",\"malfunction\"]},\r\n    {\"05\":[\"骨盤\",\"pelvis\"]},\r\n    {\"06\":[\"唾液\",\"saliva\"]},\r\n    {\"07\":[\"安楽死\",\"euthanasia\"]},\r\n    {\"08\":[\"関節炎\",\"arthritis\"]},\r\n    {\"09\":[\"頭蓋咽頭腫\",\"craniopharyngioma\"]},\r\n    {\"10\":[\"脳動脈瘤\",\"cerebral aneurysm\"]},\r\n    {\"11\":[\"認知症\",\"dementia\"]},\r\n    {\"12\":[\"心筋炎\",\"myocarditis\"]},\r\n    {\"13\":[\"胆嚢炎\",\"cholecystitis\"]},\r\n];\n\n//# sourceURL=webpack://typing/./src/datasets.js?");

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle),\n/* harmony export */   \"modeCheck\": () => (/* binding */ modeCheck),\n/* harmony export */   \"createDom\": () => (/* binding */ createDom),\n/* harmony export */   \"removeAll\": () => (/* binding */ removeAll),\n/* harmony export */   \"judgeCorrect\": () => (/* binding */ judgeCorrect),\n/* harmony export */   \"selectingQuestion\": () => (/* binding */ selectingQuestion)\n/* harmony export */ });\n/* harmony import */ var _datasets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasets.js */ \"./src/datasets.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/** \r\n * 問題数を選択する\r\n * 間違えた問題を表示する\r\n * 点数を計算する\r\n * 割合を計算する\r\n * Tweet機能\r\n * ランダムに問題数を選択する\r\n * 正解かどうかを判断する\r\n*/\r\n\r\n\r\n\r\nconst shuffle = (array) => {\r\n  array.sort(() => Math.random() - 0.5);\r\n  return array;\r\n}\r\n\r\nconst modeCheck = (str) => {\r\n  if(document.getElementsByClassName(\"selectedButton\").item(0).id == \"eToJButton\"){\r\n    str = \"EtoJ\";\r\n  }else{\r\n    str = \"JtoE\";\r\n  }\r\n  return str;\r\n} \r\n\r\nconst createDom = (tag) => {\r\n  return document.createElement(tag);\r\n}\r\n\r\nconst removeAll = () => {\r\n\r\n}\r\n\r\nconst includeNotANumber = (target) => {\r\n  \r\n}\r\n/**\r\n * 入力された解答と答えが一致しているかどうかを判断する\r\n * @param {String} mode\r\n * @param {String} submit //提出された答え\r\n * @param {Object} question //提示された答え\r\n */\r\nconst judgeCorrect = (mode,submit,question,i) => {\r\n  if(mode == \"EtoJ\"){\r\n    console.log(submit);\r\n    console.log(question[0][0]);\r\n    console.log(question[0][1]);\r\n  }else{\r\n    console.log(submit);\r\n    console.log(question[0][0]);\r\n    console.log(question[0][1]);\r\n  }\r\n}\r\n\r\nconst calculateRate = () => {\r\n\r\n}\r\n\r\nconst calculateScore = () => {\r\n\r\n}\r\n\r\nconst selectingQuestion = (arr) => {\r\n  let selectedQuestion = [];\r\n  arr = shuffle(arr);\r\n  for(let i=0;i < _index_js__WEBPACK_IMPORTED_MODULE_1__.questionNumber ;i++){\r\n    selectedQuestion.push(arr[i]);\r\n  }\r\n  return selectedQuestion;\r\n}\r\n\r\nconst storeWrongQuestion = () => {\r\n\r\n}\n\n//# sourceURL=webpack://typing/./src/function.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"questionNumber\": () => (/* binding */ questionNumber),\n/* harmony export */   \"increase\": () => (/* binding */ increase),\n/* harmony export */   \"solvedQuestionNumber\": () => (/* binding */ solvedQuestionNumber),\n/* harmony export */   \"remainingQuestionNumber\": () => (/* binding */ remainingQuestionNumber),\n/* harmony export */   \"typingArea\": () => (/* binding */ typingArea),\n/* harmony export */   \"questionNumberArea\": () => (/* binding */ questionNumberArea),\n/* harmony export */   \"settingSaveButton\": () => (/* binding */ settingSaveButton),\n/* harmony export */   \"eToJButton\": () => (/* binding */ eToJButton),\n/* harmony export */   \"jToEButton\": () => (/* binding */ jToEButton),\n/* harmony export */   \"closeButton\": () => (/* binding */ closeButton),\n/* harmony export */   \"minusButton\": () => (/* binding */ minusButton),\n/* harmony export */   \"plusButton\": () => (/* binding */ plusButton),\n/* harmony export */   \"numberText\": () => (/* binding */ numberText),\n/* harmony export */   \"questionSentence\": () => (/* binding */ questionSentence),\n/* harmony export */   \"questionId\": () => (/* binding */ questionId),\n/* harmony export */   \"mode\": () => (/* binding */ mode),\n/* harmony export */   \"questions\": () => (/* binding */ questions),\n/* harmony export */   \"wrongAnswers\": () => (/* binding */ wrongAnswers),\n/* harmony export */   \"questionIndex\": () => (/* binding */ questionIndex)\n/* harmony export */ });\n/* harmony import */ var _datasets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasets.js */ \"./src/datasets.js\");\n/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function.js */ \"./src/function.js\");\n\r\n/**  間違え問題表示 * 点数を計算 * 割合を計算 * Tweet * 報告 * 正解かどうか判断* サニタイズフォームクリア\r\n*/\r\n\r\n\r\nlet questionNumber = 10; //デフォルト値\r\nlet increase = 5; //デフォルト値\r\nlet solvedQuestionNumber = 0; //解けた問題の数\r\nlet remainingQuestionNumber = 10; //解けた問題の数\r\nconst typingArea = document.getElementById(\"typingArea\");\r\nconst questionNumberArea = document.getElementById(\"questionNumberArea\");\r\nconst settingSaveButton = document.getElementById(\"settingSaveButton\");\r\nconst eToJButton = document.getElementById(\"eToJButton\");\r\nconst jToEButton = document.getElementById(\"jToEButton\");\r\nconst closeButton = document.getElementById(\"closeButton\");\r\nconst minusButton = document.getElementById(\"minusButton\");\r\nconst plusButton = document.getElementById(\"plusButton\");\r\nconst numberText = document.getElementById(\"numberText\");\r\nconst questionSentence = document.getElementById(\"questionSentence\");\r\nconst questionId = document.getElementById(\"questionId\");\r\nlet mode = \"EtoJ\";\r\nlet questions = [];\r\nlet wrongAnswers = [];\r\nlet questionIndex = 0;\r\n\r\nMicroModal.init({\r\n  awaitOpenAnimation: true,\r\n  disableScroll:true\r\n});\r\n/* イベントリスナー */\r\nplusButton.addEventListener(\"click\",() => {\r\n  questionNumber+=increase;\r\n  numberText.textContent = questionNumber;\r\n});\r\nminusButton.addEventListener(\"click\",() => {\r\n  questionNumber-=increase;\r\n  if(questionNumber < 5){\r\n    alert(\"これ以上マイナスボタンは押せません\");\r\n    questionNumber+=increase;\r\n    return;\r\n  }\r\n  numberText.textContent = questionNumber;\r\n});\r\neToJButton.addEventListener(\"click\",() => {\r\n  eToJButton.classList.add(\"selectedButton\");\r\n  jToEButton.classList.remove(\"selectedButton\");\r\n});\r\njToEButton.addEventListener(\"click\",() => {\r\n  jToEButton.classList.add(\"selectedButton\");\r\n  eToJButton.classList.remove(\"selectedButton\");\r\n});\r\n\r\nconst startTyping = () => {\r\n  //問題数を設定  \r\n  remainingQuestionNumber = questionNumber;\r\n  questions = (0,_function_js__WEBPACK_IMPORTED_MODULE_1__.selectingQuestion)(_datasets_js__WEBPACK_IMPORTED_MODULE_0__.datasets); //問題を選択する\r\n  mode = (0,_function_js__WEBPACK_IMPORTED_MODULE_1__.modeCheck)(mode);//モード選択する\r\n    if(mode == \"JtoE\"){\r\n        questionSentence.textContent = Object.values(questions[questionIndex])[0][0];\r\n        questionId.textContent = Object.keys(questions[questionIndex]);\r\n    }else{\r\n        questionSentence.textContent = Object.values(questions[questionIndex])[0][1];\r\n         questionId.textContent = Object.keys(questions[questionIndex]);\r\n    }\r\n\r\n }\r\n\r\nsettingSaveButton.addEventListener(\"click\",startTyping);\r\n\r\ntypingArea.addEventListener(\"keypress\",(e) => {\r\n  if(e.key == \"Enter\"){\r\n    if(questions.length == 0){\r\n      alert(\"設定してください\");\r\n      return;\r\n    }\r\n    //数値以外が入力されていないかどうか\r\n    console.log(\"Enterされました\");\r\n    // questionSentence;\r\n    //数値以外\r\n    //合ってるかの処理\r\n    (0,_function_js__WEBPACK_IMPORTED_MODULE_1__.judgeCorrect)(mode,typingArea.value,Object.values(questions[questionIndex]),questionIndex);\r\n    remainingQuestionNumber--;//問題解くたび減らす\r\n\r\n\r\n    questionIndex++;//問題解くたび増やす\r\n    //\r\n    typingArea.value = null;\r\n      if(mode == \"JtoE\"){\r\n        questionSentence.textContent = Object.values(questions[questionIndex])[0][0];\r\n        questionId.textContent = Object.keys(questions[questionIndex]);\r\n    }else{\r\n        questionSentence.textContent = Object.values(questions[questionIndex])[0][1];\r\n        questionId.textContent = Object.keys(questions[questionIndex]);\r\n    }\r\n  }\r\n})\n\n//# sourceURL=webpack://typing/./src/index.js?");

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