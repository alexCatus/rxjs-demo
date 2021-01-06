import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { merge, Observable, Operator, Subject, Subscription } from 'rxjs';
import { delay, map, takeLast, takeUntil } from 'rxjs/operators';
import { HumanCardService } from '../human-card.service';
import {
  generateCard,
  IdCard,
  CodeDescription,
  operatorsDescriptions,
  legoObservableDescription,
  humanObservableDescription,
} from '../id-card.model';
import { LegoCardService } from '../lego-card.service';

@Component({
  selector: 'app-operators-page',
  templateUrl: './operators-page.component.html',
  styleUrls: ['./operators-page.component.scss'],
})
export class OperatorsPageComponent implements OnInit {
  selectedCode: string = '';

  operatorsDescriptions = operatorsDescriptions;

  legoDescription = legoObservableDescription;
  humanDescription = humanObservableDescription;
  operators: string[] = ['delay', 'takeLast', 'combine'];

  legoCards$: Observable<IdCard[]>;

  humanCards$: Observable<IdCard[]>;
  pipedCards$: Observable<IdCard[]>;

  switchedStateSubscription: Subscription;
  switchedStateForm: FormGroup = this.fb.group({ select: [] });

  stopPipedObservable: Subject<void> = new Subject();
  constructor(
    private legoService: LegoCardService,
    private humanService: HumanCardService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.legoService.loadCards();
    this.legoCards$ = this.legoService.cards$;
    this.humanService.loadCards();
    this.humanCards$ = this.humanService.cards$;
    this.defaultPipedObservable();
    this.switchedStateSubscription = this.switchedStateForm.valueChanges
      .pipe(
        map((form) => {
          switch (form.select) {
            case 'delay':
              return this.addDelay();
            case 'takeLast':
              return this.takeLast(1);
            case 'combine':
              return this.combine();
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
  addHumanCard() {
    let newCard = generateCard(true);
    this.humanService.addCard(newCard);
  }
  flushHuman() {
    this.humanService.flush();
  }
  addLegoCard() {
    let newCard = generateCard(false);
    this.legoService.addCard(newCard);
  }

  flushLego() {
    this.legoService.flush();
  }

  switchPiped(isOn: boolean) {
    if (!!isOn) {
      this.switchedStateForm.disable({ emitEvent: false });
    } else {
      this.stopPipedObservable.next();
      this.switchedStateForm.enable({ emitEvent: false });
    }
  }

  defaultPipedObservable() {
    this.pipedCards$ = this.legoService.cards$;
  }

  addDelay(seconds: number = 1) {
    this.pipedCards$ = this.legoService.cards$.pipe(delay(seconds * 1000));
  }
  takeLast(event: number = 1) {
    this.pipedCards$ = this.legoService.cards$.pipe(
      takeUntil(this.stopPipedObservable),
      takeLast(event)
    );
  }
  combine() {
    this.pipedCards$ = merge(this.legoService.cards$, this.humanService.cards$);
  }
}
