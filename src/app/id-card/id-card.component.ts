import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss'],
})
export class IdCardComponent implements OnInit {
  @Input()
  card: any;
  constructor() {}

  ngOnInit() {}
}
