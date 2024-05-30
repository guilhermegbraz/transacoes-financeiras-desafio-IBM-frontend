import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CabecalhoComponent} from "./shared/cabecalho/cabecalho.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'transacoes-financeiras-dIBM';
}
