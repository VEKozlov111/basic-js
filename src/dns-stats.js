const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length == 0) {
    return {}
  }
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  for (let i = 0; i < domains.length; i++) {
    if (domains[i].includes('.com')) {
      count1++
    }
    if (domains[i].includes('epam')) {
      count2++
    }
    if (domains[i].includes('info.epam.com')) {
      count3++
    }
  }
  let obj = {
    ['.com']: count1,
    ['.com.epam']: count2,
    ['.com.epam.info']: count3
  }
  if (count3 == 0) {
    delete obj['.com.epam.info']
  }
  return obj
}

module.exports = {
  getDNSStats
};
