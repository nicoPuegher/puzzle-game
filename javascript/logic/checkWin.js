import startOver from './startOver.js';
import { victoryArr } from '../helpers/gameArrays.js';

const tablesData = document.getElementsByTagName('td');

const compareWinningArr = (mode, puzzleSize) => {
  const currentPlayerArr = [];
  const winningImg = [];
  const winningNumbers = [];

  for (let i = 0; i < puzzleSize; i += 1) {
    currentPlayerArr.push(tablesData[i].innerHTML);
    mode === 'image'
      ? winningImg.push(victoryArr[i].img)
      : winningNumbers.push(`${victoryArr[i]}`);
  }

  if (mode === 'image') {
    winningImg.splice(winningImg.length - 1, 1, '');
    const imgWin =
      JSON.stringify(winningImg) === JSON.stringify(currentPlayerArr);
    return imgWin;
  }

  winningNumbers.splice(winningNumbers.length - 1, 1, '');
  const numWin =
    JSON.stringify(winningNumbers) === JSON.stringify(currentPlayerArr);
  return numWin;
};

const checkWin = (mode, size) => {
  const puzzleSize = size ** 2;

  const result = compareWinningArr(mode, puzzleSize);

  if (result) {
    startOver('won');
  }
};

export default checkWin;
