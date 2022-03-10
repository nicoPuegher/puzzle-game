const tablesData = document.getElementsByTagName('td');

const blockEvents = (size) => {
  Array.from(tablesData).forEach((tableData) => {
    tableData.addEventListener('click', () => {
      // add block movement here
    });
  });
};

export default blockEvents;
