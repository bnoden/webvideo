import React, { Component } from 'react';

import { browserIs, leadingZeroes, qs } from '../access';
import './styles/SpeedControl.css';

const defaultSpeed = 1.0;

const minSpeed = !browserIs.Chrome() ? 0.25 : -4;

class SpeedControl extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
    qs('#loadedVideo').playbackRate = this.state.value;
    qs(
      '#speedometer'
    ).innerHTML = `Speed <span className="leading-zeroes">${leadingZeroes(
      (qs('#loadedVideo').playbackRate * 100).toFixed()
    )}</span>${(qs('#loadedVideo').playbackRate * 100).toFixed()}%`;
  };

  render() {
    return (
      <div className="speed-control control">
        <label htmlFor="speedSlider" id="speedometer" className="meter">
          Speed {(defaultSpeed * 100).toFixed()}%
        </label>
        <input
          className="speed-slider slider"
          type="range"
          min={minSpeed}
          max="5"
          step="0.01"
          defaultValue={defaultSpeed}
          onInput={this.handleInput}
          onClick={this.handleInput}
        />
      </div>
    );
  }
}

export default SpeedControl;
