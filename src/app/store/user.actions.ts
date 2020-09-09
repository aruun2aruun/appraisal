import {Action} from '@ngrx/store';

export enum UserActionTypes {
  Reload = '[User Component] Reload'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class UserReload implements ActionEx {
  readonly type = UserActionTypes.Reload;
  constructor(public payload: any) {
  }
}