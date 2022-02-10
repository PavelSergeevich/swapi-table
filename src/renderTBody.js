
export const getTableBody = (table, start, end) => {
  const tableBody = document.createElement("tbody");
  tableBody.classList.add("table-body");
  table.forEach((item, i) => {
    if (i >= start && i < end) {
    const tableRowItem = document.createElement("tr");
    tableRowItem.classList.add("table-row");
    const tableColumnItem = document.createElement("td");
    tableColumnItem.innerText = i+1;
    tableColumnItem.classList.add("td-text");
    tableRowItem.appendChild(tableColumnItem);
    console.log(i)
    for (let key in item) {
      const tableColumnItem = document.createElement("td");
      tableColumnItem.innerText = item[key];
      tableColumnItem.classList.add("td-text");
      tableRowItem.appendChild(tableColumnItem);
    }
    tableBody.appendChild(tableRowItem);
  }
  });
  return tableBody;
};

export function getTableFromSStorage() {
  const storageTable = sessionStorage.getItem("swapi");
  return storageTable ? JSON.parse(storageTable) : [];
}

export function isTableLoad() {
  const table = getTableFromSStorage();
  if (table.length) {
    return true;
  } else {
    return false;
  }
}
