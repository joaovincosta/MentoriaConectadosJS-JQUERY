function inverterSequencia(sequencia) {
    return sequencia.split('').reverse().join('')
  }
    function processarSequencia() {
    var sequenciaOriginal = document.getElementById('inputSequencia').value
  
    if (sequenciaOriginal.trim() === '') {
      alert('Por favor, digite uma sequência de caracteres.')
      return
    }
  
    var sequenciaInvertida = inverterSequencia(sequenciaOriginal)
  
    var resultadosDiv = document.getElementById('resultados')
    resultadosDiv.innerHTML = `
      <p><strong>Sequência Original:</strong> ${sequenciaOriginal}</p>
      <p><strong>Sequência Invertida:</strong> ${sequenciaInvertida}</p>
    `;
  }
  
  var botaoProcessar = document.getElementById('botaoProcessar')
  botaoProcessar.addEventListener('click', processarSequencia)
  