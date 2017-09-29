import React, { Component } from 'react';

import './css/speedControl.css';

class SpeedControl extends Component {
  render() {

    return(
      <div className="speedControl">
        <label htmlFor="speedSlider">Speed</label>
        <br />
        <input
          ref="speedslider"
          className="speedSlider"
          type="range"
          min="0.1"
          max="4.0"
          step="0.01"
          defaultValue="1.0"
          onInput={() => {
            document.getElementById('video1').playbackRate = this.refs.speedslider.value;
          }}
        />
      </div>
    );
  }
}

export default SpeedControl;
