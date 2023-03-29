/* eslint-disable no-debugger */
import { getUserSuccess, getUserFail } from './user.actions';
import axios from 'axios';

// // original promise then, version 1
// export function getUserRequest({url}) {
//   debugger;
//   return function(dispatch) {
// // return fetch(url)   // fetch way, axios better
//     return axios.get(url)
// // .then(user => user.json()) // fetch way needs user.json() and then user, axios needs data
//       .then(user => dispatch(getUserSuccess(user.data)))
//       .catch(error => dispatch(getUserFail(error)))
//       .finally(() => console.log('finally'));
//   };
// }

// promise then, version 2
// export function getUserRequest({url}) {
//   debugger;
//   const request = axios.get(url);

//   return (dispatch) => {
//     function onSuccess(res) {
//       const r = res.data;
//       dispatch(getUserSuccess(r));
//       return r;
//     }
//     function onError(error) {
//       dispatch(getUserFail(error));
//       return error;
//     }
//     request.then(onSuccess, onError);
//   };    
// }

// async await, version 3
export function getUserRequest({url}): any {  
  debugger;
  return async dispatch => {
    function onSuccess(res): any {
      const r = res.data;
      dispatch(getUserSuccess(r));
      return r;
    }
    function onError(error): any {
      dispatch(getUserFail(error));
      return error;
    }

    try {
      const success = await axios.get(url);
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}