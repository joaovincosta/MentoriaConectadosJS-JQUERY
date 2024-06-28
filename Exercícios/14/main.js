function calcularPotencia() {
    var base = 2
    var expoente = 8
    var resultado = 1
    var passos = ''

    for (var i = 0; i <= expoente; i++) {
      passos += `${base}<sup>${i}</sup> = ${resultado}<br>`
      if (i < expoente) {
        resultado *= base
      }
    }

    var passosDiv = document.getElementById('passos')
    passosDiv.innerHTML = `
      <h3>Passos da Operação de Potenciação:</h3>
      ${passos}
      <p><strong>Resultado final: ${resultado}</strong></p>
    `;
  }

  calcularPotencia()