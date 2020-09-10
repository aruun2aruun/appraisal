import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppraisalService } from 'src/app/core/services/appraisal.service';

@Component({
  selector: 'app-appraisal-review-goal-review',
  templateUrl: './appraisal-review-goal-review.component.html',
  styleUrls: ['./appraisal-review-goal-review.component.scss']
})
export class AppraisalReviewGoalReviewComponent implements OnInit {
  @Input() response: any;
  @Input() appraisalGoals: any;
  ratings: string[] = [
    '1 - Deficient',
    '2 - Improvements Required',
    '3 - Meets Expectations',
    '4 - Above Expectations',
    '5 - Excellent'
  ];
  loggedInUser: any;

  constructor(
    private appraisalService: AppraisalService,
    private authService: AuthService) {
    }

  ngOnInit() {
    this.loggedInUser = this.authService.loggedInUser;
    console.log(this.response);
  }

  saveReview(sectionResponseObj, responseObj, roleType, isComplete) {
    alert('TBD');
  }
}
