import React, { Component } from 'react';

import { browserIsMS } from '../access';
import { leadingZeroes } from './MeterReader';
import './styles/OpacityControl.css';
import OpacitySlider from './OpacitySlider';

const defaultVideoOpacity = 0.5;
class OpacityControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  videoOpacityInput = (e) => {
    this.setState({value: e.target.value})
    const layers = document.querySelectorAll('.layer-2');
    if (!browserIsMS()) {
      for (let layer of layers) {
        layer.style.opacity = e.target.value;
      }
    } else {
      for (let i = 0; i < layers.length; ++i) {
        layers[i].style.opacity = e.target.value;
      }
    }
    document.querySelector('.opacitometer-0').innerHTML = `Video
    <span className="leading-zeroes">${leadingZeroes(
      (document.querySelector('.layer-2').style.opacity * 100).toFixed()
    )}</span>${(document.querySelector('.layer-2').style.opacity *
      100).toFixed()}%`;
  }

  render() {
    return (
      <div className="opacityControl opacity-control-0 opacity-control control">
        <label
          htmlFor="opacitySlider0"
          id="opacitometer0"
          className="opacitometer-0 opacitometer meter"
        >
          Video {(defaultVideoOpacity * 100).toFixed()}%
        </label>
        <OpacitySlider
          className="opacity-slider-0"
          defaultValue={defaultVideoOpacity}
          min="0"
          max="1"
          step="0.01"
          onInput={this.videoOpacityInput}
          />
      </div>
    );
  }
}

export default OpacityControl;
