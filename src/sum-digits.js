const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = String(n);
  let arr = str.split('');
  let sum1 = 0;
  arr = arr.map(Number);
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i];
    }
  } else return n
  let str2 = String(sum1);
  let sum2 = 0;
  if (str2.length == 1) {
    return sum1
  } else {
    let arr2 = str2.split('');
    arr2 = arr2.map(Number);
    for (let i = 0; i < arr2.length; i++) {
      sum2 += arr2[i];
    }
    return sum2
  }

}

module.exports = {
  getSumOfDigits
};
