const FormatTime = (media, str) => {
  const _currentTime = media.currentTime;
  const _remainingTime = media.duration - media.currentTime;
  const _duration = media.duration;
  const _time =
    str === 'remaining'
      ? _remainingTime
      : str === 'current'
        ? _currentTime
        : str === 'duration' ? _duration : _duration;

  const seconds = _time >= 60 ? Math.floor(_time % 60) : Math.floor(_time);
  const minutes = _time >= 60 ? Math.floor(_time / 60)%60 : 0;
  const hours = _time >= 3600 ? Math.floor(_time / 3600) : 0;

  const hourStr = _duration >= 3600 && `${hours}`;
  const minuteStr =
    minutes <= 10 && _duration >= 3600 ? `0${minutes}` : `${minutes}`;
  const secondStr = seconds >= 10 ? `${seconds}` : `0${seconds}`;

  return _duration >= 3600
    ? `${hourStr}:${minuteStr}:${secondStr}`
    : `${minuteStr}:${secondStr}`;
};

export default FormatTime;
