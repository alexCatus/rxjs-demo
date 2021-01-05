import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BaseCardService } from './base-card.service';
@Injectable({
  providedIn: 'root',
})
export class LegoCardService extends BaseCardService {
  constructor() {
    super('lego');
  }
}
