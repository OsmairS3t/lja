export const users = [
  {
    id: 'a',
    avatar: '',
    nome: 'Osmair Moreira de Araujo',
    email: 'osmairdev@gmail.com',
    senha: 'abcdef',
  },
]

export const agendamentos = [
  {
      id: 'a',
      reuniao: 'a',
    }
  ]
  
export const reunioes = [
  {
    id: 'a',
    nome: 'Luz Jovem',
    tema: 'A conquista',
    pregador: 'Wanessa',
    dia: '15/03/2024',
    inicio: '20:00',
    fim: '22:00',
  }
]

export const funcoes = [
  {
    id: 'a',
    funcao: 'Recepção',
  },
  {
    id: 'b',
    funcao: 'Mídia',
  },
  {
    id: 'c',
    funcao: 'Lanchonete',
  },
  {
    id: 'd',
    funcao: 'Abertura',
  },
  {
    id: 'e',
    funcao: 'Louvor',
  },
  {
    id: 'f',
    funcao: 'Oferta',
  },
  {
    id: 'g',
    funcao: 'Palavra',
  },
  {
    id: 'h',
    funcao: 'Encerramento',
  },
]

export const servos = [
  {
    id: 'a',
    nome: 'Osmair',
    datanas: '20/07/1977',
  },
  {
    id: 'b',
    nome: 'Wanessa',
    datanas: '13/02/1978',
  },
  {
    id: 'c',
    nome: 'Mateus',
    datanas: '10/01/2000',
  },
]

export const escalas = [
  {
    id: 'a',
    diareuniao: '15/03/2024',
    ordem: 1,
    funcao: 'Abertura',
    servo: 'Osmair',
  },
  {
    id: 'a',
    diareuniao: '15/03/2024',
    ordem: 2,
    funcao: 'Louvor',
    servo: 'Time',
  },
  {
    id: 'a',
    diareuniao: '15/03/2024',
    ordem: 3,
    funcao: 'Oferta',
    servo: 'Wanessa',
  },
  {
    id: 'a',
    diareuniao: '15/03/2024',
    ordem: 4,
    funcao: 'Palavra',
    servo: 'Bispa',
  },
  {
    id: 'a',
    diareuniao: '15/03/2024',
    ordem: 5,
    funcao: 'Avisos',
    servo: 'Osmair',
  },
]

export const lancamentos = [
    {
        id:'a',
        categoria: "Oferta",
        tipo: "Entrada",
        descricao: "Ofertan na reunião",
        valor: 10,
        data: '01/03/2024',
        comprovante: 'file001.png',
    },
    {
      id:'b',
      categoria: "Lanchonete",
      tipo: "Entrada",
      descricao: "Torta de frango",
      valor: 15,
      data: '01/03/2024',
      comprovante: 'file001.png',
  },
]

export const categorias = [
    {
        id: 'a',
        nome: 'Oferta',
        icone: 'dollar',
    },
    {
        id: 'b',
        nome: 'Lanchonete',
        icone: 'dollar',
    },
    {
        id: 'c',
        nome: 'Produto',
        icone: 'dollar',
    },
    {
        id: 'd',
        nome: 'Reunião',
        icone: 'dollar',
    },
]
