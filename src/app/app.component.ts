import { Component } from '@angular/core';
import * as _ from 'lodash';
import { currentRoutes } from './data/navigation.items';
import { LegoCardService } from './services/lego-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-demo';
  readonly currentRoutes = currentRoutes;
  constructor(private legoService: LegoCardService) {}
}
