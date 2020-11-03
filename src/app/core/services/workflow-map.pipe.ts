import { Pipe, PipeTransform } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/app-state";
import { CycleSelectionService } from "./cycle-selection.service";

@Pipe({
  name: "workflowMap",
})
export class WorkflowMapPipe implements PipeTransform {
  cycles$ = this.store.pipe(select("cycles"));
  workflowMap: any;

  constructor(
    private store: Store<AppState>,
    private cycleSelectionService: CycleSelectionService
  ) {
    this.cycleSelectionService.cycleChangedEvent.subscribe((cycle) => {
      this.workflowMap = cycle.workflowMap;
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
