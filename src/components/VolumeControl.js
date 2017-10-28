import React, { Component } from 'react';

import { leadingZeroes, qs } from '../access';

const defaultVolume = 1;
class VolumeControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: defaultVolume,
      muted: 0,
      beforeMuted: defaultVolume
    };
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
    qs('#loadedVideo').volume = this.state.value;
    qs(
      '#volumeter'
    ).innerHTML = `Volume <span className="leading-zeroes">${leadingZeroes(
      (qs('#loadedVideo').volume * 100).toFixed()
    )}</span>${(qs('#loadedVideo').volume * 100).toFixed()}%`;
    if (qs('#btn-mute').checked) {
      qs('#btn-mute').checked = false;
      this.toggleMute();
    }
  };

  toggleMute = () => {
    if (qs('#btn-mute').checked) {
      this.setState({ beforeMuted: qs('.volume-slider').value });
      this.setState({ muted: 1 });
    } else {
      this.setState({ muted: 0 });
    }
    qs('.volume-slider').value = !this.state.muted ? 0 : this.state.beforeMuted;
    qs('#loadedVideo').volume = !this.state.muted ? 0 : this.state.beforeMuted;
    qs('#volumeter').innerHTML = !this.state.muted
      ? 'Volume Mute'
      : `Volume <span className="leading-zeroes">${leadingZeroes(
          (qs('#loadedVideo').volume * 100).toFixed()
        )}</span>${(qs('#loadedVideo').volume * 100).toFixed()}%`;
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
            min="0"
            max="1"
            step="0.01"
            defaultValue={defaultVolume}
            onInput={this.handleInput}
            onClick={this.handleInput}
          />
        </div>
        <div className="mute-box">
          <input type="checkbox" id="btn-mute" onChange={this.toggleMute} />
          <label htmlFor="btn-mute">Mute</label>
        </div>
      </div>
    );
  }
}

export default VolumeControl;
