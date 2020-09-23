import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "app-appraisal-summary",
  templateUrl: "./appraisal-summary.component.html",
  styleUrls: ["./appraisal-summary.component.scss"],
})
export class AppraisalSummaryComponent implements OnChanges {
  @Input() appraisalReview: any;
  @Input() appraisalCycle: any;
  roles: any[];
  daysdiff: number;

  constructor() {}

  ngOnChanges() {
    const today = new Date().getTime();
    const endDate = new Date(this.appraisalCycle.deadline.SELF_APPRAISAL).getTime();
    if (today > endDate) {
      this.daysdiff = 0;
    } else {
      this.daysdiff = Math.abs(endDate - today) / (1000 * 60 * 60 * 24);
    }
  }
}
