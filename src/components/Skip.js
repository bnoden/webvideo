import React, { Component } from 'react';

import { video } from './CurrentVideo';
import './styles/Skip.css';

class Skip extends Component {
  render() {
    const ffInput = () => document.getElementById('input-skip-ff');
    const rwInput = () => document.getElementById('input-skip-rw');
    return (
      <div className="skip">
        <input
          type="number"
          id="input-skip-rw"
          min="-60"
          max="0"
          defaultValue="-15"
        />
        <button
          className="btn-skip-back"
          onClick={() => {
            skip(video(), rwInput().value);
          }}
        >
          REW
        </button>
        <button
          className="btn-skip-forward"
          onClick={() => {
            skip(video(), ffInput().value);
          }}
        >
          FF
        </button>
        <input
          type="number"
          id="input-skip-ff"
          defaultValue="15"
          min="0"
          max="60"
        />
      </div>
    );
  }
}

const skip = (media, tVal) => {
  if (media) {
    const cTime = media.currentTime;
    const val = typeof tVal === Number ? tVal : +tVal;
    const result = cTime + val;
    let minmax = 0 < cTime + val ? media.duration : 0;

    console.log('\ntime before: ' + media.currentTime.toFixed());

    media.currentTime = minmax
      ? minmax > result ? result : minmax
      : result > minmax ? result : minmax;

    console.log('time after: ' + media.currentTime.toFixed());
  }
};

export default Skip;
