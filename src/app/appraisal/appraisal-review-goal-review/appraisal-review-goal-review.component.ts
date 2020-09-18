import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { InitializationService } from 'src/app/core/services/initialization.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-appraisal-review-goal-review',
  templateUrl: './appraisal-review-goal-review.component.html',
  styleUrls: ['./appraisal-review-goal-review.component.scss'],
})
export class AppraisalReviewGoalReviewComponent implements OnChanges {
  @Input() jobGoal: any;
  @Input() appraisalGoals: any;
  @Input() appraisalReview: any;
  ratings: string[] = [
    '1 - Deficient',
    '2 - Improvements Required',
    '3 - Meets Expectations',
    '4 - Above Expectations',
    '5 - Excellent',
  ];

  @Output() testValue = new EventEmitter();

  filteredGoals: any = [];

  constructor(
    private initializationService: InitializationService,
    private store: Store<AppState>
  ) {}

  ngOnChanges() {
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      if (loggedInUser) {
        this.initialize(loggedInUser);
      }
    });
  }

  initialize(loggedInUser) {
    if (this.appraisalGoals) {
      this.filteredGoals = this.appraisalGoals
        .filter((appraisalGoal) => appraisalGoal.goalId === this.jobGoal.id)
        .map((appraisalGoal) => {
          return {
            ...appraisalGoal,
            visibility: this.getVisibility(loggedInUser, appraisalGoal),
          };
        });
    }
  }

  getVisibility(loggedInUser, appraisalGoal) {
    let visibility = 'WRITE';
    if (loggedInUser.id !== appraisalGoal.reviewerId || appraisalGoal.reviewerType !== this.appraisalReview.status || appraisalGoal.isComplete) {
      visibility = 'READ';
    }

    switch (this.appraisalReview.status) {
      case 'SELF_APPRAISAL':
        if (['PROJECT_MANAGER', 'REPORTING_MANAGER', 'PRACTICE_DIRECTOR', 'HR'].includes(appraisalGoal.reviewerType)) {
          visibility = 'HIDE';
        }
        if (appraisalGoal.reviewerType === 'Self' && !appraisalGoal.isComplete && appraisalGoal.reviewerId !== loggedInUser.id) {
          visibility = 'HIDE';
        }
        break;
      case 'PROJECT_MANAGER':
        if (['REPORTING_MANAGER', 'PRACTICE_DIRECTOR', 'HR'].includes(appraisalGoal.reviewerType)) {
          visibility = 'HIDE';
        }
        if (appraisalGoal.reviewerType === 'PROJECT_MANAGER' && !appraisalGoal.isComplete && appraisalGoal.reviewerId !== loggedInUser.id) {
          visibility = 'HIDE';
        }
        break;
      // TBD Extend for other stages using getVisibilityBasedOnStatusAndType()
    }

    return visibility;
  }

  getVisibilityBasedOnStatusAndType() {
    // TBD reusable function
  }

  onChange (id, comment, rating) {
    this.testValue.emit({id, comment, rating});
  }
}
