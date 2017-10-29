import React from 'react';

import './styles/VideoUI.css';

import VideoPlayer from './VideoPlayer';
import { VideoConfig } from './VideoConfig';

export const VideoUI = () =>
  <div id="videoUI" className="video-ui">
    <VideoPlayer />
    <VideoConfig />
  </div>;
