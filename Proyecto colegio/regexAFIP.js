const regex = /(";")/g;

const txt = `primero";"segundo";"tercero";"cuarto";"quinto";"sexto";"septimo";"ultimo`;

let indexes = [];
let data = [];

while ((match = regex.exec(txt)) !== null) {
    console.log(match.index)
    indexes.push(match.index)
}

for (let i = 0; i < indexes.length + 1; i++) {
    let part;
    if (i == 0) {
        part = txt.slice(0,indexes[0]);
    }
    else {
        part = txt.slice((indexes[i-1]+3),indexes[i]);
    }
    data.push(part);
}
console.log(data);
console.log(data.length);