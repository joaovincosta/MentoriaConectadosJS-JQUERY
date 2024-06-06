//

function sum(a, b) {
    console.log(a + b);
}

sum(2,2);

//

function sum(a, b) {
    return a + b;
}

const sumValue = sum(2);

console.log(sumValue);

// Arrow functions

function sumArrow (a, b = 10) {
    return a + b
}

const sumArrow = (a, b) => a + b; //Mesma coisa que o de cima

const sumValuee = sumArrow(2);

console.log(sumValuee);