import React, { Component } from 'react';

class OpacitySlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInput = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <input
          type="range"
          className="opacitySlider opacity-slider slider"
          defaultValue={this.props.defaultValue}
          onInput={this.props.onInput}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
        />
      </div>
    );
  }
}

export default OpacitySlider;
