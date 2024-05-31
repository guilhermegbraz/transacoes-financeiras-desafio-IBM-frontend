export interface TransacaoPageable {
  content: TransacaoApi[],
  number: number,
  size: number,
  totalPages: number,
  totalElements: number
}

export interface TransacaoApi {
  id: number,
  idConta: number,
  tipo: string,
  valor: number
  data: Date,
  descricao: string | null

}
