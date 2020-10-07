import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appraisal-review-comment-rating',
  templateUrl: './appraisal-review-comment-rating.component.html',
  styleUrls: ['./appraisal-review-comment-rating.component.scss']
})
export class AppraisalReviewCommentRatingComponent implements OnInit {
  @Input() discussionSummary: any;
  ratings: string[] = [
    "1 - Deficient",
    "2 - Improvements Required",
    "3 - Meets Expectations",
    "4 - Above Expectations",
    "5 - Excellent",
  ];

  constructor() { }

  ngOnInit() {
  }

}
