import React, { Component } from 'react';

import './styles/Controls.css';
import { qs } from '../access';
import playButton from './assets/btn-play.png';
import pauseButton from './assets/btn-pause.png';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnPlayPause: playButton
    };
  }

  media = () => qs('#loadedMedia');
  playPause = () => qs('.btn-playpause');

  togglePaused = (m, pp) => {
    m = this.media();
    pp = this.playPause();
    m.paused ? m.play() : m.pause();
    this.setState({
      btnPlayPause: m.paused ? playButton : pauseButton
    });
    pp.setAttribute('src', this.state.btnPlayPause);
  };

  handleInput = e => (this.media().currentTime = e.target.value);

  render() {
    return (
      <div className="Controls">
        <div type="button" className="btn-play" onClick={this.togglePaused}>
          <img
            className="btn-playpause"
            src={this.state.btnPlayPause}
            alt="Play"
          />
        </div>
        <div id="progressSlider">
          <input
            type="range"
            className="progress-slider slider"
            defaultValue="0"
            onInput={this.handleInput}
          />
        </div>
      </div>
    );
  }
}

export default Controls;
