import { NgStyle, NgClass } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guesser',
  templateUrl: './guesser.component.html',
  styleUrls: ['./guesser.component.scss'],
})
export class GuesserComponent implements OnInit {
  number: number = 0;
  num = Math.trunc(Math.random() * 20) + 1;
  normalMsg = 'Start guessing...';
  highscore = 0;
  score = 20;
  constructor() {}

  ngOnInit(): void {
    console.log(this.num);
  }
  check() {
    console.log(this.num);
    if (this.number > 20 || this.number < 1) {
      this.normalMsg = 'Please Insert a Number Between 1 - 20';
    } else if (this.number === this.num) {
      this.normalMsg = 'Correct Number!!! 🎉';
      if (this.highscore < this.score) {
        this.highscore = this.score;
      }
    } else if (this.number !== this.num) {
      if (this.score > 1) {
        if (this.number > this.num) {
          this.normalMsg = 'Too High  📈 ';
        } else {
          this.normalMsg = 'Too Low 📉';
        }
        this.score--;
        if (this.score === 0) {
          this.normalMsg = '💥💥 You Lost the Game 💥💥';
        }
      }
    }
  }

  again() {
    this.score = 20;
    this.num = Math.trunc(Math.random() * 20) + 1;
    console.log(this.num);
    this.normalMsg = 'Start guessing...';
  }
}
