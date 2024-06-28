let soma = 0

for ( i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        soma += i
    }
}
message = "A soma dos múltiplos de 3 e 5 abaixo de 1000 é: " +soma
alert(message)