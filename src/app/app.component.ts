import { Component } from '@angular/core';
import * as _ from 'lodash';
import { generateCard } from './id-card.model';
import { LegoCardService } from './lego-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-demo';
  constructor(private legoService: LegoCardService) {}
  addLegoCard() {
    let newCard = generateCard(false);
    this.legoService.addCard(newCard);
  }

  flushLego() {
    this.legoService.flush();
  }
}
