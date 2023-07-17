const {Log, LOG_LEVELS} = require('/Users/quellawq/Documents/GHROOT/For-impatient-testing/public/logging.js')

const UNICODE_CHARS = 17 * 65536
//const log1 = new Log()

class Cipher {
  constructor(key) { 
    this.key = key
    this.log = new Log()
  }
  encrypt(str) {
    return String.fromCodePoint(...[...str].map(c =>
      (c.codePointAt(0) + this.key) % UNICODE_CHARS))
  }
  decrypt(str) {
    this.log.log('Calling decrypt method', LOG_LEVELS.DEBUG);
    return String.fromCodePoint(...[...str].map(c =>
      (c.codePointAt(0) - this.key + UNICODE_CHARS)
        % UNICODE_CHARS))
  }
}

module.exports = {
  Cipher
}