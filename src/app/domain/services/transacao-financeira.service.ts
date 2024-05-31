import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {TransacaoApi, TransacaoPageable} from "../response-api/transacao-response";
import {CadastroTransacaoDto} from "../response-api/cadastro-transacao.dto";

@Injectable({
  providedIn: 'root'
})
export class TransacaoFinanceiraService {
  private entidadeConta: string = "conta";
  private entidadeTransacao: string = "transacao"
  private  apiUrl: string = environment.apiUrl;
  constructor(private httpCliente: HttpClient) { }

  public listarTransacaoByIdConta(idConta: number, tamanhoPagina: number, numeroPagina: number): Observable<HttpResponse<TransacaoPageable>> {
    return this.httpCliente.get<TransacaoPageable>(
      `${this.apiUrl}/${this.entidadeConta}/${idConta}/${this.entidadeTransacao}?page=${numeroPagina}&size=${tamanhoPagina}`,
      { observe: 'response' }
    );
  }

  public cadastrarTransacao(transacao: CadastroTransacaoDto): Observable<HttpResponse<TransacaoApi>> {
    return this.httpCliente.post<TransacaoApi>(`${this.apiUrl}/${this.entidadeTransacao}`,
      transacao, { observe: 'response' })
  }

}
