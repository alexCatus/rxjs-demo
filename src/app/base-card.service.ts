import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IdCard } from './id-card.model';
import * as _ from 'lodash';

import { AngularFireDatabase } from '@angular/fire/database';
import { first, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export abstract class BaseCardService {
  dbPath;
  cards$: Observable<any>;
  constructor(private db: AngularFireDatabase, private path) {
    this.dbPath = db.list<IdCard>(path);
    this.cards$ = this.dbPath.valueChanges();
  }

  cardsPromise(): Promise<IdCard[]> {
    return this.dbPath.valueChanges().pipe(first()).toPromise();
  }
  addCard(card: Partial<IdCard>) {
    this.dbPath.push(card);
  }
  flush() {
    this.dbPath.remove();
  }
}
