import settings from '../settings/settings.js';

const playBtns = document.querySelectorAll('.play');

const playEvents = () => {
  playBtns.forEach((button) => {
    button.addEventListener('click', () => {
      const hideSection = document.querySelector(`.${button.name}`);
      hideSection.style.display = 'none';
      settings();
    });
  });
};

export default playEvents;
