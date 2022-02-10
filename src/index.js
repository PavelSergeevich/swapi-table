import "../styles/index.css";
import "../index.html";

import { getTableBody, getTableFromSStorage, isTableLoad } from "./renderTBody";
import { setTableToSStorage } from "./api";

const loadBtn = document.querySelector(".load-span");
const loadGif = document.querySelector(".status-gif");
const tableOnPage = document.querySelector(".main-table");
const paginationBtns = document.querySelectorAll("button");
const loaderOnTable = document.querySelector(".loader");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");
const page4 = document.getElementById("page-4");

document.addEventListener("DOMContentLoaded", onDOMLoaded);

paginationBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    handlePageBtn(i * 10, i * 10 + 10);
    if (i === 0) {
      changeClass(page1, [page2, page3, page4]);
    }
    if (i === 1) {
      changeClass(page2, [page1, page3, page4]);
    }
    if (i === 2) {
      changeClass(page3, [page1, page2, page4]);
    }
    if (i === 3) {
      changeClass(page4, [page1, page2, page3]);
    }
  });
});

function handlePageBtn(start, end) {
  tableOnPage.removeChild(document.querySelector(".table-body"));
  changePage(start, end);
  setTimeout(() => loaderOnTable.classList.add("loader_disabled"), 2000);
}

function changeClass(curentItem, array) {
  curentItem.classList.add("focus-button");
  array.forEach((item) => item.classList.remove("focus-button"));
}

function getData(page) {
  setTableToSStorage(page);

  const timerId = setInterval(() => {
    if (isTableLoad()) {
      loadBtn.classList.remove("load-span_disabled");
      loadGif.classList.add("status-gif_disabled");
    } else {
      loadBtn.classList.add("load-span_disabled");
    }
  }, 500);

  setTimeout(() => {
    if (isTableLoad()) {
      clearInterval(timerId);
      console.log("timer off");

      let table = getTableFromSStorage();

      const tBody = getTableBody(table, 0, 10);

      tableOnPage.appendChild(tBody);
    }
  }, 4000);
}

function onDOMLoaded() {
  getData(1);
}

function changePage(start, end) {
  let table = getTableFromSStorage();
  const tBody = getTableBody(table, start, end);
  loaderOnTable.classList.remove("loader_disabled");
  tBody.classList.add("table-body_disabled");
  setTimeout(() => {
    tableOnPage.appendChild(tBody);
    tBody.classList.remove("table-body_disabled");
  }, 3000);
}