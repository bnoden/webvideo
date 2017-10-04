import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';

const defaultOpacity = 0.0;
class OpacityControl3 extends Component {
  render() {
    return (
      <div className="opacity-control3">
        <label htmlFor="opacitySlider3" id="opacitometer3" className="meter">
          Opacity 3 {(defaultOpacity * 100).toFixed()}%
        </label>
        <input
          ref="opacityslider3"
          className="opacity-slider3"
          type="range"
          min="0.00"
          max="1.0"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            document.querySelector('.layer3') &&
              (document.querySelector(
                '.layer3'
              ).style.opacity = this.refs.opacityslider3.value);
            document.getElementById('opacitometer3').innerHTML = `Opacity 3
            <span className="leading-zeroes">${leadingZeroes(
              (document.querySelector('.layer3').style.opacity *
                100).toFixed()
            )}</span>${(document.querySelector('.layer3').style.opacity *
              100).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl3;
