//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens
//- Se a média for igual ou maior que 7     - aprovado
// - se maior que  5  e menor que 7 -  recuperação
// se menor que 5 reprovado

function calculaMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3

  if (media >= 7) {
    return 'APROVADO'
  }

  if (media < 7 && media >= 5) {
    return 'RECUPERAÇÃO'
  }

  if (media < 5) {
    return 'REPROVADO'
  }
}

console.log(calculaMedia(5, 4, 5))
