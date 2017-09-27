import React, { Component } from 'react';
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { VideoDisplay } from './components/videoDisplay';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>WebVideo</h2>
        </div>
        <div>
          <VideoDisplay />
        </div>
      </div>
    );
  }
}

export default App;
