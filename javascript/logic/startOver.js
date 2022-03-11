const game = document.querySelector('.game');
const selectors = document.querySelectorAll('.mode__selector, .size__selector');

const startOver = (result) => {
  const gameResult = document.querySelector(`.${result}`);
  game.style.display = 'none';
  gameResult.style.display = 'unset';

  selectors.forEach((element) => {
    const selector = element;
    selector.classList.remove('active');
    selector.children[0].checked = false;
  });
};

export default startOver;
