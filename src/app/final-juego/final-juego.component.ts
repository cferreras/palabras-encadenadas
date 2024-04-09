import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  standalone: true,
  selector: 'final-juego',
  templateUrl: './final-juego.component.html',
  styleUrls: ['./final-juego.component.css'],
  imports: [CommonModule],
})
export class FinalJuegoComponent {
  constructor(private MainService: MainService) {}
  isHidden: boolean = true;
  get wordCount(): number {
    return this.MainService.getWords().length;
  }

  startNewGame() {
    console.log('game reset');
    this.MainService.reset();
    this.isHidden = true;
  }

  shareData = {
    url: 'https://carlosferreras.com/app/palabras-encadenadas/',
  };
  share(): void {
    navigator.share(this.shareData);
  }

  ngOnInit() {
    this.MainService.timeLeftChange.subscribe((value) => {
      if (value === 0) {
        this.isHidden = false;
      }
    });
  }
}
