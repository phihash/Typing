"use strict";
/**  間違え問題表示 * 点数を計算 * 割合を計算 * Tweet * 報告 * 正解かどうか判断* サニタイズフォームクリア
*/
import {datasets} from "./datasets.js"
import {modeCheck, selectingQuestion,judgeCorrect} from "./function.js"
export let questionNumber = 10; //デフォルト値
export let increase = 5; //デフォルト値
export let solvedQuestionNumber = 0; //解けた問題の数
export let remainingQuestionNumber = 10; //解けた問題の数
export const typingArea = document.getElementById("typingArea");
export const questionNumberArea = document.getElementById("questionNumberArea");
export const settingSaveButton = document.getElementById("settingSaveButton");
export const eToJButton = document.getElementById("eToJButton");
export const jToEButton = document.getElementById("jToEButton");
export const closeButton = document.getElementById("closeButton");
export const minusButton = document.getElementById("minusButton");
export const plusButton = document.getElementById("plusButton");
export const numberText = document.getElementById("numberText");
export const questionSentence = document.getElementById("questionSentence");
export const questionId = document.getElementById("questionId");
export let mode = "EtoJ";
export let questions = [];
export let wrongAnswers = [];
export let questionIndex = 0;

MicroModal.init({
  awaitOpenAnimation: true,
  disableScroll:true
});
/* イベントリスナー */
plusButton.addEventListener("click",() => {
  questionNumber+=increase;
  numberText.textContent = questionNumber;
});
minusButton.addEventListener("click",() => {
  questionNumber-=increase;
  if(questionNumber < 5){
    alert("これ以上マイナスボタンは押せません");
    questionNumber+=increase;
    return;
  }
  numberText.textContent = questionNumber;
});
eToJButton.addEventListener("click",() => {
  eToJButton.classList.add("selectedButton");
  jToEButton.classList.remove("selectedButton");
});
jToEButton.addEventListener("click",() => {
  jToEButton.classList.add("selectedButton");
  eToJButton.classList.remove("selectedButton");
});

const startTyping = () => {
  //問題数を設定  
  remainingQuestionNumber = questionNumber;
  questions = selectingQuestion(datasets); //問題を選択する
  mode = modeCheck(mode);//モード選択する
    if(mode == "JtoE"){
        questionSentence.textContent = Object.values(questions[questionIndex])[0][0];
        questionId.textContent = Object.keys(questions[questionIndex]);
    }else{
        questionSentence.textContent = Object.values(questions[questionIndex])[0][1];
         questionId.textContent = Object.keys(questions[questionIndex]);
    }

 }

settingSaveButton.addEventListener("click",startTyping);

typingArea.addEventListener("keypress",(e) => {
  if(e.key == "Enter"){
    if(questions.length == 0){
      alert("設定してください");
      return;
    }
    //数値以外が入力されていないかどうか
    console.log("Enterされました");
    // questionSentence;
    //数値以外
    //合ってるかの処理
    judgeCorrect(mode,typingArea.value,Object.values(questions[questionIndex]),questionIndex);
    remainingQuestionNumber--;//問題解くたび減らす


    questionIndex++;//問題解くたび増やす
    //
    typingArea.value = null;
      if(mode == "JtoE"){
        questionSentence.textContent = Object.values(questions[questionIndex])[0][0];
        questionId.textContent = Object.keys(questions[questionIndex]);
    }else{
        questionSentence.textContent = Object.values(questions[questionIndex])[0][1];
        questionId.textContent = Object.keys(questions[questionIndex]);
    }
  }
})