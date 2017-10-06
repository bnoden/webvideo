
export const leadingZeroes = (str) => {
  let zeroes = '';
  if (str.length === 2) {
    zeroes = '0'
  } else if (str.length === 1) {
    zeroes = '00'
  }
  return zeroes;
}
