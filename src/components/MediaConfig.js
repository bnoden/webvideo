import React from 'react';

import './styles/MediaConfig.css';
import SpeedControl from './SpeedControl';
import OpacityControl from './OpacityControl';
import LayerControl from './LayerControl';
import VolumeControl from './VolumeControl';
import { Skip } from './Skip';

export const MediaConfig = () =>
  <div id="mediaConfig" className="media-config">
    <LayerControl />
    <OpacityControl />
    <SpeedControl />
    <VolumeControl />
    <Skip />
  </div>;
