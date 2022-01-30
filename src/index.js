"use strict";
import {datasets} from "./datasets.js"
import {modeCheck, selectingQuestion,judgeCorrect,checkIsAlphabets, processAlphabets} from "./function.js"
export let questionNumber = 10; //デフォルト値
export let increase = 5; //デフォルト値
export let solvedQuestionNumber = 0; //解けた問題の数
export const typingArea = document.getElementById("typingArea");
export const questionNumberArea = document.getElementById("questionNumberArea");
export const settingSaveButton = document.getElementById("settingSaveButton");
export const eToJButton = document.getElementById("eToJButton");
export const jToEButton = document.getElementById("jToEButton");
export const closeButton = document.getElementById("closeButton");
export const minusButton = document.getElementById("minusButton");
export const plusButton = document.getElementById("plusButton");
export const numberText = document.getElementById("numberText");
export const questionSentence = document.getElementById("questionSentence");
export const questionId = document.getElementById("questionId");
export const main = document.getElementById("main");
export let mode = "EtoJ";
export let questions = [];
export let wrongAnswers = [];
export let questionIndex = 0;
export let isFinished = false;

MicroModal.init({
  awaitOpenAnimation: true,
  disableScroll:true
});
/* イベントリスナー */
plusButton.addEventListener("click",() => {
  questionNumber+=increase;
  numberText.textContent = questionNumber;
});
minusButton.addEventListener("click",() => {
  questionNumber-=increase;
  if(questionNumber < 5){
    alert("これ以上マイナスボタンは押せません");
    questionNumber+=increase;
    return;
  }
  numberText.textContent = questionNumber;
});
eToJButton.addEventListener("click",() => {
  eToJButton.classList.add("selectedButton");
  jToEButton.classList.remove("selectedButton");
});
jToEButton.addEventListener("click",() => {
  jToEButton.classList.add("selectedButton");
  eToJButton.classList.remove("selectedButton");
});

const startTyping = () => {
  //問題数を設定
  if(isFinished){
    alert("もう1度行うにはリロードしてください");
    settingSaveButton.disabled = true;
  }
  solvedQuestionNumber = 0; //解けた問題の数を初期化
  wrongAnswers.splice(0, wrongAnswers.length);//間違い配列を空にする
  questions = selectingQuestion(datasets); //問題を選択する
  mode = modeCheck(mode);//モード選択する
    if(mode == "JtoE"){
        questionSentence.textContent = Object.values(questions[questionIndex])[0][0];
        questionId.textContent = Object.keys(questions[questionIndex]);
    }else{
        questionSentence.textContent = Object.values(questions[questionIndex])[0][1];
         questionId.textContent = Object.keys(questions[questionIndex]);
    }

 }

settingSaveButton.addEventListener("click",startTyping);

typingArea.addEventListener("keypress",(e) => {
  if(e.key == "Enter"){
    if(questions.length == 0){
      alert("設定してください");
      return;
    }

    if(typingArea.value.length === 0){
      alert("入力してください");
      return;
    }

    if(mode == "JtoE"){
      if(!checkIsAlphabets(typingArea.value)){
        alert("半角英字で入力してください");
        return;
      }
    }
    console.log(typingArea.value);
    typingArea.value = processAlphabets(typingArea.value);
    console.log(typingArea.value);

    if(judgeCorrect(mode,typingArea.value,Object.values(questions[questionIndex]))){
      solvedQuestionNumber++;
    }else{
      wrongAnswers.push(Object.values(questions[questionIndex])[0]);
    }
    if(questionIndex == questionNumber-1){
        // 終了した
        isFinished = true;
        while(main.firstChild){
             main.removeChild( main.firstChild );
             //子要素全部消し
        }
        main.classList.add("resultArea");
        let resultTitle = document.createElement("h2");
        resultTitle.classList.add("resultTitle");
        resultTitle.textContent = "あなたの間違えた問題";
        main.appendChild(resultTitle);
        for(let i=0;i < wrongAnswers.length;i++){
          console.log(wrongAnswers[i]);
          let p1 = document.createElement("p");
          p1.classList.add("result");
          p1.textContent = wrongAnswers[i];
          main.appendChild(p1);
        }

        let p2 = document.createElement("p");
        if(solvedQuestionNumber == 0){
         p2.innerHTML = "1問も正解しませんでした"+"<br></br>"+"正答率:0%";
        }else{
        p2.innerHTML = questionNumber+"問中"+solvedQuestionNumber+"問正解しました。"+"<br></br>"+"正答率:"+Math.floor(solvedQuestionNumber/questionNumber*100)+"%";
        }
        let scoreArea = document.createElement("div");
        scoreArea.classList.add("scoreArea");
        scoreArea.appendChild(p2);

        const tweetButton = document.createElement("a");

        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=Typing&ref_src=twsrc%5Etfw';
        tweetButton.setAttribute('href',hrefValue);
        tweetButton.className = "twitter-share-button";
        if(solvedQuestionNumber == 0){
          tweetButton.setAttribute('data-text', "1問も正解しませんでした");
        }else{
          tweetButton.setAttribute('data-text', questionNumber+"問中"+solvedQuestionNumber+"問正解しました!");
        }

        const script = document.createElement('script');
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        tweetButton.appendChild(script);

        const tweetArea = document.createElement("div");
        tweetArea.classList.add("tweetArea");
        tweetArea.appendChild(tweetButton);
        main.appendChild(scoreArea);
        main.appendChild(tweetArea);
        return;
    }
    questionIndex++;//問題解くたび増やす
    typingArea.value = null;
    if(mode == "JtoE"){
        questionSentence.textContent = Object.values(questions[questionIndex])[0][0];
        questionId.textContent = Object.keys(questions[questionIndex]);
    }else{
        questionSentence.textContent = Object.values(questions[questionIndex])[0][1];
        questionId.textContent = Object.keys(questions[questionIndex]);
    }
  }
})
