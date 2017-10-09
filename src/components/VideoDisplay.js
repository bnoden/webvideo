import React from 'react';

import './styles/VideoDisplay.css';

import VideoPlayer from './VideoPlayer';
import { VideoConfig } from './VideoConfig';

export const VideoDisplay = () =>
  <div id="videoDisplay" className="video-display">
    <VideoPlayer />
    <VideoConfig />
  </div>;
