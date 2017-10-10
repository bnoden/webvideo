import React, { Component } from 'react';

class LayerStyle extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleInput = (e) => {
    this.setState({value: e.target.value})
    const layerOne = '#layerOne';
    const layerText = '#layerText';
    const qsLayer = (el) => document.querySelector(el);
    qsLayer(layerOne).style.backgroundColor = e.target.value;
    qsLayer(layerText).style.color = e.target.value;
  };

  render() {
    return (
      <div>
        <input
          type="color"
          className={this.props.className}
          defaultValue={this.props.defaultValue}
          onInput={this.handleInput}
        />
      </div>
    );
  }
}

export default LayerStyle;
