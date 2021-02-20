import * as _ from 'lodash';
import * as faker from 'faker';
import * as emoji from 'random-emoji';

export interface CodeDescription {
  name?: string;
  code: string;
  test?: string;
}

export interface IdCard {
  username: string;
  email: string;
  avatar: string;
  profileUrl: string;
  favoriteColor: string;
  pictureId: number;
}

export enum TypeCard {
  HUMAN = 'human',
  LEGO = 'lego',
}

export const operatorsDescriptions = {
  default: {
    name: 'pipedCards$',
    code: 'legoCards$.pipe()',
    test: "'a' a:{legoCards}",
  },
  delay: {
    name: 'pipedCards$',
    code: 'legoCards$.pipe(delay(1000))',
    test: "'1000ms a' a:{legoCards}",
  },
  filter: {
    name: 'pipedCards$',
    code: 'combine(legoCards$,humanCards).filter(',
    test: "'a b' {a:legoCards, b:humanCards}",
  },

  combine: {
    name: 'pipedCards$',
    code: 'combine(legoCards$,humanCards)',
    test: "'a b' {a:legoCards, b:humanCards}",
  },
};

export const legoObservableDescription: CodeDescription = {
  name: 'legoCards$',
  code: 'legoCards$',
  test: "'a' a:{legoCards}",
};

export const legoPromiseDescription: CodeDescription = {
  name: 'legoCards',
  code: ' await this.service.cardsPromise()',
};
export const humanObservableDescription: CodeDescription = {
  name: 'humanCards$',
  code: 'humanCards$',
  test: "'b' b:{humanCards}",
};

export function generateCard(isHuman: boolean, partial?: Partial<IdCard>) {
  let path = isHuman ? _.sample(['men', 'women']) : 'lego';
  let username = faker.name.lastName().substr(0, 5);
  return {
    username: username,
    email: faker.internet.email(),
    avatar: emoji.random()[0].character,
    pictureId: _.random(0, 8),
    profileUrl:
      'https://randomuser.me/api/portraits/' +
      path +
      '/' +
      _.random(0, 9) +
      '.jpg',
    favoriteColor: faker.internet.color(),
    ...partial,
  };
}
