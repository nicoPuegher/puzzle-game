import countDown from './countDown.js';
import updateBlankPosition, { blankPosition } from './updateBlankPosition.js';
import checkRow from '../helpers/checkRow.js';

const tablesData = document.getElementsByTagName('td');

const movement = (id) => {
  tablesData[blankPosition].innerHTML = tablesData[id].innerHTML;
  tablesData[id].innerHTML = '';
  updateBlankPosition(tablesData[id]);
  countDown();
};

const blocksMovement = (id, size) => {
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

  // check win here
};

export default blocksMovement;
