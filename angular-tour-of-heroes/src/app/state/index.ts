import { ActionReducerMap } from '@ngrx/store';

import { SpinnerState } from './spinner/spinner.models';
import { reducer as spinner } from './spinner/spinner.reducer';

export const rootReducer = {};

export interface AppState {
  readonly spinner: SpinnerState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  spinner
};