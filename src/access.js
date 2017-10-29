// There's nothing here really worth hiding for now.

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
  let zeroes = '';
  if (str.length === 2) {
    zeroes = '0';
  } else if (str.length === 1) {
    zeroes = '00';
  }
  return zeroes;
};
