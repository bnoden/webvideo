import React from 'react';

import './styles/Skip.css';
import { qs } from '../access';

export const Skip = () =>
  <div className="Skip control">
    <label htmlFor="Skip" className="skip-meter meter">
      Skip
    </label>
    <div className="slider">
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
          skip(rwInput().value);
        }}
      >
        REW
      </button>
      <button
        className="btn-skip-forward"
        onClick={() => {
          skip(ffInput().value);
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
  </div>;

const ffInput = () => qs('#input-skip-ff');
const rwInput = () => qs('#input-skip-rw');

const skip = timeToSkip => {
  const media = qs('#loadedMedia');
  let destination;
  if (media) {
    const _currentTime = media.currentTime;
    const val = typeof timeToSkip === Number ? timeToSkip : +timeToSkip;
    const result = _currentTime + val;

    let minmax = 0 < _currentTime + val ? media.duration : 0;

    if (qs('#btn-loop').checked) {
      destination = minmax
        ? minmax > result ? result : result - minmax
        : result > minmax ? result : result + media.duration;
    } else {
      destination = minmax
        ? minmax > result ? result : minmax
        : result > minmax ? result : minmax;
    }
  }
  media.currentTime = destination;
};
