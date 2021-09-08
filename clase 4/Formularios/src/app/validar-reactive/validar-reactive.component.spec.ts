import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarReactiveComponent } from './validar-reactive.component';

describe('ValidarReactiveComponent', () => {
  let component: ValidarReactiveComponent;
  let fixture: ComponentFixture<ValidarReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
