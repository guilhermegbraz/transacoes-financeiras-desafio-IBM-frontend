import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgOptimizedImage, NgIf],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  @Input() exibirBotaoHome: boolean = false;
  @Input() subtitulo: string = "";
  @Input() exibirSubtitulo: boolean = false;

  constructor(private router: Router) {
  }

  navegarHome(): void {
    this.router.navigate([""]);
  }
}
