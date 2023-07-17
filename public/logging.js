/* 
const LOG_LEVELS = {
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
  DEBUG: 4
}

//default level
let logLevelThreshold = LOG_LEVELS.INFO;

//set level
const setLogLevelThreshold = (threshold) => {
  if (LOG_LEVELS[threshold] !== null) {
    logLevelThreshold = LOG_LEVELS[threshold]
  }
}

// Log function
const log = (message, logLevel) => {
  if (LOG_LEVELS.hasOwnProperty(logLevel) && LOG_LEVELS[logLevel] >= logLevelThreshold) {
    console.log(`[${logLevel}] ${message}`);
  }
}

module.exports = {
  LOG_LEVELS,
  logLevelThreshold,
  setLogLevelThreshold,
  log
}

 */

//class syntax
// Constants for log levels
const LOG_LEVELS = {
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
  DEBUG: 4
};

// Log class
class Log {
  constructor() {
    this.logLevelThreshold = LOG_LEVELS.INFO; // Default log level threshold
  }

  // Function to set the log level threshold
  setLogLevelThreshold(threshold) {
    if (LOG_LEVELS.hasOwnProperty(threshold)) {
      this.logLevelThreshold = LOG_LEVELS[threshold];
    }
  }

  // Log function
  log(message, logLevel) {
    if (LOG_LEVELS.hasOwnProperty(logLevel) && LOG_LEVELS[logLevel] <= this.logLevelThreshold) {
      console.log(`[${logLevel}] ${message}`);
    }
  }
}

module.exports = {
  Log,
  LOG_LEVELS,
}