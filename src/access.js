export const qs = e => document.querySelector(e);
export const qsa = e => document.querySelectorAll(e);

export const demoVideo =
  'firebasestorage.googleapis.com/v0/b/bn-wvid.appspot.com/o/TheBunnyMovie.mp4';
export const demoToken =
  '?alt=media&token=ac6c7062-076f-49eb-a747-acd232767daa';

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

export const fullScreenOn = () => {
  const loadedMedia = qs('#loadedMedia');
  const mediaPlayer = qs('.MediaPlayer');
  const layerOne = qs('#layerOne');
  const bufferLayer = qs('#bufferLayer');
  const app = qs('.App');

  qs('.media-config').style.display = 'none';
  qs('.FileLoader').style.display = 'none';

  if (app.requestFullscreen) {
    app.requestFullscreen();
  } else if (app.mozRequestFullScreen) {
    app.mozRequestFullScreen(); // Firefox
  } else if (app.webkitRequestFullscreen) {
    app.webkitRequestFullscreen(); // Chrome and Safari
  } else if (app.msRequestFullscreen) {
    app.msRequestFullscreen();
  }
  fullscreen = 1;
  mediaPlayer.style.width = `${window.innerWidth}px`;
  mediaPlayer.style.height = `${window.innerHeight}px`;
  bufferLayer.style.height = `${window.innerHeight}px`;
  bufferLayer.style.width = `${window.innerWidth}px`;
  loadedMedia.style.height = `${window.innerHeight}px`;
  loadedMedia.style.width = bufferLayer.style.width;

  for (let layer = 0; layer < mediaPlayer.children.length; layer++) {
    mediaPlayer.children[layer].style.height = loadedMedia.style.height;
    mediaPlayer.children[layer].style.width = loadedMedia.style.width;
  }
  layerOne.style.width = loadedMedia.style.width;
  layerOne.style.height = loadedMedia.style.height;

  qs('.Controls').style.maxWidth = `${window.innerWidth}px`;

  hideOnFullScreen();
  app.onmousemove = () => {
    showOnFullScreen();
  };
};

export const fullScreenOff = () => {
  const loadedMedia = qs('#loadedMedia');
  const mediaPlayer = qs('.MediaPlayer');
  const layerOne = qs('#layerOne');
  const bufferLayer = qs('#bufferLayer');
  const defaultWidth = '800px';
  const defaultHeight = '600px';
  layerOne.style.width = defaultWidth;
  layerOne.style.height = defaultHeight;
  bufferLayer.style.width = defaultWidth;
  bufferLayer.style.height = defaultHeight;
  qs('.media-config').style.display = 'flex';
  qs('.FileLoader').style.display = 'inherit';
  mediaPlayer.style.width = defaultWidth;
  mediaPlayer.style.height = defaultHeight;
  loadedMedia.style.width = defaultWidth;
  loadedMedia.style.height = defaultHeight;

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

export const hideOnFullScreen = () => {
  if (fullscreen) {
    qs('.btn-play').classList.add('hide');
    qs('.progress-slider').classList.add('hide');
    qs('.now-playing').classList.add('hide');
  }
};

export const showOnFullScreen = () => {
  qs('.btn-play').classList.remove('hide');
  qs('.progress-slider').classList.remove('hide');
  qs('.now-playing').classList.remove('hide');

  if (fullscreen) {
    setTimeout(() => {
      hideOnFullScreen();
    }, 1500);
  }
};
