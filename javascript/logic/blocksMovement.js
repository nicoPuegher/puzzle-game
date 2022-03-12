import countDown from './countDown.js';
import updateBlankPosition, { blankPosition } from './updateBlankPosition.js';
import checkRow from '../helpers/checkRow.js';
import checkWin from './checkWin.js';

const tablesData = document.getElementsByTagName('td');

const movement = (id) => {
  tablesData[blankPosition].innerHTML = tablesData[id].innerHTML;
  tablesData[id].innerHTML = '';
  updateBlankPosition(tablesData[id]);
  countDown();
};

const blocksMovement = (id, mode, size) => {
  const valid = checkRow(id);

  let move = blankPosition - id;

  if (move < 0) {
    move = -move;
  }

  if (move === 1) {
    if (!valid) {
      return;
    }

    movement(id);
  }

  if (move === size) {
    movement(id);
  }

  checkWin(mode, size);
};

export default blocksMovement;
