import './index.scss';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';

import userReducer from './state/user/user.reducers';
// import userSaga from './state/user/user.sagas'; // to use saga activate this
import { Provider } from 'react-redux';
import spinnerReducer from 'state/spinner/spinner.reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({spinnerReducer, userReducer});

// const sagaMiddleware = createSagaMiddleware(); // to use saga activate this
// const middleware = [sagaMiddleware]; // to use saga activate this

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
  // getDefaultMiddleware().concat(middleware), // to use saga activate this
});

// sagaMiddleware.run(userSaga); // to use saga activate this



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
