import {ActionEx, AppraisalReviewActionTypes} from './appraisal-review.actions';

export const initialState = [];
export function AppraisalReviewReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case AppraisalReviewActionTypes.Reload:
      return action.payload;
    default:
      return state;
  }
}