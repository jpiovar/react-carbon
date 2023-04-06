import { ActionReducerMap } from '@ngrx/store';

import { SpinnerState } from './spinner/spinner.models';
import { reducer as spinner } from './spinner/spinner.reducer';
import { reducer as user } from './user/user.reducer';
import { UserState } from './user/user.models';

export const rootReducer = {};

export interface AppState {
  readonly spinner: SpinnerState;
  readonly user: UserState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  spinner,
  user
};