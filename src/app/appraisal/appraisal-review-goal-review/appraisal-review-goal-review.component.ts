import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { InitializationService } from 'src/app/core/services/initialization.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { FormControl, Validators } from '@angular/forms';
import { UserType } from 'src/app/model/user-type';

@Component({
  selector: 'app-appraisal-review-goal-review',
  templateUrl: './appraisal-review-goal-review.component.html',
  styleUrls: ['./appraisal-review-goal-review.component.scss'],
})
export class AppraisalReviewGoalReviewComponent implements OnChanges {
  @Input() jobGoal: any;
  @Input() appraisalGoals: any;
  @Input() appraisalReview: any;
  @Input() appraisalCycle: any;
  @Input() ratings: any;
  @Input() yourRoles: any;

  @Output() testValue = new EventEmitter();

  loggedInUser: UserType;
  filteredGoals: any = [];
  showValidationErrors: boolean;

  constructor(
    private initializationService: InitializationService,
    private store: Store<AppState>
  ) {
    this.initializationService.showValidationErrors$.subscribe((showValidationErrors) => {
      this.showValidationErrors = showValidationErrors;
    });
  }

  ngOnChanges() {
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      this.loggedInUser = loggedInUser;
      if (loggedInUser) {
        this.initialize(loggedInUser);
      }
    });
  }

  initialize(loggedInUser) {
    if (this.appraisalGoals) {
      this.filteredGoals = this.appraisalGoals
        .filter((appraisalGoal) => appraisalGoal.goalId === this.jobGoal.id && !['SET_GOAL', 'REVIEW_GOAL'].includes(appraisalGoal.reviewerType))
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
    if (
      loggedInUser.id !== appraisalGoal.reviewerId ||
      appraisalGoal.reviewerType !== this.appraisalReview.status ||
      appraisalGoal.complete
    ) {
      visibility = 'READ';
    }

    switch (this.appraisalReview.status) {
      case 'Self':
        if (
          [
            'Level_1',
            'Level_2',
            'Level_3',
            'Level_4',
          ].includes(appraisalGoal.reviewerType)
        ) {
          visibility = 'HIDE';
        }
        if (
          appraisalGoal.reviewerType === 'Self' &&
          !appraisalGoal.complete &&
          appraisalGoal.reviewerId !== loggedInUser.id
        ) {
          visibility = 'HIDE';
        }
        break;
      case 'Level_1':
        if (
          ['Level_2', 'Level_3', 'Level_4'].includes(
            appraisalGoal.reviewerType
          )
        ) {
          visibility = 'HIDE';
        }
        if (
          appraisalGoal.reviewerType === 'Level_1' &&
          !appraisalGoal.complete &&
          appraisalGoal.reviewerId !== loggedInUser.id
        ) {
          visibility = 'HIDE';
        }
        break;
      case 'Level_2':
        if (['Level_3', 'Level_4'].includes(appraisalGoal.reviewerType)) {
          visibility = 'HIDE';
        }
        if (
          appraisalGoal.reviewerType === 'Level_2' &&
          !appraisalGoal.complete &&
          appraisalGoal.reviewerId !== loggedInUser.id
        ) {
          visibility = 'HIDE';
        }
        break;
      case 'Level_3':
        if (['Level_4'].includes(appraisalGoal.reviewerType)) {
          visibility = 'HIDE';
        }
        if (
          appraisalGoal.reviewerType === 'Level_3' &&
          !appraisalGoal.complete &&
          appraisalGoal.reviewerId !== loggedInUser.id
        ) {
          visibility = 'HIDE';
        }
        break;
      // TBD Extend for other stages using getVisibilityBasedOnStatusAndType()
    }

    if (
      this.appraisalCycle &&
      !this.appraisalCycle.showReviewToSelf && this.getProtectionStatus(appraisalGoal)
    ) {
      visibility = 'HIDE';
    }

    return visibility;
  }

  getProtectionStatus(appraisalGoal) {
    return !this.appraisalCycle.visibilityMap[appraisalGoal.reviewerType].find(item => this.yourRoles && this.yourRoles.includes(item));
  }

  getVisibilityBasedOnStatusAndType() {
    // TBD reusable function
  }

  onChange(id, comment, rating) {
    this.testValue.emit({ id, comment, rating });
  }
}
