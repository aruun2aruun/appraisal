import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderService } from '../core/services/page-header.service';
import { AppraisalService } from '../core/services/appraisal.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-state';
import { UserType } from '../model/user-type';
import { AuthService } from '../core/services/auth.service';
import { InitializationService } from '../core/services/initialization.service';

@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss'],
})
export class AppraisalComponent implements OnInit {
  queryParamId: any;
  appraisalReview: any;
  appraisalGoals: any[];
  jobGoals: any[] = [];
  jobGoalsGroup: string[] = [];
  cuGoals: any[];
  showSubmit = false;
  roles: any[];
  appraisalCycle: any;
  showDiscussion = false;

  constructor(
    private pageHeaderService: PageHeaderService,
    private appraisalService: AppraisalService,
    private route: ActivatedRoute,
    public authService: AuthService,
    public initializationService: InitializationService,
    private store: Store<AppState>
  ) {
    this.pageHeaderService.setTitle('Appraisal');
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.queryParamId = params.id;
    });
    this.initialize();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  initialize() {
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      console.log('****loggedInUser');
      if (loggedInUser) {
        this.store
          .pipe(
            select((state) =>
              this.queryParamId
                ? state.appraisalReviews.find(
                    (item) => item.id === this.queryParamId
                  )
                : state.appraisalReviews.find(
                    (item) => item.employeeId === loggedInUser.id
                  )
            )
          )
          .subscribe((appraisalReview) => {
            console.log('****appraisal');
            this.appraisalReview = appraisalReview;
            if (appraisalReview) {
              this.store
                .pipe(
                  select((state) =>
                    state.users.find(
                      (item) => item.id === appraisalReview.employeeId
                    )
                  )
                )
                .subscribe((user) => {
                  console.log('****user');
                  this.store
                    .pipe(
                      select((state) =>
                        state.goals.filter(
                          (item) => item.job === user.job || item.cu === user.cu
                        )
                      )
                    )
                    .subscribe((goals) => {
                      this.jobGoals = goals.filter((item) => item.job !== null);
                      this.jobGoalsGroup = this.jobGoals
                        .map((item) => item.group)
                        .filter(
                          (value, index, self) => self.indexOf(value) === index
                        );
                      this.cuGoals = goals.filter((item) => item.cu !== null);
                    });
                });
              this.getAppraisalCycleAndRoles(appraisalReview, loggedInUser);
              this.getReviewGoal(appraisalReview);
            }
          });
      }
    });
  }

  getReviewGoal(appraisalReview) {
    this.appraisalService.getReviewGoal(appraisalReview.id).subscribe(
      (response) => {
        this.appraisalGoals = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAppraisalCycleAndRoles(appraisalReview, loggedInUser) {
    this.store
      .pipe(
        select((state) =>
          state.cycles.find((item) => item.id === appraisalReview.cycleId)
        )
      )
      .subscribe((appraisalCycle) => {
        this.appraisalCycle = appraisalCycle;
        this.store
          .pipe(
            select((state) =>
              state.roles.filter(
                (item) => item.employeeId === appraisalReview.employeeId
              )
            )
          )
          .subscribe((roles) => {
            this.roles = roles;
            const reviewer = roles.find((item) => item.reviewerId === loggedInUser.id && item.reviewerType !== 'Master');
            this.showSubmit = appraisalReview.status === reviewer.reviewerType && !reviewer.complete;
            const master = roles.find((item) => item.reviewerId === loggedInUser.id && item.reviewerType === 'Master');
            this.showDiscussion = master && ['Master', 'Complete'].includes(appraisalReview.status) ? true : false;
          });
      });
  }

  changeGoalReview(event) {
    const appraisalGoal = this.appraisalGoals.find(
      (item) => item.id === event.id
    );
    appraisalGoal.comment = event.comment;
    appraisalGoal.rating = event.rating;
  }

  saveAsDraft() {
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      this.appraisalService
        .saveReviewGoal(
          this.appraisalGoals.filter(
            (item) => item.reviewerId === loggedInUser.id
          )
        )
        .subscribe(
          (response) => {
            console.log(response);
            this.initialize();
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

  submitAppraisal() {
    this.saveAsDraft();
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      this.appraisalService
        .submitReviewGoal(
          this.appraisalGoals.filter(
            (item) => item.reviewerId === loggedInUser.id
          )
        )
        .subscribe(
          (response) => {
            console.log(response);
            this.initialize();
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }
}
