import { Component } from '@angular/core';
import {CadastroClienteDto} from "../../domain/response-api/cadastro-cliente.dto";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ClienteContaService} from "../../domain/services/cliente-conta.service";
import {ClienteApi} from "../../domain/response-api/cliente-response";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.scss'
})
export class FormularioClienteComponent {

  clienteFormulario: CadastroClienteDto = {id: "", nome: "", idade: 18 , email: "", numeroConta: ""};

  constructor(private dialogRef: MatDialogRef<FormularioClienteComponent>,
              private clienteContaService: ClienteContaService,
              private snackBar: MatSnackBar) {
  }
  enviarCliente(): void {
    this.clienteFormulario.idade = Math.floor(this.clienteFormulario.idade);
    this.clienteContaService.cadastrarCliente(this.clienteFormulario).subscribe(
      {
        next: (response: HttpResponse<ClienteApi>) => {
          if(response.status == 201) {
            this.dialogRef.close();
            this.snackBar.open("Cliente cadastrado", 'Fechar', {
              duration: 5000
            });
          }
        },
        error: (response: HttpErrorResponse) => {
          let mensagemErro = response.error
          if(Array.isArray(response.error)) {
            mensagemErro = "";
            response.error.forEach((erro) => {mensagemErro += erro.campo + " - " + erro.mensagem + "; "})
          }
          this.snackBar.open(`Erro ao cadastrar cliente: ${mensagemErro}`, 'Fechar', {
            duration: 5000
          })
        }
      }
    )
  }
}
