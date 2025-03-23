const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://portfolio-server-seven-teal.vercel.app", // Replace with your backend URL
      changeOrigin: true, // Change the origin of the request to match the target
    })
  );
};
