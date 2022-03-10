const startBtn = document.querySelector('.form__submit');

const modeInputs = document.querySelectorAll('.mode__check');
const sizeInputs = document.querySelectorAll('.size__check');

let selectedMode;
let selectedSize;

const validateForm = () => {
  let validMode;
  let validSize;

  modeInputs.forEach((input) => {
    if (input.checked) {
      selectedMode = input.name;
      validMode = true;
    }
  });

  sizeInputs.forEach((input) => {
    if (input.checked) {
      selectedSize = input.name;
      validSize = true;
    }
  });

  validMode && validSize
    ? (startBtn.disabled = false)
    : (startBtn.disabled = true);
};

export default validateForm;
export { selectedMode, selectedSize };
