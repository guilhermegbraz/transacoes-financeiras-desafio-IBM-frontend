import {Component, Input, input} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TransacaoFinanceiraService} from "../../domain/services/transacao-financeira.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CadastroTransacaoDto} from "../../domain/response-api/cadastro-transacao.dto";
import {MatSelectModule} from '@angular/material/select';
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {TransacaoApi} from "../../domain/response-api/transacao-response";
import {catchError} from "rxjs";


@Component({
  selector: 'app-formulario-transacao',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatSelectModule],
  templateUrl: './formulario-transacao.component.html',
  styleUrl: './formulario-transacao.component.scss'
})
export class FormularioTransacaoComponent {
  transacaoFormulario: CadastroTransacaoDto = {idConta: 0, tipo: "", valor: 0, descricao: ""};
  @Input() idConta!: number;
  constructor(private dialogRef: MatDialogRef<FormularioTransacaoComponent>,
              private transacaoService: TransacaoFinanceiraService, private snackBar: MatSnackBar) {

  }
  enviarTransacao(): void {
    this.transacaoFormulario.idConta = this.idConta;
    this.transacaoService.cadastrarTransacao(this.transacaoFormulario)
      .subscribe(
        {
          next: (response: HttpResponse<TransacaoApi>) => {
            if (response.status == 201) {
              this.dialogRef.close();
              this.snackBar.open("Transação cadastrada", 'Fechar', {
                duration: 5000
              });
            }
          },
          error: (response: HttpErrorResponse) => {
            this.snackBar.open(`Erro ao cadastrar transação: ${response.error}`, 'Fechar', {
              duration: 5000
            })
          }
        })
  }
}
