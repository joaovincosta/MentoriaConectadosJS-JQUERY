function ordenarSequenciaCaracteres(sequencia) {
    var arrayCaracteres = sequencia.split('')
  
    var arrayOrdenado = arrayCaracteres.sort()
  
    var sequenciaOrdenada = arrayOrdenado.join('')
  
    return sequenciaOrdenada
  }
  
  function processarSequencia() {
    var sequenciaOriginal = document.getElementById('inputSequencia').value
  
    if (sequenciaOriginal.trim() === '') {
      alert('Por favor, digite uma sequência de caracteres.')
      return
    }
  
    var sequenciaOrdenada = ordenarSequenciaCaracteres(sequenciaOriginal)
  
    var resultadosDiv = document.getElementById('resultados')
    resultadosDiv.innerHTML = `
      <p><strong>Sequência Original:</strong> ${sequenciaOriginal}</p>
      <p><strong>Sequência Ordenada:</strong> ${sequenciaOrdenada}</p>
    `;
  }
  
  var botaoProcessar = document.getElementById('botaoProcessar')
  botaoProcessar.addEventListener('click', processarSequencia)
  