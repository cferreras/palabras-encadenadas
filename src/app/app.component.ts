import { Component, Inject } from '@angular/core';
import {
  NgSwitch,
  NgSwitchDefault,
  NgSwitchCase,
  DOCUMENT,
} from '@angular/common';
import { ContadorPalabrasComponent } from './contador-palabras/contador-palabras.component';
import { EntradaComponent } from './entrada/entrada.component';
import { MainService } from './main.service';
import { TiempoComponent } from './tiempo/tiempo.component';
import { FinalJuegoComponent } from './final-juego/final-juego.component';
import { FooterComponent } from './footer/footer.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  providers: [MainService],
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    ContadorPalabrasComponent,
    EntradaComponent,
    TiempoComponent,
    FinalJuegoComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  constructor(
    private meta: Meta,
    private MainService: MainService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.meta.addTags([
      // { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:site', content: '@alligatorio' },
      {
        name: 'description',
        content:
          'Crea una cadena de palabras donde cada nueva comienza con la última sílaba de la anterior. No repitas palabras, usa solo sustantivos singulares y evita nombres propios. Ideal para divertirte en familia o con amigos.',
      },
      // ...
    ]);
  }
  ngOnInit() {
    this.MainService.timeLeftChange.subscribe((value) => {
      if (value < 7) {
        this.document.body.classList.add('bg-red-700');
      } else {
        this.document.body.classList.remove('bg-red-700');
      }
    });
  }
}
