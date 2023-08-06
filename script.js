'use strict';
const first = document.querySelector('#score--0');
const second = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const first_score = document.querySelector('#current--0');
const second_score = document.querySelector('#current--1');
const new_game = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
let dice_img = document.querySelector('.dice');
let currentScore, currentPlayer, playing, score;
const alpha = function () {
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = 1 - currentPlayer;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
const init = function () {
  dice_img.classList.add('hidden');
  currentScore = 0;
  currentPlayer = 0;
  score = [0, 0];
  playing = true;
  first.textContent = 0;
  second.textContent = 0;
  first_score.textContent = 0;
  second_score.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
roll.addEventListener('click', function () {
  if (playing == true) {
    let secerateNumber = Math.trunc(Math.random() * 6) + 1;
    dice_img.classList.remove('hidden');
    dice_img.src = `dice-${secerateNumber}.png`;
    // check if one or not
    if (secerateNumber != 1) {
      currentScore += secerateNumber;
      console.log(currentScore);
      if (currentPlayer == 0) {
        first_score.textContent = currentScore;
      } else {
        second_score.textContent = currentScore;
      }
    } else {
      alpha();
    }
  }
});
hold.addEventListener('click', function () {
  // add to current score
  if (playing == true) {
    score[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      score[currentPlayer];
    if (score[currentPlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else alpha();
  }
});
new_game.addEventListener('click', init);
