import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">React Quiz</h2>
        </header>
        <Quiz/>
      </div>
    );
  }
}

export default App;
