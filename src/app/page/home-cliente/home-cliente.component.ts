import { Component } from '@angular/core';
import {CabecalhoComponent} from "../../shared/cabecalho/cabecalho.component";
import {RodapeComponent} from "../../shared/rodape/rodape.component";
import {ContainerComponent} from "../../shared/container/container.component";
import {CabecalhoPaginaComponent} from "../../shared/cabecalho-pagina/cabecalho-pagina.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {PageEvent} from '@angular/material/paginator';
import {
  BotaoAcao,
  CabecalhoTabela,
  DadosTabela,
  TabelaPaginavelComponent
} from "../../shared/tabela-paginavel/tabela-paginavel.component";
import {ClienteConta} from "../../domain/model/cliente-conta.model";


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
export class HomeClienteComponent {
  dadosClietntes:ClienteConta[] = [
    {idCliente: 5, nome: "Guilherme", email: "g@email.com", numeroConta:"65027810",  idConta: 62, saldo: 845.32, creditoDisponivel: 1255},
    {idCliente: 5, nome: "Guilherme", email: "g@email.com", numeroConta:"65027810",  idConta: 62, saldo: 845.32, creditoDisponivel: 1255},
    {idCliente: 5, nome: "Guilherme", email: "g@email.com", numeroConta:"65027810",  idConta: 62, saldo: 845.32, creditoDisponivel: 1255},
    {idCliente: 5, nome: "Guilherme", email: "g@email.com", numeroConta:"65027810",  idConta: 62, saldo: 845.32, creditoDisponivel: 1255},
    {idCliente: 5, nome: "Guilherme", email: "g@email.com", numeroConta:"65027810",  idConta: 62, saldo: 845.32, creditoDisponivel: 1255},
    {idCliente: 5, nome: "Guilherme", email: "g@email.com", numeroConta:"65027810",  idConta: 62, saldo: 845.32, creditoDisponivel: 1255},
    {idCliente: 5, nome: "Guilherme", email: "g@email.com", numeroConta:"65027810",  idConta: 62, saldo: 845.32, creditoDisponivel: 1255},
    {idCliente: 5, nome: "Guilherme", email: "g@email.com", numeroConta:"65027810",  idConta: 62, saldo: 845.32, creditoDisponivel: 1255},
    {idCliente: 5, nome: "Guilherme", email: "g@email.com", numeroConta:"65027810",  idConta: 62, saldo: 845.32, creditoDisponivel: 1255}
  ]
  dadosTabela : DadosTabela<ClienteConta>= {dados: this.dadosClietntes}
  colunasExibicao: CabecalhoTabela[] = [
    {nomeAtributo: "idCliente", labelAtributo: "Identificador"},
    {nomeAtributo: "nome", labelAtributo: "Nome cliente"},
    {nomeAtributo: "email", labelAtributo: "Email cliente"},
    {nomeAtributo: "numeroConta", labelAtributo: "Número conta cliente"},
    {nomeAtributo: "saldo", labelAtributo: "Saldo disponivel"},
    {nomeAtributo: "creditoDisponivel", labelAtributo: "Credito disponível"},
  ]

  botoes: BotaoAcao[];
  constructor() {
    this.botoes = [{acao: "detalharTransacao", icone: "open_in_new", descricao: "Detalhar as transações financeiras da conta"}]
  }

  public adicionarCliente(): void {
   this.dadosClietntes.push({idCliente: 97, nome: "Joao", email: "joao@email.com", numeroConta:"32123456",  idConta: 62, saldo: 125.32, creditoDisponivel: 378})
    this.dadosTabela = {dados: this.dadosClietntes}
  }

 public mudarPagina(evento: PageEvent): void {
    console.log("Alterando pagina")
 }
}
