import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoComponent } from './objetivo.component';

describe('ProfileComponent', () => {
  let component: ObjetivoComponent;
  let fixture: ComponentFixture<ObjetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
