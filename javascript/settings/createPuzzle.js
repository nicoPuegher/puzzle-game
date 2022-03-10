const game = document.querySelector('.game');
const table = document.querySelector('.game__table');
const movesLimit = document.querySelector('.game__limit');

const createPuzzle = (mode, size) => {
  game.style.display = 'unset';

  const totalRows = +size;
  const totalColumns = +size;

  let puzzle = '';
  let puzzleBlockId = -1;

  for (let row = 0; row < totalRows; row += 1) {
    puzzle += '<tr>';

    for (let column = 0; column < totalColumns; column += 1) {
      puzzle += `<td id=${(puzzleBlockId += 1)}>`;
    }
  }

  table.innerHTML = puzzle;
  movesLimit.innerHTML = 200;

  // createImage here if needed
  // add blocks content here
  // add block events here
};

export default createPuzzle;