const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', createProxyMiddleware({
    target: 'https://example.com',
    changeOrigin: true,
    pathRewrite: { '^/': '/' }
}));

app.listen(process.env.PORT || 4000, () => {
    console.log('Proxy çalışıyor...');
});