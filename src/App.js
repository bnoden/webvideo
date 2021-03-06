import React, { Component } from 'react';
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import FileLoader from './components/FileLoader';
import { MediaUI } from './components/MediaUI';
import Controls from './components/Controls';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className="App-header">
            <div className="now-playing"><p></p></div>
            <FileLoader />
          </div>
          <div>
            <MediaUI />
          </div>
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
