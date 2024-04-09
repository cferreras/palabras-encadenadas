import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
var silabas = require('silabas');
import { environment } from '../../environments/environment';

@Component({
  standalone: true,
  selector: 'entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
  imports: [FormsModule, CommonModule],
})
export class EntradaComponent {
  constructor(private MainService: MainService, private http: HttpClient) {}
  palabra: any = '';
  get silaba(): String {
    return this.MainService.syllable;
  }
  dictionary: any = '';
  headShake: boolean = false;

  get message(): string {
    if (this.icon === 'default') return 'Escribe una palabra y pulsa intro';
    if (this.icon === 'unknown') return 'Palabra desconocida';
    if (this.icon === 'repeated') return 'Palabra repetida';
    return '';
  }

  get icon(): String {
    return this.MainService.icon;
  }

  setGameStart() {
    this.MainService.setGameStarted(true);
  }

  onSubmitWorld($event: any) {
    console.log(this.MainService.getWords());
    var word: any = $event.target.value;
    var completeWord = this.silaba.concat(word);
    console.log(this.silaba.concat(word));

    var regex = new RegExp(
      '\n' +
        completeWord
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '') +
        '\n'
    );
    if (!this.dictionary.toString('utf-8').match(regex)) {
      this.MainService.setIcon('unknown');
      this.shake();
      return;
    }

    if (completeWord.length <= 2 || completeWord.length <= this.silaba.length) {
      return;
    }

    if (this.MainService.getWords().includes(completeWord)) {
      this.MainService.setIcon('repeated');
      return;
    }

    this.MainService.setTimeLeft(this.MainService.defaultTime);
    this.MainService.addWords(completeWord);
    this.MainService.setSyllable(
      this.obtenerSilaba(
        word.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
        this.silaba
      )
    );
    this.palabra = '';
    this.MainService.setIcon('empty');
    this.headShake = false;
  }

  private API_URL = environment.API_URL;
  ngOnInit() {
    this.http
      .get(this.API_URL, {
        responseType: 'text' as 'json',
      })
      .subscribe((data) => {
        this.dictionary = data;
      });

    this.MainService.timeLeftChange.subscribe((value) => {
      if (value === 0) {
        this.palabra = '';
        this.headShake = false;
        this.MainService.setGameStarted(false);
      }
    });
  }

  shake(): void {
    this.headShake = true;
  }
  obtenerSilaba(word: any, silaba: String) {
    var completeWord = silaba.concat(word);
    var ultimaSilaba = silabas(completeWord).syllables().slice(-1)[0];
    if (ultimaSilaba.startsWith('rr')) return ultimaSilaba.substring(1);
    return ultimaSilaba;
  }
}
