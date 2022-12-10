"use strict";

let startBtnEl = document.getElementById("startBtn");
let communicationBoxEl = document.getElementById("communicationBox");

let numberInputEl = document.getElementById("numberInput");
let guessBtnEl = document.getElementById("guessBtn");
let yourScoreEl = document.getElementById("yourScore");
let highestScoreEl = document.getElementById("highestScore");

// globalVariables

let computerGuess = 0;
let yourScore = 20;
let HighScore = 0;

// function

function start() {
  startBtnEl.classList.add("none");
  communicationBoxEl.innerText = "Enter your guess number here !!!";
  guessBtnEl.classList.add("show");
  numberInputEl.classList.add("show");
  computerGuess = Math.round(Math.random() * 19) + 1;
  yourScoreEl.innerText = yourScore;
}

function compareWithGuess() {
  let numberInputVl = numberInputEl.value;
  numberInputEl.value = null;
  if (numberInputVl > 0 && numberInputVl < 21) {
    if (numberInputVl < computerGuess) {
      communicationBoxEl.innerText = "📉 Your number is Low";
      yourScore--;
      yourScoreEl.innerText = yourScore;
    } else if (numberInputVl > computerGuess) {
      communicationBoxEl.innerText = "📈 Your number is High";
      yourScore--;
      yourScoreEl.innerText = yourScore;
    } else {
      communicationBoxEl.innerText = `My number is ${computerGuess} . You found it!!! 🎉`;
      if (HighScore < yourScore) {
        HighScore = yourScore;
        highestScoreEl.innerText = HighScore;
      }
      guessBtnEl.classList.remove("show");
      numberInputEl.classList.remove("show");
      startBtnEl.classList.remove("none");
      yourScore = 0;
    }
  } else {
    alert("Enter a valid Number between 1 to 20 to play");
  }
}
