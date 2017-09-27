import React from 'react';

import './css/videoDisplay.css';

import { VideoPlaylist } from './videoPlaylist';
import CurrentVideo from './currentVideo';
import VideoConfig from './videoConfig';

export const VideoDisplay = () =>
  <div className="videoDisplay">
    <VideoPlaylist />
    <CurrentVideo />
    <VideoConfig />
  </div>;
