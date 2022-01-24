import React from 'react';
import Menu from './menu';
import logo from './logo.svg';
import './App.css';


var a = 4;
function App() {
  a = a + 2;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {a }
          <Menu />
         {a }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
