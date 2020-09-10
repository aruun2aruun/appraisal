import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalReviewGoalReviewComponent } from './appraisal-review-goal-review.component';

describe('AppraisalReviewGoalReviewComponent', () => {
  let component: AppraisalReviewGoalReviewComponent;
  let fixture: ComponentFixture<AppraisalReviewGoalReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalReviewGoalReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalReviewGoalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
