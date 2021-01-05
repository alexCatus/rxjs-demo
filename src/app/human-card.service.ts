import { Injectable } from '@angular/core';
import { BaseCardService } from './base-card.service';

@Injectable({
  providedIn: 'root',
})
export class HumanCardService extends BaseCardService {
  constructor() {
    super('human');
  }
}
