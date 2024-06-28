numsprimos = 0
i = 2

while (numsprimos<=1001) {
    if (i<=1) {
        ultimoprimo = i
        numsprimos += 1
    }
}

message = "O 1001º número primo é: "+ultimoprimo
alert(message)