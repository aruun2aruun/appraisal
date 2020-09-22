import {Action} from '@ngrx/store';

export enum CycleActionTypes {
  Reload = '[Cycle Component] Reload'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class CycleReload implements ActionEx {
  readonly type = CycleActionTypes.Reload;
  constructor(public payload: any) {
  }
}