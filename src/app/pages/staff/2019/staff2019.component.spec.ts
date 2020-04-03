import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staff2019Component } from './staff2019.component';

describe('ProgramaComponent', () => {
  let component: Staff2019Component;
  let fixture: ComponentFixture<Staff2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Staff2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staff2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
