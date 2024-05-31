export interface TransacaoFinanceira {
  id: number,
  idConta: number,
  tipoTransacao: string,
  valor: number,
  data: Date,
  descricao: string | null;
}
