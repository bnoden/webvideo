
export const demoVideo = 'firebasestorage.googleapis.com/v0/b/bnoden-wv.appspot.com/o/demo_video.mp4';
export const demoToken = '?alt=media&token=7acb3826-62e2-4bfb-b02c-b6c25fdf0c94';

// Return filename without path/token
export const shortFileName = (file, token) => { // If no token, omit arg or use false
  let filename;
  // If token value is truthy, oauth token should be removed from filename.
  if (token) {
    let arr = file.split(/[?]/);
    arr.pop();
    filename = arr[arr.length-1].split('/');
  } else {
    // arr is only created if needed
    filename = file.split('/');
  }
  return filename[filename.length-1];
}
