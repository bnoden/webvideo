import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/SpeedControl.css';

const defaultSpeed = 1.0;
class SpeedControl extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
    document.getElementById('loadedVideo').playbackRate &&
      (document.getElementById(
        'loadedVideo'
      ).playbackRate = this.state.value);
    document.getElementById(
      'speedometer'
    ).innerHTML = `Speed <span className="leading-zeroes">${leadingZeroes(
      (document.getElementById('loadedVideo').playbackRate * 100).toFixed()
    )}</span>${(document.getElementById('loadedVideo').playbackRate *
      100).toFixed()}%`;
  }

  render() {
    return (
      <div className="speed-control control">
        <label htmlFor="speedSlider" id="speedometer" className="meter">
          Speed {(defaultSpeed * 100).toFixed()}%
        </label>
        <input
          className="speed-slider slider"
          type="range"
          min="0.01"
          max="4.0"
          step="0.01"
          defaultValue={defaultSpeed}
          onInput={this.handleInput}
        />
      </div>
    );
  }
}

export default SpeedControl;
