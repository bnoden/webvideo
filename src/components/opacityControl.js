import React, { Component } from 'react';

const defaultOpacity = 1.0;
class OpacityControl extends Component {
  render() {
    return (
      <div className="opacity-control">
        <label htmlFor="opacitySlider" id="opacitometer">
          Opacity {(defaultOpacity * 100).toFixed()}%
        </label>
        <br />
        <input
          ref="opacityslider"
          className="opacity-slider"
          type="range"
          min="0.01"
          max="1.0"
          step="0.01"
          defaultValue={defaultOpacity}
          onInput={() => {
            document.getElementById('video') &&
              (document.getElementById(
                'video'
              ).style.opacity = this.refs.opacityslider.value);
            document.getElementById(
              'opacitometer'
            ).innerHTML = `Opacity ${(document.getElementById('video').style
              .opacity * 100).toFixed()}%`;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl;
