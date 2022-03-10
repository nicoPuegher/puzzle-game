import identifySelector from '../helpers/identifySelector.js';
import createPuzzle from './createPuzzle.js';
import { selectedMode, selectedSize } from '../helpers/validateForm.js';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.mode__check, .size__check');
const startBtn = document.querySelector('.form__submit');
const selectors = document.querySelectorAll('.mode__selector, .size__selector');

const settings = () => {
  form.style.display = 'unset';

  inputs.forEach((element) => {
    const input = element;
    input.style.display = 'none';
  });

  startBtn.disabled = true;

  selectors.forEach((selector) => {
    selector.addEventListener('click', (event) => {
      event.preventDefault();
      identifySelector(event.target);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.style.display = 'none';
    createPuzzle(selectedMode, selectedSize);
  });
};

export default settings;
