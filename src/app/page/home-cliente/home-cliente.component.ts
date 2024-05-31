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
    {nomeAtributo: "idCliente", labelAtributo: "Identificador"},
    {nomeAtributo: "nome", labelAtributo: "Nome cliente"},
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

  constructor(private router: Router, private clienteContaService: ClienteContaService, private clienteApiParser: ClienteApiToClienteContaParser) {
    this.botoes = [{acao: this.ACAO_DETALHAR_TRANSACAO, icone: "open_in_new", descricao: "Detalhar as transações financeiras da conta"}]
    this.dadosTabela = {dados: []}
  }

  ngOnInit(): void {
    this.carregarRegistros();
  }
  private carregarRegistros(): void {
    this.clienteContaService.listar(this.tamanhoPagina,this.numeroPagina).subscribe((response: ClietePageable) => {
      this.quantidadeRegistros = response.totalElements
      this.dadosTabela = {dados:response.content.map((clienteApi: ClienteApi) => this.clienteApiParser.parse(clienteApi))};
    })
  }
  public adicionarCliente(): void {
    this.dadosTabela.dados.push({idCliente: 97, nome: "Joao", email: "joao@email.com", numeroConta:"32123456",  idConta: 62, saldo: 125.32, creditoDisponivel: 378})
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
