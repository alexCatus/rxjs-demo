import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableRowComponent } from './observable-row.component';

describe('ObservableRowComponent', () => {
  let component: ObservableRowComponent;
  let fixture: ComponentFixture<ObservableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
