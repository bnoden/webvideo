import React, { Component } from 'react';

import './styles/SpeedControl.css';

const defaultSpeed = 1.0;
class SpeedControl extends Component {
  render() {
    return (
      <div className="speed-control">
        <label htmlFor="speedSlider" id="speedometer">
          Speed {(defaultSpeed * 100).toFixed()}%
        </label>
        <br />
        <input
          ref="speedslider"
          className="speed-slider"
          type="range"
          min="0.01"
          max="4.0"
          step="0.01"
          defaultValue={defaultSpeed}
          onInput={() => {
            document.getElementById('video').playbackRate &&
              (document.getElementById(
                'video'
              ).playbackRate = this.refs.speedslider.value);
            document.getElementById(
              'speedometer'
            ).innerHTML = `Speed ${(document.getElementById('video')
              .playbackRate * 100).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default SpeedControl;
