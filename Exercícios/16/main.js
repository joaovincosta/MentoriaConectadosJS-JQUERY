function calcularPotencia() {
    var base = 2
    var expoente = 8
    var passos = ''

    for (var i = 0; i <= expoente; i++) {
      var resultado = Math.pow(base, i)
      passos += `${base}<sup>${i}</sup> = ${resultado}<br>`
    }

    var passosDiv = document.getElementById('passos')
    passosDiv.innerHTML = `
      <h3>Passos da Operação de Potenciação:</h3>
      ${passos}
      <p><strong>Resultado final: ${Math.pow(base, expoente)}</strong></p>
    `;
  }

  calcularPotencia()