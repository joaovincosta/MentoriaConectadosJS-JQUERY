soma = 0
a = 0
b = 1
for ( i = 0; b <= 50000; i++) {
    if (b % 2 === 0) {
        soma += b
    }
    temporal = a + b
    a = b
    b = temporal
}
message = "A soma dos termos pares duma sequência Fibonacci que vai até 50000 é de: " +soma
alert(message)