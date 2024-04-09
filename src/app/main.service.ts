import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {
    this.gameStartedChange.subscribe((value) => {
      this.isGameStarted = value;
    });
    this.timeLeftChange.subscribe((value) => {
      this.timeLeft = value;
    });
  }

  gameStartedChange: Subject<boolean> = new Subject<boolean>();
  isGameStarted: boolean = false;
  words: any = [];

  defaultTime: number = 30;
  timeLeftChange: Subject<number> = new Subject<number>();
  timeLeft: number = 30;
  icon: string = 'default';

  isGameAlreadyStarted: boolean = false;
  setIsGameAlreadyStarted(isGameAlreadyStarted: boolean) {
    this.isGameAlreadyStarted = isGameAlreadyStarted;
  }
  addWords(word: String) {
    this.words.push(word);
  }

  getWords(): String[] {
    return this.words;
  }

  reset() {
    this.words = [];
    this.syllable = '';
    this.timeLeft = this.defaultTime;
    this.isGameStarted = false;
    this.isGameAlreadyStarted = false;
    this.setIcon('default');
  }

  syllable: String = '';

  setSyllable(silaba: String): void {
    this.syllable = silaba;
  }

  setGameStarted(started: boolean): void {
    this.gameStartedChange.next(started);
  }

  setDefaultTime(seconds: number): void {
    this.defaultTime = seconds;
  }

  setTimeLeft(seconds: number): void {
    this.timeLeftChange.next(seconds);
  }

  setIcon(icon: string) {
    this.icon = icon;
  }
}
