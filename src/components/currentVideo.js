import React, { Component } from 'react';

import './styles/CurrentVideo.css';
import { demoVideo, demoToken, shortFileName } from '../access';

export const videoSrc = 'https://' + demoVideo + demoToken;

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
          onClick={() => {
            this.refs.curvid.paused
              ? this.refs.curvid.play()
              : this.refs.curvid.pause();
            updateTime();
          }}
          onSeeked={() => {
            updateTime(prevMediaState); // Else it gets stuck on 'Seeking' while paused.
          }}
          controls
          preload="auto"
        />
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
  if (status !== 'Seeking') {
    prevMediaState = status;
  }
  return status;
};

export const updateTime = str => {
  document.getElementById('now-playing').innerHTML = `<p>${shortFileName(
    document.getElementById('video').getAttribute('src'),
    demoToken
  )} - ${mediaState(str)} - ${formatTime(
    document.getElementById('video')
  )}</p>`;
};

export const formatTime = v => {
  const t = v.currentTime ? v.currentTime : v.duration;
  const s = t >= 60 ? Math.floor(t % 60) : Math.floor(t);
  const m = t >= 60 ? Math.floor(t / 60) : 0;
  const h = t >= 3600 ? Math.floor(t / 3600) : 0;
  const hStr = h ? h.toString() : '00';
  const mStr = m >= 10 ? m.toString() : `0${m}`;
  const sStr = s >= 10 ? s.toString() : `0${s}`;
  return `${hStr} : ${mStr} : ${sStr}`;
};

export const video = () => document.getElementById('video');
export default CurrentVideo;
