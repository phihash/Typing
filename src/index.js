
import { wrongWords,isSmartPhone,typingInputKeyPress } from "./logic.js";
//const typing

export const typingInput = document.getElementById("typing-input");
export const question = document.getElementById("question");
export const showQuestionNum = document.getElementById("showQuestionNum");


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


const nextTyping = () => {
  if(startFlag){

  }
}



typingInput.addEventListener('keypress',typingInputKeyPress);
