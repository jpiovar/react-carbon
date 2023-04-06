import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { UserState } from './user.models';

export const userData = (state: AppState) => state.user;

export const selectUserData = createSelector(
  userData,
  (state: UserState) => state.data
);