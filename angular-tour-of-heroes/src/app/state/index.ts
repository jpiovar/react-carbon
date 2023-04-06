import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { SpinnerState } from './spinner/spinner.models';
import { reducer as spinner } from './spinner/spinner.reducer';
import { reducer as user } from './user/user.reducer';
import { UserState } from './user/user.models';
import { UserEffects } from './user/user.effects';

export const rootReducer = {};

export interface AppState {
  readonly router?: any;
  readonly spinner: SpinnerState;
  readonly user: UserState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  spinner,
  user
};


export const effects: any[] = [UserEffects];