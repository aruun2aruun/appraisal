import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PageHeaderService } from "src/app/core/services/page-header.service";
import { UserService } from "src/app/core/services/user.service";
import { UserType } from "src/app/model/user-type";

@Component({
  selector: "app-choose-review-period",
  templateUrl: "./choose-review-period.component.html",
  styleUrls: ["./choose-review-period.component.scss"],
})
export class ChooseReviewPeriodComponent implements OnInit {
  loggedInUser: UserType;
  minDate = new Date(2018, 0, 1);
  maxDate = new Date();
  selectedReviewPeriod: any;
  from: any = null;
  to: any = null;
  employeeId: string;

  constructor(
    private pageHeaderService: PageHeaderService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.pageHeaderService.setTitle("Choose Review Period");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeId = params.employeeId;
    });
    setTimeout(() => {
      this.userService.getLoggedInUserData().subscribe((data) => {
        this.loggedInUser = data;
      });
    }, 100);
  }

  reviewPeriodSelection() {
    if (this.selectedReviewPeriod === "predefined") {
      this.router.navigate([`appraisalv2/${this.employeeId}`], {
        queryParams: {
          cycleId: "1234",
        },
      });
    } else if (
      this.selectedReviewPeriod === "custom" &&
      this.from !== null &&
      this.to !== null
    ) {
      this.router.navigate([`appraisalv2/${this.employeeId}`], {
        queryParams: {
          from: this.datePipe.transform(this.from, "yyyyMM"),
          to: this.datePipe.transform(this.to, "yyyyMM"),
        },
      });
    }
  }
}
