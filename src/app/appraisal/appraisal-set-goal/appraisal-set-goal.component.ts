import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { InitializationService } from 'src/app/core/services/initialization.service';
import { UserType } from 'src/app/model/user-type';

@Component({
  selector: 'app-appraisal-set-goal',
  templateUrl: './appraisal-set-goal.component.html',
  styleUrls: ['./appraisal-set-goal.component.scss']
})
export class AppraisalSetGoalComponent implements OnChanges {
  @Input() jobGoal: any;
  @Input() appraisalGoals: any;
  @Input() appraisalReview: any;
  @Input() appraisalCycle: any;
  @Input() goalType: string;
  @Input() showSubmit: boolean;
  loggedInUser: UserType;
  setGoal: any = null;
  reviewGoal: any = null;
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
      if (this.goalType === 'SET_GOAL') {
        this.setGoal = this.appraisalGoals
        .find((appraisalGoal) => appraisalGoal.goalId === this.jobGoal.id && appraisalGoal.reviewerType === 'SET_GOAL');
      } else {
        this.reviewGoal = this.appraisalGoals
          .find((appraisalGoal) => appraisalGoal.goalId === this.jobGoal.id && appraisalGoal.reviewerType === 'REVIEW_GOAL');
      }
    }
  }

}
