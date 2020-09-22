import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalReviewGoalComponent } from './appraisal-review-goal.component';

describe('AppraisalReviewGoalComponent', () => {
  let component: AppraisalReviewGoalComponent;
  let fixture: ComponentFixture<AppraisalReviewGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalReviewGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalReviewGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
