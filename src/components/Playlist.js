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
  var URL = window.URL || window.webkitURL;
  (() => {
    var file = document.getElementById('file-select').files[0];
    var videoNode = document.getElementById('video');
    var fileURL = URL.createObjectURL(file);
    videoNode.src = fileURL;
  })();
};

export default Playlist;
