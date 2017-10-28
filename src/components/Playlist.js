import React, { Component } from 'react';

import './styles/Playlist.css';
import { qs } from '../access';

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: 0
    };
  }

  render() {
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
      </div>
    );
  }
}

export const localSrc = () => {
  if (qs('#file-select').files.length) {
    const URL = window.URL || window.webkitURL;
    (() => {
      const file = qs('#file-select').files[0];
      const videoNode = qs('#loadedVideo');
      const fileURL = URL.createObjectURL(file);
      videoNode.src = fileURL;
    })();
  }
};

export default Playlist;
