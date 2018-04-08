import React, { Component } from 'react';
import GeneratorContainer from './containers/GeneratorContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Welcome to the <br/>Ping Pong Tournament Generator</h1>
          <p className="App-intro">Enter your players' names and then generate your tournament structure.<br/>(The number of players must be a power of 2)</p>
        </div>
        <GeneratorContainer />
      </div>
    );
  }
}

export default App;
