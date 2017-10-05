import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';

const defaultOpacity = 1.0;
class OpacityControl extends Component {
  render() {
    return (
      <div className="opacity-control-1 opacity-control control opacity-control-vid">
        <label htmlFor="opacitySlider" id="opacitometer1" className="opacitometer-1 opacitometer meter opacitometer-vid">
          Layer 1 {(defaultOpacity * 100).toFixed()}%
        </label>
        <input
          ref="opacityslider"
          className="opacity-slider-1 opacity-slider slider opacity-slider-vid"
          type="range"
          min="0.00"
          max="1.0"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            document.getElementById('video') &&
              (document.getElementById(
                'video'
              ).style.opacity = this.refs.opacityslider.value);
            document.getElementById('opacitometer1').innerHTML = `Layer 1
            <span className="leading-zeroes">${leadingZeroes(
              (document.getElementById('video').style.opacity * 100).toFixed()
            )}</span>${(document.getElementById('video').style.opacity *
              100).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl;
