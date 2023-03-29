import React from 'react';
// import logo from './assets/images/logo.svg';
import './App.scss';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App(): JSX.Element {
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
    </BrowserRouter>

  );
}

export default App;
