const http = require('http');

const keepalive = {};
keepalive.path = process.env.KEEPALIVE_PATH || '/_keepalive';
keepalive.url = `http://${process.env.PROJECT_DOMAIN}.glitch.me${keepalive.path}`,
keepalive.delay = process.env.KEEPALIVE_MINUTES || 3;

setInterval(() => http.get(keepalive.url), keepalive.delay * 60 * 1000);

keepalive.middleware = (req, res, next) => {
  if (req.path === keepalive.path) {
    res.json('Ok');
  } else {
    next();
  }
};

module.exports = keepalive.middleware;
