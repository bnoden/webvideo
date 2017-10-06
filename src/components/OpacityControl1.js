import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';
import { setLayerColor } from './LayerStyle';

const defaultOpacity = 0;
class OpacityControl1 extends Component {
  render() {
    return (
      <div className="opacity-control-1 opacity-control control">
        <label htmlFor="opacitySlider1" id="opacitometer1" className="opacitometer-1 opacitometer meter layercolor-1">
          Filter {(defaultOpacity * 100).toFixed()}%
        </label>
        <input
          ref="opacityslider1"
          className="opacity-slider-1 opacity-slider slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            const layers1 = document.querySelectorAll('.layer-1');
            for (let i = 0; i < layers1.length; i++) {
              layers1[i].style.opacity = this.refs.opacityslider1.value;
            }
            document.querySelector('.opacitometer-1').innerHTML = `Filter
            <span className="leading-zeroes">${leadingZeroes(
              (document.querySelector('.layer-1').style.opacity *
                100).toFixed()
            )}</span>${(document.querySelector('.layer-1').style.opacity *
              100).toFixed()}%`;
          }}
        />
        <input
          type="color"
          ref="layercolor1"
          className="layer-color"
          onInput={() => {
            setLayerColor('.layer-1', this.refs.layercolor1, 'bgcolor', '.opacitometer-1')
            setLayerColor('.layercolor-1', this.refs.layercolor1, 'color', '.opacitometer-1')
          }}
        />
      </div>
    );
  }
}

export default OpacityControl1;
