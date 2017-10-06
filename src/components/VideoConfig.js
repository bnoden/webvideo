import React from 'react';

import SpeedControl from './SpeedControl';
import Skip from './Skip';
import OpacityControl0 from './OpacityControl0';
import OpacityControl1 from './OpacityControl1';
import VolumeControl from './VolumeControl';
import './styles/VideoConfig.css';

export const VideoConfig = () =>
  <div id="videoConfig" className="video-config">
    <Skip />
    <SpeedControl />
    <VolumeControl />
    <OpacityControl0 />
    <OpacityControl1 />
  </div>;
