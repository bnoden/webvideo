import React, { Component } from 'react';

import './styles/Playlist.css';

class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <div id="drop_zone"><h3><i>Drop files here<br />(not today)</i></h3></div>
      </div>
    );
  }
}

export default Playlist;
