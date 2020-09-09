import {Action} from '@ngrx/store';

export enum RoleActionTypes {
  Reload = '[Role Component] Reload'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class RoleReload implements ActionEx {
  readonly type = RoleActionTypes.Reload;
  constructor(public payload: any) {
  }
}