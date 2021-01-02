import { Component } from '@angular/core';
import * as _ from 'lodash';
import * as faker from 'faker';
import * as emoji from 'random-emoji';
import { IdCard } from './id-card.model';
import { IdCardService } from './id-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-demo';

  constructor(private service: IdCardService) {}

  addCard() {
    let newCard: Partial<IdCard> = {
      value: {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: emoji.random()[0].character,
        profileUrl:
          'https://randomuser.me/api/portraits/lego/' + _.random(0, 8) + '.jpg',
        favoriteColor: faker.internet.color(),
      },
    };
    this.service.addCard(newCard);
  }

  flush() {
    this.service.flush();
  }
}
