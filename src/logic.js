/*
*スマホかどうかを判断する
1.ランダムに問題を選ぶ
2.選ばれた問題が正解かどうかを判断する
3.間違えた問題を配列に挿入する
*/
import {datasets} from "./datasets.js"

export const isSmartPhone = () => {
  // UserAgentからのスマホ判定
  const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return (window.navigator.userAgent.search(regexp) !== -1);
}


export const wrongAnswer = ["aaa","saa"];
