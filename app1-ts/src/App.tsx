import React, { useEffect, useState } from 'react';
// import logo from './assets/images/logo.svg';
import './App.scss';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { startSpinner, stopSpinner } from './state/spinner/spinner.actions';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from 'carbon-components-react';
import { getUserFetch } from './state/user/user.actions';
import { getUserRequest } from './state/user/user.thunks';

function App(): JSX.Element {

  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.userReducer.user);
  const spinner = useSelector((state: any) => state.spinnerReducer.isOn);

  const [spinnerLoader, setSpinnerLoader] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    console.log('ok');
    setSpinnerLoader(spinner);
  }, [spinner]);
  
  return (
    // <div className="app">
    //   <header className="app-header">
    //     <img src={logo} className="app-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="app-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <div className="app">
        <div>
          <button onClick={() => dispatch(startSpinner())}>start spinner</button>
          <button onClick={() => dispatch(stopSpinner())}>stop spinner</button>
          <span>spinner: {spinner.toString()} / {spinnerLoader.toString()}</span>
        </div>
        <div>
          {spinnerLoader ? <Loading className={'some-class'} withOverlay={false} /> : <span>loaded</span>}
        </div>


        <br/>
        <div>
          <p>
            REDUX-SAGA way
          </p>
          <button onClick={() => dispatch(getUserFetch({ url: process.env.REACT_APP_USER_URL}))}>get user</button>
          <span>User: {user.name}</span>
        </div>
        <br/>
        <div>
          <p>
            REDUX-THUNK way
          </p>
          <button onClick={() => dispatch(getUserRequest({ url: process.env.REACT_APP_USER_URL}))}>get user</button>
          <span>User: {user.name}</span>
        </div>
        <br/>

        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Navigate replace={true} to="/home" />} />
            <Route path="*" element={<Navigate replace={true} to="/home" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
