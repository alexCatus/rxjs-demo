import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { IdCard } from '../id-card.model';
import { tap } from 'rxjs/operators';
import * as _ from 'lodash';
@Component({
  selector: 'app-id-card-column',
  templateUrl: './id-card-column.component.html',
  styleUrls: ['./id-card-column.component.scss'],
})
export class IdCardColumnComponent implements OnInit, OnChanges {
  isOn: boolean = false;
  cardsSubscription: Subscription;
  formSubscription: Subscription;

  form = new FormGroup({
    formInput: new FormControl(),
  });

  @Input()
  title: string;

  @Input()
  cards$: Observable<IdCard[]>;

  @Input()
  cards: IdCard[] = [];

  @Input()
  canSwitch: boolean = false;

  @Input()
  canLoad: boolean = false;

  @Output()
  onUpdate: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onSwitch: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onLoad: EventEmitter<void> = new EventEmitter();

  constructor() {}

  switchLego(isOn: boolean) {}
  ngOnDestroy(): void {
    if (this.cardsSubscription) {
      this.cardsSubscription.unsubscribe();
    }
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue$ = _.get(changes['cards$'], 'currentValue');
    if (!!currentValue$) {
      this.cards$ = currentValue$.pipe(
        tap((cards) => {
          this.cards = cards as any;
        })
      );
    }
  }
  ngOnInit() {
    this.formSubscription = this.form.controls.formInput.valueChanges
      .pipe(
        tap((x) => {
          this.isOn = x;
          this.switch();
        })
      )
      .subscribe();
  }
  switch() {
    this.onSwitch.emit(this.isOn);
    if (!!this.isOn || !this.cardsSubscription) {
      this.cardsSubscription = this.cards$.subscribe();
    } else {
      this.cardsSubscription.unsubscribe();
    }
  }
  update(key: string) {
    this.onUpdate.emit(key);
  }

  load() {
    this.onLoad.emit();
  }
  trackByFn(index, item: IdCard) {
    return index;
  }
}
