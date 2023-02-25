const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8081/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
