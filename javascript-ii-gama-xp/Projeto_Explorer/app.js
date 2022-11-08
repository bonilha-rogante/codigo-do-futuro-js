//pegar input
//Se for Sim, mostra as categorias disponíveis. Perguntar qual escolhe
//Se não, mostra os livros em ordem crescente pela qtd de páginas

const livros = require('./dataBase')
const readLine = require('readline-sync')

const entradaInicial = readLine.question('Deseja buscar um livro? S/N ')

if (entradaInicial.toLocaleUpperCase() == 'S') {
  console.log('Essas são as categorias disponíveis: ')
  console.log(
    'Produtividade e estilo de vida',
    '/História brasileira',
    '/Américas',
    '/Tecnologia',
    '/Estilo de vida',
    '/Tecnologia'
  )

  const entradaCategoria = readLine.question('Qual categoria você escolhe: ')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
  console.log('Essas são todos os livros disponíveis: ')
  console.table(livrosOrdenados)
}
