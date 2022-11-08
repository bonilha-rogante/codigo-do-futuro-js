// const filmes = [
//     {
//         id: 1,
//         titulo: "Dilema das Redes",
//         descricao: "Um documentario sobre tecnologia.",
//         duracao: 120
//     },
//     {
//         id: 2,
//         titulo: "Us",
//         descricao: "Um filme de terror legal demais.",
//         duracao: 120
//     },
//     {
//         id: 3,
//         titulo: "Corra",
//         descricao: "Um filme de suspense bem legal.",
//         duracao: 120
//     },
// ]

// const [{id, titulo, descricao, duracao}]  = filmes

// filmes.map(filme => console.log(filme.descricao))

const filmes = [
  {
    id: 1,
    titulo: 'Dilema das Redes',
    descricao: 'Documentário sobre tecnologia.',
    duracao: 120
  },
  {
    id: 2,
    titulo: 'Corra',
    descricao: 'Filme de terror',
    duracao: 130
  },
  {
    id: 3,
    titulo: 'Senhor dos Anéis',
    descricao: 'Fantasia',
    duracao: 215
  }
]

const [{ id, titulo, descricao, duracao }] = filmes

console.log(titulo)

filmes.map(filme => console.log(filme.descricao))
