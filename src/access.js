// There's nothing here really worth hiding for now.

export const demoVideo =
  'firebasestorage.googleapis.com/v0/b/bnoden-video.appspot.com/o/demo_video.mp4';
export const demoToken =
  '?alt=media&token=f5fd805f-1f42-43f5-b715-702cce1616f3';

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
    filename = filename[filename.length - 1].split('\\');
  } else {
    filename = file.split('/');
    filename = filename[filename.length - 1].split('\\');
  }
  return filename[filename.length - 1];
};

export const browserIsMS = () =>
  /MSIE 10/i.test(navigator.userAgent) ||
  /MSIE 9/i.test(navigator.userAgent) ||
  /rv:11.0/i.test(navigator.userAgent) ||
  /Edge\/\d./i.test(navigator.userAgent)
    ? true
    : false;
