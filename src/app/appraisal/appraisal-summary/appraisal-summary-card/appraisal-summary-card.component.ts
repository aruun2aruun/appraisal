import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appraisal-summary-card',
  templateUrl: './appraisal-summary-card.component.html',
  styleUrls: ['./appraisal-summary-card.component.scss']
})
export class AppraisalSummaryCardComponent implements OnInit {
  @Input() rolesValue: any;

  constructor() { }

  ngOnInit() {
  }

}
