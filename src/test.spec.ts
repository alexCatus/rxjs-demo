import { cold } from 'jasmine-marbles';
import { TestColdObservable } from 'jasmine-marbles/src/test-observables';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { COLORS } from './app/models/colors.model';

describe('Testing observable', () => {
  let firstColor$: TestColdObservable;
  let pipedObservable$: Observable<any>;
  it('firstColor$', () => {
    firstColor$ = cold('a b a b a b a b', { a: COLORS.BLUE, b: COLORS.RED });
    pipedObservable$ = firstColor$.pipe(map((x) => COLORS.PURPLE));
    expect(pipedObservable$).toBeObservable(
      cold('c c c c c c c c', { c: COLORS.PURPLE })
    );
  });
});
