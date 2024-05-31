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
import {TransacaoApiToTransacaoParser} from "../../domain/parser/transacaoApi-to-transacao.parser";
import {TransacaoFinanceiraService} from "../../domain/services/transacao-financeira.service";
import {TransacaoApi, TransacaoPageable} from "../../domain/response-api/transacao-response";
import {TransacaoFinanceira} from "../../domain/model/transacao.model";
import {PageEvent} from "@angular/material/paginator";
import {ClienteContaService} from "../../domain/services/cliente-conta.service";
import { ContaBancariaApi} from "../../domain/response-api/cliente-response";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogFormularioTransacaoComponent
} from "../../shared/dialog-formulario-transacao/dialog-formulario-transacao.component";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  colunasExibicao : CabecalhoTabela[] = [
    {nomeAtributo: "id", labelAtributo: "Identificador transação"},
    {nomeAtributo: "tipoTransacao", labelAtributo: "Tipo da transação"},
    {nomeAtributo: "valor", labelAtributo: "Valor monetario"},
    {nomeAtributo: "data", labelAtributo: "Data transação"},
    {nomeAtributo: "descricao", labelAtributo: "Descrição"},
  ];

  subtitulo: string;
  botaoAdicionarRegistroApto: boolean;
  private idConta: number;
  idContaRecebido: boolean;
  dadosTabela!: DadosTabela< TransacaoFinanceira>;
  quantidadeRegistros: number = 0;
  tamanhoPagina: number = 10;
  numeroPagina: number = 0;
  opcoesTamanhoPagina: number[] = [5, 10, 15, 25, 50]

  botoes!: BotaoAcao[];
  constructor(private route: ActivatedRoute, private transacaoApiParser: TransacaoApiToTransacaoParser,
              private transacaoService: TransacaoFinanceiraService,
              private clienteService: ClienteContaService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.idConta = 0;
    this.idContaRecebido = false;
    this.subtitulo = "Conta inexistente, volte para tela inicial"
    this.botaoAdicionarRegistroApto = false;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idConta = params.get('id');
      if (idConta != null) {
        this.idConta = Number(idConta);
        this.idContaRecebido = true;
        this.carregarRegistros();
        this.carregarInformacaoConta();
      }
    });
  }

  private carregarRegistros(): void {
    this.transacaoService.listarTransacaoByIdConta(
      this.idConta! as number, this.tamanhoPagina, this.numeroPagina
    ).subscribe({
        next:(response : HttpResponse<TransacaoPageable>) =>{
          if (response.status == 200) {
            this.dadosTabela = {dados: response.body!.content.map((transacaoApi: TransacaoApi) => this.transacaoApiParser.parse(transacaoApi))}
            this.quantidadeRegistros = response.body!.totalElements
          }
        },
      error: (response : HttpErrorResponse) => {
        this.snackBar.open(`Erro ao consultar transações para essa conta: ${response.error}`, 'Fechar', {
          duration: 8000
        })
      }
      }
    )
  }

  private carregarInformacaoConta():void {
    this.clienteService.detalharClienteContaByIdConta(this.idConta).subscribe((response: HttpResponse<ContaBancariaApi>) => {
      if(response.status == 200 ) {
        this.botaoAdicionarRegistroApto = true
        let conta = response.body!
        this.subtitulo = `Cliente: ${conta.cliente!.nome} | Saldo: ${conta.saldo} | Crédito disponível: ${conta.creditoDisponivel}`;
      }
    })
  }

  adicionarTransacao(): void {
    const referenciaDialog =
      this.dialog.open(DialogFormularioTransacaoComponent,{width: "60%", data: this.idConta});
    referenciaDialog.afterClosed().subscribe(_ => {
      this.carregarInformacaoConta();
      this.carregarRegistros()
    });
  }

  public mudarPagina(evento: PageEvent): void {
    this.numeroPagina = evento.pageIndex;
    this.tamanhoPagina = evento.pageSize
    this.carregarRegistros()

  }

}
