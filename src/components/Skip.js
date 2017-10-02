import React, { Component } from 'react';

import { video } from './CurrentVideo';
import './styles/Skip.css';

class Skip extends Component {

  render() {
    const ffInput = () => document.getElementById('input-skip-ff').value;
    return (
      <div className="skip">
        <button
          className="skip-forward"
          onClick={() => {
            skipFF(video(), ffInput());
          }}
        >
          FF
        </button>
        <input type="number" id="input-skip-ff" defaultValue="15" />
        <span style={{ fontSize: '12px' }}>seconds</span>
      </div>
    );
  }
}

const skipFF = (media, ffVal) => {
  if (media) {
    const cTime = media.currentTime;
    const val = typeof ffVal === Number ? ffVal : Number(ffVal);

    console.log('\ntime before: ' + media.currentTime.toFixed());
    media.currentTime =
      media.duration - val > cTime + val ? cTime + val : media.duration;
    console.log('time after: ' + media.currentTime.toFixed());
  }
};

export default Skip;
