import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_FETCH, GET_USER_SUCCESS, GET_USER_FAIL } from './user.actions';

/* eslint-disable no-debugger */
function userFetch(userId) {
  debugger;
  console.log({userId});
  return fetch('http://localhost:3001/user')
    .then(response => response.json());
}

/* eslint-disable no-debugger */
function* fetchUser(action) {
  debugger;
  console.log({action});
  try {
    const user = yield call(userFetch, action.a);
    yield put({type: GET_USER_SUCCESS, user: user});
  } catch (e) {
    yield put({type: GET_USER_FAIL, message: e.message});
  }
}

/* eslint-disable no-debugger */
function* userSaga(b) {
  debugger;
  console.log({b});
  yield takeEvery(GET_USER_FETCH, fetchUser);
}

export default userSaga;