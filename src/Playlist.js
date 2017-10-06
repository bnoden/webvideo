import React, { Component } from 'react';

import './styles/Playlist.css';

class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
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
  if (document.getElementById('file-select').files.length) {
    const URL = window.URL || window.webkitURL;
    (() => {
      const file = document.getElementById('file-select').files[0];
      const videoNode = document.getElementById('video');
      const fileURL = URL.createObjectURL(file);
      videoNode.src = fileURL;
  })();
  }
};

export default Playlist;
