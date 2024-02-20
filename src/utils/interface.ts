export interface IUser {
    id: string;
    avatar: string;
    nome: string;
    email: string;
    senha: string;
  }

export interface IAgendamento {
    id: string;
    reuniao: string;
 }
   
  export interface IReuniao   {
      id: string;
      nome: string;
      tema: string;
      pregador: string;
      dia: string;
      inicio: string;
      fim: string;
  }

export interface IFuncao {
    id: string;
    funcao: string;
}

export interface IServo {
    id: string;
    nome: string;
    datanas: string;
  }

export interface IEscala {
    id: string;
    diareuniao: string;
    ordem: number;
    funcao: string;
    servo: string;
  }

export interface ILancamento  {
  id:string;
  categoria: string;
  tipo: string;
  descricao: string;
  valor: number;
  data: string;
  comprovante: string;
}

export interface ICategoria {
  id: string;
  nome: string;
  icone: string;
}