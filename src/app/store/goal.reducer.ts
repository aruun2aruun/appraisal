import {ActionEx, GoalActionTypes} from './Goal.actions';

export const initialState = [];
export function GoalReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case GoalActionTypes.Reload:
      return action.payload;
    default:
      return state;
  }
}