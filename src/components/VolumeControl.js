import React, { Component } from 'react';

import { leadingZeroes, qs } from '../access';

class VolumeControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultVolume: 1,
      volume: 1,
      muted: false,
      beforeMuted: 1
    };
  }

  handleSliderInput = e => {
    qs('#btn-mute').checked = false;
    this.setState({
      volume: e.target.value,
      muted: false
    });
    qs('#loadedVideo').volume = e.target.value;
    this.showVolume();
  };

  handleSliderClick = e => {
    if (qs('#btn-mute').checked) {
      qs('#btn-mute').checked = false;
      this.setState({ muted: false });
    }
    this.setState({ volume: e.target.value });
    qs('#loadedVideo').volume = this.state.volume;
    this.showVolume();
  };

  toggleMute = () => {
    if (qs('#btn-mute').checked) {
      this.setState({ beforeMuted: this.state.volume });
      this.volumeOff();
    } else {
      this.volumeOn();
    }
    this.showVolume();
    this.setState({ volume: qs('#loadedVideo').volume });
  };

  volumeOff = () => {
    this.setState({ volume: 0, muted: true });
    qs('.volume-slider').value = 0;
    qs('#loadedVideo').volume = 0;
    qs('#volumeter').innerHTML = 'Volume Muted';
  };

  volumeOn = () => {
    this.setState({ volume: this.state.beforeMuted, muted: false });
    qs('.volume-slider').value = this.state.beforeMuted;
    qs('#loadedVideo').volume = this.state.beforeMuted;
  };

  showVolume = () => {
    qs(
      '#volumeter'
    ).innerHTML = `Volume <span className="leading-zeroes">${leadingZeroes(
      Math.floor(qs('#loadedVideo').volume * 100)
    )}</span>${Math.floor(qs('#loadedVideo').volume * 100)}%`;
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
            step="0.01"
            max="1"
            defaultValue={this.state.defaultVolume}
            onInput={this.handleSliderInput}
            onClick={this.handleSliderClick}
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
