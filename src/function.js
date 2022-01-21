/** 
 * 問題数を選択する
 * 間違えた問題を表示する
 * 点数を計算する
 * 割合を計算する
 * Tweet機能
 * ランダムに問題数を選択する
 * 正解かどうかを判断する
*/
import {datasets} from "./datasets.js"
import {questionNumber} from "./index.js"

export const createDom = (tag) => {
  return document.createElement(tag);
}

export const removeAll = () => {

}

const includeNotANumber = (target) => {
  
}

const judgeIsNumber = (target) => {
  console.log(target);
  if(!Number.isNaN(parseInt(target))){
    return true;
  }else{
    return false;
  }
}

const judgeCorrect = () => {

}

const calculateRate = () => {

}

const calculateScore = () => {

}

const doReload = () => {
  window.location.reload();
}

const selectQuestion = () => {
  datasets
}

const storeWrongQuestion = () => {

}