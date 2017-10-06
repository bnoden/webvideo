import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';

const defaultOpacity = 0;
class OpacityControl3 extends Component {
  render() {
    return (
      <div className="opacity-control-3 opacity-control control">
        <label htmlFor="opacitySlider3" id="opacitometer3" className="opacitometer-3 opacitometer meter">
          Layer 3 {(defaultOpacity * 100).toFixed()}%
        </label>
        <input
          ref="opacityslider3"
          className="opacity-slider-3 opacity-slider slider"
          type="range"
          min="0.00"
          max="0.6"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            document.querySelector('.layer-3') &&
              (document.querySelector(
                '.layer-3'
              ).style.opacity = this.refs.opacityslider3.value);
            document.querySelector('.opacitometer-3').innerHTML = `Layer 3
            <span className="leading-zeroes">${leadingZeroes(
              (document.querySelector('.layer-3').style.opacity *
                166.666).toFixed()
            )}</span>${(document.querySelector('.layer-3').style.opacity *
              166.666).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl3;
