/*
1.ランダムに問題を選ぶ
2.選ばれた問題が正解かどうかを判断する
3.間違えた問題を配列に挿入する
4.アルファベットのみが入力されているかどうか
5.選択された問題の数だけ繰り返す
6.点数を数える
7.問題の報告をしたいときに、問題番号を覚えておく
8. サニタイズする
*/
import {typingInput,showQuestionNumInDisplay,showQuestionNum} from "./index.js"
import {datasets} from "./datasets.js"

export let questionNum = 0; //問題数を保持
export let numberMode = true; //
export let typingMode = false; //
export let getScore = 0;
export let presentQuestionNumber = 0;

export const isSmartPhone = () => {
  // UserAgentからのスマホ判定
  const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return (window.navigator.userAgent.search(regexp) !== -1);
}

export const typingInputKeyPress = (e) => {
  if(e.key == 'Enter'){
    const typingInputValue = typingInput.value;

    //問題数を保持しておく
    showQuestionNumInDisplay();
    console.log(questionNum);
  }
}


export const wrongWords = ["aaa","saa"];
