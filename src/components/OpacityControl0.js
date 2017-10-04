import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';

const defaultOpacity = 0.0;
class OpacityControl0 extends Component {
  render() {
    return (
      <div className="opacity-control0">
        <label htmlFor="opacitySlider0" id="opacitometer0" className="meter">
          Opacity 0 {(defaultOpacity * 100).toFixed()}%
        </label>
        <input
          ref="opacityslider0"
          className="opacity-slider0"
          type="range"
          min="0.00"
          max="1.0"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            document.querySelector('.layer0') &&
              (document.querySelector(
                '.layer0'
              ).style.opacity = this.refs.opacityslider0.value);
            document.getElementById('opacitometer0').innerHTML = `Opacity 0
            <span className="leading-zeroes">${leadingZeroes(
              (document.querySelector('.layer0').style.opacity *
                100).toFixed()
            )}</span>${(document.querySelector('.layer0').style.opacity *
              100).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl0;
