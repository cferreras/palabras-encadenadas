import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MainService } from '../main.service';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  standalone: true,
  selector: 'tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css'],
  imports: [CommonModule],
})
export class TiempoComponent {
  constructor(
    private MainService: MainService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isGameStarted = this.MainService.isGameStarted;
  }

  isGameStarted: boolean;
  get isGameAlreadyStarted(): boolean {
    return this.MainService.isGameAlreadyStarted;
  }

  get timeLeft(): number {
    return this.MainService.timeLeft;
  }

  get time(): String {
    return this.timeLeft < 10 ? '0' + this.timeLeft : '' + this.timeLeft;
  }

  get isEditable(): boolean {
    return !this.MainService.isGameStarted;
  }

  menu: boolean = false;

  interval: any;

  flash: boolean = false;

  toggleMenu(): void {
    if (this.MainService.isGameStarted) {
      this.menu = false;
    } else this.menu = !this.menu;
  }

  setTime(time: number): void {
    this.MainService.setTimeLeft(time);
    this.MainService.setDefaultTime(time);
  }

  setFlash(bol: boolean): void {
    this.flash = bol;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.MainService.setTimeLeft(this.timeLeft - 1);
        this.timeLeft <= 10 ? this.setFlash(true) : this.setFlash(false);
      } else {
        this.pauseTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnInit() {
    this.MainService.gameStartedChange.subscribe((value) => {
      this.document.body.classList.remove('bg-red-700');
      if (value && !this.isGameAlreadyStarted) {
        this.MainService.isGameAlreadyStarted = true;
        this.menu = false;
        this.startTimer();
      }
    });
  }
}
