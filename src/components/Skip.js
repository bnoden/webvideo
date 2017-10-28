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

const skip = tVal => {
  const v = qs('#loadedVideo');
  if (v) {
    const cTime = v.currentTime;
    const val = typeof tVal === Number ? tVal : +tVal;
    const result = cTime + val;
    let minmax = 0 < cTime + val ? v.duration : 0;

    v.currentTime = minmax
      ? minmax > result ? result : minmax
      : result > minmax ? result : minmax;
  }
};
