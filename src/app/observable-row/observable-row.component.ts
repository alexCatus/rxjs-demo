import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { COLORS } from '../colors.model';
import { CodeDescription } from '../id-card.model';

@Component({
  selector: 'app-observable-row',
  templateUrl: './observable-row.component.html',
  styleUrls: ['./observable-row.component.scss'],
})
export class ObservableRowComponent implements OnInit {
  COLORS = COLORS;
  @Input()
  listColors = [];

  isOn: boolean = false;

  colorsSubscription: Subscription;
  formSubscription: Subscription;

  form = new FormGroup({
    formInput: new FormControl(),
  });

  @Input()
  title: string;

  @Input()
  description: CodeDescription;

  colors$: Observable<COLORS>;
  colors: COLORS[] = [];
  @Input()
  set colorSubject(subject: Subject<COLORS>) {
    if (this.isOn) {
      this.form.controls.formInput.setValue(false);
    }
    this.colors = [];
    this.colors$ = subject.pipe(
      tap((x) => {
        console.log('color', x);
        this.colors.push(x);
      })
    );
  }

  @Output()
  onSwitch: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onColorEmitter: EventEmitter<COLORS> = new EventEmitter<COLORS>();

  constructor() {}

  ngOnDestroy(): void {
    if (this.colorsSubscription) {
      this.colorsSubscription.unsubscribe();
    }
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
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
    if (!!this.isOn || !this.colorsSubscription) {
      this.colorsSubscription = this.colors$.subscribe();
    } else {
      this.colorsSubscription.unsubscribe();
    }
  }
  onClick(color: COLORS) {
    this.onColorEmitter.emit(color);
  }
}
