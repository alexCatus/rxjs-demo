import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IdCard } from '../id-card.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-id-card-column',
  templateUrl: './id-card-column.component.html',
  styleUrls: ['./id-card-column.component.scss'],
})
export class IdCardColumnComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  cards: IdCard[];

  @Input()
  canSwitch: boolean = false;

  @Input()
  canLoad: boolean = false;

  isLoading: boolean = false;

  @Output()
  onUpdate: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onSwitch: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onLoad: EventEmitter<void> = new EventEmitter();

  subscription: Subscription;

  form = new FormGroup({
    formInput: new FormControl(),
  });

  constructor() {}
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscription = this.form.controls.formInput.valueChanges
      .pipe(map((x) => this.onSwitch.emit(x)))
      .subscribe();
  }
  update(key: string) {
    this.onUpdate.emit(key);
  }

  load() {
    this.onLoad.emit();
    console.log('load');
  }
  trackByFn(index, item: IdCard) {
    return item.key;
  }
}
