import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-appraisal-summary',
  templateUrl: './appraisal-summary.component.html',
  styleUrls: ['./appraisal-summary.component.scss'],
})
export class AppraisalSummaryComponent implements OnInit {
  @Input() roles: any[];
  panelOpenState = false;
  rolesArray = {};

  constructor() {}

  ngOnInit() {
    this.roles.forEach((item) => {
        if (this.rolesArray[item.reviewerType]) {
            this.rolesArray[`${item.reviewerType}`].push(item);
        } else {
            this.rolesArray[`${item.reviewerType}`] = [item];
        }
    });
  }
}
