import React, { Component } from 'react';

import './styles/FileLoader.css';
import { qs } from '../access';

class FileLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: 0
    };
  }

  render() {
    return (
      <div className="FileLoader">
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
      const file = qs('input[type=file]').files[0];
      const mediaNode = qs('#loadedMedia');
      const fileURL = URL.createObjectURL(file);
      mediaNode.src = fileURL;

      console.log('*-*-* FILE: ' + typeof fileURL + ' ' + fileURL);
    })();
  }
};

export default FileLoader;
