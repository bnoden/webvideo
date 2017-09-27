import React, { Component } from 'react';

import './css/speedControl.css';

class SpeedControl extends Component {
  render() {

    return(
      <div className="speedControl">
        <label htmlFor="speedSlider">Speed</label><br />
        <input className="speedSlider" type="range" min="-4.0" max="8.0" step="0.01" defaultValue="1.0"
          />
      </div>
    )
  }
}

export default SpeedControl;
