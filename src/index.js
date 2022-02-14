import "../styles/index.css";
import "../index.html";

import { getTableBody, getTableFromSStorage, isTableLoad } from "./renderTBody";
import { setTableToSStorage } from "./api";

const loadBtn = document.querySelector(".load-span");
const loadGif = document.querySelector(".status-gif");
const tableOnPage = document.querySelector(".main-table");
const loaderOnTable = document.querySelector(".loader");

const page1 = document.getElementById("page-1");

document.addEventListener("DOMContentLoaded", onDOMLoaded);

const buttonList = document.querySelector('.pages-list');

    let selectedTd = page1;

    buttonList.onclick = function(event) {
      let target = event.target;

      while (target != this) {
        let i = target.innerText - 1;
        if (target.tagName == 'BUTTON') {
          highlight(target);
          handlePageBtn(i * 10, i * 10 + 10);
          return;
        }
        target = target.parentNode;
      }
    }

    function highlight(node) {
      if (selectedTd) {
        selectedTd.classList.remove('focus-button');
      }
      selectedTd = node;
      selectedTd.classList.add('focus-button');
    }

function handlePageBtn(start, end) {
  tableOnPage.removeChild(document.querySelector(".table-body"));
  loadChosenPage(start, end);
  setTimeout(() => loaderOnTable.classList.add("loader_disabled"), 2000);
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
  getData(page1.innerText);
}

function loadChosenPage(start, end) {
  let table = getTableFromSStorage();
  const tBody = getTableBody(table, start, end);
  loaderOnTable.classList.remove("loader_disabled");
  tBody.classList.add("table-body_disabled");
  setTimeout(() => {
    tableOnPage.appendChild(tBody);
    tBody.classList.remove("table-body_disabled");
  }, 3000);
}