import React, { Component } from 'react';
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Playlist from './components/Playlist';
import { VideoUI } from './components/VideoUI';
import Controls from './components/Controls';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="now-playing" />
          <Playlist />
        </div>
        <div>
          <VideoUI />
        </div>
        <Controls />
      </div>
    );
  }
}

export default App;
