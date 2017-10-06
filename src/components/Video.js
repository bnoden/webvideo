import React, { Component } from 'react';

import './styles/VideoPlayer.css';
import { updateTime } from './VideoPlayer';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      src: '',
      className: '',
      onLoadedMetadata: {},
      onInput: {},
      onTimeUpdate: {},
      onSeeked: {}
    };
  }

  render() {
    return (
      <div>
        <video
          id={this.props.id}
          src={this.props.src}
          className={this.props.className}
          ref="curvid"
          onClick={() => {
              this.refs.curvid.paused
                ? this.refs.curvid.play()
                : this.refs.curvid.pause();
              updateTime();
            }}
          onLoadedMetadata={this.props.onLoadedMetadata}
          onInput={this.props.onInput}
          onTimeUpdate={this.props.onTimeUpdate}
          onSeeked={this.props.onSeeked}
          preload="auto"
          controls
        />
      </div>
    );
  }
}

export default Video;
