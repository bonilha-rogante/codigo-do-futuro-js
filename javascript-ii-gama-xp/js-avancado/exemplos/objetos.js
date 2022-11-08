// const pessoa = {
//     nome: "Simara",
//     idade: 32,
//     cidade: "São Paulo"
// }

// //Notação de ponto
// console.log(pessoa.nome) //"Simara"

// //Notação de colchetes
// console.log(pessa['idade']) //32

// //Como desestruturar Objetos

// const { nome, idade, cidade } = pessoa

// console.log(nome) //"Simara"
// console.log(idade) //32
// console.log(cidade) //São Paulo

const pessoa = {
  nome: 'Guilherme',
  idade: 30,
  cidade: 'São Paulo'
}

//Notação de Ponto
console.log(pessoa.nome)
console.log(
  `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro na cidade de ${pessoa.cidade}`
)

//notalção de colchetes

console.log(pessoa['idade'])

//notação por destruct - desestruturar objetos

const { nome, idade, cidade } = pessoa
console.log(nome)
