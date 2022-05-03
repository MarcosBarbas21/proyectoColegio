/*const app = document.getElementById("app");

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

let input = (innerText, type, id, onclick) => {
    this.innerText = innerText,
    this.type = type,
    this.id = id,
    this.onclick = onclick
};
const input1 = new input('Nombre','text','name','');
console.log(input1);

console.log(toGenerateInnerText.length);
*/
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

formGenerator(
  app,
  toGenerateInnerText,
  toGenerateType,
  toGenerateId,
  toGenerateOnClick
);

/*const asd = () => {
  app.innerHTML = "<h2>Ya esta</h2>";
};*/

//export default formGenerator;
