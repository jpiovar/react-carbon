/* eslint-disable no-debugger */
export const GET_USER_FETCH = 'GET_USER_FETCH';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const getUserFetch = ({ url }) => {
  debugger;
  console.log({url});
  return {
    type: GET_USER_FETCH,
    url
  };
};