import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  IdCard,
  legoPromiseDescription,
  legoObservableDescription,
  generateCard,
} from 'src/app/models/id-card.model';

import { LegoCardService } from '../../services/lego-card.service';

@Component({
  selector: 'app-promise-vs-observable-page',
  templateUrl: './promise-vs-observable-page.component.html',
  styleUrls: ['./promise-vs-observable-page.component.scss'],
})
export class PromiseVsObservablePageComponent implements OnInit {
  cards: IdCard[] = [];

  cards$: Observable<IdCard[]>;
  subscription: Subscription;

  promiseDescription = legoPromiseDescription;
  observableDescription = legoObservableDescription;

  constructor(private service: LegoCardService) {}

  ngOnInit() {
    this.cards$ = this.service.cards$;
  }

  async load() {
    this.cards = await this.service.cardsPromise();
  }
  addLegoCard() {
    let newCard = generateCard(false);
    this.service.addCard(newCard);
  }

  flushLego() {
    this.service.flush();
  }
}
