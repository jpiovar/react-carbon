import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_FETCH, GET_USER_SUCCESS, GET_USER_FAIL } from './user.actions';

function userFetch(userId) {
  console.log({userId});
  return fetch('http://localhost:3001/user')
    .then(response => response.json());
}

function* fetchUser(action) {
  try {
    const user = yield call(userFetch, action.payload.userId);
    yield put({type: GET_USER_SUCCESS, user: user});
  } catch (e) {
    yield put({type: GET_USER_FAIL, message: e.message});
  }
}

function* userSaga() {
  yield takeEvery(GET_USER_FETCH, fetchUser);
}

export default userSaga;