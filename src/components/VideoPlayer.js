import React, { Component } from 'react';

import './styles/VideoPlayer.css';
import { demoVideo, demoToken, shortFileName } from '../access';
import Video from './Video';

export const demoSrc = 'https://' + demoVideo + demoToken;
// let prevMediaState = '';
const srcDisplay = () => {
  if (document.getElementById('file-select').value) {
    return shortFileName(document.getElementById('file-select').value);
  } else {
    return shortFileName(demoSrc, 1);
  }
};

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaState: ''
    };
  }

  handleClick = e => {
    e.target.paused ? e.target.play() : e.target.pause();
    this.setState({
      mediaState: e.target.paused ? 'Paused' : 'Playing'
    });
  };

  mediaState(e) {
    return e.target.paused ? 'Paused' : 'Playing';
  }

  updateTime = e => {
    this.setState({
      mediaState:
        e.target.duration - e.target.currentTime < 0.05
          ? 'Ended'
          : e.target.error
            ? 'ERROR'
            : e.target.progress
              ? 'Loading media...'
              : e.target.waiting
                ? 'Buffering'
                : e.target.stalled
                  ? 'Cannot find media'
                  : e.target.seeking
                    ? 'Seeking'
                    : e.target.paused ? 'Paused' : 'Playing'
    });
    const v = document.getElementById('loadedVideo');
    document.querySelector('.now-playing').innerHTML = `<p>[ ${srcDisplay()} ]
    ${this.state.mediaState} ${this.formatTime(v, 'current')} |
    -${this.formatTime(v, 'remaining')}</p>`;
  };

  formatTime = (v, str) => {
    v = document.getElementById('loadedVideo');
    const cTime = v.currentTime ? v.currentTime : v.duration;
    const rTime = v.currentTime ? v.duration - v.currentTime : v.duration;
    let t;
    // Might add more conditions later
    if (str === 'remaining') {
      t = rTime;
    } else if (str === 'current') {
      t = cTime;
    }
    const s = t >= 60 ? Math.floor(t % 60) : Math.floor(t);
    const m = t >= 60 ? Math.floor(t / 60) : 0;
    const h = t >= 3600 ? Math.floor(t / 3600) : 0;
    const hStr = v.duration >= 3600 && h.toString();
    const mStr = m <= 10 && v.duration >= 3600 ? `0${m}` : m.toString();
    const sStr = s >= 10 ? s.toString() : `0${s}`;
    const tStr =
      v.duration >= 3600 ? `${hStr}:${mStr}:${sStr}` : `${mStr}:${sStr}`;
    return tStr;
  };

  render() {
    return (
      <div className="VideoPlayer">
        <div className="buffer-layer">
          <div className="layer layer-0" />
          <Video
            src={demoSrc}
            id="loadedVideo"
            onClick={this.handleClick}
            className="Video loaded-video layer-2"
            onLoadedMetadata={this.updateTime}
            onInput={this.updateTime}
            mediaState={this.mediaState}
            onTimeUpdate={this.updateTime}
          />
          <div id="layerOne" className="layer layer-1 layer-color" />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
