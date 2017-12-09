export const qs = e => document.querySelector(e);
export const qsa = e => document.querySelectorAll(e);

export const demoVideo =
  'firebasestorage.googleapis.com/v0/b/bn-wvid.appspot.com/o/TheBunnyMovie.mp4';
export const demoToken =
  '?alt=media&token=ac6c7062-076f-49eb-a747-acd232767daa';

// Return filename without path/token
// If no token, omit arg or use false/any falsy value, else use token variable or any truthy value
export const shortFileName = (file, token) => {
  let filename;
  // If token value is truthy, oauth token should be removed from filename.
  if (token) {
    // arr is only created if needed
    let arr = file.split(/[?]/);
    arr.pop();
    filename = arr[arr.length - 1].split('/');
  } else {
    filename = file.split('/');
  }
  filename = filename[filename.length - 1].split('\\');
  return filename[filename.length - 1];
};

const isMS =
  /MSIE 10/i.test(navigator.userAgent) ||
  /MSIE 9/i.test(navigator.userAgent) ||
  /rv:11.0/i.test(navigator.userAgent) ||
  /Edge\/\d./i.test(navigator.userAgent)
    ? true
    : false;

export const browserIs = {
  Chrome: () => {
    return !isMS && !!window.chrome ? true : false;
  },
  Firefox: () => {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      ? true
      : false;
  },
  MS: () => {
    return isMS ? true : false;
  }
};

export const leadingZeroes = str => {
  return str.length === 2 ? '0' : str.length === 1 ? '00' : '';
};

let fullscreen = 0;

export const fullScreenOn = e => {
  const mediaPlayer = qs('.MediaPlayer');
  e = qs('.App');
  qs('.media-config').style.display = 'none';
  qs('.FileLoader').style.display = 'none';
  mediaPlayer.style.width = `${window.innerWidth}px`;
  mediaPlayer.style.height = `${window.innerHeight}px`;
  qs('video').style.width = mediaPlayer.style.width;
  qs('video').style.height = mediaPlayer.style.height;

  for (let layer = 0; layer < mediaPlayer.children.length; layer++) {
    mediaPlayer.children[layer].style.width = mediaPlayer.style.width;
    mediaPlayer.children[layer].style.height = mediaPlayer.style.height;
  }
  qs('.Controls').style.maxWidth = `${window.innerWidth}px`;

  if (e.requestFullscreen) {
    e.requestFullscreen();
  } else if (e.mozRequestFullScreen) {
    e.mozRequestFullScreen(); // Firefox
  } else if (e.webkitRequestFullscreen) {
    e.webkitRequestFullscreen(); // Chrome and Safari
  } else if (e.msRequestFullscreen) {
    e.msRequestFullscreen();
  }
  fullscreen = 1;

  hideOnFullScreen();
  e.onmousemove = () => {
    showOnFullScreen();
  };
};

export const fullScreenOff = () => {
  const defaultWidth = '800px';
  const defaultHeight = '600px';
  const mediaPlayer = qs('.MediaPlayer');
  qs('.media-config').style.display = 'flex';
  qs('.FileLoader').style.display = 'inherit';
  mediaPlayer.style.width = defaultWidth;
  mediaPlayer.style.height = defaultHeight;
  qs('video').style.width = defaultWidth;
  qs('video').style.height = defaultHeight;
  for (let layer = 0; layer < mediaPlayer.children.length; layer++) {
    mediaPlayer.children[layer].style.width = defaultWidth;
    mediaPlayer.children[layer].style.height = defaultHeight;
  }
  qs('.Controls').style.maxWidth = '818px';
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  fullscreen = 0;
  showOnFullScreen();
};

const hideOnFullScreen = () => {
  if (fullscreen) {
    qs('.btn-play').classList.add('hide');
    qs('.progress-slider').classList.add('hide');
    qs('.now-playing').classList.add('hide');
  }
};

const showOnFullScreen = () => {
  qs('.btn-play').classList.remove('hide');
  qs('.progress-slider').classList.remove('hide');
  qs('.now-playing').classList.remove('hide');

  if (fullscreen) {
    setTimeout(() => {
      hideOnFullScreen();
    }, 1500);
  }
};
