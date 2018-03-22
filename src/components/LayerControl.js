import React, { Component } from 'react';

import { leadingZeroes, qs, qsa } from '../access';
import './styles/OpacityControl.css';
import LayerColor from './LayerColor';
import OpacitySlider from './OpacitySlider';

const defaultLayerOpacity = 1;

class LayerControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#10C880',
      opacity: 1
    };
  }

  setLayerColor = e => {
    this.setState({ color: e.target.value });
    qs('#layerOne').style.backgroundColor = e.target.value;
    qs('#layerText').style.color = e.target.value;
  };

  setLayerOpacity = e => {
    this.setState({ opacity: e.target.value });

    const layers = qsa('.layer-1');
    [...layers].map(layer => (layer.style.opacity = e.target.value));

    qs('.opacitometer-1').innerHTML = `
    <span className="leading-zeroes">${leadingZeroes(
      (qs('.layer-1').style.opacity * 100).toFixed()
    )}</span>${(qs('.layer-1').style.opacity * 100).toFixed()}%`;
  };

  render() {
    return (
      <div className="opacity-control-1 opacity-control control">
        <div className="dual-label">
          <label htmlFor="colorWell" className="opacitometer meter">
            <LayerColor
              className="color-well"
              id="colorWell"
              defaultValue={this.state.color}
              onInput={this.setLayerColor}
            />
          </label>
          <label
            htmlFor="opacitySlider1"
            id="layerText"
            className="opacitometer-1 opacitometer meter"
            style={{ color: this.state.color }}
          >
            {(defaultLayerOpacity * 100).toFixed()}%
          </label>
        </div>
        <OpacitySlider
          className="opacity-slider-0"
          defaultValue={defaultLayerOpacity}
          min="0"
          max="1"
          step="0.01"
          onInput={this.setLayerOpacity}
        />
      </div>
    );
  }
}

export default LayerControl;
