import { Component } from '@angular/core';
import * as _ from 'lodash';
import * as faker from 'faker';
import * as emoji from 'random-emoji';
import { generateCard, IdCard } from './id-card.model';
import { LegoCardService } from './lego-card.service';
import { Observable } from 'rxjs';
import { HumanCardService } from './human-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-demo';
  constructor(
    private legoService: LegoCardService,
    private humanService: HumanCardService
  ) {}
  addHumanCard() {
    let newCard = generateCard(true);
    this.humanService.addCard(newCard);
  }
  flushHuman() {
    this.humanService.flush();
  }
  addLegoCard() {
    let newCard = generateCard(false);
    this.legoService.addCard(newCard);
  }

  flushLego() {
    this.legoService.flush();
  }
}
