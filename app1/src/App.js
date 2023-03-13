import logo from './logo.svg';
import './App.scss';
import { Button } from '@carbon/react';

function App() {
  return (
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
        <div>
          <Button>Hello world</Button>
       
    <Button kind="danger">
        Button
      </Button>
      &nbsp;
      <Button kind="danger--tertiary">
        Tertiary Danger Button
      </Button>
      &nbsp;
      <Button kind="danger--ghost" >
        Ghost Danger Button
      </Button>

        </div>
      </header>
    </div>
  );
}

export default App;
