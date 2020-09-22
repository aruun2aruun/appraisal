import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from '../core/services/page-header.service';
import { CycleSelectionService } from '../core/services/cycle-selection.service';
import { Store, select } from '@ngrx/store';

import { AppState } from '../app-state';

@Component({
  selector: 'app-change-cycle-dialog',
  templateUrl: './change-cycle-dialog.component.html',
  styleUrls: ['./change-cycle-dialog.component.scss']
})
export class ChangeCycleDialogComponent implements OnInit {

  cycles: any[];
  cycle: any = [];
  today: any = Date.now();
  daysdiff: number;

  constructor(public pageHeaderService: PageHeaderService,
              public cycleSelectionService: CycleSelectionService,
              private store: Store<AppState>) {
              }

  ngOnInit() {
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

  changeCycle(cycle) {
    this.cycleSelectionService.changeCycle(cycle);
  }

}
