import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageHeaderService } from "../core/services/page-header.service";
import { AppraisalService } from "../core/services/appraisal.service";
import { Store, select } from "@ngrx/store";
import { AppState } from "../app-state";
import { UserType } from "../model/user-type";
import { AuthService } from "../core/services/auth.service";
import { InitializationService } from "../core/services/initialization.service";

@Component({
  selector: "app-appraisal",
  templateUrl: "./appraisal.component.html",
  styleUrls: ["./appraisal.component.scss"],
})
export class AppraisalComponent implements OnInit {
  queryParamId: any;
  appraisalReview: any;
  appraisalGoals: any[];
  goals: any[] = [];
  goalsGroup: string[] = [];

  constructor(
    private pageHeaderService: PageHeaderService,
    private appraisalService: AppraisalService,
    private route: ActivatedRoute,
    public authService: AuthService,
    public initializationService: InitializationService,
    private store: Store<AppState>
  ) {
    this.pageHeaderService.setTitle("Appraisal");
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
      console.log("****loggedInUser")
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
            console.log("****appraisal")
            this.appraisalReview = appraisalReview;
            if (appraisalReview) {
              this.store
                .pipe(
                  select((state) =>
                    state.users.find((item) => item.id === appraisalReview.employeeId)
                  )
                )
                .subscribe((user) => {
                  console.log("****user")
                  this.store
                    .pipe(
                      select((state) =>
                        state.goals.filter(
                          (item) => item.jobName === user.jobName
                        )
                      )
                    )
                    .subscribe((goals) => {
                      console.log("****goals")
                      this.goals = goals;
                      this.goalsGroup = goals.map(item => item.group).filter((value, index, self) => self.indexOf(value) === index)
                    });
                });
              this.getReviewGoal(appraisalReview);
            }
          });
      }
    });
  }

  getReviewGoal(appraisal) {
    this.appraisalService.getReviewGoal(appraisal.id).subscribe(
      (response) => {
        this.appraisalGoals = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
