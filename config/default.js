module.exports = {
  NODE_ENV: (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development',
  log4js: {
    configure: {
      appenders: [{ type: 'console' }]
    }
  }
};
