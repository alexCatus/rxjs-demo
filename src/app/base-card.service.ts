import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IdCard } from './id-card.model';
import * as firebase from 'firebase';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class BaseCardService {
  db;
  private collectionReference;
  cards$: BehaviorSubject<IdCard[]> = new BehaviorSubject([]);
  constructor(private path: string) {
    this.db = firebase.database();
    this.collectionReference = this.db.ref(this.path);
  }
  loadCards() {
    this.collectionReference.on('value', (snapshot) => {
      let obj = _.reverse(snapshot.val());
      if (!!obj) {
        obj = Object.values(obj);
        return this.cards$.next(obj);
      }
      return this.cards$.next([]);
    });
  }

  cardsPromise(): Promise<IdCard[]> {
    return new Promise((resolve, reject) => {
      this.collectionReference.on('value', (snapshot) => {
        let obj = _.reverse(snapshot.val());
        if (!!obj) {
          obj = Object.values(obj);
          resolve(obj);
        }
        resolve([]);
      });
    });
  }
  addCard(card: Partial<IdCard>) {
    this.collectionReference.push().set(card);
  }
  updateCard(key: string, value: Partial<IdCard>) {
    this.db
      .ref(this.path + '/' + key)
      .push()
      .set(value);
  }
  flush() {
    this.collectionReference.remove();
  }
}
