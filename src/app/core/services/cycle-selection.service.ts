import {EventEmitter, Injectable} from '@angular/core';
import {CycleType} from '../../model/cycle-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CycleSelectionService {

  currentCycle: CycleType;

  cycleChangedEvent = new BehaviorSubject(null);

  changeCycle(cycle) {
    this.currentCycle = cycle;
    localStorage.setItem('currentCycle', JSON.stringify(cycle));
    this.cycleChangedEvent.next(cycle);
  }

  initialize() {
    if (localStorage.getItem('currentCycle')) {
        this.currentCycle = JSON.parse(localStorage.getItem('currentCycle'));
        this.cycleChangedEvent.next(this.currentCycle);
    }
  }
}
