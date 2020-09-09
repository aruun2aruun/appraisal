import {ActionEx, CycleActionTypes} from './Cycle.actions';

export const initialState = [];
export function CycleReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case CycleActionTypes.Reload:
      return action.payload;
    default:
      return state;
  }
}