
import { wrongWords,isSmartPhone,typingInputKeyPress } from "./logic.js";
//const typing

export const typingInput = document.getElementById("typing-input");
export const question = document.getElementById("question");

/**
 * リロードする
 */

const startFlag = false; //start 

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
 * 
 */

const nextTyping = () => {
  if(startFlag){

  }
}

const startTyping = () => {
  question.textContent = "はじまりました";
  startFlag = true;
}

window.addEventListener("touchstart", startTyping);
document.addEventListener("keydown", startTyping);


typingInput.addEventListener('keypress',typingInputKeyPress);

tapOrKeyPress();