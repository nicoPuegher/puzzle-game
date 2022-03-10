import { rowEmptyBlock } from '../logic/updateBlankPosition.js';

const tablesData = document.getElementsByTagName('td');

const checkRow = (id) => {
  if (rowEmptyBlock.contains(tablesData[id])) {
    return true;
  }

  return false;
};

export default checkRow;
