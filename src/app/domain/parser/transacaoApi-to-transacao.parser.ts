import {Injectable} from "@angular/core";
import {TransacaoApi} from "../response-api/transacao-response";
import {TransacaoFinanceira} from "../model/transacao.model";


@Injectable({
  providedIn: 'root',
})
export class TransacaoApiToTransacaoParser {
  constructor() {}

  parse(transacaoApi: TransacaoApi): TransacaoFinanceira {
    return {
      id: transacaoApi.id,
      idConta: transacaoApi.idConta,
      tipoTransacao: transacaoApi.tipo,
      valor: transacaoApi.valor,
      data: transacaoApi.data,
      descricao: transacaoApi.descricao
    };
  }
}
