import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, empty, Observable, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IdCard } from '../id-card.model';
import { IdCardService } from '../id-card.service';

@Component({
  selector: 'app-promise-vs-observable-page',
  templateUrl: './promise-vs-observable-page.component.html',
  styleUrls: ['./promise-vs-observable-page.component.scss'],
})
export class PromiseVsObservablePageComponent implements OnInit {
  cards: { [key: string]: IdCard };

  cardsFromObservable: { [key: string]: IdCard };
  cards$: Observable<{ [key: string]: IdCard }> = this.service.cards$.pipe(
    tap((cards) => {
      this.cardsFromObservable = cards;
    })
  );
  subscription: Subscription;

  constructor(private service: IdCardService) {}

  ngOnInit() {
    this.service.loadCards();
  }

  async load() {
    await this.service.cardsPromise().then((x) => (this.cards = x));
  }
  update(key: string) {
    this.service.updateCard(key, {});
  }
  switch(x) {
    if (!!x || !this.subscription) {
      this.subscription = this.cards$.subscribe();
    } else {
      this.subscription.unsubscribe();
    }
  }
}
