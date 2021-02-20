import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { AngularFireDatabase } from '@angular/fire/database';
import { first } from 'rxjs/operators';
import { IdCard } from '../models/id-card.model';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseCardService {
  dbPath;
  cards$: Observable<any>;
  constructor(db: AngularFireDatabase, @Inject(String) path: string) {
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
