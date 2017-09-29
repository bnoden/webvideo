import React, { Component } from 'react';

import SpeedControl from './speedControl';
import OpacityControl from './opacityControl';
import './css/videoConfig.css';

class VideoConfig extends Component {
  render() {

    return (
      <div className="videoConfig">
        <SpeedControl />
        <OpacityControl />
      </div>
    )
  }
}

export default VideoConfig;
