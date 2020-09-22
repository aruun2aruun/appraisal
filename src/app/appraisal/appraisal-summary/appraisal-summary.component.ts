import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-state';

@Component({
  selector: 'app-appraisal-summary',
  templateUrl: './appraisal-summary.component.html',
  styleUrls: ['./appraisal-summary.component.scss']
})
export class AppraisalSummaryComponent implements OnInit {
  @Input() appraisalReview: any;
  roles: any[];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    const roles$ = this.store.pipe(select('roles'));
    roles$.subscribe(result => {
      this.roles = result;
    });
  }

}
