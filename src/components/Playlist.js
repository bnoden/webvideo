import React, { Component } from 'react';

import './styles/Playlist.css';
import Video from './Video';

const videolist = [
  {
    origin: 'local',
    video: ''
  },
  {
    origin: 'web',
    video: ''
  }
];

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: 0
    };
  }

  getVideo(index) {
    let currentVideo = index;
    if (currentVideo < 0) {
      currentVideo = videolist.length - 1;
    } else if (currentVideo >= videolist.length) {
      currentVideo = 0;
    }
    this.setState({ currentVideo });
  }

  render() {
    const { origin, video } = videolist[this.state.currentVideo];
    return (
      <div className="Playlist">
        <div id="drop_zone">
          <input
            id="file-select"
            type="file"
            accept="video/*"
            onChange={() => {
              localSrc();
            }}
          />
        </div>

        <div>
          <Video origin={origin} video={video} />
          <p>
            {origin}:
            {video}:
          </p>
          <button onClick={this.getVideo.bind(this, this.state.videolist - 1)} disabled>
            Prev
          </button>
          <button onClick={this.getVideo.bind(this, this.state.videolist + 1)} disabled>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export const localSrc = () => {
  if (document.getElementById('file-select').files.length) {
    const URL = window.URL || window.webkitURL;
    (() => {
      const file = document.getElementById('file-select').files[0];
      const videoNode = document.getElementById('loadedVideo');
      const fileURL = URL.createObjectURL(file);
      videoNode.src = fileURL;
    })();
  }
};

export default Playlist;
