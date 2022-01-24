"use strict";
/** 
 * 間違えた問題を表示する
 * 点数を計算する
 * 割合を計算する
 * Tweet機能
 * 報告する機能
 * リロードする機能する
 * ランダムに問題数を選択する
 * 正解かどうかを判断する
 *和英設定
*/
import {datasets} from "./datasets.js"
import {shuffle} from "./function.js"
export let questionNumber = 10; //デフォルト値
export let increase = 5; //デフォルト値
export let remainingQuestionNumber = 10; //残りの問題数
export const typingArea = document.getElementById("typingArea");
export const questionNumberArea = document.getElementById("questionNumberArea");
export const settingSaveButton = document.getElementById("settingSaveButton");
export const eToJButton = document.getElementById("eToJButton");
export const jToEButton = document.getElementById("jToEButton");
export const closeButton = document.getElementById("closeButton");
export const plusIncreaseButton = document.getElementById("plusIncreaseButton");
export const minusIncreaseButton = document.getElementById("minusIncreaseButton");
export const minusButton = document.getElementById("minusButton");
export const plusButton = document.getElementById("plusButton");
export const numberText = document.getElementById("numberText");
export const increasingNumberText = document.getElementById("increasingNumberText");
export const questionSentence = document.getElementById("questionSentence");
export const questionId = document.getElementById("questionId");
export let mode = "EtoJ";
export let wrongAnswers = [];

MicroModal.init({
  awaitOpenAnimation: true,
  disableScroll:true
});

plusButton.addEventListener("click",() => {
  questionNumber+=increase;
  numberText.textContent = questionNumber;
});

plusIncreaseButton.addEventListener("click",() => {
  increase++;
  increasingNumberText.textContent = increase;
});

minusButton.addEventListener("click",() => {
  questionNumber-=increase;
  if(questionNumber < 0){
    alert("これ以上マイナスボタンは押せません");
    questionNumber+=increase;
    return;
  }
  numberText.textContent = questionNumber;
});

minusIncreaseButton.addEventListener("click",() => {
  increase--;
  if(increase< 0){
    alert("これ以上マイナスボタンは押せません");
    increase++;
    return;
  }
  increasingNumberText.textContent = increase;
});

eToJButton.addEventListener("click",() => {
  eToJButton.classList.add("selectedButton");
  jToEButton.classList.remove("selectedButton");
});

jToEButton.addEventListener("click",() => {
  jToEButton.classList.add("selectedButton");
  eToJButton.classList.remove("selectedButton");
});



const selectingQuestion = (arr) => {
  arr = shuffle(arr);
  for(let i=0;i < questionNumber ;i++){
    questionSentence.textContent = Object.values(arr[i])[0][0];
    questionId.textContent = Object.keys(arr[i]);
  }
}
const startTyping = () => {
  //問題数を設定
  if(document.getElementsByClassName("selectedButton").item(0).id == "eToJButton"){
    mode = "EtoJ";
    console.log("EtoJ");
  }else{
    mode = "JtoE";
    console.log("JtoE");
  }
  selectingQuestion(datasets);

  console.log(document.getElementsByClassName("selectedButton").item(0).id);
}

settingSaveButton.addEventListener("click",startTyping);




// typingArea.addEventListener("keypress",(e) => {
//   if(e.key == "Enter"){
//     //数値以外が入力されていないかどうか
//     console.log("Enterされました");
//     typingArea.value == "";
//     // questionSentence;
 
//     //数値以外

//     //

//   }
// })