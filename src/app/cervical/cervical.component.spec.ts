import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervicalComponent } from './cervical.component';

describe('CervicalComponent', () => {
  let component: CervicalComponent;
  let fixture: ComponentFixture<CervicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
