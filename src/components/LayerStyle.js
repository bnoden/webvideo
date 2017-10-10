import React, { Component } from 'react';

class LayerStyle extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleInput = (e) => {
    this.setState({value: e.target.value})
    const layerOne = '#layerOne';
    const layerText = '.layer-text';
    const qsLayer = (el) => document.querySelector(el);
    qsLayer(layerOne).style.backgroundColor = e.target.value;
    for (let i = 0; i < qsLayer(layerText).length; i++) {
      qsLayer(layerText)[i].style.color = e.target.value;
    }
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
