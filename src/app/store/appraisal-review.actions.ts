import {Action} from '@ngrx/store';

export enum AppraisalReviewActionTypes {
  Reload = '[AppraisalReview Component] Reload'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class AppraisalReviewReload implements ActionEx {
  readonly type = AppraisalReviewActionTypes.Reload;
  constructor(public payload: any) {
  }
}