function inverter() {
    var entrada = document.getElementById('entrada').value
    var resultado = ''

    for (var i = entrada.length - 1; i >= 0; i--) {
      resultado += entrada[i]
    }

    var resultadoDiv = document.getElementById('resultado')
    resultadoDiv.innerHTML = `
      <h3>Resultado Invertido:</h3>
      <p>${resultado}</p>
    `;
  }