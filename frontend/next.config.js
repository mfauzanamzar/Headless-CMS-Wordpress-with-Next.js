

const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  

  },
});

const withImages = require('next-images')
module.exports = withImages({}) 