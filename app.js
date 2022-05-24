let facturas = [];
let matriculados = [];
let liquidaciones = [];
let retenciones = [];
let facturasFacturadas = [];
let facturaId = 0;
let matriculadoId = 0;
let liquidacionId = 0;
let retencionId = 0;

function Matriculado(id, nombre, apellido, cuit) {
  this.id = id;
  this.nombre = nombre;
  this.apellido = apellido;
  this.cuit = cuit;
  this.estado = 1;
}

matriculadoId += 1;
matriculados.push(new Matriculado(matriculadoId, "MARIA", "SILVA", 2015998512));

matriculadoId += 1;
matriculados.push(new Matriculado(matriculadoId, "DIEGO", "SOSA", 20380831642));

matriculadoId += 1;
matriculados.push(
  new Matriculado(matriculadoId, "PEDRO", "GARCIA", 20380831682)
);

function Factura(id, numeroFactura, descripcion, monto, idMatriculado, fecha) {
  this.id = id;
  this.numeroFactura = numeroFactura;
  this.descripcion = descripcion;
  this.monto = monto;
  this.idMatriculado = idMatriculado;
  this.fecha = fecha;
  this.retencion = null; // 0 < Factura Liquidada
  this.estado = 1; // 0 : Factura anulada
  this.idLiquidacion = null;
}

facturaId += 1;
facturas.push(
  new Factura(facturaId, "11919849949", "Factura 13", 5466.26, 1, "2022-05-05")
);

facturaId += 1;
facturas.push(
  new Factura(
    facturaId,
    "88716165165",
    "Factura 231",
    61684.16,
    1,
    "2022-05-07"
  )
);

facturaId += 1;
facturas.push(
  new Factura(facturaId, "11198198181", "Factura 44", 16846.16, 2, "2022-05-11")
);

facturaId += 1;
facturas.push(
  new Factura(facturaId, "16161681816", "Factura 71", 16846.16, 1, "2022-06-07")
);

facturaId += 1;
facturas.push(
  new Factura(facturaId, "16816881868", "Factura 43", 15656.21, 2, "2022-05-16")
);

facturaId += 1;
facturas.push(
  new Factura(
    facturaId,
    "71651616168",
    "Factura 1244",
    16515.21,
    3,
    "2022-05-17"
  )
);

function Liquidacion(id, idMatriculado, montoTotal, montoRetenido, fecha) {
  this.id = id;
  this.idMatriculado = idMatriculado;
  this.montoTotal = montoTotal;
  this.montoRetenido = montoRetenido;
  this.fecha = fecha;
  this.estado = 0; // 1 - anulada
}

function Retencion(id, idMatriculado, retencion, fecha) {
  this.id = id;
  this.idMatriculado = idMatriculado;
  this.retencion = retencion;
  this.fecha = fecha;
}

/*retencionId += 1;
retenciones.push(new Retencion(retencionId, 1, 15, "2022-05-05"));

retencionId += 1;
retenciones.push(new Retencion(retencionId, 2, 20, "2022-03-02"));

retencionId += 1;
retenciones.push(new Retencion(retencionId, 3, 10, "2022-05-11"));*/

retencionId += 1;
retenciones.push(new Retencion(retencionId, 1, 15, "2022-04-05"));

retencionId += 1;
retenciones.push(new Retencion(retencionId, 2, 20, "2022-03-02"));

retencionId += 1;
retenciones.push(new Retencion(retencionId, 3, 10, "2022-04-11"));

console.log(facturas);
console.log(matriculados);
console.log(liquidaciones);
console.log(retenciones);

let csv, txt;

const mainMenu = () => {
  let toGenerateInnerText = [
    "Matriculados",
    "Facturas",
    "Retenciones",
    "Liquidaciones",
  ];
  let toGenerateType = ["button", "button", "button", "button"];
  let toGenerateId = [
    "matriculados",
    "facturas",
    "retenciones",
    "liquidaciones",
  ];
  let toGenerateOnClick = [
    "menuMatriculados()",
    "menuFacturas()",
    "menuRetenciones()",
    "menuLiquidaciones()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const menuMatriculados = () => {
  let toGenerateInnerText = [
    "Agregar Matriculado",
    "Agregar Matriculados Por Archivo",
    "Modificar Matriculado",
    "Ver Matriculados",
    "Anular Matriculado",
    "Volver al menu",
  ];
  let toGenerateType = [
    "button",
    "button",
    "button",
    "button",
    "button",
    "button",
  ];
  let toGenerateId = [
    "agregarButton",
    "agregarVariosButton",
    "modificarButton",
    "verButton",
    "anularButton",
    "volver",
  ];
  let toGenerateOnClick = [
    "createMatriculado()",
    "createMultiplesMatriculados()",
    "updateMatriculado()",
    "readMatriculados()",
    "deleteMatriculado()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const createMatriculado = () => {
  let toGenerateInnerText = [
    "Nombre",
    "Apellido",
    "CUIT",
    "Cargar",
    "Menu Matriculados",
    "Menu Principal",
  ];
  let toGenerateType = ["text", "text", "text", "button", "button", "button"];
  let toGenerateId = ["name", "lastName", "cuit", "cargaMatriculadoButton"];
  let toGenerateOnClick = [
    "",
    "",
    "",
    "cargarMatriculado()",
    "menuMatriculados()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const createMultiplesMatriculados = () => {
  let toGenerateInnerText = [
    "Seleccionar archivo de Excel",
    "Cargar",
    "Menu Matriculados",
    "Menu Principal",
  ];
  let toGenerateType = ["file", "button", "button", "button"];
  let toGenerateId = ["matriculadosFile", "verRetenciones", "volver"];
  let toGenerateOnClick = [
    "readMatricula(this)",
    "cargarMultiplesMatriculados()",
    "menuMatriculados()",
    "mainMenu()",
  ];
  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const cargarMultiplesMatriculados = () => {
  const regexMat = /(;|(\s\n))/g;
  try {
    const extracted = reg(regexMat, csv, 1, 40);
    console.log(extracted);
    const cuit = extracted.indexOf("CUIT");
    const name = extracted.indexOf("Nombres");
    const lastName = extracted.indexOf("Apellido");
    let dataArray = [];
    for (let i = 40; i < extracted.length; i += 40) {
      matriculadoId += 1;
      dataArray.push(
        matriculadoId,
        extracted[i + name],
        extracted[i + lastName],
        extracted[i + cuit]
      );
    }
    if (dataArray.length != 0) {
      let indexes = [];
      for (let j = 0; j < matriculados.length; j++) {
        let coincidente = 0;
        for (let i = 3; i < dataArray.length; i += 4) {
          if (dataArray[i] == matriculados[j].cuit) {
            indexes.push(i);
            coincidente++;
          }
        }
        if (!coincidente) matriculados[j].estado = 0;
      }
      for (let i = 3; i < dataArray.length; i += 4) {
        let coincidente = true;
        for (let j = 0; j < indexes.length; j++) {
          if (indexes[j] == i) coincidente = false;
        }
        if (coincidente)
          matriculados.push(
            new Matriculado(
              Number(dataArray[i - 3]),
              dataArray[i - 2],
              dataArray[i - 1],
              Number(dataArray[i])
            )
          );
      }
      alert("Matriculados Cargados Exitosamente");
    } else {
      alert("Verifique el archivo ingresado");
    }
  } catch {
    alert("Verifique el archivo ingresado");
  }
};

const cargarMatriculado = () => {
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const cuit = document.getElementById("cuit").value;
  let coincidente = false;
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].cuit == cuit) {
      coincidente = true;
      if (matriculados[i].estado == 0) {
        matriculados[i].estado = 1;
        alert(
          "Este matriculado ya existe, sera dado de alta segun los datos previos"
        );
      } else {
        alert("Este matriculado ya fue cargado");
      }
    }
  }
  if (!coincidente && name && lastName && cuit && cuit.length == 11) {
    matriculadoId += 1;
    matriculados.push(
      new Matriculado(Number(matriculadoId), name, lastName, Number(cuit))
    );
    createMatriculado();
    alert("Creado Exitosamente");
  } else {
    alert("Hubo un error, verifique los datos ingresados");
  }
};

const readMatriculados = () => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1) {
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
    }
  }
  let toGenerateInnerText = [
    matriculadosName,
    "Ver Matriculado",
    "Ver todos",
    "Menu Matriculados",
    "Menu Principal",
  ];
  let toGenerateType = ["select", "button", "button", "button", "button"];
  let toGenerateId = [
    "selectedMatriculado",
    "showMatriculado",
    "alldMatriculados",
    "volver",
  ];
  let toGenerateOnClick = [
    "",
    "showMatriculado()",
    "showAllMatriculados()",
    "menuMatriculados()",
    "mainMenu()",
  ];
  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const showMatriculado = () => {
  let data = [];
  const selected = document.getElementById("selectedMatriculado").value;
  const selectedCuit = selected.slice(0, 11);
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedCuit == matriculados[i].cuit) {
      data.push(
        matriculados[i].nombre,
        matriculados[i].apellido,
        matriculados[i].cuit
      );
    }
  }
  generateTable(data, data.length);
};

const showAllMatriculados = () => {
  let data = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1) {
      data.push(
        matriculados[i].nombre,
        matriculados[i].apellido,
        matriculados[i].cuit
      );
    }
  }
  generateTable(data, 3);
};

const deleteMatriculado = () => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1)
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
  }
  let toGenerateInnerText = [
    matriculadosName,
    "Anular Matriculado",
    "Menu Matriculados",
    "Menu Principal",
  ];
  let toGenerateType = ["select", "button", "button", "button"];
  let toGenerateId = [
    "selectedMatriculado",
    "eliminarMatriculadoButton",
    "volver",
  ];
  let toGenerateOnClick = [
    "",
    "eliminarMatriculado()",
    "menuMatriculados()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const eliminarMatriculado = () => {
  const selected = document.getElementById("selectedMatriculado").value;
  const selectedCuit = selected.slice(0, 11);
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedCuit == matriculados[i].cuit) {
      matriculados[i].estado = 0;
      alert("Anulado Exitosamente");
    }
  }
  console.log(matriculados);
  deleteMatriculado();
};

const updateMatriculado = () => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1)
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
  }
  let toGenerateInnerText = [
    matriculadosName,
    "Nombre",
    "Apellido",
    "CUIT",
    "Modificar Matriculado",
    "Menu Matriculados",
    "Menu Principal",
  ];
  let toGenerateType = [
    "select",
    "text",
    "text",
    "text",
    "button",
    "button",
    "button",
  ];
  let toGenerateId = [
    "selectedMatriculado",
    "name",
    "lastName",
    "cuit",
    "modificarMatriculadoButton",
    "volver",
  ];
  let toGenerateOnClick = [
    "",
    "",
    "",
    "",
    "modificarMatriculado()",
    "menuMatriculados()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const modificarMatriculado = () => {
  const selected = document.getElementById("selectedMatriculado").value;
  const selectedCuit = selected.slice(0, 11);
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const cuit = document.getElementById("cuit").value;
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedCuit == matriculados[i].cuit) {
      if (name && lastName && cuit && cuit.length == 11) {
        matriculados[i].nombre = name;
        matriculados[i].apellido = lastName;
        matriculados[i].cuit = Number(cuit);
        alert("Modificado Exitosamente");
        updateMatriculado();
      } else {
        alert("Hay datos ingresados incorrectos");
      }
    }
  }
};

const menuFacturas = () => {
  let toGenerateInnerText = [
    "Cargar Factura",
    "Modificar Factura",
    "Ver Factura",
    "Anular Factura",
    "Volver al menu",
  ];
  let toGenerateType = ["button", "button", "button", "button", "button"];
  let toGenerateId = [
    "agregarFacturaButton",
    "moficarFacturaButton",
    "mostrarFacturaButton",
    "eliminarFacturaButton",
    "volver",
  ];
  let toGenerateOnClick = [
    "createFactura()",
    "updateFactura()",
    "readFactura()",
    "deleteFactura()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const createFactura = () => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1)
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
  }
  let toGenerateInnerText = [
    "Numero de Factura",
    "Descripcion",
    "Monto",
    "",
    matriculadosName,
    "Cargar",
    "Menu Facturas",
    "Menu Principal",
  ];
  let toGenerateType = [
    "text",
    "text",
    "text",
    "date",
    "select",
    "button",
    "button",
    "button",
  ];
  let toGenerateId = [
    "nroFactura",
    "description",
    "amount",
    "date",
    "selectedMatriculado",
    "cargaMatriculadoButton",
    "backButton",
  ];
  let toGenerateOnClick = [
    "",
    "",
    "",
    "",
    "",
    "cargarFactura()",
    "menuFacturas()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const cargarFactura = () => {
  const numFactura = document.getElementById("nroFactura").value;
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;
  console.log(date);
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let id;
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedMatriculadoCuit == matriculados[i].cuit) {
      id = matriculados[i].id;
    }
  }
  let coincidente = 0;
  if (numFactura && description && amount && date) {
    for (let i = 0; i < facturas.length; i++) {
      if (facturas[i].numeroFactura == numFactura) {
        coincidente++;
        alert("El numero de facura ya existe");
      }
    }
    if (coincidente == 0) {
      facturaId += 1;
      facturas.push(
        new Factura(
          Number(facturaId),
          numFactura,
          description,
          Number(amount),
          Number(id),
          date
        )
      );
      alert("Factura cargada exitosamente");
      createFactura();
    }
  } else {
    alert("Verifique los datos ingresados");
  }
};

const readFactura = (index, selectedMatriculado) => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1)
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
  }
  let facturasName = [];
  for (let i = 0; i < facturas.length; i++) {
    if (facturas[i].idMatriculado == index && facturas[i].estado == 1) {
      facturasName.push(
        facturas[i].numeroFactura + " " + facturas[i].descripcion
      );
    }
  }
  let toGenerateInnerText = [
    matriculadosName,
    facturasName,
    "Ver Factura",
    "Ver Todas",
    "Menu Facturas",
    "Menu Principal",
  ];
  let toGenerateType = [
    "select",
    "select",
    "button",
    "button",
    "button",
    "button",
  ];
  let toGenerateId = [
    "selectedMatriculado",
    "selectedFactura",
    "showButton",
    "showAllButton",
    "backButton",
  ];
  let toGenerateOnClick = [
    "selectedMatriculadoToRead()",
    "",
    "showFactura()",
    "showAllFacturas()",
    "menuFacturas()",
    "mainMenu()",
  ];
  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
  document.getElementById("selectedMatriculado").value = selectedMatriculado;
};

const selectedMatriculadoToRead = () => {
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let id;
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedMatriculadoCuit == matriculados[i].cuit) {
      id = matriculados[i].id;
    }
  }
  readFactura(id, selectedMatriculado);
};

const showFactura = () => {
  const selectedFactura = document.getElementById("selectedFactura").value;
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedNroFactura = selectedFactura.slice(
    0,
    selectedFactura.indexOf(" ")
  );
  let data = [];
  for (let i = 0; i < facturas.length; i++) {
    if (
      facturas[i].numeroFactura == selectedNroFactura &&
      facturas[i].estado == 1
    ) {
      data.push(
        facturas[i].numeroFactura,
        facturas[i].descripcion,
        Number(facturas[i].monto),
        selectedMatriculado.slice(
          selectedMatriculado.indexOf(" ") + 1,
          selectedMatriculado.length
        )
      );
    }
  }
  if (data.length != 0) {
    generateTable(data, data.length);
  } else {
    alert("Verifique los campos seleccionados");
  }
};

const showAllFacturas = () => {
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let data = [];
  let idMat;
  for (let i = 0; i < matriculados.length; i++) {
    console.log(matriculados[i].cuit, selectedMatriculadoCuit);
    if (matriculados[i].cuit == selectedMatriculadoCuit) {
      idMat = matriculados[i].id;
    }
  }
  for (let i = 0; i < facturas.length; i++) {
    console.log(facturas[i].idMatriculado, idMat);
    if (facturas[i].idMatriculado == idMat && facturas[i].estado == 1) {
      data.push(
        facturas[i].numeroFactura,
        facturas[i].descripcion,
        Number(facturas[i].monto),
        selectedMatriculado.slice(
          selectedMatriculado.indexOf(" ") + 1,
          selectedMatriculado.length
        )
      );
    } else if (!selectedMatriculado) {
      for (let j = 0; j < matriculados.length; j++) {
        if (
          facturas[i].idMatriculado == matriculados[j].id &&
          facturas[i].estado == 1
        ) {
          data.push(
            facturas[i].numeroFactura,
            facturas[i].descripcion,
            facturas[i].monto,
            matriculados[j].nombre + " " + matriculados[j].apellido
          );
        }
      }
    }
  }
  generateTable(data, 4);
};

const deleteFactura = (index, selectedMatriculado) => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1)
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
  }
  let facturasName = [];
  for (let i = 0; i < facturas.length; i++) {
    if (facturas[i].idMatriculado == index && facturas[i].estado == 1) {
      facturasName.push(
        facturas[i].numeroFactura + " " + facturas[i].descripcion
      );
    }
  }
  let toGenerateInnerText = [
    matriculadosName,
    facturasName,
    "Anular",
    "Menu Facturas",
    "Menu Principal",
  ];
  let toGenerateType = ["select", "select", "button", "button", "button"];
  let toGenerateId = [
    "selectedMatriculado",
    "selectedFactura",
    "anularFactura",
    "backButton",
  ];
  let toGenerateOnClick = [
    "selectedMatriculadoToDelete()",
    "",
    "anularFactura()",
    "menuFacturas()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
  document.getElementById("selectedMatriculado").value = selectedMatriculado;
};

const selectedMatriculadoToDelete = () => {
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let id;
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedMatriculadoCuit == matriculados[i].cuit) {
      id = matriculados[i].id;
    }
  }
  deleteFactura(id, selectedMatriculado);
};

const anularFactura = () => {
  const selectedFactura = document.getElementById("selectedFactura").value;
  const selectedNroFactura = selectedFactura.slice(
    0,
    selectedFactura.indexOf(" ")
  );
  let coincidente = false;
  for (let i = 0; i < facturas.length; i++) {
    if (
      facturas[i].numeroFactura == selectedNroFactura &&
      facturas[i].estado == 1 &&
      facturas[i].retencion == null
    ) {
      facturas[i].estado = 0;
      alert("Factura anulada exitosamente");
      coincidente = true;
    }
  }
  if (!coincidente) {
    alert("La factura ya estaba anulada o liquidada");
  }
  //console.log(facturas);
  deleteFactura();
};

const updateFactura = (index, selectedMatriculado) => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1)
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
  }
  let facturasName = [];
  for (let i = 0; i < facturas.length; i++) {
    if (facturas[i].idMatriculado == index && facturas[i].estado == 1) {
      facturasName.push(
        facturas[i].numeroFactura + " " + facturas[i].descripcion
      );
    }
  }
  let toGenerateInnerText = [
    matriculadosName,
    facturasName,
    "Descripcion",
    "Monto",
    "Modificar",
    "Menu Facturas",
    "Menu Principal",
  ];
  let toGenerateType = [
    "select",
    "select",
    "text",
    "text",
    "button",
    "button",
    "button",
  ];
  let toGenerateId = [
    "selectedMatriculado",
    "selectedFactura",
    "description",
    "amount",
    "modificarFactura",
    "backButton",
  ];
  let toGenerateOnClick = [
    "selectedMatriculadoToUpdate()",
    "",
    "",
    "",
    "modificarFactura()",
    "menuFacturas()",
    "mainMenu()",
  ];
  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
  document.getElementById("selectedMatriculado").value = selectedMatriculado;
};

const selectedMatriculadoToUpdate = () => {
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let id;
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedMatriculadoCuit == matriculados[i].cuit) {
      id = matriculados[i].id;
    }
  }
  updateFactura(id, selectedMatriculado);
};

const modificarFactura = () => {
  const selectedFactura = document.getElementById("selectedFactura").value;
  const selectedNroFactura = selectedFactura.slice(
    0,
    selectedFactura.indexOf(" ")
  );
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  let coincidente = false;
  for (let i = 0; i < facturas.length; i++) {
    if (
      selectedNroFactura == facturas[i].numeroFactura &&
      facturas[i].retencion == null
    ) {
      if (amount && description) {
        facturas[i].descripcion = description;
        facturas[i].monto = amount;
        alert("Modificado Exitosamente");
        coincidente = true;
        updateFactura();
      }
    }
  }
  if (!coincidente) {
    alert("No se pudo modificar esta factura porque ya fue liquidada");
  }
};

const menuRetenciones = () => {
  let toGenerateInnerText = [
    "Seleccione archico de AFIP",
    "Cargar",
    "Ver retenciones",
    "Volver",
  ];
  let toGenerateType = ["file", "button", "button", "button"];
  let toGenerateId = [
    "AFIPFile",
    "cargarRetenciones",
    "verRetenciones",
    "volver",
  ];
  let toGenerateOnClick = [
    "readAFIP(this)",
    "cargarRetenciones()",
    "verRetenciones()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const cargarRetenciones = () => {
  let fechaHoy = new Date(Date.now());
  let fecha =
    fechaHoy.getFullYear() +
    "-" +
    (fechaHoy.getMonth() + 1) +
    "-" +
    fechaHoy.getDate();
  console.log(fecha);
  const regexAfip = /(;)/g;
  try {
    const padronAfip = reg(regexAfip, txt, 1, 9);
    let flag = true;
    alert("Se esta porcesando el archivo, espere por favor");
    /*for (let i = 0; i < retenciones.length; i++) {
      let fechaRetencion = new Date(retenciones[i].fecha);
      console.log((fechaRetencion.getMonth() + 1) ,fecha.getMonth(),
      fechaRetencion.getFullYear(),fecha.getFullYear());
      if (
        (fechaRetencion.getMonth()) == fecha.getMonth() &&
        fechaRetencion.getFullYear() == fecha.getFullYear()
      ) {
        flag = false;
      }
    }*/
    if (flag) {
      let originalLength = retenciones.length;
      for (let i = 0; i < matriculados.length; i++) {
        for (let j = 0; j < padronAfip.length; j++) {
          if (matriculados[i].cuit == padronAfip[j]) {
            let num = padronAfip[j + 4];
            num = num.replace(",", ".");
            retencionId += 1;
            retenciones.push(
              new Retencion(retencionId, matriculados[i].id, Number(num), fecha)
            );
          }
        }
      }
      if (retenciones.length != originalLength) {
        alert("Se han cargado correctamente las nuevas retenciones");
      } else {
        alert("No se han encontrado nuevas retenciones para cargar");
      }
    } else {
      alert("Las retenciones de este mes ya han sido cargadas");
    }
  } catch {
    alert("Hubo un error, verifique el archivo ingresado");
  }
  console.log(retenciones);
};

const verRetenciones = () => {
  let retencionesData = [];
  for (let i = 0; i < retenciones.length; i++) {
    for (let j = 0; j < matriculados.length; j++) {
      if (
        matriculados[j].id == retenciones[i].idMatriculado &&
        matriculados[i].estado == 1
      ) {
        retencionesData.push(
          matriculados[j].cuit,
          matriculados[j].nombre + " " + matriculados[j].apellido,
          retenciones[i].retencion
          //retenciones[i].fecha
        );
        /*console.log(
          matriculados[j].nombre + " " + matriculados[j].apellido,
          retenciones[i].retencion,
          retenciones[i].fecha
        );*/
      }
      //console.log(matriculados[j].id, retenciones[i].idMatriculado);
    }
  }
  if (retencionesData.length != 0) {
    generateTable(retencionesData, 3);
  } else {
    alert("Las retenciones no han sido cargadas");
  }
};

const menuLiquidaciones = () => {
  let toGenerateInnerText = [
    "Generar Liquidacion",
    "Ver Liquidaciones",
    "Anular Liquidacion",
    "Volver al menu",
  ];
  let toGenerateType = ["button", "button", "button", "button"];
  let toGenerateId = [
    "generarLiquidacion",
    "verLiquidacion",
    "anularLiquidacion",
    "volver",
  ];
  let toGenerateOnClick = [
    "createLiquidacion()",
    "readLiquidacions()",
    "deleteLiquidacion()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const createLiquidacion = () => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1)
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
  }
  let toGenerateInnerText = [
    matriculadosName,
    "Generar Liquidacion",
    "Menu Liquidaciones",
    "Menu Principal",
  ];
  let toGenerateType = ["select", "button", "button", "button"];
  let toGenerateId = [
    "selectedMatriculado",
    "cargaMatriculadoButton",
    "backButton",
  ];
  let toGenerateOnClick = [
    "",
    "cargarLiquidacion()",
    "menuLiquidaciones()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
};

const cargarLiquidacion = () => {
  let totalAmount = 0;
  let restrinctedPercentage;
  let restrinctedAmount;
  let date = new Date(Date.now());
  let fecha =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let idMatriculado;
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedMatriculadoCuit == matriculados[i].cuit) {
      idMatriculado = matriculados[i].id;
    }
  }
  let flag = false;
  let fechaHoy = new Date(Date.now());
  for (let i = 0; i < retenciones.length; i++) {
    let fechaRetencion = new Date(retenciones[i].fecha);
    console.log(
      fechaRetencion.getMonth(),
      fechaHoy.getMonth(),
      fechaRetencion.getFullYear(),
      fechaHoy.getFullYear(),
      retenciones[i].idMatriculado,
      idMatriculado
    );
    if (
      fechaRetencion.getMonth() == fechaHoy.getMonth() &&
      fechaRetencion.getFullYear() == fechaHoy.getFullYear() &&
      retenciones[i].idMatriculado == idMatriculado
    ) {
      restrinctedPercentage = retenciones[i].retencion;
      flag = true;
    } else {
      console.log("No hay registros del porcentaje de retencion");
    }
  }
  if (flag) {
    for (let i = 0; i < facturas.length; i++) {
      let fechaFactura = new Date(facturas[i].fecha);
      if (
        fechaFactura.getMonth() == fechaHoy.getMonth() &&
        fechaFactura.getFullYear() == fechaHoy.getFullYear() &&
        facturas[i].retencion == null &&
        facturas[i].idMatriculado == idMatriculado &&
        facturas[i].estado == 1
      ) {
        totalAmount += facturas[i].monto;
        facturas[i].retencion =
          (Number(facturas[i].monto) * restrinctedPercentage) / 100;
        facturas[i].idLiquidacion = liquidaciones.length + 1;
      }
    }
    restrinctedAmount = (totalAmount * restrinctedPercentage) / 100;
    if (totalAmount) {
      liquidacionId += 1;
      liquidaciones.push(
        new Liquidacion(
          liquidacionId,
          idMatriculado,
          totalAmount,
          restrinctedAmount,
          fecha
        )
      );
      alert("Liquidacion generada exitosamente");
    } else {
      alert(
        "Esta persona no posee facturas a liquidar pendientes en el mes actual"
      );
    }
  } else {
    alert("Esta persona no tiene una retencion asignada este mes");
  }
  console.log(liquidaciones);
};

const readLiquidacions = (index, selectedMatriculado) => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1)
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
  }
  let fechaLiquidacion = [];
  for (let i = 0; i < liquidaciones.length; i++) {
    if (
      liquidaciones[i].idMatriculado == index &&
      liquidaciones[i].estado == 0
    ) {
      fechaLiquidacion.push(liquidaciones[i].fecha);
    }
  }
  let toGenerateInnerText = [
    matriculadosName,
    fechaLiquidacion,
    "Ver Liquidacion",
    "Ver Todas",
    "Menu Liquidaciones",
    "Menu Principal",
  ];
  let toGenerateType = [
    "select",
    "select",
    "button",
    "button",
    "button",
    "button",
  ];
  let toGenerateId = [
    "selectedMatriculado",
    "selectedLiquidacion",
    "showButton",
    "showAllButton",
    "backButton",
  ];
  let toGenerateOnClick = [
    "selectedMatriculadoToReadFact()",
    "",
    "showLiquidacion()",
    "showAllLiquidaciones()",
    "menuLiquidaciones()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
  document.getElementById("selectedMatriculado").value = selectedMatriculado;
};

const selectedMatriculadoToReadFact = () => {
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let id;
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedMatriculadoCuit == matriculados[i].cuit) {
      id = matriculados[i].id;
    }
  }
  readLiquidacions(id, selectedMatriculado);
};

const showLiquidacion = () => {
  const selectedLiquidacion = document.getElementById(
    "selectedLiquidacion"
  ).value;
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let data = [];
  let idLiq = 0;
  for (let j = 0; j < matriculados.length; j++) {
    if (
      selectedMatriculadoCuit == matriculados[j].cuit &&
      selectedLiquidacion
    ) {
      for (let i = 0; i < liquidaciones.length; i++) {
        if (
          liquidaciones[i].fecha == selectedLiquidacion &&
          liquidaciones[i].idMatriculado == matriculados[j].id
        ) {
          idLiq = liquidaciones[i].id;
          idMat = matriculados[j].id;
          idFact = liquidaciones[i].id;
          data.push(
            "Monto total liquidado",
            "Monto retenido en liquidacion",
            liquidaciones[i].montoTotal,
            liquidaciones[i].montoRetenido
          );
        }
      }
    }
  }
  if (idLiq) {
    data.push("Facturas Incluidas", "Monto correspondiente a la factura");
    for (let i = 0; i < facturas.length; i++) {
      if (idLiq == facturas[i].idLiquidacion) {
        data.push(facturas[i].descripcion, facturas[i].monto);
      }
    }
    generateTable(data, 2);
  } else {
    alert("Verifique los datos seleccionados");
  }
};

const showAllLiquidaciones = () => {
  let data = [];
  let idLiq;
  for (let j = 0; j < matriculados.length; j++) {
    for (let i = 0; i < liquidaciones.length; i++) {
      if (
        liquidaciones[i].idMatriculado == matriculados[j].id &&
        liquidaciones[i].estado == 0
      ) {
        data.push(
          "Matriculado",
          "CUIT",
          matriculados[j].nombre + " " + matriculados[j].apellido,
          matriculados[j].cuit
        );
        idLiq = liquidaciones[i].id;
        data.push(
          "Monto total liquidado",
          "Monto retenido en liquidacion",
          liquidaciones[i].montoTotal,
          liquidaciones[i].montoRetenido
        );
        data.push("Facturas Incluidas", "Monto correspondiente a la factura");
        for (let k = 0; k < facturas.length; k++) {
          if (idLiq == facturas[k].idLiquidacion) {
            data.push(facturas[k].descripcion, facturas[k].monto);
          }
        }
        data.push("", "");
      }
    }
  }
  // console.log(data);
  if (data.length != 0) {
    generateTable(data, 2);
  } else {
    alert("No se encontraron liquidaciones");
  }
};

const deleteLiquidacion = (index, selectedMatriculado) => {
  let matriculadosName = [];
  for (let i = 0; i < matriculados.length; i++) {
    if (matriculados[i].estado == 1)
      matriculadosName.push(
        matriculados[i].cuit +
          " " +
          matriculados[i].nombre +
          " " +
          matriculados[i].apellido
      );
  }
  let fechaLiquidacion = [];
  for (let i = 0; i < liquidaciones.length; i++) {
    if (
      liquidaciones[i].idMatriculado == index &&
      liquidaciones[i].estado == 0
    ) {
      fechaLiquidacion.push(liquidaciones[i].fecha);
    }
  }
  let toGenerateInnerText = [
    matriculadosName,
    fechaLiquidacion,
    "Anular Liquidacion",
    "Menu Liquidaciones",
    "Menu Principal",
  ];
  let toGenerateType = ["select", "select", "button", "button", "button"];
  let toGenerateId = [
    "selectedMatriculado",
    "selectedLiquidacion",
    "showButton",
    "backButton",
  ];
  let toGenerateOnClick = [
    "selectedMatriculadoToDeleteFact()",
    "",
    "toDeleteLiquidacion()",
    "menuLiquidaciones()",
    "mainMenu()",
  ];

  formGenerator(
    "app",
    toGenerateInnerText,
    toGenerateType,
    toGenerateId,
    toGenerateOnClick
  );
  document.getElementById("selectedMatriculado").value = selectedMatriculado;
};

const selectedMatriculadoToDeleteFact = () => {
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let id;
  for (let i = 0; i < matriculados.length; i++) {
    if (selectedMatriculadoCuit == matriculados[i].cuit) {
      id = matriculados[i].id;
    }
  }
  deleteLiquidacion(id, selectedMatriculado);
};

const toDeleteLiquidacion = () => {
  const selectedLiquidacion = document.getElementById(
    "selectedLiquidacion"
  ).value;
  const selectedMatriculado = document.getElementById(
    "selectedMatriculado"
  ).value;
  const selectedMatriculadoCuit = selectedMatriculado.slice(0, 11);
  let idLiq;
  for (let j = 0; j < matriculados.length; j++) {
    if (selectedMatriculadoCuit == matriculados[j].cuit) {
      for (let i = 0; i < liquidaciones.length; i++) {
        if (
          liquidaciones[i].fecha == selectedLiquidacion &&
          liquidaciones[i].idMatriculado == matriculados[j].id
        ) {
          idLiq = liquidaciones[i].id;
          idFact = liquidaciones[i].id;
          liquidaciones[i].estado = 1;
        }
      }
    }
  }
  for (let i = 0; i < facturas.length; i++) {
    if (facturas[i].idLiquidacion == idLiq) {
      facturas[i].idLiquidacion = null;
      facturas[i].retencion = null;
    }
  }
  if (idLiq) {
    alert("Liquidacion anulada exitosamente");
    deleteLiquidacion();
  } else {
    alert("Hubo un error, vertifique los datos seleccionados");
  }
  console.log(liquidaciones);
  console.log(facturas);
};

const reg = (regex, text, regexLength, rows) => {
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
    data.push(part);
    if (count > rows - 2) {
      data.splice(data.length - rows, rows);
      break;
    }
  }
  return data;
};

const fusion = () => {
  try {
    const regexMat = /(;|(\s\n))/g;
    const regexAfip = /(";")/g;
    const matriculados = reg(regexMat, csv, 1, 40);
    const padronAfip = reg(regexAfip, txt, 3);
    const index = matriculados.indexOf("CUIT");
    let cuits = [];
    for (let i = index + 40; i < matriculados.length; i += 40) {
      cuits.push(matriculados[i]);
    }
    let coincidentes = [];
    let porcentajes = [];
    let cuitPorcentaje = [];
    for (let i = 0; i < cuits.length; i++) {
      for (let j = 0; j < padronAfip.length; j++) {
        if (cuits[i] == padronAfip[j]) {
          coincidentes.push(padronAfip[j]);
          porcentajes.push(padronAfip[j + 1]);
          cuitPorcentaje.push(
            matriculados[(1 + i) * 40 + matriculados.indexOf("Nombres")],
            matriculados[(1 + i) * 40 + matriculados.indexOf("Apellido")],
            padronAfip[j],
            padronAfip[j + 1]
          );
        }
      }
    }
    generateTable(cuitPorcentaje, 4);
  } catch {
    alert("Hubo un error en los archivos");
  }
};

const generateTable = (data, rowLength) => {
  let dataLength = data.length;
  const tableDiv = document.getElementById("tableData");
  tableDiv.innerHTML = "";
  const table = document.createElement("table");
  const tBody = document.createElement("tbody");
  tableDiv.innerHTML = "";
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
  tableDiv.appendChild(table);
  table.setAttribute("border", "1");
};

const analyzeMatricula = () => {
  const regex = /(;|(\s\n))/g;
  const data = reg(regex, csv, 1, 40);
  generateTable(data, 40, false);
};

const analyzeAfip = () => {
  const regex = /(";")/g;
  const data = reg(regex, txt, 3);
  generateTable(data, 2, false);
};

readMatricula = (input) => {
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

readAFIP = (input) => {
  let file = input.files[0];
  let fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = () => {
    txt = fileReader.result;
  };
  fileReader.onerror = () => {
    alert(fileReader.error);
  };
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
  let div = document.getElementById(html);
  div.innerHTML = "";
  for (let i = 0; i < types.length; i++) {
    let text;
    let selectType = false;
    //console.log(types[i]);
    if (types[i] == "text") {
      text = `<input type="${types[i]}" id="${ids[i]}" placeholder="${innerText[i]}"/><br/>`;
    } else if (types[i] == "select") {
      text = `<select id="${ids[i]}" onChange="${onclickName[i]}"></select><br/>`;
      selectType = true;
    } else if (types[i] == "file") {
      text = `<label for="${ids[i]}">${innerText[i]}</label>
      <input type="${types[i]}" id="${ids[i]}" onChange="${onclickName[i]}"/></br>`;
    } else {
      text = `<input value="${innerText[i]}" type="${types[i]}" id="${ids[i]}" onClick="${onclickName[i]}" /><br/>`;
    }
    //console.log(text);
    div.insertAdjacentHTML("beforeend", text);
    if (selectType) {
      let select = document.getElementById(`${ids[i]}`);
      for (let j = 0; j < innerText[i].length; j++) {
        let option = `<option value="${innerText[i][j]}">${innerText[i][j]}</option>`;
        select.insertAdjacentHTML("beforeend", option);
      }
    }
  }
  const tableDiv = '<div id="tableData"></div>';
  div.insertAdjacentHTML("beforeend", tableDiv);
};
mainMenu();
