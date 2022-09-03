/* eslint-disable no-console */
const chalk = require('chalk');

const appName = 'lre-cli';

const log = (type, message, ...rest) =>
  console.log(chalk`${appName} ${type} ${message}`, ...rest);

module.exports = (logMsg) => {
  if (logMsg !== null && logMsg !== undefined) {
    console.log(logMsg);
  }

  return {
    notice(message, ...rest) {
      log(chalk`{blue notice}`, message, ...rest);
    },
    info(message, ...rest) {
      log(chalk`{green info}`, message, ...rest);
    },
    error(message, ...rest) {
      log(chalk`{red error}`, message, ...rest);
    },
    warning(message, ...rest) {
      log(chalk`{yellow warning}`, message, ...rest);
    },
    success(message, ...rest) {
      log(chalk`{green success}`, message, ...rest);
    },
    debug(message, ...rest) {
      if (process.env.DEBUG) {
        log(chalk`{magenta debug}`, message, ...rest);
      }
    },
  };
};
