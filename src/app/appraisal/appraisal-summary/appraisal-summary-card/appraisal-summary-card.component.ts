import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';

@Component({
  selector: 'app-appraisal-summary-card',
  templateUrl: './appraisal-summary-card.component.html',
  styleUrls: ['./appraisal-summary-card.component.scss']
})
export class AppraisalSummaryCardComponent implements OnChanges {
  @Input() role: any;
  @Input() appraisalReview: any;
  @Input() appraisalCycle: any;
  @Input() isLast: boolean;
  user: any;
  indicator = 'notstarted';
  daysRemaining = 0;

  constructor(
    private store: Store<AppState>) { }

  ngOnChanges() {
    this.store.select(state => state.users.find(user => user.id === this.role.reviewerId)).subscribe(
      user => this.user = user
    );

    if (this.role && this.appraisalCycle && this.appraisalReview) {

      const oneDay = 24 * 60 * 60 * 1000;
      this.daysRemaining = Math.round(Math.abs((new Date().getTime() - new Date(this.appraisalCycle.deadline[this.role.reviewerType])
                           .getTime()) / oneDay));

      if (this.role.complete) {
        this.indicator = 'complete';
      } else if (this.appraisalReview.status === this.role.reviewerType) {
        this.indicator = 'ongoing';
      } else {
        switch (this.appraisalReview.status) {
          case 'Level_1':
            if (
              ['Self'].includes(this.role.reviewerType)
            ) {
              this.indicator = 'overdue';
            }
            break;
          case 'Level_2':
            if (['Self', 'Level_1'].includes(this.role.reviewerType)) {
              this.indicator = 'overdue';
            }
            break;
          case 'Level_3':
            if (['Self', 'Level_1', 'Level_2'].includes(this.role.reviewerType)) {
              this.indicator = 'overdue';
            }
            break;
          case 'Level_4':
            if (['Self', 'Level_1', 'Level_2', 'Level_3'].includes(this.role.reviewerType)) {
              this.indicator = 'overdue';
            }
            break;
          // TBD Extend for other stages using getVisibilityBasedOnStatusAndType()
        }
      }
    }
  }

}
