import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { InitializationService } from "src/app/core/services/initialization.service";

@Component({
  selector: "app-appraisal-review-comment-rating",
  templateUrl: "./appraisal-review-comment-rating.component.html",
  styleUrls: ["./appraisal-review-comment-rating.component.scss"],
})
export class AppraisalReviewCommentRatingComponent implements OnChanges {
  @Input() discussionSummary: any;
  ratings: string[] = [
    "1 - Deficient",
    "2 - Improvements Required",
    "3 - Meets Expectations",
    "4 - Above Expectations",
    "5 - Excellent",
  ];

  visibility = "WRITE";

  constructor(private initializationService: InitializationService) {}

  ngOnChanges() {
    this.initializationService.loggedInUser$.subscribe((loggedInUser) => {
      if (this.discussionSummary.complete || loggedInUser.id !== this.discussionSummary.reviewerId) {
        this.visibility = "READ";
      }
    });
  }
}
