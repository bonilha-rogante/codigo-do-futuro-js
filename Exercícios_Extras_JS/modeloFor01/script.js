function contar() {
  let inicio = Number(document.querySelector('input#inicio').value)
  let fim = Number(document.querySelector('input#fim').value)
  let passo = Number(document.querySelector('input#passo').value)
  let res = document.querySelector('div#res')
  res.innerHTML = `<p>Contando...</p>`

  if (inicio == '' || fim == '' || passo == '') {
    alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = 'Contando: '
    if (inicio < fim) {
      for (let c = inicio; c <= fim; c += passo) {
        res.innerHTML += `${c} `
      }
    } else {
      for (let c = inicio; c >= fim; c -= passo) {
        res.innerHTML += `${c} `
      }
    }
  }

  //   for (let c = inicio; c <= fim; c++) {
  //     if (passo != 0) {
  //       res.innerHTML += `<p>${c}</p>`
  //     } else {
  //       res.innerHTML += `<p>Contagem inválida</p>`
  //     }
  //   }
}
