import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nm4000PComponent } from './nm-4000-p.component';

describe('Nm4000PComponent', () => {
  let component: Nm4000PComponent;
  let fixture: ComponentFixture<Nm4000PComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nm4000PComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nm4000PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
