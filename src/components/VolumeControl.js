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
    qs('#loadedMedia').volume = e.target.value;
    this.showVolume();
  };

  handleSliderClick = e => {
    if (qs('#btn-mute').checked) {
      qs('#btn-mute').checked = false;
      this.setState({ muted: false });
    }
    this.setState({ volume: e.target.value });
    qs('#loadedMedia').volume = this.state.volume;
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
    this.setState({ volume: qs('#loadedMedia').volume });
  };

  volumeOff = () => {
    this.setState({ volume: 0, muted: true });
    qs('.volume-slider').value = 0;
    qs('#loadedMedia').volume = 0;
    qs('#volumeter').innerHTML = 'Volume Muted';
  };

  volumeOn = () => {
    this.setState({ volume: this.state.beforeMuted, muted: false });
    qs('.volume-slider').value = this.state.beforeMuted;
    qs('#loadedMedia').volume = this.state.beforeMuted;
  };

  showVolume = () => {
    qs(
      '#volumeter'
    ).innerHTML = `Volume <span className="leading-zeroes">${leadingZeroes(
      Math.floor(qs('#loadedMedia').volume * 100)
    )}</span>${Math.floor(qs('#loadedMedia').volume * 100)}%`;
  };

  toggleMirror = () => {
    const x = qs('#btn-mirror').checked ? -1 : 1;
    qs('#loadedMedia').style.transform = `scale(${x}, 1)`;
  };

  togglePip = () => {
    if (!qs('#btn-pip').disabled) {
      if (qs('#btn-pip').checked) {
        qs('#loadedMedia').requestPictureInPicture()
        .catch(error => {});
      } else {
        document.exitPictureInPicture()
        .catch(error => {});
      }
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
            step="0.01"
            max="1"
            defaultValue={this.state.defaultVolume}
            onInput={this.handleSliderInput}
            onClick={this.handleSliderClick}
          />
        </div>
        <div className="checkboxes">
          <div className="mute-box box">
            <input type="checkbox" id="btn-mute" onChange={this.toggleMute} />
            <label htmlFor="btn-mute">Mute</label>
          </div>
          {/* Code for loop/reverse checkboxes should be placed elsewhere at some point. */}
          <div className="loop-box box">
            <input type="checkbox" id="btn-loop" />
            <label htmlFor="btn-loop">Loop</label>
          </div>
          <div className="reverse-box box">
            <input type="checkbox" id="btn-reverse" />
            <label htmlFor="btn-reverse">Reverse</label>
          </div>
          <div className="mirror-box box">
            <input type="checkbox" id="btn-mirror" onChange={this.toggleMirror} />
            <label htmlFor="btn-mirror">Mirror</label>
          </div>
          <div className="pip-box box">
            <input
              type="checkbox" id="btn-pip"
              disabled={!document.pictureInPictureEnabled || (!!document.querySelectorAll('#loadedMedia').length && qs('#loadedMedia').disablePictureInPicture)}
              onChange={this.togglePip}
            />
            <label htmlFor="btn-pip"> PIP </label>
          </div>
        </div>
      </div>
    );
  }
}

export default VolumeControl;
