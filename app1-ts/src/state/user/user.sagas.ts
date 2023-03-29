/* eslint-disable no-debugger */
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_FETCH, GET_USER_SUCCESS, GET_USER_FAIL } from './user.actions';
import axios from 'axios';
import { zip, lastValueFrom } from 'rxjs';

function userFetch(url): Promise<any> {
  debugger;
  console.log({url});
  // return fetch(url)
  //   .then(response => response.json());
  return axios.get(url)
    .then(response => response.data);
}

async function homeZipFetch(url): Promise<any> {
  debugger;
  const {home, user} = url;
  console.log({url}, {home, user});
  const homeRequest = axios.get(home);
  const userRequest = axios.get(user);
  // return fetch(url)
  //   .then(response => response.json());
  // return axios.get(url)
  //   .then(response => response.data);
  const res = await lastValueFrom(zip(homeRequest, userRequest));
  return res;

}

function* fetchUser(action): any {
  debugger;
  console.log({action});
  try {
    const user = yield call(userFetch, action.url);
    const homeZip = yield call(homeZipFetch, {home: process.env.REACT_APP_HOME_URL, user: process.env.REACT_APP_USER_URL});
    console.log({homeZip});
    yield put({type: GET_USER_SUCCESS, user: user});
  } catch (e: any) {
    yield put({type: GET_USER_FAIL, message: e.message});
  }
}

function* userSaga(): any {
  debugger;
  yield takeEvery(GET_USER_FETCH, fetchUser);
}

export default userSaga;