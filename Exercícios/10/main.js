function EPrimo(num) {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    let i = 5
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false
      i += 6
    }
    return true
  }

  function exibirNumerosPrimos() {
    const tabelaPrimos = document.getElementById('tabelaPrimos')
    
    for (let i = 0; i <= 200; i++) {
      const newRow = tabelaPrimos.insertRow()
      const numCell = newRow.insertCell(0)
      const primoCell = newRow.insertCell(1)

      numCell.textContent = i
      if (isPrime(i)) {
        primoCell.textContent = 'Sim'
        newRow.classList.add('primo')
      } else {
        primoCell.textContent = 'Não'
      }
    }
  }
  exibirNumerosPrimos()