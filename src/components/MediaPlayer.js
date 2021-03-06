import React, { Component } from 'react';

import './styles/MediaPlayer.css';
import {
  demoVideo,
  demoToken,
  fullScreenOn,
  fullScreenOff,
  qs,
  showOnFullScreen
} from '../access';
import Video from './Video';
import FormatTime from './FormatTime';
import playButton from './assets/btn-play.png';
import pauseButton from './assets/btn-pause.png';

export const demoSrc = 'https://' + demoVideo + demoToken;
const url = require('url');
const path = require('path');

export const srcDisplay = _display => {
  // assuming we don't provide a display name some other way
  if (!_display) {
    // if the file source is from local disk
    if (qs('#file-select').value) {
      _display = qs('input[type=file]').files[0].name;
      // if the file source is a web URL
    } else if (qs('video').src) {
      _display = path.basename(url.parse(qs('video').src).pathname);
    }
  }
  return _display;
};

class MediaPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: this.props.src,
      mediaState: 'Paused',
      playing: 0,
      duration: 0,
      currentTime: 0,
      remainder: 0,
      retrospect: 0,
      reverse: 0,
      loop: 0,
      speed: 1,
      volume: 1,
      fullscreen: 0
    };
  }

  toggleFullscreen = () => {
    if (!this.state.fullscreen) {
      fullScreenOn();
      this.setState({ fullscreen: 1 });
    } else {
      fullScreenOff();
      this.setState({ fullscreen: 0 });
    }
  };

  dblClick = () => {
    this.toggleFullscreen();
  };

  handleClick = e => {
    if (this.state.reverse && !this.state.playing) {
      e.target.currentTime -= e.target.playbackRate * 0.03;
      if (e.target.currentTime <= 0.3) {
        e.target.currentTime = this.state.remainder;
        if (!this.state.loop) {
          e.target.pause();
          this.setState({ mediaState: 'Ended' });
          e.target.currentTime = e.target.duration - 0.3;
        }
      }
    }

    e.target.paused ? e.target.play() : e.target.pause();
    this.setState({
      mediaState: e.target.paused ? 'Paused' : 'Playing'
    });
    const btnPlayPause = qs('.btn-playpause');
    btnPlayPause.setAttribute(
      'src',
      !this.state.playing ? pauseButton : playButton
    );

    if (this.state.fullscreen) {
      showOnFullScreen();
    }
  };

  isReversed = () => (qs('#btn-reverse').checked ? 1 : 0);

  isLooped = () => (qs('#btn-loop').checked ? 1 : 0);

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
      reverse: this.isReversed(),
      volume: qs('.volume-slider').value,
      loop: this.isLooped(),
      mediaState: !this.state.remainder
        ? 'Ended'
        : e.target.error
          ? 'ERROR'
          : e.target.progress
            ? 'Loading media...'
            : e.target.waiting
              ? 'Buffering'
              : e.target.stalled
                ? 'Cannot find media'
                : e.target.paused ? 'Paused' : 'Playing',
      playing: this.state.mediaState === 'Playing' ? 1 : 0
    });

    if (this.state.reverse && this.state.playing) {
      e.target.currentTime += e.target.playbackRate * -0.03;
      if (e.target.currentTime <= 0.3) {
        e.target.currentTime = this.state.remainder - 0.03;
        if (!this.state.loop) {
          e.target.pause();
          this.setState({ mediaState: 'Ended' });
          e.target.currentTime = e.target.duration - 0.3;
        }
      }
    }

    if (this.state.mediaState === 'Ended') {
      e.target.currentTime = this.state.reverse ? e.target.duration - 0.3 : 0;
    }

    qs('.progress-slider').max = e.target.duration;
    qs('.progress-slider').value = e.target.currentTime;

    qs('.now-playing').firstChild.innerText = `[ ${srcDisplay()} ] ${
      this.state.mediaState
    } ${FormatTime(e.target, 'current')} | -${FormatTime(
      e.target,
      'remaining'
    )}`;
  };

  render() {
    return (
      <div
        className="MediaPlayer"
        style={{ transform: `scale(${this.state.xAxis}, 1)` }}
        onDoubleClick={this.dblClick}
      >
        <div id="bufferLayer" className="buffer-layer">
          <Video
            src={demoSrc}
            volume={this.props.volume}
            mediaState={this.updateTime}
            id="loadedMedia"
            onPause={this.updateTime}
            onClick={this.handleClick}
            className="Video loaded-media layer-2"
            onLoadedMetadata={this.updateTime}
            onInput={this.updateTime}
            onTimeUpdate={this.updateTime}
            onChange={this.updateTime}
            loop={this.state.loop ? true : false}
            preload="auto"
          />
          <div id="layerOne" className="layer layer-1 layer-color" />
        </div>
      </div>
    );
  }
}

export default MediaPlayer;
