/* eslint-disable no-debugger */
export const GET_USER_FETCH = 'GET_USER_FETCH';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const getUserFetch = ({ url }): any => {
  debugger;
  console.log({url});
  return {
    type: GET_USER_FETCH,
    url
  };
};

export const getUserSuccess = (user): any => {
  debugger;
  console.log(user);
  return {
    type: GET_USER_SUCCESS,
    user
  };
};

export const getUserFail = (error): any => {
  debugger;
  console.log({error});
  return {
    type: GET_USER_FAIL,
    //   url
  };
};