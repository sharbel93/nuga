import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nm2500SComponent } from './nm-2500-s.component';

describe('Nm2500SComponent', () => {
  let component: Nm2500SComponent;
  let fixture: ComponentFixture<Nm2500SComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nm2500SComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nm2500SComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
