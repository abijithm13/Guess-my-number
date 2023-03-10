'use strict';

function createSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = createSecretNumber();
let score = 10;
let highScore = 0;

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const bodyEl = document.querySelector('body');
const newgameEl = document.querySelector('.newgame');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // When there is no input
  if (!guess) {
    messageEl.textContent = 'No number!';

    // When player wins
  } else if (guess === secretNumber) {
    messageEl.textContent = 'Correct number!';
    numberEl.textContent = secretNumber;
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageEl.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "You've lost the game";
      scoreEl.textContent = 0;
    }
  }
});

newgameEl.addEventListener('click', function () {
  score = 10;
  secretNumber = createSecretNumber();
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  scoreEl.textContent = score;
  guessEl.value = '';
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});