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
            accept="audio/*,video/*,image/*"
            onChange={() => {
              localSrc();
            }}
          />
        </div>
        <p className="file-size">12.679 MB</p>
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
      qs('.file-size').innerText = `${requestFileSize(file)}`;

      // console.dir(qs('input[type=file]').files[0]);
      // console.log('*-*-* FILE: ' + typeof file + ' ' + file);
    })();
  }
};

export const requestFileSize = f => {
  let size = '';
  if (f.size) {
    const gb = 0x40000000;
    const mb = 0x100000;
    const kb = 0x400;
    if (f.size > gb) size = `${(f.size / gb).toFixed(3)} GB`;
    else if (f.size > mb) size = `${(f.size / mb).toFixed(3)} MB`;
    else if (f.size > kb) size = `${(f.size / kb).toFixed(3)} KB`;
    else size = `${f.size} bytes`;
  }
  return size;
};

export default FileLoader;
