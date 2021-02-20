import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BaseCardService } from './base-card.service';

@Injectable({
  providedIn: 'root',
})
export class HumanCardService extends BaseCardService {
  constructor(db: AngularFireDatabase) {
    super(db, 'human');
  }
}
