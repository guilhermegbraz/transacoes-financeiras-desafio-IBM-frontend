import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormularioTransacaoComponent} from "../formulario-transacao/formulario-transacao.component";


@Component({
  selector: 'app-dialog-formulario-transacao',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormularioTransacaoComponent],
  templateUrl: './dialog-formulario-transacao.component.html',
  styleUrl: './dialog-formulario-transacao.component.scss'
})
export class DialogFormularioTransacaoComponent {
  idConta: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: number) {
    this.idConta = data;
  }
}
