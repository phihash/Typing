"use strict";

/** 
 * 問題数を選択する
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
export let questionNumber = 10; //デフォルト値
export let remainingQuestionNumber = 10; //残りの問題数
export const typingArea = document.getElementById("typingArea");
export const questionNumberArea = document.getElementById("questionNumberArea");
export const settingSaveButton = document.getElementById("settingSaveButton");
export const eToJButton = document.getElementById("eToJButton");
export const jToEButton = document.getElementById("jToEButton");
export const reloadButton = document.getElementById("reloadButton");
export let EJMode = "EtoJ";


MicroModal.init({
  awaitOpenAnimation: true,
});

const doReload = () => {
  document.location.reload();
}

reloadButton.addEventListener("click",doReload);

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
  
  console.log(questionNumber);
}

settingSaveButton.addEventListener("click",startTyping);




typingArea.addEventListener("keypress",(e) => {
  if(e.key == "Enter"){
    //数値以外が入力されていないかどうか
    console.log("Enterされました")
    
 
    //数値以外

    //




  }
})