import React, { Component } from 'react';

class VolumeControl extends Component {
  render() {
    return (
      <div className="volume-control">
        <label htmlFor="volumeSlider" id="volumeter">
          Volume {(1.0 * 100).toFixed()}%
        </label>
        <br />
        <input
          ref="volumeslider"
          className="volume-slider"
          type="range"
          min="0.0"
          max="1.0"
          step="0.01"
          defaultValue="1.0"
          onInput={() => {
            document.getElementById('video') &&
              (document.getElementById(
                'video'
              ).volume = this.refs.volumeslider.value);
            document.getElementById(
              'volumeter'
            ).innerHTML = `Volume ${(document.getElementById('video').volume *
              100).toFixed()}%`;
            if (document.getElementById('btn-mute').checked) {
              document.getElementById('btn-mute').checked = false;
              muteState();
            }
          }}
        />
        <div>
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
  document.getElementById('video').volume = !muted ? 0 : beforeMuted;
  document.getElementById('volumeter').innerHTML = !muted
    ? 'Volume Muted'
    : `Volume ${(document.getElementById('video').volume * 100).toFixed()}%`;
};

export default VolumeControl;
