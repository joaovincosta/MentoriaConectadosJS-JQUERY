function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value)
    var peso = parseFloat(document.getElementById('peso').value)
    
    if (altura <= 0 || peso <= 0) {
      alert('Altura e peso devem ser maiores que zero.')
      return;
    }
    
    var imc = peso / (altura * altura)
    
    var resultadoDiv = document.getElementById('resultado')
    resultadoDiv.innerHTML = '<h3>Seu IMC é: ' + imc.toFixed(2) + '</h3>'
    
    var categoria = ''
    if (imc < 18.5) {
      categoria = 'Abaixo do peso'
    } else if (imc < 25) {
      categoria = 'Peso normal'
    } else if (imc < 30) {
      categoria = 'Sobrepeso'
    } else {
      categoria = 'Obesidade'
    }
    
    resultadoDiv.innerHTML += '<p>Categoria: ' + categoria + '</p>'
  }