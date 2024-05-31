import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ClienteApi, ClietePageable, ContaBancariaApi} from "../response-api/cliente-response";
import {CadastroClienteDto} from "../response-api/cadastro-cliente.dto";

@Injectable({
  providedIn: 'root'
})
export class ClienteContaService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  listar(tamanhoPagina: number, numeroPagina: number): Observable<HttpResponse<ClietePageable>> {
    return this.httpClient.get<ClietePageable>(`${this.apiUrl}/cliente?page=${numeroPagina}&size=${tamanhoPagina}`, { observe: 'response' })
  }

  detalharClienteContaByIdConta(idCliente: number): Observable<HttpResponse<ContaBancariaApi>> {
    return this.httpClient.get<ContaBancariaApi>(`${this.apiUrl}/conta/${idCliente}`, { observe: 'response' })
  }

  public cadastrarCliente(cliente: CadastroClienteDto): Observable<HttpResponse<ClienteApi>> {
    return this.httpClient.post<ClienteApi>(`${this.apiUrl}/cliente`, cliente, { observe: 'response' })
  }
}
