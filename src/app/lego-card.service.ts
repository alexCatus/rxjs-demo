import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _ from 'lodash';
import { BaseCardService } from './base-card.service';
@Injectable({
  providedIn: 'root',
})
export class LegoCardService extends BaseCardService {
  constructor(db: AngularFireDatabase) {
    super(db, 'lego');
  }
}
