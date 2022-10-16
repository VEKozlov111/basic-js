const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let a =
    arr.forEach(function (i) { count[i] = (a[i] || 0) + 1; });
  return arr
}

module.exports = {
  encodeLine
};
