import React, { Component } from 'react';

import './styles/CurrentVideo.css';
import { demoVideo, demoToken, shortFileName } from '../access';

export const demoSrc = 'https://' + demoVideo + demoToken;
const srcDisplay = () => {
  if (document.getElementById('file-select').value) {
    return shortFileName(document.getElementById('file-select').value)
  } else {
    return shortFileName(demoSrc, 1);
  }
}

class VideoPlayer extends Component {
  render() {
    return (
      <div className="currentVideo">
        <div className="buffer-layer">
          <div className="layer layer-0"></div>
          <div className="layer layer-2"></div>
          <div className="layer layer-3"></div>
          <div className="layer layer-4"></div>
          <video
            ref="curvid"
            src={demoSrc}
            id="video"
            className="vid"
            onLoadedMetadata={()=>{updateTime()}}
            onInput={() => {
              updateTime();
            }}
            onTimeUpdate={() => {
              if (mediaState() === 'Playing') {
                updateTime();
              }
            }}
            onClick={() => {
              this.refs.curvid.paused
                ? this.refs.curvid.play()
                : this.refs.curvid.pause();
              updateTime();
            }}
            onSeeked={() => {
              updateTime(prevMediaState); // Else it gets stuck on 'Seeking' while paused.
            }}
            preload="auto"
            controls
          />
        </div>
      </div>
    );
  }
}

let prevMediaState = '';
//Override with str arg, else omit.
const mediaState = (str, status) => {
  const v = document.getElementById('video');
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

export const updateTime = str => {
  const v = document.getElementById('video');
  // TODO: make separate display elements and proper Video component, this is horrific
  document.getElementById('now-playing').innerHTML =
  `<p>[ ${srcDisplay()} ]
  ${mediaState(str)} ${formatTime(v, 'current')} |
  -${formatTime(v, 'remaining')}</p>`;
};

export const formatTime = (v, str) => {
  const cTime = v.currentTime ? v.currentTime : v.duration;
  const rTime = v.currentTime ? v.duration-v.currentTime : v.duration;
  let t;
  // Might add more conditions later
  if (str === 'remaining') { t = rTime; }
  else if (str === 'current') { t = cTime; }
  const s = t >= 60 ? Math.floor(t % 60) : Math.floor(t);
  const m = t >= 60 ? Math.floor(t / 60) : 0;
  const h = t >= 3600 ? Math.floor(t / 3600) : 0;
  const hStr = v.duration>=3600 && h.toString();
  const mStr = m <= 10 && v.duration>=3600 ? `0${m}` : m.toString();
  const sStr = s >= 10 ? s.toString() : `0${s}`;
  const tStr = v.duration>=3600 ? `${hStr}:${mStr}:${sStr}`:`${mStr}:${sStr}`;
  return tStr;
};

export const video = () => document.getElementById('video');
export default VideoPlayer;
