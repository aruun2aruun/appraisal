import {ActionEx, RoleActionTypes} from './role.actions';

export const initialState = [];
export function RoleReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case RoleActionTypes.Reload:
      return action.payload;
    default:
      return state;
  }
}