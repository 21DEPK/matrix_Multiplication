let r1, r2, c1, c2;
const matrix1Button = document.querySelector("#matrix1");
const matrix2Button = document.querySelector("#matrix2");
const matrix1Table = document.querySelector(".matrix1table table");
const matrix2Table = document.querySelector(".matrix2table table");
let matrix1 = new Array();
let matrix2 = new Array();

function getValue() {
  r1 = document.querySelector("#matrix1_rows").value;
  r2 = document.querySelector("#matrix2_rows").value;
  c1 = document.querySelector("#matrix1_columns").value;
  c2 = document.querySelector("#matrix2_columns").value;
}

function createTable1() {
  matrix1Table.style.visibility = "visible";
  getValue();
  removePreviousTable(matrix1Table);
  document.querySelector("#matrix2_rows").value = c1;
  for (let i = 0; i < r1; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < c1; j++) {
      let column = document.createElement("td");
      column.innerHTML = `<input type="number" id="t1${i}${j}" class="cellInput"/> `;
      row.appendChild(column);
    }
    matrix1Table.appendChild(row);
  }
}

function createTable2() {
  matrix2Table.style.visibility = "visible";
  getValue();
  removePreviousTable(matrix2Table);
  for (let i = 0; i < r2; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < c2; j++) {
      let column = document.createElement("td");
      column.innerHTML = `<input type="number" id="t1${i}${j}" class="cellInput"/> `;
      row.appendChild(column);
    }
    matrix2Table.appendChild(row);
  }
}

function removePreviousTable(t) {
  while (t.children.length != 1) {
    t.removeChild(t.childNodes[2]);
  }
}

function result() {
  let result = new Array();
  for (let i = 0; i < r1; i++) {
    result[i] = [];
    for (let j = 0; j < c2; j++) {
      result[i][j] = j;
    }
  }
}
