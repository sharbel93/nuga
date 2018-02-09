import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nm80Component } from './nm-80.component';

describe('Nm80Component', () => {
  let component: Nm80Component;
  let fixture: ComponentFixture<Nm80Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nm80Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nm80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
