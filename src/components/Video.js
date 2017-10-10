import React, { Component } from 'react';

import './styles/VideoPlayer.css';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaState: ''
    };
  }

  render() {
    return (
      <div>
        <video
          src={this.props.src}
          onPause={this.props.onPause}
          onClick={this.props.onClick}
          onDoubleClick={this.props.onDoubleClick}
          id={this.props.id}
          className={this.props.className}
          onLoadedMetadata={this.props.onLoadedMetadata}
          onInput={this.props.onInput}
          onTimeUpdate={this.props.onTimeUpdate}
          onChange={this.props.onChange}
          preload="auto"
        />
      </div>
    );
  }
}

export default Video;
