import {Action} from '@ngrx/store';

export enum GoalActionTypes {
  Reload = '[Goal Component] Reload'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class GoalReload implements ActionEx {
  readonly type = GoalActionTypes.Reload;
  constructor(public payload: any) {
  }
}