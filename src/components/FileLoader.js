import React, { Component } from 'react';
import ffmpeg from 'fluent-ffmpeg';
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

      const fs = require('fs');
      const http = require('http');

      const path = file;
      const inFile = ffmpeg(path);

      console.log(requestFileSize(file));
      console.dir(inFile);

      ffmpeg.ffprobe(inFile, (err, metadata) => {
        if (err) {
          console.log('ffprobe failed');
        }
        console.dir(metadata);
      });

      console.log('*-*-* FILE: ' + typeof path + ' ' + inFile);
    })();
  }
};

const requestFileSize = (f) => {
  let size = '';
  const gb = 0x40000000;
  const mb = 0x100000;
  const kb = 0x400;
  if (f.size>gb) size = `${(f.size/gb).toFixed(3)} gigabytes`;
  else if (f.size>mb) size = `${(f.size/mb).toFixed(3)} megabytes`;
  else if (f.size>kb) size = `${(f.size/kb).toFixed(3)} kilobytes`;
  else size = `${f.size} bytes`;
  return `filesize: ${size}`;
}

export default FileLoader;
