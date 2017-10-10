import React, { Component } from 'react';
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Playlist from './components/Playlist';
import { VideoDisplay } from './components/VideoDisplay';
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
          <VideoDisplay />
        </div>
        <Controls />
      </div>
    );
  }
}

export default App;
