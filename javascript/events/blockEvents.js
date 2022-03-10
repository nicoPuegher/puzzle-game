import blocksMovement from '../logic/blocksMovement.js';

const tablesData = document.getElementsByTagName('td');

const blockEvents = (size) => {
  Array.from(tablesData).forEach((tableData) => {
    tableData.addEventListener('click', () => {
      blocksMovement(+tableData.id, size);
    });
  });
};

export default blockEvents;
