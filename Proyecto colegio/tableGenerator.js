const regex = /(;|(\s\n))/g;
let txt;
let toTable;
const analyze = () => {
  reg();
};
const readFile = (input) => {
  //const resultButton = document.getElementById('generateMapButton');
  let file = input.files[0];
  let fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = function () {
    txt = fileReader.result;
  };
  fileReader.onerror = function () {
    alert(fileReader.error);
  };
};

const reg = () => {
  let indexes = [];
  let data = [];
  console.log(txt);
  while ((match = regex.exec(txt)) !== null) {
    indexes.push(match.index);
  }

  for (let i = 0; i < indexes.length + 1; i++) {
    let part;
    if (i == 0) {
      let count = 0;
      part = txt.slice(0, indexes[0]);
    } else {
      part = txt.slice(indexes[i - 1] + 1, indexes[i]);
    }
    if (part === "") {
      count++;
    } else {
      count = 0;
    }
    console.log(count);
    console.log(part);

    data.push(part);
    if (count > 38) break;
  }

  generateTable(data);
};

const generateTable = (data) => {
  let dataLength = data.length - 40;
  // Obtener la referencia del elemento body
  let app = document.getElementById("app");

  // Crea un elemento <table> y un elemento <tbody>
  var table = document.createElement("table");
  var tBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 0; i < dataLength; i += 40) {
    // Crea las hileras de la tabla
    var tr = document.createElement("tr");

    for (var j = i; j < 40 + i; j++) {
      //j+= i;
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var td = document.createElement("td");
      var txtCell = document.createTextNode(data[j]);
      td.appendChild(txtCell);
      tr.appendChild(td);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tBody.appendChild(tr);
  }

  // posiciona el <tbody> debajo del elemento <table>
  table.appendChild(tBody);
  // appends <table> into <body>
  app.appendChild(table);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  table.setAttribute("border", "1");
};
