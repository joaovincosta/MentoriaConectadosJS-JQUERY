function calcularDelta() {
    var a = parseFloat(document.getElementById('coeficienteA').value)
    var b = parseFloat(document.getElementById('coeficienteB').value)
    var c = parseFloat(document.getElementById('coeficienteC').value)

    var delta = b * b - 4 * a * c

    var passosCalculo = `
      Δ = b^2 - 4ac
      Δ = ${b}^2 - 4·${a}·${c}
      Δ = ${b*b} - ${4*a*c}
      Δ = ${delta}
    `;

    var resultadoDiv = document.getElementById('resultado')
    resultadoDiv.innerHTML = `
      <h3>Resultado do cálculo do Delta (Δ):</h3>
      <p>${passosCalculo}</p>
      <p><strong>Δ = ${delta}</strong></p>
    `
 }