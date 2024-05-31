import { Component } from '@angular/core';
import {FormularioClienteComponent} from "../formulario-cliente/formulario-cliente.component";
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-formulario-cliente',
  standalone: true,
  imports: [
    FormularioClienteComponent,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './dialog-formulario-cliente.component.html',
  styleUrl: './dialog-formulario-cliente.component.scss'
})
export class DialogFormularioClienteComponent {
}
