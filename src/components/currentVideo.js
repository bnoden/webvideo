import React, { Component } from 'react';

import './styles/CurrentVideo.css';
import demoVideo from './demo/demo_video.mp4';

class CurrentVideo extends Component {
  render() {
    return (
      <div className="currentVideo">
        <video
          src={demoVideo}
          type="video/mp4"
          ref="curvid"
          id="video"
          className="vid"
          onPlaying={() => {
            setTimeout(() => {
              document.getElementById(
                'now-playing'
              ).innerHTML = `<p>${((this.refs.curvid
                .getAttribute('src')).split('/')[3])} - Playing</p>`;
            }, 200);
          }}
          onPause={() => {
            setTimeout(() => {
              document.getElementById(
                'now-playing'
              ).innerHTML = `<p>${((this.refs.curvid
                .getAttribute('src')).split('/')[3])} - Paused</p>`;
            }, 200);
          }}
          onClick={() => {
            this.refs.curvid.paused
              ? this.refs.curvid.play()
              : this.refs.curvid.pause();
          }}
          controls
        />
      </div>
    );
  }
}

export default CurrentVideo;
