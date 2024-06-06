// Condicionais

const sum1 = 1+1;

if (sum1 === 2) {
    console.log("Sum is 2!");
} else if (sum1 === 3) {
    console.log("Sum is 3!")
} else {
    console.log("Sum is not 2!");
}

// && ||

const sum2 = 2+2;
const sum3 = 3+3;

if (sum2 === 4 && sum3 === 6) {
    console.log("Sum1 is 4 and Sum2 is 6!");
}

if (sum2 === 4 || sum3 === 6) {
    console.log("Sum1 is 4 or Sum2 is 6!");
}

//

const sum = 1+2;

let number;

if (sum === 2) {
    number = 2;
} else {
    number = 4;
}

console.log(number);

//

let number1 = sum === 2 ? 2 : 4;

// 

const car = "Mercedes"

switch (car) {
    case "Mercedes":
        console.log("Mercedes is beatiful");
        break;
    case "Ferrari":
        console.log("Ferrari is very red");
        break;
    case "Tesla":
        console.log("Tesla is very smart");
        break;
}