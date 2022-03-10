let blankPosition;
let rowEmptyBlock;

const updateRowEmptyBlock = (block) => {
  rowEmptyBlock = block.parentElement;
};

const updateBlankPosition = (block) => {
  blankPosition = +block.id;
  updateRowEmptyBlock(block);
};

export default updateBlankPosition;
export { blankPosition, rowEmptyBlock };
