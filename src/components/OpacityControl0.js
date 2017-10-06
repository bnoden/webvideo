import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';

const defaultOpacity = 0;
class OpacityControl0 extends Component {
  render() {
    return (
      <div className="opacity-control-0 opacity-control control">
        <label htmlFor="opacitySlider0" id="opacitometer0" className="opacitometer-0 opacitometer meter">
          Layer 0 {(defaultOpacity * 100).toFixed()}%
        </label>
        <input
          ref="opacityslider0"
          className="opacity-slider-0 opacity-slider slider"
          type="range"
          min="0.00"
          max="1.0"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            document.querySelector('.layer-0') &&
              (document.querySelector(
                '.layer-0'
              ).style.opacity = this.refs.opacityslider0.value);
            document.getElementById('opacitometer0').innerHTML = `Layer 0
            <span className="leading-zeroes">${leadingZeroes(
              (document.querySelector('.layer-0').style.opacity *
                100).toFixed()
            )}</span>${(document.querySelector('.layer-0').style.opacity *
              100).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl0;
