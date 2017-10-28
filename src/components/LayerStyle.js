import React, { Component } from 'react';

import { qs } from '../access';

class LayerStyle extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
    qs('#layerOne').style.backgroundColor = e.target.value;
    qs('#layerText').style.color = e.target.value;
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
