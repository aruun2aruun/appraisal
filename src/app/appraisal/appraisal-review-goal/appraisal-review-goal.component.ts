import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appraisal-review-goal',
  templateUrl: './appraisal-review-goal.component.html',
  styleUrls: ['./appraisal-review-goal.component.scss']
})
export class AppraisalReviewGoalComponent implements OnInit {
  @Input() response: any;
  @Input() appraisalGoals: any;
  @Input() appraisalReview: string;

  @Output() changeGoalReview = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  testValue (event) {
    this.changeGoalReview.emit(event);
  }
}
