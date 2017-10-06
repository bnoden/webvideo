import React from 'react';

import SpeedControl from './SpeedControl';
import Skip from './Skip';
import OpacityControl0 from './OpacityControl0';
import OpacityControl from './OpacityControl';
import OpacityControl2 from './OpacityControl2';
import OpacityControl3 from './OpacityControl3';
import OpacityControl4 from './OpacityControl4';
import VolumeControl from './VolumeControl';
import './styles/VideoConfig.css';

export const VideoConfig = () =>
  <div id="videoConfig" className="video-config">
    <Skip />
    <SpeedControl />
    <OpacityControl0 />
    <OpacityControl />
    <OpacityControl2 />
    <OpacityControl3 />
    <OpacityControl4 />
    <VolumeControl />
  </div>;
