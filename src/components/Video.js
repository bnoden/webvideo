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
          mediaState={this.props.mediaState}
          onClick={this.props.onClick}
          id={this.props.id}
          className={this.props.className}
          onLoadedMetadata={this.props.onLoadedMetadata}
          onInput={this.props.onInput}
          onTimeUpdate={this.props.onTimeUpdate}
          onChange={this.props.onChange}
          preload="auto"
          controls
        />
      </div>
    );
  }
}

export default Video;
