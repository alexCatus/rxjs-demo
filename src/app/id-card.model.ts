import * as _ from 'lodash';
import * as faker from 'faker';
import * as emoji from 'random-emoji';
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
