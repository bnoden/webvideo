import React, { Component } from 'react';

import './styles/VideoPlayer.css';
import { demoVideo, demoToken, qs, shortFileName } from '../access';
import Video from './Video';
import playButton from './assets/btn-play.png';
import pauseButton from './assets/btn-pause.png';

export const demoSrc = 'https://' + demoVideo + demoToken;

export const srcDisplay = () => {
  return qs('#file-select').value
    ? shortFileName(qs('#file-select').value)
    : shortFileName(demoSrc, 1);
};

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaState: 'Paused',
      duration: 0,
      currentTime: 0,
      remainder: 0,
      retrospect: 0,
      reverse: 0,
      speed: 1,
      volume: 1
    };
  }

  dblClick = e => {
    if (e.target.requestFullscreen) {
      e.target.requestFullscreen();
    } else if (e.target.mozRequestFullScreen) {
      e.target.mozRequestFullScreen(); // Firefox
    } else if (e.target.webkitRequestFullscreen) {
      e.target.webkitRequestFullscreen(); // Chrome and Safari
    }
  };

  handleClick = e => {
    if (this.state.reverse) {
      this.setState({
        mediaState: e.target.paused ? 'Paused' : 'Reverse'
      });
    } else {
      this.setState({
        mediaState: e.target.paused ? 'Paused' : 'Playing'
      });
    }

    e.target.paused ? e.target.play() : e.target.pause();
  };

  updateTime = e => {
    this.setState({
      duration: e.target.duration,
      currentTime: e.target.currentTime,
      remainder: e.target.duration - e.target.currentTime,
      retrospect:
        this.state.retrospect + 0.3 >= this.state.currentTime
          ? this.state.retrospect
          : this.state.currentTime,
      speed: e.target.playbackRate,
      reverse: this.state.speed < 0 ? 1 : 0,
      volume: qs('.volume-slider').value,
      mediaState: !this.state.remainder
        ? 'Stopped'
        : e.target.error
          ? 'ERROR'
          : e.target.progress
            ? 'Loading media...'
            : e.target.waiting
              ? 'Buffering'
              : e.target.stalled
                ? 'Cannot find media'
                : e.target.paused
                  ? 'Paused'
                  : this.state.speed < 0 ? 'Reverse' : 'Playing'
    });

    if (this.state.mediaState === 'Reverse') {
      e.target.currentTime += e.target.playbackRate * 0.033;
      if (e.target.currentTime <= 0.3) {
        e.target.currentTime = this.state.remainder;
        e.target.pause();
        this.setState({ mediaState: 'Stopped' });
      }
    }

    if (this.state.mediaState === 'Stopped') {
      e.target.currentTime = this.state.reverse ? e.target.duration - 0.3 : 0;
    }

    qs('.progress-slider').max = e.target.duration;
    qs('.progress-slider').value = e.target.currentTime;
    qs('.now-playing').innerHTML = `<p>[ ${srcDisplay()} ]
    ${this.state.mediaState} ${formatTime(e.target, 'current')} |
    -${formatTime(e.target, 'remaining')}</p>`;
    const btnPlayPause = qs('.btn-playpause');
    const ppbtn =
      this.state.mediaState === 'Playing' || this.state.mediaState === 'Reverse'
        ? pauseButton
        : playButton;
    btnPlayPause.setAttribute('src', ppbtn);
  };

  render() {
    return (
      <div className="VideoPlayer">
        <div className="buffer-layer">
          <div className="layer layer-0" />
          <Video
            src={demoSrc}
            volume={this.props.volume}
            mediaState={this.updateTime}
            id="loadedVideo"
            onPause={this.updateTime}
            onClick={this.handleClick}
            onDoubleClick={this.dblClick}
            className="Video loaded-video layer-2"
            onLoadedMetadata={this.updateTime}
            onInput={this.updateTime}
            onTimeUpdate={this.updateTime}
            onChange={this.updateTime}
          />
          <div id="layerOne" className="layer layer-1 layer-color" />
        </div>
      </div>
    );
  }
}

export const formatTime = (v, str) => {
  v = qs('#loadedVideo');
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
  const hStr = v.duration >= 3600 && `${h}`;
  const mStr = m <= 10 && v.duration >= 3600 ? `0${m}` : `${m}`;
  const sStr = s >= 10 ? `${s}` : `0${s}`;
  return v.duration >= 3600 ? `${hStr}:${mStr}:${sStr}` : `${mStr}:${sStr}`;
};

export default VideoPlayer;
