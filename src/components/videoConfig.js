import React, { Component } from 'react';

import SpeedControl from './SpeedControl';
import OpacityControl from './OpacityControl';
import './styles/VideoConfig.css';

class VideoConfig extends Component {
  render() {
    return (
      <div className="video-config">
        <SpeedControl />
        <OpacityControl />
        <div style={{ textAlign: 'center' }}>
          <h2>
            <br />MORE<br />
            <br />CONFIG<br />
            <br />WILL GO<br />
            <br />HERE
          </h2>
        </div>
      </div>
    );
  }
}

export default VideoConfig;
