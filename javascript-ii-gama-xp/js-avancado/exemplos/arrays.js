// // const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

// // //Acessar informações num array
// // console.log(alunasGama[3]) //"Clara"

// // // Operador spread (...)
// // const alunasXp = [...alunasGama, "Simara"]

// // console.log(alunasXp)

// // //Metodos de iteração
// // //Map
// // alunasXp.map(aluna => console.log(aluna))

// //

// //Filter
// const numeros = [34, 45, 67, 90, 55, 76]

// const numerosImpares = numeros.filter(numero => numero%2 !=0)
// console.log(numerosImpares)

// const numerosPares = numeros.filter(numero => numero%2 ==0)
// console.log(numerosPares)

// const produtos = ["geladeira", "fogao", "cama", "mesa"]

// //find

// const encontraCama = produtos.find(produto => produto === "cama")
// console.log(encontraCama)

// const encontraMesa = produtos.find(produto => produto === "mesa")
// console.log(encontraMesa)

// //sort - ordenação

// const numerosOrdenadosCrescente = numeros.sort()
// console.log(numerosOrdenadosCrescente)

// const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a)
// console.log(numerosOrdenadosDecrescente)

// //reduce - reduz nosso array a um resultado de uma operação matemática

// const numbers = [1,34,35]

// const soma = numbers.reduce((valorAnterior, valorAtual)=> {
//     return valorAnterior + valorAtual
// })

// // console.log(soma) //75

// const alunasGama = ['Paula', 'Maria', 'Estela', 'Clara']

// //Acessar informações do Array
// console.log(alunasGama[3])

// //Spread (...)
// const alunasXp = [...alunasGama, 'Simara']
// console.log(alunasXp)

// //Métodos de iteração
// for (let i = 0; i < alunasXp.length; i++) {
//   console.log(alunasXp[i])
// }

//Métodos de iteralção de Array
//1-Map: retorna um novo array sem altearar o array original
//criando uma cópia com as alterações que desejamos
const alunas = ['Paula', 'Maria', 'Estela', 'Clara']

alunas.map(aluna => console.log(aluna))

//2-Filter: retorna um novo array com os elementos filtrados
const numeros = [34, 35, 67, 90, 55, 13, 76, 22]
const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares)

const numeroPares = numeros.filter(numero => numero % 2 == 0)
console.log(numeroPares)

// 3- find - Encontra e retorna o primeiro elemento que achar igual ao elemento passado
const produtos = ['geladeira', 'fogão', 'cama', 'mesa']

const encontra = produtos.find(produto => produto == 'geladeira')
console.log(encontra)

const encontra2 = produtos.find(produto => produto == 'cama')
console.log(encontra2)

//4 - sort - ordenar

const num = [34, 45, 13, 22, 05, 42, 55, 98, 110]

const cres = num.sort((a, b) => a - b)
console.log(cres)

const desc = num.sort((a, b) => b - a)
console.log(desc)

//5 - reduce - reduz nosso array a um resultado de uma operação matemática
const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual
})

console.log(soma)
