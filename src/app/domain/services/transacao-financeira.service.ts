import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {TransacaoPageable} from "../response-api/transacao-response";

@Injectable({
  providedIn: 'root'
})
export class TransacaoFinanceiraService {
  private entidadeConta: string = "conta";
  private entidadeTransacao: string = "transacao"
  private  apiUrl: string = environment.apiUrl;
  constructor(private httpCliente: HttpClient) { }

  public listarTransacaoByIdConta(idConta: number, tamanhoPagina: number, numeroPagina: number): Observable<TransacaoPageable> {
    return this.httpCliente.get<TransacaoPageable>(
      `${this.apiUrl}/${this.entidadeConta}/${idConta}/${this.entidadeTransacao}?page=${numeroPagina}&size=${tamanhoPagina}`
    );
  }
}
