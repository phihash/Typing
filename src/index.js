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
import { settingButton,settingCloseButton,modal,overlay } from "./setting";
export let questionNumber = 10; //デフォルト値
export let remainingQuestionNumber = 10; //残りの問題数
export const typingArea = document.getElementById("typingArea");
export const questionNumberArea = document.getElementById("questionNumberArea");

export const openModal = () => {
  console.log("クリックされました");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//modalとoverlayのhiddenクラスを追加する（modalとoverlayが見えないようにする）処理
export const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//modalの開くボタンと閉じるボタンをクリックした時の処理
settingButton.addEventListener("click", openModal);
settingCloseButton.addEventListener("click", closeModal);

typingArea.addEventListener("keypress",(e) => {
  if(e.key == "Enter"){
    //数値以外が入力されていないかどうか
    console.log("Enterされました")

 
    //数値以外

    //




  }
})