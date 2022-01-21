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
*/
export let questionNumber = 10; //デフォルト値
export let remainingQuestionNumber = 10; //残りの問題数
export const typingArea = document.getElementById("typingArea");
export const questionNumberArea = document.getElementById("questionNumberArea");


MicroModal.init({
  awaitOpenAnimation: true,
});


typingArea.addEventListener("keypress",(e) => {
  if(e.key == "Enter"){
    //数値以外が入力されていないかどうか
    console.log("Enterされました")
    
 
    //数値以外

    //




  }
})