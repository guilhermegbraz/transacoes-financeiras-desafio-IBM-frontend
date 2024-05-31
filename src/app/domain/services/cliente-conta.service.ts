import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClienteConta} from "../model/cliente-conta.model";
import {environment} from "../../../environments/environment";
import {ClietePageable} from "../response-api/cliente-response";

@Injectable({
  providedIn: 'root'
})
export class ClienteContaService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  listar(tamanhoPagina: number, numeroPagina: number): Observable<ClietePageable> {
    return this.httpClient.get<ClietePageable>(`${this.apiUrl}/cliente?page=${numeroPagina}&size=${tamanhoPagina}`)
  }
}
