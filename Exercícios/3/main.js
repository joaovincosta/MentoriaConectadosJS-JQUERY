const num1 = prompt("Digite o primeiro número: ")
const num2 = prompt("Digite o segundo número: ")
const num3 = prompt("Digite o terceiro número: ")

if (num1>num2 && num1>num3) {
    message = "O primeiro número é maior"
} else if (num2>num1 && num2>num3) {
    message = "O segundo número é o maior"
} else if (num3>num1 && num3>num2) {
    message = "O terceiro número é o maior"
}

alert(message)