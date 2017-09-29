import React, { Component } from 'react';

class OpacityControl extends Component {
  render() {

    return(
      <div className="opacityControl">
        <label htmlFor="opacitySlider">Opacity</label>
        <br />
        <input
          ref="opacityslider"
          className="opacitySlider"
          type="range"
          min="0.01"
          max="1.0"
          step="0.01"
          defaultValue="1.0"
          onInput={() => {
            document.getElementById('video1').style.opacity = this.refs.opacityslider.value;
          }}
        />
      </div>
    );
  }
}

export default OpacityControl;
