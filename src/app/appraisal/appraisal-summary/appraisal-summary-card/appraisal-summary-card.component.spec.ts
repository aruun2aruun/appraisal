import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalSummaryCardComponent } from './appraisal-summary-card.component';

describe('AppraisalSummaryCardComponent', () => {
  let component: AppraisalSummaryCardComponent;
  let fixture: ComponentFixture<AppraisalSummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalSummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
