// Map

const number = [1, 2, 3, 4, 5,];

const numberMultipliedByTwo = numbers.map(function (number) {
    return number * 2;
});

// Filter

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function (age){
    return age % 2 === 0 ;
});

// Reduce 

const agess = [9, 14, 26, 29, 21, 39];

const sumOfAgess = agess.reduce(function (age, accumulato) {
    return accumulator + age;
}, 0);