import {Component, Input, OnChanges, SimpleChanges, ViewChild, AfterViewInit} from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

export interface DadosTabela<T> {
  dados: T[];
}

export interface CabecalhoTabela {
  nomeAtributo: string,
  labelAtributo: string;
}
@Component({
  selector: 'app-tabela-paginavel',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatPaginatorModule],
  templateUrl: './tabela-paginavel.component.html',
  styleUrl: './tabela-paginavel.component.scss'
})

export class TabelaPaginavelComponent<T> implements AfterViewInit, OnChanges{
  @Input() colunas: CabecalhoTabela[] = [];
  colunasExibidas: string[] = []
  @Input() dataSource!: DadosTabela<T>;
  @ViewChild(MatTable) table!: MatTable<any>;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;



  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
  ngAfterViewInit(): void {
    this.renderTable()
  }
  ngOnChanges(_: SimpleChanges): void {
    this.renderTable()
  }

  public renderTable(): void {
    if(this.table) this.table.renderRows();
    this.colunasExibidas = this.colunas.map(c => c.nomeAtributo)
  }





}
