import startOver from './startOver.js';

let decreaseMovesLimit = 200;
const movesLimit = document.querySelector('.game__limit');

const countDown = () => {
  decreaseMovesLimit -= 1;
  movesLimit.innerHTML = decreaseMovesLimit;

  if (decreaseMovesLimit === 0) {
    startOver('lost');
    decreaseMovesLimit = 200;
  }
};

export default countDown;
