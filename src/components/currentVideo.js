import React, { Component } from 'react';

import './styles/CurrentVideo.css';
import { demoVideo, demoToken, shortFileName } from '../access';

const videoSrc = 'https://' + demoVideo + demoToken;

class CurrentVideo extends Component {
  render() {
    return (
      <div className="currentVideo">
        <video
          src={videoSrc}
          type="video/mp4"
          ref="curvid"
          id="video"
          className="vid"
          onPlaying={() => {
            setTimeout(() => {
              document.getElementById(
                'now-playing'
              ).innerHTML = `<p>${shortFileName(
                this.refs.curvid.getAttribute('src'),
                '?'
              )} - Playing</p>`;
            }, 200);
          }}
          onPause={() => {
            setTimeout(() => {
              document.getElementById(
                'now-playing'
              ).innerHTML = `<p>${shortFileName(
                this.refs.curvid.getAttribute('src'),
                demoToken
              )} - Paused</p>`;
            }, 200);
          }}
          onClick={() => {
            this.refs.curvid.paused
              ? this.refs.curvid.play()
              : this.refs.curvid.pause();
          }}
          controls
          preload='auto'
        />
      </div>
    );
  }
}

export const video = () => document.getElementById('video');
export default CurrentVideo;
