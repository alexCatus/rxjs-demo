import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, empty, Observable, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IdCard } from '../id-card.model';
import { LegoCardService } from '../lego-card.service';

@Component({
  selector: 'app-promise-vs-observable-page',
  templateUrl: './promise-vs-observable-page.component.html',
  styleUrls: ['./promise-vs-observable-page.component.scss'],
})
export class PromiseVsObservablePageComponent implements OnInit {
  cards: IdCard[] = [];

  cards$: Observable<IdCard[]>;
  subscription: Subscription;

  constructor(private service: LegoCardService) {}

  ngOnInit() {
    this.service.loadCards();
    this.cards$ = this.service.cards$;
  }

  async load() {
    await this.service.cardsPromise().then((x) => (this.cards = x));
  }
  update(key: string) {
    this.service.updateCard(key, {});
  }
}
