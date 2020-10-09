import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { MatSnackBar } from '@angular/material';
import { AppraisalService } from "src/app/core/services/appraisal.service";
import { InitializationService } from "src/app/core/services/initialization.service";
import * as messageObject from '../../message.json';

@Component({
  selector: "app-discussion-summary",
  templateUrl: "./discussion-summary.component.html",
  styleUrls: ["./discussion-summary.component.scss"],
})
export class DiscussionSummaryComponent implements OnChanges {
  @Input() roles: any[];
  @Input() appraisalReview: any;
  @Input() appraisalCycle: any;
  additionalFields: any = {};
  ratings: string[] = [
    "1 - Deficient",
    "2 - Improvements Required",
    "3 - Meets Expectations",
    "4 - Above Expectations",
    "5 - Excellent",
  ];
  discussionSummary: any;
  showSubmit: boolean;

  constructor(
    private appraisalService: AppraisalService,
    public initializationService: InitializationService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnChanges() {
    this.roles.forEach((role) => this.populateAdditionalFields(role));
    this.getDiscussionSummary();
  }

  populateAdditionalFields = (role: any) => {
    if (this.appraisalCycle && this.appraisalReview) {
      const additionalFieldsEntry = { rating: "" };

      switch (Math.round(role.totalScore)) {
        case 1:
          additionalFieldsEntry.rating = "1 - Deficient";
          break;
        case 2:
          additionalFieldsEntry.rating = "2 - Improvements Required";
          break;
        case 3:
          additionalFieldsEntry.rating = "3 - Meets Expectations";
          break;
        case 4:
          additionalFieldsEntry.rating = "4 - Above Expectations";
          break;
        case 5:
          additionalFieldsEntry.rating = "5 - Excellent";
          break;
        default:
          break;
      }

      this.additionalFields[role.id] = additionalFieldsEntry;
    }
  };

  getDiscussionSummary() {
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      this.appraisalService.getDiscussion(this.appraisalReview.id).subscribe(
        (response) => {
          this.discussionSummary = response;
          this.showSubmit = !!response.find(
            (item) => !item.complete && item.reviewerId === loggedInUser.id
          );
        },
        (error) => {}
      );
    });
  }

  submitDiscussionSummary() {
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      const data = this.discussionSummary.find(
        (element) => loggedInUser.id === element.reviewerId
      );
      if (data &&
          this.discussionSummary.find((element) => loggedInUser.id === element.reviewerId).comment !== '' &&
          this.discussionSummary.find((element) => loggedInUser.id === element.reviewerId).rating !== '') {
        this.appraisalService
          .submitDiscussion({ ...data, complete: true })
          .subscribe(
            (response) => {
              // this.initializationService.initialize();
            },
            (error) => {
              console.log(error);
            }
          );
      } else {
        this.snackBar.open(messageObject.MANDATORY.all, null, {
          duration: 6000,
          panelClass: 'error'
        });
      }
    });
  }
}
