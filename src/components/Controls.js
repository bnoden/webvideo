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
  v = () => qs('#loadedMedia');
  pp = () => qs('.btn-playpause');

  btnPlayPause = () =>
    this.pp().setAttribute('src', this.v().paused ? playButton : pauseButton);

  togglePaused = () => {
    this.v().paused ? this.v().play() : this.v().pause();
    this.btnPlayPause();
  };

  handleInput = e => {
    const v = qs('#loadedMedia');
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
          />
        </div>
      </div>
    );
  }
}

export default Controls;
