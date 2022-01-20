"use strict";

export const modal = document.getElementById("modal"); //modalを指定
export const overlay = document.getElementById("overlay"); //overlayを指定
export const settingButton = document.getElementById("settingButton"); //modalを開くボタンを指定
export const settingCloseButton = document.getElementById("settingCloseButton"); //modalを開くボタンを指定


//modalとoverlayのhiddenクラスを消す（modalとoverlayが見えるようにする）処理
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