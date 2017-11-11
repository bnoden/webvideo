import React, { Component } from 'react';
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import FileLoader from './components/FileLoader';
import { MediaUI } from './components/MediaUI';
import Controls from './components/Controls';
import { fullScreenOn, fullScreenOff } from './access';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreen: 0
    };
  }

  toggleFullscreen = () => {
    if (!this.state.fullscreen) {
      fullScreenOn();
      this.setState({ fullscreen: 1 });
    } else {
      fullScreenOff();
      this.setState({ fullscreen: 0 });
    }
  };

  dblClick = () => {
    this.toggleFullscreen();
  };

  render() {
    return (
      <div className="App">
        <div onDoubleClick={this.dblClick}>
          <div className="App-header">
            <div className="now-playing" />
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
