import React, { Component } from 'react';

import './styles/Playlist.css';

class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <div id="drop_zone"><h3><i>Drop files here<br />(not today)</i></h3></div>
        <div style={{textAlign: 'center'}}><h2><br />PLAYLIST<br /><br />GOES<br /><br />HERE</h2></div>
      </div>
    );
  }
}

export default Playlist;
