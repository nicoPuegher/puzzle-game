import blocksMovement from '../logic/blocksMovement.js';

const tablesData = document.getElementsByTagName('td');

const blockEvents = (mode, size) => {
  Array.from(tablesData).forEach((tableData) => {
    tableData.addEventListener('click', () => {
      blocksMovement(+tableData.id, mode, size);
    });
  });
};

export default blockEvents;
