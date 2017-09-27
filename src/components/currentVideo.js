import React, { Component } from 'react';

import './css/currentVideo.css'
import video1 from './video/dits01_480.mp4';

class CurrentVideo extends Component {
  render() {
    return (
      <div className="currentVideo">
        <video
          ref="curvid"
          className="vid"
          onClick={() => {
            this.refs.curvid.paused
              ? this.refs.curvid.play()
              : this.refs.curvid.pause();
          }}
          controls
        >
          <source src={video1} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default CurrentVideo;
