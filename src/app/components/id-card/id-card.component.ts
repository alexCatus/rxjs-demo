import { Component, Input, OnInit } from '@angular/core';
import { IdCard } from 'src/app/models/id-card.model';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss'],
})
export class IdCardComponent implements OnInit {
  @Input()
  card: IdCard;
  constructor() {}

  ngOnInit() {}
}
