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
            ).innerHTML = `Volume ${(document.getElementById('video')
              .volume * 100).toFixed()}%`;
          }}
        />
        <div>
        <input
        type="checkbox"
        id="btn-mute"
        onChange={()=>{
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
const toggleMute = (on, off, muteState) => {
  on = 1;
  off = 0;
  muted = muted ? off : on;
  document.querySelector('.volume-slider').value = muted;
  document.getElementById('video').volume = muted;
}

export default VolumeControl;
