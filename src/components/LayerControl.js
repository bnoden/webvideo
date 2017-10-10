import React, { Component } from 'react';

import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';
import LayerStyle from './LayerStyle';
import OpacitySlider from './OpacitySlider';

const defaultLayerOpacity = 1;
const defaultColor = '#d68800';
class LayerControl extends Component {

  layerOpacityInput = (e) => {
    this.setState({value: e.target.value})
    const layers1 = document.querySelectorAll('.layer-1');
    for (let i = 0; i < layers1.length; i++) {
      layers1[i].style.opacity = e.target.value;
    }
    document.querySelector('.opacitometer-1').innerHTML = `
    <span className="leading-zeroes">${leadingZeroes(
      (document.querySelector('.layer-1').style.opacity *
        100).toFixed()
    )}</span>${(document.querySelector('.layer-1').style.opacity *
      100).toFixed()}%`;
  }

  render() {
    return (
      <div className="opacity-control-1 opacity-control control">
        <div className="dual-label">
          <label htmlFor="colorWell" className="opacitometer meter layer-text">
            <LayerStyle
              id="colorWell"
              defaultValue={defaultColor}
            />
          </label>
          <label htmlFor="opacitySlider1" id="opacitometer1" className="opacitometer-1 opacitometer meter layer-text">
            {(defaultLayerOpacity * 100).toFixed()}%
          </label>
        </div>
        <OpacitySlider
        className="opacity-slider-0"
        defaultValue={defaultLayerOpacity}
        min="0"
        max="1"
        step="0.01"
          onInput={this.layerOpacityInput}
        />

      </div>
    );
  }
}

export default LayerControl;
