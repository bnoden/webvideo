import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';

const defaultOpacity = 0.0;
class OpacityControl2 extends Component {
  render() {
    return (
      <div className="opacity-control2">
        <label htmlFor="opacitySlider2" id="opacitometer2" className="meter">
          Layer 2 {(defaultOpacity * 100).toFixed()}%
        </label>
        <input
          ref="opacityslider2"
          className="opacity-slider2"
          type="range"
          min="0.00"
          max="1.0"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            document.querySelector('.layer2') &&
              (document.querySelector(
                '.layer2'
              ).style.opacity = this.refs.opacityslider2.value);
            document.getElementById('opacitometer2').innerHTML = `Layer 2
            <span className="leading-zeroes">${leadingZeroes(
              (document.querySelector('.layer2').style.opacity *
                100).toFixed()
            )}</span>${(document.querySelector('.layer2').style.opacity *
              100).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl2;
