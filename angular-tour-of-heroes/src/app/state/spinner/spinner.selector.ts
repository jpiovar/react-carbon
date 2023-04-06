import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { SpinnerState } from './spinner.models';

export const spinnerIsOn = (state: AppState) => state.spinner;

export const selectSpinnerIsOn = createSelector(
  spinnerIsOn,
  (state: SpinnerState) => state.isOn
);