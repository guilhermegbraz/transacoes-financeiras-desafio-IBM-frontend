import {Injectable} from "@angular/core";
import {ClienteApi} from "../response-api/cliente-response";
import {ClienteConta} from "../model/cliente-conta.model";

@Injectable({
  providedIn: 'root',
})
export class ClienteApiToClienteContaParser {
  constructor() {}

  parse(clienteApi: ClienteApi): ClienteConta {
    return {
      idCliente: clienteApi.id,
      nome: clienteApi.nome,
      email: clienteApi.email,
      numeroConta: clienteApi.contaBancaria.numeroConta,
      idConta: clienteApi.contaBancaria.id,
      saldo: clienteApi.contaBancaria.saldo,
      creditoDisponivel: clienteApi.contaBancaria.creditoDisponivel
    };
  }
}
