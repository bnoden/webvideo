import React from 'react';

import './styles/MediaUI.css';

import MediaPlayer from './MediaPlayer';
import { MediaConfig } from './MediaConfig';

export const MediaUI = () =>
  <div id="mediaUI" className="media-ui">
    <MediaPlayer />
    <MediaConfig />
  </div>;
