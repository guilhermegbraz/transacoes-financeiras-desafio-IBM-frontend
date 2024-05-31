import {Component, OnInit} from '@angular/core';
import {CabecalhoComponent} from "../../shared/cabecalho/cabecalho.component";
import {CabecalhoPaginaComponent} from "../../shared/cabecalho-pagina/cabecalho-pagina.component";
import {ContainerComponent} from "../../shared/container/container.component";
import {RodapeComponent} from "../../shared/rodape/rodape.component";
import {NgIf} from "@angular/common";
import {
  BotaoAcao,
  CabecalhoTabela,
  DadosTabela,
  TabelaPaginavelComponent
} from "../../shared/tabela-paginavel/tabela-paginavel.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-transacao-conta',
  standalone: true,
    imports: [
        CabecalhoComponent,
        CabecalhoPaginaComponent,
        ContainerComponent,
        RodapeComponent,
        TabelaPaginavelComponent,
        NgIf
    ],
  templateUrl: './transacao-conta.component.html',
  styleUrl: './transacao-conta.component.scss'
})
export class TransacaoContaComponent implements OnInit{
  private idConta: string| null = null;
  idContaRecebido: boolean = false
  dadosTabela!: DadosTabela<any>;
  colunasExibicao!:  CabecalhoTabela[];
  botoes!: BotaoAcao[];
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idConta = params.get('id');
      if (this.idConta != null) this.idContaRecebido = true;
    });
  }

  adicionarTransacao(): void {}

  mudarPagina(event: any): void {}
}
