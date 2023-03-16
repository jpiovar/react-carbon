import { START_SPINNER, STOP_SPINNER } from './spinner.actions';

const spinnerReducer = (state = { isOn: false }, action) => {
  switch (action.type){
  case START_SPINNER:
    return { ... state, isOn: true };
  case STOP_SPINNER:
    return { ... state, isOn: false };
  default:
    return state; 
  }    
};

export default spinnerReducer;