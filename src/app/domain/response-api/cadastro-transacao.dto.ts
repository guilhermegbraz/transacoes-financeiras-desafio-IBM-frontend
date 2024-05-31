export interface CadastroTransacaoDto {
  idConta: number,
  tipo: string,
  valor: number,
  descricao?: string;
}
