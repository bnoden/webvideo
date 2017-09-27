import React from 'react';

import CurrentVideo from './currentVideo';
import { VideoConfig } from './videoConfig';
import { VideoPlaylist } from './videoPlaylist';

export const VideoDisplay = () =>
  <div className="videoDisplay">
    <CurrentVideo />
    <VideoConfig />
    <VideoPlaylist />
  </div>;
