let decreaseMovesLimit = 200;
const movesLimit = document.querySelector('.game__limit');

const countDown = () => {
  decreaseMovesLimit -= 1;
  movesLimit.innerHTML = decreaseMovesLimit;

  if (decreaseMovesLimit === 0) {
    // start over here
    decreaseMovesLimit = 200;
  }
};

export default countDown;
