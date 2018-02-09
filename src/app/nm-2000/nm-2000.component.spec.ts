import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nm2000Component } from './nm-2000.component';

describe('Nm2000Component', () => {
  let component: Nm2000Component;
  let fixture: ComponentFixture<Nm2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nm2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nm2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
