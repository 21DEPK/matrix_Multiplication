let r1, r2, c1, c2;
const matrix1Button = document.querySelector("#matrix1");
const matrix2Button = document.querySelector("#matrix2");
const matrix1Table = document.querySelector(".matrix1table table");
const matrix2Table = document.querySelector(".matrix2table table");

function getValue() {
  r1 = document.querySelector("#matrix1_rows").value;
  r2 = document.querySelector("#matrix2_rows").value;
  c1 = document.querySelector("#matrix1_columns").value;
  c2 = document.querySelector("#matrix2_columns").value;
}

function createTable1() {
  getValue();  
  removePreviousTable(matrix1Table);
  document.querySelector("#matrix2_rows").value = c1;
  for (let i = 0; i < r1; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < c1; j++) {
      const column = document.createElement("td");
      column.setAttribute("id", `t1_cell[${i}${j}]`);
      row.appendChild(column);
    }
    matrix1Table.appendChild(row);
  }
}

function createTable2() {
  getValue();
  removePreviousTable(matrix2Table);
  for (let i = 0; i < r2; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < c2; j++) {
      const column = document.createElement("td");
      column.setAttribute("id", `t2_cell[${i}${j}]`);
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
