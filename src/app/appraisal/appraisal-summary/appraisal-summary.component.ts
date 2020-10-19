import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "app-appraisal-summary",
  templateUrl: "./appraisal-summary.component.html",
  styleUrls: ["./appraisal-summary.component.scss"],
})
export class AppraisalSummaryComponent implements OnChanges {
  @Input() roles: any[];
  @Input() appraisalReview: any;
  @Input() appraisalCycle: any;
  additionalFields: any = {};

  constructor() {}

  ngOnChanges() {
    this.roles.forEach(role => this.populateAdditionalFields(role));
  }

  populateAdditionalFields = (role: any) => {
    if (this.appraisalCycle && this.appraisalReview) {
      const additionalFieldsEntry = {daysRemaining: 0, indicator: 'Awaiting', primaryRating: '', secondaryRating: ''};
      const oneDay = 24 * 60 * 60 * 1000;
      additionalFieldsEntry.daysRemaining = Math.round(
        Math.abs(
          (new Date().getTime() -
            new Date(
              this.appraisalCycle.deadline[role.reviewerType]
            ).getTime()) /
            oneDay
        )
      );

      if (role.complete) {
        additionalFieldsEntry.indicator = "Complete";
      } else if (this.appraisalReview.status === role.reviewerType) {
        additionalFieldsEntry.indicator = "Ongoing";
      } else {
        switch (this.appraisalReview.status) {
          case "Level_1":
            if (["Self"].includes(role.reviewerType)) {
              additionalFieldsEntry.indicator = "Overdue";
            }
            break;
          case "Level_2":
            if (["Self", "Level_1"].includes(role.reviewerType)) {
              additionalFieldsEntry.indicator = "Overdue";
            }
            break;
          case "Level_3":
            if (
              ["Self", "Level_1", "Level_2"].includes(role.reviewerType)
            ) {
              additionalFieldsEntry.indicator = "Overdue";
            }
            break;
          case "Level_4":
            if (
              ["Self", "Level_1", "Level_2", "Level_3"].includes(
                role.reviewerType
              )
            ) {
              additionalFieldsEntry.indicator = "Overdue";
            }
            break;
            case "Master":
              if (
                ["Self", "Level_1", "Level_2", "Level_3", "Level_4"].includes(
                  role.reviewerType
                )
              ) {
                additionalFieldsEntry.indicator = "Overdue";
              }
              break;
          // TBD Extend for other stages using getVisibilityBasedOnStatusAndType()
        }
      }

      switch (Math.round(role.primaryScore)) {
        case 1:
          additionalFieldsEntry.primaryRating = 'Deficient';
          break;
        case 2:
          additionalFieldsEntry.primaryRating = 'Improvements Required';
          break;
        case 3:
          additionalFieldsEntry.primaryRating = 'Meets Expectations';
          break;
        case 4:
          additionalFieldsEntry.primaryRating = 'Above Expectations';
          break;
        case 5:
          additionalFieldsEntry.primaryRating = 'Excellent';
          break;
        default:
          additionalFieldsEntry.primaryRating = "No rating";
          break;
      }

      switch (Math.round(role.secondaryScore)) {
        case 1:
          additionalFieldsEntry.secondaryRating = 'Not Met';
          break;
        case 2:
          additionalFieldsEntry.secondaryRating = 'Started but not completed';
          break;
        case 3:
          additionalFieldsEntry.secondaryRating = 'Partially Met';
          break;
        case 4:
          additionalFieldsEntry.secondaryRating = 'Almost Fully Met';
          break;
        case 5:
          additionalFieldsEntry.secondaryRating = 'Fully Met';
          break;
        default:
          additionalFieldsEntry.secondaryRating = "No rating";
          break;
      }

      this.additionalFields[role.id] = additionalFieldsEntry;
    }
  }

}
