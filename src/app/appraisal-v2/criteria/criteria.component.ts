import { Component, Input, OnInit } from '@angular/core';
import { IGoalReference } from '../appraisal-v2.component';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  @Input() goalReference?: IGoalReference;

  constructor() { }

  ngOnInit() {
  }
}
