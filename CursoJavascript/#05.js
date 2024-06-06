// Objeto

const person = {
    firstName: "Felipe",
    lastName: "Rocha",
    age:"21",
    hobbies: ["Assistir F1", "Jogar futebol", "Ler"],
    dog: {
        name: "Simba",
        age: 4,
    },
};

const {firstName: primeiroNome, lastName, age, hobbies, dog, dog: {name: dogName}} = person;

const read = person.hobbies[2];

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);
// person.dog = "Simba";
console.log(person.dog.name);
console.log(dogName);

// Listas com objetos

const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: true,
    },
];

const descriptionOfLastTodo = todos[2].description;

console.log(descriptionOfLastTodo);