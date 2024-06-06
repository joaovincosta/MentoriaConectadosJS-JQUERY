// Loops com "for" 

for (let index = 0; index <= 10; index++) {
    console.log(index);
}

// Loops com "for" em listas (jeito 1)

const car1 = ["Ferrari", "Tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// jeito 2

const car2 = ["Ferrari", "Tesla", "Mercedes"];

for (let car of cars) {
    console.log(car);
}

// jeito 3

const car3 = ["Ferrari", "Tesla", "Mercedes"];

cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
});

// Loops com "while" 

let index = 0;

while (index < 10) {
    console.log("Index é menor que 10!");
    index ++;
}

const person = {
    name:'Janet',
    age: 21
};

for (property in person) {
    console.log(person[property]);
}