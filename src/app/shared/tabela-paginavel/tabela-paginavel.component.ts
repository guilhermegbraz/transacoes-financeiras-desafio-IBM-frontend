import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTable, MatTableModule} from '@angular/material/table';

import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

export interface DadosTabela<T> {
  dados: T[];
}

export interface CabecalhoTabela {
  nomeAtributo: string,
  labelAtributo: string;
}

export interface BotaoAcao {
  acao: string,
  icone: string,
  descricao: string;
}
export interface EntidadeAcao<T> {
  entidade: T,
  acao: string

}
@Component({
  selector: 'app-tabela-paginavel',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './tabela-paginavel.component.html',
  styleUrl: './tabela-paginavel.component.scss'
})

export class TabelaPaginavelComponent<T> implements AfterViewInit, OnChanges{
  @Input() colunas: CabecalhoTabela[] = [];
  @Input() dataSource!: DadosTabela<T>;
  @Input() exibirBotoesAcao: boolean = false;
  @Input() botoesAcao: BotaoAcao[] = [];
  @ViewChild(MatTable) table!: MatTable<T>;
  @Output() clickBotaoAcao: EventEmitter<EntidadeAcao<T>> = new EventEmitter<EntidadeAcao<T>>()
  colunasExibidas: string[] = []
  ngAfterViewInit(): void {
    this.renderTable()
  }
  ngOnChanges(_: SimpleChanges): void {
    this.renderTable()
  }

  public renderTable(): void {
    if(this.table) this.table.renderRows();
    this.colunasExibidas = this.colunas.map(c => c.nomeAtributo)
    if(this.exibirBotoesAcao) this.colunasExibidas.push("Ação");

  }

  public emitirClickBotao(registro: T, acao: string) {
    this.clickBotaoAcao.emit({entidade: registro, acao: acao})
  }


}
