import React, { Component } from 'react';

import { browserIs, leadingZeroes, qs, qsa } from '../access';
import './styles/OpacityControl.css';
import OpacitySlider from './OpacitySlider';

const defaultOpacity = 0.5;
class OpacityControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  opacityInput = e => {
    this.setState({ value: e.target.value });
    const layers = qsa('.layer-2');
    if (!browserIs.MS()) {
      for (let layer of layers) {
        layer.style.opacity = e.target.value;
      }
    } else {
      for (let i = 0; i < layers.length; ++i) {
        layers[i].style.opacity = e.target.value;
      }
    }
    qs('.opacitometer-0').innerHTML = `Video
    <span className="leading-zeroes">${leadingZeroes(
      (qs('.layer-2').style.opacity * 100).toFixed()
    )}</span>${(qs('.layer-2').style.opacity * 100).toFixed()}%`;
  };

  render() {
    return (
      <div className="opacityControl opacity-control-0 opacity-control control">
        <label
          htmlFor="opacitySlider0"
          id="opacitometer0"
          className="opacitometer-0 opacitometer meter"
        >
          Video {(defaultOpacity * 100).toFixed()}%
        </label>
        <OpacitySlider
          className="opacity-slider-0"
          defaultValue={defaultOpacity}
          min="0"
          max="1"
          step="0.01"
          onInput={this.opacityInput}
        />
      </div>
    );
  }
}

export default OpacityControl;
