import { UserState } from './user.models';
import * as UserActions from './user.actions';

export const initialState: UserState = {
  data: null,
  loading: false,
  error: null
};

export function reducer(state = initialState, action: UserActions.Actions): UserState {
  switch (action.type) {
    case UserActions.USER_LOAD: {
      debugger;
      return {
        ...state,
        loading: true,
        error: false
      };
    }

    case UserActions.USER_LOAD_SUCCESS: {
      debugger;
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    }

    case UserActions.USER_LOAD_FAIL: {
      debugger;
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
