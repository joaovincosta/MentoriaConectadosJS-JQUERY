function realizarPotenciacao() {
    var base = getRandomInt(1, 10)
    var expoente = getRandomInt(1, 5)

    var resultado = 1
    for (var i = 0; i < expoente; i++) {
      resultado *= base
    }

    var resultadoDiv = document.getElementById('resultado')
    resultadoDiv.innerHTML = `
      <h3>Operação de Potenciação:</h3>
      <p>Base: ${base}</p>
      <p>Expoente: ${expoente}</p>
      <p>Potência: ${resultado}</p>
    `;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
  }