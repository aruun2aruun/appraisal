import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-appraisal-summary',
  templateUrl: './appraisal-summary.component.html',
  styleUrls: ['./appraisal-summary.component.scss'],
})
export class AppraisalSummaryComponent {
  @Input() roles: any[];
  @Input() appraisalReview: any;
  @Input() appraisalCycle: any;

  constructor() {}

}
