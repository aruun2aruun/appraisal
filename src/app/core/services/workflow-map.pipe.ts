import { Pipe, PipeTransform } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';


@Pipe({
  name: 'workflowMap'
})
export class WorkflowMapPipe implements PipeTransform {
  cycles$ = this.store.pipe(select('cycles'));
  workflowMap: any;

  constructor(private store: Store<AppState>) {
    this.cycles$.subscribe(result => {
      for (const cycle of result) {
        if (cycle.status === 'ACTIVE') {
          this.workflowMap = cycle.workflowMap;
        }
      }
    });
  }

  transform(level: any): any {
    if (this.workflowMap) {
      return this.workflowMap[level];
    } else {
      return level;
    }
  }
}
