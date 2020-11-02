import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appraisal-review-goal',
  templateUrl: './appraisal-review-goal.component.html',
  styleUrls: ['./appraisal-review-goal.component.scss']
})
export class AppraisalReviewGoalComponent implements OnInit {
  @Input() jobGoal: any;
  @Input() appraisalGoals: any;
  @Input() appraisalReview: string;
  @Input() appraisalCycle: string;
  @Input() ratings: any;
  @Input() showSubmit: boolean;

  @Output() changeGoalReview = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  testValue (event) {
    this.changeGoalReview.emit(event);
  }
}
