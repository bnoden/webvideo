import React, { Component } from 'react';

import SpeedControl from './SpeedControl';
import Skip from './Skip';
import OpacityControl from './OpacityControl';
import VolumeControl from './VolumeControl';
import './styles/VideoConfig.css';

class VideoConfig extends Component {
  render() {
    return (
      <div className="video-config">
        <Skip />
        <SpeedControl />
        <OpacityControl />
        <VolumeControl />
      </div>
    );
  }
}

export default VideoConfig;
