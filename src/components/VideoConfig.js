import React from 'react';

import './styles/VideoConfig.css';
import SpeedControl from './SpeedControl';
import OpacityControl from './OpacityControl';
import LayerControl from './LayerControl';
import VolumeControl from './VolumeControl';
import { Skip } from './Skip';

export const VideoConfig = () =>
  <div id="videoConfig" className="video-config">
    <LayerControl />
    <OpacityControl />
    <SpeedControl />
    <VolumeControl />
    <Skip />
  </div>;
