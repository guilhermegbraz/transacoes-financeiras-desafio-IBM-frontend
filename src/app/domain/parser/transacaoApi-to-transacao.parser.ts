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
      data: this.formatarDataParaBrasileiro(transacaoApi.data),
      descricao: transacaoApi.descricao
    };
  }

  private formatarDataParaBrasileiro(dataISO: string): string {
    const data = new Date(dataISO);
    data.setHours(data.getHours() - 3);
    const opcoes: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    return new Intl.DateTimeFormat('pt-BR', opcoes).format(data);
  }
}
