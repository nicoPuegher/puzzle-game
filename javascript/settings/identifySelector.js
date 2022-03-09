const modeSelectors = document.querySelectorAll('.mode__selector');
const sizeSelectors = document.querySelectorAll('.size__selector');

const selectorLogic = (selector, selectorGroup) => {
  const currentInput = selector.children[0];

  selectorGroup.forEach((element) => {
    const singleSelector = element;
    singleSelector.classList.remove('active');
    singleSelector.children[0].checked = false;
  });

  selector.classList.add('active');
  currentInput.checked = true;

  // validate form here
};

const identifySelector = (selector) => {
  const identified = selector.classList.contains('mode__selector');

  identified
    ? selectorLogic(selector, modeSelectors)
    : selectorLogic(selector, sizeSelectors);
};

export default identifySelector;
