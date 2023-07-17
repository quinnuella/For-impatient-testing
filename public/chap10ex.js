//(Advanced Encryption Standard) 

const math = require('mathjs')
const CryptoJS = require("crypto-js")
const {Log, LOG_LEVELS} = require('/Users/quellawq/Documents/GHROOT/For-impatient-testing/public/logging.js')
const {Cipher} = require('/Users/quellawq/Documents/GHROOT/For-impatient-testing/public/caesar.js')

//math
const dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dataMean = math.mean(dataSet);
const dataStd = math.std(dataSet);

console.log('Mean:', dataMean);
console.log('Standard Deviation:', dataStd);

//cryto
console.log(CryptoJS.HmacSHA1("Message", "Key"));

//en
const ciphertext = CryptoJS.AES.encrypt('a huge secret', 'joke').toString()
//de
const bytes  = CryptoJS.AES.decrypt(ciphertext, 'joke');
const originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // node /Users/quellawq/Documents/GHROOT/For-impatient-testing/public/chap10ex.js

//logging
// Example usage
/* console.log('before: ', Log.logLevelThreshold)

Log.log('This is an error message', 'ERROR');
Log.log('This is a warning message', 'WARNING');
Log.log('This is an info message', 'INFO');
Log.log('This is a debug message', 'DEBUG');

// Setting log level threshold
Log.setLogLevelThreshold('WARNING');

// Example usage after setting threshold
Log.log('This is an error message2', 'ERROR');
Log.log('This is a warning message2', 'WARNING');
Log.log('This is an info message2', 'INFO');
Log.log('This is a debug message2', 'DEBUG');

//      node /Users/quellawq/Documents/GHROOT/For-impatient-testing/public/chap10ex.js

console.log('after: ', Log.logLevelThreshold) */

//ex2
// Example usage
//const Logg = Log.Log
const log1 = new Log();
const log2 = new Log();

console.log('before: ', log1.logLevelThreshold);

log1.log('This is an error message', 'ERROR');
log1.log('This is a warning message', 'WARNING');
log1.log('This is an info message', 'INFO');
log1.log('This is a debug message', 'DEBUG');

log1.setLogLevelThreshold('WARNING');

log1.log('This is an error message2', 'ERROR');
log1.log('This is a warning message2', 'WARNING');
log1.log('This is an info message2', 'INFO');
log1.log('This is a debug message2', 'DEBUG');

console.log('after: ', log1.logLevelThreshold);
console.log('before: ', log2.logLevelThreshold);

log2.log('This is an error message', 'ERROR');
log2.log('This is a warning message', 'WARNING');
log2.log('This is an info message', 'INFO');
log2.log('This is a debug message', 'DEBUG');

console.log('after: ', log2.logLevelThreshold);


console.log('ex5')
const cipher = new Cipher(3);

// Encrypt a message
const encryptedMessage = cipher.encrypt('Hello, World!');
console.log('Encrypted:', encryptedMessage);

// Decrypt the encrypted message
const decryptedMessage = cipher.decrypt(encryptedMessage);
console.log('Decrypted:', decryptedMessage);

/* const log = new Log(LOG_LEVELS.INFO);

log.enableEncryption(10); // Enable encryption with key 10

log.log('Sensitive data: 123456', 'INFO'); // Encrypted log */