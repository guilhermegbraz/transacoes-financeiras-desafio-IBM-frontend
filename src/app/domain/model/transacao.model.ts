export interface TransacaoFinanceira {
  id: number,
  idConta: number,
  tipoTransacao: string,
  valor: number,
  data: string,
  descricao: string | null;
}
