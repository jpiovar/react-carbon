import { Button } from "@carbon/react";
import logo from "./assets/images/logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">
                  <Button>Home</Button>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Button>About</Button>
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Navigate replace={true} to="/home" />} />
            <Route path="*" element={<Navigate replace={true} to="/home" />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
