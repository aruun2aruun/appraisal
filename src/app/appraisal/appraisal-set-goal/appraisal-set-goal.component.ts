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
  loggedInUser: UserType;
  filteredGoals: any = [];

  constructor(
    private initializationService: InitializationService,
    private store: Store<AppState>
  ) { }

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
      !this.appraisalCycle.showReviewToSelf &&
      loggedInUser.id === appraisalGoal.employeeId &&
      loggedInUser.id !== appraisalGoal.reviewerId
    ) {
      visibility = 'HIDE';
    }

    return visibility;
  }

}
