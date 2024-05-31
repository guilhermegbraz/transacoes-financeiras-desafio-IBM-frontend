import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ClienteApi, ClietePageable} from "../response-api/cliente-response";

@Injectable({
  providedIn: 'root'
})
export class ClienteContaService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  listar(tamanhoPagina: number, numeroPagina: number): Observable<ClietePageable> {
    return this.httpClient.get<ClietePageable>(`${this.apiUrl}/cliente?page=${numeroPagina}&size=${tamanhoPagina}`)
  }

  detalharCliente(idCliente: number): Observable<HttpResponse<ClienteApi>> {
    return this.httpClient.get<ClienteApi>(`${this.apiUrl}/cliente/${idCliente}`, { observe: 'response' })
  }
}
