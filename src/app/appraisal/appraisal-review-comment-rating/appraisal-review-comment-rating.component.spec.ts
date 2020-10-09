import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalReviewCommentRatingComponent } from './appraisal-review-comment-rating.component';

describe('AppraisalReviewCommentRatingComponent', () => {
  let component: AppraisalReviewCommentRatingComponent;
  let fixture: ComponentFixture<AppraisalReviewCommentRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalReviewCommentRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalReviewCommentRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
