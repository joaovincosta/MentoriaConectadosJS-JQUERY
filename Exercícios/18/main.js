var meuArray = []
meuArray[0] = '73167176531330624919225119674426574742355349194934';
meuArray[1] = '96983520312774506326239578318016984801869478851843';
meuArray[2] = '85861560789112949495459501737958331952853208805511';
meuArray[3] = '12540698747158523863050715693290963295227443043557';
meuArray[4] = '66896648950445244523161731856403098711121722383113';
meuArray[5] = '62229893423380308135336276614282806444486645238749';
meuArray[6] = '30358907296290491560440772390713810515859307960866';
meuArray[7] = '70172427121883998797908792274921901699720888093776';
meuArray[8] = '65727333001053367881220235421809751254540594752243';
meuArray[9] = '52584907711670556013604839586446706324415722155397';
meuArray[10]= '53697817977846174064955149290862569321978468622482';
meuArray[11]= '83972241375657056057490261407972968652414535100474';
meuArray[12]= '82166370484403199890008895243450658541227588666881';
meuArray[13]= '16427171479924442928230863465674813919123162824586';
meuArray[14]= '17866458359124566529476545682848912883142607690042';
meuArray[15]= '24219022671055626321111109370544217506941658960408';
meuArray[16]= '07198403850962455444362981230987879927244284909188';
meuArray[17]= '84580156166097919133875499200524063689912560717606';
meuArray[18]= '05886116467109405077541002256983155200055935729725';
meuArray[19]= '71636269561882670428252483600823257530420752963450';

function somarNumerosPares(stringNumeros) {
  var soma = 0
  var numerosPares = ''

  for (var i = 0; i < stringNumeros.length; i++) {
    var num = parseInt(stringNumeros[i], 10)
    if (num % 2 === 0) {
      soma += num
      numerosPares += `${num} `
    }
  }

  return { numeros: numerosPares.trim(), soma: soma }
}

function processarArray(meuArray) {
  var resultados = []

  for (var i = 0; i < meuArray.length; i++) {
    var resultado = somarNumerosPares(meuArray[i])
    resultados.push(resultado)
  }

  return resultados
}

var resultados = processarArray(meuArray)
exibirResultados(resultados)

function exibirResultados(resultados) {
  var resultadosDiv = document.getElementById('resultados')
  var html = '<h3>Soma dos números pares de cada linha:</h3>'

  for (var i = 0; i < resultados.length; i++) {
    html += `<p>Linha ${i + 1}: Números pares (${resultados[i].numeros}): Soma = ${resultados[i].soma}</p>`
  }

  resultadosDiv.innerHTML = html
}
