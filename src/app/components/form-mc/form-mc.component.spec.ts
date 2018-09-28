import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMcComponent } from './form-mc.component';

describe('FormMcComponent', () => {
  let component: FormMcComponent;
  let fixture: ComponentFixture<FormMcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
