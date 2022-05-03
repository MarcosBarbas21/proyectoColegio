//import formGenerator from "./formGenerator"; './formGenerator';
const app = document.getElementById("app");

let csv;

const analyzeMatricula = () => {
  const regex = /(;|(\s\n))/g;
  reg(regex, csv, regexLength);
};

readMatricula = (input) => {
    //const resultButton = document.getElementById('generateMapButton');
    let file = input.files[0];
    let fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = () => {
      csv = fileReader.result;
    };
    fileReader.onerror = () => {
      alert(fileReader.error);
    };
  };

let toGenerateInnerText = [
  "Nombre",
  "Apellido",
  "CUIT",
  "Razon Social",
  "Cargar",
];

let toGenerateType = ["text", "text", "text", "number", "button"];
let toGenerateId = ["name", "lastName", "cuit", "sr", "asdButton"];
let toGenerateOnClick = ["", "", "", "", "asd()"];

formGenerator(
  app,
  toGenerateInnerText,
  toGenerateType,
  toGenerateId,
  toGenerateOnClick
);

const asd = () => {
  app.innerHTML = "<h2>Ya esta</h2>";
};

const readFile = (input) => {
  //const resultButton = document.getElementById('generateMapButton');
  let file = input.files[0];
  let fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = () => {
    return fileReader.result;
  };
  fileReader.onerror = () => {
    alert(fileReader.error);
  };
};

const formGenerator = (html, innerText, types, ids, onclickName) => {
  for (let i = 0; i < toGenerateInnerText.length; i++) {
    let text;
    if (!toGenerateOnClick[i]) {
      text = `<input type="${types[i]}" id="${ids[i]}" placeholder="${innerText[i]}"/><br/>`;
    } else {
      text = `<input value="${innerText[i]}" type="${types[i]}" id="${ids[i]}" onClick="${onclickName[i]}" /><br/>`;
    }
    html.insertAdjacentHTML("beforeend", text);
  }
};

const generateTable = (data, rowLength, trash) => {
  let dataLength;
  if (trash) {
    dataLength = data.length - rowLength;
  } else {
    dataLength = data.length;
  }
  const app = document.getElementById("app");
  const table = document.createElement("table");
  const tBody = document.createElement("tbody");
  for (let i = 0; i < dataLength; i += rowLength) {
    const tr = document.createElement("tr");
    for (let j = i; j < rowLength + i; j++) {
      const td = document.createElement("td");
      let txtCell = document.createTextNode(data[j]);
      td.appendChild(txtCell);
      tr.appendChild(td);
    }
    tBody.appendChild(tr);
  }
  table.appendChild(tBody);
  app.appendChild(table);
  table.setAttribute("border", "1");
};

const reg = (regex, text, regexLength) => {
  let indexes = [];
  let data = [];
  while ((match = regex.exec(text)) !== null) {
    indexes.push(match.index);
  }
  part = text.slice(0, indexes[0]);
  for (let i = 0; i < indexes.length + 1; i++) {
    let part = text.slice(indexes[i - 1] + regexLength, indexes[i]);

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

  return data;
};
