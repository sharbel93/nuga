import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nm2500DComponent } from './nm-2500-d.component';

describe('Nm2500DComponent', () => {
  let component: Nm2500DComponent;
  let fixture: ComponentFixture<Nm2500DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nm2500DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nm2500DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
