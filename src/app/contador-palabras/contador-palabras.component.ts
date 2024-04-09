import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'contador-palabras',
  standalone: true,
  templateUrl: './contador-palabras.component.html',
  styleUrls: ['./contador-palabras.component.css'],
})
export class ContadorPalabrasComponent {
  get number() {
    return this.MainService.getWords().length;
  }
  constructor(private MainService: MainService) {}
}
