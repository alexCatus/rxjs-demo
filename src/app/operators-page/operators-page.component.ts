import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, empty, Observable } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { IdCard } from '../id-card.model';
import { IdCardService } from '../id-card.service';

@Component({
  selector: 'app-operators-page',
  templateUrl: './operators-page.component.html',
  styleUrls: ['./operators-page.component.scss'],
})
export class OperatorsPageComponent implements OnInit {
  cards: { key: IdCard }[];
  rawCards$: BehaviorSubject<{ [key: string]: IdCard }> = this.service.cards$;

  pipedCards$: Observable<{ [key: string]: IdCard }> = this.service.cards$.pipe(
    map((x) => x),
    delay(1000)
  );

  constructor(private service: IdCardService) {}

  ngOnInit() {
    this.service.loadCards();
  }
}
