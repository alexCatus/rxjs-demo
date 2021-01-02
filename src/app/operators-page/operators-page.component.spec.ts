import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsPageComponent } from './operators-page.component';

describe('OperatorsPageComponent', () => {
  let component: OperatorsPageComponent;
  let fixture: ComponentFixture<OperatorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
