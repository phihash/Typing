
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

/**
 * 選ばれた問題数を反映させる
 * 
 */
export const showQuestionNumInDisplay = () => {
  if(Number(typingInputValue) && numberMode){
    questionNum = Number(typingInputValue);
    showQuestionNum.textContent = questionNum;
    numberMode = false;
    typingMode = true;
  }else if(typingMode == false){
    alert("半角数字を入力してください");
  }
}