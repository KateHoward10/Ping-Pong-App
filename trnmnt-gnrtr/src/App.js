import React, { Component } from 'react';
import GeneratorContainer from './containers/GeneratorContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Ping Pong Tournament Generator</h1>
        <p>Enter your players' names and then generate your tournament structure.</p>
        <GeneratorContainer />
      </div>
    );
  }
}

export default App;
