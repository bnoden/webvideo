import React from 'react';

import './styles/VideoDisplay.css';

import Playlist from './Playlist';
import CurrentVideo from './CurrentVideo';
import VideoConfig from './VideoConfig';

export const VideoDisplay = () =>
  <div className="video-display">
    <Playlist />
    <CurrentVideo />
    <VideoConfig />
  </div>;
