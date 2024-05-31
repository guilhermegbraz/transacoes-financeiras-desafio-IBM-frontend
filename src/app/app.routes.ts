import { Routes } from '@angular/router';
import {HomeClienteComponent} from "./page/home-cliente/home-cliente.component";
import {TransacaoContaComponent} from "./page/transacao-conta/transacao-conta.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeClienteComponent
  },
  {
    path: "conta/:id",
    component: TransacaoContaComponent
  },
];
