let r1, r2, c1, c2;
const matrix1Button = document.querySelector("#matrix1");
const matrix2Button = document.querySelector("#matrix2");
const matrix1Table = document.querySelector(".matrix1table table");
const matrix2Table = document.querySelector(".matrix2table table");
const resultantMatrix = document.querySelector(".resultantMatrix table");
let matrix1 = new Array();
let matrix2 = new Array();
let resultValues = new Array();

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
      column.innerHTML = `<input type="number" id="t2${i}${j}" class="cellInput"/> `;
      row.appendChild(column);
    }
    matrix2Table.appendChild(row);
  }
  resultantMatrix.style.visibility = "visible";
}

function removePreviousTable(t) {
  while (t.children.length != 1) {
    t.removeChild(t.childNodes[2]);
  }
}

function getMatrix1Values() {
  matrix1 = [];
  for (let i = 0; i < r1; i++) {
    let temp = [];
    for (let j = 0; j < c1; j++) {
      temp.push(document.querySelector(`#t1${i}${j}`).value);
    }
    matrix1.push(temp);
  }
}
function getMatrix2Values() {
  matrix2 = [];
  for (let i = 0; i < r2; i++) {
    let temp = [];
    for (let j = 0; j < c2; j++) {
      temp.push(document.querySelector(`#t2${i}${j}`).value);
    }
    matrix2.push(temp);
  }
}
function getResultantMatrixValues() {
  resultValues = [];
  for (let i = 0; i < r1; i++) {
    let temp = [];
    resultValues.push(temp);
    for (let j = 0; j < c2; j++) {
      resultValues[i][j] = 0;
      for (let k = 0; k < c2; k++) {
        resultValues[i][j] =
          resultValues[i][j] +
          parseInt(parseInt(matrix1[i][k]) * parseInt(matrix2[k][j]));
      }
    }
  }
}

function setResultValues() {
  for (let i = 0; i < r2; i++) {
    for (let j = 0; j < c2; j++) {
      document.querySelector(`#r1${i}${j}`).value = resultValues[i][j];
    }
  }
}

function result() {
  resultantMatrix.style.visibility = "visible";
  getMatrix1Values();
  getMatrix2Values();
  getResultantMatrixValues();
  removePreviousTable(resultantMatrix);
  for (let i = 0; i < r1; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < c2; j++) {
      let column = document.createElement("td");
      column.innerHTML = `<input type="number" id="r1${i}${j}" class="cellInput" disabled/>`;
      row.appendChild(column);
    }
    resultantMatrix.appendChild(row);
  }
  setResultValues();
}
