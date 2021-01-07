import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { merge, Observable, Subject, Subscription } from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  take,
  takeLast,
  takeUntil,
} from 'rxjs/operators';

import {
  COLORS,
  firstColorDescription,
  operatorsDescriptions,
  pipedColorDescription,
  secondColorDescription,
} from '../colors.model';

@Component({
  selector: 'app-operators-page',
  templateUrl: './operators-page-row.component.html',
  styleUrls: ['./operators-page-row.component.scss'],
})
export class OperatorsPageRowComponent implements OnInit {
  COLORS = COLORS;
  firstColor$: Subject<COLORS> = new Subject<COLORS>();
  secondColor$: Subject<COLORS> = new Subject<COLORS>();
  pipedColor$: Observable<COLORS>;
  operatorsDescriptions = operatorsDescriptions;

  firstColorDescription = firstColorDescription;

  secondColorDescription = secondColorDescription;
  pipedColorDescription = pipedColorDescription;

  operators: string[] = [
    'map',
    'delay',
    'take',
    'filter',
    'distinctUntilChanged',
    'combine',
    'switchMap',
    'all',
  ];

  switchedStateSubscription: Subscription;
  switchedStateForm: FormGroup = this.fb.group({ select: [] });

  stopPipedObservable: Subject<void> = new Subject();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.defaultPipedObservable();
    this.switchedStateSubscription = this.switchedStateForm.valueChanges
      .pipe(
        map((form) => {
          switch (form.select) {
            case 'map':
              return this.map();
            case 'delay':
              return this.addDelay();
            case 'take':
              return this.takeFirst();
            case 'filter':
              return this.filter();
            case 'combine':
              return this.combine();
            case 'switchMap':
              return this.switchMap();
            case 'distinctUntilChanged':
              return this.distinctUntilChanged();
            case 'all':
              return this.all();

            default:
              return this.defaultPipedObservable();
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.switchedStateSubscription) {
      this.switchedStateSubscription.unsubscribe();
    }
  }

  flush() {
    this.firstColor$ = new Subject<COLORS>();
    this.secondColor$ = new Subject<COLORS>();
    this.switchedStateForm.setValue({ select: 'default' });
  }
  onClick() {}
  switchPiped(isOn: boolean) {
    if (!!isOn) {
      this.switchedStateForm.disable({ emitEvent: false });
    } else {
      this.stopPipedObservable.next();
      this.switchedStateForm.enable({ emitEvent: false });
    }
  }

  defaultPipedObservable() {
    this.pipedColor$ = this.firstColor$.pipe();
  }

  addDelay(seconds: number = 1) {
    this.pipedColor$ = this.firstColor$.pipe(delay(seconds * 1000));
  }
  takeLast(event: number = 1) {
    this.pipedColor$ = this.firstColor$.pipe(
      takeUntil(this.stopPipedObservable),
      takeLast(event)
    );
  }
  map() {
    this.pipedColor$ = this.firstColor$.pipe(map((x) => COLORS.PURPLE));
  }
  takeFirst() {
    this.pipedColor$ = this.firstColor$.pipe(take(1));
  }
  filter() {
    this.pipedColor$ = this.firstColor$.pipe(filter((x) => x != COLORS.RED));
  }
  distinctUntilChanged() {
    this.pipedColor$ = this.firstColor$.pipe(distinctUntilChanged());
  }

  switchMap() {
    this.pipedColor$ = this.firstColor$.pipe(
      switchMap((x) => this.secondColor$)
    );
  }
  combine() {
    this.pipedColor$ = merge(this.firstColor$, this.secondColor$);
  }
  all() {
    this.pipedColor$ = merge(this.firstColor$, this.secondColor$).pipe(
      delay(1000),
      distinctUntilChanged(),
      filter((x) => x != COLORS.RED),
      map((x) => COLORS.PURPLE)
    );
  }
}
