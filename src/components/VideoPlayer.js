import React, { Component } from 'react';

import './styles/VideoPlayer.css';
import { demoVideo, demoToken, shortFileName } from '../access';
import Video from './Video';

export const demoSrc = 'https://' + demoVideo + demoToken;
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
      video: { Video }
    };
  }

  handleClick = (e) => {
    e.target.paused ? e.target.play() : e.target.pause();
    updateTime();
  }

  render() {
    return (
      <div className="VideoPlayer">
        <div className="buffer-layer">
          <div className="layer layer-0">
          </div>
          <Video
            src={demoSrc}
            id="loadedVideo"
            onClick={this.handleClick}
            className="Video loaded-video layer-0"
            onLoadedMetadata={() => {
              updateTime();
            }}
            onInput={() => {
              updateTime();
            }}
            onTimeUpdate={() => {
              if (mediaState() === 'Playing') {
                updateTime();
              }
            }}
            onSeeked={() => {
              updateTime(prevMediaState); // Else it gets stuck on 'Seeking' while paused.
            }}
          >

          </Video>
          <div className="layer layer-1 layer-color-1">
          </div>
        </div>
      </div>
    );
  }
}

let prevMediaState = '';
//Override with str arg, else omit.
const mediaState = (v, str, status) => {
  v = () => document.getElementById('loadedVideo');
  switch (!0) {
    case str:
      status = str;
      break;
    case v.error:
      status = 'ERROR';
      break;
    case v.progress:
      status = 'Loading media...';
      break;
    case v.waiting:
      status = 'Buffering';
      break;
    case v.stalled:
      status = 'Cannot find media';
      break;
    case v.seeking:
      status = 'Seeking';
      break;
    case v.paused:
      status = 'Paused';
      break;
    default:
      status = 'Playing';
  }
  prevMediaState = status !== 'Seeking' && status;
  return status;
};

//Override with str arg, else omit.
export const updateTime = (v, str) => {
  v = document.getElementById('loadedVideo');
  document.querySelector('.now-playing').innerHTML = `<p>[ ${srcDisplay()} ]
  ${mediaState(str)} ${formatTime(v, 'current')} |
  -${formatTime(v, 'remaining')}</p>`;
};

export const formatTime = (v, str) => {
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

export default VideoPlayer;
