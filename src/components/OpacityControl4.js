import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';

const defaultOpacity = 0.0;
class OpacityControl4 extends Component {
  render() {
    return (
      <div className="opacity-control4">
        <label htmlFor="opacitySlider4" id="opacitometer4" className="meter">
          Layer 4 {(defaultOpacity * 166.666).toFixed()}%
        </label>
        <input
          ref="opacityslider4"
          className="opacity-slider4"
          type="range"
          min="0.00"
          max="0.6"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            document.querySelector('.layer4') &&
              (document.querySelector(
                '.layer4'
              ).style.opacity = this.refs.opacityslider4.value);
            document.getElementById('opacitometer4').innerHTML = `Layer 4
            <span className="leading-zeroes">${leadingZeroes(
              (document.querySelector('.layer4').style.opacity *
                166.666).toFixed()
            )}</span>${(document.querySelector('.layer4').style.opacity *
              166.666).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl4;
