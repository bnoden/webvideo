import React, { Component } from 'react';

import SpeedControl from './speedControl';
import './css/videoConfig.css';

class VideoConfig extends Component {
  render() {

    return (
      <div className="videoConfig">
        <SpeedControl />
      </div>
    )
  }
}

export default VideoConfig;
