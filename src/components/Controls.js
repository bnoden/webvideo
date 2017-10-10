import React, { Component } from 'react';

import './styles/Controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = { mediaState: '' }
  }

  togglePaused = () => {
    const v = document.getElementById('loadedVideo');
    const btnPlay = document.querySelector('.btn-play');

    if (v.paused) {
      v.play();
      btnPlay.innerHTML = 'Pause';
    } else {
      v.pause();
      btnPlay.innerHTML = 'Play';
    }

  }

  handleInput = (e) => {
    const v = document.getElementById('loadedVideo');
    v.currentTime = e.target.value;
  }

  render() {
    return (
      <div className="Controls">
        <div type="button" className="btn-play" onClick={this.togglePaused}>
          Play
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
