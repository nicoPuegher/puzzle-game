import checkScreen from './checkScreen.js';

const changeRem = (size) => {
  const tablesData = document.querySelectorAll('td');
  const remSize = checkScreen();
  let rem;

  switch (size) {
    case 3:
      [rem] = remSize;
      break;
    case 4:
      [, rem] = remSize;
      break;
    case 5:
      [, , rem] = remSize;
      break;
    default:
      break;
  }

  tablesData.forEach((element) => {
    const data = element;
    data.style.width = rem;
    data.style.height = rem;
  });
};

export default changeRem;
