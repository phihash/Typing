/**
 * タップされたらはじまる(スマホ)
 * クリック、キープレスなにかしらの処理があればはじまる
 */

import { wrongWords,isSmartPhone } from "./logic.js";
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
const showWrongWords = () =>{

}


/**
 * 次の問題へ進む
 */

const tapOrKeyPress = () => {
  if(isSmartPhone()){
    question.textContent = "適当にタップするとはじまります";
  }else{
    question.textContent = "適当にキーボードを押すとはじまります";
  }
}

/**
 * タッチされたときの処理｀
 */
window.addEventListener("touchstart", startTyping);

document.addEventListener("keydown", startTyping);

const startTyping = () => {
    question.textContent = "はじまりました"
}



export const typingInputKeyPress = (e) => {
  if(e.key == 'Enter'){
    const typingInputValue = typingInput.value
    console.log(wrongAnswer[0]);
    console.log(typingInputValue);
  }
}

tapOrKeyPress();

typingInput.addEventListener('keypress',typingInputKeyPress);
