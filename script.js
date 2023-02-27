'use strict';

function createSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = createSecretNumber();
let score = 20;
let highScore = 0;

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const bodyEl = document.querySelector('body');
const newgameEl = document.querySelector('.newgame');

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


    // When guess is wrong
  } else if (guess !== secretNumber) {

    messageEl.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
}
});

newgameEl.addEventListener('click', function () {

  secretNumber = createSecretNumber();
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';

  guessEl.value = '';
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});