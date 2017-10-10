import React from 'react';

import SpeedControl from './SpeedControl';
import Skip from './Skip';
import OpacityControl from './OpacityControl';
import LayerControl from './LayerControl';
import VolumeControl from './VolumeControl';
import './styles/VideoConfig.css';

export const VideoConfig = () =>
  <div id="videoConfig" className="video-config">
    <Skip />
    <SpeedControl />
    <VolumeControl />
    <LayerControl />
    <OpacityControl />
  </div>;
