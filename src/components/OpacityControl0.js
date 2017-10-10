import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';

const defaultOpacity = 0.5;
class OpacityControl0 extends Component {
  render() {
    return (
      <div className="opacity-control-0 opacity-control control">
        <label
          htmlFor="opacitySlider0"
          id="opacitometer0"
          className="opacitometer-0 opacitometer meter"
        >
          Video {(defaultOpacity * 100).toFixed()}%
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
            const layers0 = document.querySelectorAll('.layer-2');
            for (let i = 0; i < layers0.length; i++) {
              layers0[i].style.opacity = this.refs.opacityslider0.value;
            }
            document.querySelector('.opacitometer-0').innerHTML = `Video
            <span className="leading-zeroes">${leadingZeroes(
              (document.querySelector('.layer-2').style.opacity * 100).toFixed()
            )}</span>${(document.querySelector('.layer-2').style.opacity *
              100).toFixed()}%`;
          }}
        />
      <div>
      </div>
      </div>
    );
  }
}

export default OpacityControl0;
