let blankPosition;
let rowEmptyBlock;

const updateRowEmptyBlock = (newRow) => {
  rowEmptyBlock = newRow.parentElement;
};

const updateBlankPosition = (block) => {
  blankPosition = block.id;
  updateRowEmptyBlock(block);
};

export default updateBlankPosition;
export { blankPosition, rowEmptyBlock };
