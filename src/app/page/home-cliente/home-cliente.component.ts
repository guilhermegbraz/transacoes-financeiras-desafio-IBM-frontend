import {Component, OnInit} from '@angular/core';
import {CabecalhoComponent} from "../../shared/cabecalho/cabecalho.component";
import {RodapeComponent} from "../../shared/rodape/rodape.component";
import {ContainerComponent} from "../../shared/container/container.component";
import {CabecalhoPaginaComponent} from "../../shared/cabecalho-pagina/cabecalho-pagina.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {PageEvent} from '@angular/material/paginator';
import {
  BotaoAcao,
  CabecalhoTabela,
  DadosTabela, EntidadeAcao,
  TabelaPaginavelComponent
} from "../../shared/tabela-paginavel/tabela-paginavel.component";
import {ClienteConta} from "../../domain/model/cliente-conta.model";
import {ClienteContaService} from "../../domain/services/cliente-conta.service";
import {ClienteApiToClienteContaParser} from "../../domain/parser/clienteApi-to-clienteConta.parser";
import {ClienteApi, ClietePageable} from "../../domain/response-api/cliente-response";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogFormularioClienteComponent
} from "../../shared/dialog-formulario-cliente/dialog-formulario-cliente.component";


@Component({
  selector: 'app-home-cliente',
  standalone: true,
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    ContainerComponent,
    CabecalhoPaginaComponent,
    MatSlideToggleModule,
    TabelaPaginavelComponent
  ],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.scss'
})
export class HomeClienteComponent implements OnInit{

  COLUNAS_EXIBIDAS: CabecalhoTabela[] = [
    {nomeAtributo: "idConta", labelAtributo: "Identificador"},
    {nomeAtributo: "nome", labelAtributo: "Nome cliente"},
    {nomeAtributo: "idade", labelAtributo: "Idade cliente"},
    {nomeAtributo: "email", labelAtributo: "Email cliente"},
    {nomeAtributo: "numeroConta", labelAtributo: "Número conta cliente"},
    {nomeAtributo: "saldo", labelAtributo: "Saldo disponivel"},
    {nomeAtributo: "creditoDisponivel", labelAtributo: "Credito disponível"},
  ]

  dadosTabela: DadosTabela<ClienteConta>;
  botoes: BotaoAcao[];
  quantidadeRegistros: number = 0;
  tamanhoPagina: number = 10;
  numeroPagina: number = 0;
  opcoesTamanhoPagina: number[] = [5, 10, 15, 25, 50]

  ACAO_DETALHAR_TRANSACAO = "detalharTransacao"

  constructor(
    private router: Router,
    private clienteContaService: ClienteContaService,
    private clienteApiParser: ClienteApiToClienteContaParser,
    public dialog: MatDialog
  ) {
    this.botoes = [{acao: this.ACAO_DETALHAR_TRANSACAO, icone: "open_in_new", descricao: "Detalhar as transações financeiras da conta"}]
    this.dadosTabela = {dados: []}
  }

  ngOnInit(): void {
    this.carregarRegistros();
  }
  private carregarRegistros(): void {
    this.clienteContaService.listar(this.tamanhoPagina,this.numeroPagina).subscribe((response: HttpResponse<ClietePageable>) => {
      if(response.status == 200) {
        this.quantidadeRegistros = response.body!.totalElements
        this.dadosTabela = {dados:response.body!.content.map((clienteApi: ClienteApi) => this.clienteApiParser.parse(clienteApi))};
      }
    })
  }
  public adicionarCliente(): void {
    const referenciaDialog =
      this.dialog.open(DialogFormularioClienteComponent,{width: "60%"});
    referenciaDialog.afterClosed().subscribe(_ => this.carregarRegistros());
  }

   public mudarPagina(evento: PageEvent): void {
      this.numeroPagina = evento.pageIndex;
      this.tamanhoPagina = evento.pageSize
     this.carregarRegistros()
   }

   handleBotaoAcao(evento:  EntidadeAcao<ClienteConta>): void {
     if(evento.acao == this.ACAO_DETALHAR_TRANSACAO) this.router.navigate([`conta/${evento.entidade.idConta}`])
   }


}
