const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://catch-up.site:8000',
      changeOrigin: true,
    }),
  );
};