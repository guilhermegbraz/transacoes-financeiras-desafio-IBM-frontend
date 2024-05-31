import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatMiniFabButton} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from "@angular/common";
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-cabecalho-pagina',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMiniFabButton,
    MatTooltipModule,
    MatIconModule,
    NgIf,
    MatPaginatorModule
  ],
  templateUrl: './cabecalho-pagina.component.html',
  styleUrl: './cabecalho-pagina.component.scss'
})
export class CabecalhoPaginaComponent {
  @Input() tituloPagina: String = "";
  @Input() exibirPaginador: boolean = false;
  @Input() exibirBotaoAdicionarRegistro: boolean = false
  @Output() clickBotaoAdicionarRegistro: EventEmitter<void> = new EventEmitter();

  @Input() length: number = 0;
  @Input()  pageSize: number = 0;
  @Input() pageIndex: number = 0;
  @Input() pageSizeOptions: number[] = [];
  @Output() alteracaoPagina: EventEmitter<PageEvent> = new EventEmitter();

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  handlePageEvent(e: PageEvent) {
    this.alteracaoPagina.emit(e)
  }
  onClickBotaoAdicionarRegistro(): void {
    this.clickBotaoAdicionarRegistro.emit();
  }
}
