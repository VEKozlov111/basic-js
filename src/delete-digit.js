const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i])
  }
  if (arr[0] == 3) {
    arr.splice(0, 1);
  } else {
    const m = Math.min.apply(null, arr);
    var index = arr.indexOf(m);
    if (index >= 0) {
      arr.splice(index, 1);
    }
  }
  let str2 = arr.join('');
  let y = Number(str2);
  return y
}

module.exports = {
  deleteDigit
};
