/**
 * 問題数を選択する
 * 間違えた問題を表示する
 * 点数を計算する
 * 割合を計算する
 * Tweet機能
 * ランダムに問題数を選択する
 * 正解かどうかを判断する
*/
import {questionNumber,wrongAnswers} from "./index.js"

export const  checkIsAlphabets = (string) => {
  string = string.split("");
  for(let i=0;i < string.length;i++){
    if(string[i].charCodeAt(0)>64 && string[i].charCodeAt(0)<123){
      return true;
    }
  }
}

export const processAlphabets = (string) => {
  string = string.split("");
  for(let i=0; i < string.length;i++){
    string[i] = string[i].toLowerCase();
  }
  return string.join("")
}

export const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
  return array;
}

export const modeCheck = (str) => {
  if(document.getElementsByClassName("selectedButton").item(0).id == "eToJButton"){
    str = "EtoJ";
  }else{
    str = "JtoE";
  }
  return str;
}

export const removeAll = (element) => {
  while(element){

  }
}

const includeNotANumber = (target) => {

}
/**
 * 入力された解答と答えが一致しているかどうかを判断する
 * @param {String} mode
 * @param {String} submit //提出された答え
 * @param {Object} question //提示された答え
 */
export const judgeCorrect = (mode,submit,question) => {
  if(mode == "EtoJ"){
    if(submit == question[0][0]){
      return true;
    }else{
      return false;
    }

  }else{

    if(submit == question[0][1]){
      return true;
    }else{
      return false;
    }
  }
}

export const selectingQuestion = (arr) => {
  let selectedQuestion = [];
  arr = shuffle(arr);
  for(let i=0;i < questionNumber ;i++){
    selectedQuestion.push(arr[i]);
  }
  return selectedQuestion;
}
