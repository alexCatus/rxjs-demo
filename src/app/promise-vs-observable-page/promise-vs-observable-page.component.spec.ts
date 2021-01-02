import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseVsObservablePageComponent } from './promise-vs-observable-page.component';

describe('PromiseVsObservablePageComponent', () => {
  let component: PromiseVsObservablePageComponent;
  let fixture: ComponentFixture<PromiseVsObservablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseVsObservablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseVsObservablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
