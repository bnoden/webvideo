import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';

const defaultOpacity = 0;
class OpacityControl2 extends Component {
  render() {
    return (
      <div className="opacity-control-2 opacity-control control">
        <label htmlFor="opacitySlider2" id="opacitometer2" className="opacitometer-2 opacitometer meter">
          Layer 2 {(defaultOpacity * 100).toFixed()}%
        </label>
        <input
          ref="opacityslider2"
          className="opacity-slider-2 opacity-slider slider"
          type="range"
          min="0.00"
          max="0.6"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            document.querySelector('.layer-2') &&
              (document.querySelector(
                '.layer-2'
              ).style.opacity = this.refs.opacityslider2.value);
            document.getElementById('opacitometer2').innerHTML = `Layer 2
            <span className="leading-zeroes">${leadingZeroes(
              (document.querySelector('.layer-2').style.opacity *
                166.666).toFixed()
            )}</span>${(document.querySelector('.layer-2').style.opacity *
              166.666).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl2;
