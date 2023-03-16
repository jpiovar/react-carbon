/* eslint-disable no-debugger */
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_FETCH, GET_USER_SUCCESS, GET_USER_FAIL } from './user.actions';

function userFetch(url) {
  debugger;
  console.log({url});
  return fetch(url)
    .then(response => response.json());
}

function* fetchUser(action) {
  debugger;
  console.log({action});
  try {
    const user = yield call(userFetch, action.url);
    yield put({type: GET_USER_SUCCESS, user: user});
  } catch (e) {
    yield put({type: GET_USER_FAIL, message: e.message});
  }
}

function* userSaga() {
  debugger;
  yield takeEvery(GET_USER_FETCH, fetchUser);
}

export default userSaga;