import { Component } from '@angular/core';
import {CabecalhoComponent} from "../../shared/cabecalho/cabecalho.component";
import {RodapeComponent} from "../../shared/rodape/rodape.component";
import {ContainerComponent} from "../../shared/container/container.component";

@Component({
  selector: 'app-home-cliente',
  standalone: true,
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    ContainerComponent
  ],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.scss'
})
export class HomeClienteComponent {

}
