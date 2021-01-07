import { CodeDescription } from './id-card.model';

export const operatorsDescriptions = {
  default: {
    name: 'pipedColor$',
    code: 'firstColor$.pipe()',
    test: "'a' a:{legoCards}",
  },
  delay: {
    name: 'pipedColor$',
    code: 'firstColor$.pipe(delay(1000))',
    test: "'1000ms a' a:{legoCards}",
  },
  take: {
    name: 'pipedColor$',
    code: 'firstColor$.pipe(take(1))',
    test: "'(a a a)' a:{blue}",
  },
  filter: {
    name: 'pipedColor$',
    code: 'firstColor$.pipe(filter(x=>x!=Color.RED))',
    test: "'a b' {a:legoCards, b:humanCards}",
  },
  distinctUntilChanged: {
    name: 'pipedColor$',
    code: 'firstColor$.pipe(distinctUntilChanged())',
    test: "'a b' {a:legoCards, b:humanCards}",
  },
  switchMap: {
    name: 'pipedColor$',
    code: 'firstColor$.pipe(switchMap(x=>secondColor$))',
    test: "'a b' {a:legoCards, b:humanCards}",
  },
  combine: {
    name: 'pipedColor$',
    code: 'combine(firstColor$,secondColor$)',
    test: "'a b' {a:legoCards, b:humanCards}",
  },
  map: {
    name: 'pipedColor$',
    code: 'this.firstColor$.pipe(map((x) => COLOR.purple))',
    test: "'a b' {a:legoCards, b:humanCards}",
  },

  all: {
    name: 'pipedColor$',
    code:
      'merge(this.firstColor$, this.secondColor$).pipe( \n  delay(1000),  \n  distinctUntilChanged(),  \n filter((x) => x != COLOR.Red), \n map((x) => COLOR.purple))',
    test: "'a b' {a:legoCards, b:humanCards}",
  },
};
export const firstColorDescription: CodeDescription = {
  name: 'firstColor$',
  code: 'firstColor$',
  test: "'a' a:{firstColor}",
};

export const secondColorDescription: CodeDescription = {
  name: 'secondColor$',
  code: 'secondColor$',
};
export const pipedColorDescription: CodeDescription = {
  name: 'pipedColor$',
  code: 'firstColor$.pipe()',
  test: "'b' b:{humanCards}",
};

export enum COLORS {
  RED = '#E82B51',
  BLUE = '#006AC3',
  GREEN = '#1aa304',
  YELLOW = '#FEDF01',
  PURPLE = '#FF0090',
}
export const listColors = [COLORS.RED, COLORS.BLUE, COLORS.GREEN];
