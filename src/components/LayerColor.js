import React, { Component } from 'react';

class LayerColor extends Component {
  constructor(props) {
    super(props);

    this.state = { color: '' };
  }

  render() {
    return (
      <div>
        <input
          type="color"
          className={this.props.className}
          defaultValue={this.props.defaultValue}
          onInput={this.props.onInput}
        />
      </div>
    );
  }
}

export default LayerColor;
