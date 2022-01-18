/**
 * タップされたらはじまる(スマホ)
 * クリック、キープレスなにかしらの処理があればはじまる
 */

import { wrongAnswer,isSmartPhone } from "./logic.js";
//const typing

export const typingInput = document.getElementById("typing-input");
export const question = document.getElementById("question");

/**
 * リロードする
 */
const doReload = () => {
  window.location.reload();
}

/**
 * 配列に補完された間違えた問題と答えを最後に表示する
 */


/**
 * 次の問題へ進む
 */

const tapOrKeyPress = () => {
  if(isSmartPhone()){
    question.textContent = "これはスマホです"
  }else{
    question.textContent = "これはPCです"
  }
}

/**
 * タッチされたときの処理
 */
window.addEventListener("touchstart", function (event) {
  //処理を記述
});

export const typingInputKeyPress = (e) => {
  if(e.key == 'Enter'){
    const typingInputValue = typingInput.value
    console.log(wrongAnswer[0]);
    console.log(typingInputValue);
  }
}

tapOrKeyPress();

typingInput.addEventListener('keypress',typingInputKeyPress);
