/**
 * リロードする
 * 次の問題へ行く
 * 配列に補完された間違えた問題と答えを最後に表示する
 * 
 * 
 */

import { wrongAnswer,isSmartPhone } from "./logic.js";
//const typing

export const typingInput = document.getElementById("typing-input");
export const question = document.getElementById("question");

const tapOrKeyPress = () => {
  if(isSmartPhone()){
    question.textContent = "これはスマホです"
  }else{
    question.textContent = "これはPCです"
  }
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
