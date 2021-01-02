import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IdCard } from './id-card.model';
import * as firebase from 'firebase';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class IdCardService {
  db;
  cards$: BehaviorSubject<{ [key: string]: IdCard }> = new BehaviorSubject(
    {} as any
  );
  constructor() {
    this.db = firebase.database();
  }
  loadCards() {
    this.db.ref('cards').on('value', (snapshot) => {
      let obj = _.reverse(snapshot.val());
      this.cards$.next(obj);
    });
  }

  cardsPromise(): Promise<{ [key: string]: IdCard }> {
    return new Promise((resolve, reject) => {
      this.db.ref('cards').on('value', (snapshot) => {
        let obj = _.reverse(snapshot.val());
        resolve(obj);
      });
    });
  }
  addCard(card: Partial<IdCard>) {
    this.db.ref('cards').push().set(card.value);
  }
  updateCard(key: string, value: Partial<IdCard>) {
    this.db
      .ref('cards/' + key)
      .push()
      .set(value);
  }
  flush() {
    this.db.ref('cards').remove();
  }
}
