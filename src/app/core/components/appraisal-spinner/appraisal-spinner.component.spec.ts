import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalSpinnerComponent } from './appraisal-spinner.component';

describe('AppraisalSpinnerComponent', () => {
  let component: AppraisalSpinnerComponent;
  let fixture: ComponentFixture<AppraisalSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
