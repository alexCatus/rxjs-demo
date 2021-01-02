import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardColumnComponent } from './id-card-column.component';

describe('IdCardColumnComponent', () => {
  let component: IdCardColumnComponent;
  let fixture: ComponentFixture<IdCardColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCardColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
