import { playerArr } from '../helpers/gameArrays.js';

const tablesData = document.getElementsByTagName('td');

const blocksContent = (mode, size) => {
  const puzzleSize = size * size;

  for (let i = 0; i < puzzleSize; i += 1) {
    if (playerArr[i].id === puzzleSize || playerArr[i] === puzzleSize) {
      tablesData[i].innerHTML = '';
      // update blank position here
    } else if (playerArr[i].id >= 1 || playerArr[i] >= 1) {
      mode === 'image'
        ? (tablesData[i].innerHTML = playerArr[i].img)
        : (tablesData[i].innerHTML = playerArr[i]);
    }
  }
};

export default blocksContent;
