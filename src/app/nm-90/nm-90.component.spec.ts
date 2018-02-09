import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nm90Component } from './nm-90.component';

describe('Nm90Component', () => {
  let component: Nm90Component;
  let fixture: ComponentFixture<Nm90Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nm90Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nm90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
