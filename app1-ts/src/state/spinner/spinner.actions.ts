/* eslint-disable no-debugger */
export const START_SPINNER = 'START_ SPINNER';
export const STOP_SPINNER = 'STOP_SPINNER';

export const startSpinner = (): any => {
  debugger;
  return {
    type: START_SPINNER,
  };
};

export const stopSpinner = (): any => {
  debugger;
  return {
    type: STOP_SPINNER,
  };
};