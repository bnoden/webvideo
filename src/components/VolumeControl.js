import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';

class VolumeControl extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
    document.getElementById('loadedVideo') &&
      (document.getElementById('loadedVideo').volume = this.state.value);
    document.getElementById(
      'volumeter'
    ).innerHTML = `Volume <span className="leading-zeroes">${leadingZeroes(
      (document.getElementById('loadedVideo').volume * 100).toFixed()
    )}</span>${(document.getElementById('loadedVideo').volume *
      100).toFixed()}%`;
    if (document.getElementById('btn-mute').checked) {
      document.getElementById('btn-mute').checked = false;
      muteState();
    }
  };

  render() {
    return (
      <div>
        <div className="volume-control control">
          <label
            htmlFor="volumeSlider"
            id="volumeter"
            className="volume-meter meter"
          >
            Volume {(1.0 * 100).toFixed()}%
          </label>
          <input
            className="volume-slider slider"
            type="range"
            min="0.0"
            max="1.0"
            step="0.01"
            defaultValue="1.0"
            onInput={this.handleInput}
          />
        </div>
        <div className="mute-box">
          <input
            type="checkbox"
            id="btn-mute"
            onChange={() => {
              toggleMute();
            }}
          />
          <label htmlFor="btn-mute">Mute</label>
        </div>
      </div>
    );
  }
}

let muted = 1;
let beforeMuted;
const muteState = () => {
  muted = muted ? 0 : 1;
};

const toggleMute = () => {
  if (document.getElementById('btn-mute').checked) {
    beforeMuted = document.querySelector('.volume-slider').value;
  }
  muteState();
  document.querySelector('.volume-slider').value = !muted ? 0 : beforeMuted;
  document.getElementById('loadedVideo').volume = !muted ? 0 : beforeMuted;
  document.getElementById('volumeter').innerHTML = !muted
    ? 'Volume Mute'
    : `Volume <span className="leading-zeroes">${leadingZeroes(
        (document.getElementById('loadedVideo').volume * 100).toFixed()
      )}</span>${(document.getElementById('loadedVideo').volume *
        100).toFixed()}%`;
};

export default VolumeControl;
