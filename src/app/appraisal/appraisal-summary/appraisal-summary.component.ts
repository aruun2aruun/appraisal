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
  appraisalReviews: any[];
  cycles: any[];
  cycle: any;
  today: any = Date.now();
  daysdiff: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    const roles$ = this.store.pipe(select('roles'));
    roles$.subscribe(result => {
      this.roles = result;
    });
    const appraisalReviews$ = this.store.pipe(select('appraisalReviews'));
    appraisalReviews$.subscribe(result => {
      this.appraisalReviews = result;
    });
    const cycles$ = this.store.pipe(select('cycles'));
    cycles$.subscribe(result => {
      this.cycles = result;
      for (const cycle of result) {
        if (cycle.status === 'ACTIVE') {
          this.cycle = cycle;
          const today = new Date(this.today).getTime();
          const endDate = new Date(this.cycle.selfAppraisalDeadline).getTime();
          if (today > endDate) {
            this.daysdiff = 0;
          } else {
            this.daysdiff = Math.abs(endDate - today) / (1000 * 60 * 60 * 24);
          }
        }
      }
    });
  }
}
