export interface ClietePageable {
  content: ClienteApi[],
  number: number,
  size: number,
  totalPages: number,
  totalElements: number
}

export interface ClienteApi {
  id: number,
  nome: string,
  email: string;
  idade: number;
  contaBancaria: ContaBancariaApi;
}

export interface ContaBancariaApi {
  id: number,
  numeroConta: string,
  saldo: number,
  creditoDisponivel: number;
  cliente?: ClienteApi
}
