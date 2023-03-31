import { GET_USER_SUCCESS } from './user.actions';
import { UserTypeAny, UserType, UserTypeEmpty } from './user.types';

const userReducer = (state = { user: {} }, action): UserType | UserTypeEmpty | UserTypeAny => {
  switch (action.type){
  case GET_USER_SUCCESS:
    return { ... state, user: action.user };
  default:
    return state; 
  }    
};

export default userReducer;