import React, { Component } from 'react';

import './styles/MediaPlayer.css';
import { demoVideo, demoToken, qs, shortFileName } from '../access';
import Video from './Video';
import FormatTime from './FormatTime';
import playButton from './assets/btn-play.png';
import pauseButton from './assets/btn-pause.png';

export const demoSrc = 'https://' + demoVideo + demoToken;

export const srcDisplay = () => {
  return qs('#file-select').value
    ? shortFileName(qs('#file-select').value)
    : shortFileName(demoSrc, 1);
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

  dblClick = e => {
    if (!this.state.fullscreen) {
      if (e.target.requestFullscreen) {
        e.target.requestFullscreen();
      } else if (e.target.mozRequestFullScreen) {
        e.target.mozRequestFullScreen(); // Firefox
      } else if (e.target.webkitRequestFullscreen) {
        e.target.webkitRequestFullscreen(); // Chrome and Safari
      } else if (e.target.msRequestFullscreen) {
        e.target.msRequestFullscreen();
      }
      this.setState({ fullscreen: 1 });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      this.setState({ fullscreen: 0 });
    }
  };

  handleClick = e => {
    if (this.state.reverse && !this.state.playing) {
      e.target.currentTime -= e.target.playbackRate * 0.025;
      if (e.target.currentTime <= 0.3) {
        e.target.currentTime = this.state.remainder;
        if (!this.state.loop) {
          e.target.pause();
          this.setState({ mediaState: 'Ended' });
          e.target.currentTime = e.target.duration - 0.3;
        }
      }
    }

    this.setState({
      mediaState: e.target.paused ? 'Paused' : 'Playing'
    });

    e.target.paused ? e.target.play() : e.target.pause();
  };

  isReversed = () => {
    return qs('#btn-reverse').checked ? 1 : 0;
  };

  isLooped = () => {
    return qs('#btn-loop').checked ? 1 : 0;
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

    const btnPlayPause = qs('.btn-playpause');
    const ppbtn = this.state.playing ? pauseButton : playButton;
    btnPlayPause.setAttribute('src', ppbtn);

    if (this.state.reverse && this.state.playing) {
      e.target.currentTime += e.target.playbackRate * -0.025;
      if (e.target.currentTime <= 0.3) {
        e.target.currentTime = this.state.remainder;
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

    qs('.now-playing').innerHTML = `<p>[ ${srcDisplay()} ]
      ${this.state.mediaState} ${FormatTime(e.target, 'current')} |
      -${FormatTime(e.target, 'remaining')}</p>`;
  };

  render() {
    return (
      <div
        className="MediaPlayer"
        style={{ transform: `scale(${this.state.xAxis}, 1)` }}
      >
        <div className="buffer-layer">
          <div className="layer layer-0" />
          <Video
            src={demoSrc}
            volume={this.props.volume}
            mediaState={this.updateTime}
            id="loadedMedia"
            onPause={this.updateTime}
            onClick={this.handleClick}
            onDoubleClick={this.dblClick}
            className="Video loaded-media layer-2"
            onLoadedMetadata={this.updateTime}
            onInput={this.updateTime}
            onTimeUpdate={this.updateTime}
            onChange={this.updateTime}
            loop={this.state.loop ? true : false}
            preload="auto"
          />
          <div className="layer overlay" />
          <div id="layerOne" className="layer layer-1 layer-color" />
        </div>
      </div>
    );
  }
}

export default MediaPlayer;
