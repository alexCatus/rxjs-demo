import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';
import { COLORS } from '../../models/colors.model';
import { OperatorsPageComponent } from './operators-page.component';

describe('OperatorsPageRowComponent', () => {
  let component: OperatorsPageComponent;

  //Todo : make the test pass
  describe('method1', () => {
    it.each`
      selectValue               | expectedMarbles | expectedValues
      ${'map'}                  | ${''}           | ${''}
      ${'delay'}                | ${''}           | ${''}
      ${'take'}                 | ${''}           | ${''}
      ${'filter'}               | ${''}           | ${''}
      ${'distinctUntilChanged'} | ${''}           | ${''}
      ${'combine'}              | ${''}           | ${''}
      ${'switchMap'}            | ${''}           | ${''}
      ${'all'}                  | ${''}           | ${''}
    `(
      'When selected value is $selectedValue',
      ({ selectValue, expectedMarbles, expectedValues }) => {
        component = new OperatorsPageComponent(
          formBuilderGenerator(selectValue)
        );
        component.ngOnInit();
        expect(component).toBeTruthy();
        component.firstColor$.next(COLORS.BLUE);
        component.pipedColor$.subscribe();
        expect(component.firstColor$).toBeObservable(
          cold(expectedMarbles, expectedValues)
        );
        expect(component.pipedColor$).toBeObservable(
          cold(expectedMarbles, expectedValues)
        );
      }
    );
  });
});

function formBuilderGenerator(selectValue: string): FormBuilder {
  return {
    group: (parameters: {}) => {
      return {
        valueChanges: of({
          select: selectValue,
        }),
      };
    },
  } as any;
}
