import { GET_USER_SUCCESS } from './user.actions';

const userReducer = (state = { user: {} }, action) => {
  switch (action.type){
  case GET_USER_SUCCESS:
    return { ... state, user: action.user };
  default:
    return state; 
  }    
};

export default userReducer;