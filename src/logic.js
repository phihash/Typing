/*
*スマホかどうかを判断する
1.ランダムに問題を選ぶ
2.選ばれた問題が正解かどうかを判断する
3.間違えた問題を配列に挿入する
*/
import {datasets} from "./datasets.js"

export const isSmartPhone = () => {
  // UserAgentからのスマホ判定
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    return true;
  } else {
    return false;
  }
}


export const wrongAnswer = ["aaa","saa"];
