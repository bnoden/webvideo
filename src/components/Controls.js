import React, { Component } from 'react';

import './styles/Controls.css';
import { qs } from '../access';
import playButton from './assets/btn-play.png';
import pauseButton from './assets/btn-pause.png';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = { mediaState: '' };
  }

  togglePaused = () => {
    const v = qs('#loadedVideo');
    const btnPlayPause = qs('.btn-playpause');

    if (v.paused) {
      v.play();
      btnPlayPause.setAttribute('src', pauseButton);
    } else {
      v.pause();
      btnPlayPause.setAttribute('src', playButton);
    }
  };

  handleInput = e => {
    const v = qs('#loadedVideo');
    v.currentTime = e.target.value;
  };

  render() {
    return (
      <div className="Controls">
        <div type="button" className="btn-play" onClick={this.togglePaused}>
          <img className="btn-playpause" src={playButton} alt="Play" />
        </div>
        <div id="progressSlider">
          <input
            type="range"
            className="progress-slider slider"
            defaultValue="0"
            onInput={this.handleInput}
            min="0"
            step="0.2"
          />
        </div>
      </div>
    );
  }
}

export default Controls;
