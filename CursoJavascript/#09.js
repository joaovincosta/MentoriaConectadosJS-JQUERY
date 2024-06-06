// "Uma string vazia é 'false'"

const x = "";

console.log(!!x);

if (x) {
    console.log(x);
}

// "0 também é 'false'"

const y = 0;
console.log(!!y);

// "Null e Undefined também são falsos"

const a = null;
console.log(!!a);

const b = undefined;
console.log(!!b);

// "Uma lista vazia é 'true'"

const list = [];
console.log(!!list);

if (list.length === 0) {
    console.log(list) //verificando se a lista é vazia
}

if (list.length > 0) {
    console.log(list) //verificando se a lista tem algum valor
}

console.log(!list); // Invertendo o valor da lista,

// "Um objeto vazio também é 'true'"

const object = [];
console.log(!!object);

//  "!!" checam o valor de algo
// "!" inverte o valor de algo