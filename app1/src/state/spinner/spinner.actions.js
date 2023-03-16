/* eslint-disable no-debugger */
export const START_SPINNER = 'START_ SPINNER';
export const STOP_SPINNER = 'STOP_SPINNER';

export const startSpinner = () => {
  debugger;
  return {
    type: START_SPINNER,
  };
};

export const stopSpinner = () => {
  debugger;
  return {
    type: STOP_SPINNER,
  };
};