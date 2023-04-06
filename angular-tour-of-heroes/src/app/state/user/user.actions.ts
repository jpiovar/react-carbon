import { Action } from '@ngrx/store';
import { UserState } from './user.models';

export const USER_LOAD = '[User] Load data';
export const USER_LOAD_SUCCESS = '[User] Load data success';
export const USER_LOAD_FAIL = '[User] Load data fail';

export class UserLoad implements Action {
  readonly type = USER_LOAD;
  constructor(public payload: string) {
    debugger;
  }
}

export class UserLoadSuccess implements Action {
  readonly type = USER_LOAD_SUCCESS;
  constructor(public payload: UserState) {}
}

export class UserLoadFail implements Action {
  readonly type = USER_LOAD_FAIL;
  constructor(public payload: any) {}
}

export type Actions = UserLoad | UserLoadSuccess | UserLoadFail;
