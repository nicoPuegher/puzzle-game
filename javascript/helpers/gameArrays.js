import { imagePieces } from '../settings/createImage.js';

let victoryArr;
let playerArr;

const gameArrays = (mode, size) => {
  victoryArr = [];

  const puzzleSize = size * size;

  for (let i = 1; i <= puzzleSize; i += 1) {
    if (mode === 'image') {
      victoryArr.push({ id: i, img: `<img src="${imagePieces[i]}">` });
    }

    if (mode === 'numbers') {
      victoryArr.push(i);
    }
  }

  playerArr = victoryArr.slice();

  for (let i = playerArr.length - 1; i > 0; i -= 1) {
    const random = Math.floor(Math.random() * (i + 1));
    [playerArr[i], playerArr[random]] = [playerArr[random], playerArr[i]];
  }
};

export default gameArrays;
export { playerArr };
