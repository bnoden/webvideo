import React, { Component } from 'react';

import { browserIs, leadingZeroes, qs } from '../access';

const defaultSpeed = 1.0;

const minSpeed = !browserIs.Chrome() ? 0.25 : 0;
const maxSpeed = !browserIs.Chrome() ? 5 : 8;

class SpeedControl extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
    qs('#loadedMedia').playbackRate = this.state.value;
    qs(
      '#speedometer'
    ).innerHTML = `Speed <span className="leading-zeroes">${leadingZeroes(
      (qs('#loadedMedia').playbackRate * 100).toFixed()
    )}</span>${(qs('#loadedMedia').playbackRate * 100).toFixed()}%`;
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
          max={maxSpeed}
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
